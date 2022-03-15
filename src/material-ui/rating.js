import * as React from "react";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
//import { makeStyles, useTheme, Typography } from "@material-ui/core";
import { makeStyles } from "@mui/material";
import { useTheme } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon sx={{ fontSize: "2.5rem" }} />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon sx={{ fontSize: "2.5rem" }} />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon sx={{ fontSize: "2.5rem" }} />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon sx={{ fontSize: "2.5rem" }} />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon sx={{ fontSize: "2.5rem" }} />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function RadioGroupRating() {
  return (
    <Rating
      name="highlight-selected-only"
      defaultValue={3}
      IconContainerComponent={IconContainer}
      highlightSelectedOnly
      className="cursor-pointer mt-12 RadioGroupRating"
    />
  );
}
