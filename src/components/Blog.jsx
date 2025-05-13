import React from 'react';
import blogCatImg from '../assets/BlogCat.png';

const Blog = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-primary mb-4">Blog Coming Soon</h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-base-content/80 mb-6">
            I'm currently working on creating a space to share my thoughts and experiences about computer science, healthcare, and my journey in tech.
          </p>
          <div className="max-w-md mx-auto mb-8">
            <img 
              src={blogCatImg} 
              alt="Blog Cat" 
              className="w-full h-auto mix-blend-multiply"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="loading loading-spinner loading-lg text-primary"></div>
            <p className="text-base-content/70">
              Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 