import { useState, useCallback, useEffect} from "react";
import axios from 'axios';

function useFetch(url, urlPaid, option = {}) {
  const [payLoad, setPayload] = useState();
  const [error, setErro] = useState(null);
  const [tokenInfo, setTokenInfo] = useState(sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null);


  const getData = useCallback(async (url, urlPaid, option) => {
    await axios.get(url, urlPaid, option)
      .then(res => {
        const videosData = res.data;
        setPayload(videosData)
      })
      .catch((err) => {
        setErro(err);
      })
    }, [url, urlPaid, option]);

   useEffect(() => {
     if (tokenInfo) {
       getData(urlPaid, option);
     } else {
       getData(url);
     }
   },[getData]);

   return { tokenInfo, error, payLoad, option, url }
}


export default useFetch;
