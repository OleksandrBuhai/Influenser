import { FC } from 'react';
import descriptionImg from '@/assets/descriptionImg/img.png';
import listDec from '@/assets/descriptionImg/listDecor.png';

export const Description: FC = () => {
  return (
      <div className="inline-flex h-[100vh] sm:h-full sm:w-full  w-[100%] items-center gap-[10rem] p-10 sm:p-20 lg:p-40">
        {/*/image*/}
        <div className="flex w-[50%] sm:flex sm:w-100%">
          <img src={descriptionImg} className="h-[31.5rem] w-[35rem]" alt="" />
        </div>
        {/*text*/}
        <div className="flex w-[50%] sm:flex-col ">
          <h4 className="font-josefin-sans text-xl sm:text-3xl lg:text-4xl font-bold text-black mb-3">
            Build Your Social <span className="text-red-500">Marketing</span> With Us
          </h4>
          <p className="font-inter text-sm sm:text-base lg:text-lg text-[#939393] mb-5">
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don't look
            even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
            generators on the Internet tend to repeat
          </p>
          <ul className="pt-2 sm:pt-3 font-josefin-sans text-sm sm:text-base lg:text-lg text-black">
            <li className="mb-2 flex items-center">
              <img className="h-4 w-4 sm:h-5 sm:w-5 mr-2" src={listDec} alt="" />
              <span>Social Media Marketing</span>
            </li>
            <li className="mb-2 flex items-center ">
              <img className="h-4 w-4 sm:h-5 sm:w-5 mr-2" src={listDec} alt="" />
              <span>Growth Business Development</span>
            </li>
            <li className="mb-2 flex items-center ">
              <img className="h-4 w-4 sm:h-5 sm:w-5 mr-2" src={listDec} alt="" />
              <span>Market Research & Content Marketing</span>
            </li>
          </ul>
          <button className="p-[0.75rem 1.5rem] bg-primary mt-3 sm:mt-5 inline-flex h-[2.5rem] sm:h-[3rem] w-[7rem] sm:w-[8rem] items-center justify-center rounded-[0.3125rem]">
          <span className="font-josefin-sans text-sm sm:text-base font-bold leading-none text-white">
            Learn More
          </span>
          </button>
        </div>
      </div>
  );
};
