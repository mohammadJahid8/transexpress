import Steps from '@/components/global/steps';
import Banner from '../components/global/banner';
import Services from '@/components/global/services';
import ChooseUs from '@/components/global/choose-us';
import Faqs from '@/components/global/faq';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Banner />
      <div className=''>
        <Steps />
        <Services />
        <ChooseUs />
        <Faqs />
      </div>
    </div>
  );
};

export default Home;
