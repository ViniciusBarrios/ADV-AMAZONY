import { Montserrat } from "@next/font/google";

import {
  Container,
  Title,
  Description,
  Informations,
  By,
  Date,
  Icons,
  FacebookIcon,
  TwitteIcon,
  WhatsappIcon,
  TelegramIcon,
  LinkedinIcon,
  ShareIcon,
} from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default () => (
  <Container>
    <Title className={montserrat.className}>
      Novo ativo liberado pela Anvisa: Óleo de rosa mosqueta, extraído das
      sementes da planta rosa canina com tecnologia Europeia, para o combate do
      envelhecimento da pele chega ao Brasil
    </Title>

    <Description className={montserrat.className}>
      Novo ativo com resultados surpreendentes no combate de manchas, rugas, pé
      de galinha, bigode chinês, estrias, celulite e foliculite será
      comercializado a partir de 26 de fevereiro de 2023 em todo o país.
    </Description>

    <Informations>
      <div>
        <By className={montserrat.className}>Por Bem Estar</By>

        <Date className={montserrat.className}>
          23/01/2023 12h44
          <span />
          Atualizado há 20 minutos
        </Date>
      </div>

      <Icons>
        <FacebookIcon />
        <TwitteIcon />
        <WhatsappIcon />
        <TelegramIcon />
        <LinkedinIcon />
        <ShareIcon />
      </Icons>
    </Informations>
  </Container>
);
