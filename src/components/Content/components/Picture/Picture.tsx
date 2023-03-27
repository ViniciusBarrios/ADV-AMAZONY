import { Montserrat } from "@next/font/google";

import { Container, Wrapper, Img, Description } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

type PictureProps = {
  maxWidth?: number | string;
  image: string;
  description?: string;
  marginTop?: string | number;
};

export default ({
  maxWidth = "100%",
  image,
  description,
  marginTop = 0,
}: PictureProps) => (
  <Container css={{ marginTop }}>
    <Wrapper>
      <Img
        width={100}
        height={100}
        alt={description || ""}
        src={image}
        layout="responsive"
        css={{ maxWidth }}
      />
    </Wrapper>

    {description && (
      <Description className={montserrat.className}>{description}</Description>
    )}
  </Container>
);
