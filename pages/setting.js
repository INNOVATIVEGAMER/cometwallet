import RouteLink from "next/link";
import { styled } from "@mui/material/styles";
import { Box, Card, Link, Container, Typography, Button } from "@mui/material";
import { useContext, useEffect } from "react";
import AppContext from "../AppContext";
import { useRouter } from "next/router";
import { UpdateForm } from "../components/authentication/update";
import api from "../db/backend";

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

export default function Setting() {
  const globalState = useContext(AppContext);
  const router = useRouter();
  useEffect(() => {
    if (!globalState.state.user) router.push("/login");
  }, [globalState.state.user]);

  const deleteAccount = async () => {
    try {
      await api.delete("/users/me", {
        headers: { Authorization: `Bearer ${globalState.state.user?.token}` },
      });
      router.push("/register");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RootStyle title="Register | IG">
      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Settings | Hey, {globalState.state.user?.user.name}!
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              You can update your account here
            </Typography>
          </Box>

          <UpdateForm token={globalState.state.user?.token} />

          <Typography variant="subtitle2" sx={{ mt: 3, textAlign: "center" }}>
            Do you want to Delete your account? &nbsp;
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={deleteAccount}
            >
              Delete
            </Button>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}