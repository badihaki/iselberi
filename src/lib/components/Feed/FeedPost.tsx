import { Card, Center } from '@chakra-ui/react'
import React from 'react'

export default function FeedPost(props:{
    post:{
        postID:number,
        postUser:string,
        content:string
    }
}) {
  return (
    <div id={`post-${props.post.postID}`} className='relative mb-12 leading-relaxed tracking-wider font-light text-lg'>
        <Center>
            <Card.Root flexDirection={"row"} overflow={"hidden"} minW={"xl"} maxW={"3xl"} minH={"3xs"} maxH={"xs"} bg={"black/85"} borderRadius={"4xl"}>
                <Card.Header>
                </Card.Header>
                <Card.Body>
                    <div>
                        {props.post.content}
                    </div>
                </Card.Body>
                <Card.Footer></Card.Footer>
            </Card.Root>
            <div
            className='absolute bg-stone-500 text-slate-900 px-1 py-2 rounded-3xl font-semibold -right-12 top-12'
            >
                {props.post.postUser}
            </div>
        </Center>
    </div>
  )
}
