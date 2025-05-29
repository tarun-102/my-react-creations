import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.rates);
                console.log("Fetched data:", res.rates);
                console.log("API full response:", res);
            })
            .catch((err) => console.error("Currency API Error:", err));
    }, [currency]);
  
    return data;
}

export default useCurrencyInfo;
