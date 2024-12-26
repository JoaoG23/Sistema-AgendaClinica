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
        <aside>
          <Outlet />
        </aside>
        <FooterCustom />
      </section>
    </div>
  );
};
