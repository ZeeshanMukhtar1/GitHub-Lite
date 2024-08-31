import BlurFade from './magicui/blur-fade';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-10 px-4 mt-10">
        <BlurFade delay={0.1}>
          <h2 className="max-w-[700px] text-4xl font-bold leading-normal md:text-6xl">
            Discover{' '}
            <span className="text-transparent bg-gradient-to-r from-indigo-500 to-purple-300 bg-clip-text">
              GitHub Profiles
            </span>{' '}
            with{' '}
            <span className="text-transparent bg-gradient-to-r from-indigo-500 to-purple-300 bg-clip-text">
              Ease
            </span>
            ✨
          </h2>
        </BlurFade>
        <BlurFade delay={0.25}>
          <p className=" text-justify mb-6 max-w-[800px] text-base leading-normal  md:text-xl">
            GitHub Lite simplifies the way you explore GitHub profiles and
            repositories. Like your favorite profiles, view your liked profiles,
            and discover new repositories all in one place. Experience a
            cleaner, faster, and more intuitive GitHub exploration experience.
          </p>
          <Link to="/home">
            <button className="relative items-center justify-center inline-block px-8 py-3 mx-auto font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
              Explore Now
            </button>
          </Link>
        </BlurFade>
      </div>
    </div>
  );
};
export default Hero;
