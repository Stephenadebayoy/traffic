import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import {
  Button,
  View,
  FlatList,
  SafeAreaView,
  Text,
  Platform,
  TouchableOpacity,
  Alert,
  Pressable,
} from 'react-native';

import Light from './component/Light';

export default function App() {
  const [lit, setLit] = useState('#39ff14');
  const [count, setCount] = useState(10);

  const timeout = useRef(null);
  const stop = useRef(null);
  const reset = useRef(null);

  const handleClick = () => {
    timeout.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };
  useEffect(() => {
    if (count === 3) return setLit('#ff0000');
    if (count === 6) return setLit('#ffff00');
    if (count === -1) return setLit('#39ff14');
  });

  if (count === -1) return setCount(10);
  const handleStop = () => {
    clearInterval(timeout.current);
    setCount(10);
    setLit('#39ff14');
  };

  const [colors, setColors] = useState([
    { name: '#8b0000', light: '#ff0000', key: '1' },
    { name: '#8b8000', light: '#ffff00', key: '2' },
    { name: '#006400', light: '#39ff14', key: '3' },
  ]);

  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'gray',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ fontSize: 50, color: '#fff', paddingVertical: 20 }}>
            {count}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <FlatList
            data={colors}
            renderItem={({ item }) => (
              <View>
                <Light
                  backgroundColor={item.name}
                  color={item.name}
                  bright={item.light}
                  lit={lit}
                  setLit={setLit}
                />
              </View>
            )}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleClick}
          style={{
            backgroundColor: '#2c3e50',
            marginHorizontal: 10,
            paddingHorizontal: 20,
            borderRadius: 10,
            paddingVertical: 20,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20 }}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleStop}
          style={{
            backgroundColor: '#2c3e50',
            paddingHorizontal: 20,
            marginHorizontal: 10,
            borderRadius: 10,
            paddingVertical: 20,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20 }}>Stop</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
