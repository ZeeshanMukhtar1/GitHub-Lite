import { FaHeart } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { formatDate } from '../utils/functions';

// ... (other imports)

const LikesPage = () => {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const getLikes = async () => {
      try {
        const res = await fetch('/api/users/likes', { credentials: 'include' });
        const data = await res.json();
        if (data.error) throw new Error(data.error);

        setLikes(data.likedBy);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getLikes();
  }, []);

  console.log('likes:', likes);

  return (
    <div className="relative px-4 overflow-x-auto rounded-lg shadow-md">
      <table className="w-full overflow-hidden text-sm text-left rtl:text-right bg-glass">
        <thead className="text-xs uppercase bg-glass">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">#</div>
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {likes.map((user, index) => (
            <tr key={user._id} className="border-b bg-glass">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <span>{index + 1}</span>
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 whitespace-nowrap"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.avatarUrl}
                  alt="user image"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">{user[0]}</div>
                </div>
              </th>
              <td className="px-6 py-4">{formatDate(user.likedDate)}</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <FaHeart size={22} className="mx-2 text-red-500" />
                  Liked your profile
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LikesPage;
