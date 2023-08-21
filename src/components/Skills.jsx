import arrow from './../assets/arrow.png'

const Skills = () => {

    const state = [{
        title:'SEO Analysis',
        skill:'Developing Business Managment Skills',
        description:'Alia mucius ex nam, ea facer liber usu, e aliquam platontem est. Ut melo cum comune similique in.'
    },
        {
            title:'Content Writing',
            skill:'Developing Business Managment Skills',
            description:'Alia mucius ex nam, ea facer liber usu, e aliquam platontem est. Ut melo cum comune similique in.'
        },
        {
            title:'MUSIC,VIDEOS',
            skill:'Developing Business Managment Skills',
            description:'Alia mucius ex nam, ea facer liber usu, e aliquam platontem est. Ut melo cum comune similique in.'
        }]


    return (
        <div className='bg-[#FAFAFA;] h-[25rem] w-screen flex items-center p-[5rem] gap-10'>
            {state.map((el,index)=>{
                return (
                    <div key={index}  className=' border-l-2 border-[#F23802] p-5 relative '>
                        <span className='text-black text-[1rem] font-normal font-inter '>{el.title}</span>
                        <h4 className='font-josefin-sans text-[2.125rem] font-bold  mt-5 mb-5 text-white"'>{el.skill}</h4>
                        <span className='text-[#939393] text-[1rem] font-normal  font-inter'>{el.description}</span>
                        <button className='mt-6'>
                            <span className='text-[1rem]'>Find Out More</span>
                            <img className='absolute left-[8rem] w-[4rem] h-[0.5rem] mt-[-1rem]  ' src={arrow} alt=''/>
                        </button>
                    </div>
                )
            })}
        </div>
    );
};

export default Skills;