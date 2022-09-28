import { View, Text, Button , TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

function KeyButtons () {
  const Buttons: string = 'abcdefghijklmnopqrstuvwxyz';

  return (
    <ViewButtons>
      {/* <Text>
      </Text> */}

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