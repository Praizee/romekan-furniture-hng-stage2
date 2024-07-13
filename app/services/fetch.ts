import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const organizationId = process.env.NEXT_PUBLIC_ORGANIZATION_ID;
const appid = process.env.NEXT_PUBLIC_APPID;
const apikey = process.env.NEXT_PUBLIC_APIKEY;

export const FetchProduct = async (url: string, page: number): Promise<any> => {
  const { data } = await axios.get(`${baseUrl}/api/${url}`, {
    params: {
      organization_id: organizationId,
      page,
      size: 10,
      Appid: appid,
      Apikey: apikey,
    },
  });

  return data;
};

export const FetchSingleProduct = async (url: string): Promise<any> => {
  const { data } = await axios.get(`${baseUrl}/api/${url}`, {
    params: {
      organization_id: organizationId,
      Appid: appid,
      Apikey: apikey,
    },
  });

  return data;
};
