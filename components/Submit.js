import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import supabase from "../utils/supabase"; 
import {getServerSideProps} from "../pages/index"; 
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



export default function submitPost() {
    const [title, setTitle] = useState(""); 
    const [content, setContent] = useState("");
    const router = useRouter(); 

    const errorFunc = (str) => {
        return str.length < 0 
    }

    const colorDict = {0: "primary", 1: "success"}

    const send = async (e) => {
        e.preventDefault();
        await supabase.from("posties").insert([{published: false, title: title, content: content}]);
        
        router.reload(window.location.pathname) // rerenders on page load
    }

    return (
        <div style={flexStyle}>
            <h3 style={h3Style}> Submit a Post </h3>
            <TextField style={tfStyle} label="Enter Title" color={"primary"} error={errorFunc(title)} value={title} onChange={(e) => {setTitle(e.target.value)}} /> 
            <TextField style={Object.assign(tfStyle, contentStyle)} error={errorFunc(content)} label="Enter Content" value={content} onChange={(e) => {setContent(e.target.value)}}/>
            <Button style={btnStyle} disabled={title.length ==0 || content.length == 0} color="primary" onClick={send}> Submit </Button>
        </div> 
    )
}