import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";


export function FeatureCard({ color, icon, title, description }) {
  return (
    <Card className="rounded-sm shadow-lg shadow-gray-500/10 pt-12 mb-10">
      <CardBody className="px-8 text-center ">
        <IconButton
          variant="text"
          size="lg"
          color={"white"}
          className="pointer-events-none mb-2 rounded-full bg-second "
        >
          {icon}
        </IconButton>
        <Typography variant="h5" className="mb-4 p-auto" color="black">
          {title}
        </Typography>
        <Typography className="font-normal text-center text-blue-gray-600 h-48 py-auto">
          {description}
        </Typography>
        <Button variant="outlined" className=" text-black">Learn more </Button>
      </CardBody>
    </Card>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
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

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;