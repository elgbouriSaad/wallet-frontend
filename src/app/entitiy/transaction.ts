import { Account } from './account';
import { Category } from './category';

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
