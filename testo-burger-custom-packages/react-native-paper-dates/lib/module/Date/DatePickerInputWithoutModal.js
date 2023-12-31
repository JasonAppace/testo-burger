function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import TextInputWithMask from '../TextInputMask';
import { HelperText, useTheme } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import useDateInput from './inputUtils';
function DatePickerInputWithoutModal(_ref, ref) {
  let {
    label,
    value,
    onChange,
    style,
    locale,
    validRange,
    inputMode,
    withDateFormatInLabel = true,
    hasError,
    hideValidationErrors,
    onValidationError,
    modal,
    inputButtons,
    saveLabel,
    saveLabelDisabled,
    uppercase,
    startYear,
    endYear,
    onChangeText,
    inputEnabled,
    ...rest
  } = _ref;
  const theme = useTheme();
  const {
    formattedValue,
    inputFormat,
    onChangeText: onDateInputChangeText,
    error
  } = useDateInput({
    locale,
    value,
    validRange,
    inputMode,
    onChange,
    onValidationError
  });
  let disabled;
  if (inputEnabled !== undefined) {
    disabled = !inputEnabled;
  }
  if (rest.disabled) {
    disabled = rest.disabled;
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(View, {
    style: styles.root
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.inputContainer
  }, /*#__PURE__*/React.createElement(TextInputWithMask, _extends({}, rest, {
    ref: ref,
    label: getLabel({
      // TODO: support label components?
      label: label,
      inputFormat,
      withDateFormatInLabel
    }),
    value: formattedValue,
    keyboardType: rest.keyboardType ?? 'number-pad',
    mask: inputFormat,
    disabled: disabled,
    onChangeText: onDateInputChangeText,
    onChange: e => onChangeText && onChangeText(e.nativeEvent.text),
    keyboardAppearance: theme.dark ? 'dark' : 'default',
    error: !!error && !hideValidationErrors || !!hasError,
    style: [styles.input, style]
  })), inputButtons), error && !hideValidationErrors ? /*#__PURE__*/React.createElement(HelperText, {
    type: "error",
    visible: !!error
  }, error) : null), modal === null || modal === void 0 ? void 0 : modal({
    value,
    locale,
    inputMode,
    validRange,
    saveLabel,
    saveLabelDisabled,
    uppercase,
    startYear,
    endYear,
    inputEnabled
  }));
}
function getLabel(_ref2) {
  let {
    withDateFormatInLabel,
    inputFormat,
    label
  } = _ref2;
  if (withDateFormatInLabel) {
    return label ? `${label} (${inputFormat})` : inputFormat;
  }
  return label || '';
}
const styles = StyleSheet.create({
  root: {
    flexGrow: 1
  },
  inputContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  input: {
    flexGrow: 1
  }
});
export default /*#__PURE__*/React.forwardRef(DatePickerInputWithoutModal);
//# sourceMappingURL=DatePickerInputWithoutModal.js.map