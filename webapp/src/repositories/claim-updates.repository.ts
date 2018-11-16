import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {ClaimUpdates} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ClaimUpdatesRepository extends DefaultCrudRepository<
  ClaimUpdates,
  typeof ClaimUpdates.prototype.updateID
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(ClaimUpdates, dataSource);
  }
}
