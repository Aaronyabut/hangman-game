import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';
import axios from 'axios';


import KeyButtons from "./components/MainButtons";

function App() {
  const [opening, setOpening] = useState(false);
  const [gameData, setGameData] = useState([]);



  return (
    <MainView>
      {opening
      ? <MainView>
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
      :
        <MainView>
          <View>
            <Image
              source={require('./assets/techg.png')}
              style={{height: 650, width: 650}}
            />
          </View>
          <View>
            <PlayNow
              onPress={()=>setOpening(true)}
            >
              <Text>Play Now</Text>
            </PlayNow>
          </View>
        </MainView>
      }
    </MainView>
  );
}

export default App;

const PlayNow = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  height: 50px;
  width: 200px;
  background-color: #ffdd99;
  border-radius: 5px;
  border-width: 2px;
  border-color: #000000;
`

const TopView = styled.View`
  flex: 3;
  width: 350px;
  border-style: solid;
  border-color: #000000;
  background-color: #d1e0d6;
  height: 50px;
  border-width: 2px;
  border-color: #000000;
`;

const ButtonView = styled.View`
  flex: 3;
  width: 350px;
  border-style: solid;
  border-color: #000000;
  background-color: #d1e0d6;
  margin: 5px;
  border-width: 2px;
  border-color: #000000;
`;

const BottomView = styled.View`
  flex: .1;
  width: 350px;
  // border-style: solid;
  // border-color: #000000;
  // background-color: #ffcccc;
  // border-width: 2px;
  // border-color: #000000;
`;

const MainView = styled.View`
  flex: 1;
  display: flex;
  background-color: #3e5b48;
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