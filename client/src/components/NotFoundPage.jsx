import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        className="mb-8"
        src="https://assets-global.website-files.com/5e0a5d9d743608d0f3ea6753/65819264a7a62c9422e9df54_Vectors-Wrapper.svg"
        alt="404 Not Found"
      />
      {/* <img className="mb-8" src="/Not_Found.svg" alt="404 Not Found" /> */}
      <h1 className="mb-2 text-4xl font-bold">Why are you here?</h1>
      <h4 className="mb-6 text-lg text-gray-600">
        You’re not supposed to be here.
      </h4>
      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
        <Link to="/">Go back to home</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
