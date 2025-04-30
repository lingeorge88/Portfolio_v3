import React from "react";


function Footer(){
    return (
<footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
  <aside className="text-center">
    <p className="font-bold">
      Handcrafted by me
      <br />
      Powered by{' '}
      <a href="https://daisyui.com/" target="_blank" rel="noopener noreferrer" className="link link-hover">
         🌼 DaisyUI 
      </a> 
      {' '}and{' '} 
      <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="link link-hover">
         ⚛️ ReactJS
      </a>
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
        </svg>
      </a>
      <a href="https://youtube.com/your-channel" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>

    )

}

export default Footer;