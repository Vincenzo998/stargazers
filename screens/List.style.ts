import styled from "styled-components/native";

export const ListContainer = styled.View`
  flex: 1;
  padding-vertical: 15%;
  background-color: #fff;
  flex-direction: column;
`;

export const InputContainer = styled.View`
  margin-horizontal: 5%;
  justify-content: space-evenly;
`;

export const Input = styled.TextInput`
  width: 100%;
  border: 1px #656565;
  border-radius: 13%;
  padding: 5%;
`;

export const ErrorText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-family: Al Nile;
  margin-top: 5%;
`;

export const Label = styled.Text`
  font-family: Al Nile;
`;
