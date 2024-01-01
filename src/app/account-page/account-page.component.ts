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
  header = 'New Account';
  constructor(private httpservice: AccountService) {}
  ngOnInit() {
    this.httpservice.allAccounts().subscribe((data) => {
      this.accounts = data;
    });
  }

  saveAccount() {
    console.log('saveAccount');
    console.log(this.account);
    this.visible = false;
    this.visible2 = false;
  }
  hideDialog() {
    this.visible = false;
    this.visible2 = false;
  }
  visible: boolean = false;
  visible2: boolean = false;
  account= {
    id: 0,
    name: '',
    balance: '',
    objective: [],
    transactions: [],
  };
  showDialog() {
    this.header = 'New Account';
    this.visible = true;
    this.account= {
      id: 0,
      name: '',
      balance: '',
      objective: [],
      transactions: [],
    };
  }
  showUpdateDialog(acc:Account) {
    this.header = 'Update Account';
    this.visible2 = true;
    this.account.id = acc.id;
    this.account.name = acc.name;
    this.account.balance = acc.balance.toString();

  }
  deleteAccount(id: number) {
    
  }
  updateAccount() {
    console.log('updateAccount');
    console.log(this.account);
    this.visible = false;
    this.visible2 = false;

  }
 
  clear(_t10: Table) {
    throw new Error('Method not implemented.');
  }
}
