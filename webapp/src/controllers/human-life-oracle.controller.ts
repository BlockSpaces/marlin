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
import {HumanLifeOracle} from '../models';
import {HumanLifeOracleRepository} from '../repositories';

export class HumanLifeOracleController {
  constructor(
    @repository(HumanLifeOracleRepository)
    public humanLifeOracleRepository : HumanLifeOracleRepository,
  ) {}

  @post('/human-life-oracles', {
    responses: {
      '200': {
        description: 'HumanLifeOracle model instance',
        content: {'application/json': {schema: {'x-ts-type': HumanLifeOracle}}},
      },
    },
  })
  async create(@requestBody() humanLifeOracle: HumanLifeOracle): Promise<HumanLifeOracle> {
    return await this.humanLifeOracleRepository.create(humanLifeOracle);
  }

  @get('/human-life-oracles/count', {
    responses: {
      '200': {
        description: 'HumanLifeOracle model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(HumanLifeOracle)) where?: Where,
  ): Promise<Count> {
    return await this.humanLifeOracleRepository.count(where);
  }

  @get('/human-life-oracles', {
    responses: {
      '200': {
        description: 'Array of HumanLifeOracle model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': HumanLifeOracle}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(HumanLifeOracle)) filter?: Filter,
  ): Promise<HumanLifeOracle[]> {
    return await this.humanLifeOracleRepository.find(filter);
  }

  @patch('/human-life-oracles', {
    responses: {
      '200': {
        description: 'HumanLifeOracle PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() humanLifeOracle: HumanLifeOracle,
    @param.query.object('where', getWhereSchemaFor(HumanLifeOracle)) where?: Where,
  ): Promise<Count> {
    return await this.humanLifeOracleRepository.updateAll(humanLifeOracle, where);
  }

  @get('/human-life-oracles/{id}', {
    responses: {
      '200': {
        description: 'HumanLifeOracle model instance',
        content: {'application/json': {schema: {'x-ts-type': HumanLifeOracle}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<HumanLifeOracle> {
    return await this.humanLifeOracleRepository.findById(id);
  }

  @patch('/human-life-oracles/{id}', {
    responses: {
      '204': {
        description: 'HumanLifeOracle PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() humanLifeOracle: HumanLifeOracle,
  ): Promise<void> {
    await this.humanLifeOracleRepository.updateById(id, humanLifeOracle);
  }

  @del('/human-life-oracles/{id}', {
    responses: {
      '204': {
        description: 'HumanLifeOracle DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.humanLifeOracleRepository.deleteById(id);
  }
}
