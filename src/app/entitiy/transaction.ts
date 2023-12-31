import { Account } from './Account';
import { Category } from './Category';

export class Transaction {
  constructor(
    public id: number,
    public amount: number,
    public type: boolean,
    public date: Date,
    public category: Category,
    public account: Account,
  ) {}
}
