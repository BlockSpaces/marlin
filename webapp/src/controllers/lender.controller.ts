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
import {Lender} from '../models';
import {LenderRepository} from '../repositories';

export class LenderController {
  constructor(
    @repository(LenderRepository)
    public lenderRepository : LenderRepository,
  ) {}

  @post('/lenders', {
    responses: {
      '200': {
        description: 'Lender model instance',
        content: {'application/json': {schema: {'x-ts-type': Lender}}},
      },
    },
  })
  async create(@requestBody() lender: Lender): Promise<Lender> {
    return await this.lenderRepository.create(lender);
  }

  @get('/lenders/count', {
    responses: {
      '200': {
        description: 'Lender model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Lender)) where?: Where,
  ): Promise<Count> {
    return await this.lenderRepository.count(where);
  }

  @get('/lenders', {
    responses: {
      '200': {
        description: 'Array of Lender model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Lender}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Lender)) filter?: Filter,
  ): Promise<Lender[]> {
    return await this.lenderRepository.find(filter);
  }

  @patch('/lenders', {
    responses: {
      '200': {
        description: 'Lender PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() lender: Lender,
    @param.query.object('where', getWhereSchemaFor(Lender)) where?: Where,
  ): Promise<Count> {
    return await this.lenderRepository.updateAll(lender, where);
  }

  @get('/lenders/{id}', {
    responses: {
      '200': {
        description: 'Lender model instance',
        content: {'application/json': {schema: {'x-ts-type': Lender}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Lender> {
    return await this.lenderRepository.findById(id);
  }

  @patch('/lenders/{id}', {
    responses: {
      '204': {
        description: 'Lender PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() lender: Lender,
  ): Promise<void> {
    await this.lenderRepository.updateById(id, lender);
  }

  @del('/lenders/{id}', {
    responses: {
      '204': {
        description: 'Lender DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.lenderRepository.deleteById(id);
  }
}
