import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ExplorePage from './pages/ExplorePage';
import LikesPage from './pages/LikesPage';
import Sidebar from './components/Sidebar';
import SignUpPage from './pages/SignupPage';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

function App() {
  const { authUser } = useAuthContext();
  console.log('authUser', authUser);
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 max-w-5xl mx-auto my-5 text-white transition-all duration-300">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/likes" element={<LikesPage />} />
          <Route path="/Sidebar" element={<Sidebar />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
