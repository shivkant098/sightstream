import React from 'react'
import Navbar from './Navbar'
import ParallaxCompany from './ParallaxCompany'
// import Parallax from './Parallax'
function Company() {
    return (
        <>

            <Navbar />
            <ParallaxCompany />
            {/* <Parallax/> */}

            <div class="gap-8 md:flex">
                <div class="mb-8 text-center md:w-1/2 md:mb-0">
                    <img class="w-48 h-48 mx-auto -mb-24 rounded-full"
                        src='https://i.ibb.co/Zdq6Q64/shiv-kant.jpg'
                        alt="Avatar shiv kant" />
                    <div class="px-8 pt-32 pb-10 text-gray-400 bg-white rounded-lg shadow-lg">
                        <h3 class="mb-3 text-xl text-gray-800 font-title">
                            Shiv kant Kumar
                        </h3>
                        <p class="font-body">
                            FullStack Engineer
                        </p>
                        <p class="mb-4 text-sm font-body">
                            "Believe in 3E: Efficiency, Effectiveness, and Ethics."

                        </p>
                        <a class="text-blue-500 font-body hover:text-gray-800" href="mailto:kumar.shivkant87@gmail.com">
                            kumar.shivkant87@gmail.com
                        </a>

                    </div>
                </div>
                <div class="text-center md:w-1/2">

                    <img class="w-48 h-48 mx-auto -mb-24 rounded-full"
                        src='https://media.licdn.com/dms/image/D4D35AQF00_2cGKWopA/profile-framedphoto-shrink_800_800/0/1702549539324?e=1704042000&v=beta&t=Ub33KNSCvnTwNzcABika8_HbSdMcaz_VXACgYGW4O7A'
                        alt="Avatar shiv kant" />        <div class="px-8 pt-32 pb-10 text-gray-400 bg-white rounded-lg shadow-lg">
                        <h3 class="mb-3 text-xl text-gray-800 font-title">
                            Raj Nayan
                        </h3>
                        <p class="font-body">
                            Backend Developer & Machine Learning(ML) Developer
                        </p>
                        <p class="mb-4 text-sm font-body">
                            "Passionate and experienced professional dedicated to leveraging technology for innovative solutions and continuous growth."
                        </p>
                        <a class="text-blue-500 font-body hover:text-gray-800" href="mailto:dino@siete.pm">
                            nayanraj4321@gmail.com            </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Company