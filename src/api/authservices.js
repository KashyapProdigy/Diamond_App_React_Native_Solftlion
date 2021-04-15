import 
{
  LOGIN,
  REGISTER
} from "../utils/apiconstants";

import axios from 'axios'

const AuthServices = {
  LoginUser: async (bodyFormData) => {
    const config = {
      headers: {
          'Content-Type': `multipart/form-data`,
          'Authorization': `Basic YWRtaW46MTIz` 
      },
    };
    const body = bodyFormData;
    console.log(body);
    console.log(`${LOGIN}`);
    const data = await axios.post(`${LOGIN}`, body, config);
    return data;
  },
  RegisterUser: async (bodyFormData) => {
    const config = {
      headers: {
          'Content-Type': `multipart/form-data`,
          'Authorization': `Basic YWRtaW46MTIz` 
      },
    };
    const body = bodyFormData;
    console.log(body);
    console.log(`${REGISTER}`);
    const data = await axios.post(`${REGISTER}`, body, config);
    return data;
  },
}
export default AuthServices
