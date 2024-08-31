import { Link } from 'react-router-dom';
import { IoHomeSharp } from 'react-icons/io5';
import { TfiWrite } from 'react-icons/tfi';
import { RiHeartAddFill } from 'react-icons/ri';

import Logout from './Logout';
import { useAuthContext } from '../context/AuthContext';
import { RiLoginCircleFill } from 'react-icons/ri';
import { GoTelescopeFill } from 'react-icons/go';

const Sidebar = () => {
  const { authUser } = useAuthContext();

  return (
    <aside className="sticky top-0 left-0 flex flex-col items-center h-screen py-8 overflow-y-auto border-r min-w-12 sm:w-16 bg-glass">
      <nav className="flex flex-col h-full gap-3">
        <Link to="/" className="flex justify-center">
          <img className="h-8" src="/github.svg" alt="Github Logo" />
        </Link>

        <Link
          to="/home"
          className="p-1.5 flex justify-center transition-colors duration-200 rounded-lg 
					hover:bg-gray-800"
        >
          <IoHomeSharp size={20} />
        </Link>

        {authUser && (
          <Link
            to="/likes"
            className="p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <RiHeartAddFill size={22} />
          </Link>
        )}

        {authUser && (
          <Link
            to="/explore"
            className="p-1.5  flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <GoTelescopeFill size={25} />
          </Link>
        )}

        {!authUser && (
          <Link
            to="/login"
            className="p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <RiLoginCircleFill size={25} />
          </Link>
        )}

        {!authUser && (
          <Link
            to="/signup"
            className="p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <TfiWrite size={25} />
          </Link>
        )}
        {authUser && (
          <div className="flex flex-col gap-2 mt-auto">
            <Logout />
          </div>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
