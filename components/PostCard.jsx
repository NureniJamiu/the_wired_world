import React from "react";
import Image from "next/image";
import { BsCalendar2Event, BsPersonCircle, BsArrowRight } from "react-icons/bs";

const PostCard = ({ title, author, date, image, excerpt }) => {
  return (
    <div className="w-full p-2 shadow rounded transition duration-200 scale-95 hover:scale-100">
      <div>
        <Image
          src={image}
          alt="Post Image"
          width={500}
          height={500}
          className="rounded-md shadow mb-5"
        />
      </div>
      <div className="px-2">
        <h1 className="text-center text-xl font-bold mb-4 capitalize">
          {title}
        </h1>
        <div className="flex justify-between gap-6 text-zinc-700 font-semibold mb-3">
          <small className="flex gap-1 items-center bg-green-50 px-2 rounded-md">
            <BsPersonCircle className="text-green-600" />
            {author}
          </small>
          <small className="flex gap-1 items-center bg-red-50 px-2 rounded-md">
            <BsCalendar2Event className="text-red-500" />
            {date}
          </small>
        </div>
        <p className="text-center mb-4">{excerpt}</p>
      </div>
      <p className="w-40 text-center bg-red-400 mx-auto px-3 py-2 rounded-lg mb-2 flex gap-1 text-sm font-semibold transition ease-in-out duration-200 group items-center hover:bg-red-500 hover:drop-shadow-lg shadow-gray-500">
        Continue Reading <BsArrowRight />
      </p>
    </div>
  );
};

export default PostCard;
