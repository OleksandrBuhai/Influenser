import {FC} from "react";

export const TalkToUs:FC = () => {
    return (
        <div className="flex h-[40vh] w-screen items-center justify-around gap-[20rem] bg-[#F5E2D4] p-4">
            {/*text*/}
            <div className="w-[24rem]">
                <h4 className="font-josefin-sans text-[2.5rem] font-bold text-black">Talk to our Team.</h4>
                <span className="font-inter text-[1rem] font-normal text-[#939393]">
          Learn more about the range of our services. Et ullum iisque conclusionemque eam, mel ad
          erat
        </span>
            </div>

            <button className="bg-primary mt-5 inline-flex h-[4rem] w-[10rem] items-center justify-center rounded-[0.3125rem]">
        <span className="font-josefin-sans text-base font-bold leading-none text-white">
          Contact Us
        </span>
            </button>
        </div>
    );
};