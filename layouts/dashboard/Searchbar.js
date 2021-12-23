import { Icon } from "@iconify/react";
import searchFill from "@iconify/icons-eva/search-fill";
import { styled } from "@mui/material/styles";
import { Box, Input, InputAdornment } from "@mui/material";
const SearchbarStyle = styled("div")(({ theme }) => ({
  backgroundColor: `#F3F3F3`,
  borderRadius: "2rem",
  padding: "0.5rem",
}));

export default function Searchbar() {
  return (
    <SearchbarStyle>
      <Input
        autoFocus
        fullWidth
        disableUnderline
        placeholder="Search…"
        startAdornment={
          <InputAdornment position="start">
            <Box
              component={Icon}
              icon={searchFill}
              sx={{ color: "text.disabled", width: 20, height: 20 }}
            />
          </InputAdornment>
        }
        sx={{ mr: 1, fontWeight: "fontWeightBold" }}
      />
    </SearchbarStyle>
  );
}
