// pages/projects/[slug].js
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; 
import CostSheet from "@/components/costSheet";


const PostDetail = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>;
  }

  const isProject = post.categories?.some(category => category.title.toLowerCase() === "project");
  const components = {
    types: {
      image: ({ value }) => {
        if (!value || !value.asset) {
          return <p>Image not found</p>;
        }
        return (
          <img
            src={value.asset._ref ? urlFor(value).url() : value.asset.url}
            alt={value.alt || "Image"}
            className="my-4 w-full rounded-lg"
          />
        );
      },
    },
  };

  return (
    <>
    {/* Hero Section */}
    <div className="flex flex-col w-full h-screen relative">
      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.mainImage.alt || post.title}
          fill
          className="w-full h-screen bg-no-repeat  object-cover object-center brightness-50"
        />
      )}

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <div className="relative">
          <div className="flex flex-col justify-center items-center pb-5">
            <p className="text-9xl max-sm:text-7xl text-white opacity-5 font-black z-0 absolute top-0 uppercase dark:text-white">
              {post.title}
            </p>
            <h1 className="text-4xl text-white font-bold text-center z-20 relative capitalize mt-7 sm:mt-14 dark:text-gray-300">
              {post.title}
            </h1>
          </div>
        </div>
      </div>
    </div>

    
        {/* Author & Date */}
       {/*  {post.author && post.publishedAt && (
          <div className="mb-4 text-gray-600 dark:text-gray-400 flex justify-center space-x-4">
            <span>By {post.author.name}</span>
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
        )} */}

        {/* Categories */}
         {post.categories?.length > 0 && (
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {post.categories.map((category) => (
              <span 
                key={category._id}
                className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm"
              >
                {category.title}
              </span>
            ))}
          </div>
        )} 

        {/* Blog Body */}
      
        <div className="prose max-w-4xl mx-auto pt-28 text-lg text-black">
          <PortableText value={post.body} components={components}/>
          
          { isProject && <CostSheet/> } 
        </div>
  </>


  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    body,
    mainImage,
    "author": author->{
      name,
      _id
    },
    "categories": categories[]->{ 
      _id,
      title
    },
    publishedAt,
    slug
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

export default PostDetail;