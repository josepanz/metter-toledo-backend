import {
  Controller,
  Get,
  UnauthorizedException,
  Version,
} from '@nestjs/common';
import { MetterToledoService } from '../services/metter-toledo.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { IInd360MeasurementWeightResponse } from '@modules/ind360/interfaces/ind360-measurement-weight.interface';
import { IInd360ConfigTransactionDeviceComponentResponse } from '@modules/ind360/interfaces/ind360-device-component.interface';
import { Ind360ConfigTransactionDeviceComponentResponseDto } from '../dtos/responses/ind360-config-transaction-device-component.response.dto';
import { Ind360MeasurementWeightResponseDto } from '../dtos/responses/ind360-measurement-weight-response.dto';

@ApiTags('Toledo')
@Controller('toledo')
export class MetterToledoController {
  constructor(private readonly metterToledoService: MetterToledoService) {}

  @Get('weight')
  @Version('1')
  @ApiOperation({
    summary: 'Obtener los datos de medición del peso.',
    description: 'Obtener los datos de medición del peso.',
  })
  @ApiCreatedResponse({
    description: 'Datos de medición del peso obtenido satisfactoriamente.',
    type: Ind360MeasurementWeightResponseDto,
  })
  @ApiBadRequestResponse({
    description:
      'Solicitud mal formada, verifique los datos y/o parametros enviados.',
    example: {
      statusCode: 400,
      message:
        'Solicitud mal formada, verifique los datos y/o parametros enviados.',
    },
  })
  @ApiUnauthorizedResponse({
    description: 'Credenciales inválidas.',
    type: UnauthorizedException,
    example: {
      statusCode: 401,
      message: 'Credenciales inválidas.',
    },
  })
  @ApiForbiddenResponse({
    description: 'Usuario bloqueado.',
    example: {
      statusCode: 403,
      message: 'Usuario bloqueado.',
    },
  })
  @ApiInternalServerErrorResponse({
    description: 'Error interno del servidor al procesar la solicitud.',
    example: {
      statusCode: 500,
      message: 'Error interno del servidor al procesar la solicitud.',
    },
  })
  async getAndSaveWeight(): Promise<IInd360MeasurementWeightResponse> {
    return await this.metterToledoService.captureAndSaveWeight();
  }

  @Get('device-config')
  @Version('1')
  @ApiOperation({
    summary:
      'Obtener los datos de configuracion de transaccion del componente del dispositivo.',
    description:
      'Obtener los datos de configuracion de transaccion del componente del dispositivo.',
  })
  @ApiCreatedResponse({
    description:
      'Configuracion de transaccion del componente del dispositivo obtenido satisfactoriamente.',
    type: Ind360ConfigTransactionDeviceComponentResponseDto,
  })
  @ApiBadRequestResponse({
    description:
      'Solicitud mal formada, verifique los datos y/o parametros enviados.',
    example: {
      statusCode: 400,
      message:
        'Solicitud mal formada, verifique los datos y/o parametros enviados.',
    },
  })
  @ApiUnauthorizedResponse({
    description: 'Credenciales inválidas.',
    type: UnauthorizedException,
    example: {
      statusCode: 401,
      message: 'Credenciales inválidas.',
    },
  })
  @ApiForbiddenResponse({
    description: 'Usuario bloqueado.',
    example: {
      statusCode: 403,
      message: 'Usuario bloqueado.',
    },
  })
  @ApiInternalServerErrorResponse({
    description: 'Error interno del servidor al procesar la solicitud.',
    example: {
      statusCode: 500,
      message: 'Error interno del servidor al procesar la solicitud.',
    },
  })
  async getDeviceConfigAndSave(): Promise<IInd360ConfigTransactionDeviceComponentResponse> {
    return this.metterToledoService.getAndSaveDeviceConfig();
  }
}
