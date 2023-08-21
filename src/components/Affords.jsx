import firstImg from '../assets/afford/first.png'
import secondImg from '../assets/afford/second.png'



const Affords = () => {
    return (
        <div className='h-[40rem] w-screen  flex items-center  mt-10 '>
            {/*text*/}
            <div  className='flex flex-col w-[50%] pl-40 '>
                <h4 className='text-black font-josefin-sans font-bold text-[3rem]'>
                    What we can do for your <span className='text-red-500'>business</span>
                </h4>
                <span className='text-[#939393] text-[1rem] font-normal font-inter'>
                Learn more about the range of our services.
                Et ullum iisque conclusionemque eam, mel ad erat cum accumsan noluisse, nostrum accumsan movet salutandi.
                Fugit expetenda interesset no, probo eloquentiam mei eu.
                Sea id malorum dolor.
            </span>
                <button className="inline-flex h-[3rem] w-[8rem] p-[1.1875rem 1.8125rem]  rounded-[0.3125rem] justify-center items-center bg-[#F23802] mt-5">
                    <span className='font-josefin-sans text-base font-bold leading-none text-white'>Contact Us</span>
                </button>
            </div>
            {/*image*/}
            <div  className='flex gap-10 pl-20'>
                <img src={firstImg} className='w-[20rem] h-[23rem]'/>
                <img src={secondImg} className='w-[20rem] h-[23rem]'/>
            </div>
        </div>
    );
};

export default Affords;