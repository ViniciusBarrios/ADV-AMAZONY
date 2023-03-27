import { Montserrat } from "@next/font/google";

import {
  Container,
  AvatarWrapper,
  Avatar,
  Wrapper,
  Name,
  CreatedAt,
  Comment,
} from "./styles";

type Comment = {
  name: string;
  avatar: string;
  mensage: string;
  createdAt: string;
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default ({ name, avatar, mensage, createdAt }: Comment) => (
  <Container>
    <AvatarWrapper>
      <Avatar
        width={50}
        height={50}
        alt={name}
        src={avatar}
        objectFit="cover"
      />
    </AvatarWrapper>

    <Wrapper>
      <Name className={montserrat.className}>
        {name}
        <CreatedAt className={montserrat.className}>{createdAt}</CreatedAt>
      </Name>

      <Comment className={montserrat.className}>{mensage}</Comment>
    </Wrapper>
  </Container>
);
