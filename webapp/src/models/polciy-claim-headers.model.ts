import {Entity, model, property} from '@loopback/repository';

@model()
export class PolciyClaimHeaders extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  claimHeaderID?: string;

  @property({
    type: 'string',
  })
  policyID?: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'string',
  })
  status?: string;

  @property({
    type: 'number',
  })
  settlementAmount?: number;

  @property({
    type: 'date',
  })
  startDate?: string;

  @property({
    type: 'date',
  })
  endDate?: string;

  constructor(data?: Partial<PolciyClaimHeaders>) {
    super(data);
  }
}
