"use client";
import React from "react";

import TimelineItem from "./TimelineItem";
import useTimeline from "../hooks/useTimeline";
import PulseLoader from "./SkeletonPulse";

const Timeline: React.FC = () => {
  const timeline = useTimeline();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        JSON Timeline
      </h1>
      {timeline.length === 0 ? (
        <div>
          <PulseLoader />
          <PulseLoader />
        </div>
      ) : (
        <div className="grid gap-3">
          {timeline.map((item, index) => (
            <div key={index}>
              <TimelineItem
                postId={item.id}
                userName={item.userName}
                title={item.title}
                body={item.body}
                comments={item.comments}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;
