import ProfileInfo from '../components/ProfileInfo';
import Repos from '../components/Repos';
import Search from '../components/Search';
import SortRepos from '../components/SortRepos';
import Spinner from '../components/Spinner';

const HomePage = () => {
  return (
    <div className="m-4">
      <Search />
      <SortRepos />
      <div className="flex flex-col items-start justify-center gap-4 lg:flex-row">
        <ProfileInfo />
        <Repos />
        <Spinner />
      </div>
    </div>
  );
};

export default HomePage;
