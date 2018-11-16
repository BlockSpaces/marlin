import {Entity, model, property} from '@loopback/repository';

@model()
export class Loan extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  loanID?: string;

  @property({
    type: 'string',
  })
  loanOnwerID?: string;

  @property({
    type: 'string',
  })
  borrowerID?: string;

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
  originalPrincipal?: number;

  @property({
    type: 'number',
  })
  currentPrincipal?: number;

  @property({
    type: 'number',
  })
  interestRate?: number;

  @property({
    type: 'string',
  })
  loanStatus?: string;

  @property({
    type: 'number',
   
  })
  totalPaid?: number;

  @property({
    type: 'number',
  })
  monthlyPayment?: number;

  @property({
    type: 'number',
  })
  paymentDate?: number;

  constructor(data?: Partial<Loan>) {
    super(data);
  }
}
