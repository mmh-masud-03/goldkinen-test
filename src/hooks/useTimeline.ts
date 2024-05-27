import { useState, useEffect } from "react";
import { fetchPosts, fetchUsers, User, Post } from "@/utils/apiCall";

interface TimelineItem {
  userId: number;
  userName: string;
  title: string;
  body: string;
  id: number;
}

const useTimeline = (): TimelineItem[] => {
  const [timeline, setTimeline] = useState<TimelineItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const posts: Post[] = await fetchPosts();
      const users: User[] = await fetchUsers();

      const timeline: TimelineItem[] = posts
        .map((post) => {
          const user = users.find((user) => user.id === post.userId);
          return {
            userId: post.userId,
            userName: user ? user.name : "Unknown User",
            title: post.title,
            body: post.body,
            id: post.id,
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
