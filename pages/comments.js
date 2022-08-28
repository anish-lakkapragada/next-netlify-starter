import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import supabase from "../utils/supabase"; 
import DisplayPost from "@components/DisplayPost";
import {titleHeader} from "../pages/index";
import { useRouter } from 'next/router'


export async function getServerSideProps() {
    const { data : posts, error } = await supabase.from('posties').select()
  
    return {
      props: {
        posts,
      },
    };
  }

export default function Comments({posts}) {
    return (
        <div> 
            <h1 style={Object.assign(titleHeader, {'text-align': 'center'})}> Comments Section </h1> 
            {posts.map(post => <DisplayPost {...Object.assign({}, post, {comments: true})} />)}
        </div>
    )
}