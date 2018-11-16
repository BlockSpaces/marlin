import {Entity, model, property} from '@loopback/repository';

@model()
export class Lender extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  lenderID?: string;

  @property({
    type: 'string',
  })
  name?: string;

  constructor(data?: Partial<Lender>) {
    super(data);
  }
}
