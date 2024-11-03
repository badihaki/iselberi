"use client"

import { Button } from '@/components/ui/button'
import { IUser } from '@/lib/interfaces/IUser'
import { defineStyle, Field, Input, Stack } from '@chakra-ui/react'
import axios from 'axios'
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

    const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

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

    async function onSubmit(){
        // console.log(formData);
        setForm(formDefaultState);
        setSubmitDisabled(true);

            try{
                const body = JSON.stringify(form);
                const response = await axios.post("api/auth/login",body);
                // console.log("got the following response >>>>>>>>>");
                // console.log(response.data.user);
                props.SetAuth(response.data.user);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            catch(err:any){
                console.log("ran into an error");
                if(err){
                    showError(err.response.data.error);
                }
            }
        }

    async function showError(message:string) {
        console.log(message);
        setError(message);
        setTimeout(() => {
            setError("");
            setSubmitDisabled(false);
        }, 5000);
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
                        type='submit' disabled={submitDisabled}>Log In</Button>
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

export default LogIn
