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
import {Policy} from '../models';
import {PolicyRepository} from '../repositories';

export class PolicyController {
  constructor(
    @repository(PolicyRepository)
    public policyRepository : PolicyRepository,
  ) {}

  @post('/policies', {
    responses: {
      '200': {
        description: 'Policy model instance',
        content: {'application/json': {schema: {'x-ts-type': Policy}}},
      },
    },
  })
  async create(@requestBody() policy: Policy): Promise<Policy> {
    return await this.policyRepository.create(policy);
  }

  @get('/policies/count', {
    responses: {
      '200': {
        description: 'Policy model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Policy)) where?: Where,
  ): Promise<Count> {
    return await this.policyRepository.count(where);
  }

  @get('/policies', {
    responses: {
      '200': {
        description: 'Array of Policy model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Policy}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Policy)) filter?: Filter,
  ): Promise<Policy[]> {
    return await this.policyRepository.find(filter);
  }

  @patch('/policies', {
    responses: {
      '200': {
        description: 'Policy PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() policy: Policy,
    @param.query.object('where', getWhereSchemaFor(Policy)) where?: Where,
  ): Promise<Count> {
    return await this.policyRepository.updateAll(policy, where);
  }

  @get('/policies/{id}', {
    responses: {
      '200': {
        description: 'Policy model instance',
        content: {'application/json': {schema: {'x-ts-type': Policy}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Policy> {
    return await this.policyRepository.findById(id);
  }

  @patch('/policies/{id}', {
    responses: {
      '204': {
        description: 'Policy PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() policy: Policy,
  ): Promise<void> {
    await this.policyRepository.updateById(id, policy);
  }

  @del('/policies/{id}', {
    responses: {
      '204': {
        description: 'Policy DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.policyRepository.deleteById(id);
  }
}
