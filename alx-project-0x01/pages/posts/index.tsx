import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps, PostData } from "@/interfaces";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";


// ✅ Define the props expected by this component
interface PostsComponentProps {
  posts: PostProps[]; // 🔁 use imported PostProps array here
}

const Posts: React.FC<PostsComponentProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<PostProps | null>(null);


  const handleAddPost = (newPost: PostData) => {
    setPost({ ...newPost, id: posts.length + 1 });
  };


  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">Post Content</h1>
          <button onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {
            posts?.map(({ title, body, userId, id }: PostProps, key: number) => (
              <PostCard title={title} body={body} userId={userId} id={id} key={key} />
            ))
          }
        </div>
      </main>

      {isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  )
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Posts;