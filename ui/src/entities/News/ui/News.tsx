import line from '@/assets/line.png';
import first from '@/assets/News/firsImg.png';
import second from '@/assets/News/second.png';
import third from '@/assets/News/third.png';
import {FC} from "react";

export const News:FC = () => {
  const state = [
    {
      img: first,
      title: 'The Best Fonts for Modern Design',
      auhtor: 'Admin',
      date: ' - january 25 2023',
      description: 'A leisurely start as not expected at our next campsite....',
    },
    {
      img: second,
      title: 'The Best Fonts for Modern Design',
      auhtor: 'Admin',
      date: ' - january 25 2023',
      description: 'A leisurely start as not expected at our next campsite....',
    },
    {
      img: third,
      title: 'The Best Fonts for Modern Design',
      auhtor: 'Admin',
      date: ' - january 25 2023',
      description: 'A leisurely start as not expected at our next campsite....',
    },
  ];

  return (
    <div className="h-[50rem] w-[100%]  p-40 pt-10">
      <div className="flex  flex-col">
        <div className="flex items-center">
          <img className=" h-[0.125rem] w-[1.6rem]" src={line} />
          <span className="font-inter ml-2 text-xs font-normal leading-normal text-[#525969]">
            Our Blog
          </span>
        </div>
        <h4 className="font-inter text-[3rem] font-semibold leading-normal text-[#1D2B4F]">
          Check <span className="text-custom-red">the News</span>
        </h4>
      </div>
      <div className="flex items-center justify-around gap-10 pt-10">
        {state.map((el, index) => {
          return (
            <div key={index} className="">
              <img className="h-[22.6rem] w-[22.5rem]" src={el.img} />
              <div className="flex flex-col gap-2 pt-4">
                <h4 className="font-josefin-sans text-[1.375rem] font-bold leading-[2.125rem] text-[#304050] underline">
                  {el.title}
                </h4>
                <span className="font-poppins text-xs font-normal leading-[0.75rem] text-[#9A9FA5]">
                  By{' '}
                  <span className="font-poppins text-xs font-medium leading-[0.75rem] text-[#304050]">
                    {el.auhtor}
                  </span>{' '}
                  <span>{el.date}</span>
                </span>
                <span className="font-inter text-base font-normal leading-[1.5rem] text-[#657280]">
                  {el.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


