import React from "react";
import mssgIcon from "../../../assets/mmmm(3).jfif";
const LetsTalk = () => {
  return (
    <div>
      <div className="grid mt-28 max-w-7xl grid-cols-1 gap-8 mx-auto rounded-lg px-4 md:grid-cols-2">
        <div className="flex flex-col justify-between">
          <div className="space-y-2 relative">
            <div className="z-10 relative pl-10">
              <h2 className="text-2xl font-bold leading-tight lg:text-3xl text-yellow-700">
                LET’S START A CONVERSATION!
              </h2>
              <span className="text-gray-500 font-bold text-xl">
                Any Question ?
              </span>
            </div>
            <img
              src={mssgIcon}
              alt=""
              className="c-postion -top-20 left-0 absolute z-1 h-52"
            />
          </div>
        </div>
        <form
          novalidate=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label for="name" className="text-xl">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded bg-gray-100"
            />
          </div>
          <div>
            <label for="email" className="text-xl">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded bg-gray-100"
            />
          </div>
          <div>
            <label for="message" className="text-xl">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full h-32 resize-none p-3 rounded bg-gray-100"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-yellow-700 text-gray-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default LetsTalk;
