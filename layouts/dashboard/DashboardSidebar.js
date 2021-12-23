import PropTypes from "prop-types";
import { useEffect } from "react";
import RouteLink from "next/link";
import { styled } from "@mui/material/styles";
import { Box, Drawer, Typography } from "@mui/material";
import NavSection from "../../components/NavSection";
import { MHidden } from "../../components/@material-extend";
import sidebarConfig from "./SidebarConfig";
import { useRouter } from "next/router";

const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Box
      display="flex"
      height="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Box sx={{ px: 2.5, py: 3 }}>
        <RouteLink href="/">
          <Box sx={{ display: "inline-flex" }}>
            {/* <Logo /> */}
            <Typography variant="h4" sx={{ color: "text.primary" }}>
              WALLET
            </Typography>
          </Box>
        </RouteLink>
      </Box>

      <NavSection navConfig={sidebarConfig} />

      {/* <Box sx={{ flexGrow: 1 }} /> */}
    </Box>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "background.default",
            },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
