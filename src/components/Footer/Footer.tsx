import { Montserrat } from "@next/font/google";

import { Logo } from "@static/assets";

import { Container, Wrapper } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default () => (
  <Container>
    <Wrapper>
      <div id="top">
        <Logo />

        <span className={montserrat.className}>
          últimas notícias
          <span />
          eleições
        </span>
      </div>

      <div id="bottom">
        <p className={montserrat.className}>
          &copy; Copyright 2000-{new Date().getFullYear()} Globo Comunicação e
          Participações S.A.
        </p>

        <span className={montserrat.className}>
          princípios editoriais
          <span />
          política de privacidade
          <span />
          minha conta
          <span />
          anuncie conosco
        </span>
      </div>
    </Wrapper>
  </Container>
);
