import React from 'react';

function About() {
  return (
    // Section container with ID for navigation and padding for spacing
    <div id="about" className="py-16 px-4 bg-base-200 rounded-xl"> {/* Use base-200 for slight contrast */}
       <div className="max-w-4xl mx-auto text-center"> {/* Center content and limit width */}
         <h2 className="text-4xl font-bold mb-8">About Me</h2>
         <div className="text-lg text-left space-y-4"> {/* Left-align text, add space between paragraphs */}
            <p>
            Greetings! I'm a graduate Computer Science student at Northeastern University with a unique background in Medical Laboratory Science. I have experience in various programming languages and tools, with interests spanning different areas of software development and computer science.
            </p>
            <p>
            My professional journey began in medical laboratories, where I developed analytical thinking and attention to detail skills. Recent advancements with various AI and LLM tools sparked my interest in computer science and have led me to explore its potential applications in healthcare. My unique background in medical laboratories gives me invaluable insights into the needs of both healthcare providers and patients when developing tools used by the healthcare industry, allowing me to approach programming challenges with a focus on end-users and the technical understanding needed to create AI solutions that meaningfully enhance clinical decision-making.
            </p>
            <p>
            In my freetime, I enjoy watching basketball games and TV shows. My favorite team to watch is the Golden State Warriors and some of my favorite shows include Dragon Ball, Naruto and One Piece.
            </p>
         </div>
       </div>
    </div>
  );
}

export default About;