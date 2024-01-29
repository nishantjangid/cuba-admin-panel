import { axiosBase } from "./config";
import axios from 'axios'

export const createAccount = async(data)=>{
    return new Promise(async(resolve, reject)=>{
        try{
            console.log(`in the axios function `)
            const response = await axios.post('http://localhost:5000/api/users/create', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            resolve(response.data);

        }catch(error){
            console.log(`error in create account : ${error.message}`);
            reject(error)
        }
    })
}



export const getUserDetails = async(data)=>{
    return new Promise(async(resolve, reject)=>{
        try{
            const response = await axios.get(`http://localhost:5000/api/users/userdetails/${data.address}`, {
                headers : {
                    'Content-Type': 'application/json',
                },
            });
            resolve(response.data);
        }catch(error){
            console.log(`error in get user details function intergrate config : ${error.message}`);
            reject(error)
        }
    })
}


export const updateProfile = async(data)=>{
    return new Promise(async(resolve, reject)=>{
        try{

        }catch(error){
            console.log(`error in uodate profile in integrate api : ${error.message}`);
            reject(error);
        }
    })
}