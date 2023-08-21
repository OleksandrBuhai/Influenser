import mainImg from '../assets/testimonials/mainImg.png'
import line from '../assets/line.png'

import firstImg from '../assets/team/first.png'
import secondImg from '../assets/team/Second.png'
import thirdImg from '../assets/team/Third.png'

import arrow from '../assets/arrow.png'

const Testimonial = () => {
    return (
        <div className='h-[100vh] w-[100%]  pt-20 p-40'>
            <div className='flex  flex-col'>
                <div className='flex items-center'>
                    <img className=' w-[1.6rem] h-[0.125rem]' src={line}/>
                    <span
                        className='ml-2 text-[#525969] font-inter text-xs font-normal leading-normal'>testimonials</span>

                </div>
                <h4 className='text-[#1D2B4F] font-inter text-[3rem] font-semibold leading-normal'>
                    Our <span className='text-red-500'>Patients</span>
                </h4>
            </div>
            <div className='flex items-center gap-[5rem]'>
                {/*/image*/}
                <div className='flex w-[50%]'>
                    <img src={mainImg} className='w-[35rem] h-[25.5rem]'/>
                </div>
                {/*text*/}
                <div className='flex w-[50%] flex-col '>

                <span className='text-black font-josefin-sans text-[1.875rem] italic font-medium leading-[2.5rem]'>
                    Labores placerat salutandi nam ea, id qui eligendi ex adipiscing sei disputationi. Iuvaret constituam id his, epicuri evertitur quo in, sint
                </span>
                    <div className='flex flex-col pt-[2.5rem] '>
                        <span className='text-[#1D2B4F] font-inter text-base font-semibold'>Joe Root</span>
                        <span className='text-[#525969] font-inter text-xs font-normal tracking-[0.0525rem]'>Happy patien</span>
                        <div className='flex flex-col'>
                            <div className='flex flex-row pt-[1.12rem] gap-5'>
                                <img className='w-[3.5rem] h-[3.5rem]' src={firstImg}/>
                                <img className='w-[3.5rem] h-[3.5rem]' src={secondImg}/>
                                <img className='w-[3.5rem] h-[3.5rem]' src={thirdImg}/>
                            </div>
                            <div className='flex flex-row items-center pt-[1.75rem] gap-3'>
                                <img className='w-[3rem] h-[0.75rem] transform rotate-180' style={{ marginBottom: '-2px' }} src={arrow}/>
                                <img className='w-[3rem] h-[0.75rem]'  style={{ marginBottom: '0px' }} src={arrow}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;