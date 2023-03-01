import React from 'react';
import sunflower from '../images/sunflower.png';
import love1 from '../images/love1.jpg';
import love2 from '../images/love2.jpg';
import love3 from '../images/love3.jpg';
import love4 from '../images/love4.jpg';
import love5 from '../images/love5.jpg';
import love7 from '../images/love7.jpg';
import YouTube from 'react-youtube';

const MainFile = () => {
  const opts = {
    height: '200',
    width: '200',
    playerVars: {
      autoplay: 1,
      loop: 1,
    }
  };
  return (
    <div className='flex flex-col items-center' >
      <h1 className='text-lg text-center px-16 pt-16 text-purple-900'>Happy <span className='text-2xl text-gray-800'>41st</span> Monthsary Lovey!</h1>
      <img src={sunflower} alt="sunflower" className='w-52' />
      <p className='font-semibold text-sm p-10 text-justify'>My love, you are like a sunflower, always brightening up my world with your beauty and positivity. Your inner strength and resilience inspire me, and I am grateful for your love. You make my life more colorful and joyful, and I want to keep you by my side always.</p>
      <YouTube videoId="XfRDAj0Ny1E" opts={opts} />
      <div className='gallery flex flex-wrap justify-center gap-1 mt-5'>
        <img src={love1} alt="" />
        <img src={love2} alt="" />
        <img src={love3} alt="" />
        <img src={love4} alt="" />
        <img src={love5} alt="" />
        <img src={love7} alt="" />
      </div>
      <h1 className='float-left mt-10 text-2xl text-purple-800'>Liham</h1>
      <p className='font-semibold text-sm p-10 text-justify'>Happy Happy 41st monthsary, wala na akong mahihiling pa thankyou sa lahat lahat love. Thankyou dahil kahit kelan hindi ka sumuko patuloy tayo lumalaban kaya ayan mag 4 yrs na tayo. I love you always lagi mong tandaan yan hehehe mwaaa<h3 className='float-right mt-10'>- Adrian</h3></p>

    </div >
  );
};

export default MainFile;
