import { Objective } from './objective';

export class Account {
  constructor(
    public id: number,
    public name: string,
    public balance: number,
    public objective: Objective[],
  ) {}
}