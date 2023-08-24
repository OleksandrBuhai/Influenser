import pinkOne from '../assets/booksIMg/pinkOne.png'
import blackOne from '../assets/booksIMg/blackOne.png'
import redOne from '../assets/booksIMg/redOne.png'
import deb from '../assets/booksIMg/debOne.png'

const Books = () => {

    const state = [{
        img:pinkOne,
        title:'Business',
        description:'Work rules'
    },{
        img:blackOne,
        title:'Business',
        description:'Work rules'
    },{
        img:redOne,
        title:'Business',
        description:'Work rules'
    },{
        img:deb,
        title:'Business',
        description:'Work rules'
    }]

    return (
        <div className='flex gap-[2rem] justify-between w-screen'>
            {state.map((el, index) => {
                const paddingTopValue = index===3 ? (index + 1) * 1.7 : (index + 1) * 3;
                const style = { paddingTop: `${paddingTopValue}rem` };
                return (
                    <div key={index} className='pl-4' style={style}>
                        <img className='w-[22.5rem] h-[27rem]' src={el.img} alt={el.title} />
                        <span className='text-[#656565] font-josefin-sans text-xs font-semibold leading-[162%]'>{el.title}</span>
                        <h4 className='text-black font-josefin-sans text-2.5xl font-bold leading-[100%]'>{el.description}</h4>
                    </div>
                );
            })}
        </div>


    );
};

export default Books;