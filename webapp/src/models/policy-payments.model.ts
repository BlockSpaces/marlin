import {Entity, model, property} from '@loopback/repository';

@model()
export class PolicyPayments extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  policyID?: string;

  @property({
    type: 'date',
  })
  paymentDate?: string;

  @property({
    type: 'number',
  })
  amount?: number;

  constructor(data?: Partial<PolicyPayments>) {
    super(data);
  }
}
