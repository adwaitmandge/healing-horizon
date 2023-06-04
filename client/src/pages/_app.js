import UserProvider from "@/UserProvider";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <UserProvider>
      {" "}
      <Component {...pageProps} />{" "}
    </UserProvider>
  );
}
