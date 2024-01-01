import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { Account } from '../entitiy/Account';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.scss',
})
export class AccountPageComponent {
  accounts!: Account[];
  constructor(private httpservice: AccountService) {}
  ngOnInit() {
    this.httpservice.allAccounts().subscribe((data) => {
      this.accounts = data;
    });
  }

  saveAccount() {
    throw new Error('Method not implemented.');
  }
  hideDialog() {
    throw new Error('Method not implemented.');
  }
  visible: boolean = false;
  account = {
    id: 1,
    name: 'John Doe',
    category: 'Business',
    balance: '$3,200.00',
  };
  showDialog() {
    this.visible = true;
  }
  deleteAccount(arg0: any) {
    throw new Error('Method not implemented.');
  }
  updateAccount(_t30: any) {
    throw new Error('Method not implemented.');
  }
  addNewAccount() {
    throw new Error('Method not implemented.');
  }
  clear(_t10: Table) {
    throw new Error('Method not implemented.');
  }
}
