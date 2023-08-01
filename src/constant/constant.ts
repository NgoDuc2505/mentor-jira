export const CYBER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwNyIsIkhldEhhblN0cmluZyI6IjA0LzExLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5OTA1NjAwMDAwMCIsIm5iZiI6MTY2OTQ4MjAwMCwiZXhwIjoxNjk5MjAzNjAwfQ.z53DwWShTQ-NYmv_cyVwxzyaarjOV3xiMrElt3gwl8M'
export const ACCESS_TOKEN = 'accessToken'
export const ACCESS_USER_ID = 'accessUserId'
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
    email: string,
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

export interface IGetMembers extends IMembers {
    email: string,
    phoneNumber: string
}

export interface IListTask {
    lstTaskDeTail: [],
    statusId: string,
    statusName: string,
    alias: string
}

export interface IStatus {
    statusId: string;
    statusName: string;
    alias: string;
    deleted: string;
}

export interface IPriority {
    priorityId: number;
    priority: string;
    description: string;
    deleted: boolean;
    alias: string;
}

export interface ITaskType {
    id: number;
    taskType: string;
}

export interface IListTaskDetail {
    alias: string,
    assigness: [{
        alias: string,
        avatar: string,
        id: number,
        name: string,
    }
    ],
    description: string,
    lstComment: [],
    originalEstimate: number,
    priorityId: number,
    priorityTask: { priorityId: number, priority: string },
    projectId: number,
    statusId: string,
    taskId: number,
    taskName: string,
    taskTypeDetail: { id: number, taskType: string },
    timeTrackingRemaining: number,
    timeTrackingSpen: number,
    typeId: number,
}

export interface IListTask {
    alias: string,
    lstTaskDeTail: [],
    statusId: string,
    statusName: string,
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
