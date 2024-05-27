import { FaUser } from "react-icons/fa";
interface CommentBoxProps {
  name: string;
  email: string;
  body: string;
}

const CommentBox: React.FC<CommentBoxProps> = ({ name, email, body }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-3">
      <div className="flex flex-col md:flex-row gap-2 items-center mb-3">
        <FaUser size={30} className="border-2 rounded-full bg-gray-50" />
        <div className="flex flex-col">
          <span className="font-semibold">{name}</span>
          <span className="text-gray-500 text-sm">{email}</span>
        </div>
      </div>
      <p className="text-gray-700">{body}</p>
    </div>
  );
};

export default CommentBox;
