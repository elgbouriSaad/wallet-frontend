import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { Transaction } from '../entitiy/Transaction';

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrl: './transaction-page.component.scss'
})
export class TransactionPageComponent {
  checked: boolean = false;
  checked2: boolean = false;
  account = {
    id: 0,
    name: '',
    balance: 0,
  };
  cities  = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'aze', code: 'PRS' }
];
date: any;
visible2!: boolean;
  saveAccount() {
    console.log(this.checked);
    console.log(this.checked2);
    }
    hideDialog() {
    throw new Error('Method not implemented.');
    }
      visible: boolean = false;
    products = [
      {id: 1, name: 'aze', price: 100},
      ];
    transaction = {
      "amout": 0,
      "category": "",
      "account": "",
      "date": "",
      "type": "",
    };
      showDialog() {
        this.visible = true;
        this.transaction = {
          "amout": 0,
          "category": "",
          "account": "",
          "date": "",
          "type": "",
        };
    }
    showUpdateDialog() {
 
      this.visible2 = true;
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
    


    isChecked(){
      if(this.checked == true){
        this.checked = false;
      }else{
        this.checked = true;
      }
    }
    isChecked2(){
      if(this.checked2 == true){
        this.checked2 = false;
      }else{
        this.checked2 = true;
      }
    }
}
