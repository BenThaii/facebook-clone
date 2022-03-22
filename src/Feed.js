import React, { useState, useEffect } from 'react'
import './Feed.css'
import db from './firebase'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore';

function Feed() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const q = query(collection(db, "posts"), orderBy('timestamp', 'desc'))
        console.log(q)
        onSnapshot(q, (snapshot) =>{
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    })
    }, [])
    return (
        <div className = "feed">
            <StoryReel/>
            <MessageSender />
            {posts.map((post) => (
                <Post
                    key = {post.id}
                    profilePicUrl = {post.data.profilePic}
                    message = {post.data.message}
                    timestamp = {post.data.timestamp}
                    username = {post.data.username}
                    imageUrl = {post.data.image}
                />
            ))
            }
            {/* <Post
                profilePicUrl = "https://atmonline.asia/upload/iblock/c8d/vietnam.jpg"
                message = "wow, this works!"
                timestamp = "this is a timestamp"
                username = "benthaii"
                imageUrl = "https://ichef.bbci.co.uk/news/999/cpsprodpb/6D5A/production/_119449972_10.jpg"
            />
            <Post
                profilePicUrl = "https://atmonline.asia/upload/iblock/c8d/vietnam.jpg"
                message = "wow, this works!"
                timestamp = "this is a timestamp"
                username = "benthaii"
            />
            <Post
                profilePicUrl = "https://atmonline.asia/upload/iblock/c8d/vietnam.jpg"
                message = "wow, this works!"
                timestamp = "this is a timestamp"
                username = "benthaii"
                imageUrl = "https://atmonline.asia/upload/iblock/c8d/vietnam.jpg"
            /> */}
        </div>
    )
}

export default Feed
