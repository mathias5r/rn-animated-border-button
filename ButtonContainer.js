import { compose, withState, lifecycle } from 'recompose';
import ButtonComponent from './ButtonComponent';
import { Animated } from 'react-native';

const startAnimation = buttonAnimation => {
  Animated.loop(
      Animated.timing(buttonAnimation, {
        toValue: 15,
        duration: 600,
      }),
  ).start()
}

export default compose(
  withState('buttonAnimation', 'setButtonAnimation', new Animated.Value(0)),
  lifecycle({
    componentDidMount(){
      const { buttonAnimation } = this.props;
      startAnimation(buttonAnimation);
    }
  })
)(ButtonComponent);