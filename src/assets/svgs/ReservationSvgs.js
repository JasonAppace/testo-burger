import React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  Circle,
  ClipPath,
  RadialGradient,
  Rect,
  Mask,
} from 'react-native-svg';

export function PendingSvg({width}) {
  return (
    <Svg
      width={width}
      height={width}
      viewBox="0 0 80 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M79.9595 43.9075C79.9595 43.9075 79.9595 43.8805 79.9595 43.8535C79.9595 43.8535 79.9595 43.8266 79.9595 43.8131C79.9595 43.7996 79.9595 43.7861 79.9595 43.7726C79.9595 43.7591 79.9595 43.7456 79.9595 43.7321C79.9595 43.7321 79.9595 43.7051 79.9595 43.6916C79.9595 43.6781 79.9595 43.6511 79.9595 43.6376V43.6106C79.9595 43.5971 79.9595 43.5701 79.9595 43.5566L74.574 14.5234C74.1556 12.2963 72.2119 10.6766 69.9578 10.6766H54.4761L50.1839 0.539902C50.0489 0.215961 49.725 0 49.3741 0H28.8578C28.8578 0 28.8308 0 28.8173 0C28.8173 0 28.8038 0 28.7903 0C28.7903 0 28.7903 0 28.7768 0C28.7498 0 28.7093 0 28.6823 0.0134976C28.6823 0.0134976 28.6688 0.0134976 28.6553 0.0134976C28.6148 0.0134976 28.5743 0.0404927 28.5338 0.0539902C28.5338 0.0539902 28.5203 0.0539902 28.5068 0.0539902C28.4798 0.0539902 28.4528 0.0809853 28.4258 0.0944829C28.4258 0.0944829 28.3989 0.10798 28.3854 0.121478C28.3584 0.134976 28.3449 0.148473 28.3179 0.175468C28.3179 0.175468 28.2909 0.188966 28.2909 0.202463C28.2639 0.229458 28.2504 0.242956 28.2234 0.269951C28.2234 0.269951 28.2234 0.269951 28.2099 0.283449C28.1829 0.310444 28.1559 0.337439 28.1424 0.377931C28.1424 0.377931 28.1424 0.391429 28.1289 0.404927C28.1154 0.431922 28.1019 0.458917 28.0884 0.485912C28.0884 0.485912 28.0884 0.512907 28.0749 0.526405C28.0749 0.5534 28.0479 0.580395 28.0479 0.60739C28.0479 0.60739 28.0479 0.620887 28.0479 0.634385L25.4159 10.6496H10.0017C7.7341 10.6496 5.79045 12.2693 5.38552 14.4964L0 43.5431C0 43.5566 0 43.5836 0 43.5971V43.6241C0 43.6376 0 43.6646 0 43.6781C0 43.6781 0 43.7051 0 43.7186C0 43.7321 0 43.7456 0 43.7591C0 43.7726 0 43.7861 0 43.7996C0 43.7996 0 43.8266 0 43.84C0 43.8535 0 43.867 0 43.894V43.921C0 43.9345 0 43.9615 0.0134976 43.975C0.0134976 43.975 0.0134976 43.9885 0.0134976 44.002C0.0134976 44.0155 0.0134976 44.029 0.0269951 44.056C0.0269951 44.056 0.0269951 44.083 0.0404927 44.0965C0.0404927 44.0965 0.0404927 44.1235 0.0539902 44.137C0.0539902 44.1505 0.0674878 44.164 0.0809853 44.1775C0.0809853 44.1775 0.0809853 44.191 0.0944829 44.2045C0.0944829 44.218 0.10798 44.2315 0.121478 44.245C0.121478 44.245 0.134976 44.2585 0.148473 44.272C0.148473 44.272 0.175468 44.299 0.175468 44.3125C0.175468 44.3125 0.188966 44.326 0.202463 44.3395C0.202463 44.3395 0.229458 44.3665 0.242956 44.3665C0.242956 44.3665 0.269951 44.38 0.269951 44.3935C0.269951 44.3935 0.296946 44.4069 0.296946 44.4204C0.296946 44.4204 0.323941 44.4339 0.337439 44.4474C0.337439 44.4474 0.364434 44.4474 0.364434 44.4609C0.377932 44.4609 0.391429 44.4744 0.404927 44.4879C0.404927 44.4879 0.431922 44.4879 0.445419 44.5014C0.445419 44.5014 0.472414 44.5014 0.485912 44.5149C0.49941 44.5149 0.512907 44.5149 0.526405 44.5284C0.526405 44.5284 0.5534 44.5284 0.566897 44.5284C0.580395 44.5284 0.60739 44.5284 0.620888 44.5284C0.620888 44.5284 0.620887 44.5284 0.634385 44.5284C0.647883 44.5284 0.674878 44.5284 0.688375 44.5284C0.688375 44.5284 0.701873 44.5284 0.71537 44.5284C0.728868 44.5284 0.755863 44.5284 0.769361 44.5284C0.769361 44.5284 0.796356 44.5284 0.809853 44.5284C0.823351 44.5284 0.836848 44.5284 0.850346 44.5284C0.863843 44.5284 0.877341 44.5284 0.890839 44.5284H0.917834C0.931331 44.5284 0.958326 44.5284 0.971824 44.5284C0.971824 44.5284 0.985321 44.5284 0.998819 44.5284C1.01232 44.5284 1.03931 44.5284 1.05281 44.5149L6.51932 42.5578C8.86789 41.7209 11.4324 42.2743 13.2141 44.002L14.1994 44.9604C17.0609 47.7273 21.5826 47.9568 24.7275 45.5002L24.849 45.4058C27.6565 43.2057 31.7462 43.6916 33.9463 46.4991L36.1195 49.2526C37.0373 50.4134 38.4005 51.0747 39.8718 51.0747C41.343 51.0747 42.7063 50.4134 43.6241 49.2526L45.7567 46.5396C46.8365 45.1763 48.3752 44.3125 50.1029 44.11C51.8306 43.9075 53.5313 44.3934 54.8946 45.4733C58.0125 47.9433 62.5342 47.7408 65.4091 45.0008L66.516 43.948C68.2976 42.2473 70.8622 41.7074 73.1702 42.5443L78.6772 44.5149C78.6772 44.5149 78.7582 44.5419 78.7987 44.5554C78.7987 44.5554 78.8122 44.5554 78.8257 44.5554C78.8662 44.5554 78.9202 44.5554 78.9607 44.5554C79.0147 44.5554 79.0552 44.5554 79.1092 44.5554C79.1092 44.5554 79.1092 44.5554 79.1227 44.5554C79.1362 44.5554 79.1632 44.5554 79.1767 44.5554H79.2037C79.2171 44.5554 79.2306 44.5554 79.2441 44.5419C79.2441 44.5419 79.2711 44.5419 79.2846 44.5284C79.2846 44.5284 79.3116 44.5284 79.3251 44.5149C79.3251 44.5149 79.3521 44.5149 79.3656 44.5014C79.3656 44.5014 79.3926 44.4879 79.4061 44.4744C79.4061 44.4744 79.4331 44.4609 79.4331 44.4474C79.4331 44.4474 79.4601 44.4339 79.4736 44.4204C79.4736 44.4204 79.4871 44.4069 79.5006 44.3935C79.5006 44.3935 79.5276 44.3665 79.5411 44.353C79.5411 44.353 79.5546 44.3395 79.5681 44.326C79.5681 44.326 79.5951 44.299 79.6086 44.2855C79.6086 44.2855 79.6086 44.272 79.6221 44.2585C79.6221 44.245 79.6491 44.2315 79.6491 44.218C79.6491 44.218 79.6491 44.2045 79.6626 44.191C79.6626 44.1775 79.6761 44.164 79.6896 44.1505C79.6896 44.1505 79.6896 44.1235 79.7031 44.11C79.7031 44.11 79.7031 44.083 79.7166 44.0695C79.7166 44.056 79.7166 44.0425 79.7301 44.029C79.7301 44.029 79.7301 44.0155 79.7301 44.002C79.7301 43.9885 79.7301 43.9615 79.7436 43.948V43.921L79.9595 43.9075ZM48.8072 1.75468L52.5865 10.6766H33.9733L30.194 1.75468H48.8072ZM29.0737 3.57685L29.5461 4.71065L32.0702 10.6766H27.1976L29.0602 3.59035L29.0737 3.57685ZM65.4496 42.6928L64.3428 43.7456C62.0888 45.8917 58.5524 46.0402 56.1228 44.11C54.3951 42.7333 52.2355 42.1259 50.0489 42.3823C47.8623 42.6388 45.8917 43.7321 44.5284 45.4598L42.3958 48.1728C41.8154 48.9016 40.9516 49.3201 40.0202 49.3201C39.0889 49.3201 38.2251 48.9016 37.6447 48.1728L35.4716 45.4193C32.6641 41.8694 27.481 41.2485 23.9177 44.029L23.7962 44.1235C21.3396 46.0401 17.8033 45.8647 15.5627 43.6916L14.5774 42.7333C12.3098 40.5466 9.04336 39.8448 6.0739 40.8976L2.03813 42.3418L7.14021 14.8068C7.39666 13.4031 8.62494 12.3908 10.0422 12.3908H69.9983C71.4156 12.3908 72.6438 13.4031 72.9003 14.8068L78.0024 42.3418L73.9261 40.8841C70.9836 39.8313 67.7442 40.5197 65.4766 42.6658L65.4496 42.6928Z"
        fill="#814809"
      />
      <Path
        d="M14.6448 22.6221C14.1724 22.5141 13.7135 22.8245 13.6055 23.2969L10.6901 36.727C10.5821 37.1994 10.8925 37.6583 11.3649 37.7663C11.4324 37.7798 11.4864 37.7798 11.5539 37.7798C11.9588 37.7798 12.3233 37.4964 12.4043 37.0914L15.3197 23.6614C15.4277 23.189 15.1173 22.7301 14.6448 22.6221Z"
        fill="#814809"
      />
      <Path
        d="M31.1254 28.0882C30.653 28.0342 30.2075 28.3716 30.1535 28.8575L29.0872 38.2248C29.0333 38.7108 29.3707 39.1427 29.8566 39.1967C29.8836 39.1967 29.9241 39.1967 29.9511 39.1967C30.383 39.1967 30.7744 38.8727 30.8149 38.4273L31.8812 29.06C31.9352 28.5741 31.5978 28.1422 31.1119 28.0882H31.1254Z"
        fill="#814809"
      />
      <Path
        d="M66.273 27.0492C66.1515 26.5768 65.6791 26.2933 65.2202 26.4148C64.7478 26.5363 64.4643 27.0087 64.5858 27.4676L67.1908 37.9957C67.2853 38.4007 67.6497 38.6571 68.0412 38.6571C68.1086 38.6571 68.1761 38.6571 68.2571 38.6301C68.7295 38.5086 69.013 38.0362 68.8915 37.5773L66.2865 27.0492H66.273Z"
        fill="#814809"
      />
      <Path
        d="M49.0096 25.038C48.9286 24.5656 48.4832 24.2417 48.0108 24.3092C47.5384 24.3902 47.2144 24.8356 47.2819 25.308L49.3336 38.3196C49.401 38.7516 49.779 39.062 50.1974 39.062C50.2379 39.062 50.2919 39.062 50.3324 39.062C50.8048 38.981 51.1287 38.5356 51.0612 38.0632L49.0096 25.0515V25.038Z"
        fill="#814809"
      />
      <Path
        d="M16.9664 48.8205C16.494 48.7125 16.0216 48.996 15.9136 49.4684L13.3086 60.3204H10.2042L13.592 46.3369C13.7 45.8645 13.4166 45.3921 12.9442 45.2841C12.4718 45.1762 11.9993 45.4596 11.8914 45.932L8.24702 60.9953C8.17953 61.2517 8.24702 61.5352 8.40899 61.7377C8.57096 61.9536 8.82741 62.0751 9.09736 62.0751H14.0105C14.4154 62.0751 14.7663 61.7916 14.8608 61.4002L17.6278 49.8868C17.7358 49.4144 17.4523 48.942 16.9799 48.834L16.9664 48.8205Z"
        fill="#814809"
      />
      <Path
        d="M68.1087 45.9188C68.0007 45.4464 67.5283 45.163 67.0558 45.2709C66.5834 45.3789 66.3 45.8513 66.408 46.3238L69.7959 60.3072H66.6914L64.0864 49.4552C63.9784 48.9828 63.506 48.6993 63.0336 48.8073C62.5612 48.9153 62.2777 49.3877 62.3857 49.8601L65.1527 61.3735C65.2472 61.765 65.5981 62.0484 66.003 62.0484H70.9162C71.1861 62.0484 71.4426 61.9269 71.6045 61.711C71.7665 61.495 71.834 61.2251 71.7665 60.9686L68.1222 45.9053L68.1087 45.9188Z"
        fill="#814809"
      />
      <Path
        d="M39.2374 9.19169C39.4129 9.36716 39.6288 9.44814 39.8583 9.44814C40.0878 9.44814 40.3037 9.36716 40.4792 9.19169L45.5408 4.13011C45.8782 3.79267 45.8782 3.23927 45.5408 2.88833C45.2033 2.55089 44.6499 2.55089 44.299 2.88833L39.8583 7.32903L38.4276 5.89829C38.0901 5.56085 37.5367 5.56085 37.1858 5.89829C36.8348 6.23573 36.8483 6.78913 37.1858 7.14006L39.2374 9.19169Z"
        fill="#814809"
      />
    </Svg>
  );
}
export function ConfirmedSvg() {
  return (
    <Svg
      width="80"
      height="63"
      viewBox="0 0 80 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M79.9595 43.9075C79.9595 43.9075 79.9595 43.8805 79.9595 43.8535C79.9595 43.8535 79.9595 43.8266 79.9595 43.8131C79.9595 43.7996 79.9595 43.7861 79.9595 43.7726C79.9595 43.7591 79.9595 43.7456 79.9595 43.7321C79.9595 43.7321 79.9595 43.7051 79.9595 43.6916C79.9595 43.6781 79.9595 43.6511 79.9595 43.6376V43.6106C79.9595 43.5971 79.9595 43.5701 79.9595 43.5566L74.574 14.5234C74.1556 12.2963 72.2119 10.6766 69.9578 10.6766H54.4761L50.1839 0.539902C50.0489 0.215961 49.725 0 49.3741 0H28.8578C28.8578 0 28.8308 0 28.8173 0C28.8173 0 28.8038 0 28.7903 0C28.7903 0 28.7903 0 28.7768 0C28.7498 0 28.7093 0 28.6823 0.0134976C28.6823 0.0134976 28.6688 0.0134976 28.6553 0.0134976C28.6148 0.0134976 28.5743 0.0404927 28.5338 0.0539902C28.5338 0.0539902 28.5203 0.0539902 28.5068 0.0539902C28.4798 0.0539902 28.4528 0.0809853 28.4258 0.0944829C28.4258 0.0944829 28.3989 0.10798 28.3854 0.121478C28.3584 0.134976 28.3449 0.148473 28.3179 0.175468C28.3179 0.175468 28.2909 0.188966 28.2909 0.202463C28.2639 0.229458 28.2504 0.242956 28.2234 0.269951C28.2234 0.269951 28.2234 0.269951 28.2099 0.283449C28.1829 0.310444 28.1559 0.337439 28.1424 0.377931C28.1424 0.377931 28.1424 0.391429 28.1289 0.404927C28.1154 0.431922 28.1019 0.458917 28.0884 0.485912C28.0884 0.485912 28.0884 0.512907 28.0749 0.526405C28.0749 0.5534 28.0479 0.580395 28.0479 0.60739C28.0479 0.60739 28.0479 0.620887 28.0479 0.634385L25.4159 10.6496H10.0017C7.7341 10.6496 5.79045 12.2693 5.38552 14.4964L0 43.5431C0 43.5566 0 43.5836 0 43.5971V43.6241C0 43.6376 0 43.6646 0 43.6781C0 43.6781 0 43.7051 0 43.7186C0 43.7321 0 43.7456 0 43.7591C0 43.7726 0 43.7861 0 43.7996C0 43.7996 0 43.8266 0 43.84C0 43.8535 0 43.867 0 43.894V43.921C0 43.9345 0 43.9615 0.0134976 43.975C0.0134976 43.975 0.0134976 43.9885 0.0134976 44.002C0.0134976 44.0155 0.0134976 44.029 0.0269951 44.056C0.0269951 44.056 0.0269951 44.083 0.0404927 44.0965C0.0404927 44.0965 0.0404927 44.1235 0.0539902 44.137C0.0539902 44.1505 0.0674878 44.164 0.0809853 44.1775C0.0809853 44.1775 0.0809853 44.191 0.0944829 44.2045C0.0944829 44.218 0.10798 44.2315 0.121478 44.245C0.121478 44.245 0.134976 44.2585 0.148473 44.272C0.148473 44.272 0.175468 44.299 0.175468 44.3125C0.175468 44.3125 0.188966 44.326 0.202463 44.3395C0.202463 44.3395 0.229458 44.3665 0.242956 44.3665C0.242956 44.3665 0.269951 44.38 0.269951 44.3935C0.269951 44.3935 0.296946 44.4069 0.296946 44.4204C0.296946 44.4204 0.323941 44.4339 0.337439 44.4474C0.337439 44.4474 0.364434 44.4474 0.364434 44.4609C0.377932 44.4609 0.391429 44.4744 0.404927 44.4879C0.404927 44.4879 0.431922 44.4879 0.445419 44.5014C0.445419 44.5014 0.472414 44.5014 0.485912 44.5149C0.49941 44.5149 0.512907 44.5149 0.526405 44.5284C0.526405 44.5284 0.5534 44.5284 0.566897 44.5284C0.580395 44.5284 0.60739 44.5284 0.620888 44.5284C0.620888 44.5284 0.620887 44.5284 0.634385 44.5284C0.647883 44.5284 0.674878 44.5284 0.688375 44.5284C0.688375 44.5284 0.701873 44.5284 0.71537 44.5284C0.728868 44.5284 0.755863 44.5284 0.769361 44.5284C0.769361 44.5284 0.796356 44.5284 0.809853 44.5284C0.823351 44.5284 0.836848 44.5284 0.850346 44.5284C0.863843 44.5284 0.877341 44.5284 0.890839 44.5284H0.917834C0.931331 44.5284 0.958326 44.5284 0.971824 44.5284C0.971824 44.5284 0.985321 44.5284 0.998819 44.5284C1.01232 44.5284 1.03931 44.5284 1.05281 44.5149L6.51932 42.5578C8.86789 41.7209 11.4324 42.2743 13.2141 44.002L14.1994 44.9604C17.0609 47.7273 21.5826 47.9568 24.7275 45.5002L24.849 45.4058C27.6565 43.2057 31.7462 43.6916 33.9463 46.4991L36.1195 49.2526C37.0373 50.4134 38.4005 51.0747 39.8718 51.0747C41.343 51.0747 42.7063 50.4134 43.6241 49.2526L45.7567 46.5396C46.8365 45.1763 48.3752 44.3125 50.1029 44.11C51.8306 43.9075 53.5313 44.3934 54.8946 45.4733C58.0125 47.9433 62.5342 47.7408 65.4091 45.0008L66.516 43.948C68.2976 42.2473 70.8622 41.7074 73.1702 42.5443L78.6772 44.5149C78.6772 44.5149 78.7582 44.5419 78.7987 44.5554C78.7987 44.5554 78.8122 44.5554 78.8257 44.5554C78.8662 44.5554 78.9202 44.5554 78.9607 44.5554C79.0147 44.5554 79.0552 44.5554 79.1092 44.5554C79.1092 44.5554 79.1092 44.5554 79.1227 44.5554C79.1362 44.5554 79.1632 44.5554 79.1767 44.5554H79.2037C79.2171 44.5554 79.2306 44.5554 79.2441 44.5419C79.2441 44.5419 79.2711 44.5419 79.2846 44.5284C79.2846 44.5284 79.3116 44.5284 79.3251 44.5149C79.3251 44.5149 79.3521 44.5149 79.3656 44.5014C79.3656 44.5014 79.3926 44.4879 79.4061 44.4744C79.4061 44.4744 79.4331 44.4609 79.4331 44.4474C79.4331 44.4474 79.4601 44.4339 79.4736 44.4204C79.4736 44.4204 79.4871 44.4069 79.5006 44.3935C79.5006 44.3935 79.5276 44.3665 79.5411 44.353C79.5411 44.353 79.5546 44.3395 79.5681 44.326C79.5681 44.326 79.5951 44.299 79.6086 44.2855C79.6086 44.2855 79.6086 44.272 79.6221 44.2585C79.6221 44.245 79.6491 44.2315 79.6491 44.218C79.6491 44.218 79.6491 44.2045 79.6626 44.191C79.6626 44.1775 79.6761 44.164 79.6896 44.1505C79.6896 44.1505 79.6896 44.1235 79.7031 44.11C79.7031 44.11 79.7031 44.083 79.7166 44.0695C79.7166 44.056 79.7166 44.0425 79.7301 44.029C79.7301 44.029 79.7301 44.0155 79.7301 44.002C79.7301 43.9885 79.7301 43.9615 79.7436 43.948V43.921L79.9595 43.9075ZM48.8072 1.75468L52.5865 10.6766H33.9733L30.194 1.75468H48.8072ZM29.0737 3.57685L29.5461 4.71065L32.0702 10.6766H27.1976L29.0602 3.59035L29.0737 3.57685ZM65.4496 42.6928L64.3428 43.7456C62.0888 45.8917 58.5524 46.0402 56.1228 44.11C54.3951 42.7333 52.2355 42.1259 50.0489 42.3823C47.8623 42.6388 45.8917 43.7321 44.5284 45.4598L42.3958 48.1728C41.8154 48.9016 40.9516 49.3201 40.0202 49.3201C39.0889 49.3201 38.2251 48.9016 37.6447 48.1728L35.4716 45.4193C32.6641 41.8694 27.481 41.2485 23.9177 44.029L23.7962 44.1235C21.3396 46.0401 17.8033 45.8647 15.5627 43.6916L14.5774 42.7333C12.3098 40.5466 9.04336 39.8448 6.0739 40.8976L2.03813 42.3418L7.14021 14.8068C7.39666 13.4031 8.62494 12.3908 10.0422 12.3908H69.9983C71.4156 12.3908 72.6438 13.4031 72.9003 14.8068L78.0024 42.3418L73.9261 40.8841C70.9836 39.8313 67.7442 40.5197 65.4766 42.6658L65.4496 42.6928Z"
        fill="#495533"
      />
      <Path
        d="M14.6448 22.6221C14.1724 22.5141 13.7135 22.8245 13.6055 23.2969L10.6901 36.727C10.5821 37.1994 10.8925 37.6583 11.3649 37.7663C11.4324 37.7798 11.4864 37.7798 11.5539 37.7798C11.9588 37.7798 12.3233 37.4964 12.4043 37.0914L15.3197 23.6614C15.4277 23.189 15.1173 22.7301 14.6448 22.6221Z"
        fill="#495533"
      />
      <Path
        d="M31.1253 28.0882C30.6529 28.0342 30.2075 28.3716 30.1535 28.8575L29.0872 38.2248C29.0332 38.7108 29.3707 39.1427 29.8566 39.1967C29.8836 39.1967 29.9241 39.1967 29.9511 39.1967C30.383 39.1967 30.7744 38.8727 30.8149 38.4273L31.8812 29.06C31.9352 28.5741 31.5978 28.1422 31.1118 28.0882H31.1253Z"
        fill="#495533"
      />
      <Path
        d="M66.273 27.0492C66.1515 26.5768 65.6791 26.2933 65.2202 26.4148C64.7478 26.5363 64.4643 27.0087 64.5858 27.4676L67.1908 37.9957C67.2853 38.4007 67.6497 38.6571 68.0412 38.6571C68.1086 38.6571 68.1761 38.6571 68.2571 38.6301C68.7295 38.5086 69.013 38.0362 68.8915 37.5773L66.2865 27.0492H66.273Z"
        fill="#495533"
      />
      <Path
        d="M49.0096 25.038C48.9287 24.5656 48.4832 24.2417 48.0108 24.3092C47.5384 24.3902 47.2145 24.8356 47.282 25.308L49.3336 38.3196C49.4011 38.7516 49.779 39.062 50.1974 39.062C50.2379 39.062 50.2919 39.062 50.3324 39.062C50.8048 38.981 51.1288 38.5356 51.0613 38.0632L49.0096 25.0515V25.038Z"
        fill="#495533"
      />
      <Path
        d="M16.9665 48.8205C16.4941 48.7125 16.0216 48.996 15.9137 49.4684L13.3086 60.3204H10.2042L13.5921 46.3369C13.7001 45.8645 13.4166 45.3921 12.9442 45.2841C12.4718 45.1762 11.9994 45.4596 11.8914 45.932L8.24705 60.9953C8.17956 61.2517 8.24705 61.5352 8.40902 61.7377C8.57099 61.9536 8.82744 62.0751 9.09739 62.0751H14.0105C14.4154 62.0751 14.7664 61.7916 14.8609 61.4002L17.6278 49.8868C17.7358 49.4144 17.4524 48.942 16.98 48.834L16.9665 48.8205Z"
        fill="#495533"
      />
      <Path
        d="M68.1087 45.9188C68.0007 45.4464 67.5283 45.163 67.0558 45.2709C66.5834 45.3789 66.3 45.8513 66.408 46.3238L69.7959 60.3072H66.6914L64.0864 49.4552C63.9784 48.9828 63.506 48.6993 63.0336 48.8073C62.5612 48.9153 62.2777 49.3877 62.3857 49.8601L65.1527 61.3735C65.2472 61.765 65.5981 62.0484 66.003 62.0484H70.9162C71.1861 62.0484 71.4426 61.9269 71.6045 61.711C71.7665 61.495 71.834 61.2251 71.7665 60.9686L68.1222 45.9053L68.1087 45.9188Z"
        fill="#495533"
      />
      <Path
        d="M39.2374 9.19169C39.4129 9.36716 39.6288 9.44814 39.8583 9.44814C40.0878 9.44814 40.3037 9.36716 40.4792 9.19169L45.5408 4.13011C45.8782 3.79267 45.8782 3.23927 45.5408 2.88833C45.2033 2.55089 44.6499 2.55089 44.299 2.88833L39.8583 7.32903L38.4276 5.89829C38.0901 5.56085 37.5367 5.56085 37.1858 5.89829C36.8348 6.23573 36.8483 6.78913 37.1858 7.14006L39.2374 9.19169Z"
        fill="#495533"
      />
    </Svg>
  );
}
export function CancelledSvg() {
  return (
    <Svg
      width="80"
      height="63"
      viewBox="0 0 80 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M79.9595 43.9075C79.9595 43.9075 79.9595 43.8805 79.9595 43.8535C79.9595 43.8535 79.9595 43.8266 79.9595 43.8131C79.9595 43.7996 79.9595 43.7861 79.9595 43.7726C79.9595 43.7591 79.9595 43.7456 79.9595 43.7321C79.9595 43.7321 79.9595 43.7051 79.9595 43.6916C79.9595 43.6781 79.9595 43.6511 79.9595 43.6376V43.6106C79.9595 43.5971 79.9595 43.5701 79.9595 43.5566L74.574 14.5234C74.1556 12.2963 72.2119 10.6766 69.9578 10.6766H54.4761L50.1839 0.539902C50.0489 0.215961 49.725 0 49.3741 0H28.8578C28.8578 0 28.8308 0 28.8173 0C28.8173 0 28.8038 0 28.7903 0C28.7903 0 28.7903 0 28.7768 0C28.7498 0 28.7093 0 28.6823 0.0134976C28.6823 0.0134976 28.6688 0.0134976 28.6553 0.0134976C28.6148 0.0134976 28.5743 0.0404927 28.5338 0.0539902C28.5338 0.0539902 28.5203 0.0539902 28.5068 0.0539902C28.4798 0.0539902 28.4528 0.0809853 28.4258 0.0944829C28.4258 0.0944829 28.3989 0.10798 28.3854 0.121478C28.3584 0.134976 28.3449 0.148473 28.3179 0.175468C28.3179 0.175468 28.2909 0.188966 28.2909 0.202463C28.2639 0.229458 28.2504 0.242956 28.2234 0.269951C28.2234 0.269951 28.2234 0.269951 28.2099 0.283449C28.1829 0.310444 28.1559 0.337439 28.1424 0.377931C28.1424 0.377931 28.1424 0.391429 28.1289 0.404927C28.1154 0.431922 28.1019 0.458917 28.0884 0.485912C28.0884 0.485912 28.0884 0.512907 28.0749 0.526405C28.0749 0.5534 28.0479 0.580395 28.0479 0.60739C28.0479 0.60739 28.0479 0.620887 28.0479 0.634385L25.4159 10.6496H10.0017C7.7341 10.6496 5.79045 12.2693 5.38552 14.4964L0 43.5431C0 43.5566 0 43.5836 0 43.5971V43.6241C0 43.6376 0 43.6646 0 43.6781C0 43.6781 0 43.7051 0 43.7186C0 43.7321 0 43.7456 0 43.7591C0 43.7726 0 43.7861 0 43.7996C0 43.7996 0 43.8266 0 43.84C0 43.8535 0 43.867 0 43.894V43.921C0 43.9345 0 43.9615 0.0134976 43.975C0.0134976 43.975 0.0134976 43.9885 0.0134976 44.002C0.0134976 44.0155 0.0134976 44.029 0.0269951 44.056C0.0269951 44.056 0.0269951 44.083 0.0404927 44.0965C0.0404927 44.0965 0.0404927 44.1235 0.0539902 44.137C0.0539902 44.1505 0.0674878 44.164 0.0809853 44.1775C0.0809853 44.1775 0.0809853 44.191 0.0944829 44.2045C0.0944829 44.218 0.10798 44.2315 0.121478 44.245C0.121478 44.245 0.134976 44.2585 0.148473 44.272C0.148473 44.272 0.175468 44.299 0.175468 44.3125C0.175468 44.3125 0.188966 44.326 0.202463 44.3395C0.202463 44.3395 0.229458 44.3665 0.242956 44.3665C0.242956 44.3665 0.269951 44.38 0.269951 44.3935C0.269951 44.3935 0.296946 44.4069 0.296946 44.4204C0.296946 44.4204 0.323941 44.4339 0.337439 44.4474C0.337439 44.4474 0.364434 44.4474 0.364434 44.4609C0.377932 44.4609 0.391429 44.4744 0.404927 44.4879C0.404927 44.4879 0.431922 44.4879 0.445419 44.5014C0.445419 44.5014 0.472414 44.5014 0.485912 44.5149C0.49941 44.5149 0.512907 44.5149 0.526405 44.5284C0.526405 44.5284 0.5534 44.5284 0.566897 44.5284C0.580395 44.5284 0.60739 44.5284 0.620888 44.5284C0.620888 44.5284 0.620887 44.5284 0.634385 44.5284C0.647883 44.5284 0.674878 44.5284 0.688375 44.5284C0.688375 44.5284 0.701873 44.5284 0.71537 44.5284C0.728868 44.5284 0.755863 44.5284 0.769361 44.5284C0.769361 44.5284 0.796356 44.5284 0.809853 44.5284C0.823351 44.5284 0.836848 44.5284 0.850346 44.5284C0.863843 44.5284 0.877341 44.5284 0.890839 44.5284H0.917834C0.931331 44.5284 0.958326 44.5284 0.971824 44.5284C0.971824 44.5284 0.985321 44.5284 0.998819 44.5284C1.01232 44.5284 1.03931 44.5284 1.05281 44.5149L6.51932 42.5578C8.86789 41.7209 11.4324 42.2743 13.2141 44.002L14.1994 44.9604C17.0609 47.7273 21.5826 47.9568 24.7275 45.5002L24.849 45.4058C27.6565 43.2057 31.7462 43.6916 33.9463 46.4991L36.1195 49.2526C37.0373 50.4134 38.4005 51.0747 39.8718 51.0747C41.343 51.0747 42.7063 50.4134 43.6241 49.2526L45.7567 46.5396C46.8365 45.1763 48.3752 44.3125 50.1029 44.11C51.8306 43.9075 53.5313 44.3934 54.8946 45.4733C58.0125 47.9433 62.5342 47.7408 65.4091 45.0008L66.516 43.948C68.2976 42.2473 70.8622 41.7074 73.1702 42.5443L78.6772 44.5149C78.6772 44.5149 78.7582 44.5419 78.7987 44.5554C78.7987 44.5554 78.8122 44.5554 78.8257 44.5554C78.8662 44.5554 78.9202 44.5554 78.9607 44.5554C79.0147 44.5554 79.0552 44.5554 79.1092 44.5554C79.1092 44.5554 79.1092 44.5554 79.1227 44.5554C79.1362 44.5554 79.1632 44.5554 79.1767 44.5554H79.2037C79.2171 44.5554 79.2306 44.5554 79.2441 44.5419C79.2441 44.5419 79.2711 44.5419 79.2846 44.5284C79.2846 44.5284 79.3116 44.5284 79.3251 44.5149C79.3251 44.5149 79.3521 44.5149 79.3656 44.5014C79.3656 44.5014 79.3926 44.4879 79.4061 44.4744C79.4061 44.4744 79.4331 44.4609 79.4331 44.4474C79.4331 44.4474 79.4601 44.4339 79.4736 44.4204C79.4736 44.4204 79.4871 44.4069 79.5006 44.3935C79.5006 44.3935 79.5276 44.3665 79.5411 44.353C79.5411 44.353 79.5546 44.3395 79.5681 44.326C79.5681 44.326 79.5951 44.299 79.6086 44.2855C79.6086 44.2855 79.6086 44.272 79.6221 44.2585C79.6221 44.245 79.6491 44.2315 79.6491 44.218C79.6491 44.218 79.6491 44.2045 79.6626 44.191C79.6626 44.1775 79.6761 44.164 79.6896 44.1505C79.6896 44.1505 79.6896 44.1235 79.7031 44.11C79.7031 44.11 79.7031 44.083 79.7166 44.0695C79.7166 44.056 79.7166 44.0425 79.7301 44.029C79.7301 44.029 79.7301 44.0155 79.7301 44.002C79.7301 43.9885 79.7301 43.9615 79.7436 43.948V43.921L79.9595 43.9075ZM48.8072 1.75468L52.5865 10.6766H33.9733L30.194 1.75468H48.8072ZM29.0737 3.57685L29.5461 4.71065L32.0702 10.6766H27.1976L29.0602 3.59035L29.0737 3.57685ZM65.4496 42.6928L64.3428 43.7456C62.0888 45.8917 58.5524 46.0402 56.1228 44.11C54.3951 42.7333 52.2355 42.1259 50.0489 42.3823C47.8623 42.6388 45.8917 43.7321 44.5284 45.4598L42.3958 48.1728C41.8154 48.9016 40.9516 49.3201 40.0202 49.3201C39.0889 49.3201 38.2251 48.9016 37.6447 48.1728L35.4716 45.4193C32.6641 41.8694 27.481 41.2485 23.9177 44.029L23.7962 44.1235C21.3396 46.0401 17.8033 45.8647 15.5627 43.6916L14.5774 42.7333C12.3098 40.5466 9.04336 39.8448 6.0739 40.8976L2.03813 42.3418L7.14021 14.8068C7.39666 13.4031 8.62494 12.3908 10.0422 12.3908H69.9983C71.4156 12.3908 72.6438 13.4031 72.9003 14.8068L78.0024 42.3418L73.9261 40.8841C70.9836 39.8313 67.7442 40.5197 65.4766 42.6658L65.4496 42.6928Z"
        fill="#741013"
      />
      <Path
        d="M14.6448 22.6221C14.1724 22.5141 13.7135 22.8245 13.6055 23.2969L10.6901 36.727C10.5821 37.1994 10.8925 37.6583 11.3649 37.7663C11.4324 37.7798 11.4864 37.7798 11.5539 37.7798C11.9588 37.7798 12.3233 37.4964 12.4043 37.0914L15.3197 23.6614C15.4277 23.189 15.1173 22.7301 14.6448 22.6221Z"
        fill="#741013"
      />
      <Path
        d="M31.1253 28.0882C30.6529 28.0342 30.2075 28.3716 30.1535 28.8575L29.0872 38.2248C29.0332 38.7108 29.3707 39.1427 29.8566 39.1967C29.8836 39.1967 29.9241 39.1967 29.9511 39.1967C30.383 39.1967 30.7744 38.8727 30.8149 38.4273L31.8812 29.06C31.9352 28.5741 31.5978 28.1422 31.1118 28.0882H31.1253Z"
        fill="#741013"
      />
      <Path
        d="M66.273 27.0492C66.1515 26.5768 65.6791 26.2933 65.2202 26.4148C64.7478 26.5363 64.4643 27.0087 64.5858 27.4676L67.1908 37.9957C67.2853 38.4007 67.6497 38.6571 68.0412 38.6571C68.1086 38.6571 68.1761 38.6571 68.2571 38.6301C68.7295 38.5086 69.013 38.0362 68.8915 37.5773L66.2865 27.0492H66.273Z"
        fill="#741013"
      />
      <Path
        d="M49.0096 25.038C48.9287 24.5656 48.4832 24.2417 48.0108 24.3092C47.5384 24.3902 47.2145 24.8356 47.282 25.308L49.3336 38.3196C49.4011 38.7516 49.779 39.062 50.1974 39.062C50.2379 39.062 50.2919 39.062 50.3324 39.062C50.8048 38.981 51.1288 38.5356 51.0613 38.0632L49.0096 25.0515V25.038Z"
        fill="#741013"
      />
      <Path
        d="M16.9665 48.8205C16.4941 48.7125 16.0216 48.996 15.9137 49.4684L13.3086 60.3204H10.2042L13.5921 46.3369C13.7001 45.8645 13.4166 45.3921 12.9442 45.2841C12.4718 45.1762 11.9994 45.4596 11.8914 45.932L8.24705 60.9953C8.17956 61.2517 8.24705 61.5352 8.40902 61.7377C8.57099 61.9536 8.82744 62.0751 9.09739 62.0751H14.0105C14.4154 62.0751 14.7664 61.7916 14.8609 61.4002L17.6278 49.8868C17.7358 49.4144 17.4524 48.942 16.98 48.834L16.9665 48.8205Z"
        fill="#741013"
      />
      <Path
        d="M68.1087 45.9188C68.0007 45.4464 67.5283 45.163 67.0558 45.2709C66.5834 45.3789 66.3 45.8513 66.408 46.3238L69.7959 60.3072H66.6914L64.0864 49.4552C63.9784 48.9828 63.506 48.6993 63.0336 48.8073C62.5612 48.9153 62.2777 49.3877 62.3857 49.8601L65.1527 61.3735C65.2472 61.765 65.5981 62.0484 66.003 62.0484H70.9162C71.1861 62.0484 71.4426 61.9269 71.6045 61.711C71.7665 61.495 71.834 61.2251 71.7665 60.9686L68.1222 45.9053L68.1087 45.9188Z"
        fill="#741013"
      />
      <Path
        d="M39.2374 9.19169C39.4129 9.36716 39.6288 9.44814 39.8583 9.44814C40.0878 9.44814 40.3037 9.36716 40.4792 9.19169L45.5408 4.13011C45.8782 3.79267 45.8782 3.23927 45.5408 2.88833C45.2033 2.55089 44.6499 2.55089 44.299 2.88833L39.8583 7.32903L38.4276 5.89829C38.0901 5.56085 37.5367 5.56085 37.1858 5.89829C36.8348 6.23573 36.8483 6.78913 37.1858 7.14006L39.2374 9.19169Z"
        fill="#741013"
      />
    </Svg>
  );
}
