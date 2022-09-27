import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';

import KeyButtons from "./components/MainButtons";

function App() {
  return (
    <MainView>
      <TopView>
        <Text> Top</Text>
      </TopView>
      <ButtonView>
        <KeyButtons />
      </ButtonView>
      <BottomView>
      </BottomView>
      <StatusBar style="auto" />
    </MainView>
  );
}

export default App;

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