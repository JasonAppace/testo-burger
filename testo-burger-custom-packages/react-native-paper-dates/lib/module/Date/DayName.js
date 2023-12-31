import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
function DayName(_ref) {
  let {
    label
  } = _ref;
  const theme = useTheme();
  let textFont = theme !== null && theme !== void 0 && theme.isV3 ? theme.fonts.bodySmall : theme.fonts.medium;
  return /*#__PURE__*/React.createElement(View, {
    style: styles.dayName
  }, /*#__PURE__*/React.createElement(Text, {
    maxFontSizeMultiplier: 1.5,
    style: [styles.dayNameLabel, {
      ...textFont,
      color: theme.colors.onSurface
    }],
    selectable: false
  }, label));
}
const styles = StyleSheet.create({
  dayName: {
    flex: 1,
    alignItems: 'center'
  },
  dayNameLabel: {
    fontSize: 14,
    opacity: 0.7
  }
});
export default /*#__PURE__*/React.memo(DayName);
//# sourceMappingURL=DayName.js.map