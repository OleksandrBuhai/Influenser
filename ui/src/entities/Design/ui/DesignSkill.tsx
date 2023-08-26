import {FC} from "react";

export const DesignSkill:FC = () => {
    return (
        <div className='flex  justify-around items-center p-10  h-[70vh] w-screen '>
            {/*text*/}
            <div className='flex flex-col w-[50%] '>
                <h4 className='text-black font-josefin-sans font-bold text-[3rem]'>The heart of our human centered
                    <span className='text-red-500'> design skills</span></h4>
                <span className='text-[#939393] text-[1rem] font-normal font-inter'>
                Et ullum iisque conclusionemque eam, mel ad erat cum accumsan ei noluisse,
                nostrum accumsan salutandi eam cu. Fugit expetenda ei prim interesset no his,
                probo mei eu eloquentiam. Sea id saepe dolores sed malorum sapientem,
                copiosae et melnusquam nam an abhorreant.
            </span>
            </div>
            {/*list*/}
            <div className='flex '>
                <ul className='list-inside text-black font-inter text-[1.25rem] font-normal leading-[196%] mt-[2rem] '>
                    <li className='mt-[1rem]'>– Project strategy</li>
                    <li className='mt-[1rem]'>– UX research and conceptualization</li>
                    <li className='mt-[1rem]'>– Information architecture (IA)</li>
                    <li className='mt-[1rem]'>– User interface design (UI)</li>
                    <li className='mt-[1rem]'>– Interaction design (IxD)</li>
                </ul>
            </div>
        </div>
    )
}

