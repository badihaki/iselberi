"use client"

import { Button } from '@/components/ui/button'
import { IUser } from '@/lib/interfaces/IUser'
import { defineStyle, Field, Input, Stack } from '@chakra-ui/react'
import Form from 'next/form'
import React, { ChangeEvent, useState } from 'react'

function LogIn( props:{SetAuth:(user:IUser)=>void} ) {
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

      const formDefaultState = {
        email:"",
        password:""
      };
      const [form, setForm] = useState<{
        email:string,
        password:string
      }>(formDefaultState)

      function onChange(ev:ChangeEvent<HTMLInputElement>){
        // console.log(ev.target.value);
        const update = {...form};
        update[ev.target.name as keyof typeof update] = ev.target.value;
        // console.log(update);
        setForm(update);
    }

    function onSubmit(){
        // console.log(formData);
        setForm(formDefaultState);
        props.SetAuth({
            email:form.email,
            password:form.password,
            username:"Admin"
        })
    }

    return (
        <div>
            <Stack align={"center"}
            className='bg-stone-400 bg-opacity-20 mx-auto'
            >
                <div>
                    Log in
                </div>
                <Form action={onSubmit} className='py-4'>
                    <Stack spaceY={4} align={"center"}>
                        <div id='log-in-email' className='relative'>
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
                        
                        <div id='log-in-pass' className='relative'>
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
                        <Button size={"md"}
                        animation={"transition-all ease-in-out 750ms"}
                        className='transition-all ease-in-out duration-300 bg-stone-400 bg-opacity-20 hover:bg-opacity-60 active:bg-opacity-90 hover:text-black px-4 hover:px-2 py-2'
                        type='submit'>Log In</Button>
                    </Stack>
                </Form>
            </Stack>
        </div>
    )
}

export default LogIn
