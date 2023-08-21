

const Footer = () => {
    return (
        <div className='h-[30rem] p-20 text-white bg-[#111502]'>
            <div className=' flex justify-between '>
                <span>
                    <h5 className='text-base font-semibold leading-[1.75rem] pb-5'>Company</h5>
                    <ul className='text-xs font-normal leading-[2.5rem]'>
                        <li>About</li>
                        <li>Features</li>
                        <li>Works</li>
                        <li>Career</li>
                    </ul>
                </span>
                <span>
                    <h5 className='text-base font-semibold leading-[1.75rem] pb-5'>Help</h5>
                    <ul className='text-xs font-normal leading-[2.5rem] '>
                        <li>Customer Support</li>
                        <li>Delivery Details</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </span>
                <span>
                    <h5 className='text-base font-semibold leading-[1.75rem] pb-5'>Resources</h5>
                    <ul className='text-xs font-normal leading-[2.5rem] '>
                        <li>Free eBooks</li>
                        <li>Development Tutorial</li>
                        <li>How to - Blog</li>
                        <li>Youtube Playlist</li>
                    </ul>
                </span>
                <span className=''>
                    <h5 className='text-base font-semibold leading-[1.75rem] pb-5'>Links</h5>
                    <ul className='text-xs font-normal leading-[2.5rem] ' >
                        <li>Free eBooks</li>
                        <li>Development Tutorial</li>
                        <li>How to Blog</li>
                        <li>Youtube Playlist</li>
                    </ul>
                </span>
            </div>
            <div className='flex justify-between  pt-20 text-xs font-normal leading-[2.5rem] '>
                <span>© Copyright 2022, All Rights Reserved</span>
                <span>Privacy Policy         Terms & Conditions</span>
            </div>
        </div>
    );
};

export default Footer;