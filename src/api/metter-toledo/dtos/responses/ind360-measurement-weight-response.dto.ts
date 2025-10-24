import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO que representa un registro de peso medido por el dispositivo IND360.
 */
export class WeightDto {
  @ApiProperty({
    example: 'kg',
    description:
      'Unidad de medida utilizada para el peso (p. ej., "kg" o "lb").',
  })
  unitOfMeasureCode: string;

  @ApiProperty({
    example: 48.36,
    description: 'Peso bruto detectado por la balanza.',
  })
  gross: number;

  @ApiProperty({
    example: 48.36,
    description: 'Peso neto después de descontar la tara.',
  })
  net: number;

  @ApiProperty({
    example: 0,
    description: 'Peso de la tara aplicada al pesaje actual.',
  })
  tare: number;

  @ApiProperty({
    example: false,
    description: 'Indica si el peso está estable en el momento de la lectura.',
  })
  weightStable: boolean;

  @ApiProperty({
    example: false,
    description:
      'Indica si el indicador está en el punto cero (Center of Zero).',
  })
  centerOfZero: boolean;

  @ApiProperty({
    example: false,
    description: 'Indica si el dispositivo detecta sobrecarga.',
  })
  overload: boolean;

  @ApiProperty({
    example: false,
    description: 'Indica si el dispositivo detecta subcarga.',
  })
  underload: boolean;

  @ApiProperty({
    example: 0,
    description: 'Modo de tara configurado en el dispositivo.',
  })
  tareMode: number;
}

/**
 * DTO que representa la estructura de medición dentro del mensaje principal.
 */
export class MeasurementDto {
  @ApiProperty({
    type: [WeightDto],
    description:
      'Lista de mediciones de peso capturadas por el dispositivo IND360.',
  })
  weight: WeightDto[];
}

/**
 * DTO principal del mensaje devuelto por la API IND360.
 */
export class MessageMeasurementDto {
  @ApiProperty({
    type: MeasurementDto,
    description: 'Contiene los datos de medición obtenidos del dispositivo.',
  })
  measurement: MeasurementDto;
}

/**
 * DTO de respuesta completo del endpoint /Measurement/Weight del IND360.
 */
export class Ind360MeasurementWeightResponseDto {
  @ApiProperty({
    type: MessageMeasurementDto,
    description:
      'Estructura principal del mensaje retornado por la API IND360.',
  })
  message: MessageMeasurementDto;
}
