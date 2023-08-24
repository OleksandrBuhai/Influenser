import { FC } from 'react';
import firstIMg from '@/assets/team/first.png';
import secondImg from '@/assets/team/Second.png';
import thirdIMg from '@/assets/team/Third.png';

import calendar from '@/assets/team/smalmg/calendar.png';
import profile from '@/assets/team/smalmg/profile.png';
import chat from '@/assets/team/smalmg/chat.png';

export const Team: FC = () => {
  const state = [
    {
      img: firstIMg,
      name: 'Martin Guptill',
      position: 'Senior at Business',
    },
    {
      img: secondImg,
      name: 'Martin Guptill',
      position: 'Senior at Business',
    },
    {
      img: thirdIMg,
      name: 'Martin Guptill',
      position: 'Senior at Business',
    },
  ];

  return (
    <div className="flex  h-[50rem] w-screen flex-col items-center  p-40 pt-[10rem] ">
      <div className=" flex  gap-[12rem]">
        <h4 className="  w-[28rem] font-josefin-sans text-[3rem] font-bold leading-[140%] text-black">
          Meet our team of <span className="text-red-500">Creatives</span>
        </h4>
        <span className=" font-inter m-auto w-[31rem] pl-[10rem] text-base font-normal text-[#939393] ">
          Et ullum iisque conclusionemque eam, mel ad erat cum accumsan ei noluisse, nostrum
          accumsan salutandi eam cu.
        </span>
      </div>
      <div className="flex items-center justify-around gap-10 pt-10">
        {state.map((el, index) => {
          return (
            <div key={index} className="">
              <img className="h-[22.6rem] w-[22.5rem]" src={el.img} />
              <div className="flex items-center justify-between pt-4">
                <div>
                  <h4 className="font-inter text-lg font-semibold leading-normal text-[#1D2B4F]">
                    {el.name}
                  </h4>
                  <span className="font-inter text-xs font-normal leading-normal text-[#525969]">
                    {el.name}
                  </span>
                </div>
                <div className="flex gap-5">
                  <img className="h-[1.5rem] w-[1.5rem]" src={calendar} />
                  <img className="h-[1.5rem] w-[1.5rem]" src={profile} />
                  <img className="h-[1.5rem] w-[1.5rem]" src={chat} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
