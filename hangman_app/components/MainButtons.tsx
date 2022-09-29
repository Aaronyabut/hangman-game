import { View, Text, Button , TextInput, TouchableOpacity, Modal, Pressable, StyleSheet, Image, TouchableHighlight, ImageBackground} from 'react-native';
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
  const [correctWords, setCorrectWords] = useState<string[]>([])
  const [spellWord, setSpellWord] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(8);
  const [totalChar, setTotalChar] = useState<number>(0);


  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        let randNum = Math.floor(Math.random() * (response.data.length));
        let allData = response.data;
        let charCount = 0;

        const testFunc = () => {
          let initialText = ''
          allData[randNum].keyword.split('').map((letter:string, i:number) => {
            if (allData[randNum].keyword.includes(letter) && correctWords.includes(letter)) {
              initialText += letter
            } else if (letter === ' ') {
              initialText += '   '
            } else {
              initialText += " _ "
              charCount += 1
            }
          })
          return initialText;
        }
        setGameData(allData);
        setCurrWord(allData[randNum].keyword);
        setCurrCategory(allData[randNum].category);
        setCurrHint(allData[randNum].hint);
        setSpellWord(testFunc);
        setTotalChar(charCount - 1);
      })
      .catch((err) => console.log('ERROR', err))
  }, [])

  const hintOnPress = () => setHintPress(!hintPress)

  const playOnPress = () => {
    let randInd:number = Math.floor(Math.random() * (gameData.length));

    displayText();

    setCorrectWords([]);
    setHintPress(false);
    setAttempts(8);

    setCurrWord(gameData[randInd].keyword);
    setCurrCategory(gameData[randInd].category);
    setCurrHint(gameData[randInd].hint);
  }


  const addCorrect = (letter:string) => {
    if (currWord.includes(letter)) {
      correctWords.push(letter);
      setTotalChar(totalChar - 1);
      console.log(totalChar)
    } else {
      if (attempts >= 1) {
        setAttempts(attempts - 1);
      }
    }
    console.log('OUTER', totalChar)
  }

  const displayText = ():string => {
    let changeableText = '';
    let charCount = 0;

    currWord.split('').map((letter, i) => {
      if (currWord.includes(letter) && correctWords.includes(letter)) {
        changeableText += letter
      } else if (letter === ' ') {
        changeableText += '   '
      } else {
        changeableText += " _ "
        charCount+=1
      }
    })
    if (attempts <= 1) {
      setSpellWord("YOU BUGGED OUT!!")
    } else {
      setSpellWord(changeableText)
    }

    // console.log('This counts', charCount)
    setTotalChar(charCount - 1)
    return changeableText;
  }



  return (
    <ViewButtons>
      {
        totalChar >= 0 ?
        <NoWonImg
          onPress={playOnPress}
          underlayColor="#d1e0d6"
        >
          <Image
            style={{height: 275, width: 275}}
            source={require('../assets/bugging.png')}
          />
        </NoWonImg>
        :
        <View>
          <WonImg>
            <WonImage
              source={require('../assets/happy-h.png')}
            />
          </WonImg>
          <WonText>YOU WON!</WonText>
        </View>
      }
      {currWord ?
        <Info>
          {spellWord ?
            <SpellText>{spellWord}</SpellText>
            : <Text></Text>
          }

          <MiscText>
            {`The Category is ${currCategory} `}
          </MiscText>

          {hintPress
            ? <MiscText>{`HINT: ${currHint}`}</MiscText>
            : <Text></Text>
          }

        </Info>
      : <View><Text></Text></View>}
      <Info>
        <Text>{`You Have ${attempts} Attempts Left`}</Text>
      </Info>

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
        {Buttons.split('').map((letter, i) => (
          <OpacityButtons
            value={letter}
            key={i}
            onPress={() => {
              addCorrect(letter)
              displayText()
            }}
          >
              <TextButton>{letter}</TextButton>
          </OpacityButtons>
        ))}
      </InframeButton>
    </ViewButtons>
  )
}

export default KeyButtons;

const WonText = styled.Text`
  display: flex;
  margin: 2px;
  position: absolute;
  text-align: center;
  font-size: 21px;
  left: 100px;
  top: 220px;
  // border-width: 2px;
  // border-color: #000000;
`;

const WonImg = styled.TouchableHighlight`
  position: abosute;
  top: -95px;
  // border-width: 2px;
  // border-color: #000000;
`
const WonImage = styled.Image`
  position: abosute;
  top: 65px;
  height: 335px;
  width: 335px;
  // border-width: 2px;
  // border-color: #000000;
`
const NoWonImg = styled.TouchableHighlight`
  position: abosute;
  top: -35px;
  // border-width: 2px;
  // border-color: #000000;
`
const Info = styled.View`
  position: abosute;
  top: -45px;
  // border-width: 2px;
  // border-color: #000000;
`

const SpellText = styled.Text`
  text-align: center;
  font-size: 25px;
  // border-width: 2px;
  // border-color: #000000;
`;

const MiscText = styled.Text`
  text-align: center;
  // border-width: 2px;
  // border-color: #000000;
`;

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
  position: abosute;
  top: -50px;
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
  position: abosute;
  top: -45px;
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
  border-width: 5px;
  border-color: #000000;
`;


/*

const data: string[][] = [
  ['los angeles', 'long beach', 'san francisco', 'san diego', 'new york city', 'seattle', 'las vegas', 'chicago', 'dallas', 'houston', 'new orleans', 'honolulu', 'phoenix', 'miami', 'philidelphia', 'atlanta'],
  ['javascript', 'python', 'typescript', 'swift', 'html', 'css', 'react', 'react native'],
  ['google', 'meta', 'apple', 'amazon', 'ibm', 'netflix', 'microsoft', 'oracle', 'cisco', 'tesla', 'airbnb', 'snapchat', 'intel', 'atlassian', 'nvidia', 'paypal', 'uber', 'twitter', 'adp', 'amd', 'shopify']
]

const dataCategory: string[] = ['US City', 'Disney Movie', 'Tech Company']

*/