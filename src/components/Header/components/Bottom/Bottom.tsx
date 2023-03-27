import { Montserrat } from "@next/font/google";

import { Logo } from "@static/assets";

import {
  Container,
  Wrapper,
  Content,
  Menu,
  MenuIcon,
  Space,
  Title,
  SearchIcon,
  Podcast,
} from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default () => (
  <>
    <Container>
      <Wrapper>
        <Content>
          <Menu>
            <MenuIcon />

            <p className={montserrat.className}>MENU</p>
          </Menu>

          <Space />

          <Logo />
        </Content>

        <Title className={montserrat.className}>BEM ESTAR</Title>

        <SearchIcon />
      </Wrapper>
    </Container>

    <Podcast className={montserrat.className}>PODCAST</Podcast>
  </>
);
