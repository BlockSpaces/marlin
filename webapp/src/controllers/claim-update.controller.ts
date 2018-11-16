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
import {ClaimUpdates} from '../models';
import {ClaimUpdatesRepository} from '../repositories';

export class ClaimUpdateController {
  constructor(
    @repository(ClaimUpdatesRepository)
    public claimUpdatesRepository : ClaimUpdatesRepository,
  ) {}

  @post('/claim-updates', {
    responses: {
      '200': {
        description: 'ClaimUpdates model instance',
        content: {'application/json': {schema: {'x-ts-type': ClaimUpdates}}},
      },
    },
  })
  async create(@requestBody() claimUpdates: ClaimUpdates): Promise<ClaimUpdates> {
    return await this.claimUpdatesRepository.create(claimUpdates);
  }

  @get('/claim-updates/count', {
    responses: {
      '200': {
        description: 'ClaimUpdates model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ClaimUpdates)) where?: Where,
  ): Promise<Count> {
    return await this.claimUpdatesRepository.count(where);
  }

  @get('/claim-updates', {
    responses: {
      '200': {
        description: 'Array of ClaimUpdates model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': ClaimUpdates}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ClaimUpdates)) filter?: Filter,
  ): Promise<ClaimUpdates[]> {
    return await this.claimUpdatesRepository.find(filter);
  }

  @patch('/claim-updates', {
    responses: {
      '200': {
        description: 'ClaimUpdates PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() claimUpdates: ClaimUpdates,
    @param.query.object('where', getWhereSchemaFor(ClaimUpdates)) where?: Where,
  ): Promise<Count> {
    return await this.claimUpdatesRepository.updateAll(claimUpdates, where);
  }

  @get('/claim-updates/{id}', {
    responses: {
      '200': {
        description: 'ClaimUpdates model instance',
        content: {'application/json': {schema: {'x-ts-type': ClaimUpdates}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<ClaimUpdates> {
    return await this.claimUpdatesRepository.findById(id);
  }

  @patch('/claim-updates/{id}', {
    responses: {
      '204': {
        description: 'ClaimUpdates PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() claimUpdates: ClaimUpdates,
  ): Promise<void> {
    await this.claimUpdatesRepository.updateById(id, claimUpdates);
  }

  @del('/claim-updates/{id}', {
    responses: {
      '204': {
        description: 'ClaimUpdates DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.claimUpdatesRepository.deleteById(id);
  }
}
