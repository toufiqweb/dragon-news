import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content mt-20">
      <div className="footer max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <aside>
          <h2 className="text-3xl font-bold mb-3">Dragon News</h2>
          <p className="text-sm leading-7 text-gray-300">
            Journalism Without Fear or Favour. Stay updated with breaking news,
            trending stories, world politics, sports, entertainment, and more.
          </p>

          <div className="mt-5 flex gap-3">
            <div className="badge badge-outline badge-primary">
              Trusted News
            </div>
            <div className="badge badge-outline badge-secondary">
              24/7 Updates
            </div>
          </div>
        </aside>

        <nav>
          <h6 className="footer-title">News Categories</h6>
          <a className="link link-hover">Breaking News</a>
          <a className="link link-hover">International</a>
          <a className="link link-hover">Sports</a>
          <a className="link link-hover">Entertainment</a>
          <a className="link link-hover">Technology</a>
        </nav>

        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Career</a>
          <a className="link link-hover">Advertise</a>
          <a className="link link-hover">Press Kit</a>
        </nav>

        <nav>
          <h6 className="footer-title">Newsletter</h6>

          <p className="text-sm text-gray-300 mb-4">
            Subscribe to get daily breaking news directly to your inbox.
          </p>

          <div className="form-control w-full">
            <div className="join">
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered join-item w-full text-black"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </div>
        </nav>
      </div>

      <div className="border-t border-neutral-content/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Dragon News. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a className="btn btn-circle btn-sm btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>

            <a className="btn btn-circle btn-sm btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>

            <a className="btn btn-circle btn-sm btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333c0-.955.192-1.333 1.115-1.333H18v-5h-3.808C10.596 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
