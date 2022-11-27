import { Stack } from "@mui/material";
import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    bgcolor="black"
    zIndex={1}
    p={{
      xs: 1,
      sm: 2,
      lg: 3,
    }}
    sx={{ position: "sticky", top: "0" }}
    direction={{
      xs: "column",
      sm: "row",
    }}
    justifyContent="space-between"
    alignItems="center"
  >
    <Link to="/tuby" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
