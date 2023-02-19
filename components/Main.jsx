import React from "react";
import { PostCard } from ".";

const Main = ({ posts }) => {
  console.log(posts);
  return (
    <div className="grid grid-cols-2 gap-3">
      {posts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          author={post.author}
          date={post.date}
          image={post.image}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  );
};

export default Main;
