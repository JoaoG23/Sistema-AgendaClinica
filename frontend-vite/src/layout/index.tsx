import { Outlet } from "react-router-dom";
import { FooterCustom } from "../components/others/FooterCustom";
import { Header } from "../components/others/Header";
import { Leftbar } from "../components/others/Leftbar";

export const Layout = () => {
  return (
    <div className="grid">
      <Header />
      <section>
        <Leftbar />
        <aside className="p-10 sm:ml-64 lg:pt-16 lg:pl-16 lg:pr-16 h-[calc(100vh-64px)] ">
          <Outlet />
        </aside>
      </section>
      <FooterCustom />
    </div>
  );
};
