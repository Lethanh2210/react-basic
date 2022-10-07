import axios from "axios";

const baseUrl = "http://localhost:5000/api/products"

async function getProduct(){
    try {
        return await axios.get(baseUrl)
    } catch (e) {
        console.log(e.message)
    }
}