import {Entity, model, property} from '@loopback/repository';

@model()
export class Person extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  constructor(data?: Partial<Person>) {
    super(data);
  }
}
