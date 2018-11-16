import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Policy} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PolicyRepository extends DefaultCrudRepository<
  Policy,
  typeof Policy.prototype.policyID
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Policy, dataSource);
  }
}
