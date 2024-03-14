import { BsFiles } from "react-icons/bs";
import { MdImportantDevices } from "react-icons/md";
import { FaSwatchbook } from "react-icons/fa6";

  
  
  export const featuresData = [
    {
      color: "gray",
      icon:  <BsFiles/>,
      title: "Business e Product Concept",
      description:
        "Analyse business and product concepts at Start-up Workshops or Ongoing Projects' Audits and prepare a viable and sensible product roadmap for achieving a perfect market fit",
    },
    {
      color: "gray",
      icon: <MdImportantDevices/>,
      title: "Web e Mobile Development",
      description:
        "Plan, develop and test high-quality web-applications using AngularJs, NodeJs, JavaScript, TypeScript, HTML5 and SASS/CSS3 frameworks and native mobile lenguages.",
    },
    {
      color: "gray",
      icon:<FaSwatchbook/>,
      title: "UX e UI Desing",
      description:
        "Sketch information architecture and simple mock-ups, convert then into clickable prototypes and finish with usable interface desing to deliver a good and reliable user experience",
    },
  ];
  
  export default featuresData;
  