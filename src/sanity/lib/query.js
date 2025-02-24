import { defineQuery } from "next-sanity";
import { PortableText } from "next-sanity";


export const projectQuery = defineQuery(
    `
    *[_type == "post" && "Project" in categories[]->title && author->name == "Hello Dholera"]{
      _id,
      title,
      body,
      "categories": categories[]->{ 
        _id,
        title
      },
      slug,
      "imageUrl" : mainImage.asset->url
    }
    `
  )
  

  // You can also add this query for single projects
  export const singleProjectQuery = `*[_type == "post" && slug.current == $slug && author->name == "Hello Dholera"][0]{
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


export const blogQuery = defineQuery(
    `
    *[_type == "post" && "Blog" in categories[] -> title && author->name == "Hello Dholera"]{
    _id,
    title,
    body,
    "categories": categories[]->{ 
      _id,
      title
    },
    slug,
    "imageUrl" : mainImage.asset->url
    }
    `
)

  // You can also add this query for single projects
  export const singleBlogQuery = `*[_type == "post" && slug.current == $slug && author->name == "Hello Dholera"][0]{
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