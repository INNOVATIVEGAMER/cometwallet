import { Icon } from "@iconify/react";
import bnbIcon from "@iconify/icons-cryptocurrency/bnb";
import { styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",

  padding: theme.spacing(3, 3),
  color: theme.palette.error.darker,
  backgroundColor: theme.palette.error.lighter,
}));

const IconWrapperStyle = styled("div")(({ theme }) => ({
  display: "flex",
  borderRadius: "40%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.contrastText,
  backgroundColor: "#333",
}));

export default function BNBCard() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={bnbIcon} width={30} height={30} />
      </IconWrapperStyle>
      <Typography variant="h3">$300</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        20% This Week
      </Typography>
    </RootStyle>
  );
}
