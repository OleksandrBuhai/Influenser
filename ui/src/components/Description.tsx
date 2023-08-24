import { FC } from 'react';
import descriptionImg from '../assets/descriptionImg/img.png';
import listDec from '../assets/descriptionImg/listDecor.png';

const Description: FC = () => {
  return (
    <div className="inline-flex h-[100vh]  w-[100%] items-center gap-[10rem] p-40 ">
      {/*/image*/}
      <div className="flex w-[50%]">
        <img src={descriptionImg} className="h-[31.5rem] w-[35rem]" />
      </div>
      {/*text*/}
      <div className="flex w-[50%] flex-col ">
        <h4 className="font-josefin-sans text-[3rem] font-bold text-black">
          Build Your Social <span className="text-red-500">Marketing</span> With Us
        </h4>
        <span className="font-inter text-[1rem] font-normal text-[#939393]">
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which don't look
          even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
          sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
          generators on the Internet tend to repeat
        </span>
        <ul className="pt-5 font-josefin-sans text-[1rem] font-normal text-black  ">
          <li className="mb-2 flex items-center">
            <img className="h-5 w-5" src={listDec} />
            <span>Social Media Marketing</span>
          </li>
          <li className="mb-2 flex items-center ">
            <img className="h-5 w-5" src={listDec} />
            <span>Growth Business Development</span>
          </li>
          <li className="mb-2 flex items-center ">
            <img className="h-5 w-5" src={listDec} />
            <span>Market Research & Content Marketing</span>
          </li>
        </ul>
        <button className="p-[1.1875rem 1.8125rem] bg-primary mt-5 inline-flex  h-[3rem] w-[8rem] items-center justify-center rounded-[0.3125rem]">
          <span className="font-josefin-sans text-base font-bold leading-none text-white">
            Learn More
          </span>
        </button>
      </div>
    </div>
  );
};

export default Description;
