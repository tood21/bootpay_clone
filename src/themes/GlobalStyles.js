import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
// import thinWoff from '/src/assets/fonts/SpoqaHanSansNeo_OTF_subset/SpoqaHanSansNeo-Thin.woff'

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'spoqa Han Sans';
    font-style: normal;
    font-weight: 100;
    src: url("/src/assets/fonts/SpoqaHanSansNeo_OTF_subset/SpoqaHanSansNeo-Thin.woff") format('woff2'),
    url("/src/assets/fonts/SpoqaHanSansNeo_OTF_subset/SpoqaHanSansNeo-Thin.woff2") format('woff'),
    url("/src/assets/fonts/SpoqaHanSansNeo_OTF_subset/SpoqaHanSansNeo-Thin.otf") format('opentype')
  }

  //
  @font-face {
    font-family: 'spoqa Han Sans';
    font-style: normal;
    font-weight: 200;
    src: url("/src/assets/fonts/SpoqaHanSansNeo_OTF_subset/SpoqaHanSansNeo-Light.woff2") format('woff2'),
    url("/src/assets/fonts/SpoqaHanSansNeo_OTF_subset/SpoqaHanSansNeo-Light.woff") format('woff'),
    url("/src/assets/fonts/SpoqaHanSansNeo_OTF_subset/SpoqaHanSansNeo-Light.otf") format('opentype')
  }

  @font-face {
    font-family: 'spoqa Han Sans';
    font-style: normal;
    font-weight: 400;
    src: url("/src/assets/fonts/SpoqaHanSansNeo_OTF_subset/SpoqaHanSansNeo-Regular.woff2") format('woff2'),
    url("/src/assets/fonts/SpoqaHanSansNeo_OTF_subset/SpoqaHanSansNeo-Regular.woff") format('woff'),
    url("/src/assets/fonts/SpoqaHanSansNeo_OTF_subset/SpoqaHanSansNeo-Regular.otf") format('opentype')
  }

  @font-face {
    font-family: 'spoqa Han Sans';
    font-style: normal;
    font-weight: 500;
    src: url("/src/assets/fonts/SpoqaHanSansNeo_OTF_subset/SpoqaHanSansNeo-Medium.woff2") format('woff2'),
    url("/src/assets/fonts/SpoqaHanSansNeo_OTF_subset/SpoqaHanSansNeo-Medium.woff") format('woff'),
    url("/src/assets/fonts/SpoqaHanSansNeo_OTF_subset/SpoqaHanSansNeo-Medium.otf") format('opentype')
  }

  @font-face {
    font-family: 'spoqa Han Sans';
    font-style: normal;
    font-weight: 700;
    src: url("/src/assets/fonts/SpoqaHanSansNeo_OTF_subset/SpoqaHanSansNeo-Bold.woff2") format('woff2'),
    url("/src/assets/fonts/SpoqaHanSansNeo_OTF_subset/SpoqaHanSansNeo-Bold.woff") format('woff'),
    url("/src/assets/fonts/SpoqaHanSansNeo_OTF_subset/SpoqaHanSansNeo-Bold.otf") format('opentype')
  }


  * {
    font-family: "spoqa Han Sans";
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }

  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
`;

export default GlobalStyles;