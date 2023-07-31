export const CYBER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwNyIsIkhldEhhblN0cmluZyI6IjA0LzExLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5OTA1NjAwMDAwMCIsIm5iZiI6MTY2OTQ4MjAwMCwiZXhwIjoxNjk5MjAzNjAwfQ.z53DwWShTQ-NYmv_cyVwxzyaarjOV3xiMrElt3gwl8M'
export const ACCESS_TOKEN = 'accessToken'
export const BASE_URL = 'https://jiranew.cybersoft.edu.vn'

export const regex = {
    nameByVietnamese: /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
    password: /^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^& "]).*$/,
}

export interface IValuesLogin {
    email: string,
    passWord: string
}

export interface IValues extends IValuesLogin {
    name: string,
    phoneNumber: string
}

export interface IProfile {
    avatar: string,
    email:string,
    id: number,
    name: string,
    phoneNumber: string
}

export interface IMembers {
    userId: number,
    name: string,
    avatar: string
}

export interface ICategory {
    id: number,
    projectCategoryName: string
}

export interface ICreator {
    id: number,
    name: string,
}

export interface IGetMembers extends IMembers{
    email: string,
    phoneNumber: string
}

export interface IListTask {
    lstTaskDeTail: [],
    statusId: string,
    statusName: string,
    alias: string
}