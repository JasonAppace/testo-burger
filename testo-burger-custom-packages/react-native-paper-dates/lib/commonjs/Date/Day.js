"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EmptyDay = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNativePaper = require("react-native-paper");
var _reactNative = require("react-native");
var _DayRange = _interopRequireDefault(require("./DayRange"));
var _dateUtils = require("./dateUtils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function EmptyDayPure() {
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.empty
  });
}
const EmptyDay = /*#__PURE__*/React.memo(EmptyDayPure);
exports.EmptyDay = EmptyDay;
function Day(props) {
  const {
    day,
    month,
    year,
    selected,
    inRange,
    leftCrop,
    rightCrop,
    onPressDate,
    primaryColor,
    selectColor,
    isToday,
    disabled,
    textColorOnPrimary,
    theme
  } = props;
  const onPress = React.useCallback(() => {
    onPressDate(new Date(year, month, day));
  }, [onPressDate, year, month, day]);
  const borderColor = theme.isV3 ? theme.colors.primary : selected || inRange && theme.dark ? textColorOnPrimary : theme.dark ? '#fff' : '#000';
  const textColor = theme.isV3 && selected ? theme.colors.onPrimary : theme.isV3 && inRange && theme.dark ? theme.colors.onPrimaryContainer : selected || inRange && theme.dark ? textColorOnPrimary : theme.isV3 ? theme.colors.onSurface : undefined;
  let textFont = theme !== null && theme !== void 0 && theme.isV3 ? theme.fonts.bodySmall : theme.fonts.medium;
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.root, disabled && styles.disabled]
  }, /*#__PURE__*/React.createElement(_DayRange.default, {
    inRange: inRange,
    leftCrop: leftCrop,
    rightCrop: rightCrop,
    selectColor: selectColor
  }), /*#__PURE__*/React.createElement(_reactNativePaper.TouchableRipple, {
    testID: `react-native-paper-dates-day-${year}-${month}-${day}`,
    disabled: disabled,
    borderless: true,
    onPress: disabled ? undefined : onPress,
    style: [styles.button, {
      backgroundColor: inRange ? selectColor : undefined
    }],
    accessibilityRole: "button"
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.day, isToday ? {
      borderColor: borderColor
    } : null, selected ? {
      backgroundColor: primaryColor
    } : null]
  }, /*#__PURE__*/React.createElement(_reactNativePaper.Text, {
    maxFontSizeMultiplier: 1.5,
    style: [textColor ? {
      color: theme.isV3 && isToday && selected ? textColor : theme.isV3 && isToday ? theme.colors.primary : textColor
    } : undefined, {
      ...textFont
    }],
    selectable: false
  }, day))));
}
const styles = _reactNative.StyleSheet.create({
  empty: {
    flex: 1,
    flexBasis: 0
  },
  disabled: {
    opacity: 0.3
  },
  root: {
    flexBasis: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  button: {
    width: _dateUtils.daySize,
    height: _dateUtils.daySize,
    overflow: 'hidden',
    borderRadius: _dateUtils.daySize / 2
  },
  day: {
    flexBasis: 0,
    flex: 1,
    borderRadius: _dateUtils.daySize / 2,
    width: _dateUtils.daySize,
    height: _dateUtils.daySize,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent'
  },
  flex1: {
    flex: 1
  }
});
var _default = /*#__PURE__*/React.memo(Day);
exports.default = _default;
//# sourceMappingURL=Day.js.map