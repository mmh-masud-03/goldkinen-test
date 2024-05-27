"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TimelineItem from "./TimelineItem";
import useTimeline from "../hooks/useTimeline";
import PulseLoader from "./SkeletonPulse";

const Timeline: React.FC = () => {
  const timeline = useTimeline();
  const router = useRouter();

  const handlePostClick = (postId: number) => {
    router.push(`/${postId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Timeline
      </h1>
      {timeline.length === 0 ? (
        <div>
          <PulseLoader />
          <PulseLoader />
        </div>
      ) : (
        <div className="grid gap-3">
          {timeline.map((item, index) => (
            <Link key={index} href={`/${item.id}`}>
              <div
                onClick={() => handlePostClick(item.id)}
                className="cursor-pointer"
              >
                <TimelineItem
                  userName={item.userName}
                  title={item.title}
                  body={item.body}
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;
