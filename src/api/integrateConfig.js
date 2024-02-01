import { axiosBase } from "./config";
import axios from 'axios'

export const createAccount = async(data)=>{
    return new Promise(async(resolve, reject)=>{
        try{
            console.log(`in the axios function `)
            const response = await axiosBase.post('api/users/create', data, {
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
            const response = await axiosBase.get(`api/users/userdetails/${data.address}`, {
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
            console.log(`the data in update profile in axios is ${data}`)
            console.log(data)
            const formData = new FormData();
            formData.append("address" , data.address);
            formData.append("name",data.username);
            formData.append("email",data.email);
            formData.append("transactionHash" , data.transactionHash);
            formData.append("profilePicture" , data.profilePicture);
            formData.append("mobileNumber" , data.mobileNumber);

            const response = await axiosBase.patch('api/users/update' , data  , {
                headers : {
                    'Content-Type': 'multipart/form-data',  //multipart
                },
            });
            console.log(`response recieved from the user is : ${response.data}`)
            resolve(response.data);
        }catch(error){
            console.log(`error in uodate profile in integrate api : ${error.message}`);
            reject(error);
        }
    })
}


export const buySlot = async(data)=>{       //working
    return new Promise(async(resolve, reject)=>{
        try{
           const response = await axiosBase.post('api/users/buySlots' , data ,{
                headers : {
                    'Content-Type': 'application/json',
                },
            });
            resolve(response.data)
        }catch(error){
            reject(error);
        }
    })
}


export const fetchSlot = async(data1)=>{
    return new Promise(async(resolve, reject)=>{
        try{
            const response = await axiosBase.post('api/users/fetchSlots' , data1 ,{
                headers : {
                    'Content-Type': 'application/json',
                },
            } );
            resolve(response.data);
        }catch(error){
            reject(error);
        }
    })
}



export const buyPackage = async(data)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            const response = await axiosBase.post('api/users/buyPackage' , data , {
                headers : {
                    'Content-Type' : 'application/json'
                }
            });
            resolve(response.data)
        }catch(error){
            reject(error);
        }
    })
}


export const fetchPackage = async(data)=>{
    return new Promise(async(resolve, reject)=>{
        try{
            const response = await axiosBase.post('api/users/fetchPackages' , data , {
                headers : {
                    'Content-Type' : 'application/json'
                }
            });
            resolve(response.data)
        }catch(error){
            reject(error);
        }
    })
}