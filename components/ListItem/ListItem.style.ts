import styled from "styled-components/native";

export const Card = styled.View`
  background-color: #f5f5f5;
  height: 80px;

  flex-direction: row;
  align-items: center;

  padding: 2%;
  margin-horizontal: 10%;
  margin-bottom: 5%;

  border: 0.1px #656565;
  shadow-color: #656565;
  shadow-opacity: 0.2;
  shadow-radius: 5%;
  border-radius: 5%;
`;

export const Avatar = styled.Image`
  border-radius: 50%;
  margin-right: 2%;
`;
