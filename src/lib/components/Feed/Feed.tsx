import React from 'react'
import FeedPost from './FeedPost';
import { Box, Center, Stack, Text } from '@chakra-ui/react';

export default function Feed() { 
    const postTemplate:{
        postID:number,
        postUser:string,
        content:string
    } = {
        postID:0,
        postUser:"Admin",
        content: "test: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }

    const posts = ()=>{
        const res:{
            postID:number,
            postUser:string,
            content:string
        }[] = [];
        for (let index = 0; index < 20; index++) {
            // const element = array[index];
            const post = {...postTemplate};
            post.postID = index+1;
            res.push(post);
        }
        return res;
    }
    
    const feedPosts = posts().map(post=>{
        return <FeedPost post={post} key={post.postID} />
    })

    // console.log(feedPosts);

  return (
    <div>
        {/* Start of heading component */}
        <div>
            <Center>
                <Text textStyle={"3xl"} fontWeight={"semibold"}>
                    Feed
                </Text>
            </Center>
        </div>
        {/* End of heading component */}
        <Box bg={"slategray/35"} px={16} py={8} shadow={"2xl"} borderRadius={"md"}>
            <Stack>
                {feedPosts}
            </Stack>
        </Box>
    </div>
  )
}
