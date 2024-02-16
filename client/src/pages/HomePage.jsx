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

  const getUserProfileAndRepos = useCallback(
    async ({ username = 'zeeshanMukhtar1' } = {}) => {
      try {
        setLoading(true);
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const user = await userRes.json();
        setuserProfile(user);

        const repoRes = await fetch(user.repos_url);
        const repo = await repoRes.json();
        console.log('API response for repositories:', repo);

        setRepos(repo);
        return { userProfile: user, repos: repo };
      } catch (error) {
        console.error(error);
        toast.error('User does not exist', error.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    getUserProfileAndRepos();
  }, []);

  const onSearch = async (e, username) => {
    e.preventDefault();
    setLoading(true);
    setRepos([]);
    setuserProfile(null);

    try {
      const { userProfile, repos } = await getUserProfileAndRepos({ username });
      console.log('Received repos in onSearch:', repos);
      setuserProfile(userProfile);
      setRepos(repos);
    } catch (error) {
      toast.error('The user does not exist', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-4">
      <Search onSearch={onSearch} />
      <SortRepos />
      <div className="flex flex-col items-start justify-center gap-4 lg:flex-row">
        {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
        {!loading && repos.length > 0 && <Repos repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default HomePage;
