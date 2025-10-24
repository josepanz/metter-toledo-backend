export interface IInd360MeasurementWeightResponse {
  Message: {
    Measurement: {
      Weight: {
        UnitOfMeasureCode: string;
        Gross: number;
        Net: number;
        Tare: number;
        WeightStable: boolean;
        CenterOfZero: boolean;
        Overload: boolean;
        Underload: boolean;
        TareMode: number;
      }[];
    };
  };
}
