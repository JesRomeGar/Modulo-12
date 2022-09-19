import Axios from "axios";

const url = `${process.env.BASE_API_URL}/account-list`;
const insertUrl = `${process.env.BASE_API_URL}/transfer`

export const getAccountList = () => Axios.get(`${url}`).then(({ data }) => data)

export const insertTransfer = (transfer) => Axios.post(insertUrl, transfer).then(({ data }) => data)