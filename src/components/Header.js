import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Flex } from "./styles/Flex.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />

          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1> love you </h1>
            <p>home center schnizel</p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
