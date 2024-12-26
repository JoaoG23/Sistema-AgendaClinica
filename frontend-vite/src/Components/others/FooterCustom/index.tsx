import { Footer } from "flowbite-react";
import React from "react";

export const FooterCustom: React.FC = () => {
  return (
    <Footer container>
      <div></div>
      <Footer.Copyright href="#" by="Clinica de Agendamentos" year={2025} />
    </Footer>
  );
};
