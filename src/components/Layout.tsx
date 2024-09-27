import React from "react";
import Image from "next/image";

export default function Layout() {
  return (
    <div className="pr-6 ">
      <div className="max-w-xl mx-auto px-0">
        <div className="flex items-center justify-between h-16">
          {/*<span className="text-3xl text-white font-bold">Allen</span> */}
          <div className="pr-6">
            <Image
              src="/pfpAllen.png"
              width={49}
              height={49}
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              alt="Allen Chrisso Dhas"
            />
          </div>
          <div className=" flex justify-center items-center space-x-6">
            <a
              href="https://linkedin.com/in/allenchrissodhas"
              target="top"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-zinc-200 duration-200 ease-in-out"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                fill="currentColor"
                viewBox="0 0 30 30"
                className="h-8 w-8"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/allencdhas"
              target="top"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-zinc-200 duration-200 ease-in-out"
            >
              <span className="sr-only">Twitter</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-8 w-8"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a
              href="https://github.com/allencdhas"
              target="top"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-zinc-200 duration-200 ease-in-out"
            >
              <span className="sr-only">GitHub</span>
              <svg
                fill="currentColor"
                viewBox="0 0 30 30"
                className="h-8 w-8"
                aria-hidden="true"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </a>
            <a
              href="mailto:allencdvja@gmail.com"
              target="top"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-zinc-200 duration-200 ease-in-out"
            >
              <span className="sr-only">Email</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-8 w-8"
                aria-hidden="true"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}