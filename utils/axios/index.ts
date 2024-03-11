import axios from 'axios'
import Cookies from "js-cookie"
const token = Cookies.get('jwtToken')
const locale = Cookies.get("NEXT_LOCALE")

export default axios.create({
    baseURL: "",
    headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json',
     'Authorization' : `${token}`,
     'X-Content-Lang' : locale === "id" ? 'in' : locale,
     'Access-Control-Allow-Origin': '*'
    },
   })