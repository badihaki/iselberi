"use client"

import React, { ChangeEvent, useState } from 'react'
import Form from "next/form"
import { Button } from '@/components/ui/button';

function SignUp() {
    interface ISignUpForm{
        username:string,
        email:string,
        password:string,
        confirmPass:string,
    }
    const [form, setForm] = useState<ISignUpForm>({
        username:"",
        email:"",
        confirmPass:"",
        password:""
    })
    
    function onChange(ev:ChangeEvent<HTMLInputElement>){
        console.log(ev.target.value);
        const update = {...form};
        update[ev.target.name as keyof typeof update] = ev.target.value;
        console.log(update);
        setForm(update);
    }

    function onSubmit(formData:FormData){
        console.log(formData);
    }

    return (
        <div>
            Sign Up
            <Form action={onSubmit}>
                <input name='username' onChange={onChange} value={form.username} />
                <Button type='submit'>Sign Up</Button>
            </Form>
        </div>
    )
}

export default SignUp
