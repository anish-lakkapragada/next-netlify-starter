import supabase from '../utils/supabase';

export async function getStaticProps() {
  const { data: posts, error } = await supabase.from('posts').select('*');

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  console.log(supabase.auth.user());

  return (
    <div>
      <h1>Hello chat!</h1>
      <pre>{posts}</pre>
    </div>
  );
}

