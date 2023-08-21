import firstIMg from '../assets/team/first.png'
import secondImg from '../assets/team/Second.png'
import thirdIMg from '../assets/team/Third.png'

import calendar from '../assets/team/smalmg/calendar.png'
import profile from '../assets/team/smalmg/profile.png'
import chat from '../assets/team/smalmg/chat.png'

const Team = () => {

    const state = [{
        img: firstIMg,
        name: 'Martin Guptill',
        position: 'Senior at Business'
    }, {
        img: secondImg,
        name: 'Martin Guptill',
        position: 'Senior at Business'
    }, {
        img: thirdIMg,
        name: 'Martin Guptill',
        position: 'Senior at Business'
    },]


    return (
        <div className='flex  flex-col items-center pt-[10rem]  h-[70vh] w-screen '>
            <div className=' flex  gap-[12rem]'>
                <h4 className='  w-[28rem] text-black font-josefin-sans text-[3rem] font-bold leading-[140%]'>Meet our
                    team of <span className='text-red-500'>Creatives</span></h4>
                <span className=' w-[31rem] m-auto pl-[10rem] text-[#939393] font-inter text-base font-normal '>Et ullum iisque conclusionemque eam, mel ad erat cum accumsan ei noluisse,
                nostrum accumsan salutandi eam cu.</span>
            </div>
            <div className='flex justify-around items-center pt-10 gap-10'>
                {state.map((el, index) => {
                    return (
                        <div key={index} className=''>
                            <img className='w-[22.5rem] h-[22.6rem]' src={el.img}/>
                            <div className='flex justify-between pt-4 items-center'>
                                <div>
                                    <h4 className='text-[#1D2B4F] font-inter text-lg font-semibold leading-normal'>{el.name}</h4>
                                    <span className='text-[#525969] font-inter text-xs font-normal leading-normal'>{el.name}</span>
                                </div>
                                <div className='flex gap-5'>
                                    <img className='w-[1.5rem] h-[1.5rem]' src={calendar}/>
                                    <img className='w-[1.5rem] h-[1.5rem]' src={profile}/>
                                    <img className='w-[1.5rem] h-[1.5rem]' src={chat}/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Team;