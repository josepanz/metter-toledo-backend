export interface IInd360ConfigTransactionDeviceComponentResponse {
  Message: {
    ConfigTransaction: {
      DeviceComponent: {
        Base: {
          DeviceClass: string;
          Manufacturer: string;
          Model: string;
          SerialNumber: string;
          SoftwareRevision: string;
        };
        Scale: {
          ScaleType: string;
          Capacity: string;
          Increment: string;
          GeoCode: number;
          FilterEnviroment: string;
          FilterLimitFrequency: string;
        }[];
      }[];
    }[];
  };
}
