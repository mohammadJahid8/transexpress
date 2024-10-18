import Steps from '@/components/global/steps';
import Banner from '../components/global/banner';
import Services from '@/components/global/services';
import ChooseUs from '@/components/global/choose-us';
import Faqs from '@/components/global/faq';
import Subscribe from '@/components/global/subscribe';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Banner />
      <div className=''>
        <Steps />
        <Services />
        <ChooseUs />
        <Faqs />
        <Subscribe />
      </div>
    </div>
  );
};

export default Home;
