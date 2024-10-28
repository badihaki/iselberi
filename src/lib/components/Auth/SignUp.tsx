"use client"

import React, { ChangeEvent, useState } from 'react'
import Form from "next/form"
import { Button } from '@/components/ui/button';
import { defineStyle, Field, Input, Stack } from '@chakra-ui/react';

function SignUp() {
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
                                <Input name='username' onChange={onChange} value={form.password} 
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
                                <Input name='username' onChange={onChange} value={form.confirmPass} 
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
                        type='submit'>Sign Up</Button>
                    </Stack>
                </Form>
            </Stack>
        </div>
    )
}

export default SignUp
