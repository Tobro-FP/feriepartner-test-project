import { useState, useEffect } from 'react';

const useEmployees = (id = null) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      setIsLoading(true);
      try {
        const url = id
          ? `http://localhost:3001/employees/${id}`
          : 'http://localhost:3001/employees';
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmployees();
  }, [id]);

  return { data, isLoading, error };
};

export default useEmployees;
