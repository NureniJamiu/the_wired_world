/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { getRecentPosts, getSimilarPosts } from "@/services";
import moment from "moment";
import Link from "next/link";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [categories, slug]);

  console.log(relatedPosts);
  return (
    <div className="shadow-md rounded-md w-full h-96 p-5 mt-4">
      <h3 className="text-lg font-bold py-3 border-b-2">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      <div>
        {relatedPosts.map((post, index) => (
          <div key={index} className="flex items-center gap-5 py-3">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className="rounded-full shadow object-cover object-center w-[50px] h-[50px]"
            />
            <div className="flex flex-col">
              <small className="text-gray-700">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </small>
              <Link href={`/post/${post.slug}`} className="text-sm leading-5">
                {post.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostWidget;
