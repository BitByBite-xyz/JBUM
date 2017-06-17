/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Image } from 'react-native';

export default function Background(props) {
  return (
    <Image
      {...props}
      style={{
        flex:1,
        height: 225,
        resizeMode: 'stretch',
      }}
    />
  );
}
