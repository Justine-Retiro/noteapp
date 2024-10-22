import { Text, Pressable, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ButtonProps {
  text: string;
  onPress?: () => void;
}

export const ButtonMain: React.FC<ButtonProps> = ({ text, onPress, icon } :  {text: string, onPress: () => void, icon: string }) => {
  return (
    <TouchableOpacity className='px-3 py-3 w-auto bg-[#8E97FD] flex flex-row justify-center items-center rounded-2xl ' onPress={onPress}>
      <Icon name={icon} size={24} color="white" />
      {/* <Text className='text-white ml-1 font-semibold text-base'>{text}</Text> */}
    </TouchableOpacity>
  )
}