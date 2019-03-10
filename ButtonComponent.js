import React from 'react';
import styled from 'styled-components';
import { Animated } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: #2C3242;
  justify-content: center;
  align-items: center;
`
const ButtonView = styled.TouchableOpacity`
  height: 70;
  width: 230;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: white;
`;

const InnerView = styled.View`
  height: 40;
  width: 200;
  border-width: 1;
  border-color: #FFD700;
  border-radius: 20;
  justify-content: center;
  align-items: center;
`;

const ButtonComponent = ({ buttonAnimation }) => (
  <Container>
    <ButtonView>
        <Animated.View 
          style={{
            borderWidth: buttonAnimation,
            borderRadius: 30,
            borderColor: buttonAnimation.interpolate({
              inputRange: [0, 15],
              outputRange: ['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0)']
            })
          }}>
            <InnerView>
              <Text>BUTTON TEXT</Text>
            </InnerView>
        </Animated.View>
    </ButtonView>
  </Container>
);

export default ButtonComponent;