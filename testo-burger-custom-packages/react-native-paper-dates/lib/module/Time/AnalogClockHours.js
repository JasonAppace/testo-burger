import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { circleSize } from './timeUtils';
import { useTextColorOnPrimary } from '../utils';
function AnalogClockHours(_ref) {
  let {
    is24Hour,
    hours
  } = _ref;
  const outerRange = getHourNumbers(false, circleSize, 12, 12);
  const innerRange = getHourNumbers(true, circleSize, 12, 12);
  const color = useTextColorOnPrimary();
  return /*#__PURE__*/React.createElement(React.Fragment, null, outerRange.map((a, i) => /*#__PURE__*/React.createElement(View, {
    key: i,
    pointerEvents: "none",
    style: [styles.outerHourRoot, {
      top: a[1] || 0,
      left: a[0] || 0
    }]
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.outerHourInner
  }, /*#__PURE__*/React.createElement(Text, {
    maxFontSizeMultiplier: 1.5,
    style: !is24Hour && i + 1 === hours || hours === i + 1 && hours !== 12 || i + 1 === 12 && hours === 0 ? {
      color
    } : null,
    variant: "bodyLarge",
    selectable: false
  }, is24Hour && i + 1 === 12 ? '00' : i + 1)))), is24Hour ? innerRange.map((a, i) => /*#__PURE__*/React.createElement(View, {
    key: i,
    pointerEvents: "none",
    style: [styles.innerHourRoot, {
      top: a[1] || 0,
      left: a[0] || 0
    }]
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.innerHourInner
  }, /*#__PURE__*/React.createElement(Text, {
    maxFontSizeMultiplier: 1.5,
    selectable: false,
    style: [i + 13 === hours || i + 13 === 24 && hours === 12 ? {
      color
    } : null],
    variant: "bodyLarge"
  }, i + 13 === 24 ? '12' : i + 13)))) : null);
}
const styles = StyleSheet.create({
  outerHourRoot: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
    width: 48,
    height: 48,
    marginLeft: -24,
    marginTop: -24,
    borderRadius: 24
  },
  outerHourInner: {
    borderRadius: 24
  },
  innerHourRoot: {
    position: 'absolute',
    zIndex: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    marginLeft: -24,
    marginTop: -24,
    borderRadius: 24
  },
  innerHourInner: {
    borderRadius: 24
  }
});
function getHourNumbers(is24Hour, size, count, arrayLength) {
  let angle = 0;
  let step = 2 * Math.PI / count;
  let radius = size / (is24Hour ? 4 : 2.5);
  angle = -90 * Math.PI / 180 + Math.PI / 6;
  return Array(arrayLength).fill(true).map(() => {
    let x = Math.round(size / 2 + radius * Math.cos(angle));
    let y = Math.round(size / 2 + radius * Math.sin(angle));
    angle += step;
    return [x, y];
  });
}
export default /*#__PURE__*/React.memo(AnalogClockHours);
//# sourceMappingURL=AnalogClockHours.js.map