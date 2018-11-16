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
import {PolicyPayments} from '../models';
import {PolicyPaymentsRepository} from '../repositories';

export class PolicyPaymentsController {
  constructor(
    @repository(PolicyPaymentsRepository)
    public policyPaymentsRepository : PolicyPaymentsRepository,
  ) {}

  @post('/policy-payments', {
    responses: {
      '200': {
        description: 'PolicyPayments model instance',
        content: {'application/json': {schema: {'x-ts-type': PolicyPayments}}},
      },
    },
  })
  async create(@requestBody() policyPayments: PolicyPayments): Promise<PolicyPayments> {
    return await this.policyPaymentsRepository.create(policyPayments);
  }

  @get('/policy-payments/count', {
    responses: {
      '200': {
        description: 'PolicyPayments model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(PolicyPayments)) where?: Where,
  ): Promise<Count> {
    return await this.policyPaymentsRepository.count(where);
  }

  @get('/policy-payments', {
    responses: {
      '200': {
        description: 'Array of PolicyPayments model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': PolicyPayments}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(PolicyPayments)) filter?: Filter,
  ): Promise<PolicyPayments[]> {
    return await this.policyPaymentsRepository.find(filter);
  }

  @patch('/policy-payments', {
    responses: {
      '200': {
        description: 'PolicyPayments PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() policyPayments: PolicyPayments,
    @param.query.object('where', getWhereSchemaFor(PolicyPayments)) where?: Where,
  ): Promise<Count> {
    return await this.policyPaymentsRepository.updateAll(policyPayments, where);
  }

  @get('/policy-payments/{id}', {
    responses: {
      '200': {
        description: 'PolicyPayments model instance',
        content: {'application/json': {schema: {'x-ts-type': PolicyPayments}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<PolicyPayments> {
    return await this.policyPaymentsRepository.findById(id);
  }

  @patch('/policy-payments/{id}', {
    responses: {
      '204': {
        description: 'PolicyPayments PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() policyPayments: PolicyPayments,
  ): Promise<void> {
    await this.policyPaymentsRepository.updateById(id, policyPayments);
  }

  @del('/policy-payments/{id}', {
    responses: {
      '204': {
        description: 'PolicyPayments DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.policyPaymentsRepository.deleteById(id);
  }
}
