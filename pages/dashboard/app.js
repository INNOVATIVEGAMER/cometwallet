import axios from "axios";
import { Box, Grid, Container, Typography } from "@mui/material";
import ThemeConfig from "../../theme";
import GlobalStyles from "../../theme/globalStyles";
import {
  ETHCard,
  BNBCard,
  BTCCard,
  ADS,
  MarketOverview,
  MarketChart,
} from "../../components/_dashboard/app";
import Dashboard from "../../layouts/dashboard";
import AppContext from "../../AppContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

function DashboardApp(props) {
  const globalState = useContext(AppContext);
  const router = useRouter();
  useEffect(() => {
    if (!globalState.state.user) router.push("/login");
  }, [globalState.state.user]);
  return (
    <ThemeConfig>
      <GlobalStyles />
      <Dashboard>
        <Container maxWidth="xl">
          <Box sx={{ pb: 5 }}>
            <Typography variant="h4">Dashboard</Typography>
            {globalState.state.user && (
              <Typography variant="body2">
                Hello, {globalState.state.user.user.name}
              </Typography>
            )}
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <BTCCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <ETHCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <BNBCard />
            </Grid>

            <Grid item xs={12} md={6} lg={8}>
              <MarketOverview BTCData={props.BTCData} />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <ADS />
            </Grid>

            <Grid item xs={12}>
              <MarketChart marketData={props.marketData} />
            </Grid>
          </Grid>
        </Container>
      </Dashboard>
    </ThemeConfig>
  );
}

export default DashboardApp;

export async function getServerSideProps() {
  const p1 = axios.request({
    method: "GET",
    url: "https://investing-cryptocurrency-markets.p.rapidapi.com/coins/list-pairs",
    params: { time_utc_offset: "28800", lang_ID: "1" },
    headers: {
      "x-rapidapi-host": "investing-cryptocurrency-markets.p.rapidapi.com",
      "x-rapidapi-key": "87740ee75fmsh9b75e67c7d15fd3p14ef5ejsnb71ae0be52b1",
    },
  });

  const p2 = axios.request({
    method: "GET",
    url: "https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-brief-chart",
    params: {
      pair_ID: "945629",
      lang_ID: "1",
      time_utc_offset: "28800",
      range: "p",
    },
    headers: {
      "x-rapidapi-host": "investing-cryptocurrency-markets.p.rapidapi.com",
      "x-rapidapi-key": "87740ee75fmsh9b75e67c7d15fd3p14ef5ejsnb71ae0be52b1",
    },
  });

  const res = await Promise.all([p1, p2]);

  const marketData = res[0].data;
  const BTCData = res[1].data;

  return { props: { marketData, BTCData } };
}
