import { ApiProperty } from '@nestjs/swagger';

export class BaseDeviceDto {
  @ApiProperty({
    example: 'Weighing Device',
    description: 'Clase del dispositivo (tipo de equipo).',
  })
  deviceClass: string;

  @ApiProperty({
    example: 'Mettler-Toledo',
    description: 'Fabricante del dispositivo.',
  })
  manufacturer: string;

  @ApiProperty({ example: 'IND360', description: 'Modelo del dispositivo.' })
  model: string;

  @ApiProperty({
    example: '69577236DA',
    description: 'Número de serie del dispositivo.',
  })
  serialNumber: string;

  @ApiProperty({
    example: '1.04.5202',
    description: 'Versión o revisión del software del dispositivo.',
  })
  softwareRevision: string;
}

export class ScaleDto {
  @ApiProperty({
    example: 'Analog',
    description: 'Tipo de escala del dispositivo (p. ej. Analógica o Digital).',
  })
  scaleType: string;

  @ApiProperty({
    example: '60 kg',
    description: 'Capacidad máxima de la balanza.',
  })
  capacity: string;

  @ApiProperty({
    example: '0.02 kg',
    description: 'Incremento o resolución mínima de lectura.',
  })
  increment: string;

  @ApiProperty({
    example: 20,
    description: 'Código geográfico de calibración.',
  })
  geoCode: number;

  @ApiProperty({
    example: 'Standard',
    description:
      'Configuración de filtrado del entorno (por ejemplo: Standard, High, Low).',
  })
  filterEnviroment: string;

  @ApiProperty({
    example: '5',
    description: 'Frecuencia límite del filtro aplicada al dispositivo.',
  })
  filterLimitFrequency: string;
}

export class DeviceComponentDto {
  @ApiProperty({
    type: BaseDeviceDto,
    description: 'Información base del componente del dispositivo.',
  })
  base: BaseDeviceDto;

  @ApiProperty({
    type: [ScaleDto],
    description: 'Lista de escalas configuradas para este dispositivo.',
  })
  scale: ScaleDto[];
}

export class ConfigTransactionDto {
  @ApiProperty({
    type: [DeviceComponentDto],
    description:
      'Lista de componentes de dispositivo dentro de esta transacción de configuración.',
  })
  deviceComponent: DeviceComponentDto[];
}

export class MessageDto {
  @ApiProperty({
    type: [ConfigTransactionDto],
    description:
      'Configuraciones del dispositivo retornadas por la API IND360.',
  })
  configTransaction: ConfigTransactionDto[];
}

/**
 * DTO de respuesta para la configuración de componentes del dispositivo IND360.
 */
export class Ind360ConfigTransactionDeviceComponentResponseDto {
  @ApiProperty({
    type: MessageDto,
    description:
      'Objeto principal que contiene toda la información del dispositivo.',
  })
  message: MessageDto;
}
