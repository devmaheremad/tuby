import { useStore } from "../useStore";
import { categories } from "../utils/constants";
import { Button, Typography } from "@mui/material";
import { CategoriesTypeProps } from "../@types/Categories.types";

const Categories = ({ category, categoryIndex }: CategoriesTypeProps) => {
  const selectedCategory = useStore(({ selectedCategory }) => selectedCategory);

  return (
    <Button
      variant="contained"
      color="primary"
      key={category.name}
      sx={{
        justifyContent: "start",
        alignItems: "center",
        flexShrink: 0,
        backgroundColor:
          selectedCategory === category.name ? "#e60006" : "transparent",
        borderRadius: "20px",
        px: 2,
        height: 40,
        mb: { md: categoryIndex === categories.length - 1 ? 0 : 2 },
        "&:hover>span>svg": {
          transition: "all 0.3s ease-in-out",
          fill: "white !important",
        },
        "&>span>svg": {
          transition: "all 0.3s ease-in-out",
          fill:
            selectedCategory === category.name ? "white" : "#e60006 !important",
        },
      }}
      startIcon={category.icon}
      onClick={() => useStore.setState({ selectedCategory: category.name })}
    >
      <Typography
        variant="subtitle2"
        textTransform="capitalize"
        fontWeight="700"
        pl={1}
        sx={{ opacity: selectedCategory === category.name ? 1 : 0.75 }}
      >
        {category.name}
      </Typography>
    </Button>
  );
};

export default Categories;
