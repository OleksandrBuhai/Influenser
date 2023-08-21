import descriptionImg from '../assets/descriptionImg/img.png'
import listDec from '../assets/descriptionImg/listDecor.png'

const Description = () => {
    return (
        <div className='h-[100vh] w-[100%]  inline-flex items-center p-40 gap-[10rem] '>
            {/*/image*/}
            <div className='flex w-[50%]'>
            <img src={descriptionImg} className='w-[35rem] h-[31.5rem]'/>
            </div>
            {/*text*/}
            <div  className='flex w-[50%] flex-col '>
                <h4 className='text-black font-josefin-sans font-bold text-[3rem]'>Build Your Social <span className='text-red-500'>Marketing</span> With Us</h4>
                <span className='text-[#939393] text-[1rem] font-normal font-inter'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                    or randomised words which don't look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    All the Lorem Ipsum generators on the Internet tend to repeat
                </span>
                <ul className='text-black font-josefin-sans text-[1rem] font-normal pt-5  '>
                    <li className="flex items-center mb-2">
                        <img className='h-5 w-5' src={listDec}/>
                    <span>Social Media Marketing</span></li>
                    <li className="flex items-center mb-2 ">
                        <img className='h-5 w-5' src={listDec}/>
                        <span>Growth Business Development</span></li>
                    <li className="flex items-center mb-2 ">
                        <img className='h-5 w-5' src={listDec}/>
                        <span>Market Research & Content Marketing</span></li>
                </ul>
                <button className="inline-flex h-[3rem] w-[8rem] p-[1.1875rem 1.8125rem]  rounded-[0.3125rem] justify-center items-center bg-[#F23802] mt-5">
                    <span className='font-josefin-sans text-base font-bold leading-none text-white'>Learn More</span>
                </button>
            </div>
        </div>
    );
};

export default Description;