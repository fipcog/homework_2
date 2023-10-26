import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type AddUserCallback = (name: string) => void
type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: AddUserCallback // need to fix any
}

export const pureAddUser = (name: string,
                            setError: (error: string)=> void, 
                            setName: (newName: string)=> void, 
                            addUserCallback: AddUserCallback) => {
    if(name === '') {
        setError('Ошибка! Введите имя!')
    } else {
        addUserCallback(name)
        setName('')
    }
}

export const pureOnBlur = (name: string, setError: (error: string)=> void) => {
    if(name === '') setError('Ошибка! Введите имя!')
}

export const pureOnEnter = (e: React.KeyboardEvent<HTMLInputElement>, addUser: ()=> void) => {
    if(e.code === 'Enter') addUser()
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) 
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length
    const lastUserName = users.length > 0 ? users[users.length - 1].name : null

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
