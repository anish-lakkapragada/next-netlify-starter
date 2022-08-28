import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import supabase from "../utils/supabase"; 
import { useRouter } from 'next/router'

const h3Style = {
    'font-size': '1.5rem'
}

const tfStyle = {
    'width': '50em'
}

const contentStyle = {
    'margin-top': '1.5em'
}

const btnStyle = {
    'margin-top': '2em', 
    'width': '25em'
}

const flexStyle = {
    "display": "flex", 
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center"
}



export default function CommentSection(props) {
    
    const [commentContent, setContent] = useState("");
    const router = useRouter(); 

    console.log(`id: ${props.id}`)
    
    const send = async (e) => {
        e.preventDefault();

        let comments = [];
        const {data, error} = await supabase.from("posties").select("comments").match({id: props.id});

        console.log(data); 
        
        if (error == null) {
            comments = data[0].comments; 
        }

        console.log(Array.prototype.concat([comments, [{content: commentContent}]]));

        await supabase.from("posties").update({comments: Array.prototype.concat(comments, [{content: commentContent}])}).match({id: props.id});
        
        //router.reload(window.location.pathname) // rerenders on page load
    }

    return (
        <div style={flexStyle}>
            <h3 style={h3Style}> Submit a Comment! </h3> 
            <TextField label="Enter Comment" value={commentContent} onChange={(e) => {setContent(e.target.value)}}/>
            <Button style={btnStyle} disabled={commentContent.length == 0} color="primary" onClick={send}> Submit Comment! </Button>
        </div> 
    )
}