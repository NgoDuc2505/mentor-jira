import { IValues } from '../constant/constant'

const setLocal = (key: string, data: IValues)=>{
    return localStorage.setItem(key,JSON.stringify(data))
}

const getLocal = (key:string) =>{
    if(localStorage.getItem(key) !== null){
        return JSON.parse(localStorage.getItem(key) || '{}')
    }
}

const deleteKey = (key:string) =>{
    return localStorage.removeItem(key)
}

export {setLocal, getLocal, deleteKey}