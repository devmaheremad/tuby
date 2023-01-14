import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const nagigateSearch = useNavigate();
  const handleSearch = (e: React.MouseEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchTerm) {
      nagigateSearch(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSearch}
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 20,
        width: { sm: "60%", md: "65%" },
        maxWidth: 550,
        my: { xs: 3, sm: 0 },
      }}
    >
      <InputBase
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setSearchTerm(e.target.value)
        }
        sx={{ flex: 1, px: 2, py: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "Search..." }}
      />
      <IconButton
        type="submit"
        sx={{ px: 2, py: 1, color: "#fc1503" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
