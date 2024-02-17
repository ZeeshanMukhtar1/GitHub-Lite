import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Spinner from '../components/Spinner';
import Repos from '../components/Repos';

const ExplorePage = () => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const exploreRepos = async (language) => {
    setLoading(true);
    try {
      const res = await fetch('/api/explore/repos/' + language);
      const { repos } = await res.json();
      setRepos(repos);
      setSelectedLanguage(language);
    } catch (error) {
      console.error('Failed to fetch repositories', error);
      toast.error('Failed to fetch repositories');
      a;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4">
      <div className="max-w-2xl p-4 mx-auto rounded-md bg-glass">
        <h1 className="text-xl font-bold text-center">
          Explore Popular Repositories
        </h1>
        <div className="flex flex-wrap justify-center gap-2 my-2">
          <img
            src="/javascript.svg"
            alt="JavaScript"
            className="cursor-pointer h-11 sm:h-20"
            onClick={() => exploreRepos('javascript')}
          />
          <img
            src="/typescript.svg"
            alt="TypeScript logo"
            className="cursor-pointer h-11 sm:h-20"
            onClick={() => exploreRepos('typescript')}
          />
          <img
            src="/c++.svg"
            alt="C++ logo"
            className="cursor-pointer h-11 sm:h-20"
            onClick={() => exploreRepos('c++')}
          />
          <img
            src="/python.svg"
            alt="Python logo"
            className="cursor-pointer h-11 sm:h-20"
            onClick={() => exploreRepos('python')}
          />
          <img
            src="/java.svg"
            alt="Java logo"
            className="cursor-pointer h-11 sm:h-20"
            onClick={() => exploreRepos('java')}
          />
        </div>
        {repos.length > 0 && (
          <h2 className="my-4 text-lg font-semibold text-center">
            <span className="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full">
              {selectedLanguage.toUpperCase()} Repositories
            </span>
          </h2>
        )}
        {loading && <Spinner />}
        {!loading && <Repos repos={repos} alwaysFullScreen />}
      </div>
    </div>
  );
};

export default ExplorePage;
