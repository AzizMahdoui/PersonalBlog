"use client"
import { Plus } from "lucide-react";
import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { modules,formats } from "./setting";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
import { generateSlug } from "@/app/libs";
import { useEffect } from "react";
import { Blog } from "@/app/libs/Schemas";
import { useRouter } from 'next/navigation';
const BlogEditor = () => {
  const router = useRouter();
  const [blog, setBlog] = useState<Blog>({
      title: "",
      slug: "",
      description: "",
      content: ""
  });
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
      // Check if user is authenticated
      const checkAuth = async () => {
          const res = await fetch('/api/auth/check');
          if (!res.ok) {
              router.push('/login'); // Redirect to login if not authenticated
          }
      };
      checkAuth();
  }, [router]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setBlog(prevBlog => ({ ...prevBlog, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setError("");

      try {
          const response = await fetch('/api/blogs', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ ...blog, content }),
          });

          if (!response.ok) {
              throw new Error('Failed to create blog post');
          }

          router.push('/blogs'); // Redirect to blogs list after successful creation
      } catch (err) {
          setError("Failed to create blog post. Please try again.");
      } finally {
          setIsLoading(false);
      }
  };
    

  return (
    <div className="h-full bg-neutral-50">
    <h2 className="text-4xl text-start text-black px-8 font-semibold py-4">
      Create Blog New Post
    </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 p-8 gap-4">
      {/* Blog Editor */}
      <div className="w-full max-w-3xl p-5   text-black bg-white   rounded-lg shadow-lg mx-auto">
        <h2 className="text-3xl font-bold border-b border-gray-400 pb-2 mb-5 ">
          Blog Editor
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {/* Title */}
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block text-sm font-bold leading-6 text-gray-900 mb-2 "
              >
                Blog Title
              </label>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  type="text"
                  value={blog.title}
                  name="title"
                  id="title"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                  placeholder="Type the Course title"
                />
              </div>
            </div>
            {/* Slug */}
            <div className="sm:col-span-2">
              <label
                htmlFor="slug"
                className="block text-sm font-bold leading-6 text-gray-900 mb-2 "
              >
                Blog Slug
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setBlog({...blog,slug:e.target.value})}
                  type="text"
                  value={blog.slug}
                  name="slug"
                  id="slug"
                  autoComplete="slug"
                  className="block w-full rounded-md border-0 py-2 px-4  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                  placeholder="Type the Course title"
                />
              </div>
            </div>
            {/* Description */}
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-bold text-gray-900 "
              >
                Blog Description
              </label>
              <textarea
                id="description"
                // rows="4"
                onChange={(e) => setBlog({...blog,description:e.target.value})}
                value={blog.description}
                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 "
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            {/* Content */}
            <div className="sm:col-span-2">
              <label
                htmlFor="content"
                className="block mb-2 text-sm font-bold text-gray-900 "
              >
                Blog Content
              </label>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center  bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800"
          >
            {/* <Plus className="w-5 h-5 mr-2" /> */}
            <span className="text-white font-bold">Create Blog Post</span>
          </button>
        </form>
      </div>

      {/* Blog View */}
      <div className="blog-view text-gray-900 shadow-lg w-full max-w-3xl p-8  bg-white rounded-lg  mx-auto">
        <h2 className="text-3xl font-bold border-b border-gray-400 pb-2 mb-5 ">
          Blog View
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {/* Title */}
          <div className="sm:col-span-2">
            <h2 className="block text-sm font-bold leading-6 text-gray-900 mb-2 ">
              Blog Title
            </h2>
            <div className="mt-2">
              <p className="text-2xl font-bold pl-4">{blog.title}</p>
            </div>
          </div>
          {/* Slug */}
          <div className="sm:col-span-2">
            <h2 className="block text-sm font-bold leading-6 text-gray-900 mb-2 ">
              Blog Slug
            </h2>
            <div className="mt-2">
              <p className="p-4">{blog.slug}</p>
            </div>
          </div>
          {/* Description */}
          <div className="sm:col-span-2">
            <h2 className="block mb-2 text-sm font-bold text-gray-900 ">
              Blog Description
            </h2>
            <p className="p-4">{blog.description}</p>
          </div>
          <div className="sm:col-span-full ">
            <h2 className="block mb-2 text-sm font-bold text-gray-900 ">
              Blog Content
            </h2>
            
            {parse(content)}

           
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default BlogEditor