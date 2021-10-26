import axios from 'axios'
import {dialogsSlice} from "../redux/slices/dialodsSlice";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    header: {
        'API-KEY': '56da4b49-e130-401a-8eee-bc205b915589'
    }
})


export const fetchUsers = async () => {
    const data = await instance.get('users')
    console.log(data)
}
