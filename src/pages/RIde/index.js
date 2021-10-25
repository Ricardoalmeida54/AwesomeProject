
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
    <>
        <Container row height={50} justify="flex-start">
        <Container>
            <SubTitle align="flex-start" padding={20}> Voltar </SubTitle>
        </Container>
        <Container>
            <SubTitle>Corrida </SubTitle>
        </Container>
        <Container align="flex-end" padding={20}></Container>
            </Container>

            <Container padding={30}>
                <Container height={90} justify="flex-start">
                    <Input placeholder="Embarque"/>
                    <Input placeholder="Destino"/>
                </Container>
            </Container>
            <Container></Container>
            {visible && (
               <Container height={300} padding={93} justify="flex-end">
                    <Button>
            <ButtonText>Comece a usar</ButtonText>
            </Button>
          </Container>
  )}
  </>
  );
};

export default Ride;
