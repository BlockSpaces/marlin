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
import {Loan} from '../models';
import {LoanRepository} from '../repositories';

export class LoanController {
  constructor(
    @repository(LoanRepository)
    public loanRepository : LoanRepository,
  ) {}

  @post('/loans', {
    responses: {
      '200': {
        description: 'Loan model instance',
        content: {'application/json': {schema: {'x-ts-type': Loan}}},
      },
    },
  })
  async create(@requestBody() loan: Loan): Promise<Loan> {
    return await this.loanRepository.create(loan);
  }

  @get('/loans/count', {
    responses: {
      '200': {
        description: 'Loan model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Loan)) where?: Where,
  ): Promise<Count> {
    return await this.loanRepository.count(where);
  }

  @get('/loans', {
    responses: {
      '200': {
        description: 'Array of Loan model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Loan}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Loan)) filter?: Filter,
  ): Promise<Loan[]> {
    return await this.loanRepository.find(filter);
  }

  @patch('/loans', {
    responses: {
      '200': {
        description: 'Loan PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() loan: Loan,
    @param.query.object('where', getWhereSchemaFor(Loan)) where?: Where,
  ): Promise<Count> {
    return await this.loanRepository.updateAll(loan, where);
  }

  @get('/loans/{id}', {
    responses: {
      '200': {
        description: 'Loan model instance',
        content: {'application/json': {schema: {'x-ts-type': Loan}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Loan> {
    return await this.loanRepository.findById(id);
  }

  @patch('/loans/{id}', {
    responses: {
      '204': {
        description: 'Loan PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() loan: Loan,
  ): Promise<void> {
    await this.loanRepository.updateById(id, loan);
  }

  @del('/loans/{id}', {
    responses: {
      '204': {
        description: 'Loan DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.loanRepository.deleteById(id);
  }
}
