import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import AppContext from "../AppContext";
import { useState } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import { ToastContainer } from "react-toastify";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const [user, setuser] = useState(null);
  const value = {
    state: {
      user,
    },
    setuser,
  };
  return (
    <AppContext.Provider value={value}>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
