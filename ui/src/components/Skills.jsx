import arrow from './../assets/arrow.png';

const Skills = () => {
  const state = [
    {
      title: 'SEO Analysis',
      skill: 'Developing Business Managment Skills',
      description:
        'Alia mucius ex nam, ea facer liber usu, e aliquam platontem est. Ut melo cum comune similique in.',
    },
    {
      title: 'Content Writing',
      skill: 'Developing Business Managment Skills',
      description:
        'Alia mucius ex nam, ea facer liber usu, e aliquam platontem est. Ut melo cum comune similique in.',
    },
    {
      title: 'MUSIC,VIDEOS',
      skill: 'Developing Business Managment Skills',
      description:
        'Alia mucius ex nam, ea facer liber usu, e aliquam platontem est. Ut melo cum comune similique in.',
    },
  ];

  return (
    <div className="flex h-[25rem] w-screen items-center gap-10 bg-[#FAFAFA;] p-[5rem]">
      {state.map((el, index) => {
        return (
          <div key={index} className=" border-primary relative border-l-2 p-5 ">
            <span className="font-inter text-[1rem] font-normal text-black ">{el.title}</span>
            <h4 className='text-white" mb-5 mt-5  font-josefin-sans text-[2.125rem] font-bold'>
              {el.skill}
            </h4>
            <span className="font-inter text-[1rem] font-normal  text-[#939393]">
              {el.description}
            </span>
            <button className="mt-6">
              <span className="text-[1rem]">Find Out More</span>
              <img
                className="absolute left-[8rem] mt-[-1rem] h-[0.5rem] w-[4rem]  "
                src={arrow}
                alt=""
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
