import { FaUser } from "react-icons/fa";

interface TimelineItemProps {
  userName: string;
  title: string;
  body: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  userName,
  title,
  body,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-xl font-semibold mb-2">{title.toUpperCase()}</h3>
      <div className="flex flex-row gap-2 items-center mb-3">
        <FaUser size={30} className="border-2 rounded-full bg-gray-50" />
        <span className="text-xs font-semibold  ">by {userName}</span>
      </div>

      <p className="text-gray-700 text-lg">{body}</p>
    </div>
  );
};

export default TimelineItem;
