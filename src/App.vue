<template>
  <div id="app">
		<app-download></app-download>
    <router-view/>
  </div>
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
body, h2, h3, h4, h5, html, img, input, li, ol, p, small, ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
html {
    font-family: SF Pro SC,PingFangSC-Regular,Helvetica,Droid Sans,Arial,sans-serif;
}
body {
    background: #fff;
    font-size: 0.875rem;
    color: #1a1a1a;
    overflow-x: hidden!important;
}
a:active, a:hover, a:link, a:visited {
    text-decoration: none;
    color: #1a1a1a;
}
a, button, img, input, textarea {
    outline: medium;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
