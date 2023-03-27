import { Montserrat } from "@next/font/google";

import {
  Container,
  Wrapper,
  Sites,
  Site,
  Actions,
  SignUp,
  SignIn,
} from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default () => (
  <Container>
    <Wrapper>
      <Sites>
        <Site css={{ color: "#0669de" }} className={montserrat.className}>
          globo.com
        </Site>
        <Site css={{ color: "#a80000" }} className={montserrat.className}>
          g1
        </Site>
        <Site css={{ color: "#3e831e" }} className={montserrat.className}>
          ge
        </Site>
        <Site css={{ color: "#ff7f00" }} className={montserrat.className}>
          gshow{" "}
        </Site>
        <Site css={{ color: "#ee2033" }} className={montserrat.className}>
          globoplay
        </Site>
      </Sites>

      <Actions>
        <SignUp className={montserrat.className}>ASSINE JÁ</SignUp>

        <SignIn className={montserrat.className}>ENTRAR {">"}</SignIn>
      </Actions>
    </Wrapper>
  </Container>
);
