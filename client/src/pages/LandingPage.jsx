import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import WorkInProgressBanner from '@/components/WorkInProgressBanner';

const LandingPage = () => {
  return (
    <div>
      <WorkInProgressBanner />
      <Hero />
      <TrustedBy />
    </div>
  );
};

export default LandingPage;
