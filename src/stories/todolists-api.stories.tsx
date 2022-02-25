import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API'
}
const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '32a2fb05-a0a6-4dbc-999f-c58d152b8cf3'
    }

}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists',
            settings)
            .then((res)=>{
                debugger
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists',{title:"NEWTODOLIST"},settings)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '6b832deb-abd8-4439-82f3-8accfe6846fc';
        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
            .then( (res) => {
            setState(res.data);
        })


    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
