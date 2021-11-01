import React from 'react';

import { Container, Title, Map, Avatar, SubTitle, Spacer,  Input, Button, ButtonText, VerticalSeparator } from '../../styles';

import { TouchableOpacity } from 'react-native';


const Home = () => {

  const tipo = 'P';
  const status = 'I'; // S - SEM CORRIDA, I = INFORMAÇÕES, P PESQUISA, C = CORRIDA
  

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
            <Container height={100} justify="flex-start" align="flex-start" >
                       {/*  AVATAR */}
                       {status === 'S' && (
                       <TouchableOpacity>
                        <Avatar 
                      // elevation={50}
                        source={{ uri: 'https://conteudo.imguol.com.br/c/esporte/86/2021/09/11/cristiano-ronaldo-sorri-apos-marcar-dois-gols-no-duelo-entre-manchester-united-e-newcastle-1631374530224_v2_600x600.jpg.webp',
                    }}
                    />
             </TouchableOpacity>
             )}

              {status === 'S' && (
              <Container 
              elevation={50}
              justify="flex-end"
              color="light">
                <Container padding={20}></Container>
                <Button type="dark" compact>
                  <ButtonText color="light">Toque para editar</ButtonText>
                </Button>
              </Container>
              )}
            </Container>

            
             <Container elevation={50}  height={150} color="light">
                {/* PASSAGEIRO SEM CORRIDA */}
                {tipo === 'P' && status === 'S' && ( 
                <Container  
                justify="flex-start"
                padding={20} 
                align="flex-start">
                <SubTitle>Olá, Ricardo Robert..</SubTitle> 
                 <Title>Pra onde você quer ir ?</Title>
                 <Spacer />
                 <Input placeholder="Procure um Destino..."/>
                </Container>
                )}


      {/* PASSAGEIRO INFORMAÇÕES DA CORRIDA  */}
{tipo === 'P' && status ==='I' && ( 
                <Container justify="flex-end" align="flex-start">
                  <Container padding={20}>
                    <SubTitle>Driverx Convencional</SubTitle>
                    <Spacer/>
                    <Container row>
                    <Container>
                      <Title>R$ 13,90</Title>
                    </Container>
                    <VerticalSeparator />
                    <Container>
                      <Title> 5 mins</Title>
                    </Container>
                    </Container>
                  </Container>
                    <Button>
                        <ButtonText> Chamar Driverx</ButtonText>
                    </Button>
                </Container>
                )}


                  {/* MOTORISTA SEM CORRIDA */}
                  {tipo === 'M' && ( <Container>
              
              <SubTitle>Olá, Juliana..</SubTitle> 
                   <Title>Nenhuma corrida encontrada.</Title>
              </Container>
              )}

                </Container>
       

          </Container>
        </Container>
    )
}

export default Home;