import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import { useState, useEffect } from 'react';

const Light = ({ backgroundColor, lit, setLit, bright }) => {
  useEffect(() => {
    setInterval(() => {
      setLit(lit);
    }, 5000);
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View
            style={{
              backgroundColor: '#2c3e50',
              paddingVertical: 20,
              paddingHorizontal: 25,
              borderRadius: 8,
            }}
          >
            <TouchableOpacity
              onPress={() => setLit(bright)}
              style={{
                backgroundColor: bright === lit ? bright : backgroundColor,
                width: 120,
                height: 120,
                borderRadius: 100,
                shadowColor: bright === lit ? bright : 'white',
                shadowOpacity: 1,
                shadowOffset: { width: 0, height: -5 },
              }}
            ></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Light;
