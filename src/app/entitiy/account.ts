import { Objective } from './Objective';
import { Transaction } from './Transaction';

export class Account {
  constructor(
    public id: number,
    public name: string,
    public balance: number,
    public objective: Objective[],
  ) {}
}
