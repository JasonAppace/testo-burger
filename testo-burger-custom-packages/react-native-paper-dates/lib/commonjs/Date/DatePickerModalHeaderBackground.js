"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DatePickerModalHeaderBackground;
var _reactNative = require("react-native");
var React = _interopRequireWildcard(require("react"));
var _utils = require("../utils");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function DatePickerModalHeaderBackground(_ref) {
  let {
    children
  } = _ref;
  const backgroundColor = (0, _utils.useHeaderBackgroundColor)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  return /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    style: [styles.animated, {
      backgroundColor,
      paddingLeft: insets.left,
      paddingRight: insets.right
    }]
  }, children);
}
const styles = _reactNative.StyleSheet.create({
  animated: {
    elevation: 4
  }
});
//# sourceMappingURL=DatePickerModalHeaderBackground.js.map