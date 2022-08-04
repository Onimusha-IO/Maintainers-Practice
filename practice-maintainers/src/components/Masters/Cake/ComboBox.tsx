import { Autocomplete, TextField } from "@mui/material";

const ComboBox = ({ label, options }: any) => {
  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option: any) => {
        return option.name || option.quantity.toString();
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          onClick={(e) => {
            e.preventDefault();
          }}
        />
      )}
      sx={{ width: 220 }}
    />
  );
};

export default ComboBox;
