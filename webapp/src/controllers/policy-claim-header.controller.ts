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
import {PolciyClaimHeaders} from '../models';
import {PolciyClaimHeadersRepository} from '../repositories';

export class PolicyClaimHeaderController {
  constructor(
    @repository(PolciyClaimHeadersRepository)
    public polciyClaimHeadersRepository : PolciyClaimHeadersRepository,
  ) {}

  @post('/polciy-claim-headers', {
    responses: {
      '200': {
        description: 'PolciyClaimHeaders model instance',
        content: {'application/json': {schema: {'x-ts-type': PolciyClaimHeaders}}},
      },
    },
  })
  async create(@requestBody() polciyClaimHeaders: PolciyClaimHeaders): Promise<PolciyClaimHeaders> {
    return await this.polciyClaimHeadersRepository.create(polciyClaimHeaders);
  }

  @get('/polciy-claim-headers/count', {
    responses: {
      '200': {
        description: 'PolciyClaimHeaders model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(PolciyClaimHeaders)) where?: Where,
  ): Promise<Count> {
    return await this.polciyClaimHeadersRepository.count(where);
  }

  @get('/polciy-claim-headers', {
    responses: {
      '200': {
        description: 'Array of PolciyClaimHeaders model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': PolciyClaimHeaders}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(PolciyClaimHeaders)) filter?: Filter,
  ): Promise<PolciyClaimHeaders[]> {
    return await this.polciyClaimHeadersRepository.find(filter);
  }

  @patch('/polciy-claim-headers', {
    responses: {
      '200': {
        description: 'PolciyClaimHeaders PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() polciyClaimHeaders: PolciyClaimHeaders,
    @param.query.object('where', getWhereSchemaFor(PolciyClaimHeaders)) where?: Where,
  ): Promise<Count> {
    return await this.polciyClaimHeadersRepository.updateAll(polciyClaimHeaders, where);
  }

  @get('/polciy-claim-headers/{id}', {
    responses: {
      '200': {
        description: 'PolciyClaimHeaders model instance',
        content: {'application/json': {schema: {'x-ts-type': PolciyClaimHeaders}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<PolciyClaimHeaders> {
    return await this.polciyClaimHeadersRepository.findById(id);
  }

  @patch('/polciy-claim-headers/{id}', {
    responses: {
      '204': {
        description: 'PolciyClaimHeaders PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() polciyClaimHeaders: PolciyClaimHeaders,
  ): Promise<void> {
    await this.polciyClaimHeadersRepository.updateById(id, polciyClaimHeaders);
  }

  @del('/polciy-claim-headers/{id}', {
    responses: {
      '204': {
        description: 'PolciyClaimHeaders DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.polciyClaimHeadersRepository.deleteById(id);
  }
}
