import { useCallback, useState } from 'react';

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (
      url: string,
      method = 'GET',
      body: any = null,
      headers: any = {}
    ) => {
      try {
        setLoading(true);

        if (body) {
          body = JSON.stringify(body);
          headers['Content-Type'] = 'application/json';
        }

        const response = await fetch(url, { method, body, headers });
        const data = await response.json();

        if (data.status === 'error') {
          //throw new Error(data.message);
          setError(data.message);
        }

        //setLoading(false);

        return data;
      } catch (e: any) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};

export default useHttp;
