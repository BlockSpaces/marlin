import {Entity, model, property} from '@loopback/repository';

@model()
export class ClaimUpdates extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  updateID?: string;

  @property({
    type: 'string',
  })
  claimHeaderID?: string;

  @property({
    type: 'string',
  })
  HLOID?: string;

  @property({
    type: 'string',
  })
  status?: string;

  @property({
    type: 'date',
  })
  date?: string;

  @property({
    type: 'string',
  })
  notes?: string;

  constructor(data?: Partial<ClaimUpdates>) {
    super(data);
  }
}
