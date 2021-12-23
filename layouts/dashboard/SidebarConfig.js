import SpeedIcon from "@mui/icons-material/Speed";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LockIcon from "@mui/icons-material/Lock";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SettingsIcon from "@mui/icons-material/Settings";

const sidebarConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: <SpeedIcon />,
  },
  {
    title: "my wallet",
    path: "/dashboard/app",
    icon: <AccountBalanceWalletIcon />,
  },
  {
    title: "transaction",
    path: "/dashboard/app",
    icon: <CreditCardIcon />,
  },
  {
    title: "login",
    path: "/login",
    icon: <LockIcon />,
  },
  {
    title: "register",
    path: "/register",
    icon: <PersonAddIcon />,
  },
  {
    title: "setting",
    path: "/setting",
    icon: <SettingsIcon />,
  },
];

export default sidebarConfig;
