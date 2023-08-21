const TalkToUs = () => {
    return (
        <div className='h-[40vh] w-screen bg-[#F5E2D4] p-4 flex justify-around items-center gap-[20rem]'>
            {/*text*/}
            <div className='w-[24rem]'>
                <h4 className='text-black font-josefin-sans font-bold text-[2.5rem]'>Talk to our Team.</h4>
                <span className='text-[#939393] text-[1rem] font-normal font-inter'>Learn more about the range of our services.
                Et ullum iisque conclusionemque eam, mel ad erat
            </span>
            </div>

            <button className="inline-flex h-[4rem] w-[10rem] rounded-[0.3125rem] justify-center items-center bg-[#F23802] mt-5">
                <span className='font-josefin-sans text-base font-bold leading-none text-white'>Contact Us</span>
            </button>
        </div>
    );
};

export default TalkToUs;