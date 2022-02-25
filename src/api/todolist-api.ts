import axios from 'axios'

type TodolistType= {
    id: string
    addedDate: string
    order: number
    title: string
}
type CreateTodoType ={
    resultCode: number
    messages: Array<string>
    fieldsError: Array<string>
    data:{
        item:TodolistType
    }
}
type DeleteAndUpdateResponseType ={
    resultCode: number
    messages: Array<string>
    fieldsError: Array<string>
    data:{}
}


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {
        'API-KEY': '32a2fb05-a0a6-4dbc-999f-c58d152b8cf3'
    },
    withCredentials: true,
})

export const todolistAPI = {
    getTodolists(){
      return instance.get<Array<TodolistType>>('todo-lists')
    },
    createTodolist(title:string){
       return  instance.post<CreateTodoType>('todo-lists',{title})
    },
    deleteTodolist(todolistId: string){
      return   instance.delete<DeleteAndUpdateResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodolist(todolistId: string, title: string) {
        return  instance.put<DeleteAndUpdateResponseType>(`todo-lists/${todolistId}`, {title})
    }
}
