import PropTypes from "prop-types";
import { Card,  } from "@material-tailwind/react";

export function TeamCard({ img, name, position, socials }) {
  return (
    <Card color="transparent" shadow={false} className="flex justify-center items-center">
        <img src={img} className="w-1/2"/>
    </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;