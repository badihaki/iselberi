"use client"

import React, { ChangeEvent, useState } from 'react'
import Form from "next/form"
import { Button } from '@/components/ui/button';
import { defineStyle, Field, Input, Stack } from '@chakra-ui/react';
import axios from 'axios';

function SignUp() {
    const [error, setError] = useState<string>("");
    const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);
    const floatingStyles = defineStyle({
        pos: "absolute",
        bg: "bg",
        px: "0.5",
        top: "-3",
        insetStart: "2",
        fontWeight: "normal",
        pointerEvents: "none",
        transition: "position",
        _peerPlaceholderShown: {
          color: "fg.muted",
          top: "2.5",
          insetStart: "3",
        },
        _peerFocusVisible: {
          color: "fg",
          top: "-3",
          insetStart: "2",
        },
      })

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
        const update = {...form};
        update[ev.target.name as keyof typeof update] = ev.target.value;
        setForm(update);
    }

    async function onSubmit(){
        setForm({
            username:"",
            email:"",
            confirmPass:"",
            password:""
        });
        setSubmitDisabled(true);
        try{
            const body = JSON.stringify(form);
            
            const user = await axios.post("api/auth/signup", body);
            
            console.log(user.data);
        }
        catch(err:any){
            showError(err.response.data.message);
        }
    }
    
    async function showError(message:string) {
        setError(message);
        setTimeout(() => {
            setError("");
            setSubmitDisabled(false);
        }, 5000);
    }

    return (
        <div>
            <Stack align={'center'}
            className='bg-stone-400 bg-opacity-20 mx-auto px-4'
            >
                <div className='font-bold text-lg pt-2 mt-2'>
                    Sign Up
                </div>
                <Form action={onSubmit} className='py-4'>
                    <Stack spaceY={4} align={'center'}>
                        <div id='sign-up-username' className='relative'>
                            <Field.Root>
                                <Input name='username' onChange={onChange} value={form.username} 
                                className='peer'
                                variant={"subtle"}
                                />
                                <Field.Label css={floatingStyles}>
                                        Username
                                </Field.Label>
                            </Field.Root>
                        </div>
                        <div id='sign-up-email'>
                            <Field.Root>
                                <Input name='email' onChange={onChange} value={form.email} 
                                className='peer'
                                variant={"subtle"}
                                />
                                <Field.Label css={floatingStyles}>
                                        Email
                                </Field.Label>
                            </Field.Root>
                        </div>
                        <div id='sign-up-password'>
                        <Field.Root>
                                <Input name='password' onChange={onChange} value={form.password} 
                                className='peer'
                                variant={"subtle"}
                                />
                            <Field.Label css={floatingStyles}>
                                        Password
                                </Field.Label>
                        </Field.Root>
                        </div>
                        <div id='sign-up-confirm'>
                            <Field.Root>
                                <Input name='confirmPass' onChange={onChange} value={form.confirmPass} 
                                className='peer'
                                variant={"subtle"}
                                />
                                <Field.Label css={floatingStyles}>
                                        Re-enter your password
                                </Field.Label>
                            </Field.Root>
                        </div>
                        <Button size={"md"}
                        animation={"transition-all ease-in-out 750ms"}
                        className='transition-all ease-in-out duration-300 bg-stone-400 bg-opacity-20 hover:bg-opacity-60 active:bg-opacity-90 hover:text-black px-4 hover:px-2 py-2'
                        type='submit' disabled={submitDisabled}>Sign Up</Button>
                    </Stack>
                </Form>
            </Stack>
            <div className='
            absolute bottom-2/4
            bg-red-700 text-black font-extrabold text-center rounded-2xl mx-auto px-2
            '>
                {error}
            </div>
        </div>
    )
}

export default SignUp
