import React from 'react';
import Repo from './Repo';

const Repos = () => {
  return (
    <div className={`lg:w-2/3 w-full bg-glass rounded-lg px-8 py-6`}>
      <ol className="relative border-gray-200 border-s">
        <Repo />
        <Repo />
        <Repo />
      </ol>
    </div>
  );
};

export default Repos;
