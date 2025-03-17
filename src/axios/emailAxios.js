import axios from "axios";
import { toast } from "react-toastify";

const API_BASE_URL = import.meta.env.PROD
  ? ""
  : import.meta.env.VITE_BASE_API_URL;

const EMAIL_ENDPOINT = "/api/v1/email";
const API_URL = API_BASE_URL + EMAIL_ENDPOINT;

export const sendEmail = (emailObject) => {
  const response = axios.post(API_URL, emailObject);
  if (response === "error") {
    console.log(response.message);
    toast.error(response.message);
  }
  return response;
};
