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
    name: "Frontend",
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

export const demoThumbnailUrl = "https://i.ibb.co/m8n315t/download.webp";
export const demoChannelUrl = "/channel/UC2Xd-TjJByJyK2w1zNwY0zQ";
export const demoVideoUrl = "/video/Tn6-PIqc4UM";
export const demoChannelTitle = "Fireship";
export const demoVideoTitle = "React in 100 Seconds";
export const demoProfilePicture =
  "http://dergipark.org.tr/assets/app/images/buddy_sample.png";

export const subTitle = (title: string): string => {
  return title.length > 71 ? `${title.slice(0, 70)}...` : title;
};
