'use client'
import React from "react";
import {
  Typography,
  Button
} from "@material-tailwind/react";



export default function Section(){



    return(
        <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 lg:bg-gradient-with-image  lg:bg-right-top lg:bg-no-repeat lg:bg-contain ">
            <div className="max-w-4xl container relative lg:mr-64">
            <div className="flex flex-wrap ">
                <div className="w-full px-4 text-center md:text-justify   lg:w-8/12">
                <Typography
                    variant="h1"
                    color="white"
                    className="mb-6 font-black"
                >
                    We build beautiful and realiable web solutions
                </Typography>
                <Typography variant="lead" color="white" className="opacity-80">
                    This is a simple example of a Landing Page you can build using
                    Material Tailwind. It features multiple components based on the
                    Tailwind CSS and Material Design by Google.
                </Typography>
                <div className="flex my-5  space-x-4 justify-center md:justify-start"> 
                <Button variant="outlined" className="border-white text-white">Learn more </Button>
            <Button variant="text" className="flex items-center gap-2 bg-boton-out-projects hover:bg-white hover:text-blue-700 text-white">
                Our projects {" "}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
                </svg>
            </Button>
                </div>
                </div>
            </div>
            </div>
      </div>
    )
}

