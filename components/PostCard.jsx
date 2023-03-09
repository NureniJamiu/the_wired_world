/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { BsCalendar2Event, BsPersonCircle, BsArrowRight } from "react-icons/bs";
import moment from "moment/moment";

const PostCard = ({ post }) => {
  return (
    <div className="w-full p-2 shadow rounded transition duration-200 scale-95 cursor-default hover:scale-100">
      <div>
        <img
          src={post.featuredImage.url}
          alt="Post Image"
          className="rounded-md shadow mb-5 object-cover object-center w-full h-60"
        />
      </div>
      <div className="px-2">
        <h1 className="text-center text-xl font-bold mb-4 capitalize">
          {post.title}
        </h1>
        <div className="flex justify-between gap-6 text-zinc-700 font-semibold mb-3">
          <small className="flex gap-2 items-center bg-green-50 px-2 rounded-md">
            <img
              src={post.author.photo.url}
              alt={post.author.name}
              className="w-[30px] bg-gray-300 rounded-full object-cover object-center"
            />
            <span>{post.author.name}</span>
          </small>
          <small className="flex gap-2 items-center bg-red-50 px-2 rounded-md">
            <BsCalendar2Event className="text-red-500" />
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </small>
        </div>
        <p className="text-center line-clamp-4 my-4">{post.excerpt}</p>
      </div>
      <p className="w-40 text-center text-red-500 cursor-pointer mx-auto px-3 py-2 rounded-lg mb-2 flex gap-1 text-sm font-semibold transition ease-in-out duration-200 group items-center hover:translate-x-2">
        Continue Reading <BsArrowRight />
      </p>
    </div>
  );
};

export default PostCard;
