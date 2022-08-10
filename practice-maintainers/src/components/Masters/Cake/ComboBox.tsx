import { useDispatch } from "react-redux";

import { Autocomplete, TextField } from "@mui/material";
// import { setCombination } from "../../../redux/slices/masters/cakeSlice";

const ComboBox = ({ label, options, index }: any) => {
  const dispatch = useDispatch();

  return (
    <Autocomplete
      options={options}
      onInputChange={(event, newInputValue, reason) => {
        // dispatch(setCombination({ index: index, value: newInputValue }));
      }}
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
