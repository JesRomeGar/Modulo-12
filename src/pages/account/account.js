import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onSetValues } from "../../common/helpers";
import { formValidation } from "./account.validations";
import { history } from "../../core/router";
import { getAccount, updateAccount, insertAccount } from "./account.api"
import { mapAccountFromApiToViewModel, mapAccountFromViewModelToApi } from "./account.mappers";


let account = {
    id: "",
    type: "",
    alias: "",
};


onUpdateField("type", (event) => {
    const value = event.target.value;
    account = {
        ...account,
        type: value,
    };
    formValidation.validateField("type", account.type).then(result => {
        onSetError("type", result);
    })
});

onUpdateField("alias", (event) => {
    const value = event.target.value;
    account = {
        ...account,
        alias: value,
    };
    formValidation.validateField("alias", account.type).then(result => {
        onSetError("alias", result);
    });
});

/*Para que inserte una nueva cuenta o actualice una ya existente es necesario esto */
const onSave = () => {
    const apiAccount = mapAccountFromViewModelToApi(account);
    return isEditMode ? updateAccount(apiAccount) : insertAccount(account);
};


onSubmitForm("save-button", () => {
    formValidation.validateForm(account).then(result => {
        onSetFormErrors(result);
        if (result.succeeded) {
            onSave().then(apiAccount => {
                history.back();
            });
        };
    });
});


/*Capturar los datos del servidor utilizando la url, usamos un metodo que ya tenemos englobado en history (core/router) */
const params = history.getParams();

/*Como se si estoy en el modo edicion(ya tiene id) o en el de crear una nueva cuenta(sin id)? con esto */
const isEditMode = Boolean(params.id);

/*Esto devuelve la cuenta que has solicitado por id */
if (isEditMode) {
    getAccount(params.id).then(apiAccount => {
        account = mapAccountFromApiToViewModel(apiAccount);
        /*Ahora que tiene los datos capturados hay que mandarlos al html para que los muestre */
        onSetValues(account);
    });
};
