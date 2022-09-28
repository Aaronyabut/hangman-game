import { View, Text, Button , TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native'
import axios from 'axios';
import { PORT, DB_NAME } from '../config'

const API_URL = `http://localhost:3000/faang/man`;

interface AllData {
  keyword: string,
  category: string,
  hint: string,
}

function KeyButtons () {
  const Buttons: string = 'abcdefghijklmnopqrstuvwxyz';
  const [gameData, setGameData] = useState<AllData[]>([]);
  const [currWord, setCurrWord] = useState<string>('');
  const [currCategory, setCurrCategory] = useState<string>('');
  const [currHint, setCurrHint] = useState<string>('');
  const [hintPress, setHintPress] = useState<boolean>(false);

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        let randNum = Math.floor(Math.random() * (response.data.length))
        setGameData(response.data)
        setCurrWord(response.data[randNum]["keyword"])
        setCurrCategory(response.data[randNum]["category"])
        setCurrHint(response.data[randNum]["hint"])
      })
      .catch((err) => console.log('ERROR', err))
  }, [])

  const hintOnPress = () => setHintPress(!hintPress)

  const playOnPress = () => {
    let randInd = Math.floor(Math.random() * (gameData.length))
    setCurrWord(gameData[randInd]["keyword"])
    setCurrCategory(gameData[randInd]["category"])
    setCurrHint(gameData[randInd]["hint"])
    setHintPress(false)
  }



  return (
    <ViewButtons>
      {/* {console.log(gameData[randNum]["keyword"])} */}

      {currWord ?
        <View>
          <Text>
            {`${currWord} `}
          </Text>
          <Text>
            {`The category is ${currCategory} `}
          </Text>
          {hintPress
            ? <Text>{`HINT: ${currHint}`}</Text>
            : <Text></Text>
          }
        </View>
      : <View><Text>Yep</Text></View>}




      <TopInframeButton>
      <TopView>
        <HintPlayButtons onPress={hintOnPress}>
          <TopButton>Hint</TopButton>
        </HintPlayButtons>
        <HintPlayButtons onPress={playOnPress}>
          <TopButton>Play Again</TopButton>
        </HintPlayButtons>
        </TopView>
      </TopInframeButton>


      <InframeButton>
        {Buttons.split('').map((letter) => (
          <OpacityButtons>
              <TextButton>{letter}</TextButton>
          </OpacityButtons>
        ))}
      </InframeButton>

      {/* <SampleText
        placeholder="Sample"
      /> */}
    </ViewButtons>
  )
}

export default KeyButtons;

const TopInframeButton = styled.View`
  display: flex;
  flex-direction: row;
  align-content: flex-end;
  height: 50px;
  width: 347px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1px;
  // border-width: 2px;
  // border-color: #000000;
`;

const TopView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const TopButton = styled.Text`
  display: flex;
  margin: 2px;
  // width: 150px;
  // height: 40px;
  text-align: center;
  font-size: 21px;
  // border-width: 2px;
  // border-color: #000000;
`;

const HintPlayButtons = styled.TouchableOpacity`
  display: flex;
  width: 150px;
  align-items: center;
  justify-content: center;
  margin: 2px;
  background-color: #ffd480;
  border-radius: 5px;
  border-width: 2px;
  border-color: #000000;
`

const OpacityButtons = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  background-color: #e6e6ff;
  border-radius: 5px;
  border-width: 2px;
  border-color: #000000;
`;

const TextButton = styled.Text`
  display: flex;
  margin: 2px;
  width: 50px;
  height: 30px;
  text-align: center;
  font-size: 21px;
  // border-width: 2px;
  // border-color: #000000;
`;

const InframeButton = styled.View`
  display: flex;
  flex-direction: row;
  height: 90px;
  width: 347px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  // border-width: 2px;
  // border-color: #000000;
`;

const ViewButtons = styled.View`
  flex: 1;
  diplay: flex;
  height: 100px;
  width: 350px;
  justify-content: center
  align-items: center;
  flex-wrap: wrap;
  // border-width: 2px;
  // border-color: #000000;
`;

const MainButtons = styled.Button`
  flex: 1;
  // background-color: #000000;
  // diplay: flex;
  border-width: 5px;
  border-color: #000000;
`;

  const SampleText = styled.TextInput`
    flex: 1;
    display: flex;
    border-width: 2px;
    border-color: #000000;
    height: 30px;
    width: 20px;
    justify-content: center
    align-items: center;
  `;

/*
const data: string[][] = [
  ['los angeles', 'long beach', 'san francisco', 'san diego', 'new york city', 'seattle', 'las vegas', 'chicago', 'dallas', 'houston', 'new orleans', 'honolulu', 'phoenix', 'miami', 'philidelphia', 'atlanta'],
  ['javascript', 'python', 'typescript', 'swift', 'html', 'css', 'react', 'react native'],
  ['google', 'meta', 'apple', 'amazon', 'ibm', 'netflix', 'microsoft', 'oracle', 'cisco', 'tesla', 'airbnb', 'snapchat', 'intel', 'atlassian', 'nvidia', 'paypal', 'uber', 'twitter', 'adp', 'amd', 'shopify']
]

const dataCategory: string[] = ['US City', 'Disney Movie', 'Tech Company']

*/