import React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  Circle,
  ClipPath,
  Rect,
  Mask,
} from 'react-native-svg';
import {Color} from '../../globalStyle/Theme';
export function ReservationSvg({width}) {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V8H2V6Z"
        stroke={Color.light}
        strokeLinejoin="round"
      />
      <Path
        d="M22 10V8H2V20C2 21.1046 2.89543 22 4 22H10"
        stroke={Color.light}
        strokeLinejoin="round"
      />
      <Path d="M12 2V5" stroke={Color.light} strokeLinejoin="round" />
      <Path d="M17 2V5" stroke={Color.light} strokeLinejoin="round" />
      <Path d="M7 2V5" stroke={Color.light} strokeLinejoin="round" />
      <Circle
        cx="16.5"
        cy="16.5"
        r="5.5"
        stroke={Color.light}
        strokeLinejoin="round"
      />
      <Path d="M16.5 14V17H19" stroke={Color.light} strokeLinejoin="round" />
    </Svg>
  );
}
export function VoucherSvg({width}) {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19 5H19.5C19.5 4.72386 19.2761 4.5 19 4.5V5ZM5 5V4.5C4.72386 4.5 4.5 4.72386 4.5 5H5ZM22 8H22.5C22.5 7.72386 22.2761 7.5 22 7.5V8ZM22 16V16.5C22.2761 16.5 22.5 16.2761 22.5 16H22ZM19 19V19.5C19.2761 19.5 19.5 19.2761 19.5 19H19ZM5 19H4.5C4.5 19.2761 4.72386 19.5 5 19.5V19ZM2 16H1.5C1.5 16.2761 1.72386 16.5 2 16.5V16ZM2 8V7.5C1.72386 7.5 1.5 7.72386 1.5 8H2ZM19 4.5H5V5.5H19V4.5ZM22 7.5C20.6193 7.5 19.5 6.38071 19.5 5H18.5C18.5 6.933 20.067 8.5 22 8.5V7.5ZM22.5 16V8H21.5V16H22.5ZM19.5 19C19.5 17.6193 20.6193 16.5 22 16.5V15.5C20.067 15.5 18.5 17.067 18.5 19H19.5ZM5 19.5H19V18.5H5V19.5ZM2 16.5C3.38071 16.5 4.5 17.6193 4.5 19H5.5C5.5 17.067 3.933 15.5 2 15.5V16.5ZM1.5 8V16H2.5V8H1.5ZM4.5 5C4.5 6.38071 3.38071 7.5 2 7.5V8.5C3.933 8.5 5.5 6.933 5.5 5H4.5Z"
        fill={Color.light}
      />
      <Circle
        cx="10"
        cy="9"
        r="1.5"
        stroke={Color.light}
        stroke-linejoin="round"
      />
      <Circle
        cx="14.5"
        cy="14.5"
        r="1.5"
        stroke={Color.light}
        stroke-linejoin="round"
      />
      <Path
        d="M15.5 8.5L8.5 15.5"
        stroke={Color.light}
        stroke-linejoin="round"
      />
    </Svg>
  );
}
export function FavouritesSvg({width}) {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12 21L3.44308 12.6999L3.45555 12.6878C1.41446 10.3819 1.52001 6.90361 3.7722 4.71901C6.02439 2.53441 9.61033 2.43203 11.9875 4.41187L12 4.39977L12.0125 4.41187C14.3897 2.43203 17.9756 2.53441 20.2278 4.71901C22.48 6.90361 22.5855 10.3819 20.5444 12.6878L20.5569 12.6999L12 21Z"
        stroke={Color.light}
        strokeLinejoin="round"
      />
      <Path
        d="M19 9C19 7.34315 17.6569 6 16 6"
        stroke={Color.light}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export function OrderSvg({width}) {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect
        x="5"
        y="2"
        width="15"
        height="20"
        rx="1"
        stroke={Color.light}
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 6L9 7.5L11.5 5"
        stroke={Color.light}
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 11.5L9 13L11.5 10.5"
        stroke={Color.light}
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 17L9 18.5L11.5 16"
        stroke={Color.light}
        strokeLinejoin="round"
      />
      <Path d="M14.5 6H17" stroke={Color.light} strokeLinejoin="round" />
      <Path d="M14.5 12H17" stroke={Color.light} strokeLinejoin="round" />
      <Path d="M14.5 18H17" stroke={Color.light} strokeLinejoin="round" />
    </Svg>
  );
}

export function ProfileSvg({width, height}) {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle
        cx="12"
        cy="9.25"
        r="3.75"
        stroke={Color.light}
        strokeLinejoin="bevel"
      />
      <Path
        d="M19.5 18.5C19.5 17.4289 16.1421 15.25 12 15.25C7.85786 15.25 4.5 17.4289 4.5 18.5"
        stroke={Color.light}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx="12"
        cy="12"
        r="10"
        stroke={Color.light}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export function AddressSvg({width, height, color = 'white'}) {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19 9C19 15 12 22 12 22C12 22 5 15 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9Z"
        stroke={Color.light}
        strokeLinejoin="round"
      />
      <Circle
        cx="12"
        cy="8.5"
        r="3"
        stroke={Color.light}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export function PencilSvg({width, height, color = 'white'}) {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19.9873 4.26316C19.936 4.42162 19.9091 4.59426 19.8274 4.7356C19.6758 4.99725 19.5266 5.27504 19.3163 5.48583C14.8702 9.94614 10.4162 14.3986 5.95787 18.8462C5.83755 18.9665 5.65709 19.0629 5.49032 19.0952C3.95513 19.3925 2.41651 19.6728 0.878881 19.9593C0.843179 19.9662 0.809433 19.9862 0.775198 19.9999C0.657822 19.9999 0.540934 19.9999 0.423558 19.9999C0.0117612 19.7554 -0.0537741 19.6234 0.0347475 19.1382C0.318897 17.58 0.602557 16.0219 0.904313 14.4671C0.937569 14.2969 1.06033 14.1228 1.18748 13.9956C4.83643 10.3369 8.49076 6.68405 12.1446 3.03021C12.9178 2.257 13.6901 1.48329 14.4638 0.711048C15.4111 -0.234812 16.6871 -0.236768 17.6344 0.705668C18.0726 1.14192 18.5 1.58893 18.9485 2.01442C19.4312 2.47219 19.8655 2.95343 19.9878 3.63862C19.9873 3.84647 19.9873 4.05481 19.9873 4.26316ZM13.8441 3.04097C10.0142 6.87136 6.18284 10.7022 2.3813 14.5043C3.41617 15.5391 4.46131 16.5843 5.4908 17.6133C9.30261 13.8039 13.1345 9.97402 16.957 6.1539C15.9207 5.11756 14.8775 4.07438 13.8441 3.04097ZM17.8486 5.3127C18.0589 5.09653 18.2663 4.88183 18.4756 4.66909C18.928 4.20838 18.9295 3.6709 18.4727 3.20824C18.0296 2.75976 17.5826 2.3152 17.1355 1.87063C16.9697 1.70581 16.8088 1.53415 16.6284 1.38645C16.2934 1.11208 15.7999 1.10181 15.4786 1.38743C15.2032 1.63245 14.966 1.92003 14.7186 2.18119C15.7417 3.20579 16.7844 4.248 17.8486 5.3127ZM4.21776 18.1405C3.42644 17.3492 2.64687 16.5696 1.85311 15.7758C1.67557 16.7325 1.49755 17.695 1.31513 18.679C2.30501 18.4956 3.26456 18.3175 4.21776 18.1405Z"
        fill={color}
      />
    </Svg>
  );
}
export function HelpSvg({width, height}) {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12 4.5L14.9605 3.51317C15.9802 3.17328 17.048 3 18.1228 3H21V17H18.1228C17.048 17 15.9802 17.1733 14.9605 17.5132L12 18.5V4.5Z"
        stroke={Color.light}
        strokeLinejoin="round"
      />
      <Path
        d="M12 18V21.5L14.9605 20.5132C15.9802 20.1733 17.048 20 18.1228 20H21V16.5"
        stroke={Color.light}
        strokeLinejoin="round"
      />
      <Path
        d="M12 4.5L9.0395 3.51317C8.01984 3.17328 6.95204 3 5.87722 3H3V17H5.87722C6.95204 17 8.01984 17.1733 9.0395 17.5132L12 18.5V4.5Z"
        stroke={Color.light}
        strokeLinejoin="round"
      />
      <Path
        d="M12 18V21.5L9.0395 20.5132C8.01984 20.1733 6.95204 20 5.87722 20H3V16.5"
        stroke={Color.light}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export function SettingsSvg({width, height}) {
  return (
    <Svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.02606 20.6222C7.93244 20.5905 7.83666 20.5636 7.74519 20.5265C7.15546 20.2876 6.81109 19.8501 6.70293 19.2259C6.64375 18.8832 6.59478 18.5383 6.53452 18.195C6.40107 17.4336 5.66014 16.9956 4.92675 17.2485C4.59152 17.3642 4.2633 17.4987 3.93023 17.6208C3.10966 17.9216 2.33214 17.6461 1.892 16.8918C1.34155 15.9485 0.795399 15.002 0.252481 14.0545C-0.189279 13.2834 -0.0413086 12.4774 0.639895 11.9097C0.907857 11.6864 1.18228 11.4706 1.44486 11.2409C2.04105 10.72 2.04105 9.89946 1.44378 9.38022C1.17044 9.14239 0.88472 8.91908 0.607611 8.6861C-0.0240901 8.15609 -0.182823 7.33607 0.223963 6.61881C0.779257 5.63951 1.34155 4.66452 1.91191 3.69383C2.32623 2.98787 3.10105 2.71292 3.87373 2.98249C4.20841 3.09926 4.53772 3.23162 4.87186 3.35161C5.67467 3.64002 6.40753 3.20418 6.54151 2.36586C6.60178 1.9892 6.65935 1.61094 6.7406 1.23859C6.89826 0.517567 7.54126 0.00424287 8.27788 0.00209057C9.40515 -0.00113788 10.533 -6.17327e-05 11.6602 0.00155249C12.5082 0.00262865 13.162 0.560075 13.2971 1.39409C13.3525 1.73792 13.4052 2.08175 13.4649 2.42505C13.5957 3.17889 14.3248 3.62119 15.0512 3.38013C15.3939 3.26606 15.7281 3.12724 16.0676 3.00294C16.8887 2.70162 17.6678 2.9755 18.1069 3.7288C18.6606 4.67851 19.21 5.62983 19.755 6.58437C20.1887 7.3436 20.0354 8.1491 19.3612 8.71193C19.0932 8.93523 18.8188 9.151 18.5562 9.38075C17.9579 9.90376 17.9568 10.7179 18.5546 11.2409C18.8269 11.4792 19.1131 11.7026 19.3908 11.935C20.023 12.4645 20.1834 13.2829 19.7766 14.0017C19.2223 14.9816 18.659 15.9566 18.0886 16.9273C17.6743 17.6327 16.8995 17.9087 16.1268 17.6397C15.7857 17.5208 15.4499 17.3857 15.1098 17.2641C14.3216 16.9827 13.5887 17.4244 13.4585 18.2547C13.4052 18.5921 13.3579 18.9305 13.289 19.2652C13.1464 19.9588 12.7401 20.4118 12.0423 20.5856C12.018 20.5916 11.9965 20.6099 11.9734 20.6228C10.6578 20.6222 9.3422 20.6222 8.02606 20.6222ZM18.376 13.1952C18.1139 12.9794 17.8616 12.769 17.6065 12.5619C16.1123 11.348 16.1139 9.2726 17.6108 8.05709C17.8653 7.85047 18.1166 7.64062 18.377 7.42592C17.8094 6.44393 17.2476 5.47217 16.6869 4.50202C16.2898 4.64784 15.9223 4.79312 15.5484 4.91741C13.9223 5.45926 12.2177 4.46059 11.8911 2.77749C11.8163 2.39222 11.7544 2.00427 11.6877 1.62224C10.5502 1.62224 9.43259 1.62224 8.31232 1.62224C8.23645 2.05539 8.1848 2.48316 8.08471 2.89855C7.68546 4.55906 5.96147 5.47109 4.35262 4.88459C4.00879 4.75922 3.66603 4.63008 3.31359 4.49933C2.74592 5.48293 2.18686 6.45147 1.62404 7.42592C1.88662 7.64223 2.13898 7.85154 2.39348 8.05924C3.88718 9.27744 3.88503 11.3447 2.38864 12.5651C2.13521 12.7717 1.88339 12.9816 1.62404 13.1957C2.19171 14.1788 2.75346 15.1511 3.31521 16.1228C3.68702 15.9835 4.03031 15.8506 4.37683 15.7257C6.02065 15.1333 7.77424 16.1288 8.10947 17.8452C8.1848 18.2299 8.24614 18.6179 8.31286 18.9978C9.45143 18.9978 10.569 18.9978 11.6914 18.9978C11.7474 18.6626 11.8055 18.3397 11.855 18.0153C11.961 17.3201 12.2521 16.7196 12.7918 16.2638C13.6737 15.5191 14.6632 15.362 15.7431 15.7677C16.0547 15.885 16.3662 16.0007 16.6864 16.1207C17.2546 15.1382 17.8131 14.1702 18.376 13.1952Z"
        fill="white"
      />
      <Path
        d="M9.99333 14.2923C7.80767 14.2891 6.01319 12.486 6.01857 10.2993C6.02395 8.11359 7.82973 6.32072 10.0165 6.32987C12.1951 6.33848 13.9816 8.1335 13.981 10.3127C13.9805 12.4984 12.1795 14.2961 9.99333 14.2923ZM7.64194 10.317C7.64786 11.6159 8.70626 12.6711 10.0009 12.6695C11.2982 12.6679 12.3539 11.6132 12.3576 10.3149C12.3614 9.01272 11.2858 7.94033 9.98849 7.95271C8.68635 7.96508 7.63656 9.02348 7.64194 10.317Z"
        fill="white"
      />
    </Svg>
  );
}
export function LogoutSvg({width, height}) {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M7 12H19" stroke={Color.light} strokeLinejoin="round" />
      <Path
        d="M15.5 8.5L19 12L15.5 15.5"
        stroke={Color.light}
        strokeLinejoin="round"
      />
      <Path
        d="M12 17V20H4V4H12V7"
        stroke={Color.light}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export function LogoutSvgPrimary({width, height}) {
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M7 12H19" stroke={Color.primary} strokeLinejoin="round" />
      <Path
        d="M15.5 8.5L19 12L15.5 15.5"
        stroke={Color.primary}
        strokeLinejoin="round"
      />
      <Path
        d="M12 17V20H4V4H12V7"
        stroke={Color.primary}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
