import 
{
  PROVIDER_HOME,
  POST_JOB,
  TOTAL_POST,
  TOGGLE_POST_STATUS
} from "../utils/apiconstants";

import axios from 'axios'

const ProviderServices = {

  ProviderHome: async (bodyFormData) => {
    const config = {
      headers: {
          'Content-Type': `multipart/form-data`,
          'Authorization': `Basic YWRtaW46MTIz` 
      },
    };
    const body = bodyFormData;
    console.log(body);
    console.log(`${PROVIDER_HOME}`);
    const data = await axios.post(`${PROVIDER_HOME}`, body, config);
    return data;
  },
  ProviderPostJob: async (bodyFormData) => {
    const config = {
      headers: {
          'Content-Type': `multipart/form-data`,
          'Authorization': `Basic YWRtaW46MTIz` 
      },
    };
    const body = bodyFormData;
    console.log(body);
    console.log(`${POST_JOB}`);
    const data = await axios.post(`${POST_JOB}`, body, config);
    return data;
  },
  ProvideActivePosts: async (bodyFormData) => {
    const config = {
      headers: {
          'Content-Type': `multipart/form-data`,
          'Authorization': `Basic YWRtaW46MTIz` 
      },
    };
    const body = bodyFormData;
    console.log(body);
    console.log(`${TOTAL_POST}`);
    const data = await axios.post(`${TOTAL_POST}`, body, config);
    return data;
  },
  ProvideTogglePosts: async (bodyFormData) => {
    const config = {
      headers: {
          'Content-Type': `multipart/form-data`,
          'Authorization': `Basic YWRtaW46MTIz` 
      },
    };
    const body = bodyFormData;
    console.log(body);
    console.log(`${TOGGLE_POST_STATUS}`);
    const data = await axios.post(`${TOGGLE_POST_STATUS}`, body, config);
    return data;
  },
}
export default ProviderServices
