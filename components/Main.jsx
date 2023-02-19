import React from "react";
import { PostCard } from ".";

const Main = () => {
  const posts = [
    {
      title: "What force is more potent than love?",
      author: "Nureni Jamiu O.",
      date: "12/01/16",
      image: "/assets/post1.jpg",
      excerpt:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil necessitatibus animi deleniti, quod dignissimos totam. Beatae fugiat dolore.",
    },
    {
      title: "What they don't tell you about Social Media",
      author: "Nureni Jamiu O.",
      date: "12/01/16",
      image: "/assets/post5.jpg",
      excerpt:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil necessitatibus animi deleniti, quod dignissimos totam. Beatae fugiat dolore.",
    },
    {
      title: "In Search of meaning",
      author: "Nureni Jamiu O.",
      date: "12/01/16",
      image: "/assets/post3.jpg",
      excerpt:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil necessitatibus animi deleniti, quod dignissimos totam. Beatae fugiat dolore.",
    },
  ];
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
