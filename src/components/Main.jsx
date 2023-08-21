import arrow from '../assets/arrow.png'
import eagle from '../assets/eagleLogo.png'
import influexa from '../assets/influexa.png'
import avatar from '../assets/avatar.png'
import vertical from '../assets/horizontalImg.png'

const Main = () => {
    return (
        <div className='w-screen flex h-[100%] bg-white  '>
            {/*text*/}
            <img className='w-[1rem] h-[10rem] absolute left-[2.5rem] top-[5rem] flex-shrink-0' src={vertical}/>
            <div className='flex '>
                <div className=' w-full  p-20 px-40 py-10 flex flex-col items-start '>
                  <span className='flex pb-20 '>
                      <img className='w-[2.6875rem] h-[1.8125rem]' src={eagle}/>
                      <img className='w-[7.0625rem] h-[1.5rem]' src={influexa}/>
                    </span>
                    <h1 className='text-black font-josefin-sans font-bold text-7xl'>We Bring</h1>
                    <p className='text-red font-josefin-sans font-bold text-7xl  text-red-500'>Customers</p>
                    <span
                        className="w-full text-black font-josefin-sans  font-style: italic text-base font-medium items-start leading-relaxed pt-[2rem]">Et ullum iisque conclusionemque eam, mel ad erat cum accumsan noluisse, nostrum accumsan movet salutandi. Fugit expetenda interesset no, probo eloquentiam mei eu.</span>
                    <div className='pt-[5rem]'>
                        <button className="bg-gray-200 text-white py-5 px-5  w-[11rem]">
                      <span className="text-black font-josefin-sans text-lg font-[1rem] leading-[177.5%] ">
                        Find Out more
                        </span>
                            <img className='absolute w-[4rem] h-[0.5rem] mt-[-1.3rem]  left-[20rem]' src={arrow} alt=''/>
                        </button>
                    </div>
                </div>
               <span className='transform rotate-90 absolute top-[38rem] font-[0.75rem] font-style: italic font-500'> salutandi/2024.</span>
            </div>

            {/*avatar*/}
            <div className='h-[100%] w-[48rem] flex-shrink-0'>
                <img src={avatar}/>
            </div>
        </div>
    )
}

export default Main