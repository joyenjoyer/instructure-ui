/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const getElevateLogo = (fill: 'white' | 'black') => (
  <svg
    id="elevateLogo"
    width="90"
    height="36"
    viewBox="0 0 90 36"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path d="M0.0861816 10.546V0.0927734H7.63835V2.44336H2.74183V4.0713H7.5314V6.42454H2.74183V8.20601H7.63835V10.5566L0.0861816 10.546Z" />
      <path d="M10.3696 10.546V0.0927734H13.0279V8.20601H17.1679V10.5566L10.3696 10.546Z" />
      <path d="M19.761 10.546V0.0927734H27.3132V2.44336H22.4166V4.0713H27.2036V6.42454H22.4166V8.20601H27.3132V10.5566L19.761 10.546Z" />
      <path d="M32.8697 10.546L28.9932 0.0927734H32.0062L34.5549 7.62895L37.0879 0.0927734H40.0984L36.2219 10.546H32.8697Z" />
      <path d="M48.407 10.546L47.8853 9.03983H43.8262L43.3175 10.546H40.3123L44.1888 0.0927734H47.541L51.4175 10.546H48.407ZM45.874 2.75571L44.5697 6.68925H47.1783L45.874 2.75571Z" />
      <path d="M54.7514 10.546V2.44336H51.8635V0.0927734H60.2818V2.44336H57.4122V10.546H54.7514Z" />
      <path d="M62.781 10.546V0.0927734H70.3462V2.44336H65.4393V4.0713H70.2262V6.42454H65.4393V8.20601H70.3358V10.5566L62.781 10.546Z" />
      <path d="M0.404541 31.897V18.0767H5.77584C10.0437 18.0767 13.0045 20.8322 13.0045 24.9749C13.0045 29.1599 10.0437 31.897 5.79671 31.897H0.404541ZM10.0437 24.9749C10.0437 22.5502 8.57498 20.6655 5.79671 20.6655H3.30541V29.3055H5.77584C8.47063 29.3055 10.0437 27.3387 10.0437 24.9749Z" />
      <path d="M20.7236 31.8971V30.8383C20.0479 31.6668 18.8845 32.1433 17.5932 32.1433C16.0279 32.1433 14.1836 31.0659 14.1836 28.8265C14.1836 26.4653 16.0097 25.5944 17.5932 25.5944C18.921 25.5944 20.0636 26.0286 20.7236 26.8174V25.5547C20.7236 24.5409 19.8653 23.8765 18.5584 23.8765C17.4979 23.8877 16.4821 24.3112 15.7201 25.0597L14.7001 23.2068C15.8913 22.1525 17.4268 21.5863 19.0071 21.6186C21.274 21.6186 23.3375 22.5291 23.3375 25.4091V31.8971H20.7236ZM20.7236 29.4936V28.2494C20.2932 27.6697 19.4766 27.3574 18.6366 27.3574C17.6166 27.3574 16.7792 27.9186 16.7792 28.8715C16.7792 29.8244 17.6166 30.3618 18.6366 30.3618C19.4766 30.3618 20.2932 30.0733 20.7236 29.4936Z" />
      <path d="M26.2148 29.3825V24.189H24.5818V21.8887H26.2148V19.1543H28.8105V21.8887H30.8114V24.189H28.8105V28.689C28.8105 29.3322 29.1366 29.8087 29.7079 29.8087C30.0347 29.8233 30.355 29.7128 30.6053 29.499L31.1583 31.5081C30.7696 31.8602 30.0757 32.1514 28.9931 32.1514C27.1748 32.1461 26.2148 31.1931 26.2148 29.3825Z" />
      <path d="M38.3036 31.8971V30.8382C37.6305 31.6668 36.4775 32.1432 35.1732 32.1432C33.6079 32.1432 31.761 31.0659 31.761 28.8265C31.761 26.4653 33.6001 25.5944 35.1732 25.5944C36.4984 25.5944 37.6436 26.0285 38.3036 26.8174V25.5547C38.3036 24.5409 37.4453 23.8765 36.1384 23.8765C35.078 23.8882 34.0624 24.3116 33.3001 25.0597L32.2801 23.2068C33.4725 22.1527 35.0086 21.5866 36.5897 21.6185C38.8566 21.6185 40.9175 22.5291 40.9175 25.4091V31.8971H38.3036ZM38.3036 29.4935V28.2494C37.8758 27.6697 37.0592 27.3574 36.2166 27.3574C35.194 27.3574 34.3566 27.9185 34.3566 28.8715C34.3566 29.8244 35.194 30.3618 36.2166 30.3618C37.0592 30.3618 37.8758 30.0732 38.3036 29.4935Z" />
      <path d="M47.022 29.9489L48.6159 27.6486C49.1742 28.244 49.846 28.718 50.5904 29.042C51.3348 29.366 52.1363 29.5331 52.9463 29.5333C54.5585 29.5333 55.315 28.808 55.315 28.0006C55.3046 25.5971 47.4785 27.2647 47.4785 22.0739C47.4785 19.7736 49.4376 17.8677 52.6437 17.8677C54.8089 17.8677 56.6063 18.5321 57.9524 19.7947L56.348 21.9918C55.2592 21.004 53.8459 20.4649 52.3854 20.4803C51.162 20.4803 50.4681 21.0097 50.4681 21.8462C50.4681 24.0221 58.2941 22.5503 58.2941 27.7121C58.2941 30.24 56.4967 32.1459 52.842 32.1459C50.1889 32.1459 48.3107 31.2539 47.022 29.9489Z" />
      <path d="M59.7236 33.451C59.9833 33.5569 60.2603 33.6126 60.5402 33.6151C61.2158 33.6151 61.6645 33.4298 61.9097 32.8898L62.2775 32.0216L58.2732 21.8887H61.0436L63.6158 28.8504L66.2115 21.8887H68.9871L64.3515 33.5357C63.6158 35.4231 62.3088 35.9181 60.6158 35.9604C60.1882 35.9558 59.7626 35.8998 59.348 35.7937L59.7236 33.451Z" />
      <path d="M76.6122 31.8972V25.846C76.6122 24.4589 75.8974 23.993 74.7861 23.993C74.3515 24.0019 73.9244 24.1103 73.5368 24.3101C73.1492 24.51 72.8112 24.7961 72.5479 25.1472V31.8972H69.9548V21.8886H72.5479V23.1725C72.9844 22.6849 73.5175 22.2964 74.1123 22.0323C74.707 21.7681 75.35 21.6344 75.9992 21.6398C78.1853 21.6398 79.2261 22.8839 79.2261 24.8163V31.8839L76.6122 31.8972Z" />
      <path d="M80.9401 26.8809C80.9401 23.8156 83.1444 21.6397 86.1574 21.6397C88.1792 21.6397 89.4053 22.5318 90.0574 23.4424L88.3618 25.0597C88.1345 24.7133 87.823 24.4322 87.4575 24.2435C87.0919 24.0548 86.6846 23.9649 86.2748 23.9824C84.7096 23.9824 83.5983 25.1418 83.5983 26.8941C83.5983 28.6465 84.7018 29.8059 86.2748 29.8059C86.6855 29.8148 87.0919 29.7189 87.4565 29.527C87.8212 29.335 88.1325 29.0532 88.3618 28.7074L90.0574 30.3247C89.4053 31.2353 88.1792 32.1485 86.1574 32.1485C83.1444 32.1459 80.9401 29.97 80.9401 26.8809Z" />
    </g>
  </svg>
)

const getElevateIcon = (fill: 'white' | 'black') => (
  <svg
    id="elevateIcon"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.2933 31.0827C15.1594 30.574 13.2178 29.4599 11.7019 27.8743C10.1859 26.2887 9.16013 24.2991 8.7478 22.1445C8.33547 19.9899 8.55415 17.7621 9.37754 15.7288C10.2009 13.6955 11.594 11.9433 13.3893 10.6827L13.0666 13.9707L14.4 14.0987L14.912 8.8L9.59997 8.26666L9.47198 9.6L12.232 9.86666C9.9706 11.5897 8.35089 14.0199 7.63086 16.7701C6.91083 19.5204 7.1319 22.4326 8.25887 25.0426C9.38584 27.6527 11.3539 29.8105 13.8494 31.1724C16.345 32.5343 19.2245 33.0218 22.0293 32.5573L21.8106 31.2427C20.3095 31.4942 18.7729 31.4398 17.2933 31.0827Z" />
    <path d="M30.8027 13.3335C29.4769 11.1761 27.5381 9.46282 25.2339 8.41261C22.9297 7.36241 20.3648 7.02291 17.8667 7.43748L18.0854 8.75215C20.6006 8.33221 23.184 8.76789 25.4223 9.98951C27.6607 11.2111 29.4247 13.1481 30.4323 15.4907C31.4398 17.8332 31.6327 20.446 30.98 22.911C30.3273 25.3761 28.8668 27.5511 26.832 29.0882L27.0987 26.3362L25.7654 26.2081L25.3094 30.9015L30.0027 31.3575L30.1307 30.0241L28.0374 29.8215C30.4138 27.872 32.0034 25.1275 32.5118 22.096C33.0202 19.0646 32.4131 15.9516 30.8027 13.3335Z" />
    <path d="M26.7973 21.0347C26.7966 20.4238 26.5537 19.8382 26.1217 19.4063C25.6898 18.9743 25.1042 18.7314 24.4933 18.7307H24.376C24.3739 17.6701 23.9768 16.6484 23.2623 15.8647C22.5478 15.081 21.567 14.5915 20.5112 14.4916C19.4554 14.3917 18.4002 14.6886 17.5514 15.3244C16.7026 15.9602 16.121 16.8893 15.92 17.9307H15.808C15.0909 17.9307 14.4031 18.2155 13.896 18.7226C13.3889 19.2297 13.104 19.9175 13.104 20.6347C13.104 21.3518 13.3889 22.0396 13.896 22.5467C14.4031 23.0538 15.0909 23.3387 15.808 23.3387H24.4933C25.1044 23.3387 25.6904 23.0959 26.1225 22.6638C26.5546 22.2317 26.7973 21.6457 26.7973 21.0347ZM24.4933 22.0053H15.808C15.4445 22.0053 15.0958 21.8609 14.8388 21.6039C14.5817 21.3468 14.4373 20.9982 14.4373 20.6347C14.4373 20.2711 14.5817 19.9225 14.8388 19.6654C15.0958 19.4084 15.4445 19.264 15.808 19.264H17.1227L17.1627 18.64C17.1878 17.8599 17.5217 17.1217 18.0911 16.5879C18.6605 16.054 19.4186 15.7682 20.1987 15.7933C20.9788 15.8184 21.7169 16.1524 22.2508 16.7218C22.7846 17.2911 23.0704 18.0492 23.0453 18.8293V19.0587C23.0453 19.152 23.0453 19.2453 23.0293 19.3253L22.9627 20.0533H24.4933C24.7508 20.0533 24.9977 20.1556 25.1797 20.3376C25.3617 20.5197 25.464 20.7666 25.464 21.024C25.464 21.2814 25.3617 21.5283 25.1797 21.7104C24.9977 21.8924 24.7508 21.9947 24.4933 21.9947V22.0053Z" />
  </svg>
)

const elevateLogo = getElevateLogo('white')
const elevateLogoInverse = getElevateLogo('black')
const elevateIcon = getElevateIcon('white')
const elevateIconInverse = getElevateIcon('black')

export { elevateLogo, elevateLogoInverse, elevateIcon, elevateIconInverse }
