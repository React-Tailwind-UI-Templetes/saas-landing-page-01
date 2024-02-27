
const RegisterCTA = () => {
    return (
        <div className="container">
            <div className="bg-[#F3F7FA] flex justify-between items-center gap-10 px-28 py-10 rounded-lg">
                <div className="w-8/12">
                    <p className='uppercase text-purple-800 text-xl py-6 font-semibold'>Feature</p>
                    <h1 className='text-5xl font-bold tracking-wide py-8'>Receive payments quickly from anywhere</h1>
                    <p className='text-xl py-10'>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>

                </div>
                <div className="w-1/3">
                    <form className="">
                        <p className="text-2xl text-orange-500 font-semibold">Get Started for Free</p>
                        <input type="text" placeholder="Enter your Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-10" />
                        <input type="text" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-10" />
                        <button className="text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-lg w-full sm:w-full px-5 py-2.5 text-center transition-colors shadow-md shadow-orange-300">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterCTA;