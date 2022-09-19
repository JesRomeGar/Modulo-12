import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from "../../common/helpers";
import { isValidLogin } from "./login.api";
import { formValidation } from "./login.validation";
/*Importo esto para hacer que la página pase a la 
siguiente página al pulsar el boton login siempre y cuando los campos sean correctos */
import { history, routes } from "../../core/router";


let login = {
    user: "",
    password: "",
};


/*Esta funcion ha actualizado solamente el valor de user dentro del objeto login (dejando
     el valor que tuviese anteriormente password)*/
onUpdateField("user", event => {
    const value = event.target.value;
    login = {
        ...login,
        user: value
    };
    /*Esta funcion valida si el texto introducido es correcto o no */
    formValidation.validateField("user", login.user).then(result => {
        /*Esta funcion expresa el error si lo ha habido(importada de helpers) */
        onSetError("user", result);
    })
});


/*Esta funcion ha actualizado solamente el valor de password dentro del objeto login (dejando
     el valor que tuviese anteriormente user)*/
onUpdateField("password", event => {
    const value = event.target.value;
    login = {
        /*El spread (...) permite copiar el objeto tal cual estaba,
         para solo cambiar uno de los campos*/
        ...login,
        password: value
    };
    formValidation.validateField("password", login.password).then(result => {
        onSetError("password", result);
    })
});

/*Esta funcion importada sirve para comprobar que al pulsar
 el boton de login se reciben los datos introducidos*/
onSubmitForm("login-button", () => {
    formValidation.validateForm(login).then(result => {
        /*Esta funcion setea que todos los formularios sean correctos*/
        onSetFormErrors(result);
        /*Condicion para no ir al servidor en caso de que el formulario no sea correcto */
        if (result.succeeded) {
            isValidLogin(login).then(isValid => {
                /*Al ser válidos los datos introducidos navega a la sig pag */
                onNavigate(isValid);
            });
        }
    });
});


/*Funcion para navegar a la siguiente página */

const onNavigate = (isValid) => {
    if (isValid) {
        history.push(routes.accountList);
    } else {
        alert("Usuario y/o contraseña no válidos");
    }
}