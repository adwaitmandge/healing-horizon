import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl `mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link href="/" className="inline-block" aria-label="Cruip">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      cx="21.152%"
                      cy="86.063%"
                      fx="21.152%"
                      fy="86.063%"
                      r="79.941%"
                      id="footer-logo"
                    >
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                  </defs>
                  <rect
                    width="32"
                    height="32"
                    rx="16"
                    fill="url(#footer-logo)"
                    fillRule="nonzero"
                  />
                </svg>
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                Terms
              </Link>{" "}
              ·{" "}
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Web Studio
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  DynamicBox Flex
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Programming Forms
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Integrations
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Command-line
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Documentation
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Tutorials & Guides
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Support Center
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  About us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Company values
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
            <p className="text-sm text-gray-600 mb-4">
              Get the latest news and articles to your inbox every month.
            </p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
                      placeholder="Your email"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <span
                        className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
