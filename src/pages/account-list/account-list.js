import { getAccountList } from "./account-list.api";
import { addAccountRows} from "./account-list.helpers";
import {mapAccountListFromApiToViewModel} from "./account-list.mappers";
import {onUpdateField} from "../../common/helpers";
import { history } from "../../core/router";



/* MAPPER
Account {
      id:string;
      iban:string;
      name: string;
      balance: string; // number -> string €
      lastTransaction: string; // string -> DD/MM/YYYY
}
*/



getAccountList().then(accountList => {
    console.log({accountList});/*Se le ponen corchetes para que salga el nombre de lo que estoy solicitando ver en consola */
    const viewModelAccountList = mapAccountListFromApiToViewModel(accountList);
    addAccountRows(viewModelAccountList);
    /*Metodo para recoger el valor que se quiera en cada momento (a que cuenta acceder)*/
    viewModelAccountList.forEach(account => {
        onUpdateField(`select-${account.id}`,(event) => {
            const route = event.target.value;
            history.push(route);
        });
    });
});

