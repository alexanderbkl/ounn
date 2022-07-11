import React from 'react';
import { Text } from 'react-native';



export function Messages({
  message,
}: {
  message: string;
}) {
  return (
    <Text>
      {message}
      </Text>
  );
}
