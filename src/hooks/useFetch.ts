import { useEffect, useState } from "react";

export const useFetch = <T>(endpoint: string, fallbackData: T) => {
    const [data, setData] = useState<T>(fallbackData);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const load = async () => {
            try {
                const response = await fetch(endpoint);
                const json = await response.json();

                setData(json)
            } catch (err) {
                setError(new Error(String(err)))
            }
        }

        load();

    }, [endpoint]);

    return { data, error }
};