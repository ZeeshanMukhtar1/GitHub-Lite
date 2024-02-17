import { useAuthContext } from '../context/AuthContext';
import { Toaster } from 'react-hot-toast';
import { IoMdLogOut } from 'react-icons/io';

const Logout = () => {
  const { authUser, setAuthUser } = useAuthContext();
  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', { credentials: 'include' });
      const data = await res.json();
      setAuthUser(null);
    } catch (error) {
      Toaster.error(error.message);
    }
  };
  return (
    <>
      <img
        src={
          authUser
            ? authUser.avatarUrl
            : 'https://avatars.githubusercontent.com/u/583231?v=4'
        }
        className="w-10 h-10 border border-gray-800 rounded-full"
      />

      <div
        className="flex items-center p-2 mt-auto border border-gray-800 rounded-lg cursor-pointer bg-glass"
        onClick={handleLogout}
      >
        <IoMdLogOut size={22} />
      </div>
    </>
  );
};

export default Logout;
