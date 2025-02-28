import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { blogQuery } from "@/sanity/lib/query";
import { PortableText } from "next-sanity";

export default function Blogs({ blogs }) {
  const brandColors = {
    maroon: "#650000",
    gold: "#FDB913",
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <section className="relative flex items-center justify-center h-[50vh] bg-gradient-to-b from-[#650000] to-[#320000] text-white">
        <h1 className="text-6xl md:text-8xl opacity-30 font-black uppercase tracking-wider mb-2 text-[#FDB913]">Blogs</h1>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                    {blog.title}
                  </h3>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    <PortableText value={blog.body} />
                  </div>
                  
                  <Link href={`/post/${blog.slug?.current}`} passHref>
                    <button className="w-full py-3 px-4 text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center" 
                      style={{ 
                        background: `linear-gradient(to right, ${brandColors.maroon}, ${brandColors.maroon}DD)`,
                        borderBottom: `3px solid ${brandColors.gold}`
                      }}>
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  const blogs = await client.fetch(blogQuery);
  return { props: { blogs } };
}
