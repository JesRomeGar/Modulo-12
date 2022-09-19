import { addMovementRows } from "./movements.helpers";
import { getMovementList } from "./movements.api";
import { getAccount } from "../account/account.api";
import { mapMovementListFromApiToViewModel, mapAccountFromApiToViewModel } from "./movements.mappers";
import { history } from "../../core/router";
import {onSetValues} from "../../common/helpers";

let account = {
    id: '',
    type: '',
    alias: '',
    iban: '',
  };

const params = history.getParams();

getAccount(params.id).then(apiAccount => {
    account = mapAccountFromApiToViewModel(apiAccount);
    onSetValues(account);
});

getMovementList(params.id).then((movementList) => {
    const viewModelMovementList = mapMovementListFromApiToViewModel(movementList, params.id);
    addMovementRows(viewModelMovementList);
    console.log({ movementList });
});
