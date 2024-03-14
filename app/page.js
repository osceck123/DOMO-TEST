"use client"
import Section from "./components/main";
import { NavbarSimple } from "./components/navBar";
import {
  Typography,
} from "@material-tailwind/react";

import FeatureCard from "./components/cards";
import featuresData from "./data";
import Footer from "./components/footer";
import CardEnterprise from "./components/cards/cardEnterprise";
import SectionCode from "./components/section/SectionCode";

export default function Home() {
  return (
    <div className="bg-principal">
    <NavbarSimple/>
    <Section/>
        <div className="container mx-auto flex flex-col justify-center">
          <div className="flex flex-col justify-center items-center mx-auto w-3/4 mb-10 -mt-18">
          <Typography className="text-center text-2xl lg:text-4xl font-semibold mb-5">Our Services</Typography>
          <Typography className="text-center text-2xl font-light">
            we feel very strong about our skill when it comes to planning, designing and codign applications.
           Here is what we love to do!
           </Typography>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto ">
            {featuresData.map(({ color, title, description, icon }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                description={description}
                icon={icon}
              />
            ))}
          </div>
          
        </div>
        <section className="-mt-32 bg-second px-2 pb-20 pt-4 ">
        <SectionCode/>
      </section>
      <section className="bg-white px-2 pb-20 pt-4">
        <div className="container mx-auto ">
          <div className="my-28 flex flex-wrap flex-col justify-center items-center">
          <Typography className="uppercase text-gray-600 text-sm font-semibold">
                Clients We Worked With
            </Typography>
          <CardEnterprise/>
             
          </div>
        </div>
      </section>
      
      <Footer/>
    </div>
  );
}
