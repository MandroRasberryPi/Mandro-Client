import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import CustomSlider from '../components/sliderProps';

export default function StartScreen() {
  const [eyeDistance, setEyeDistance] = useState(0.3);
  const [distorted, setDistorted] = useState(0.7);
  const [ip, setIp] = useState('');

  return (
    <View className="flex-1 bg-white flex-row px-6 pt-10">
      <View className="w-[40%] pr-4">
        <Image
          source={require('../assets/logo.png')}
          className="w-44 h-16 mb-6"
          resizeMode="contain"
        />

        <Text className="text-primary font-bold text-xl mb-1">Eye{'\n'}Distance</Text>
        <CustomSlider value={eyeDistance} onValueChange={setEyeDistance} />

        <Text className="text-primary font-bold text-xl mt-6 mb-1">Distored</Text>
        <CustomSlider value={distorted} onValueChange={setDistorted} />

        <Text className="text-primary font-bold text-xl mt-6 mb-2">IP Address</Text>
        <TextInput
          value={ip}
          onChangeText={setIp}
          className="border border-gray-border rounded-md h-10 px-4 text-black"
          placeholder="Enter IP Address"
          placeholderTextColor="#9CA3AF"
        />
      </View>

      <View className="w-[60%] flex-row justify-between">
        <View className="w-[48%] h-96 bg-gray-300 rounded-md justify-center items-center">
          <Text className="text-gray-500">Camera View 1</Text>
        </View>
        <View className="w-[48%] h-96 bg-gray-300 rounded-md justify-center items-center">
          <Text className="text-gray-500">Camera View 2</Text>
        </View>
      </View>
    </View>
  );
}
