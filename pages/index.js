import supabase from '../utils/supabase';
import DisplayPost from '@components/DisplayPost';
import Submit from "@components/Submit";

export async function getServerSideProps() {
  const { data : posts, error } = await supabase.from('posties').select()

  return {
    props: {
      posts,
    },
  };
}

const divHeader={
  'text-align': 'center'
}

export const titleHeader = {
  'font-size': '3em'
}

export default function Home({posts}) {
  
  return (
    <div style={divHeader}>
      <h1 style={titleHeader}> All the Posts Below! </h1>
      {posts.map(post => <DisplayPost {...Object.assign({}, post, {comments: false})} />)}
      <Submit /> 
    </div>
  );
}

