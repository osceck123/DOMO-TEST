

import { Typography } from "@material-tailwind/react";
import FeatureCardFinal from "../cards/cardFinal";
import data from "@/app/data/data";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="relative z-50 bg-principal px-8 pt-12 pb-6  ">
            <div className=" mx-auto flex flex-col justify-center lg:-mt-48 ">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 md:w-7/12 mx-auto">
            {data.map(({ color, title, description, icon, img}) => (
              <FeatureCardFinal
                key={title}
                color={color}
                title={title}
                description={description}
                icon={icon}
                img={img}
              />
            ))}
          </div>
          
        </div>
            <div className="container mx-auto">
                <div className="flex flex-wrap mt-10">
                <div className="w-full md:w-4/12 mx-auto ">
                    <Typography className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug md:text-left mb-2 my-5 text-center ">compleet labs</Typography>
                    <Typography className="block antialiased font-sans text-inherit text-md mt-0 mb-2 font-normal text-gray-400">Fucse dapibus, tellus ac cursus commodo, tortor, mauris condimentum nibh, ut fermentum massa
                    justo sit amet risus, Donec ullamcorper nulla</Typography>
                    <div className="mt-6 flex space-x-4 justify-center md:justify-start">
                         <Link href="https://www.twitter.com/" target="_blank" rel="noreferrer"><FaTwitter/></Link>
                        <Link href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin/></Link>
                        <Link href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebook/></Link>
                        <Link href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram/></Link>
                        </div>
                 </div>
                <div className=" ml-auto w-full px-4 md:w-6/12 ">
                    <div className="items-top mb-6 flex flex-col md:flex-row md:flex-wrap mt-5">
                        <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                            <span className="text-md mb-4 block font-medium text-primary">
                                SITEMAP</span>
                            <ul className="list-unstyled">
                                <li>
                                    <Link href="/" target="_blank" rel="noreferrer" className="block pb-2 text-sm font-normal leading-relaxed text-gray-400transition-colors hover:text-primary">Home</Link>
                                </li>
                                <li>
                                    <Link href="/" target="_blank" rel="noreferrer" className="block pb-2 text-sm font-normal leading-relaxed text-gray-400transition-colors hover:text-primary">Technology</Link>
                                </li>
                                <li>
                                    <Link href="/" target="_blank" rel="noreferrer" className="block pb-2 text-sm font-normal leading-relaxed text-gray-400transition-colors hover:text-primary">Services</Link>
                                </li>
                                <li>
                                    <Link href="/" target="_blank" rel="noreferrer" className="block pb-2 text-sm font-normal leading-relaxed text-gray-400transition-colors hover:text-primary">Free Products</Link>
                                </li>
                                </ul>
                            </div>
                            <div className="ml-auto hidden md:block w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                                <span className="text-md mb-4 block font-medium text-primary">Case STUDIES</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link href="/" target="_blank" className="block pb-2 text-sm font-normal leading-relaxed text-gray-400transition-colors hover:text-primary" >Swiss Airlines</Link>
                                        </li>
                                    <li>
                                        <Link rel="noreferrer" target="_blank" className="block pb-2 text-sm font-normal leading-relaxed text-gray-400transition-colors hover:text-primary" href="/">Google</Link>
                                    </li>
                                    <li>
                                        <Link rel="noreferrer" target="_blank" className="block pb-2 text-sm font-normal leading-relaxed text-gray-400transition-colors hover:text-primary" href="/">APPLE</Link>
                                        </li>
                                    <li>
                                        <Link rel="noreferrer" target="_self" className="block pb-2 text-sm font-normal leading-relaxed text-gray-400transition-colors hover:text-primary" href="/">Nike</Link></li>
                                </ul>
                        </div>
                        <div className="hidden md:block ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                            <span className="text-md mb-4 block font-medium text-primary">Contact</span>
                            <ul className="list-unstyled">
                                <li>
                                    <Link rel="noreferrer" target="_self" className="block pb-2 text-sm font-normal leading-relaxed text-gray-400 transition-colors hover:text-primary" href="/">Jobs</Link></li>
                                    <li>
                                        <Link rel="noreferrer" target="_blank" className="block pb-2 text-sm font-normal leading-relaxed text-gray-400transition-colors hover:text-primary" href="/">Hire us</Link></li>
                            </ul>
                        </div>
                       
                    </div>
                </div>
            </div>
            </div>
            </footer>
                )
}