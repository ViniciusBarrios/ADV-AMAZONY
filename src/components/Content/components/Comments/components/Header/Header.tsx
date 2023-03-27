import { Montserrat } from "@next/font/google";

import { Container, QuantityComments, Divider, Text } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default () => (
  <Container>
    <QuantityComments className={montserrat.className}>
      <strong>138</strong> COMENTÁRIOS
    </QuantityComments>

    <Divider />

    <Text className={montserrat.className}>
      Os comentários são de responsabilidade exclusiva de seus autores e não
      representam a opinião deste site. Se achar algo que viole os termos de
      uso, denuncie. Leia as perguntas mais frequentes para saber o que é
      impróprio ou ilegal.
    </Text>
  </Container>
);
