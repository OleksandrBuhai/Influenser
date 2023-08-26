
import firstImg from '@/assets/afford/first.png';
import secondImg from '@/assets/afford/second.png';
import {FC} from "react";

export const Affords:FC = () => {
  return (
    <div className="mt-10 flex flex-col sm:flex-row h-auto w-full items-center">
      {/*text*/}
      <div className="flex w-[50%] flex-col pl-40 ">
        <h4 className="font-josefin-sans text-[3rem] font-bold text-black">
          What we can do for your <span className="text-red-500">business</span>
        </h4>
        <span className="font-inter text-[1rem] font-normal text-[#939393]">
          Learn more about the range of our services. Et ullum iisque conclusionemque eam, mel ad
          erat cum accumsan noluisse, nostrum accumsan movet salutandi. Fugit expetenda interesset
          no, probo eloquentiam mei eu. Sea id malorum dolor.
        </span>
        <button className="bg-primary mt-5 inline-flex h-[3rem]  w-[8rem] items-center justify-center rounded-[0.3125rem]">
          <span className="font-josefin-sans text-base font-bold leading-none text-white">
            Contact Us
          </span>
        </button>
      </div>
      {/*image*/}
      <div className="flex gap-10 pl-20">
        <img src={firstImg} className="h-[23rem] w-[20rem]" />
        <img src={secondImg} className="h-[23rem] w-[20rem]" />
      </div>
    </div>
  );
};


