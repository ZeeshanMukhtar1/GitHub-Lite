import { MdLogout } from 'react-icons/md';

const Logout = () => {
  return (
    <>
      <img
        src={
          'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
        }
        className="w-10 h-10 border border-gray-800 rounded-full"
      />

      <div className="flex items-center p-2 mt-auto border border-gray-800 rounded-lg cursor-pointer bg-glass">
        <MdLogout size={22} />
      </div>
    </>
  );
};

export default Logout;
