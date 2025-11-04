import { useEffect, useState } from "react";

type UseFetchResult<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
};

/**
 * Fetches data from a given URL using the Fetch API
 * Manages three states: data, isLoading, and error
 * Automatically triggers the fetch when the component mounts or when the URL changes (via useEffect dependency)
 * Returns an object with the same pattern as @tanstack/react-query's useQuery hook
 * Type-safe with TypeScript generics - you specify what type of data you expect to receive
 */
export const useFetch = <T>(url: string): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
