import { Card, CardHeader, CardMedia } from "@mui/material";

export default function ADS() {
  return (
    <Card>
      <CardHeader title="ADS" />
      <CardMedia
        component="img"
        height="400"
        image="https://picsum.photos/200/400?random"
        alt="green iguana"
      />
    </Card>
  );
}
