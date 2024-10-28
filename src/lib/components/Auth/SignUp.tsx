"use client"

import React, { ChangeEvent, useState } from 'react'
import Form from "next/form"
import { Button } from '@/components/ui/button';
import { Stack } from '@chakra-ui/react';

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
            <Stack align={'center'}
            className='bg-stone-400 bg-opacity-20 mx-auto'
            >
                <div className='font-bold text-lg'>
                    Sign Up
                </div>
                <Form action={onSubmit}>
                    <Stack spaceY={4} align={'center'}>
                        <div id='sign-up-username'>
                            <span className='mr-4'>
                                Username:
                            </span>
                            <input name='username' onChange={onChange} value={form.username} />
                        </div>
                        <div id='sign-up-email'>
                            <span className='mr-4'>
                                Email:
                            </span>
                            <input name='email' onChange={onChange} value={form.email} />
                        </div>
                        <div id='sign-up-password'>
                            <span className='mr-4'>
                                Password:
                            </span>
                            <input name='username' onChange={onChange} value={form.password} />
                        </div>
                        <div id='sign-up-confirm'>
                            <span className='mr-4'>
                                Retype to Confirm Your Password
                            </span>
                            <input name='username' onChange={onChange} value={form.confirmPass} />
                        </div>
                        <Button type='submit'>Sign Up</Button>
                    </Stack>
                </Form>
            </Stack>
        </div>
    )
}

export default SignUp
