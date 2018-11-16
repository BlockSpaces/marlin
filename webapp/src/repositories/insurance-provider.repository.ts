import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {InsuranceProvider} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InsuranceProviderRepository extends DefaultCrudRepository<
  InsuranceProvider,
  typeof InsuranceProvider.prototype.providerID
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(InsuranceProvider, dataSource);
  }
}
