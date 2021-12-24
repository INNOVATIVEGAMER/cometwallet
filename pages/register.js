import RouteLink from "next/link";
import { styled } from "@mui/material/styles";
import { Box, Card, Link, Container, Typography } from "@mui/material";
import { RegisterForm } from "../components/authentication/register";

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

export default function Register() {
  return (
    <RootStyle title="Register | IG">
      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Get started absolutely free.
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Free forever | Developed By Prasad (IG)
            </Typography>
          </Box>

          <RegisterForm />

          <Typography variant="subtitle2" sx={{ mt: 3, textAlign: "center" }}>
            Already have an account?&nbsp;
            <RouteLink href="/login">
              <Link>Login</Link>
            </RouteLink>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
