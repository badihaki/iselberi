import React from 'react'

export default function FeedPost(props:{
    post:{
        postID:number,
        postUser:string,
        content:string
    }
}) {
  return (
    <div key={props.post.postID}>
      <div>
        {props.post.postUser}
      </div>
      <div>
        {props.post.content}
      </div>
    </div>
  )
}
