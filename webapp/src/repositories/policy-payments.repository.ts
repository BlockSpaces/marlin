import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {PolicyPayments} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PolicyPaymentsRepository extends DefaultCrudRepository<
  PolicyPayments,
  typeof PolicyPayments.prototype.id
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(PolicyPayments, dataSource);
  }
}
