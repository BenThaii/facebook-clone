import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './MessageSender.css'
import VideocamIcon from "@material-ui/icons/Videocam"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import { useStateValue } from './StateProvider'
import db from "./firebase"
import { collection, addDoc, serverTimestamp  } from "firebase/firestore"; 
import { FirebaseError } from 'firebase/app'


function MessageSender() {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [{user}, dispatch] = useStateValue();


    const handleSubmit = e =>{
        // in form, whenever we hit enter, it triggers the handleSubmit function
        e.preventDefault();    //prevent refreshing the page which clears all content of the page

        // some clever DB stuff
        addDoc(collection(db, "posts"), {
            message: input,
            timestamp: serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
          });

        // reset input values
        setInput("")
        setImageUrl("")
    }
    return (
        <div className = "messageSender">
            <div className="messageSender__top">
                <Avatar src = { user.photoURL }/>
                <form>
                    <input className= "messageSender__input" 
                        type = "text" placeholder = {`What's on your mind, ${user.displayName}?`}
                        value = {input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <input placeholder='image URL (optional)'
                        value = {imageUrl}
                        onChange={(e)=> setImageUrl(e.target.value)}
                    />
                    <button onClick={handleSubmit} type = "submit">
                        Hidden Submit Button
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom" >
                <div className="messageSender__option">
                    <VideocamIcon style = {{color:"red"}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style = {{color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>
                
                <div className="messageSender__option">
                    <InsertEmoticonIcon style = {{color:"orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender
