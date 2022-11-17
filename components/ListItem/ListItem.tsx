import React, { Text } from "react-native";

// types
import { ListItemProps } from "../../types";

// styles
import { Card, Avatar } from "./ListItem.style";

const ListItem = ({ item: { login, avatar_url, id }, index }: ListItemProps) => {
  return (
    <Card key={id} style={{ ...(index === 0 && { marginTop: "2%" }), shadowOffset: { width: -2, height: 4 } }}>
      <Avatar
        source={{
          height: 50,
          width: 50,
          uri: avatar_url,
        }}
      />
      <Text>{login}</Text>
    </Card>
  );
};

export default ListItem;
