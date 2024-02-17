import React from 'react';
import { FaHeartCircleCheck } from 'react-icons/fa6';
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const LikeProfile = ({ userProfile }) => {
  const { authUser } = useAuthContext();
  const isOwnProfile = authUser?.username === userProfile.login;

  const handleLikeProfile = async () => {
    try {
      const res = await fetch(`/api/users/like/${userProfile.login}`, {
        method: 'POST',
        credentials: 'include',
      });

      if (res.status === 404) {
        throw new Error('target user is not a member of this app');
        toast.error('User is not a member of this app');
      }

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      toast.success(data.message);
    } catch (error) {
      console.error('Error:', error.message);
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
