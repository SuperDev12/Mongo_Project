import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PostContentBox = (props) => {
  const { clickable, post, editing } = props;
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      {clickable && !editing ? (
        <Box
          sx={{
            padding: theme.spacing(2),
            width: "92%",
            "&:hover": {
              backgroundColor: theme.palette.background.paper,
              cursor: "pointer",
              boxShadow: theme.shadows[10], // Add box shadow on hover
            },
          }}
          onClick={() => navigate("/posts/" + post._id)}
        >
          {props.children}
        </Box>
      ) : (
        <Box sx={{ padding: theme.spacing(2), width: "90%" }}>
          {props.children}
        </Box>
      )}
    </>
  );
};

export default PostContentBox;
