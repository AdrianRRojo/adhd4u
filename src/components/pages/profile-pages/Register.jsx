import {useState, useRef, useEffect} from 'react'
import axios from 'axios'
import jwt_decode from 'jwt_decode'
import { Navigate, Link } from 'react-router-dom'


export default function Register({}){
    const [username,setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')

    const c = console.log.bind(document)
    const handleSubmit = async e =>{
        e.preventDefault()
        try{
            const formData = new FormData()
            formData.append('username', username)
            formData.append('email',email)
            formData.append('password', password)

            const options = {
				headers: {
					"Content-Type" : "multipart/form-data"
				}
			}

            const response = await axios.post(`${process.env.REACT_APP_SERVER/ap1-1.0/users/Register}`, formData, options)

            const { token } = response.data
			localStorage.setItem('jwt', token)

			// decode the token
			const decoded = jwt_decode(token)

			// set the user in App's state to be the decoded token
			// setCurrentUser(decoded)

        }catch(err){
            c(err)
            if(err.response){
                setMsg(err.response.data.msg)
            }
        }
    }
}