import React from 'react';
import { FaHeartCircleCheck } from 'react-icons/fa6';
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const LikeProfile = ({ userProfile }) => {
  const { authUser } = useAuthContext();
  const isOwnProfile = authUser?.username === userProfile.login;

  const handleLikeProfile = async () => {
    try {
      const res = await fetch(`/api/users/like/${userProfile.login}`, {
        method: 'POST',
        credentials: 'include',
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      Toaster.success('Profile liked successfully');
    } catch (error) {
      console.error(error.message);
      toast.error('An error occurred', error.message);
    }
  };

  if (!authUser) return null;
  if (isOwnProfile) return null;
  return (
    <div>
      <button
        className="flex items-center w-full gap-2 p-2 text-xs font-medium border border-blue-400 rounded-md cursor-pointer bg-glass"
        onClick={handleLikeProfile}
      >
        <FaHeartCircleCheck size={16} />
        Like Profile
      </button>
    </div>
  );
};

export default LikeProfile;