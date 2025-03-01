// lib/api.js
import { client } from './client';
import { NextResponse } from 'next/server';

// Fetch all blog posts
export async function getPosts() {
  const query = `*[_type == "post" && "Project" in categories[]->title && author-> name == "Hello Dholera" ]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    author->{name, image},
    categories[]->{title}
  }`;
  const posts = await client.fetch(query);
  return posts;
}
export async function getblogs() {
  const query = `*[_type == "post" && "Blog" in categories[]->title && author-> name == "Hello Dholera" ]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    author->{name, image},
    categories[]->{title}
  }`;
  const posts = await client.fetch(query);
  return posts;
}

// Fetch a single blog post by slug
export async function getPostBySlug(slug) {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      body,
      author->{
        name,
        image
      },
      categories[]->{
        title
      }
    }`;
    const post = await client.fetch(query, { slug });
    return post;
  }

  export async function POST(request) {
    try {
      const body = await request.json();
      console.log('Received form data:', body);
  
      const doc = {
        _type: 'contact',
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
        submittedAt: new Date().toISOString()
      };
  
      console.log('Creating document:', doc);
      const result = await client.create(doc);
      console.log('Document created:', result);
  
      return NextResponse.json({
        success: true,
        message: 'Form submitted successfully',
        id: result._id
      });
    } catch (error) {
      console.error('Submission error:', error);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to submit form'
        }, 
        { 
          status: 500 
        }
      );
    }
  }