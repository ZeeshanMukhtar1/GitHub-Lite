import ProfileInfo from '../components/ProfileInfo';
import Repos from '../components/Repos';
import Search from '../components/Search';
import SortRepos from '../components/SortRepos';
import Spinner from '../components/Spinner';
import { useCallback, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const HomePage = () => {
  const [userProfile, setuserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setsortType] = useState('recent');

  const getUserProfileAndRepos = useCallback(async () => {
    try {
      setLoading(true);
      const userRes = await fetch('https://api.github.com/users/qadir0108');
      const user = await userRes.json();
      setuserProfile(user);
      const repoRes = await fetch(user.repos_url);
      const repo = await repoRes.json();
      setRepos(repo);
      console.log('userprofile is', user);
      console.log('repos are', repo);
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch user profile and repos', error.message);
    } finally {
      setLoading(false);
    }
  }, []); // Removed the extra parenthesis

  useEffect(() => {
    getUserProfileAndRepos();
  }, []);

  useEffect(() => {
    getUserProfileAndRepos();
  }, []);

  return (
    <div className="m-4">
      <Search />
      <SortRepos />
      <div className="flex flex-col items-start justify-center gap-4 lg:flex-row">
        <ProfileInfo userProfile={userProfile} />
        <Repos />
        <Spinner />
      </div>
    </div>
  );
};

export default HomePage;
