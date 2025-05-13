import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      const response = await fetch("https://getform.io/f/bnlqvjqb", {
        method: "POST",
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: false });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <div id="contact" className="flex justify-center items-center w-full min-h-screen bg-base-200 px-5 py-5">
      <div className="xl:max-w-7xl bg-base-100 drop-shadow-xl w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="mx-auto w-full md:p-10 py-5 md:py-0">
          <h1 className="text-center text-2xl sm:text-3xl font-semibold text-primary mb-4">
            Get In Touch
          </h1>
          <p className="text-center text-base-content/80 mb-8">
            Interested in working together? Let's connect and discuss how we can collaborate on your next project.
          </p>
          <div className="w-full mt-5 sm:mt-8">
            <form onSubmit={handleSubmit} className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="input input-bordered input-primary w-full max-w-xs"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="input input-bordered input-primary w-full max-w-xs"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="input input-bordered input-primary w-full"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number (Optional)"
                className="input input-bordered input-primary w-full"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="textarea textarea-bordered textarea-primary w-full h-32"
                required
              ></textarea>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                <button 
                  type="submit" 
                  className="btn btn-primary btn-block max-w-[200px]"
                  disabled={status.loading}
                >
                  {status.loading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
              {status.success && (
                <div className="alert alert-success mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Message sent successfully!</span>
                </div>
              )}
              {status.error && (
                <div className="alert alert-error mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Failed to send message. Please try again.</span>
                </div>
              )}
            </form>
          </div>

          {/* Additional Contact Information */}
          <div className="mt-12 text-center">
            <p className="text-base-content/80 mb-4">Or reach out directly:</p>
            <div className="flex justify-center gap-6">
              <a 
                href="mailto:lingeorge04@gmail.com" 
                className="link link-primary"
              >
                Email
              </a>
              <a 
                href="https://www.linkedin.com/in/george-lin-504b57250/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="link link-primary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;