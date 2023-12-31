import { Objective } from './Objective';
import { Transaction } from './transaction';

export class Account {
  constructor(
    public id: number,
    public name: string,
    public balance: number,
    public objective: Objective[],
    public transactions: Transaction[],
  ) {}
}
