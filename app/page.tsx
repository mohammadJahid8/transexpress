import Steps from '@/components/global/steps';
import Banner from '../components/global/banner';
import Services from '@/components/global/services';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Banner />
      <div className='px-4'>
        <Steps />
        <Services />
      </div>
    </div>
  );
};

export default Home;
