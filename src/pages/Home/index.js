import React from 'react';

import { Container, Title, Map, Avatar } from '../../styles';

import { TouchableOpacity } from 'react-native';


const Home = () => {
    return (
        <Container>
          <Map 
            initialRegion={{
        latitude:-22.872320,
         longitude:-43.466656,
         latitudeDelta: 0.5220,
         longitudeDelta: 0.2760,
            }}
          />
          <Container
          position="absolute" 
          justify="space-between"
          align="flex-start"
          padding={20}
          pointerEvents="box-none"
          style={{height: '100%'}}>

            {/* PARTE SUPERIOR */}
            <Container height={100} justify="flex-start" align="flex-start" color="info">
                       {/*  AVATAR */}
                       <TouchableOpacity>
                        <Avatar source={{ uri: 'https://conteudo.imguol.com.br/c/esporte/86/2021/09/11/cristiano-ronaldo-sorri-apos-marcar-dois-gols-no-duelo-entre-manchester-united-e-newcastle-1631374530224_v2_600x600.jpg.webp',
                    }}/>
                       </TouchableOpacity>
            </Container>


          </Container>
        </Container>
    )
}

export default Home;