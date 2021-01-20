import React from 'react'
import Header from './Header'
import { useEffect, useState } from 'react';
import SimpleCard from './Cards';
import CommentCard from './CommentCard';
import { Button, Typography } from '@material-ui/core';

export const Comments = (props) => {
    
    const [list,setList] = useState([])
    const [comment,setComment] = useState([])
    const [num,setNum] = useState(20)
    
    useEffect(() => {
        fetch('http://hn.algolia.com/api/v1/items/'+props.match.params.id)
        .then(res => res.json())
        .then((result) => {
            console.log(result)
            setList(result)
            }, 
            (error) => {
            console.log(error);
            }
        )
    },[])
    
    function a(){
        console.log(list.length)    
    }
    
    useEffect(()=>{
        console.log(comment,list.children,'v')
        if( list.children !== undefined){
            setComment(list.children)
        }
    },[list])

    if(list.length !== 0){
        return (
            <div>
                <Header/>
                
                <SimpleCard
                    key={list.objectID} 
                    title={list.title} 
                    url={list.url} 
                    num_comments = {num} 
                    created_at = {list.created_at} 
                    author = {list.author} 
                    points = {list.points} 
                    id = {list.id} 
                    />
                    <Typography variant="h3" component="h6">
                    Comments
                    </Typography>              {
                    comment.map((item)=>  
                        <CommentCard
                        key={item.id}
                        text = {item.text}
                        author = {item.author}
                        created_at = {item.created_at}
                        />
                    )
                }
            </div>
        )
    }
    return(
        <h1>Loading...</h1>
    )
}
