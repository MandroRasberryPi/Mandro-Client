import React from 'react';
import { View } from 'react-native';
import Slider from '@react-native-community/slider';

interface SliderProps {
  value: number;
  onValueChange: (value: number) => void;
}

export default function CustomSlider({ value, onValueChange }: SliderProps) {
  return (
    <View className="w-full">
      <Slider
        style={{ width: 217, height: 80 }}
        minimumValue={0}
        maximumValue={1}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor="#60A5FA" 
        maximumTrackTintColor="#F3F3F3" 
        thumbTintColor="#0057C3"       
      />
    </View>
  );
}
