
import React, {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';

import {
    Container,
    Button,
    ButtonText, Title,
    SubTitle,
    Input,
    Spacer,
    } from '../../styles';




const Ride = () => {
    // O BOTAO USAR TRATADO COMO UM OBJETO NA LINHA 37 > 43 > 
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const KeyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => setVisible(false),
        );

        const KeyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => setVisible(true),
        );

        return() => {
            KeyboardDidShowListener.remove();
            KeyboardDidHideListener.remove();
        }

    }, []);

  return (
      <Container padding={30} justify="flex-start">
          <Container align="flex-start" height={40} >
            <Title>Cadastre seu veiculo</Title>
            <SubTitle>Preencha os campos abaixo.</SubTitle>
          </Container>
          <Container justify="flex-start">
            
          </Container>
          {visible && (
               <Container height={70} justify="flex-end">
                    <Button>
            <ButtonText>Comece a usar</ButtonText>
            </Button>
          </Container>
  )}
      </Container>
  );
};

export default Ride;
