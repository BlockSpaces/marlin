import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {PolciyClaimHeaders} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PolciyClaimHeadersRepository extends DefaultCrudRepository<
  PolciyClaimHeaders,
  typeof PolciyClaimHeaders.prototype.claimHeaderID
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(PolciyClaimHeaders, dataSource);
  }
}
