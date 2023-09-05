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
import { Color } from '../../globalStyle/Theme';
export function EmptyWishlistSvg({color, width, height}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 320 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M51.2001 32.54C51.3501 29.15 52.5501 25.65 55.0601 23.67C54.2001 22.97 53.0901 22.54 51.8901 22.54C49.1101 22.54 46.8701 24.78 46.8701 27.56C46.8701 30.1 48.7501 32.2 51.2001 32.53V32.54Z"
        fill={Color.secondary}
      />
      <Path
        d="M13.3499 208.09C13.3499 208.09 0.729877 209.08 0.999877 209.08H281.86C282.2 209.32 282.62 209.46 283.06 209.46C283.16 209.46 283.29 209.46 283.41 209.43L285.5 209.07H318.73C319 209.07 319.22 208.85 319.22 208.58C319.22 208.31 319 208.09 318.73 208.09H291.3L299.54 206.69C299.92 206.63 300.25 206.42 300.47 206.12L301.39 204.89C301.47 204.79 301.57 204.72 301.69 204.7L302.91 204.48C303.04 204.46 303.17 204.48 303.27 204.56L304.47 205.41C304.78 205.63 305.17 205.72 305.56 205.66L309.58 204.98C310.57 204.82 311.25 203.23 311.14 202.54C311.08 202.18 308.86 189.05 308.94 189.91L311.27 189.6L303.21 121.98C303.21 121.98 309.55 112.61 305.01 102.12C305.18 102.09 305.31 102.06 305.36 102.05C305.56 102.01 305.72 101.85 305.75 101.65C306.09 99.71 306.9 94.23 307.48 89.15C307.93 89.3 308.35 89.42 308.78 89.52C312.42 90.37 315.39 89.37 316.35 86.98C322.26 72.32 314.05 54.57 305.85 47.38C300.39 42.59 289.32 42.32 288.04 42.31L287.09 38.81C287.09 38.81 287.11 38.8 287.12 38.79C288.63 37.84 292.51 28.41 286.46 27.83C286.46 27.83 283.32 24.05 278.44 25.99C278.4 25.89 280.11 0 256.42 0H142.83C130.65 0 120.81 9.85 120.81 22.02V155.42H93.9499V161.63C93.9499 173.77 103.83 183.65 115.97 183.65C231.34 183.65 210.91 183.65 213.36 183.65C225.41 183.65 235.38 173.92 235.38 161.63V79.48H264.51C264.78 79.61 265.08 79.7 265.39 79.7H267.22C267.02 92.08 267.84 99.54 269.68 101.87C270.2 102.54 271 103.07 272 103.48C270.74 110.32 266.48 133.66 265.63 142.41C264.46 154.57 264.54 193.03 264.54 193.03H266.3V193.89C265.63 194.18 263.39 195.3 261.44 198.1C260.44 198.12 256.77 198.26 253.46 199.14C250.06 200.06 247.69 203.21 247.69 206.81C247.69 207.29 247.86 207.73 248.13 208.09H197.53C197.94 203.22 200.45 198.59 204.34 195.62C204.56 195.45 204.6 195.14 204.43 194.93C204.26 194.71 203.95 194.67 203.74 194.84C199.61 197.99 196.95 202.92 196.54 208.09H190.87C192.21 205.82 193.85 204.57 193.86 204.56C194.03 204.43 194.1 204.21 194.03 204C193.96 203.8 193.76 203.66 193.55 203.67C191.95 203.71 190.49 204.22 189.2 205.16C191.16 202.12 193.32 200.49 193.35 200.47C193.52 200.34 193.59 200.12 193.52 199.91C193.45 199.71 193.24 199.57 193.04 199.58C188.52 199.69 185.45 202.25 183.41 205.15C186.19 198.1 191.3 194.23 191.36 194.19C191.53 194.06 191.6 193.84 191.53 193.63C191.46 193.43 191.26 193.3 191.05 193.3C185.8 193.43 181.44 196.06 178.09 201.12C174.75 196.06 170.39 193.43 165.13 193.3C164.9 193.3 164.72 193.43 164.65 193.63C164.58 193.83 164.65 194.06 164.82 194.19C164.88 194.23 169.99 198.09 172.77 205.15C170.73 202.25 167.66 199.69 163.14 199.58C162.91 199.56 162.73 199.71 162.66 199.91C162.59 200.11 162.66 200.34 162.83 200.47C162.86 200.49 165.02 202.12 166.98 205.16C165.7 204.22 164.23 203.71 162.63 203.67C162.14 203.65 161.95 204.28 162.32 204.56C162.34 204.57 163.96 205.82 165.31 208.09H88.7399C89.0099 207.73 89.1799 207.29 89.1799 206.81C89.1799 203.21 86.8099 200.05 83.3999 199.14C80.0999 198.25 76.4299 198.12 75.4299 198.1C73.4699 195.3 71.2399 194.18 70.5599 193.89V192.33H72.6399C73.9399 184.14 75.4199 163.18 76.6399 158.74C83.3499 134.4 75.6599 105.11 74.7999 102.01C75.0799 101.62 77.8699 84.73 76.6999 74.41C78.8899 78.36 83.2299 84.97 87.7199 84.76C100.08 84.16 109.69 63.27 110.1 62.38C110.19 62.18 110.13 61.94 109.96 61.8C110.16 61.65 110.15 61.54 110.15 61.44C111.91 60.58 114.65 58.93 115.62 56.63C116.11 55.47 116.09 54.28 115.56 53.1C114.13 49.9 112.63 48.57 111.59 48.02L114.32 46.65C117.09 45.22 117.57 43.71 117.09 42.77C116.52 41.65 114.5 41.24 111.75 42.63C109.15 43.95 104.88 45.79 103.43 48.36C102.68 49.68 101.96 52.46 101.53 54.3C101.46 54.37 101.42 54.45 101.4 54.55C101.38 54.68 101.37 54.79 101.35 54.9L101.03 54.65C100.82 54.48 100.52 54.51 100.35 54.71L89.8399 66.92C88.9799 64.44 86.0199 57.15 79.4899 52.1C77.0699 50.23 73.7599 49.02 70.5999 48.23C70.3999 47.6 68.3899 45.69 67.6399 45.3C67.1699 45.05 66.5599 44.8 65.8699 44.55L65.9299 42.28V41.94C67.0799 42.17 69.5199 42.45 70.7299 41.1C71.6399 40.08 71.2399 35.56 69.5499 27.69C69.5799 27.63 69.6199 27.56 69.6399 27.5C70.2299 25.81 66.9899 21.4 58.3399 23.2C50.1599 24.89 50.6699 39.93 56.1599 41.93C56.1599 41.93 56.1599 41.93 56.1599 41.94V43.64C55.9799 43.72 55.8099 43.81 55.6499 43.92C55.0999 44.31 54.1699 45.97 54.1099 46.81C51.0499 46.9 47.6099 47.14 45.2999 47.73C36.9699 49.86 21.9499 62.57 23.2699 74.37C24.3399 83.89 41.4499 87.24 43.7099 87.64C44.8899 102.88 44.6999 101.91 44.9999 102.12C42.9899 104.14 34.5999 114.09 41.6499 133.04C41.6499 133.04 38.5599 178.61 38.5399 192.33H42.6699C42.6699 195.86 42.6699 206.6 42.6699 206.77C42.6699 207.4 43.0199 207.66 43.2799 208.09H15.1399M281.46 193.03L286.01 161.95L277.53 116.75C277.32 115.69 277.26 114.61 277.33 113.53L277.91 105C278.08 104.98 278.24 104.87 278.31 104.7C278.51 104.71 278.71 104.72 278.92 104.73L278.32 113.6C278.25 114.6 278.32 115.6 278.5 116.57C278.95 118.95 275.58 101.03 292.67 192.11L297.12 191.51L297.18 191.85C296.56 192.25 294.54 193.71 293.08 196.81C292.09 197 288.51 197.75 285.4 199.17C282.19 200.64 280.38 204.15 280.99 207.69C281.01 207.82 281.05 207.95 281.09 208.08H277.68C277.86 207.77 278.27 207.41 278.27 206.75C278.26 200.15 278.29 194.08 278.22 193.02H281.46V193.03ZM309.91 201.16L281.9 205.91C282.05 203.4 283.51 201.13 285.82 200.07C289.27 198.49 293.48 197.74 293.52 197.73C293.68 197.7 293.82 197.6 293.88 197.45C295.03 194.89 296.63 193.47 297.41 192.9C297.41 192.9 297.41 192.9 297.42 192.91C297.54 193.08 298 193.24 303.34 195.82C303.47 195.88 303.63 195.88 303.76 195.82C303.86 195.77 308.94 193.38 308.62 193.53L309.92 201.16H309.91ZM308.39 192.55C308.29 192.6 303.24 194.98 303.55 194.83L298.26 192.29C298.24 192.19 298.09 191.28 298.1 191.38L307.96 190.05L308.38 192.55H308.39ZM268.28 207.44C268.37 207.36 268.49 207.31 268.61 207.31H269.87C269.99 207.31 270.11 207.36 270.2 207.45L270.84 208.09H267.61L268.28 207.44ZM309.04 57.73C309.04 58 309.27 58.21 309.53 58.21C309.53 58.21 309.54 58.21 309.55 58.21C309.82 58.21 310.04 57.97 310.03 57.7C309.97 55.7 309.51 53.73 308.73 51.9C315.26 60.2 320.32 74.5 315.44 86.61C314.67 88.52 312.15 89.29 309.01 88.56C308.45 88.43 307.88 88.25 307.26 88.02C307.16 87.98 290.07 78.69 283.25 73.69C283.65 72.79 287.07 65.2 287.02 65.31L301.6 72.01L304.38 74.82C304.57 75.01 304.88 75.02 305.08 74.82C305.27 74.63 305.28 74.32 305.08 74.12L302.31 71.32L300.63 66.88C300.53 66.63 300.25 66.5 299.99 66.59C299.73 66.69 299.61 66.97 299.7 67.23L300.99 70.64L286.97 64.2C286.72 64.09 286.43 64.2 286.31 64.45L286.13 64.85C284.76 63.63 282.25 61.45 280.6 60.67L280.19 55.7C280.11 54.68 279.24 53.88 278.21 53.88H263.58C262.41 53.88 261.5 54.87 261.6 56.03L262.72 69.55C257.34 73.45 249.44 77.69 241.85 76.19C235.23 74.88 235.52 50.12 235.38 45.21C237.04 44.9 243.76 43.66 245.15 43.4L248.08 59.28L245.96 63.49C245.84 63.73 245.93 64.03 246.18 64.15C246.43 64.27 246.72 64.17 246.84 63.93L248.98 59.68C250.02 58.99 259.02 53.04 266.16 49.09C265.51 49.8 264.95 50.59 264.65 51.41C264.56 51.67 264.69 51.95 264.95 52.04C265.2 52.13 265.49 52 265.58 51.74C266.38 49.51 269.85 46.94 272.64 45.96C274.13 45.44 276.98 44.9 279.83 44.45L280.07 46.86C280.1 47.21 280.49 47.42 280.8 47.24L287.8 43.33C287.91 43.32 287.98 43.31 287.98 43.31C299.31 43.36 308.66 46.37 309.03 57.75L309.04 57.73ZM272.93 72.97C272.42 72.49 273.82 70.94 274.29 70.42C274.62 70.06 274.75 69.91 274.81 69.73C275 69.12 274.24 68.8 273.97 69.26C273.56 69.64 270.85 71.08 270.07 71.17C270.02 71 270.08 70.79 270.2 70.57C270.65 69.71 272.11 68.58 272.69 68.14C273.18 67.77 273.32 67.66 273.41 67.49C273.59 67.13 273.21 66.67 272.77 66.81C269.57 67.83 267.4 66.58 274.12 64.43C274.73 64.23 274.45 63.33 273.85 63.47C271.68 63.98 270.46 63.47 271.13 62.83C272.41 61.62 277.92 60.85 279.8 61.39C281.05 61.77 283.62 63.94 284.61 64.8L281.62 72.96C281.44 73.01 281.27 73.04 281.1 73.05C279.61 73.18 278.12 72.07 277.37 70.95C277.2 70.7 276.84 70.66 276.62 70.87C275.81 71.63 274.86 72.33 274.11 72.72C273.56 73.01 273.11 73.14 272.93 72.97ZM276.54 37.87C276.21 35.81 276.25 33.52 276.47 31.45C276.72 31.45 276.98 31.42 277.3 31.35C277.3 31.35 280.05 29.5 280.74 30.46C281.43 31.42 280.24 31.83 281.23 31.97C282.21 32.1 282.08 33.72 282.08 33.72L281.95 36.25L282.83 35.87C282.83 35.87 283.66 32.77 284.92 33.33C286.18 33.89 285.51 38.05 285.51 38.05C285.51 38.05 285.57 38.89 286.13 39.05L287.04 42.42C285.86 42.57 283.66 42.85 281.26 43.21C282.47 41.29 283.23 40.07 283.28 40.01C283.42 39.77 283.35 39.48 283.11 39.33C282.88 39.19 282.58 39.26 282.44 39.49C282.34 39.53 277.5 44 276.53 37.88L276.54 37.87ZM285.18 43.65L280.98 45.99L280.81 44.27C282.4 44.03 283.93 43.81 285.17 43.65H285.18ZM279.61 42.07L279.74 43.44C279.31 43.51 278.88 43.58 278.45 43.65V41.87C278.9 42.01 279.31 42.06 279.61 42.07ZM244.06 41.53H235.38V32.07C235.66 32.37 236.77 33.57 237.67 34.54C236.69 37.15 237.26 39.27 239.81 40.31C240.42 40.56 240.79 39.64 240.19 39.39C238 38.5 237.82 36.79 238.71 34.62C238.78 34.44 238.75 34.24 238.62 34.1C237.3 32.67 235.55 30.78 234.8 29.99C233.99 29.14 233.8 27.53 235.33 27.19C237.79 26.64 241.02 30.65 242.56 32.67C242.95 33.19 243.74 32.59 243.35 32.07C241.56 29.71 238.34 25.78 235.41 26.17V25.44C237.98 25.3 242.1 25.86 243.97 30.31C244.88 32.47 244.38 38.72 244.09 41.54L244.06 41.53ZM277.45 26.45C276.97 26.71 276.48 27.01 275.98 27.39C275.19 27.98 274.7 28.9 274.72 29.88C274.74 30.45 274.93 30.99 275.48 31.27C275.15 34.35 274.87 39.66 277.45 41.4V43.82C275.03 44.25 273.35 44.64 272.31 45C266.38 47.08 252.15 56.37 248.95 58.49L246.03 42.71C245.98 42.45 245.72 42.26 245.45 42.31L244.95 42.4C245.21 40.08 245.94 32.55 244.84 29.92C242.75 24.95 238.21 24.31 235.37 24.44V22.01C235.37 10.48 244.7 0.98 256.41 0.98C279.42 0.98 277.4 26.35 277.44 26.45H277.45ZM234.39 161.63C234.39 173.37 224.87 182.66 213.36 182.66C213.26 182.61 192.33 181.69 192.33 161.62V155.41H121.8V22.02C121.8 10.38 131.21 0.99 142.83 0.99H249.85C240.96 3.75 234.39 12.07 234.39 22.02V26.47C232.72 27.29 232.92 29.49 234.06 30.67L234.39 31.02C234.39 56.62 234.35 43.17 234.39 78.99V161.63ZM235.38 78.49V64.24C235.98 68.37 237.48 76.14 241.53 77.1C248.54 78.78 256.81 74.93 262.81 70.68L263.4 77.87C263.42 78.09 263.51 78.39 263.55 78.49H235.37H235.38ZM264.4 77.79C261.95 48.2 263.75 69.99 262.59 55.93C262.54 55.35 263 54.85 263.59 54.85H278.22C278.74 54.85 279.17 55.25 279.21 55.76L279.59 60.33C277.13 59.91 271.9 60.74 270.45 62.11C269.52 62.99 270.03 64.16 271.04 64.52C269.25 65.35 268.96 65.92 268.84 66.15C268.43 66.96 269.06 68.27 271.05 68.16C268.08 70.65 269.05 72.19 270.02 72.15C270.48 72.14 271.39 71.78 272.29 71.34C271.9 71.98 271.67 72.66 271.94 73.24C272.39 74.26 273.45 74.14 274.46 73.65C275.37 73.21 276.3 72.48 276.89 71.95C277.83 73.09 279.24 73.99 280.71 74.04L281.01 77.61C281.06 78.21 280.59 78.7 280.02 78.7H265.39C264.93 78.7 264.43 78.31 264.39 77.78L264.4 77.79ZM270.47 101.26C268.83 99.17 268.03 91.52 268.23 79.7H280.04C281.19 79.7 282.12 78.7 282.01 77.54L281.71 73.97C281.85 73.94 282 73.9 282.15 73.85C282.15 74 282.22 74.14 282.34 74.23C282.38 74.26 283.32 74.96 284.86 76.05C288.97 83.25 296.28 89.19 305.87 94.2C305.58 96.38 305.18 99.1 304.85 101.15C302.34 101.64 286.37 104.63 276.91 103.63C272.97 101.99 274.43 100.67 274.41 90.46C274.41 90.19 274.2 89.96 273.93 89.95H273.92C273.65 89.95 273.43 90.16 273.43 90.43C273.17 100.4 273.06 100.71 273.43 101.74C273.65 102.36 274.04 102.84 274.44 103.23C272.63 102.83 271.23 102.19 270.49 101.25L270.47 101.26ZM277.25 193.03V196.45L272.1 197.89C272 197.82 266.99 194.27 267.31 194.5C267.31 194.4 267.31 192.93 267.31 193.03H277.26H277.25ZM253.73 200.09C257.4 199.11 261.68 199.08 261.72 199.08C261.88 199.08 262.04 199 262.13 198.86C263.7 196.52 265.52 195.39 266.37 194.95C266.41 195.03 266.46 195.1 266.53 195.15C266.63 195.22 272.06 199.06 271.72 198.82C271.84 198.9 272.04 198.92 272.14 198.89L277.3 197.45V205.18H248.9C249.47 202.74 251.29 200.74 253.73 200.08V200.09ZM192.08 204.86C191.4 205.57 190.54 206.61 189.79 207.98H187.85C189.02 206.32 190.44 205.28 192.08 204.86ZM191.59 200.71C190.26 201.99 188.09 204.43 186.62 207.98H182.87C184.48 204.86 187.21 201.44 191.59 200.71ZM166.62 194.4C171.08 194.97 174.8 197.62 177.69 202.3C177.88 202.61 178.34 202.61 178.53 202.3C181.43 197.62 185.15 194.97 189.6 194.4C187.51 196.31 183.26 200.91 181.47 207.98H174.74C172.95 200.91 168.7 196.31 166.61 194.4H166.62ZM164.63 200.71C169 201.44 171.73 204.86 173.35 207.98H169.6C168.13 204.43 165.97 201.99 164.63 200.71ZM168.37 207.98H166.43C165.68 206.61 164.82 205.57 164.14 204.86C165.78 205.28 167.2 206.32 168.37 207.98ZM61.8799 102.21C59.7099 104.45 51.6799 114.39 58.6199 133.04C58.6199 133.04 55.5399 178.61 55.5199 192.33H58.6299C58.6299 192.48 58.6299 197.12 58.6299 196.87C56.9499 194.95 55.2899 194.13 54.7299 193.89C54.7999 192.38 53.8599 189.44 57.6299 133.18C51.1399 115.53 57.6399 105.53 60.5399 102.21H61.8899H61.8799ZM50.8199 207.44C50.8999 207.36 51.0199 207.31 51.1499 207.31H52.4099C52.5399 207.31 52.6499 207.36 52.7399 207.44L53.4099 208.09H50.1799L50.8299 207.44H50.8199ZM43.7199 194.77H54.2499C54.6599 194.94 56.7599 195.89 58.6099 198.45V205.2H43.7199V194.77ZM74.7899 198.86C74.8799 199 75.0299 199.08 75.1999 199.08C75.2399 199.08 79.5199 199.11 83.1799 200.09C85.6299 200.75 87.4399 202.74 88.0199 205.19H59.6099V194.76H70.1299C70.5599 194.94 72.8699 195.99 74.7899 198.86ZM69.6099 193.77H59.6099V192.32H69.6099V193.77ZM71.7899 115.46C71.7899 121.61 62.4799 121.62 62.4799 115.46V109.55C62.4799 109.27 62.7099 109.06 62.9699 109.06H71.2899C71.5599 109.06 71.7799 109.28 71.7799 109.55V115.46H71.7899ZM104.34 48.83C105.64 46.53 109.86 44.71 112.25 43.5C114.4 42.41 115.96 42.63 116.26 43.21C116.48 43.64 116.04 44.67 113.92 45.76L110.11 47.67C109.89 47.76 108.19 48.56 107.98 50.71C107.95 50.98 108.15 51.22 108.42 51.25C108.44 51.25 108.45 51.25 108.47 51.25C108.72 51.25 108.94 51.06 108.96 50.8C109.1 49.39 110.11 48.77 110.42 48.61C110.82 48.66 112.75 49.14 114.7 53.49C115.12 54.42 115.13 55.32 114.75 56.23C113.88 58.3 111.18 59.85 109.57 60.62L102.54 54.48C102.96 52.69 103.65 50.04 104.34 48.83ZM58.3599 24.43C60.7099 23.57 63.3299 23.54 65.6999 24.34C65.7499 24.36 65.7799 24.41 65.7599 24.47C65.7599 24.52 65.6899 24.55 65.6399 24.53C63.2999 23.74 60.7399 23.77 58.4299 24.62H58.3899C58.3899 24.62 58.3099 24.6 58.2999 24.56C58.2799 24.5 58.2999 24.45 58.3599 24.43ZM58.0799 31.71C58.4999 31.36 59.0799 31.35 59.4799 31.36C59.5799 31.36 59.6799 31.38 59.7799 31.38C60.1499 31.41 60.5099 31.43 60.8599 31.34C61.2699 31.24 61.6799 30.91 61.6799 30.48C61.6799 30.43 61.7299 30.38 61.7799 30.38C61.8499 30.38 61.8799 30.43 61.8799 30.48C61.8799 31.01 61.3899 31.41 60.9099 31.53C60.5299 31.63 60.1499 31.61 59.7699 31.58C59.6699 31.58 59.5699 31.58 59.4699 31.56C59.0999 31.56 58.5699 31.56 58.1999 31.86C57.8599 32.14 57.7399 32.62 57.8699 33.03C57.8899 33.09 57.8699 33.14 57.8099 33.16C57.8099 33.16 57.7899 33.16 57.7799 33.16C57.7399 33.16 57.6999 33.13 57.6899 33.09C57.5099 32.62 57.6699 32.03 58.0799 31.71ZM54.3799 38.51C53.8099 37.21 53.5299 35.77 53.5899 34.35C53.5899 34.29 53.6399 34.25 53.6899 34.25C53.6899 34.25 53.7799 34.3 53.7799 34.36C53.7199 35.74 53.9899 37.16 54.5599 38.43C54.8699 39.13 55.2099 39.64 55.6199 40.01C56.1199 40.46 56.7499 40.7 57.3299 40.65C57.3299 40.65 57.4199 40.69 57.4299 40.75C57.4299 40.8 57.3899 40.85 57.3299 40.85C57.2799 40.85 57.2299 40.85 57.1799 40.85C56.5899 40.85 55.9699 40.59 55.4799 40.14C55.0499 39.75 54.6899 39.23 54.3599 38.5L54.3799 38.51ZM57.2099 42.12C61.0899 42.39 61.3899 38.14 60.5699 36.78C60.0099 35.85 57.6499 33.34 59.4699 32.55C61.2999 31.76 61.3299 34.01 62.0399 33.88C62.6299 33.78 62.0399 31.51 62.0399 31.51C62.0399 31.51 65.3999 32.91 64.9099 30.07C64.9099 30.07 67.3599 29.54 68.7799 28.53C68.8699 28.96 68.9599 29.39 69.0399 29.8C68.4299 29.82 67.4599 30.11 66.5199 31.42C66.3599 31.64 66.4099 31.95 66.6299 32.11C66.7199 32.17 66.8199 32.2 66.9199 32.2C67.0699 32.2 67.2199 32.13 67.3199 31.99C68.1799 30.8 68.9399 30.75 69.2299 30.79C69.6399 32.95 69.9199 34.74 70.0899 36.17C69.3099 36.48 68.4299 36.28 68.4199 36.28C68.1499 36.22 67.8899 36.39 67.8299 36.65C67.7699 36.91 67.9299 37.18 68.1999 37.24C68.2299 37.24 68.5899 37.33 69.0899 37.33C69.4199 37.33 69.8099 37.27 70.1999 37.16C70.3699 39.06 70.2999 40.14 70.0499 40.42C69.0799 41.51 66.5499 41.08 65.6499 40.83C65.6199 40.83 65.5999 40.83 65.5699 40.83C65.5399 40.83 65.4999 40.81 65.4699 40.81C65.4699 40.81 64.0799 40.93 63.4299 39.73C63.3099 39.5 63.0399 39.41 62.8099 39.5C62.5799 39.59 62.4499 39.85 62.5199 40.09C62.5499 40.21 63.3099 42.87 64.9499 43.89V44.19C62.4699 43.43 59.3299 42.89 57.2099 43.31V42.1V42.12ZM43.1299 67.01V63.11C43.1299 62.84 42.9099 62.62 42.6399 62.62C42.3699 62.62 42.1499 62.84 42.1499 63.11V66.84L38.1799 71.35L34.6399 72.81C34.3899 72.91 34.2699 73.2 34.3699 73.46C34.4499 73.65 34.6299 73.77 34.8299 73.77C34.8899 73.77 34.9599 73.76 35.0199 73.73L38.4599 72.31L42.7099 74.29L43.5499 86.57C40.2899 85.93 25.2599 82.52 24.3299 74.24C23.4899 66.77 29.5499 58.9 36.0699 53.83C35.3199 55.04 34.7099 56.53 34.7399 58.22C34.7399 58.49 34.9599 58.71 35.2299 58.71C35.4999 58.71 35.7199 58.48 35.7199 58.21C35.6699 54.91 38.5499 50.48 45.6099 48.67C50.4199 47.44 60.7299 47.78 60.8399 47.78C60.9699 47.78 69.2799 48.12 75.4899 50.86C75.9499 51.22 79.2699 53.97 79.2199 57.56C79.2199 57.83 79.4299 58.06 79.7099 58.06C79.9799 58.06 80.1999 57.84 80.1999 57.57C80.2299 55.51 79.3299 53.75 78.3599 52.44C78.5499 52.57 78.7399 52.71 78.9199 52.85C86.1299 58.42 88.9099 67.08 89.1699 67.93L88.7699 71.71C88.7399 71.98 88.9399 72.22 89.2099 72.25C89.2299 72.25 89.2499 72.25 89.2599 72.25C89.5099 72.25 89.7199 72.06 89.7499 71.81L90.1399 68.08L100.81 55.68L101.18 55.97C101.14 56.18 101.14 56.37 101.34 56.53C108.28 61.86 108.01 62.31 108.75 62.03L109.06 62.28C107.74 65.03 98.6199 83.2 87.6999 83.73C82.0899 84 76.2199 71.23 76.1599 71.1L74.2599 66.8C74.1499 66.55 73.8599 66.44 73.6099 66.55C73.3599 66.66 73.2499 66.95 73.3599 67.2L75.2399 71.46C76.3899 76.44 76.0799 83.86 75.4799 90.08C74.8099 87.95 73.8099 86.52 73.7399 86.43C73.5799 86.21 73.2699 86.16 73.0499 86.32C72.8299 86.48 72.7799 86.79 72.9399 87.01C73.8799 88.33 75.0899 91.25 75.0699 93.81C74.6399 97.4 74.1799 100.18 73.9999 101.18H45.7799C45.5499 98.06 44.1699 79.72 43.0899 66.97L43.1299 67.01ZM42.2399 68.23C42.3699 69.82 42.5099 71.48 42.6499 73.18L39.2799 71.61L42.2499 68.24L42.2399 68.23ZM41.7399 109.55C41.7399 109.27 41.9699 109.06 42.2299 109.06H50.5499C50.8199 109.06 51.0399 109.28 51.0399 109.55V115.46C51.0399 121.62 41.7299 121.62 41.7299 115.46V109.55H41.7399ZM53.7199 192.32V193.77H43.7199V192.32H53.7199Z"
        fill={Color.secondary}
      />
      <Path
        d="M149.22 53.13C142.76 53.13 137.51 58.37 137.51 64.83C137.51 71.29 142.76 76.53 149.22 76.53C155.68 76.53 160.92 71.29 160.92 64.83C160.92 58.37 155.68 53.13 149.22 53.13ZM154.6 63.54L147.01 68.88C146.77 69.04 146.45 68.98 146.31 68.73L144.07 65.09C143.73 64.53 144.58 64.01 144.91 64.58L146.88 67.77L154.04 62.73C154.58 62.35 155.14 63.16 154.61 63.54H154.6Z"
        fill={Color.secondary}
      />
      <Path
        d="M221.46 59.51H167.39C167.12 59.51 166.9 59.73 166.9 60C166.9 60.27 167.12 60.49 167.39 60.49H221.46C221.73 60.49 221.95 60.27 221.95 60C221.95 59.73 221.73 59.51 221.46 59.51Z"
        fill={Color.secondary}
      />
      <Path
        d="M221.46 64.66H167.39C167.12 64.66 166.9 64.88 166.9 65.15C166.9 65.42 167.12 65.64 167.39 65.64H221.46C221.73 65.64 221.95 65.42 221.95 65.15C221.95 64.88 221.73 64.66 221.46 64.66Z"
        fill={Color.secondary}
      />
      <Path
        d="M167.39 70.7901H193.95C194.22 70.7901 194.44 70.5701 194.44 70.3001C194.44 70.0301 194.22 69.8101 193.95 69.8101H167.39C167.12 69.8101 166.9 70.0301 166.9 70.3001C166.9 70.5701 167.12 70.7901 167.39 70.7901Z"
        fill={Color.secondary}
      />
      <Path
        d="M149.22 88.3199C142.76 88.3199 137.51 93.5599 137.51 100.02C137.51 106.48 142.76 111.72 149.22 111.72C155.68 111.72 160.92 106.48 160.92 100.02C160.92 93.5599 155.68 88.3199 149.22 88.3199ZM154.6 98.7199L147.01 104.07C146.77 104.23 146.45 104.17 146.31 103.92L144.07 100.28C143.73 99.7099 144.59 99.2099 144.91 99.7699L146.88 102.95L154.04 97.9199C154.59 97.5399 155.14 98.3599 154.61 98.7199H154.6Z"
        fill={Color.secondary}
      />
      <Path
        d="M221.46 94.7H167.39C167.12 94.7 166.9 94.92 166.9 95.19C166.9 95.46 167.12 95.68 167.39 95.68H221.46C221.73 95.68 221.95 95.46 221.95 95.19C221.95 94.92 221.73 94.7 221.46 94.7Z"
        fill={Color.secondary}
      />
      <Path
        d="M221.46 99.84H167.39C167.12 99.84 166.9 100.06 166.9 100.33C166.9 100.6 167.12 100.82 167.39 100.82H221.46C221.73 100.82 221.95 100.6 221.95 100.33C221.95 100.06 221.73 99.84 221.46 99.84Z"
        fill={Color.secondary}
      />
      <Path
        d="M167.39 105.97H193.95C194.22 105.97 194.44 105.75 194.44 105.48C194.44 105.21 194.22 104.99 193.95 104.99H167.39C167.12 104.99 166.9 105.21 166.9 105.48C166.9 105.75 167.12 105.97 167.39 105.97Z"
        fill={Color.secondary}
      />
      <Path
        d="M149.22 123.49C142.76 123.49 137.51 128.73 137.51 135.19C137.51 141.65 142.76 146.9 149.22 146.9C155.68 146.9 160.92 141.65 160.92 135.19C160.92 128.73 155.68 123.49 149.22 123.49ZM154.6 133.9L147.01 139.24C146.72 139.43 146.44 139.31 146.31 139.1L144.07 135.46C143.74 134.89 144.58 134.39 144.91 134.94L146.88 138.13L154.04 133.09C154.57 132.72 155.15 133.51 154.61 133.9H154.6Z"
        fill={Color.secondary}
      />
      <Path
        d="M221.46 129.88H167.39C167.12 129.88 166.9 130.1 166.9 130.37C166.9 130.64 167.12 130.86 167.39 130.86H221.46C221.73 130.86 221.95 130.64 221.95 130.37C221.95 130.1 221.73 129.88 221.46 129.88Z"
        fill={Color.secondary}
      />
      <Path
        d="M221.46 135.02H167.39C167.12 135.02 166.9 135.24 166.9 135.51C166.9 135.78 167.12 136 167.39 136H221.46C221.73 136 221.95 135.78 221.95 135.51C221.95 135.24 221.73 135.02 221.46 135.02Z"
        fill={Color.secondary}
      />
      <Path
        d="M193.95 140.17H167.39C167.12 140.17 166.9 140.39 166.9 140.66C166.9 140.93 167.12 141.15 167.39 141.15H193.95C194.22 141.15 194.44 140.93 194.44 140.66C194.44 140.39 194.22 140.17 193.95 140.17Z"
        fill={Color.secondary}
      />
      <Path
        d="M146.55 38.04H216.23C217.73 38.04 218.95 36.82 218.95 35.32V15.07C218.95 13.57 217.73 12.34 216.23 12.34H146.55C145.06 12.34 143.83 13.57 143.83 15.07V35.32C143.83 36.82 145.06 38.04 146.55 38.04ZM207.55 20.31H213.79C214.1 20.31 214.33 20.55 214.33 20.85C214.33 21.13 214.11 21.37 213.79 21.37H211.25V28.55C211.25 28.86 211.02 29.11 210.67 29.11C210.32 29.11 210.11 28.84 210.11 28.55V21.37H207.56C207.24 21.37 207.04 21.14 207.04 20.85C207.04 20.53 207.27 20.31 207.56 20.31H207.55ZM203.5 25.3C201.89 24.87 200.33 24.45 200.33 22.75C200.33 21.41 201.4 20.18 203.58 20.18C204.5 20.18 205.33 20.32 206.07 20.6C206.31 20.69 206.43 20.86 206.43 21.1C206.43 21.42 206.15 21.73 205.73 21.57C205.08 21.34 204.41 21.23 203.71 21.23C202.65 21.23 201.48 21.6 201.48 22.65C201.48 23.7 202.69 23.93 203.72 24.15C205.44 24.56 206.78 25.01 206.78 26.72C206.78 28.34 205.25 29.17 203.58 29.17C202.51 29.17 201.52 28.96 200.6 28.57C200.37 28.45 200.25 28.26 200.25 28.06C200.25 27.62 200.67 27.42 201 27.59C201.76 27.93 202.59 28.1 203.46 28.1C204.92 28.1 205.65 27.62 205.65 26.66C205.65 25.78 204.46 25.54 203.5 25.3ZM197.25 20.82C197.25 20.5 197.47 20.25 197.81 20.25C198.15 20.25 198.38 20.52 198.38 20.82V28.55C198.38 28.86 198.15 29.11 197.81 29.11C197.47 29.11 197.25 28.88 197.25 28.55V20.82ZM190.03 20.82C190.03 20.53 190.25 20.25 190.59 20.25C190.93 20.25 191.17 20.52 191.17 20.82V27.92H195.26C195.61 27.92 195.84 28.2 195.84 28.49C195.84 28.8 195.56 29.05 195.26 29.05H190.81C190.38 29.05 190.02 28.69 190.02 28.26V20.82H190.03ZM177.32 20.82C177.32 20.5 177.54 20.25 177.88 20.25C178.22 20.25 178.45 20.53 178.45 20.82V24.15H183.19V20.82C183.19 20.53 183.41 20.25 183.76 20.25C184.11 20.25 184.33 20.52 184.33 20.82V28.55C184.33 28.86 184.1 29.11 183.76 29.11C183.42 29.11 183.19 28.84 183.19 28.55V25.22H178.45V28.55C178.45 28.85 178.23 29.11 177.88 29.11C177.55 29.11 177.32 28.88 177.32 28.55V20.82ZM172.28 25.3C170.65 24.88 169.11 24.44 169.11 22.75C169.11 21.42 170.16 20.18 172.36 20.18C173.28 20.18 174.11 20.32 174.85 20.6C175.09 20.69 175.2 20.86 175.2 21.1C175.2 21.4 174.96 21.73 174.5 21.57C173.85 21.34 173.18 21.23 172.48 21.23C171.42 21.23 170.26 21.6 170.26 22.65C170.26 23.7 171.43 23.93 172.5 24.15C174.17 24.55 175.56 25 175.56 26.72C175.56 28.34 174.02 29.17 172.36 29.17C171.29 29.17 170.3 28.96 169.38 28.57C169.17 28.46 169.02 28.29 169.02 28.06C169.02 27.64 169.46 27.41 169.77 27.59C170.54 27.93 171.36 28.1 172.24 28.1C173.7 28.1 174.43 27.62 174.43 26.66C174.43 25.77 173.15 25.52 172.28 25.3ZM166.02 20.82C166.02 20.54 166.24 20.25 166.58 20.25C166.92 20.25 167.16 20.52 167.16 20.82V28.55C167.16 28.86 166.92 29.11 166.58 29.11C166.24 29.11 166.02 28.84 166.02 28.55V20.82ZM153.04 20.25C153.32 20.25 153.52 20.44 153.6 20.69L155.71 27.61L157.83 20.72C157.9 20.47 158.15 20.25 158.48 20.25C158.81 20.25 159.06 20.46 159.13 20.72L161.24 27.61L163.35 20.69C163.43 20.44 163.63 20.25 163.91 20.25C164.26 20.25 164.48 20.49 164.46 20.79C164.46 20.97 164.54 20.6 161.97 28.55C161.84 28.9 161.6 29.11 161.23 29.11C160.89 29.11 160.58 28.87 160.49 28.55L158.47 22.17L156.45 28.55C156.36 28.86 156.08 29.11 155.71 29.11C155.34 29.11 155.1 28.89 154.97 28.55L152.52 21.01C152.37 20.57 152.64 20.25 153.03 20.25H153.04Z"
        fill={Color.secondary}
      />
      <Path
        d="M50.06 115.47V112.85H42.73V115.47C42.73 120.31 50.06 120.32 50.06 115.47Z"
        fill={Color.secondary}
      />
      <Path d="M50.06 110.05H42.73V111.86H50.06V110.05Z" fill={Color.secondary} />
      <Path d="M70.79 110.05H63.46V111.86H70.79V110.05Z" fill={Color.secondary} />
      <Path
        d="M63.46 115.47C63.46 120.32 70.79 120.32 70.79 115.47V112.85H63.46V115.47Z"
        fill={Color.secondary}
      />
      <Path
        d="M68.6002 33.5601C68.9502 33.5601 69.2302 33.28 69.2302 32.93C69.2302 32.58 68.9502 32.3 68.6002 32.3C68.2502 32.3 67.9702 32.58 67.9702 32.93C67.9702 33.28 68.2502 33.5601 68.6002 33.5601Z"
        fill={Color.secondary}
      />
      <Path
        d="M71.9899 70.61C72.0799 70.79 72.2499 70.89 72.4299 70.89C72.4999 70.89 72.5799 70.87 72.6499 70.84C72.8999 70.72 72.9999 70.42 72.8799 70.18L72.2599 68.91C72.1399 68.67 71.8499 68.56 71.5999 68.68C71.3499 68.8 71.2499 69.1 71.3699 69.34L71.9899 70.61Z"
        fill={Color.secondary}
      />
      <Path
        d="M301.78 73.19C301.58 73.01 301.27 73.02 301.08 73.22C300.9 73.42 300.91 73.73 301.11 73.92L302.53 75.21C302.73 75.39 303.04 75.38 303.23 75.18C303.41 74.98 303.4 74.67 303.2 74.48L301.78 73.19Z"
        fill={Color.secondary}
      />
      <Path
        d="M278.79 38.06C278.98 37.86 278.96 37.55 278.76 37.36C278.56 37.18 278.25 37.19 278.06 37.39C278.01 37.44 277.95 37.5 277.89 37.55C278.41 36.32 278.61 34.97 278.49 33.65C278.46 33.38 278.22 33.18 277.95 33.2C277.68 33.23 277.48 33.47 277.5 33.74C277.61 34.88 277.43 36.05 277 37.11C276.9 37.35 276.7 37.84 277 38.27C277.33 38.72 278.04 38.85 278.77 38.06H278.79Z"
        fill={Color.secondary}
      />
      <Path
        d="M250.17 61.9901C249.93 61.8701 249.63 61.9701 249.51 62.2101L248.44 64.3501C248.32 64.5901 248.42 64.8901 248.66 65.0101C248.91 65.1301 249.2 65.0301 249.32 64.7901L250.39 62.6501C250.51 62.4101 250.41 62.1101 250.17 61.9901Z"
        fill={Color.secondary}
      />
      <Path
        d="M266 59.44C266.806 59.44 267.46 58.7864 267.46 57.98C267.46 57.1737 266.806 56.52 266 56.52C265.194 56.52 264.54 57.1737 264.54 57.98C264.54 58.7864 265.194 59.44 266 59.44Z"
        fill={Color.secondary}
      />
      <Path
        d="M95.6399 25.1C96.1699 25.63 97.0399 25.63 97.5699 25.1L104.7 17.97C106.79 15.88 106.79 12.48 104.7 10.39C102.41 8.09997 98.5899 8.32997 96.5999 10.99C94.6999 8.38997 90.8399 8.05997 88.5099 10.39C86.4199 12.48 86.4199 15.87 88.5099 17.97L95.6399 25.1Z"
        fill={Color.secondary}
      />
      <Path
        d="M179.93 195.37C182.99 192.59 186.35 189.57 190.61 189.24C190.88 189.22 191.09 188.98 191.06 188.71C191.04 188.44 190.78 188.22 190.53 188.26C185.98 188.61 182.45 191.74 179.26 194.64C179.06 194.82 179.04 195.14 179.23 195.34C179.41 195.54 179.73 195.56 179.93 195.37Z"
        fill={Color.secondary}
      />
      <Path
        d="M94.5098 38.14C94.5098 39.29 95.4498 40.23 96.5998 40.23C97.7498 40.23 98.6898 39.29 98.6898 38.14C98.6898 36.99 97.7598 36.05 96.5998 36.05C95.4398 36.05 94.5098 36.98 94.5098 38.14Z"
        fill={Color.secondary}
      />
    </Svg>
  );
}
