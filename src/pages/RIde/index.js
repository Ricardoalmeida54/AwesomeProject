
import React, {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';

import {
    Container,
    Button,
    ButtonText, Title,
    SubTitle,
    Input,
    Spacer,
    AddressList,
    AddressItem,
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
    <Container align="flex-start" padding={10}>
        <SubTitle> Voltar</SubTitle>
    </Container>
    <Container>
        <Title>Corrida</Title>
    </Container>
    <Container align="flex-end" padding={20}></Container>
      </Container>


    <Container padding={30} justify="flex-start">
        <Container height={90} justify="flex-start">
        <Input 
        placeholder="Embarque" 
        />

        <Input 
        placeholder="Destino" 
        />
        </Container>
        <Container>
        <AddressList 
        data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]} 
        renderItem={({ item, index }) => (
            <AddressItem>
                <SubTitle bold>Menlo Parl</SubTitle>
                <SubTitle small>Palo Alto, CA</SubTitle>
            </AddressItem>
        )}
        />
    </Container>
    </Container>
   
    {visible &&(
               <Container height={70} padding={3.0} justify="flex-end">
            <Button>
            <ButtonText>Comece a usar</ButtonText>
            </Button>
          </Container>
          )}
          </>
  );
    };
export default Ride;
