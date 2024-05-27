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
    return (
      <div className="w-11/12 md:w-1/2 mx-auto mt-4">
        <SkeletonPulse />
        <SkeletonPulse />
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center">
      <Link href={"/"}>
        <FaArrowLeft className="mx-4 md:ml-8 mt-5 " />
      </Link>
      <div className="h-auto md:h-[70vh] w-11/12 md:w-1/2 mx-auto border rounded-md shadow-md bg-slate-200 my-5">
        <div className="flex flex-col bg-slate-100 px-4 py-3">
          <h1 className="font-semibold text-lg md:text-xl md:py-3">
            {postDetails.title.toUpperCase()}
          </h1>
          <div className="flex flex-row justify-between items-center mb-4">
            <p className="flex flex-row gap-1 text-sm items-center">
              <FaUser size={40} className="rounded-full" />
              by
              <span className="text-xs md:text-base">{postDetails.author}</span>
            </p>

            <div className="flex flex-col md:flex-row gap-2 items-center mt-2 md:mt-0">
              <p>Share</p>
              <FaFacebook />
              <FaInstagramSquare />
              <FaTwitter />
            </div>
          </div>
        </div>

        <div className="mt-3 px-4 pb-7">{postDetails.body}</div>
      </div>
    </div>
  );
};

export default PostDetails;
