import { useState, useEffect } from "react";

const useFetch = (dataArray, id) => {
    const [data, setData] = useState(null); 
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            try {
                const product = dataArray.find((item) => item.id === parseInt(id)); 
                if (!product) {
                    throw new Error("Product not found"); 
                }
                setTimeout(() => {
                    setData(product);
                    setIsPending(false); 
                }, 500); 
            } catch (err) {
                setError(err.message); 
                setIsPending(false); 
            }
        };

        fetchData();
    }, [dataArray, id]);

    return { data, error, isPending };
};

export default useFetch;
