import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

export const logo = "https://i.ibb.co/s9Qys2j/logo.png";

const fontSizeForIcon = {
  xs: "20px !important",
  md: "25px !important",
  xl: "30px !important",
};

export const categories: { name: string; icon: JSX.Element }[] = [
  {
    name: "Front-End Developer ",
    icon: (
      <CodeIcon color="primary" sx={{ pb: "3px", fontSize: fontSizeForIcon }} />
    ),
  },
  {
    name: "Sanity.io",
    icon: (
      <CodeIcon color="primary" sx={{ pb: "3px", fontSize: fontSizeForIcon }} />
    ),
  },
  {
    name: "New",
    icon: (
      <HomeIcon color="primary" sx={{ pb: "3px", fontSize: fontSizeForIcon }} />
    ),
  },
  {
    name: "Coding",
    icon: (
      <CodeIcon color="primary" sx={{ pb: "3px", fontSize: fontSizeForIcon }} />
    ),
  },
  {
    name: "ReactJS",
    icon: (
      <CodeIcon color="primary" sx={{ pb: "3px", fontSize: fontSizeForIcon }} />
    ),
  },
  {
    name: "NextJS",
    icon: (
      <CodeIcon color="primary" sx={{ pb: "3px", fontSize: fontSizeForIcon }} />
    ),
  },
  {
    name: "Education",
    icon: (
      <SchoolIcon
        color="primary"
        sx={{ pb: "3px", fontSize: fontSizeForIcon }}
      />
    ),
  },
  {
    name: "Podcast",
    icon: (
      <GraphicEqIcon
        color="primary"
        sx={{ pb: "3px", fontSize: fontSizeForIcon }}
      />
    ),
  },
  {
    name: "Gaming",
    icon: (
      <SportsEsportsIcon
        color="primary"
        sx={{ pb: "3px", fontSize: fontSizeForIcon }}
      />
    ),
  },
  {
    name: "Live",
    icon: (
      <LiveTvIcon
        color="primary"
        sx={{ pb: "3px", fontSize: fontSizeForIcon }}
      />
    ),
  },
  {
    name: "Comedy",
    icon: (
      <TheaterComedyIcon
        color="primary"
        sx={{ pb: "3px", fontSize: fontSizeForIcon }}
      />
    ),
  },
  {
    name: "Crypto",
    icon: (
      <DeveloperModeIcon
        color="primary"
        sx={{ pb: "3px", fontSize: fontSizeForIcon }}
      />
    ),
  },
];

export const demoThumbnailUrl = "https://i.ibb.co/G2L2Gwp/API-Course.png";
export const demoChannelUrl = "/channel/UCmXmlB4-HJytD7wek0Uo97A";
export const demoVideoUrl = "/video/GDa8kZLNhJ4";
export const demoChannelTitle = "JavaScript Mastery";
export const demoVideoTitle =
  "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI";
export const demoProfilePicture =
  "http://dergipark.org.tr/assets/app/images/buddy_sample.png";

export const subTitle = (title: string): string => {
  return title.length > 71 ? `${title.slice(0, 70)}...` : title;
};
