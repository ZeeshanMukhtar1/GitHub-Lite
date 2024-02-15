import React from 'react';

const SortRepos = () => {
  return (
    <div className="flex justify-center mb-2 lg:justify-end">
      <button
        type="button"
        className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass`}
      >
        Most Recent
      </button>
      <button
        type="button"
        className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass`}
      >
        Most Stars
      </button>
      <button
        type="button"
        className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass`}
      >
        Most Forks
      </button>
    </div>
  );
};

export default SortRepos;
