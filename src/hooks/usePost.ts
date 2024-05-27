import { useState, useEffect } from "react";
import {
  fetchSinglePost,
  fetchSingleUser,
  fetchComments,
  Comment,
  Post,
  User,
} from "@/utils/apiCall";

interface PostDetails {
  title: string;
  body: string;
  author: string;
  comments: Comment[];
}

const usePost = (postId: string | string[]): PostDetails | null => {
  const [postDetails, setPostDetails] = useState<PostDetails | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      const post: Post = await fetchSinglePost(postId);
      const userId = post.userId;
      const user: User = await fetchSingleUser(userId);
      const allComments: Comment[] = await fetchComments();
      const comments = allComments.filter(
        (comment) => comment.postId === post.id
      );
      if (post && user && comments) {
        const postDetails: PostDetails = {
          title: post.title,
          body: post.body,
          author: user.name,
          comments,
        };
        setPostDetails(postDetails);
      } else {
        setPostDetails(null);
      }
    };
    fetchPostData();
  }, [postId]);

  return postDetails;
};

export default usePost;
