import line from "../assets/line.png";


import first from '../assets/News/firsImg.png'
import second from '../assets/News/second.png'
import third from '../assets/News/third.png'


const News = () => {

    const state = [{
        img:first,
        title:'The Best Fonts for Modern Design',
        auhtor: 'Admin',
        date:' - january 25 2023',
        description:'A leisurely start as not expected at our next campsite....'
    },{
        img:second,
        title:'The Best Fonts for Modern Design',
        auhtor: 'Admin',
        date:' - january 25 2023',
        description:'A leisurely start as not expected at our next campsite....'
    },{
        img:third,
        title:'The Best Fonts for Modern Design',
        auhtor: 'Admin',
        date:' - january 25 2023',
        description:'A leisurely start as not expected at our next campsite....'
    }]

    return (

            <div className='h-[50rem] w-[100%]  pt-10 p-40'>
                <div className='flex  flex-col'>
                    <div className='flex items-center'>
                        <img className=' w-[1.6rem] h-[0.125rem]' src={line}/>
                        <span
                            className='ml-2 text-[#525969] font-inter text-xs font-normal leading-normal'>Our Blog</span>
                    </div>
                    <h4 className='text-[#1D2B4F] font-inter text-[3rem] font-semibold leading-normal'>
                        Check <span className='text-red-500'>the News</span>
                    </h4>
                </div>
                <div className='flex justify-around items-center pt-10 gap-10'>
                    {state.map((el, index) => {
                        return (
                            <div key={index} className=''>
                                <img className='w-[22.5rem] h-[22.6rem]' src={el.img}/>
                                <div className='flex flex-col pt-4 gap-2'>
                                    <h4 className='text-[#304050] font-josefin-sans text-[1.375rem] font-bold leading-[2.125rem] underline'>{el.title}</h4>
                                    <span className='text-[#9A9FA5] font-poppins text-xs font-normal leading-[0.75rem]'>By <span className='text-[#304050] font-poppins text-xs font-medium leading-[0.75rem]'>{el.auhtor}</span> <span>{el.date}</span></span>
                                    <span className='text-[#657280] font-inter text-base font-normal leading-[1.5rem]'>{el.description}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

    );
};

export default News;