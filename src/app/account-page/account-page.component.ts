import { Component } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.scss'
})
export class AccountPageComponent {
saveAccount() {
throw new Error('Method not implemented.');
}
hideDialog() {
throw new Error('Method not implemented.');
}
  visible: boolean = false;
account = {
  "id": 1,
  "name": "John Doe",
  "category": "Business",
  "balance": "$3,200.00",
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
products = [
{id: 1, name: 'aze', price: 100},
];

}
