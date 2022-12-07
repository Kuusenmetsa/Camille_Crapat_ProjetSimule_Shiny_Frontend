import { useState, useEffect } from 'react';

export function useFetch(url) {
   const [data, setData] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(false);

   useEffect(() => {
      if (!url) return;

      async function fetchData() {
         setIsLoading(true);
         try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
         } catch (err) {
            console.log(err);
            setError(true);
         } finally {
            setIsLoading(false);
         }
      }
      fetchData();
   }, [url]);

   return { data, isLoading, error };
}
