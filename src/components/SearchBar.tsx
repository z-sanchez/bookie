import { MagnifyingGlass } from "@phosphor-icons/react";
import { Box, TextField } from "@mui/material";

const SearchBar = ({ onChange }: { onChange: (term: string) => void }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        padding: "0 10px",
      }}
    >
      <MagnifyingGlass size={24} color="black" className="mt-4 mr-2" />
      <TextField
        id="input-with-sx"
        className="w-full"
        label="Search Books"
        variant="standard"
        color="primary"
        onChange={(searchTermEvent) => onChange(searchTermEvent.target.value)}
      />
    </Box>
  );
};

export { SearchBar };
