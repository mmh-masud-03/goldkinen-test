import { FaUser, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Comment } from "@/utils/apiCall";
import { useState } from "react";
import CommentBox from "./CommentBox";
import { useRouter } from "next/navigation";

interface TimelineItemProps {
  postId: number;
  userName: string;
  title: string;
  body: string;
  comments: Comment[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  postId,
  userName,
  title,
  body,
  comments,
}) => {
  const [showComments, setShowComments] = useState(false);
  const router = useRouter();
  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 ">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-xl font-semibold mb-2">{title.toUpperCase()}</h3>
        <button
          onClick={() => router.push(`/${postId}`)}
          className="text-blue-600"
        >
          View Post
        </button>
      </div>
      <div className="flex flex-row gap-2 items-center mb-3">
        <FaUser size={35} className="border-2 rounded-full bg-gray-50" />
        <span className="text-xs font-semibold">by {userName}</span>
      </div>
      <p className="text-gray-700 text-lg">{body}</p>
      <button
        onClick={handleShowComments}
        className="text-blue-500 hover:underline"
      >
        {showComments ? (
          <span className="flex flex-row gap-2 items-center">
            <span>Hide Comments </span> <FaArrowUp />
          </span>
        ) : (
          <span className="flex flex-row gap-2 items-center">
            <span>Show Comments </span> <FaArrowDown />
          </span>
        )}
      </button>
      {showComments && (
        <div className="mt-4 transition-opacity duration-500 ease-in-out opacity-100">
          <h3 className="text-lg font-semibold mb-2">Comments</h3>
          <div className="space-y-2">
            {comments.map((comment) => (
              <CommentBox
                key={comment.id}
                name={comment.name}
                email={comment.email}
                body={comment.body}
              />
            ))}
          </div>
          {comments.length === 0 && (
            <p className="text-gray-500 mt-2">No comments yet</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TimelineItem;
