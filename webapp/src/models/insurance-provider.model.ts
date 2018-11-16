import {Entity, model, property} from '@loopback/repository';

@model()
export class InsuranceProvider extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  providerID?: string;

  @property({
    type: 'string',
  })
  name?: string;

  constructor(data?: Partial<InsuranceProvider>) {
    super(data);
  }
}
