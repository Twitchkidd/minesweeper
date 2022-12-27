import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  :root {
    --eigengrau: #14141d;

    --sans-serif: 'Anybody', sans-serif;
    --serif: 'Updock', serif;
  }

  /* Andy Bell's Modern CSS Reset https://piccalil.li/blog/a-modern-css-reset/ */
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* End reset! */

  @font-face {
    font-family: 'Anybody';
    src: url('/fonts/Anybody/Anybody-VariableFont_wdth,wght.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Updock';
    src: url('/fonts/Updock/Updock-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  * {
    font-family: var(--sans-serif);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--serif);
  }
`;

export default Global;
