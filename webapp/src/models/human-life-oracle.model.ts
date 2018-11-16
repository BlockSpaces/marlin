import {Entity, model, property} from '@loopback/repository';

@model()
export class HumanLifeOracle extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  HOLID?: string;

  @property({
    type: 'string',
  })
  SSN?: string;

  @property({
    type: 'date',
  })
  instanceDate?: string;

  @property({
    type: 'string',
  })
  signature?: string;

  constructor(data?: Partial<HumanLifeOracle>) {
    super(data);
  }
}
