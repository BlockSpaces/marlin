import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Borrower} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BorrowerRepository extends DefaultCrudRepository<
  Borrower,
  typeof Borrower.prototype.borrowerID
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Borrower, dataSource);
  }
}
