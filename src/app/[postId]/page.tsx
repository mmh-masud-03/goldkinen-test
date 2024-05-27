import React from "react";
import { notFound } from "next/navigation";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostPageProps {
  params: { postId: string };
}

const fetchPost = async (postId: string): Promise<Post> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await res.json();
  return post;
};

const PostPage: React.FC<PostPageProps> = async ({ params }) => {
  const postId = params.postId;
  const post = await fetchPost(postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-6">{post.body}</p>
      {/* Add additional post details and components here */}
    </div>
  );
};

export default PostPage;
