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
import {Borrower} from '../models';
import {BorrowerRepository} from '../repositories';

export class BorrowerController {
  constructor(
    @repository(BorrowerRepository)
    public borrowerRepository : BorrowerRepository,
  ) {}

  @post('/borrowers', {
    responses: {
      '200': {
        description: 'Borrower model instance',
        content: {'application/json': {schema: {'x-ts-type': Borrower}}},
      },
    },
  })
  async create(@requestBody() borrower: Borrower): Promise<Borrower> {
    return await this.borrowerRepository.create(borrower);
  }

  @get('/borrowers/count', {
    responses: {
      '200': {
        description: 'Borrower model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Borrower)) where?: Where,
  ): Promise<Count> {
    return await this.borrowerRepository.count(where);
  }

  @get('/borrowers', {
    responses: {
      '200': {
        description: 'Array of Borrower model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Borrower}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Borrower)) filter?: Filter,
  ): Promise<Borrower[]> {
    return await this.borrowerRepository.find(filter);
  }

  @patch('/borrowers', {
    responses: {
      '200': {
        description: 'Borrower PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() borrower: Borrower,
    @param.query.object('where', getWhereSchemaFor(Borrower)) where?: Where,
  ): Promise<Count> {
    return await this.borrowerRepository.updateAll(borrower, where);
  }

  @get('/borrowers/{id}', {
    responses: {
      '200': {
        description: 'Borrower model instance',
        content: {'application/json': {schema: {'x-ts-type': Borrower}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Borrower> {
    return await this.borrowerRepository.findById(id);
  }

  @patch('/borrowers/{id}', {
    responses: {
      '204': {
        description: 'Borrower PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() borrower: Borrower,
  ): Promise<void> {
    await this.borrowerRepository.updateById(id, borrower);
  }

  @del('/borrowers/{id}', {
    responses: {
      '204': {
        description: 'Borrower DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.borrowerRepository.deleteById(id);
  }
}
