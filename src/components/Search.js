import React from 'react'
import Header from './Header'
import { useEffect, useState } from 'react';
import SimpleCard from './Cards';
import CommentCard from './CommentCard';
import { Button } from '@material-ui/core';

export const Search = (props) => {
    
    console.log('http://hn.algolia.com/api/v1/search?query='+props.match.params.id+'&tags=story')
    const [list,setList] = useState([])
    const [comment,setComment] = useState([])
    const [num,setNum] = useState(20)
    
    useEffect(() => {
        fetch('http://hn.algolia.com/api/v1/search?query='+props.match.params.id+'&tags=story')
        .then(res => res.json())
        .then((result) => {
            console.log(result.hits)
            setList(result.hits)
        }, 
        (error) => {
            console.log(error);
        }
        )
    },[])
    function a(){
        console.log(comment,list.children)

    }
    useEffect(()=>{
        console.log(comment,list.children,'v')
        if( list.children !== undefined){
            setComment(list.children)
        }
    },[list])
    return (
        <div>
            <Header/>
             
            {
              list.map((list) =>
              <SimpleCard 
                key={list.objectID} 
                title={list.title} 
                url={list.url} 
                num_comments = {list.num_comments} 
                created_at = {list.created_at} 
                author = {list.author} 
                points = {list.points} 
                id = {list.objectID} 
              />
              )
            } 
        </div>
    )
}
