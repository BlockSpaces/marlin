import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {HumanLifeOracle} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HumanLifeOracleRepository extends DefaultCrudRepository<
  HumanLifeOracle,
  typeof HumanLifeOracle.prototype.HOLID
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(HumanLifeOracle, dataSource);
  }
}
