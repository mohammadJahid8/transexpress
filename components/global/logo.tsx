/* eslint-disable @next/next/no-img-element */

const Logo = ({ url = '/transexpress.png' }: { url?: string }) => {
  return (
    <img
      src={url}
      className='w-[160px] lg:w-[220px] h-[40px] lg:h-[60px]'
      alt='logo'
    />
  );
};

export default Logo;
