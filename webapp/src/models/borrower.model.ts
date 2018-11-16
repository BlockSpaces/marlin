import {Entity, model, property} from '@loopback/repository';

@model()
export class Borrower extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  borrowerID?: string;

  @property({
    type: 'string',
  })
  SSN?: string;

  @property({
    type: 'string',
  })
  addressLine1?: string;

  @property({
    type: 'string',
  })
  addressLine2?: string;

  @property({
    type: 'string',
  })
  city?: string;

  @property({
    type: 'string',
  })
  state?: string;

  @property({
    type: 'string',
  })
  postalCode?: string;

  @property({
    type: 'date',
  })
  birthDate?: string;

  @property({
    type: 'string',
  })
  sex?: string;

  @property({
    type: 'string',
  })
  race?: string;

  @property({
    type: 'number',
  })
  heightInCM?: number;

  @property({
    type: 'number',
  })
  weightInKG?: number;

  constructor(data?: Partial<Borrower>) {
    super(data);
  }
}
