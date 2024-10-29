import React from 'react'

export default function FeedPost(props:{
    postID:number,
    postUser:string,
    content:string
}) {
  return (
    <div key={props.postID}>
      <div>
        {props.postUser}
      </div>
      <div>
        {props.content}
      </div>
    </div>
  )
}
