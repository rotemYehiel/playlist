import { ERROR_MESSAGE_NOT_FOUND, ERROR_MESSAGE_GENERIC ,ERR_NETWORK} from "../constants/messages";
import getListFromJson from "./utils";

const fetchListResponseInterceptor = (response)=> response;

const fetchListErrorInterceptor = (error)=> {
    if(error.code===ERR_NETWORK){
        const match = error?.config?.url.match(/\/playlist\/([^\/]*)$/);
        const listName = match ? match[1] : null;

        const playList=getListFromJson(listName);
        
        if(playList?.listName){
            const customResponse={
                data:playList,
                status:200,
                config:error.config,
                request:error.request
            }

            return Promise.resolve(customResponse);
        }

        const offlineError={
            status:404,
            message:ERROR_MESSAGE_NOT_FOUND
        }
    
        return Promise.reject(offlineError);

    }

    const onlineError={
        ...error,
        message:error?.response?.status===404 ? ERROR_MESSAGE_NOT_FOUND: ERROR_MESSAGE_GENERIC
    }

    return Promise.reject(onlineError);
}



export {fetchListResponseInterceptor,fetchListErrorInterceptor};
