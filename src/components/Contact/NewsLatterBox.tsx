"use client";

import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
  <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
    Contact Details
  </h3>
  <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark">
    Reach out to us via the following contact details, or start a conversation with us on WhatsApp.
  </p>
  <div>
    <div className="mb-6 flex items-center">
      <span className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
        📞
      </span>
      <p className="text-base text-body-color dark:text-body-color-dark">
        <a href="tel:+1234567890" className="hover:underline">
        +94 71 124 7238
        </a>
      </p>
    </div>
    <div className="mb-6 flex items-center">
      <span className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
        📧
      </span>
      <p className="text-base text-body-color dark:text-body-color-dark">
        <a href="mailto:contact@example.com" className="hover:underline">
        kurunegalaidsu@gmail.com
        </a>
      </p>
    </div>
    <div className="mb-6 flex items-center">
      <span className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
        📍
      </span>
      <p className="text-base text-body-color dark:text-body-color-dark">
      22/1, Wilgoda road, Kurunegala, Sri Lanka
      </p>
    </div>
    <div className="mb-6 flex items-center">
      <span className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
        💬
      </span>
      <p className="text-base text-body-color dark:text-body-color-dark">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Chat with us on WhatsApp
        </a>
      </p>
    </div>
  </div>
  <p className="text-center text-sm leading-relaxed text-body-color dark:text-body-color-dark mt-4">
    We value your feedback and inquiries. Feel free to contact us anytime!
  </p>

  {/* Decorative Background Shapes */}
  <div>
    <span className="absolute left-2 top-7">
      <svg
        width="57"
        height="65"
        viewBox="0 0 57 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
          fill="url(#paint0_linear_contact)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_contact"
            x1="-18.3187"
            y1="55.1044"
            x2="37.161"
            y2="15.3509"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              stopColor="#4A6CF7"
              stopOpacity="0.62"
            />
            <stop
              offset="1"
              stopColor="#4A6CF7"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span className="absolute bottom-24 left-1.5">
      <svg
        width="39"
        height="32"
        viewBox="0 0 39 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M14.7137 31.4215L38.6431 4.24115L6.96581e-07 0.624124L14.7137 31.4215Z"
          fill="url(#paint1_linear_contact)"
        />
        <defs>
          <linearGradient
            id="paint1_linear_contact"
            x1="39.1948"
            y1="38.335"
            x2="10.6982"
            y2="10.2511"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              stopColor="#4A6CF7"
              stopOpacity="0.62"
            />
            <stop
              offset="1"
              stopColor="#4A6CF7"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
      </svg>
    </span>
  </div>
</div>

  );
};

export default NewsLatterBox;
