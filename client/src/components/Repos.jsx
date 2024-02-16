import React from 'react';
import Repo from './Repo';

const Repos = ({ repos, alwaysFullScreen = false }) => {
  console.log('Received repos in Repos component:', repos);
  const className = alwaysFullScreen ? 'w-full' : 'lg:w-2/3 w-full';

  return (
    <div className={`${className} bg-glass rounded-lg px-8 py-6`}>
      <ol className="relative border-gray-200 border-s">
        {repos.map((repo) => (
          <Repo key={repo.id} repo={repo} />
        ))}
        {repos.length === 0 && (
          <p className="flex items-center justify-center h-32 ">
            No repos found
          </p>
        )}
      </ol>
    </div>
  );
};

export default Repos;
