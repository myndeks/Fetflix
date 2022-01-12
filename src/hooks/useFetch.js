import { useState, useCallback, useEffect} from "react";
import axios from 'axios';

function useFetch(url, option = {}) {
  const [payLoad, setPayload] = useState();
  const [error, setErro] = useState(null);
  const [tokenInfo, setTokenInfo] = useState(sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null);


  const getData = useCallback(async (url, option) => {
    await axios.get(url, option)
      .then(res => {
        const videosData = res.data;
        setPayload(videosData)
      })
      .catch((err) => {
        setErro(err);
      })
    }, [url, option]);

   useEffect(() => {
     getData();
   },[getData]);

   return { error, payLoad, option }
}


export default useFetch;
