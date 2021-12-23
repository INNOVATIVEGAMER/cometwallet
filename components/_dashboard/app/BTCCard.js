import { Icon } from "@iconify/react";
import btcIcon from "@iconify/icons-cryptocurrency/btc";
import { styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  padding: theme.spacing(3, 3),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter,
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

export default function BTCCard() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={btcIcon} width={30} height={30} />
      </IconWrapperStyle>
      <Typography variant="h3">$41000</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        45% This Week
      </Typography>
    </RootStyle>
  );
}
