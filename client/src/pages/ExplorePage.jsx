const ExplorePage = () => {
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
          />
          <img
            src="/typescript.svg"
            alt="TypeScript logo"
            className="cursor-pointer h-11 sm:h-20"
          />
          <img
            src="/c++.svg"
            alt="C++ logo"
            className="cursor-pointer h-11 sm:h-20"
          />
          <img
            src="/python.svg"
            alt="Python logo"
            className="cursor-pointer h-11 sm:h-20"
          />
          <img
            src="/java.svg"
            alt="Java logo"
            className="cursor-pointer h-11 sm:h-20"
          />
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
