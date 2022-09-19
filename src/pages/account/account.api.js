import Axios from "axios";

const url = `${process.env.BASE_API_URL}/account`;


/*Metodo para insertar nueva cuenta*/
export const insertAccount = (account) => Axios.post(`${url}/${account.id}`, account).then(response => {
    return response.data;
});


/*Metodo para recuperar la informacion por id*/
export const getAccount = (id) => Axios.get(`${url}/${id}`).then(response => {
    return response.data;
});


/*Metodo para actualizar una cuenta*/
export const updateAccount = (account) => Axios.put(`${url}/${account.id}`, account).then(response => {
    return response.data;
});


