import {Entity, model, property} from '@loopback/repository';

@model()
export class Policy extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  policyID?: string;

  @property({
    type: 'string',
  })
  providerID?: string;

  @property({
    type: 'string',
  })
  insuredID?: string;

  @property({
    type: 'string',
  })
  bebeficiaryID?: string;

  @property({
    type: 'date',
  })
  startDate?: string;

  @property({
    type: 'date',
  })
  endDate?: string;

  @property({
    type: 'number',
  })
  coverageAmount?: number;

  @property({
    type: 'number',
  })
  paymentDayDue?: number;

  @property({
    type: 'number',
  })
  monthlyPayment?: number;

  @property({
    type: 'string',
  })
  status?: string;

  constructor(data?: Partial<Policy>) {
    super(data);
  }
}
