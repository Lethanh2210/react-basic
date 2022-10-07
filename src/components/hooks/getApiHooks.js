import {useState} from "react";
import axios from "axios";

function useGetApi({url}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    async function getApi(){
        try{
            setLoading(true);
            const res = await axios.get(url);
            setData(res.data)
        }catch (e){

        }finally{
            setLoading(false);
        }
    }
}