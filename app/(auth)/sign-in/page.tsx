"use client"

import AuthForm from '@/components/AuthForm'
import { signInSchema } from '@/lib/validations'
import React from 'react'

const SigninPage = () => 
  (
    <div className='overflow-y-hidden'>
        <AuthForm
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{
        email:"",
        password:"",
    }}
    onSubmit={()=>{}}
    />
    </div>
  )


export default SigninPage
