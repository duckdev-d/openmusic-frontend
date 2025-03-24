import Line from '../../components/Line/Line'
import Logo from '../../components/Logo/Logo'
import Blur from '../../components/Blur/Blur'
import Text from '../../components/Text/Text'
import SecondaryText from '../../components/SecondaryText/SecondaryText'
import Field from '../../components/Field/Field'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import Link from '../../components/Link/Link'
import './LogIn.css'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function LoginPage() {
  const navigate = useNavigate()

  function logIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const API_URL = import.meta.env.VITE_API_URL
    const url = `${API_URL}/token`

    const formData = new URLSearchParams()
    formData.append('username', username)
    formData.append('password',password)

    axios.post<{access_token: string}>(url, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    })
    
    .then(response => {
      const jwt = response.data.access_token
      localStorage.setItem('jwt', jwt)
      navigate('/home')
    }
    ) 
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
    <Blur width="35vw" mLeft="15vw" mTop="-15vw"></Blur>
    <Blur width="35vw" mLeft="-15vw" mTop="15vw"></Blur>

    <div className="form-wrap">
      <Logo width="6vw" mBottom="2vw" />
      <Line color="white" width="23vw" height="0.2vw" mBottom="2vw"/>
      <Text size="2vw" weight="bold" mBottom="4vw">Log in to OpenMusic</Text>

      <form onSubmit={logIn}>
        <SecondaryText size="1.3vw" mBottom="0.5vw">Username</SecondaryText>
        <Field height="2.5vw" width="21vw" value={username} setValue={setUsername} mBottom="1vw"></Field>
        <SecondaryText size="1.3vw" mBottom="0.5vw">Password</SecondaryText>
        <Field height="2.5vw" width="21vw" value={password} setValue={setPassword} mBottom="4vw" type='password'></Field>
        <PrimaryButton height="3.2vw" width="21vw" mBottom="2vw" fontSize="1.3vw" >Countinue</PrimaryButton>
      </form>

      <div className="no-account">
        <Text size="0.95vw">Don't have an account?</Text>
        <Link href='/signup' size="0.95vw" weight="bold">Sign up to OpenMusic</Link>
      </div>

    </div>
    </>
  )
}


export default LoginPage
