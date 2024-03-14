import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
  Button,
  CardHeader
} from "@material-tailwind/react";


export function FeatureCardFinal({ color, icon, title, description, img }) {
  return (
    <Card className="rounded-sm shadow-lg shadow-gray-500/10  mb-10 bg-second flex-row ">
      <CardBody className="px-8  ">
        <Typography variant="h5" className="mb-1" color="white">
          {title}
        </Typography>
        <Typography className="font-normal text-white py-5">
        maecenas sed diam eget risus varius <br/> blandit sit amet non magna
        </Typography>
        <Button variant="outlined" className="text-white border-white">Learn more </Button>
      </CardBody>
       {img && <CardHeader
        shadow={false}
        floated={false}
        className="m-0 hidden md:block md:w-2/5 shrink-0 rounded-r-none bg-second"
      >
        <img
          src={img}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>}
    </Card>
  );
}

FeatureCardFinal.defaultProps = {
  color: "blue",
};

FeatureCardFinal.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCardFinal.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCardFinal;