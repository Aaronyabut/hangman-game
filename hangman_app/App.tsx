import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, StyleSheet, TouchableOpacity, Image, TouchableHighlight, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { useState, useEffect } from 'react';

import KeyButtons from "./components/MainButtons";

function App() {
  const [opening, setOpening] = useState<boolean>(false);

  return (
    <Main>
      <ImageBackground
        source={require('./assets/background-3.png')}
      >
      {opening
      ? <MainView>
          <ButtonView>
            <KeyButtons />
          </ButtonView>
          <StatusBar style="auto" />
        </MainView>
      :
        <MainView>
          <Logo>
          <FaangImage
              source={require('./assets/faang.png')}
            />
          <ManImage
              source={require('./assets/man.png')}
            />
          </Logo>
          <View>
            <GuyImage
              source={require('./assets/techg.png')}
              style={{height: 750, width: 750}}
            />
            <BlobImage
              source={require('./assets/graph1.png')}
            />
          </View>
          <View>
            <PlayNow
              onPress={()=>setOpening(true)}
              underlayColor="#ffc34d"
            >
              <PlayImg
                source={require('./assets/playnow.png')}
              />
            </PlayNow>
          </View>
        </MainView>
      }
      </ImageBackground>
    </Main>

  );
}

export default App;



const Logo = styled.View`
  position: absolute;
  width: 300px;
  height: 150px;
  // border-width: 2px;
  // border-color: #000000;
  top: 150px;
  // left: -98px;
`

const PlayImg = styled.Image`
  height: 55px;
  width: 55px;
  padding-right: 200px;
`
const BlobImage = styled.Image`
  height: 575px;
  width: 425px;
  padding-right: 200px;
  margin: 15px;
  // border-width: 2px;
  // border-color: #000000;
  position: absolute;
  top: 105px;
  left: 155px;
  z-index: 1;
`
const GuyImage = styled.Image`
  z-index: 2;
`
const FaangImage = styled.Image`
  height: 75px;
  width: 325px;
  padding-right: 200px;
  margin: 15px;
  // border-width: 2px;
  // border-color: #000000;
  // object-fit: contain;
  position: absolute;
  top: -55px;
  left: -25px;
`
const ManImage = styled.Image`
  height: 55px;
  width: 55px;
  padding-right: 200px;
  margin: 15px;
  // border-width: 2px;
  // border-color: #000000;
  object-fit: contain;
  position: absolute;
  top: 25px;
  left: 40px;
`

const PlayNow = styled.TouchableHighlight`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  height: 100px;
  width: 275px;
  background-color: #ffdd99;
  border-radius: 5px;
  border-width: 2px;
  border-color: #000000;
  position: absolute;
  top: -135px;
  left: -138px;
`

const TopView = styled.View`
  flex: 1.25;
  width: 350px;
  border-style: solid;
  border-color: #000000;
  background-color: #d1e0d6;
  height: 50px;
  border-width: 2px;
  border-color: #000000;
`;

const ButtonView = styled.View`
  flex: 2;
  width: 350px;
  height: 750px;
  border-radius: 25px;
  background-color: #d1e0d6;
  margin: 5px;
  // border-width: 25px;
  border-color: #d1e0d6;
`;


const MainView = styled.View`
  flex: 1;
  display: flex;
  background: transparent;
  align-items: center;
  justify-content: center;
`;

const Main = styled.View`
  flex: 1;
  display: flex;
  background: #003300;
  align-items: center;
  justify-content: center;
`;


/*
<MainView>
  <TopView>
    <Text>Top</Text>
  </TopView>
  <ButtonView>
    <KeyButtons />
  </ButtonView>
  <BottomView>
  </BottomView>
  <StatusBar style="auto" />
</MainView>
*/