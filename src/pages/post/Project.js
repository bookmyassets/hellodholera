import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { projectQuery } from "@/sanity/lib/query";
import { PortableText } from "next-sanity";

export default function Projects({ projects }) {
  return (
    <>
      <div className="space-y-10">
        <section className="flex flex-col w-full h-screen">
         {/*  <Image
            src={building}
            alt="bg image"
            fill
            className="w-full h-[10vh] bg-no-repeat object-cover object-center brightness-50"
          /> */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-10">
            <div className="relative">
              <div className="flex flex-col justify-center items-center pb-5">
                <p className="text-9xl max-sm:text-7xl  text-white opacity-5 font-black z-0 absolute top-0 uppercase dark:text-white">
                  Projects
                </p>
                <p className="text-4xl text-white font-bold text-center z-20 relative capitalize mt-7 sm:mt-14 dark:text-gray-300">
                  Projects
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </section>
      </div>
      <div className="pt-10">
        <section className="flex flex-col justify-center items-center">
          <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project._id}
                className="relative rounded-lg overflow-hidden"
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="block object-cover h-[300px] max-sm:w-[450px] max-sm:h-[250px]"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4 space-y-3">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <PortableText value={project.body} className="text-sm" />
                    <Link href={`/post/${project.slug?.current}`} passHref>
                      <button className="px-4 py-2 border-2 border-white text-white">
                        Click Here
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      
    </>
  );
}

export async function getServerSideProps() {
  const projects = await client.fetch(projectQuery);
  console.log("Fetched Projects:", projects); // Check if data is coming
  return { props: { projects } };
}
