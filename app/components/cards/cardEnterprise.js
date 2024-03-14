import { Typography } from "@material-tailwind/react"
import TeamCard from "./Enterprise"
import enterpriseData from "@/app/data/enterprise"


export default function CardEnterprise()
{
    

    return(
        <div className=" grid grid-cols-1 gap-x-4 md:grid-cols-2  xl:grid-cols-4">
        {enterpriseData.map(({ img,  name }) => (
          <TeamCard
            key={name}
            img={img}
       
          />
        ))}
      </div>
    )
}