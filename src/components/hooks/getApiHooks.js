import {useEffect, useState} from "react";
import axios from "axios";

export function useGetApi({url}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    async function getApi(){
        try{
            setLoading(true);
            const res = await axios.get(url);
            const productData = await res.data.data;
            setData(productData)
            setLoading(false)
        }catch (e){
            console.log(e.message)
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        getApi();
    }, [])

    return {
        data,
        loading
    }
}