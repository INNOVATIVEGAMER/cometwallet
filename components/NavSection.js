import PropTypes from "prop-types";
import RouteLink from "next/link";
import { useRouter } from "next/router";
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";

const ListItemStyle = styled((props) => (
  <ListItemButton disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary,
  "&:before": {
    top: 0,
    right: 0,
    width: 3,
    bottom: 0,
    content: "''",
    display: "none",
    position: "absolute",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: theme.palette.primary.main,
  },
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.func,
};

function NavItem({ item, active }) {
  const theme = useTheme();
  const isActiveRoot = active(item.path);
  const { title, path, icon, info } = item;

  const activeRootStyle = {
    color: "primary.main",
    fontWeight: "fontWeightMedium",
    bgcolor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
    "&:before": { display: "block" },
  };

  return (
    <RouteLink href={path}>
      <ListItemStyle
        sx={{
          ...(isActiveRoot && activeRootStyle),
        }}
      >
        <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
        <ListItemText disableTypography primary={title} />
        {info && info}
      </ListItemStyle>
    </RouteLink>
  );
}

NavSection.propTypes = {
  navConfig: PropTypes.array,
};

export default function NavSection({ navConfig, ...other }) {
  const router = useRouter();
  const pathname = router.pathname;
  router.asPath;
  const match = (path) => (path ? !!path === pathname : false);

  return (
    <Box {...other}>
      <List disablePadding>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
    </Box>
  );
}
