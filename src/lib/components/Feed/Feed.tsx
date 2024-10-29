import React from 'react'
import FeedPost from './FeedPost';
import { Stack } from '@chakra-ui/react';

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
        console.log(post);
        return <FeedPost post={post} key={post.postID} />
    })

    // console.log(feedPosts);

  return (
    <div>
      Feed
      <Stack>
        {feedPosts}
      </Stack>
    </div>
  )
}
