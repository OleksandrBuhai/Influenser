import stripe from '../assets/CompaniesImg/Stripe.png';
import spotify from '../assets/CompaniesImg/Spotify.png';
import dropbox from '../assets/CompaniesImg/Dropbox.png';
import behance from '../assets/CompaniesImg/Behance.png';
import microsoft from '../assets/CompaniesImg/Microsoft.png';

const SocialMedia = () => {


    const Image = [
        {
            img: stripe
        }, {
            img: spotify
        },
        {
            img: dropbox
        },
        {
            img: behance
        },
        {
            img: microsoft
        }
    ]

    return (
        <div className='h-[30vh] bg-[#F5E2D4] w-screen pt-4 flex justify-around items-center'>
            {Image.map((el,index)=>{
                return (
                    <img src={el.img} key={index} className='w-[11.5rem] h-[2.8rem]'/>
                )
            })}
        </div>
    );
};

export default SocialMedia;