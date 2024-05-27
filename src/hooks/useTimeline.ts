import { useState, useEffect } from "react";
import { fetchPosts, fetchUsers } from "@/utils/apiCall";
const [timeline, setTimeline] = useState<Post[]>([]);
const [loading, setLoading] = useState<boolean>(false);
const [error, setError] = useState<any>(null);

export type User = {
  id: string;
  name: string;
};
export type Post = {
  id: string;
  userId: string;
  userName: string;
  title: string;
  body: string;
};
const useTimeline = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const posts: Post[] = await fetchPosts();
        const users: User[] = await fetchUsers();
        const timeline: Post[] = posts
          .map((post) => {
            const user = users.find((user) => user.id === post.userId);
            return {
              id: post.id,
              userId: post.userId,
              userName: user ? user.name : "Unknown User",
              title: post.title,
              body: post.body,
            };
          })
          .sort((a, b) => Number(b.id) - Number(a.id));
        setTimeline(timeline);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { timeline, loading, error };
};
export default useTimeline;
