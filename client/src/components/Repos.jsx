import React from 'react';
import Repo from './Repo';

const Repos = ({ repos }) => {
  return (
    <div className={`lg:w-2/3 w-full bg-glass rounded-lg px-8 py-6`}>
      <ol className="relative border-gray-200 border-s">
        {repos.map((repo) => {
          return <Repo key={repo.id} repo={repo} />;
        })}

        {repos.length === 0 && (
          <div className="flex items-center justify-center h-32">
            <p className="text-gray-500">No repos found</p>
          </div>
        )}
      </ol>
    </div>
  );
};

export default Repos;
