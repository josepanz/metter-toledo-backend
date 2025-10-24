import { DeviceComponentService } from '@modules/device-component/device-component.service';
import { MeasurementService } from '@modules/measurement/measurement.service';
import { IInd360ConfigTransactionDeviceComponentResponse } from '@modules/ind360/interfaces/ind360-device-component.interface';
import { IInd360MeasurementWeightResponse } from '@modules/ind360/interfaces/ind360-measurement-weight.interface';
import { Ind360Service } from '@modules/ind360/services/ind360.service';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MetterToledoService {
  private readonly logger = new Logger(MetterToledoService.name);

  constructor(
    private readonly ind360Service: Ind360Service,
    private readonly measurementService: MeasurementService,
    private readonly deviceComponentService: DeviceComponentService,
  ) {}

  async captureAndSaveWeight(): Promise<IInd360MeasurementWeightResponse> {
    const weightData = await this.ind360Service.getMeasurementWeight();

    const measurements = weightData.Message.Measurement.Weight.map(
      (weight) => ({
        unitOfMeasure: weight.UnitOfMeasureCode,
        gross: weight.Gross,
        net: weight.Net,
        tare: weight.Tare,
        weightStable: weight.WeightStable,
        centerOfZero: weight.CenterOfZero,
        overload: weight.Overload,
        underload: weight.Underload,
        tareMode: weight.TareMode,
      }),
    );

    if (!measurements.length) {
      this.logger.warn('No measurement data found to save.');
      return weightData;
    }

    const newMeasurement =
      await this.measurementService.createMany(measurements);
    this.logger.log(`New measurement records created: ${newMeasurement.count}`);
    return weightData;
  }

  async getAndSaveDeviceConfig(): Promise<IInd360ConfigTransactionDeviceComponentResponse> {
    const deviceConfigData =
      await this.ind360Service.getConfigTransactionDeviceComponent();
    const components = deviceConfigData.Message.ConfigTransaction.flatMap(
      (transaction) =>
        transaction.DeviceComponent.map((component) => {
          const base = component.Base;
          const scale = component.Scale?.[0]; // normalmente hay solo uno

          return {
            deviceClass: base.DeviceClass,
            manufacturer: base.Manufacturer,
            model: base.Model,
            serialNumber: base.SerialNumber,
            softwareRevision: base.SoftwareRevision,
            scaleType: scale?.ScaleType || null,
            capacity: scale?.Capacity || null,
            increment: scale?.Increment || null,
            geoCode: scale?.GeoCode || null,
            filterEnvironment: scale?.FilterEnviroment || null,
            filterLimitFrequency: scale?.FilterLimitFrequency || null,
          };
        }),
    );

    if (!components.length) {
      this.logger.warn(`No device components found to save.`);
      return deviceConfigData;
    }

    const newDeviceConfig =
      await this.deviceComponentService.createMany(components);
    this.logger.log(
      `New new device config records created: ${newDeviceConfig.count}`,
    );
    return deviceConfigData;
  }
}
