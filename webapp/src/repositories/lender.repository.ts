import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Lender} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LenderRepository extends DefaultCrudRepository<
  Lender,
  typeof Lender.prototype.lenderID
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Lender, dataSource);
  }
}
