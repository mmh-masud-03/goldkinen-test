import { useState, useEffect } from "react";
import { fetchSinglePost, fetchSingleUser, Post, User } from "@/utils/apiCall";

interface PostDetails {
  title: string;
  body: string;
  author: string;
}

const usePost = (postId: string | string[]): PostDetails | null => {
  const [postDetails, setPostDetails] = useState<PostDetails | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      const post: Post = await fetchSinglePost(postId);
      const userId = post.userId;
      const user: User = await fetchSingleUser(userId);
      if (post && user) {
        const postDetails: PostDetails = {
          title: post.title,
          body: post.body,
          author: user.name,
        };
        setPostDetails(postDetails);
      } else {
        setPostDetails(null);
      }
    };
    fetchPostData();
    // const fetchPostData = async () => {
    //   try {
    //     const [post, user] = await Promise.all([
    //       fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
    //         (res) => res.json()
    //       ),
    //       fetch(`https://jsonplaceholder.typicode.com/users/${postId}`).then(
    //         (res) => res.json()
    //       ),
    //     ]);

    //     if (post && user) {
    //       const postDetails: PostDetails = {
    //         title: post.title,
    //         body: post.body,
    //         author: user.name,
    //       };
    //       setPostDetails(postDetails);
    //     } else {
    //       setPostDetails(null);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching post data:", error);
    //     setPostDetails(null);
    //   }
    // };

    // fetchPostData();
  }, [postId]);

  return postDetails;
};

export default usePost;
