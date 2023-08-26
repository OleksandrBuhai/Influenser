import videoImg from '@/assets/video/videoImg.png';
import playButton from '@/assets/video/playButton.png';
import {FC} from "react";


export const Video:FC = () => {
    return (
        <div className='relative h-[39rem] w-screen '>
            <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={videoImg} alt='' />
            <div className='relative h-full flex flex-col items-center justify-center'>
                <div className='mb-3'>
                    <img className='block w-[7.5rem] h-[7.5rem]' src={playButton} alt='' />
                </div>
                <div className=''>
                    <span className='block w-[7.5rem] h-[7.5rem] text-white terx-[1rem]  text-center'>Watch Video</span>
                </div>
            </div>
        </div>




    );
};

