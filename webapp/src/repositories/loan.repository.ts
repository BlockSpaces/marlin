import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Loan} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LoanRepository extends DefaultCrudRepository<
  Loan,
  typeof Loan.prototype.loanID
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Loan, dataSource);
  }
}
