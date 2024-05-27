import { useState, useEffect } from "react";
import {
  fetchPosts,
  fetchUsers,
  fetchComments,
  Comment,
  User,
  Post,
} from "@/utils/apiCall";

interface TimelineItem {
  userId: number;
  userName: string;
  title: string;
  body: string;
  id: number;
  comments: Comment[];
}

const useTimeline = (): TimelineItem[] => {
  const [timeline, setTimeline] = useState<TimelineItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const posts: Post[] = await fetchPosts();
      const users: User[] = await fetchUsers();
      const allComments: Comment[] = await fetchComments();

      const timeline: TimelineItem[] = posts
        .map((post) => {
          const user = users.find((user) => user.id === post.userId);
          const comments = allComments.filter(
            (comment) => comment.postId === post.id
          );

          return {
            userId: post.userId,
            userName: user ? user.name : "Unknown User",
            title: post.title,
            body: post.body,
            id: post.id,
            comments,
          };
        })
        .sort((a, b) => b.id - a.id);

      setTimeline(timeline);
    };

    fetchData();
  }, []);

  return timeline;
};

export default useTimeline;
