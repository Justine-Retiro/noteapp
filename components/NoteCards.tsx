import { View, Text, Alert } from 'react-native'
import React from 'react'
import { LongPressGestureHandler, State, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NoteCards = ({ title, description, onPress, onDelete, id }: { title: string, description: string, onPress: () => void, onDelete: (id: string) => void, id: string }) => {
  
  const handleLongPress = (event: any) => {
    if (event?.nativeEvent?.state === State.ACTIVE) {
      Alert.alert(
        "Delete Note",
        "Are you sure you want to delete this note?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Delete", onPress: () => onDelete(id), style: "destructive" }
        ],
        { cancelable: true }
      );
    }
  };
  
  return (
    <LongPressGestureHandler onHandlerStateChange={handleLongPress} minDurationMs={800}>
    <View className='w-full py-5 px-4 mt-4 rounded-lg bg bg-indigo-300'>
      <TouchableOpacity onPress={onPress} onLongPress={(event) => handleLongPress(event)}>
        <View className='flex-row justify-between items-center'>
          <View>
            <Text className={`font-bold text-lg ${new Date().getHours() >= 18 ? 'text-slate-800' : 'text-white'}`}>{title}</Text>
            <View className='w-2/2'>
              <Text 
                style={{
                  fontWeight: 'normal',
                  fontSize: 14,
                  color: new Date().getHours() >= 18 ? '#1E293B' : '#7C83A4',
                }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {description.length > 30 ? description.substring(0, 30) + '...' : description}
              </Text>
            </View>
          </View>
          <Icon 
            name='chevron-right'
            size={24}
            color={new Date().getHours() >= 18 ? '#1E293B' : '#7C83A4'}
          />
        </View>
        
      </TouchableOpacity>
      </View>
    </LongPressGestureHandler>
  )
}

export default NoteCards;