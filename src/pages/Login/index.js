
import { Image } from 'react-native';
import React from 'react';
import { Container, Button, ButtonText} from '../../styles';
import logo from '../../assets/logo.png';
import bgBottom from '../../assets/bg-bottom-login.png';

const Login = () => {
  return (
  <Container color="verde" justify="flex-end">
      <Container
      
      justify="space-around"
      padding={30}
      position="absolute"
      height={270}
      top={0}
      zIndex={9}>
       
      <Image source={logo} />

      <Button type="info">
        <ButtonText color="light">
          Fazer Login com Facebook
        </ButtonText>
      </Button>

      <Button type="light">
        <ButtonText >
          Fazer Login com Google
        </ButtonText>
      </Button>

      </Container>
      <Image source={bgBottom} />
  </Container>
  );
};

export default Login;
