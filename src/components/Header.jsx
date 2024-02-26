import { IoPlayCircle } from "react-icons/io5";
import headerPreview from '../assets/header-preview.png'
import unionDesign from '../assets/Union.png'

const Header = () => {
    return (
        <div className="py-5 relative">
            <div><img src={unionDesign} alt="" className="top-0 absolute w-screen -z-10" /></div>
            <div className="container flex gap-4 justify-between items-center">
                <div className="w-5/12">
                    <p className="text-5xl font-bold tracking-wide py-8">Managing business payments has never been easier</p>
                    <p className="text-lg">End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                    <div className="pt-20 flex justify-between">
                        <button className="text-xl px-10 py-2 rounded-3xl bg-blue-800 hover:bg-blue-300 hover:text-black text-white transition-colors">Get Started</button>
                        <button className="flex gap-2 items-center text-xl px-10 py-2 rounded-3xl text-green-500 transition-colors">
                            <IoPlayCircle className="text-2xl" />
                            <span>See how it works</span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={headerPreview} alt="image" className=" h-full" />
                </div>
            </div>
        </div>
    );
};

export default Header;