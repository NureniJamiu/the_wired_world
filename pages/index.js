import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Main, Aside, PostCard } from "@/components";
import { getPosts } from "@/services";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>The Wired World</title>
        <meta name="description" content="Every news about Tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container px-20 grid grid-cols-6 gap-5 font-Nunito">
        <div className="col-span-4">
          <div className="grid grid-cols-2 gap-3">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          {/* <Main posts={posts} /> */}
        </div>
        <div className="col-span-2">
          <Aside />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
