import { Link } from 'react-router-dom';

const WorkInProgressBanner = () => {
  return (
    <div className="bg-blue-300 p-2 text-center text-sm text-black">
      🚧 We&#39;re building this together, found a bug or have a feature idea?
      <Link
        href="https://github.com/ZeeshanMukhtar1/GitHub-Lite/issues"
        target="_blank"
        className="bold mx-1 font-semibold underline-offset-4 hover:underline"
      >
        Create an issue on GitHub!
      </Link>
      🚧
    </div>
  );
};
export default WorkInProgressBanner;
