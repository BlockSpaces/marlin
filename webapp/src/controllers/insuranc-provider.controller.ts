import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {InsuranceProvider} from '../models';
import {InsuranceProviderRepository} from '../repositories';

export class InsurancProviderController {
  constructor(
    @repository(InsuranceProviderRepository)
    public insuranceProviderRepository : InsuranceProviderRepository,
  ) {}

  @post('/insurance-providers', {
    responses: {
      '200': {
        description: 'InsuranceProvider model instance',
        content: {'application/json': {schema: {'x-ts-type': InsuranceProvider}}},
      },
    },
  })
  async create(@requestBody() insuranceProvider: InsuranceProvider): Promise<InsuranceProvider> {
    return await this.insuranceProviderRepository.create(insuranceProvider);
  }

  @get('/insurance-providers/count', {
    responses: {
      '200': {
        description: 'InsuranceProvider model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(InsuranceProvider)) where?: Where,
  ): Promise<Count> {
    return await this.insuranceProviderRepository.count(where);
  }

  @get('/insurance-providers', {
    responses: {
      '200': {
        description: 'Array of InsuranceProvider model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': InsuranceProvider}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(InsuranceProvider)) filter?: Filter,
  ): Promise<InsuranceProvider[]> {
    return await this.insuranceProviderRepository.find(filter);
  }

  @patch('/insurance-providers', {
    responses: {
      '200': {
        description: 'InsuranceProvider PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() insuranceProvider: InsuranceProvider,
    @param.query.object('where', getWhereSchemaFor(InsuranceProvider)) where?: Where,
  ): Promise<Count> {
    return await this.insuranceProviderRepository.updateAll(insuranceProvider, where);
  }

  @get('/insurance-providers/{id}', {
    responses: {
      '200': {
        description: 'InsuranceProvider model instance',
        content: {'application/json': {schema: {'x-ts-type': InsuranceProvider}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<InsuranceProvider> {
    return await this.insuranceProviderRepository.findById(id);
  }

  @patch('/insurance-providers/{id}', {
    responses: {
      '204': {
        description: 'InsuranceProvider PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() insuranceProvider: InsuranceProvider,
  ): Promise<void> {
    await this.insuranceProviderRepository.updateById(id, insuranceProvider);
  }

  @del('/insurance-providers/{id}', {
    responses: {
      '204': {
        description: 'InsuranceProvider DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.insuranceProviderRepository.deleteById(id);
  }
}
