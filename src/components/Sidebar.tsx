import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { Categories } from "./";

const Sidebar = () => {
  return (
    <Stack
      direction="row"
      minWidth="208px"
      height={{ xs: "100px", md: "82vh" }}
      overflow="scroll"
      sx={{
        flexDirection: { md: "column" },
        alignItems: { xs: "center", md: "stretch" },
      }}
    >
      {categories.map((category, categoryIndex) => {
        return (
          <Categories
            key={categoryIndex}
            category={category}
            categoryIndex={categoryIndex}
          />
        );
      })}
    </Stack>
  );
};

export default Sidebar;
