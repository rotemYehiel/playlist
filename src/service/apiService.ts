import axiosInstance from "./mockAxios";
import BASE_URL from "../constants/api";


export const fetchList = async ({ listName }: { listName: string }) => {
  try {
      const response = await axiosInstance.get(`${BASE_URL}/${listName}` );
      const data = await response.data;
      return data;
   
  } catch (error) {
    return {error}
  }
};
