import axios from "axios";
import { toast } from "react-toastify";

const EMAIL_ENDPOINT = "/api/v1/email";
const API_URL = import.meta.env.VITE_BASE_API_URL + EMAIL_ENDPOINT;

export const sendEmail = (emailObject) => {
  const response = axios.post(API_URL, emailObject);
  if (response === "error") {
    console.log(response.message);
    toast.error(response.message);
  }
  return response;
};
