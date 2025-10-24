import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { IInd360MeasurementWeightResponse } from '../interfaces/ind360-measurement-weight.interface';
import { APP_CONFIG, AppConfigType } from '@core/config/config-loader';
import { ConfigType } from '@nestjs/config';
import axios from 'axios';
import { CustomHttpResponseHelper } from 'src/helpers/custom-http-response-helper.helper';
import { IInd360ConfigTransactionDeviceComponentResponse } from '../interfaces/ind360-device-component.interface';

@Injectable()
export class Ind360Service {
  private readonly logger = new Logger(Ind360Service.name);

  constructor(
    @Inject(APP_CONFIG.KEY)
    private configService: ConfigType<AppConfigType>,
  ) {}

  async getMeasurementWeight(): Promise<IInd360MeasurementWeightResponse> {
    this.logger.log(`getMeasurementWeight:`);
    try {
      const response = await axios.get<IInd360MeasurementWeightResponse>(
        `${this.configService.metterToledo.baseUrl}Measurement/Weight`,
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        CustomHttpResponseHelper.handleAxiosError(error);
      }
      this.logger.error(`Error inesperado al ejecutar la petición: ${error}`);
      throw new HttpException(
        'Error inesperado al ejecutar la petición.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getConfigTransactionDeviceComponent(): Promise<IInd360ConfigTransactionDeviceComponentResponse> {
    this.logger.log(`getConfigTransactionDeviceComponent:`);

    try {
      const response =
        await axios.get<IInd360ConfigTransactionDeviceComponentResponse>(
          `${this.configService.metterToledo.baseUrl}ConfigTransaction/DeviceComponent`,
        );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        CustomHttpResponseHelper.handleAxiosError(error);
      }
      this.logger.error(`Error inesperado al ejecutar la petición: ${error}`);
      throw new HttpException(
        'Error inesperado al ejecutar la petición.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
