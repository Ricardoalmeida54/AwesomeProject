
import React,  {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';
import {Image} from 'react-native';
import { CreditCardInput } from "react-native-credit-card-input";
import {
    Container,
    Button,
    ButtonText, Title,
    SubTitle,
    Spacer,
   } from '../../styles';



const Payment = () => {
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
            <Title>Escolha como pagar</Title>
            <SubTitle>Preencha os dados do cartão de credito.</SubTitle>
          </Container>
          <Container>
            <Spacer height={50} />
           <CreditCardInput requiresName />
          </Container>
          {visible &&(
               <Container height={70} justify="flex-end">
            <Button>
            <ButtonText>Comece a usar</ButtonText>
            </Button>
          </Container>
          )}
      </Container>
  );
};

export default Payment;
