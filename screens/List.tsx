import React, { useState } from "react";
import { VirtualizedList } from "react-native";

// hooks
import { useStargazers } from "../hooks";

// components
import SkeletonList from "../components/SkeletonList";
import ListItem from "../components/ListItem";

// types
import { Item, Info, ListItemProps } from "../types";

// defines
import { REPO, USER } from "../defines";

// styles
import { Title } from "../styles/common";
import { ListContainer, InputContainer, Input, Label, ErrorText } from "./List.style";

const List: React.FC = () => {
  const [info, setInfo] = useState<Info>({
    [USER]: "",
    [REPO]: "",
  });

  const { stargazers, loading, error } = useStargazers(info);

  const handleInfo = (key: string, value: string) => setInfo((prevInfo) => ({ ...prevInfo, [key]: value }));

  return (
    <ListContainer>
      <Title> Stargazers </Title>
      <InputContainer style={{ marginBottom: 15 }}>
        <Label> User </Label>
        <Input onChangeText={(value: string) => handleInfo(USER, value)} value={info[USER]} placeholder="Enter a user" />
      </InputContainer>
      <InputContainer>
        <Label> Repository </Label>
        <Input onChangeText={(value: string) => handleInfo(REPO, value)} value={info[REPO]} placeholder="Enter a repository" />
      </InputContainer>
      {loading ? (
        <SkeletonList />
      ) : error ? (
        <ErrorText> {error} </ErrorText>
      ) : (
        <VirtualizedList
          data={stargazers}
          initialNumToRender={6}
          keyExtractor={(_: {}, index: number) => index.toString()}
          renderItem={({ item, index }: ListItemProps) => <ListItem index={index} item={item} />}
          getItem={(data: Array<Item>, index: number): Item => data[index]}
          getItemCount={(data: []) => data.length}
        />
      )}
    </ListContainer>
  );
};

export default List;
