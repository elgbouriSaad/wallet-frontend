import { Component } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrl: './transaction-page.component.scss'
})
export class TransactionPageComponent {
  checked: boolean = false;


  citiess  = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];
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
  saveAccount() {
    console.log(this.checked);
    }
    hideDialog() {
    throw new Error('Method not implemented.');
    }
      visible: boolean = false;
    products = [
      {id: 1, name: 'aze', price: 100},
      ];
    transaction = {
      "amout": 1,
      "category": "John Doe",
      "account": "Business",
      "date": "$3,200.00",
      "type": "$3,200.00",
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
    


    isChecked(){
      if(this.checked == true){
        this.checked = false;
      }else{
        this.checked = true;
      }
    }
}
