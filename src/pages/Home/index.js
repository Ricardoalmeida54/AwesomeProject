import React from 'react';

import { Container, Title, Map, Avatar, SubTitle, Spacer,  Input, Button, ButtonText, VerticalSeparator, Bullet, PulseCircle } from '../../styles';

import { TouchableOpacity } from 'react-native';


const Home = () => {

  const tipo = 'M';
  const status = 'C'; // S - SEM CORRIDA, I = INFORMAÇÕES, P PESQUISA, C = CORRIDA
  

    return (
        <Container>
          <Map 
            initialRegion={{
        latitude:-22.872320,
         longitude:-43.466656,
         latitudeDelta: 0.5220,
         longitudeDelta: 0.2760,
            }}
            disabled={status === 'P'}
          />
          <Container
          position="absolute" 
          justify="space-between"
          align="flex-start"
          padding={20}
          pointerEvents="box-none"
          style={{height: '100%'}}>

            {/* PARTE SUPERIOR */}
            <Container height={100} justify="flex-end" align="flex-start" >
                       {/*  AVATAR */}
                       {status === 'S' ||
                        tipo === 'M' && (
                       <TouchableOpacity>
                        <Avatar 
                      // elevation={50}
                        source={{ uri: 'https://conteudo.imguol.com.br/c/esporte/86/2021/09/11/cristiano-ronaldo-sorri-apos-marcar-dois-gols-no-duelo-entre-manchester-united-e-newcastle-1631374530224_v2_600x600.jpg.webp',
                    }}
                    />
             </TouchableOpacity>
             )}
 {status !=='S' && tipo === 'P' && (
              <Container 
              elevation={50}
              justify="flex-end"
              color="light">
                <Container padding={8}>
                    <Container justify="flex-start" row>
                        <Bullet />
                        <SubTitle> Endereço de embarque completo</SubTitle>
                    </Container>
             <Spacer height={20}/>
                    <Container justify="flex-start" row>
                    <Bullet destination/>
                        <SubTitle> Endereço de destino completo</SubTitle>
                    </Container>
                </Container>
                <Button type="dark" compact>
                  <ButtonText color="light">Toque para editar</ButtonText>
                </Button>
              </Container>
              )}
            </Container>


            {/* PASSAGEIRO PROCURANDO CORRIDA */}
           {status === 'P' && tipo === 'P' && ( 
           <Container padding={20} zindex={-1}>
                <PulseCircle 
                    numPulses={3}
                    diameter={400}
                    speed={20}
                    dutarion={2000}
                />
            </Container>
           )}

            
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
{tipo === 'P' && (status ==='I' || status === 'P') && ( 
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
                    <Button
                        type={status === 'P' ? "muted" : "primary"}>
                        <ButtonText> {status ==='P' ? 'Cancelar Driverx' : 'Chamar Driverx'}</ButtonText>
                    </Button>
                </Container>
                )}


                    {/*PASSAGEIRO EM CORRIDA  */}
                    {tipo === 'P' && status === 'C' && (
                    <Container border="primary" justify="flex-end" align="flex-start">
                        <Container row padding={20}>
                            <Container align="flex-start"  row>



                            <Avatar 
                            small
                            source={{ uri: 
                                'data:image/jpeg;base64,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',
                            }}
                            />
                            <Spacer width="10px"/>
                            <Container align="flex-start">
                                <SubTitle bold>Juliana Righi</SubTitle>
                                <SubTitle small>FGH-5678, FORD, BRANCO</SubTitle>
                            </Container>
                            </Container>
                            <VerticalSeparator />
                            <Container padding={5} width={120}>
                                <Title>R$ 12,90</Title>
                                <SubTitle bold color="primary">
                                    Aprox. 5 mins
                                </SubTitle>
                            </Container>
                        </Container>
                        <Button type="muted">
                            <ButtonText>Cancelar Corrida</ButtonText>
                        </Button>
                    </Container>
                    )}



                  {/* MOTORISTA SEM CORRIDA */}
                  {tipo === 'M' && status === 'S' && ( <Container>
              
              <SubTitle>Olá, Juliana..</SubTitle> 
                   <Title>Nenhuma corrida encontrada.</Title>
              </Container>
              )}

                    {/* MOTORISTA ESTÁ EM CORRIDA */}
                    {tipo ==='M' && status ==='C' && (
                    <Container border="primary" justify="flex-end" align="flex-start">
                    <Container row padding={20}>
                        <Container align="flex-start"  row>



                        <Avatar 
                        small
                        source={{ uri: 
                            'data:image/jpeg;base64,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',
                        }}
                        />
                        <Spacer width="10px"/>
                        <Container align="flex-start">

                            
                    <Container justify="flex-start" height={20} row>
                        <Bullet />
                        <SubTitle small numberOfLines={1}>
                            {' '}
                             Endereço de embarque completo
                             </SubTitle>
                    </Container>
           
                    <Container justify="flex-start" height={20} row>
                    <Bullet destination/>
                        <SubTitle small numberOfLines={1}> 
                        {' '}
                        Endereço de destino completo
                        </SubTitle>
                    </Container>
                

                       
                        </Container>
                        <Spacer width="10px"/>
                        </Container>
                        <VerticalSeparator />
                        <Container padding={5} width={95}>
                            <Title small>R$ 12,90</Title>
                            <SubTitle bold small color="primary">
                                Aprox. 5 mins
                            </SubTitle>
                        </Container>
                    </Container>
                    <Button type="primary">
                        <ButtonText>Aceitar Corrida</ButtonText>
                    </Button>
                </Container>
                )}
                    


                </Container>
          </Container>
        </Container>
    )
}

export default Home;