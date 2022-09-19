import Axios from "axios";

/*Esto se conecta a la url preparada*/
const url = `${process.env.BASE_API_URL}/login`;


/* Nos devuelve si el login es correcto o no
(el que le hemos especificado en la funcion isValidLogin(user === 'admin@email.com' && password === 'test'))*/
export const isValidLogin = (login) => Axios.post
    (url, login).then(response => {
        return response.data;
    });

