"use client";
import React from "react";
import usePost from "@/hooks/usePost";
import { useParams } from "next/navigation";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaUser,
  FaArrowLeft,
} from "react-icons/fa";
import Link from "next/link";
import SkeletonPulse from "@/components/SkeletonPulse";

const PostDetails = () => {
  const params = useParams();
  const { postId } = params;
  const postDetails = usePost(postId);

  if (!postDetails) {
    return <SkeletonPulse />;
  }

  return (
    <div className="flex flex-row justify-center">
      <Link href={"/"}>
        <FaArrowLeft className="ml-8 mt-5" />
      </Link>
      <div className="h-[70vh] w-1/2 mx-auto  border rounded-md shadow-md bg-slate-200 my-5">
        <div className="flex flex-col bg-slate-100 px-4 py-3 ">
          <h1 className="font-semibold text-xl py-3">
            {postDetails.title.toUpperCase()}
          </h1>
          <div className="flex flex-row justify-between items-center mb-4 ">
            <p className="flex flex-row gap-1 text-sm items-baseline">
              <FaUser size={40} />
              by
              <span
                className="
          text-base"
              >
                {postDetails.author}
              </span>
            </p>

            <div className="flex flex-row gap-2 items-center ">
              <p>Share</p>
              <FaFacebook />
              <FaInstagramSquare />
              <FaTwitter />
            </div>
          </div>
        </div>

        <div className="mt-3 px-4">{postDetails.body}</div>
      </div>
    </div>
  );
};

export default PostDetails;
