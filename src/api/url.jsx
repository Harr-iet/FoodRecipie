import axios from "axios";

export const recipeFetch = axios.create({
    baseURL: `https://food-recipe-api-zwxr.onrender.com/api/v1`

});

export default recipeFetch ; 