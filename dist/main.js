/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/leaguespartan-bold-webfont.woff2 */ "./src/fonts/leaguespartan-bold-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/leaguespartan-bold-webfont.woff */ "./src/fonts/leaguespartan-bold-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'league_spartanbold';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
  font-weight: normal;
  font-style: normal;
}



:root {
    --gutter: 16px;

    /* Section size */
    --header-height: 5.5rem;
    --brand-height: 3.5rem;
    --nav-height: calc(var(--header-height) - var(--brand-height));
    --footer-height: 2rem;

    /* Font size */
    --logo-font-size: calc(var(--brand-height) - var(--gutter));
    --nav-font-size: calc(var(--nav-height) - var(--gutter));
    --content-h1-font-size: 1.8rem;
    --content-h2-font-size: 1.5rem;
    --content-h3-font-size: 1.2rem;
    --table-font-size: 1.1rem;

    /* Other size*/
    --table-width: min(900px, 100%);
    --table-line-height: 3.5rem;
    --add-button-size: 4rem;
    --close-button-size: 3rem;

    /* Font family */
    --brand-font-family: 'league_spartanbold', san-serif;

    /* From Tailwind color pallete*/
    --primary-color: #14b8a6; /*Teal500*/
    --primary-color-400: #2dd4bf;
    --primary-color-200: #99f6e4;
    --primary-color-100: #ccfbf1;
    --secondary-color: #f97316; /*Orange500*/
    --secondary-color-400: #fb923c;
    --secondary-color-300: #fdba74;
    --secondary-color-200: #fed7aa;
    --secondary-color-100: #ffedd5; 
    --neutral-color: #0a0a0a;  /*Neutral950*/
    --neutral-color-700: #404040;
    --neutral-color-600: #525252;
    --neutral-color-500: #737373;
    --neutral-color-400: #a8a29e;
    --neutral-color-300: #d6d3d1;
    --neutral-color-200: #e5e5e5;
    --neutral-color-150: #ededed;
    --neutral-color-100: #f5f5f5;
    --neutral-color-50: #fafafa; 

    --do-color: #d0021b;
    --schedule-color: #F5A623;
    --delegate-color: #4A90E2;
    --eliminate-color:#bbbbbb;

    --text-color: var(--neutral-color);
    --text-color-white: var(--neutral-color-50);
    --background-color: var(--neutral-color-200);
    --surface-color: var(--neutral-color-50);
}

/* Reset CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* border: 1px solid pink; */
}

ul {
    list-style: none;
}

button {
    border: none;
    color: var(--text-color);
    cursor: pointer;
}

a {
    text-decoration: none;
    color: var(--text-color);
    cursor: pointer;
}

button:disabled,
a:disabled{
    cursor: default;
}

table {
    border-collapse: collapse;
    font-size: var(--table-font-size);
}


/* Parts */
input[type=checkbox] {
  accent-color: var(--neutral-color-500);
}

button.add {
    width: var(--add-button-size);
    height: var(--add-button-size);
    border-radius: 50%;
    font-weight: 700;
    font-size: calc(var(--add-button-size) - var(--gutter));
    background-color: var(--primary-color);
    opacity: 0.8;
    position: fixed;
    bottom: calc(var(--footer-height) + var(--gutter));
    right: calc(50vw - (var(--table-width) / 2) + var(--gutter));
}

button.toggle {
    width: 11ch;
    height: 2rem;
    padding: 0 0.4rem 0 1rem;
    border-style: none;
    border-radius: 1rem;
    display: grid;
    align-items: center;
    font-size: 1.2rem;
    background-color: #ebebeb;
    grid-template-columns: 1fr 1.5rem;
    grid-template-rows: 100%;
    grid-template-areas: "label knob"; 
}

button.toggle span {
  grid-area: label;
  justify-self: start;
}

button.toggle svg {
    grid-area: knob;
}

button.toggle[value="on"] svg {
    fill: var(--primary-color);
}


/* Common sections*/

body {
    /* required to make the footer stick to the bottom*/
    min-height: 100vh;

    /* this makes the width change (thus table position) */
    /* depending on the height because of the vertical scrollbar */
    /* 100vw would make it stable but causes horizontal overflow*/
    width: 100%;

    display: grid;
    grid-template-rows: var(--header-height) 1fr var(--footer-height);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

header {
    background-color: var(--primary-color);
    display: grid;
    grid-template-rows: var(--brand-height) var(--nav-height);
    align-items: center;
}

header h1 {
    font-family: var(--brand-font-family);
    letter-spacing: 0.1ch;
    font-size: var(--logo-font-size);
    margin-left: var(--gutter);
}

nav {
    height: var(--nav-height);
    font-size: var(--nav-font-size);
    background-color: var(--neutral-color-200);
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
}

nav button {
    background-color: var(--neutral-color-200);
    font-size: var(--nav-font-size);
    font-weight: 700;
    padding-right: var(--gutter);
    padding-left: var(--gutter);
}

nav button:hover{
    background-color: var(--neutral-color-400);
}

nav button.selected{
    background-color: var(--neutral-color-600);
    color: var(--neutral-color-50);
}

button.dropbtn {
    width: 100%;
    height: 100%;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--surface-color);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: calc(var(--gutter) / 2) var(--gutter);
  text-decoration: none;
  display: block;
}

/* Insert separation line before */
.dropdown-content a.separate{
    border-top: 1px solid var(--neutral-color-300);
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: var(--neutral-color-300);}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}



#content {
    background-color: var(--background-color);
    padding: var(--gutter);
}


footer {
    width: 100%;
    font-size: 1rem;
    display: flex;
    gap: var(--gutter);
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
}



/* Todo table */
#content a:hover {
    font-weight:700;
}

caption {
    font-weight: 700;
    font-size: var(--content-h1-font-size);
    text-align: left;
    margin-bottom: calc(var(--gutter) * 2);
}

table {
    width: var(--table-width);
    margin: var(--gutter) 
        auto 
        calc(var(--add-button-size) * 2)
}

thead, tbody {
    display: grid;
    grid-auto-rows: var(--table-line-height);
    gap: var(--gutter);
}

tr {
    padding-right: var(--gutter);
    padding-left: var(--gutter);
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 2ch 1fr 10ch 10ch 10ch 10ch;
    gap: calc(var(--gutter)*2);
    align-items: center;
    justify-items: center;
    border-radius: 5px;
}

tbody tr {
    background-color: var(--surface-color);
}

th, td {
    width: 100%;
    height: 100%; 
    display: grid;
    align-items: center;
    text-align: center;
}

td.select {
    /* This is necessary to fit checkbox to the height*/
    height: 100%;
}

td.priority {
    display: block;
    height: auto;
}

th>a, td>a {
    /* To make a whole cell clickable and center-align*/
    height: 100%;
    display: grid;
    align-items: center;
}

tr input[type=checkbox] {
    height: 100%;
}

th.title, 
td.title, 
th.priority,
td.priority {
    text-align: left;
}

th.title[scope="row"] {
    font-weight: normal;
}

td.priority {
    padding-left: 1ch;
}

tr.do td.priority {
    border-left: 6px solid var(--do-color);
}

tr.schedule td.priority {
    border-left: 6px solid var(--schedule-color);
}

tr.delegate td.priority {
    border-left: 6px solid var(--delegate-color);
}

tr.eliminate td.priority {
    border-left: 6px solid var(--eliminate-color);
}

table.todos td.status {
    justify-content: center;
}

table.todos .button-like-checkbox-wrapper {
    --button-height: 32px;
    --button-width: 12ch;
}

table.todos .button-like-checkbox-wrapper span{
    font-size: var(--table-font-size);
}

td.project {
    height: auto;
}

td.project a {
    width: 10ch;
    display: -webkit-box;
    overflow: hidden;
    overflow-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

button.multi-delete {
    background-color: transparent;
    width: 100%;
    height: var(--table-line-height);
}

button.multi-delete img{
    width: calc(var(--table-font-size) * 1.3);
}

button.multi-delete:disabled img{
    filter:contrast(0.1);
}

button.multi-delete:enabled:hover{
    transform: scale(1.1);
}

/* No task found message */
.empty {
    width: var(--table-width);
    margin: var(--gutter) auto calc(var(--add-button-size) * 2);
}

.empty h1{
    font-weight: 700;
    font-size: var(--content-h1-font-size);
    text-align: left;
    margin-bottom: calc(var(--gutter) * 2);
}

.empty p {
    font-size: var(--content-h2-font-size);
    font-weight: normal;
}


/* Overridiing rules for projects table */
table.projects thead{
    gap: 0;
    grid-auto-rows: calc(var(--table-line-height)) ;
}
table.projects tr {
    grid-template-columns: 2ch 1fr repeat(4, 8ch) 15ch;
}


tr.summary {
    grid-template-columns: 2ch 1fr calc((var(--gutter) * 8) + 47ch);
}
tr.summary th {
    grid-column: 3 / 6;
    text-align: left;
    border-bottom: 3px solid var(--neutral-color-400);
    align-self: end;
    text-align: right;
}

table.projects th.todos,
table.projects td.todos,
table.projects th.not-done,
table.projects td.not-done,
table.projects th.overdue,
table.projects td.overdue,
table.projects th.progress,
table.projects td.progress {
    text-align: right;
}

table.projects td.todos,
table.projects td.not-done,
table.projects td.overdue,
table.projects td.progress {
    text-align: right;
    font-family: monospace;
}

table.projects td>a:hover {
    background-color: var(--secondary-color-100);

    /* To make highlight a bit wider than the cell itself */
    box-shadow: 
        calc(-1 * var(--gutter)) 0 var(--secondary-color-100),
        var(--gutter) 0 var(--secondary-color-100)
    ;
}



th.title,
td.project {
    height: auto;
}

td.title a {
    width: auto;
}

td.project a {
    width: 10ch;
}

th.title a,
td.project a {
    display: -webkit-box;
    overflow: hidden;
    overflow-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

table.projects svg {
    fill: var(--neutral-color-150);
}

table.projects .over25 svg {
    fill: var(--neutral-color-200);
}

table.projects .over50 svg {
    fill: var(--neutral-color-300);
}

table.projects .over75 svg {
    fill: var(--neutral-color-400);
}

table.projects .complete svg {
    fill: var(--primary-color);
}


/* Modal dialog */

dialog {
    position: fixed;
    inset: 0;
    margin: auto;
    padding: calc(var(--gutter) * 2);
    width: var(--table-width);
    border: none;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
}

button.close {
    position: absolute;
    top: calc(var(--gutter) * 1);
    right: calc(var(--gutter) * 1);
    width: var(--close-button-size);
    height: var(--close-button-size);
    border-radius: 50%;
    display: grid;
    justify-items: center;
    align-items: center;
}


button.close>img {
    width: 80%;
    height: 80%;
}

dialog h1 {
    font-size: var(--content-h1-font-size);
    margin-bottom: calc(var(--gutter)*2);
    text-decoration: underline;
}

dialog::backdrop {
  background: rgba(0, 0, 0, 0.6);
}

form {
    display:grid;
    gap: var(--gutter);
}

form label, 
.status-wrapper,
.priority-wrapper {
    display: grid;
    grid-template-columns: 12ch 1fr;
    column-gap: var(--gutter);
    /* row-gap: calc(var(--gutter) / 2); */
}

form label > .alert, 
.priority-wrapper > .alert{
    grid-column: 2;
    color: var(--do-color);
    font-size: 1rem;
}

form>label,
.priority-wrapper,
.button-wrapper,
.status-wrapper,
.priority-display {
    font-size: var(--content-h2-font-size);
}

form>label,
.priority-wrapper>.label,
.status-wrapper>.label {
    color: var(--neutral-color-700);
    font-weight: bold;
}

form input[type="text"],
form input[type="date"],
textarea,
select {
    font-size: var(--content-h3-font-size);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: 1px solid var(--neutral-color-400);
    border-radius: 5px;
}

form input[type="text"]:focus,
form input[type="date"]:focus,
form input[type="checkbox"]:focus,
textarea:focus,
select:focus {
    border-color: transparent;
    outline: 4px solid var(--primary-color);
}

form input[type="text"],
form input[type="date"],
textarea,
select {
    padding: calc(var(--gutter) / 2) var(--gutter);
    background-color: var(--neutral-color-100);
}

form input[type="date"] {
    box-sizing: content-bhox;
    width: 15ch;
}

textarea {
    vertical-align:top;
}

.priority-input-wrapper {
    display: grid;
    grid-template-columns: auto 2ch 12ch 1fr;
    justify-content: start;
    column-gap: var(--gutter);
    align-items: center;
}

.priority-input-wrapper .prompt,
.priority-input-wrapper a {
    grid-column: 1 / -1;
}

.priority-input-wrapper input[type="checkbox"] {
    height: 80%;
}

.priority-input-wrapper img {
    height: 2ch
}

.priority-display {
    grid-column: 3;
    box-shadow: 2px 2px 2px var(--neutral-color-400);
    padding: calc(var(--gutter)/2);
    font-weight: bold;
    color: var(--text-color-white);
    text-align: center;
}

div.priority-display[data-value="do"]{
    background-color: var(--do-color);
    color: var(--text-color-white);
}

div.priority-display[data-value="schedule"] {
    background-color: var(--schedule-color);
}

div.priority-display[data-value="delegate"]{
    background-color: var(--delegate-color);
}

div.priority-display[data-value="eliminate"]  {
    background-color: var(--eliminate-color);
    /* For better contrast */
    color: white;
}

fieldset {
    border: none;
    padding: calc(var(--gutter)/2) var(--gutter);
}

fieldset label {
    grid-template-columns: 2ch 1fr;
    gap: 0.75ch;
    align-items: center;
}

.priority-input-wrapper a {
    font-size: initial;
}

.priority-input-wrapper a:not(:hover) .more {
    visibility: hidden;
}

.priority-input-wrapper a:hover .more {
    visibility: visible;
    color: var(--secondary-color);
}

.button-wrapper {
    display: grid;
    grid-template-columns: 12ch repeat(2, 1fr);
    gap: var(--gutter);
    align-items: center;
    justify-items: center;
    margin-top: var(--gutter);
}

form button {
    font-size: var(--content-h2-font-size);
    width: 100%;
    padding: calc(var(--gutter)/2) 5ch;
    border-radius: 2ch;
}

dialog button:hover,
dialog button:focus {
    outline: 4px solid var(--neutral-color-600);
    font-weight: bold;
}

dialog button:active {
    filter: brightness(1.05);
}

button.cancel {
    background-color: var(--neutral-color-300);
    grid-column: 2;
}

button[type="submit"] {
    grid-column: 3;
    background-color: var(--primary-color);
}


/* Todo Display / Edit Form specific */
dialog .button-like-checkbox-wrapper span {
    font-size: var(--content-h2-font-size);
}

/* Todo single display specific*/
.todo.single-display .button-like-checkbox-wrapper>label:hover{
    cursor: default;
}


/* Todo / Project single display*/
.single-display {
    display: grid;
    gap: var(--gutter);
}

.single-display>.row {
    display: grid;
    font-size: var(--content-h2-font-size);
    grid-template-columns: 11ch 1fr;
    align-items: baseline;
    gap: var(--gutter);
}

.single-display>form {
    display:grid;
    font-size: var(--content-h2-font-size);
    grid-template-columns: 11ch 1fr 1fr;
    gap: var(--gutter);
}

.single-display .cancel {
    grid-column: 2;
}

.single-display .edit {
    grid-column: 3;
}

.single-display .label {
    color: var(--neutral-color-700);
    font-weight: bold;
}

.single-display .description .data {
    font-size: var(--content-h3-font-size);
}

.single-display .priority.row {
    align-items: start;
}

.single-display .priority-display {
    width: 12ch;
}

.single-display .priority a {
    font-size: initial;
}

.single-display .priority a:not(:hover) .more {
    visibility: hidden;
}

.single-display .priority a:hover .more {
    visibility: visible;
    color: var(--secondary-color);
}

.single-display .edit {
    background-color: var(--primary-color);
}

/* Status Toggle */
.button-like-checkbox-wrapper {
    /* Parameters for the component appearance */
    --button-height: calc(var(--content-h2-font-size) + var(--gutter));
    --button-width: 180px;
    --button-background-color: #ebebeb;
    --button-on-color: var(--primary-color);
    --button-off-color: white;

    --button-label-height: calc(var(--button-height) * 0.6);
    --button-padding: calc(var(--button-height) * 0.2);
    font-size: initial;
    font-weight: initial;
    width: var(--button-width);
    height: var(--button-height);
}

.button-like-checkbox-wrapper>label {
  display: flex;  
  align-items: center;
  justify-content: space-between;
  max-height: var(--button-height);
  font-size: var(--button-label-height);
  background-color: var(--button-background-color);
  padding: var(--button-padding);
  padding-left: calc(var(--button-padding) * 2);
  border-radius: calc(var(--button-height) * 0.5);
}

.button-like-checkbox-wrapper>label:hover{
    cursor: pointer;
}

.button-like-checkbox-wrapper span {
  flex: none;
  line-height: 1;
}

.button-like-checkbox-wrapper input[type="checkbox"] {
  flex: none;
  appearance: none;
  -webkit-appearance: none;
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 1.8em;
  line-height: 1;
  background-color: var(--button-off-color);
  border-radius: 50%;
  width: 1ch;
  height: 1ch;
}

.button-like-checkbox-wrapper input[type="checkbox"]::before {
  content: "";
  width: 1ch;
  height: 1ch;
  clip-path: circle(50% at 50% 50%);
  transform: scale(0);
  background-color: var(--button-on-color);
}


.button-like-checkbox-wrapper input[type="checkbox"]:checked::before {
  transform: scale(1);
  width: 1ch;
  height: 1ch;
}

form .button-like-checkbox-wrapper input[type="checkbox"]:focus {
    outline: 2px solid var(--button-on-color);
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'league_spartanbold';\n  src: url('./fonts/leaguespartan-bold-webfont.woff2') format('woff2'),\n    url('./fonts/leaguespartan-bold-webfont.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n\n\n:root {\n    --gutter: 16px;\n\n    /* Section size */\n    --header-height: 5.5rem;\n    --brand-height: 3.5rem;\n    --nav-height: calc(var(--header-height) - var(--brand-height));\n    --footer-height: 2rem;\n\n    /* Font size */\n    --logo-font-size: calc(var(--brand-height) - var(--gutter));\n    --nav-font-size: calc(var(--nav-height) - var(--gutter));\n    --content-h1-font-size: 1.8rem;\n    --content-h2-font-size: 1.5rem;\n    --content-h3-font-size: 1.2rem;\n    --table-font-size: 1.1rem;\n\n    /* Other size*/\n    --table-width: min(900px, 100%);\n    --table-line-height: 3.5rem;\n    --add-button-size: 4rem;\n    --close-button-size: 3rem;\n\n    /* Font family */\n    --brand-font-family: 'league_spartanbold', san-serif;\n\n    /* From Tailwind color pallete*/\n    --primary-color: #14b8a6; /*Teal500*/\n    --primary-color-400: #2dd4bf;\n    --primary-color-200: #99f6e4;\n    --primary-color-100: #ccfbf1;\n    --secondary-color: #f97316; /*Orange500*/\n    --secondary-color-400: #fb923c;\n    --secondary-color-300: #fdba74;\n    --secondary-color-200: #fed7aa;\n    --secondary-color-100: #ffedd5; \n    --neutral-color: #0a0a0a;  /*Neutral950*/\n    --neutral-color-700: #404040;\n    --neutral-color-600: #525252;\n    --neutral-color-500: #737373;\n    --neutral-color-400: #a8a29e;\n    --neutral-color-300: #d6d3d1;\n    --neutral-color-200: #e5e5e5;\n    --neutral-color-150: #ededed;\n    --neutral-color-100: #f5f5f5;\n    --neutral-color-50: #fafafa; \n\n    --do-color: #d0021b;\n    --schedule-color: #F5A623;\n    --delegate-color: #4A90E2;\n    --eliminate-color:#bbbbbb;\n\n    --text-color: var(--neutral-color);\n    --text-color-white: var(--neutral-color-50);\n    --background-color: var(--neutral-color-200);\n    --surface-color: var(--neutral-color-50);\n}\n\n/* Reset CSS */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* border: 1px solid pink; */\n}\n\nul {\n    list-style: none;\n}\n\nbutton {\n    border: none;\n    color: var(--text-color);\n    cursor: pointer;\n}\n\na {\n    text-decoration: none;\n    color: var(--text-color);\n    cursor: pointer;\n}\n\nbutton:disabled,\na:disabled{\n    cursor: default;\n}\n\ntable {\n    border-collapse: collapse;\n    font-size: var(--table-font-size);\n}\n\n\n/* Parts */\ninput[type=checkbox] {\n  accent-color: var(--neutral-color-500);\n}\n\nbutton.add {\n    width: var(--add-button-size);\n    height: var(--add-button-size);\n    border-radius: 50%;\n    font-weight: 700;\n    font-size: calc(var(--add-button-size) - var(--gutter));\n    background-color: var(--primary-color);\n    opacity: 0.8;\n    position: fixed;\n    bottom: calc(var(--footer-height) + var(--gutter));\n    right: calc(50vw - (var(--table-width) / 2) + var(--gutter));\n}\n\nbutton.toggle {\n    width: 11ch;\n    height: 2rem;\n    padding: 0 0.4rem 0 1rem;\n    border-style: none;\n    border-radius: 1rem;\n    display: grid;\n    align-items: center;\n    font-size: 1.2rem;\n    background-color: #ebebeb;\n    grid-template-columns: 1fr 1.5rem;\n    grid-template-rows: 100%;\n    grid-template-areas: \"label knob\"; \n}\n\nbutton.toggle span {\n  grid-area: label;\n  justify-self: start;\n}\n\nbutton.toggle svg {\n    grid-area: knob;\n}\n\nbutton.toggle[value=\"on\"] svg {\n    fill: var(--primary-color);\n}\n\n\n/* Common sections*/\n\nbody {\n    /* required to make the footer stick to the bottom*/\n    min-height: 100vh;\n\n    /* this makes the width change (thus table position) */\n    /* depending on the height because of the vertical scrollbar */\n    /* 100vw would make it stable but causes horizontal overflow*/\n    width: 100%;\n\n    display: grid;\n    grid-template-rows: var(--header-height) 1fr var(--footer-height);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nheader {\n    background-color: var(--primary-color);\n    display: grid;\n    grid-template-rows: var(--brand-height) var(--nav-height);\n    align-items: center;\n}\n\nheader h1 {\n    font-family: var(--brand-font-family);\n    letter-spacing: 0.1ch;\n    font-size: var(--logo-font-size);\n    margin-left: var(--gutter);\n}\n\nnav {\n    height: var(--nav-height);\n    font-size: var(--nav-font-size);\n    background-color: var(--neutral-color-200);\n    display: flex;\n    justify-content: flex-start;\n    align-items: stretch;\n}\n\nnav button {\n    background-color: var(--neutral-color-200);\n    font-size: var(--nav-font-size);\n    font-weight: 700;\n    padding-right: var(--gutter);\n    padding-left: var(--gutter);\n}\n\nnav button:hover{\n    background-color: var(--neutral-color-400);\n}\n\nnav button.selected{\n    background-color: var(--neutral-color-600);\n    color: var(--neutral-color-50);\n}\n\nbutton.dropbtn {\n    width: 100%;\n    height: 100%;\n}\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: var(--surface-color);\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n/* Links inside the dropdown */\n.dropdown-content a {\n  color: black;\n  padding: calc(var(--gutter) / 2) var(--gutter);\n  text-decoration: none;\n  display: block;\n}\n\n/* Insert separation line before */\n.dropdown-content a.separate{\n    border-top: 1px solid var(--neutral-color-300);\n}\n\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {background-color: var(--neutral-color-300);}\n\n/* Show the dropdown menu on hover */\n.dropdown:hover .dropdown-content {display: block;}\n\n\n\n#content {\n    background-color: var(--background-color);\n    padding: var(--gutter);\n}\n\n\nfooter {\n    width: 100%;\n    font-size: 1rem;\n    display: flex;\n    gap: var(--gutter);\n    justify-content: center;\n    align-items: center;\n    background-color: var(--primary-color);\n}\n\n\n\n/* Todo table */\n#content a:hover {\n    font-weight:700;\n}\n\ncaption {\n    font-weight: 700;\n    font-size: var(--content-h1-font-size);\n    text-align: left;\n    margin-bottom: calc(var(--gutter) * 2);\n}\n\ntable {\n    width: var(--table-width);\n    margin: var(--gutter) \n        auto \n        calc(var(--add-button-size) * 2)\n}\n\nthead, tbody {\n    display: grid;\n    grid-auto-rows: var(--table-line-height);\n    gap: var(--gutter);\n}\n\ntr {\n    padding-right: var(--gutter);\n    padding-left: var(--gutter);\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 2ch 1fr 10ch 10ch 10ch 10ch;\n    gap: calc(var(--gutter)*2);\n    align-items: center;\n    justify-items: center;\n    border-radius: 5px;\n}\n\ntbody tr {\n    background-color: var(--surface-color);\n}\n\nth, td {\n    width: 100%;\n    height: 100%; \n    display: grid;\n    align-items: center;\n    text-align: center;\n}\n\ntd.select {\n    /* This is necessary to fit checkbox to the height*/\n    height: 100%;\n}\n\ntd.priority {\n    display: block;\n    height: auto;\n}\n\nth>a, td>a {\n    /* To make a whole cell clickable and center-align*/\n    height: 100%;\n    display: grid;\n    align-items: center;\n}\n\ntr input[type=checkbox] {\n    height: 100%;\n}\n\nth.title, \ntd.title, \nth.priority,\ntd.priority {\n    text-align: left;\n}\n\nth.title[scope=\"row\"] {\n    font-weight: normal;\n}\n\ntd.priority {\n    padding-left: 1ch;\n}\n\ntr.do td.priority {\n    border-left: 6px solid var(--do-color);\n}\n\ntr.schedule td.priority {\n    border-left: 6px solid var(--schedule-color);\n}\n\ntr.delegate td.priority {\n    border-left: 6px solid var(--delegate-color);\n}\n\ntr.eliminate td.priority {\n    border-left: 6px solid var(--eliminate-color);\n}\n\ntable.todos td.status {\n    justify-content: center;\n}\n\ntable.todos .button-like-checkbox-wrapper {\n    --button-height: 32px;\n    --button-width: 12ch;\n}\n\ntable.todos .button-like-checkbox-wrapper span{\n    font-size: var(--table-font-size);\n}\n\ntd.project {\n    height: auto;\n}\n\ntd.project a {\n    width: 10ch;\n    display: -webkit-box;\n    overflow: hidden;\n    overflow-wrap: break-word;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n}\n\nbutton.multi-delete {\n    background-color: transparent;\n    width: 100%;\n    height: var(--table-line-height);\n}\n\nbutton.multi-delete img{\n    width: calc(var(--table-font-size) * 1.3);\n}\n\nbutton.multi-delete:disabled img{\n    filter:contrast(0.1);\n}\n\nbutton.multi-delete:enabled:hover{\n    transform: scale(1.1);\n}\n\n/* No task found message */\n.empty {\n    width: var(--table-width);\n    margin: var(--gutter) auto calc(var(--add-button-size) * 2);\n}\n\n.empty h1{\n    font-weight: 700;\n    font-size: var(--content-h1-font-size);\n    text-align: left;\n    margin-bottom: calc(var(--gutter) * 2);\n}\n\n.empty p {\n    font-size: var(--content-h2-font-size);\n    font-weight: normal;\n}\n\n\n/* Overridiing rules for projects table */\ntable.projects thead{\n    gap: 0;\n    grid-auto-rows: calc(var(--table-line-height)) ;\n}\ntable.projects tr {\n    grid-template-columns: 2ch 1fr repeat(4, 8ch) 15ch;\n}\n\n\ntr.summary {\n    grid-template-columns: 2ch 1fr calc((var(--gutter) * 8) + 47ch);\n}\ntr.summary th {\n    grid-column: 3 / 6;\n    text-align: left;\n    border-bottom: 3px solid var(--neutral-color-400);\n    align-self: end;\n    text-align: right;\n}\n\ntable.projects th.todos,\ntable.projects td.todos,\ntable.projects th.not-done,\ntable.projects td.not-done,\ntable.projects th.overdue,\ntable.projects td.overdue,\ntable.projects th.progress,\ntable.projects td.progress {\n    text-align: right;\n}\n\ntable.projects td.todos,\ntable.projects td.not-done,\ntable.projects td.overdue,\ntable.projects td.progress {\n    text-align: right;\n    font-family: monospace;\n}\n\ntable.projects td>a:hover {\n    background-color: var(--secondary-color-100);\n\n    /* To make highlight a bit wider than the cell itself */\n    box-shadow: \n        calc(-1 * var(--gutter)) 0 var(--secondary-color-100),\n        var(--gutter) 0 var(--secondary-color-100)\n    ;\n}\n\n\n\nth.title,\ntd.project {\n    height: auto;\n}\n\ntd.title a {\n    width: auto;\n}\n\ntd.project a {\n    width: 10ch;\n}\n\nth.title a,\ntd.project a {\n    display: -webkit-box;\n    overflow: hidden;\n    overflow-wrap: break-word;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n}\n\ntable.projects svg {\n    fill: var(--neutral-color-150);\n}\n\ntable.projects .over25 svg {\n    fill: var(--neutral-color-200);\n}\n\ntable.projects .over50 svg {\n    fill: var(--neutral-color-300);\n}\n\ntable.projects .over75 svg {\n    fill: var(--neutral-color-400);\n}\n\ntable.projects .complete svg {\n    fill: var(--primary-color);\n}\n\n\n/* Modal dialog */\n\ndialog {\n    position: fixed;\n    inset: 0;\n    margin: auto;\n    padding: calc(var(--gutter) * 2);\n    width: var(--table-width);\n    border: none;\n    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);\n}\n\nbutton.close {\n    position: absolute;\n    top: calc(var(--gutter) * 1);\n    right: calc(var(--gutter) * 1);\n    width: var(--close-button-size);\n    height: var(--close-button-size);\n    border-radius: 50%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n\nbutton.close>img {\n    width: 80%;\n    height: 80%;\n}\n\ndialog h1 {\n    font-size: var(--content-h1-font-size);\n    margin-bottom: calc(var(--gutter)*2);\n    text-decoration: underline;\n}\n\ndialog::backdrop {\n  background: rgba(0, 0, 0, 0.6);\n}\n\nform {\n    display:grid;\n    gap: var(--gutter);\n}\n\nform label, \n.status-wrapper,\n.priority-wrapper {\n    display: grid;\n    grid-template-columns: 12ch 1fr;\n    column-gap: var(--gutter);\n    /* row-gap: calc(var(--gutter) / 2); */\n}\n\nform label > .alert, \n.priority-wrapper > .alert{\n    grid-column: 2;\n    color: var(--do-color);\n    font-size: 1rem;\n}\n\nform>label,\n.priority-wrapper,\n.button-wrapper,\n.status-wrapper,\n.priority-display {\n    font-size: var(--content-h2-font-size);\n}\n\nform>label,\n.priority-wrapper>.label,\n.status-wrapper>.label {\n    color: var(--neutral-color-700);\n    font-weight: bold;\n}\n\nform input[type=\"text\"],\nform input[type=\"date\"],\ntextarea,\nselect {\n    font-size: var(--content-h3-font-size);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    border: 1px solid var(--neutral-color-400);\n    border-radius: 5px;\n}\n\nform input[type=\"text\"]:focus,\nform input[type=\"date\"]:focus,\nform input[type=\"checkbox\"]:focus,\ntextarea:focus,\nselect:focus {\n    border-color: transparent;\n    outline: 4px solid var(--primary-color);\n}\n\nform input[type=\"text\"],\nform input[type=\"date\"],\ntextarea,\nselect {\n    padding: calc(var(--gutter) / 2) var(--gutter);\n    background-color: var(--neutral-color-100);\n}\n\nform input[type=\"date\"] {\n    box-sizing: content-bhox;\n    width: 15ch;\n}\n\ntextarea {\n    vertical-align:top;\n}\n\n.priority-input-wrapper {\n    display: grid;\n    grid-template-columns: auto 2ch 12ch 1fr;\n    justify-content: start;\n    column-gap: var(--gutter);\n    align-items: center;\n}\n\n.priority-input-wrapper .prompt,\n.priority-input-wrapper a {\n    grid-column: 1 / -1;\n}\n\n.priority-input-wrapper input[type=\"checkbox\"] {\n    height: 80%;\n}\n\n.priority-input-wrapper img {\n    height: 2ch\n}\n\n.priority-display {\n    grid-column: 3;\n    box-shadow: 2px 2px 2px var(--neutral-color-400);\n    padding: calc(var(--gutter)/2);\n    font-weight: bold;\n    color: var(--text-color-white);\n    text-align: center;\n}\n\ndiv.priority-display[data-value=\"do\"]{\n    background-color: var(--do-color);\n    color: var(--text-color-white);\n}\n\ndiv.priority-display[data-value=\"schedule\"] {\n    background-color: var(--schedule-color);\n}\n\ndiv.priority-display[data-value=\"delegate\"]{\n    background-color: var(--delegate-color);\n}\n\ndiv.priority-display[data-value=\"eliminate\"]  {\n    background-color: var(--eliminate-color);\n    /* For better contrast */\n    color: white;\n}\n\nfieldset {\n    border: none;\n    padding: calc(var(--gutter)/2) var(--gutter);\n}\n\nfieldset label {\n    grid-template-columns: 2ch 1fr;\n    gap: 0.75ch;\n    align-items: center;\n}\n\n.priority-input-wrapper a {\n    font-size: initial;\n}\n\n.priority-input-wrapper a:not(:hover) .more {\n    visibility: hidden;\n}\n\n.priority-input-wrapper a:hover .more {\n    visibility: visible;\n    color: var(--secondary-color);\n}\n\n.button-wrapper {\n    display: grid;\n    grid-template-columns: 12ch repeat(2, 1fr);\n    gap: var(--gutter);\n    align-items: center;\n    justify-items: center;\n    margin-top: var(--gutter);\n}\n\nform button {\n    font-size: var(--content-h2-font-size);\n    width: 100%;\n    padding: calc(var(--gutter)/2) 5ch;\n    border-radius: 2ch;\n}\n\ndialog button:hover,\ndialog button:focus {\n    outline: 4px solid var(--neutral-color-600);\n    font-weight: bold;\n}\n\ndialog button:active {\n    filter: brightness(1.05);\n}\n\nbutton.cancel {\n    background-color: var(--neutral-color-300);\n    grid-column: 2;\n}\n\nbutton[type=\"submit\"] {\n    grid-column: 3;\n    background-color: var(--primary-color);\n}\n\n\n/* Todo Display / Edit Form specific */\ndialog .button-like-checkbox-wrapper span {\n    font-size: var(--content-h2-font-size);\n}\n\n/* Todo single display specific*/\n.todo.single-display .button-like-checkbox-wrapper>label:hover{\n    cursor: default;\n}\n\n\n/* Todo / Project single display*/\n.single-display {\n    display: grid;\n    gap: var(--gutter);\n}\n\n.single-display>.row {\n    display: grid;\n    font-size: var(--content-h2-font-size);\n    grid-template-columns: 11ch 1fr;\n    align-items: baseline;\n    gap: var(--gutter);\n}\n\n.single-display>form {\n    display:grid;\n    font-size: var(--content-h2-font-size);\n    grid-template-columns: 11ch 1fr 1fr;\n    gap: var(--gutter);\n}\n\n.single-display .cancel {\n    grid-column: 2;\n}\n\n.single-display .edit {\n    grid-column: 3;\n}\n\n.single-display .label {\n    color: var(--neutral-color-700);\n    font-weight: bold;\n}\n\n.single-display .description .data {\n    font-size: var(--content-h3-font-size);\n}\n\n.single-display .priority.row {\n    align-items: start;\n}\n\n.single-display .priority-display {\n    width: 12ch;\n}\n\n.single-display .priority a {\n    font-size: initial;\n}\n\n.single-display .priority a:not(:hover) .more {\n    visibility: hidden;\n}\n\n.single-display .priority a:hover .more {\n    visibility: visible;\n    color: var(--secondary-color);\n}\n\n.single-display .edit {\n    background-color: var(--primary-color);\n}\n\n/* Status Toggle */\n.button-like-checkbox-wrapper {\n    /* Parameters for the component appearance */\n    --button-height: calc(var(--content-h2-font-size) + var(--gutter));\n    --button-width: 180px;\n    --button-background-color: #ebebeb;\n    --button-on-color: var(--primary-color);\n    --button-off-color: white;\n\n    --button-label-height: calc(var(--button-height) * 0.6);\n    --button-padding: calc(var(--button-height) * 0.2);\n    font-size: initial;\n    font-weight: initial;\n    width: var(--button-width);\n    height: var(--button-height);\n}\n\n.button-like-checkbox-wrapper>label {\n  display: flex;  \n  align-items: center;\n  justify-content: space-between;\n  max-height: var(--button-height);\n  font-size: var(--button-label-height);\n  background-color: var(--button-background-color);\n  padding: var(--button-padding);\n  padding-left: calc(var(--button-padding) * 2);\n  border-radius: calc(var(--button-height) * 0.5);\n}\n\n.button-like-checkbox-wrapper>label:hover{\n    cursor: pointer;\n}\n\n.button-like-checkbox-wrapper span {\n  flex: none;\n  line-height: 1;\n}\n\n.button-like-checkbox-wrapper input[type=\"checkbox\"] {\n  flex: none;\n  appearance: none;\n  -webkit-appearance: none;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  font-size: 1.8em;\n  line-height: 1;\n  background-color: var(--button-off-color);\n  border-radius: 50%;\n  width: 1ch;\n  height: 1ch;\n}\n\n.button-like-checkbox-wrapper input[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 1ch;\n  height: 1ch;\n  clip-path: circle(50% at 50% 50%);\n  transform: scale(0);\n  background-color: var(--button-on-color);\n}\n\n\n.button-like-checkbox-wrapper input[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n  width: 1ch;\n  height: 1ch;\n}\n\nform .button-like-checkbox-wrapper input[type=\"checkbox\"]:focus {\n    outline: 2px solid var(--button-on-color);\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/ulid/dist/index.esm.js":
/*!*********************************************!*\
  !*** ./node_modules/ulid/dist/index.esm.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeTime: () => (/* binding */ decodeTime),
/* harmony export */   detectPrng: () => (/* binding */ detectPrng),
/* harmony export */   encodeRandom: () => (/* binding */ encodeRandom),
/* harmony export */   encodeTime: () => (/* binding */ encodeTime),
/* harmony export */   factory: () => (/* binding */ factory),
/* harmony export */   incrementBase32: () => (/* binding */ incrementBase32),
/* harmony export */   monotonicFactory: () => (/* binding */ monotonicFactory),
/* harmony export */   randomChar: () => (/* binding */ randomChar),
/* harmony export */   replaceCharAt: () => (/* binding */ replaceCharAt),
/* harmony export */   ulid: () => (/* binding */ ulid)
/* harmony export */ });
function createError(message) {
    var err = new Error(message);
    err.source = "ulid";
    return err;
}
// These values should NEVER change. If
// they do, we're no longer making ulids!
var ENCODING = "0123456789ABCDEFGHJKMNPQRSTVWXYZ"; // Crockford's Base32
var ENCODING_LEN = ENCODING.length;
var TIME_MAX = Math.pow(2, 48) - 1;
var TIME_LEN = 10;
var RANDOM_LEN = 16;
function replaceCharAt(str, index, char) {
    if (index > str.length - 1) {
        return str;
    }
    return str.substr(0, index) + char + str.substr(index + 1);
}
function incrementBase32(str) {
    var done = undefined;
    var index = str.length;
    var char = void 0;
    var charIndex = void 0;
    var maxCharIndex = ENCODING_LEN - 1;
    while (!done && index-- >= 0) {
        char = str[index];
        charIndex = ENCODING.indexOf(char);
        if (charIndex === -1) {
            throw createError("incorrectly encoded string");
        }
        if (charIndex === maxCharIndex) {
            str = replaceCharAt(str, index, ENCODING[0]);
            continue;
        }
        done = replaceCharAt(str, index, ENCODING[charIndex + 1]);
    }
    if (typeof done === "string") {
        return done;
    }
    throw createError("cannot increment this string");
}
function randomChar(prng) {
    var rand = Math.floor(prng() * ENCODING_LEN);
    if (rand === ENCODING_LEN) {
        rand = ENCODING_LEN - 1;
    }
    return ENCODING.charAt(rand);
}
function encodeTime(now, len) {
    if (isNaN(now)) {
        throw new Error(now + " must be a number");
    }
    if (now > TIME_MAX) {
        throw createError("cannot encode time greater than " + TIME_MAX);
    }
    if (now < 0) {
        throw createError("time must be positive");
    }
    if (Number.isInteger(now) === false) {
        throw createError("time must be an integer");
    }
    var mod = void 0;
    var str = "";
    for (; len > 0; len--) {
        mod = now % ENCODING_LEN;
        str = ENCODING.charAt(mod) + str;
        now = (now - mod) / ENCODING_LEN;
    }
    return str;
}
function encodeRandom(len, prng) {
    var str = "";
    for (; len > 0; len--) {
        str = randomChar(prng) + str;
    }
    return str;
}
function decodeTime(id) {
    if (id.length !== TIME_LEN + RANDOM_LEN) {
        throw createError("malformed ulid");
    }
    var time = id.substr(0, TIME_LEN).split("").reverse().reduce(function (carry, char, index) {
        var encodingIndex = ENCODING.indexOf(char);
        if (encodingIndex === -1) {
            throw createError("invalid character found: " + char);
        }
        return carry += encodingIndex * Math.pow(ENCODING_LEN, index);
    }, 0);
    if (time > TIME_MAX) {
        throw createError("malformed ulid, timestamp too large");
    }
    return time;
}
function detectPrng() {
    var allowInsecure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var root = arguments[1];

    if (!root) {
        root = typeof window !== "undefined" ? window : null;
    }
    var browserCrypto = root && (root.crypto || root.msCrypto);
    if (browserCrypto) {
        return function () {
            var buffer = new Uint8Array(1);
            browserCrypto.getRandomValues(buffer);
            return buffer[0] / 0xff;
        };
    } else {
        try {
            var nodeCrypto = __webpack_require__(/*! crypto */ "./node_modules/ulid/stubs/crypto.js");
            return function () {
                return nodeCrypto.randomBytes(1).readUInt8() / 0xff;
            };
        } catch (e) {}
    }
    if (allowInsecure) {
        try {
            console.error("secure crypto unusable, falling back to insecure Math.random()!");
        } catch (e) {}
        return function () {
            return Math.random();
        };
    }
    throw createError("secure crypto unusable, insecure Math.random not allowed");
}
function factory(currPrng) {
    if (!currPrng) {
        currPrng = detectPrng();
    }
    return function ulid(seedTime) {
        if (isNaN(seedTime)) {
            seedTime = Date.now();
        }
        return encodeTime(seedTime, TIME_LEN) + encodeRandom(RANDOM_LEN, currPrng);
    };
}
function monotonicFactory(currPrng) {
    if (!currPrng) {
        currPrng = detectPrng();
    }
    var lastTime = 0;
    var lastRandom = void 0;
    return function ulid(seedTime) {
        if (isNaN(seedTime)) {
            seedTime = Date.now();
        }
        if (seedTime <= lastTime) {
            var incrementedRandom = lastRandom = incrementBase32(lastRandom);
            return encodeTime(lastTime, TIME_LEN) + incrementedRandom;
        }
        lastTime = seedTime;
        var newRandom = lastRandom = encodeRandom(RANDOM_LEN, currPrng);
        return encodeTime(seedTime, TIME_LEN) + newRandom;
    };
}
var ulid = factory();




/***/ }),

/***/ "./node_modules/ulid/stubs/crypto.js":
/*!*******************************************!*\
  !*** ./node_modules/ulid/stubs/crypto.js ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isBefore.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");


class Controller{
    #view;
    #model;

    #reload;

    static #priorityLabels = ["eliminate", "delegate", "schedule", "do"];

    constructor(view, model) {
        this.#view = view;
        this.#model = model;
    }

    init(){
        this.#model.init();   
        this.displayMenu();  
        this.displayAllTodos();
    }

    displayMenu(){
        const menu = document.querySelector("nav");
        const menuHandlers = {
            clickAllTodosLink: this.displayAllTodos.bind(this),
            clickTodayTodosLink: this.displayTodayTodos.bind(this),
            clickOverdueTodosLink: this.displayOverdueTodos.bind(this),
            clickProjectLink: this.displayTodosInProject.bind(this),
            clickAllProjectsLink: this.displayAllProjects.bind(this),
            clickAddLink: (() => {
                this.displayAllProjects();
                this.displayProjectAddModal();
            }).bind(this),
            clickDummyDataLink: (() => {
                this.#model.populateDummy();
                this.displayMenu();
                this.#reload();
            }).bind(this),
            clickClearLink: (() => {
                this.#model.clearData();
                this.init();
            }).bind(this),
        }

        const projectsData = [];
        this.#model.getAllProjects().forEach(
            project => projectsData.push(
                {
                    id: project.id,
                    name: project.name
                }
            )
        );

        this.#view.menu.render(menu, JSON.stringify(projectsData), menuHandlers);
    }

    displayProjectAddModal(){
        const content = document.querySelector("#content");
        const formData = {
            // now empty, but can be added new property
            // e.g., todo tasks without projects
        }
        const handlers = {
            clickCloseButton: this.#reload.bind(this),
            clickCancelButton: this.#reload.bind(this),
            clickSubmitButton: ((name) => this.submitProjectAddForm(name)).bind(this),
        }

        this.#view.projectAdd.render(
            content,
            JSON.stringify(formData),
            handlers
        )
        // This method opens a modal window, so #reload is not updated
    }

    displayProjectEditModal(projectId) {
        const content = document.querySelector("#content");
        const project = this.#model.getProjectById(projectId);

        const formData = {
            project: {
                id: projectId,
                name: project.name
            }
        }

        const handlers = {
            clickCloseButton: this.#reload.bind(this),
            clickCancelButton: this.#reload.bind(this),
            clickSubmitButton: (
                (projectId, name) => this.submitProjectEditForm(projectId, name)
            ).bind(this),
        }

        this.#view.projectEdit.render(content, JSON.stringify(formData), handlers);
    }


    displayProjectModal(projectId){
        const content = document.querySelector("#content");
        const project = this.#model.getProjectById(projectId);

        const formData = {
            project: {
                id: projectId,
                name: project.name
            }
        }

        const handlers = {
            clickCloseButton: this.#reload.bind(this),
            clickCancelButton: this.#reload.bind(this),
            clickEditButton: (projectId => {
                this.displayProjectEditModal(projectId)
            }).bind(this),
        }

        this.#view.project.render(content, JSON.stringify(formData), handlers);
    }

    displayTodoAddModal(){
        const content = document.querySelector("#content");
        const formData = {
            projects: []
        }
        this.#model.getAllProjects().forEach(
            project => formData.projects.push({
                id: project.id,
                name: project.name,
            })
        );

        const handlers = {
            clickCloseButton: this.#reload.bind(this),
            clickCancelButton: this.#reload.bind(this),
            clickSubmitButton: this.submitTodoAddForm.bind(this),
        }
        this.#view.todoAdd.render(
            content,
            JSON.stringify(formData),
            handlers
        );

        // This method opens a modal window, so #reload is not updated
    }

    displayTodoModal(todoId) {
        const content = document.querySelector("#content");
        const todo = this.#model.getTodoById(todoId);
        const project = this.#model.getProjectByTodoId(todoId);

        const formData = {
            projects: [],
            todo: {
                id: todo.id,
                title: todo.title,
                dueDate: todo.dueDate === null
                    ? ""
                    : (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(todo.dueDate, "yyyy-MM-dd"),
                priority: Controller.#priorityLabels[todo.priority],
                description: todo.description,
                done: todo.done,
                projectName: project === null ? "" : project.name,
                projectId: project === null ? "" : project.id
            }
        }
        this.#model.getAllProjects().forEach(
            project => formData.projects.push({
                id: project.id,
                name: project.name,
            })
        );
        const handlers = {
            clickCloseButton: this.#reload.bind(this),
            clickCancelButton: this.#reload.bind(this),
            clickEditButton: (todoId => {
                this.displayTodoEditModal(todoId)
            }).bind(this),
        }

        this.#view.todo.render(
            content,
            JSON.stringify(formData),
            handlers
        )

        // This method opens a modal window, so #reload is not updated
    }


    displayTodoEditModal(todoId){
        const content = document.querySelector("#content");
        const todo = this.#model.getTodoById(todoId);
        const project = this.#model.getProjectByTodoId(todoId);

        const formData = {
            projects: [],
            todo: {
                id: todo.id,
                title: todo.title,
                dueDate: todo.dueDate === null 
                    ? "" 
                    : (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(todo.dueDate, "yyyy-MM-dd"),
                priority: Controller.#priorityLabels[todo.priority],
                description: todo.description,
                done: todo.done,
                projectName: project === null? "" : project.name, 
                projectId: project === null ? "" : project.id
            }
        }
        this.#model.getAllProjects().forEach(
            project => formData.projects.push({
                id: project.id,
                name: project.name,
            })
        );
        const handlers = {
            clickCloseButton: this.#reload.bind(this),
            clickCancelButton: this.#reload.bind(this),
            clickSubmitButton: this.submitTodoEditForm.bind(this),
        }

        this.#view.todoEdit.render(
            content,
            JSON.stringify(formData),
            handlers
        )

        // This method opens a modal window, so #reload is not updated
    }

    displayAllProjects() {
        const tableData = {
            caption: "All Projects",
            rows: []
        }

        this.#model.getAllProjects().forEach(
            project => {
                const overdueTodos = this.#model.getOverdueTodosInProject(project.id);
                const progressRate = this.#model.getProjectProgressRate(project.id);
                tableData.rows.push(
                    {
                        id: project.id,
                        name: project.name,
                        todos: project.todos.length,
                        notDone: project.todos.filter(todo => !todo.done).length,
                        overdue: overdueTodos.length,
                        progress: `${Math.round(progressRate * 100) }%`,
                        progressRate: progressRate,
                    }
                )
            }
        )

        const tableHandlers = {
            clickNameLink: (
                projectID => this.displayProjectModal(projectID)
            ).bind(this),
            clickTodosLink: this.displayTodosInProject.bind(this),
            clickMultiDeleteButton: (
                projectIds => this.deleteSelectedProjects(projectIds)
            ).bind(this),
            clickNotDoneLink: this.displayNotDoneTodosInProject.bind(this),
            clickOverdueLink: this.displayOverdueTodosInProject.bind(this),
            clickAddButton: this.displayProjectAddModal.bind(this),
        }

        const content = document.querySelector("#content");
        
        this.#view.projects.render(
            content, 
            JSON.stringify(tableData), 
            tableHandlers
        );

        const menu = document.querySelector("nav");
        this.#view.menu.updateHighlight(menu, "project");

        this.#reload = this.displayAllProjects;
    }

    deleteSelectedProjects(projectIds) {
        for (let id of projectIds) {
            this.#model.deleteProjectById(id);
        }
        this.#reload();
    }

    displayTodosWithoutProject(){
        const todos = this.#model.getTodosWithoutProject();
        this.displayTodos(
            "ToDo tasks without project",
            todos,
            "Every task belongs to a project. Great job staying organized!"
        )
    }

    displayTodosInProject(projectId){
        if (projectId === "") {
            this.displayTodosWithoutProject();
            return;
        }
        const project = this.#model.getProjectById(projectId);
        this.displayTodos(`Project: ${project.name}`, project.todos)

        const menu = document.querySelector("nav");
        this.#view.menu.updateHighlight(menu, "project");
        this.#reload = () => this.displayTodosInProject(projectId)
    }


    displayOverdueTodosInProject(projectId) {
        const project = this.#model.getProjectById(projectId);
        this.displaySearchedTodos(
            `Project: ${project.name} / Overdue Tasks`,
            todo => (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isBefore)(todo.dueDate, new Date()) && !todo.done,
            projectId,
            "No Overdue Tasks. Great Job!",
        )
        this.#reload = () => this.displayOverdueTodosInProject(projectId);
    }

    displayNotDoneTodosInProject(projectId) {
        const project = this.#model.getProjectById(projectId);
        this.displaySearchedTodos(
            `Project: ${project.name} / Unfinished Tasks`,
            todo => !todo.done,
            projectId,
            "No unfinished tasks. Yay!"
        )
        this.#reload = () => this.displayNotDoneTodosInProject(projectId);
    }

    displayDoneTodosInProject(projectId){
        const project = this.#model.getProjectById(projectId);
        this.displaySearchedTodos(
            `Project: ${project.name} / Finished Tasks`,
            todo => todo.done,
            projectId
        )
        this.#reload = () => this.displayDoneTodosInProject(projectId);
    }

    displayTodayTodos(){
        const todos = this.#model.searchTodos(
            todo => (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isToday)(todo.dueDate)
        );
        this.displayTodos(
            `ToDo Tasks Due Today (${(0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(new Date(), "yyyy-MM-dd")})`,
             todos,
            "No tasks found. What a beautiful day."
        );

        const menu = document.querySelector("nav");
        this.#view.menu.updateHighlight(menu, "today");

        this.#reload = this.displayTodayTodos;
    }

    displayOverdueTodos() {
        const today = new Date();
        const todos = this.#model.searchTodos(
            todo => (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isBefore)(todo.dueDate, today) && !todo.done
        );
        this.displayTodos("Overdue Todo Tasks", todos, "No overdue tasks. Everything is on schedule.");

        const menu = document.querySelector("nav");
        this.#view.menu.updateHighlight(menu, "overdue");

        this.#reload = this.displayOverdueTodos;
    }

    displaySearchedTodos(caption, filter, projectId=null, emptyMessage="") {
        let todos = this.#model.searchTodos(filter);
        if (projectId !== null) {
            todos = todos.filter(
                todo => {
                    const proj = this.#model.getProjectByTodoId(todo.id);
                    return proj.id === projectId;
                }
            );
        }
        this.displayTodos(caption, todos, emptyMessage);
        this.#reload = () => this.displaySearchedTodos(
            caption, 
            filter, 
            projectId,
            emptyMessage
        );
    }

    displayTodos(caption, todos, emptyMessage=""){
        const content = document.querySelector("#content");
        content.textContent = "";

        const tableData = {
            caption: caption,
            rows: [],
            emptyMessage: emptyMessage,
        };

        todos.map(
            todo => {
                const proj = this.#model.getProjectByTodoId(todo.id);
                const dueDateString = todo.dueDate === null 
                    ? ""
                    : (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(new Date(todo.dueDate), "yyyy-MM-dd")
                tableData.rows.push(
                    {
                        id: todo.id,
                        title: todo.title,
                        dueDate: dueDateString,
                        priority: Controller.#priorityLabels[todo.priority],
                        done: todo.done,
                        project: proj === null ? "" : proj.name,
                        projectId: proj === null ? "" : proj.id,
                    }
                );
            }
        );

        const todosHandlers = {
            clickMultiDeleteButton: (
                todoIds => this.deleteSelectedTodos(todoIds)
            ).bind(this),
            clickAddButton: this.displayTodoAddModal.bind(this),
            clickTitleLink: this.displayTodoModal.bind(this),
            clickProjectLink: (
                (projectId) => this.displayTodosInProject(projectId)
            ).bind(this),
            clickStatusButton: ((todoId) => {
                // this.toggleTodoStatus(button, id);
                this.changeTodoStatus(todoId);
                this.#reload();
            }).bind(this),

        }

        this.#view.todos.render(content, JSON.stringify(tableData), todosHandlers);
    }

    displayAllTodos(){
        const content = document.querySelector("#content");
        content.textContent = "";

        const todos = this.#model.getAllTodos();
        this.displayTodos("All ToDo Tasks", todos);

        const menu = document.querySelector("nav");
        this.#view.menu.updateHighlight(menu, "all");

        this.#reload = this.displayAllTodos;
    }

    deleteSelectedTodos(todoIds){
        for (let id of todoIds) {
            this.#model.deleteTodoById(id);
        }
        this.#reload();
    }

    // For button status component
    toggleTodoStatus(button, todoId){
        this.#model.toggleTodoDoneByID(todoId);
        this.#view.statusButton.toggle(button);
    }

    // For checkbox status component
    changeTodoStatus(todoId) {
        this.#model.toggleTodoDoneByID(todoId);
    }

    submitProjectEditForm(projectId, name) {
        // Data Validation
        // (Should usually pass thanks to HTML form validation)
        if (name.length > 50) {
            alert("The project name is too long. Keep it under 50 characters.");
            return;
        }

        // Update project / Validation against schema
        try {
            this.#model.updateProjectById(projectId, name);
        } catch (err) {
            if (err instanceof this.#model.ValidationError) {
                // Can be more specific using error message.
                alert("Invalid data submitted: project not updated.");
                return;
            }
        }
        this.#reload();
    }

    submitProjectAddForm(name){
        if (name.length > 50) {
            alert("The project name is too long. Keep it under 50 characters.");
            return;
        }

        // Create new Todo / Validation against schema
        let project;
        try {
            project = this.#model.createProject(name);
        } catch (err) {
            if (err instanceof this.#model.ValidationError) {
                // Can be more specific using error message.
                alert("Invalid data submitted: no project was created.");
                return;
            }
        }

        this.#reload();
    }

    submitTodoEditForm(id, title, dueDateString, 
        priorityLabel, description, projectId, doneString
    ){
        const priority = Controller.#priorityLabels.indexOf(priorityLabel);
        const dueDate = dueDateString === "" ? null : new Date(dueDateString);
        const done = JSON.parse(doneString);

        // Data Validation
        // (Should usually pass thanks to HTML form validation)

        // New task's dueDate should be today or later
        // (This is not in schema because tasks can be overdue)
        if (dueDate !== null && !(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isToday)(dueDate) && (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isBefore)(dueDate, new Date())) {
            alert("The due date must be today or later.");
            return;
        }

        if (title.length > 50) {
            alert("The task title is too long. Keep it under 50 characters.");
            return;
        }

        // Update Todo / Validation against schema
        try {
            this.#model.updateTodoByID(id, title, description, dueDate, priority, done);
        } catch (err) {
            if (err instanceof this.#model.ValidationError) {
                // Can be more specific using error message.
                alert("Invalid data submitted: task not updated.");
                return;
            }
        }

        const project = this.#model.getProjectByTodoId(id);

        // Update project
        if (project !== null) {
            this.#model.deleteTodoFromCurrentProject(id);
        }
        if (projectId !== "") {
            this.#model.addTodoToProject(id, projectId);
        }
    

        this.#reload();
    }

    submitTodoAddForm(title, dueDateString, priorityLabel, description, projectId){
        const priority = Controller.#priorityLabels.indexOf(priorityLabel);
        const dueDate = dueDateString === "" ? null : new Date(dueDateString);

        // Data Validation
        // (Should usually pass thanks to HTML form validation)

        // New task's dueDate should be today or later
        // (This is not in schema because tasks can be overdue)
        if (dueDate !== null && !(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isToday)(dueDate) && (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isBefore)(dueDate, new Date())) {
            alert("The due date must be today or later.");
            return;
        }

        if (title.length > 50) {
            alert("The task title is too long. Keep it under 50 characters.");
            return;
        }

        // Create new Todo / Validation against schema
        let todo;
        try {
            todo = this.#model.createTodo(title, description, dueDate, priority, false);
        } catch(err) {
            if (err instanceof this.#model.ValidationError) {
                // Can be more specific using error message.
                alert("Invalid data submitted: no task was created.");
                return;
            }
        }

        // Add to project
        if (projectId !== "") {
            this.#model.addTodoToProject(todo.id, projectId);
        }

        this.#reload();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidationError: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.ValidationError),
/* harmony export */   addTodoToProject: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.addTodoToProject),
/* harmony export */   clearData: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.clearData),
/* harmony export */   createProject: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.createProject),
/* harmony export */   createTodo: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.createTodo),
/* harmony export */   deleteProjectById: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.deleteProjectById),
/* harmony export */   deleteTodoById: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodoById),
/* harmony export */   deleteTodoFromCurrentProject: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodoFromCurrentProject),
/* harmony export */   deleteTodoFromProject: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodoFromProject),
/* harmony export */   getAllProjects: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.getAllProjects),
/* harmony export */   getAllTodos: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.getAllTodos),
/* harmony export */   getDefaultProject: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultProject),
/* harmony export */   getOverdueTodosInProject: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.getOverdueTodosInProject),
/* harmony export */   getProjectById: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.getProjectById),
/* harmony export */   getProjectByName: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.getProjectByName),
/* harmony export */   getProjectByTodoId: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.getProjectByTodoId),
/* harmony export */   getProjectProgressRate: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.getProjectProgressRate),
/* harmony export */   getTodoById: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.getTodoById),
/* harmony export */   getTodosWithoutProject: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.getTodosWithoutProject),
/* harmony export */   init: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.init),
/* harmony export */   isDefaultProject: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.isDefaultProject),
/* harmony export */   populateDummy: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.populateDummy),
/* harmony export */   searchProjects: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.searchProjects),
/* harmony export */   searchTodos: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.searchTodos),
/* harmony export */   toggleTodoDoneByID: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.toggleTodoDoneByID),
/* harmony export */   updateProjectById: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.updateProjectById),
/* harmony export */   updateTodoByID: () => (/* reexport safe */ _models_service_js__WEBPACK_IMPORTED_MODULE_0__.updateTodoByID)
/* harmony export */ });
/* harmony import */ var _models_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/service.js */ "./src/models/service.js");


/***/ }),

/***/ "./src/models/project.js":
/*!*******************************!*\
  !*** ./src/models/project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
    #id;
    #todos;
    #name;
    constructor(id, name) {
        this.#id = id;
        this.#name = name;
        this.#todos = [];
    }
    get id(){
        return this.#id;
    }
    get todos(){
        return this.#todos;
    }
    get name() {
        return this.#name;
    }
    set name(newName){
        this.#name = newName;
    }

    addTodo(todo){
        if (!this.#todos.includes(todo)) {
            this.#todos.push(todo);   
        }
    }

    deleteTodo(todo) {
        const index = this.#todos.indexOf(todo);
        if (index !== -1) {
            this.#todos.splice(index, 1);
        }
    }

    static #schema = {
        id: val => val !== undefined
            && val !== null
            && typeof (val) === 'string',
        name: val => val !== undefined
            && val !== null
            && typeof (val) === 'string'
            && val.length > 0,
    };

    static get schema(){
        return this.#schema;
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/models/repository.js":
/*!**********************************!*\
  !*** ./src/models/repository.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clear: () => (/* binding */ clear),
/* harmony export */   getObj: () => (/* binding */ getObj),
/* harmony export */   isSaved: () => (/* binding */ isSaved),
/* harmony export */   saveObj: () => (/* binding */ saveObj)
/* harmony export */ });
function saveObj(key, obj){
    localStorage.setItem(key, JSON.stringify(obj));
}

function getObj(key) {
    return JSON.parse(localStorage.getItem(key));
}

function clear() {
    localStorage.clear();
}

function isSaved(key){
    return localStorage.hasOwnProperty(key);
}



/***/ }),

/***/ "./src/models/service.js":
/*!*******************************!*\
  !*** ./src/models/service.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidationError: () => (/* binding */ ValidationError),
/* harmony export */   addTodoToProject: () => (/* binding */ addTodoToProject),
/* harmony export */   clearData: () => (/* binding */ clearData),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createTodo: () => (/* binding */ createTodo),
/* harmony export */   deleteProjectById: () => (/* binding */ deleteProjectById),
/* harmony export */   deleteTodoById: () => (/* binding */ deleteTodoById),
/* harmony export */   deleteTodoFromCurrentProject: () => (/* binding */ deleteTodoFromCurrentProject),
/* harmony export */   deleteTodoFromProject: () => (/* binding */ deleteTodoFromProject),
/* harmony export */   getAllProjects: () => (/* binding */ getAllProjects),
/* harmony export */   getAllTodos: () => (/* binding */ getAllTodos),
/* harmony export */   getDefaultProject: () => (/* binding */ getDefaultProject),
/* harmony export */   getOverdueTodosInProject: () => (/* binding */ getOverdueTodosInProject),
/* harmony export */   getProjectById: () => (/* binding */ getProjectById),
/* harmony export */   getProjectByName: () => (/* binding */ getProjectByName),
/* harmony export */   getProjectByTodoId: () => (/* binding */ getProjectByTodoId),
/* harmony export */   getProjectProgressRate: () => (/* binding */ getProjectProgressRate),
/* harmony export */   getTodoById: () => (/* binding */ getTodoById),
/* harmony export */   getTodosWithoutProject: () => (/* binding */ getTodosWithoutProject),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   isDefaultProject: () => (/* binding */ isDefaultProject),
/* harmony export */   populateDummy: () => (/* binding */ populateDummy),
/* harmony export */   searchProjects: () => (/* binding */ searchProjects),
/* harmony export */   searchTodos: () => (/* binding */ searchTodos),
/* harmony export */   toggleTodoDoneByID: () => (/* binding */ toggleTodoDoneByID),
/* harmony export */   updateProjectById: () => (/* binding */ updateProjectById),
/* harmony export */   updateTodoByID: () => (/* binding */ updateTodoByID)
/* harmony export */ });
/* harmony import */ var ulid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ulid */ "./node_modules/ulid/dist/index.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isBefore.mjs");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/models/todo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/models/project.js");
/* harmony import */ var _repository_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repository.js */ "./src/models/repository.js");
/* harmony import */ var _dummy_todos_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dummy-todos.json */ "./src/dummy-todos.json");







let todos = {};
let projects = {};
let defaultProject;

function init() {
    if (isRepository()) {
        retrieveSavedData();
    } else {
        defaultProject = createProject("default");
        saveTodos();
        saveProjects();
        saveDefaultProject();
    }
}

function createTodo(title, description, dueDate, priority, done, id=null) {
    if (id === null) {
        id = getId();
    }
    const input = { id, title, description, dueDate, priority, done };
    const validated = validate(input, _todo_js__WEBPACK_IMPORTED_MODULE_1__["default"].schema);
    const invalidKeys = Object.entries(validated)
        .filter(([key, val]) => !val)
        .map(([key, val]) => key);
    if (invalidKeys.length > 0) {
        throw new ValidationError(invalidKeys);
    } else {
        const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_1__["default"](id, title, description, dueDate, priority, done);
        todos[id] = todo;
        defaultProject.addTodo(todo);
        saveTodos();
        saveProjects();
        return todo;
    }
}

function getTodoById(id) {
    return todos[id];
}

function updateTodoByID(id, title, description, dueDate, priority, done) {
    const todo = getTodoById(id);
    const input = { id, title, description, dueDate, priority, done };
    const validated = validate(input, _todo_js__WEBPACK_IMPORTED_MODULE_1__["default"].schema);
    const invalidKeys = Object.entries(validated)
        .filter(([key, val]) => !val)
        .map(([key, val]) => key)
    if (invalidKeys.length > 0) {
        throw new ValidationError(invalidKeys);
    } else {
        todo.setAll(title, description, dueDate, priority, done);
        saveTodos();
    }
}

function createProject(name, id=null) {
    if (id === null) {
        id = getId();
    }
    const input = { id, name };
    const validated = validate(input, _project_js__WEBPACK_IMPORTED_MODULE_2__["default"].schema);
    const invalidKeys = Object.entries(validated)
        .filter(([key, val]) => !val)
        .map(([key, val]) => key)
    if (invalidKeys.length > 0) {
        throw new ValidationError(invalidKeys);
    } else {
        const project = new _project_js__WEBPACK_IMPORTED_MODULE_2__["default"](id, name);
        projects[id] = project;
        saveProjects();
        return project;
    }
}

function getProjectById(id) {
    return projects[id];
}

function addTodoToProject(todoId, projectId) {
    const project = getProjectById(projectId);
    const todo = getTodoById(todoId);
    if (project === undefined || todo === undefined) {
        throw new Error("Object not found.");
    }
    project.addTodo(todo);
    saveProjects();
}

function isDefaultProject(projectId) {
    return getProjectById(projectId) === defaultProject;
}

function deleteTodoFromProject(todoId, projectId) {
    if (isDefaultProject(projectId)) {
        deleteTodo(todoId);
        return;
    }
    const project = getProjectById(projectId);
    const todo = getTodoById(todoId);
    if (project === undefined || todo === undefined) {
        throw new Error("Object not found.");
    }
    project.deleteTodo(todo);
    saveProjects();
}

function deleteTodoFromCurrentProject(todoId) {
    const project = getProjectByTodoId(todoId);
    deleteTodoFromProject(todoId, project.id);
}

function updateProjectById(id, name) {
    const project = getProjectById(id);
    const input = { id, name };
    const validated = validate(input, _project_js__WEBPACK_IMPORTED_MODULE_2__["default"].schema);
    const invalidKeys = Object.entries(validated)
        .filter(([key, val]) => !val)
        .map(([key, val]) => key);
    if (invalidKeys.length > 0) {
        throw new ValidationError(invalidKeys);
    } else {
        project.name = name;
        saveProjects();
    }
}

function deleteProjectById(projectID) {
    delete (projects[projectID]);
    saveProjects();
}

function deleteTodoById(todoId) {
    const todo = getTodoById(todoId);
    Object.values(projects).forEach(project => {
        project.deleteTodo(todo);
    });
    delete (todos[todoId]);
    saveTodos();
    saveProjects();
}

function getAllTodos() {
    return defaultProject.todos;
}

function getAllProjects(excludeDefault = true) {
    if (excludeDefault) {
        return Object.values(projects)
            .filter(
                project => project !== defaultProject
            );
    } else {
        return Object.values(projects);
    }
}

function searchTodos(filterFunc) {
    return getAllTodos().filter(
        todo => filterFunc(todo)
    );
}

function searchProjects(filterFunc, excludeDefault = true) {
    getAllProjects(excludeDefault).filter(
        project => filterFunc(project)
    )
}

function getProjectByTodoId(id, ignoreDefault = true) {
    const todo = getTodoById(id);
    for (let project of Object.values(projects)) {
        if (
            project.todos.includes(todo)
            && (!ignoreDefault || project !== defaultProject)
        ) {
            return project;
        }
    }
    return null;
}

function getTodosWithoutProject(){
    const without = [];
    for (let id in todos) {
        if (getProjectByTodoId(id) === null) {
            without.push(todos[id])
        }
    }
    return without;
}

function getOverdueTodosInProject(id) {
    const project = getProjectById(id);
    return project.todos.filter(
        todo => (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.isBefore)(todo.dueDate, new Date()) && !todo.done
    );
}

function getProjectProgressRate(id) {
    const project = getProjectById(id);
    const total = project.todos.length;
    if (total === 0) {
        return 0;
    }
    const done = project.todos.filter(todo => todo.done).length;
    return done / total;
}

function toggleTodoDoneByID(id) {
    const todo = getTodoById(id);
    todo.done = !todo.done;
    saveTodos();
}

function isRepository(){
    return _repository_js__WEBPACK_IMPORTED_MODULE_3__.isSaved("todos") 
        && _repository_js__WEBPACK_IMPORTED_MODULE_3__.isSaved("projects")
        && _repository_js__WEBPACK_IMPORTED_MODULE_3__.isSaved("defaultProject")
}

function saveTodos(){
    const todosData = [];
    Object.values(todos).forEach(
        todo => todosData.push({
            id: todo.id,
            title: todo.title,
            description: todo.description,
            dueDate: todo.dueDate,
            done: todo.done,
            priority: todo.priority,
        })
    )
    _repository_js__WEBPACK_IMPORTED_MODULE_3__.saveObj("todos", todosData);
}

function saveProjects(){
    const projectData = [];
    Object.values(projects).forEach(
        project => projectData.push({
            id: project.id,
            name: project.name,
            todos: project.todos.map(todos => todos.id)
        })
    )
    _repository_js__WEBPACK_IMPORTED_MODULE_3__.saveObj("projects", projectData);
}

function saveDefaultProject() {
    _repository_js__WEBPACK_IMPORTED_MODULE_3__.saveObj("defaultProject", {
        id: defaultProject.id,
        name: defaultProject.name
    });
}

function retrieveSavedData(){
    const todosData = _repository_js__WEBPACK_IMPORTED_MODULE_3__.getObj("todos");
    const projectsData = _repository_js__WEBPACK_IMPORTED_MODULE_3__.getObj("projects");
    const defaultProjectData = _repository_js__WEBPACK_IMPORTED_MODULE_3__.getObj("defaultProject");

    // Create default project first because createTodo populates its todos 
    defaultProject = createProject(defaultProjectData.name, defaultProjectData.id);  
    
    todosData.forEach(
        data => createTodo(
            data.title, 
            data.description, 
            new Date(data.dueDate), 
            data.priority, 
            data.done,
            data.id
        )
    );

    projectsData
    .filter(data => data.id !== defaultProject.id)
    .forEach(
        data => {
            createProject(data.name, data.id);
            data.todos.forEach(
                todoId => addTodoToProject(todoId, data.id)
            );
        }
    );
}

function getProjectByName(name){
    return Object.values(projects).find(
        project => project.name === name
    )
}

function populateDummy() {
    clearData();
    init();
    _dummy_todos_json__WEBPACK_IMPORTED_MODULE_4__.forEach(
        todo => {
            const newTodo = createTodo(
                todo.title,
                todo.description,
                (new Date(todo.dueDate)),
                todo.priority,
                todo.done
            );
            let newProject = Object.values(projects).find(
                project => project.name === todo.project
            )
            if (newProject === undefined) {
                newProject = createProject(todo.project);
            }
            addTodoToProject(newTodo.id, newProject.id);
        }
    );
}

function clearData(){
    todos = {};
    projects = {};
    defaultProject = null;
    _repository_js__WEBPACK_IMPORTED_MODULE_3__.clear();
}

function getId() {
    return (0,ulid__WEBPACK_IMPORTED_MODULE_0__.ulid)();
}

function validate(obj, schema) {
    const validated = {};
    for (const [key, value] of Object.entries(obj)) {
        validated[key] = schema[key](value);
    }
    return validated;


}

function getDefaultProject() {
    return defaultProject;
}

class ValidationError extends Error {
    constructor(keys) {
        super(`Invalid key(s): ${JSON.stringify(keys)}`);
    }
}




/***/ }),

/***/ "./src/models/todo.js":
/*!****************************!*\
  !*** ./src/models/todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Todo {
    #id;
    #title;
    #description;
    #dueDate;
    #priority;
    #done;
    constructor(id, title, description, dueDate, priority, done) {
        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#done = done;
    }
    get id() {
        // id is immutable and has no setter
        return this.#id;
    }
    get title(){
        return this.#title;
    }
    set title(newTitle){
        this.#title = newTitle;
    }
    get description() {
        return this.#description;
    }
    set description(newDescription) {
        this.#description = newDescription;
    }
    get dueDate() {
        return this.#dueDate;
    } 
    set dueDate(newDueDate) {
        this.#dueDate = newDueDate;
    }
    get priority() {
        return this.#priority;
    }
    set priority(newPriority) {
        this.#priority = newPriority;
    } 
    get done() {
        return this.#done;
    }
    set done(newDone) {
        this.#done = newDone;
    }

    setAll(title, description, dueDate, priority, done){
        // id is immutable and has no setter
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#done = done;
    }

    static #schema = {
        id: val => val !== null 
            && val !== undefined 
            && typeof (val) === 'string',
        title: val => val !== null 
            && val !== undefined 
            && typeof (val) === 'string'
            && val.length > 0,
        description: val => val !== null 
            && val !== undefined
            && typeof (val) === 'string',
        dueDate: val => val !== undefined
            && (Date.prototype.isPrototypeOf(val) || val === null)
            ,
        priority: val => val !== null
            && val !== undefined
            && typeof(val) === "number"
            && [3, 2, 1, 0].includes(val),
        done: val => val !== null
            && val !== undefined
            && typeof(val) === "boolean",
    }

    static get schema(){
        return Todo.#schema;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/tools/parse-html.js":
/*!*********************************!*\
  !*** ./src/tools/parse-html.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function parseHtml(htmlText) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    return doc.body.firstElementChild;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseHtml);

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu: () => (/* reexport module object */ _views_menu_view__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   project: () => (/* reexport module object */ _views_project_view__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   projectAdd: () => (/* reexport module object */ _views_project_add_view__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   projectEdit: () => (/* reexport module object */ _views_project_edit_view__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   projects: () => (/* reexport module object */ _views_projects_view__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   statusButton: () => (/* reexport module object */ _views_todo_status_button_view__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   todo: () => (/* reexport module object */ _views_todo_view__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   todoAdd: () => (/* reexport module object */ _views_todo_add_view__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   todoEdit: () => (/* reexport module object */ _views_todo_edit_view__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   todos: () => (/* reexport module object */ _views_todos_view__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   todosTable: () => (/* reexport module object */ _views_todos_table_view__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   todosTableRow: () => (/* reexport module object */ _views_todos_table_row_view__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _views_todos_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/todos-view */ "./src/views/todos-view.js");
/* harmony import */ var _views_todos_table_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/todos-table-view */ "./src/views/todos-table-view.js");
/* harmony import */ var _views_todos_table_row_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/todos-table-row-view */ "./src/views/todos-table-row-view.js");
/* harmony import */ var _views_todo_status_button_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/todo-status-button-view */ "./src/views/todo-status-button-view.js");
/* harmony import */ var _views_menu_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/menu-view */ "./src/views/menu-view.js");
/* harmony import */ var _views_projects_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/projects-view */ "./src/views/projects-view.js");
/* harmony import */ var _views_todo_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/todo-view */ "./src/views/todo-view.js");
/* harmony import */ var _views_todo_add_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/todo-add-view */ "./src/views/todo-add-view.js");
/* harmony import */ var _views_todo_edit_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/todo-edit-view */ "./src/views/todo-edit-view.js");
/* harmony import */ var _views_project_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/project-view */ "./src/views/project-view.js");
/* harmony import */ var _views_project_add_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/project-add-view */ "./src/views/project-add-view.js");
/* harmony import */ var _views_project_edit_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/project-edit-view */ "./src/views/project-edit-view.js");















/***/ }),

/***/ "./src/views/menu-projects-view.js":
/*!*****************************************!*\
  !*** ./src/views/menu-projects-view.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _tools_parse_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/parse-html.js */ "./src/tools/parse-html.js");


function render(menu, projectsData, handlers) {
    menu.textContent = "";
    const projects = JSON.parse(projectsData);
    projects.forEach(
        project => {
            const link = document.createElement("a");
            link.classList.add("link-project");
            link.textContent = project.name;
            link.addEventListener(
                "click",
                () => {
                    handlers.clickProjectLink(project.id)
                }
            )
            menu.appendChild(link);
        }
    );

    menu.appendChild((0,_tools_parse_html_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`
        <a id="link-projects-all" class="separate" href="#">View all</a>
    `));
    menu.appendChild((0,_tools_parse_html_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`
        <a id="add-project" class="separate" href="#">Add...</a>
    `));
    
    menu.querySelector("a#link-projects-all")
        .addEventListener(
            "click",
            handlers.clickAllProjectsLink
        );

    menu.querySelector("a#add-project")
        .addEventListener(
            "click",
            handlers.clickAddLink
        );
}

function update(menu, projectsData){

}



/***/ }),

/***/ "./src/views/menu-view.js":
/*!********************************!*\
  !*** ./src/views/menu-view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   update: () => (/* binding */ update),
/* harmony export */   updateHighlight: () => (/* binding */ updateHighlight)
/* harmony export */ });
/* harmony import */ var _menu_projects_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-projects-view.js */ "./src/views/menu-projects-view.js");


function render(menu, projectsData, handlers) {
    menu.querySelector("#link-todos-all")
        .addEventListener(
            "click",
            handlers.clickAllTodosLink
        );

    menu.querySelector("#link-todos-today")
        .addEventListener(
            "click",
            handlers.clickTodayTodosLink
        );
    
    menu.querySelector("#link-todos-overdue")
        .addEventListener(
            "click",
            handlers.clickOverdueTodosLink
        );

    const projectMenu = menu.querySelector("#project-menu");
    _menu_projects_view_js__WEBPACK_IMPORTED_MODULE_0__.render(projectMenu, projectsData, handlers);    

    menu.querySelector("#link-dummy-data")
        .addEventListener(
            "click",
            handlers.clickDummyDataLink
        );

    menu.querySelector("#link-clear")
        .addEventListener(
            "click",
            handlers.clickClearLink
        );
}

function update(menu, projectsData) {
    const projectMenu = menu.querySelector("#project-menu");
    _menu_projects_view_js__WEBPACK_IMPORTED_MODULE_0__.update(projectMenu, projectsData);
}

function updateHighlight(menu, menuClass){
    menu.querySelectorAll("button").forEach(
        button => {
            if (button.classList.contains(menuClass)) {
                button.classList.add("selected");
            } else {
                button.classList.remove("selected");
            }
        }
    );
}



/***/ }),

/***/ "./src/views/modal-view.js":
/*!*********************************!*\
  !*** ./src/views/modal-view.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _tools_parse_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/parse-html */ "./src/tools/parse-html.js");
/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/close.svg */ "./src/images/close.svg");



function render(dialog, title, modalHandlers) {
    const closeButton = (0,_tools_parse_html__WEBPACK_IMPORTED_MODULE_0__["default"])(`
        <button type="button" class="close">
            <img src="${_images_close_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="Close">
        </button>
    `);
    const h1 = (0,_tools_parse_html__WEBPACK_IMPORTED_MODULE_0__["default"])(`<h1>${title}</h1>`);

    closeButton.addEventListener("click", modalHandlers.clickCloseButton);

    dialog.appendChild(closeButton);
    dialog.appendChild(h1);
    dialog.showModal();
}

function update(content, title) {
}



/***/ }),

/***/ "./src/views/project-add-view.js":
/*!***************************************!*\
  !*** ./src/views/project-add-view.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _modal_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-view */ "./src/views/modal-view.js");
/* harmony import */ var _tools_parse_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/parse-html */ "./src/tools/parse-html.js");



const template = `
    <form name="projectAdd">
        <label for="name">
            <span>Name<span class="required">*</span></span>
            <input type="text" name="name" id="name" 
                required 
                maxlength="50"
                placeholder="What's your project? (Required, keep it under 50 characters)">
        </label>
        <div class="button-wrapper">
            <button type="button" class="cancel">Cancel</button>
            <button type="submit">Submit</button>
        </div>
    </form>
`

function render(content, formJson, formHandlers) {
    let dialog = content.querySelector("dialog");
    if (dialog !== null) {
        dialog.textContent = "";
    } else {
        dialog = document.createElement("dialog");
        content.appendChild(dialog);
    }
    
    const formData = JSON.parse(formJson); // For future new features
    content.appendChild(dialog)
    _modal_view__WEBPACK_IMPORTED_MODULE_0__.render(dialog, "New Project", formHandlers);

    const form = (0,_tools_parse_html__WEBPACK_IMPORTED_MODULE_1__["default"])(template);
    dialog.appendChild(form);

    const cancelButton = form.querySelector(".cancel");
    cancelButton.addEventListener(
        "click",
        event => {
            event.preventDefault();
            formHandlers.clickCancelButton();
        }
    );

    form.addEventListener(
        "submit",
        (event) => {
            event.preventDefault();
            formHandlers.clickSubmitButton(form.name.value);
        }
    )

    


}



/***/ }),

/***/ "./src/views/project-edit-view.js":
/*!****************************************!*\
  !*** ./src/views/project-edit-view.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _modal_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-view */ "./src/views/modal-view.js");
/* harmony import */ var _tools_parse_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/parse-html */ "./src/tools/parse-html.js");



function render(content, formJson, formHandlers) {
    let dialog = content.querySelector("dialog");
    if (dialog !== null) {
        dialog.textContent = "";
    } else {
        dialog = document.createElement("dialog");
        content.appendChild(dialog);
    }
    const formData = JSON.parse(formJson);
    _modal_view__WEBPACK_IMPORTED_MODULE_0__.render(dialog, "New Project", formHandlers);

    const form = (0,_tools_parse_html__WEBPACK_IMPORTED_MODULE_1__["default"])(`
        <form name="projectEdit">
            <label for="name">
                <span>Name<span class="required">*</span></span>
                <input type="text" name="name" id="name" 
                    required 
                    maxlength="50"
                    placeholder="What's your project? (Required, keep it under 50 characters)"
                    value="${formData.project.name}"
                >
            </label>
            <div class="button-wrapper">
                <button type="button" class="cancel">Cancel</button>
                <button type="submit">Submit</button>
            </div>
       </form>`);
    dialog.appendChild(form);

    const cancelButton = form.querySelector(".cancel");
    cancelButton.addEventListener(
        "click",
        event => {
            event.preventDefault();
            formHandlers.clickCancelButton();
        }
    );

    form.addEventListener(
        "submit",
        (event) => {
            event.preventDefault();
            formHandlers.clickSubmitButton(formData.project.id, form.name.value);
        }
    )
}



/***/ }),

/***/ "./src/views/project-progress-bar-view.js":
/*!************************************************!*\
  !*** ./src/views/project-progress-bar-view.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
function render(parent, rate, step = 5, blockRatio = 0.6, color = "black") {
    const percent = Math.round(rate * 100);
    const blockN = Math.floor(percent / step);
    const blockWidth = step * blockRatio;

    // createElement does not work with SVG elements. instead:
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    svg.setAttribute("viewBox", "0, 0, 100, 25");
    svg.setAttribute("fill", color);
    svg.setAttribute("aria-hidden", "true");
    parent.appendChild(svg);

    for (let i = 0; i < blockN; i++) {
        const block = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        block.setAttribute("width", blockWidth);
        block.setAttribute("height", 25);
        block.setAttribute("x", i * step);
        block.setAttribute("y", 0);
        svg.appendChild(block);
    }
}






/***/ }),

/***/ "./src/views/project-view.js":
/*!***********************************!*\
  !*** ./src/views/project-view.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _modal_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-view */ "./src/views/modal-view.js");
/* harmony import */ var _tools_parse_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/parse-html */ "./src/tools/parse-html.js");




function render(content, formJson, formHandlers) {
    let dialog = content.querySelector("dialog");
    if (dialog !== null) {
        dialog.textContent = "";
    } else {
        dialog = document.createElement("dialog");
        content.appendChild(dialog);
    }

    const formData = JSON.parse(formJson);
    _modal_view__WEBPACK_IMPORTED_MODULE_0__.render(dialog, "Project", formHandlers);

    dialog.appendChild((0,_tools_parse_html__WEBPACK_IMPORTED_MODULE_1__["default"])(`
        <div class="project single-display">
            <div class="name row">
                <div class="label">
                    Name
                </div>
                <div class="data">${formData.project.name}</div>
            </div>
            <form>
                <button class="cancel">Cancel</button>
                <button class="edit">Edit</button>
            </form>
        </div>
    `));

    dialog.querySelector("button.cancel").addEventListener(
        "click",
        event => {
            event.preventDefault();
            formHandlers.clickCancelButton();
        }
    );

    dialog.querySelector("button.edit").addEventListener(
        "click",
        (event) => {
            event.preventDefault();
            formHandlers.clickEditButton(formData.project.id);
        }
    );
}



/***/ }),

/***/ "./src/views/projects-table-row-view.js":
/*!**********************************************!*\
  !*** ./src/views/projects-table-row-view.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _table_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-row */ "./src/views/table-row.js");
/* harmony import */ var _project_progress_bar_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-progress-bar-view */ "./src/views/project-progress-bar-view.js");



function render(tr, rowJson, rowHandlers) {
    const row = JSON.parse(rowJson);

    const cellsData = [
        {
            tag: "td",
            classes: ["select"],
            attribute: {},
            text: null,
            contentHtml: `<input type="checkbox" name="select" value="${row.id}">`
        },
        {
            tag: "td",
            classes: ["name", "title"],
            attribute: { scope: "row" },
            text: null,
            contentHtml: `<a data-projectId="${row.id}">${row.name}</a>`
        },
        {
            tag: "td",
            classes: ["todos",],
            attribute: {},
            text: null,
            contentHtml: `<a data-projectId="${row.id}">${row.todos}</a>`
        },
        {
            tag: "td",
            classes: ["not-done",],
            attribute: {},
            text: null,
            contentHtml: `<a data-projectId="${row.id}">${row.notDone}</a>`
        },
        {
            tag: "td",
            classes: ["overdue",],
            attribute: {},
            text: null,
            contentHtml: `<a data-projectId="${row.id}">${row.overdue}</a>`
        },
        {
            tag: "td",
            classes: ["progress",],
            attribute: {},
            text: row.progress,
            contentHtml: null,
        },
        {
            tag: "td",
            classes: ["progress-bar",],
            attribute: {},
            text: null,
            contentHtml: null
        },
    ]

    const handlers = [
        {
            selector: ".name a",
            type: "click",
            func: () => rowHandlers.clickNameLink(row.id),
        },
        {
            selector: ".todos a",
            type: "click",
            func: (event) => rowHandlers.clickTodosLink(row.id)
        },
        {
            selector: ".not-done a",
            type: "click",
            func: (event) => rowHandlers.clickNotDoneLink(row.id)
        },
        {
            selector: ".overdue a",
            type: "click",
            func: (event) => rowHandlers.clickOverdueLink(row.id)
        },
    ];

    _table_row__WEBPACK_IMPORTED_MODULE_0__.render(tr, JSON.stringify(cellsData), handlers);

    const progressBarCell = tr.querySelector("td.progress-bar");
    if (progressBarCell !== null) {
        _project_progress_bar_view__WEBPACK_IMPORTED_MODULE_1__.render(progressBarCell, row.progressRate);
    }
    progressBarCell.classList.add(
        row.progressRate === 1 ? "complete" :
            row.progressRate >= 0.75 ? "over75" :
                row.progressRate >= 0.50 ? "over50" :
                    row.progressRate >= 0.25 ? "over25" : "under25"
    )
}

function update(tr, rowJson) {
    const row = JSON.parse(rowJson);
    tr.querySelector(".name a").textContent = row.name;
    tr.querySelector(".todos a").textContent = row.todos;
    tr.querySelector(".done a").textContent = row.done;
    tr.querySelector(".overdue a").textContent = row.overdue;
    tr.querySelector(".progress").textContent = row.progress;
}



/***/ }),

/***/ "./src/views/projects-table-view.js":
/*!******************************************!*\
  !*** ./src/views/projects-table-view.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteRowById: () => (/* binding */ deleteRowById),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _table_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-row */ "./src/views/table-row.js");
/* harmony import */ var _projects_table_row_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-table-row-view */ "./src/views/projects-table-row-view.js");
/* harmony import */ var _images_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/trash-can.svg */ "./src/images/trash-can.svg");





function render(table, tableJson, tableHandlers) {

    const tableData = JSON.parse(tableJson);

    const caption = document.createElement("caption");
    caption.textContent = tableData.caption;
    table.appendChild(caption);

    const thead = document.createElement("thead");
    table.appendChild(thead);

    const tr = document.createElement("tr");
    thead.appendChild(tr);

    const cellsData = [
        {
            tag: "th",
            classes: ["select"],
            attribute: {},
            text: null,
            contentHtml: `<button class="multi-delete">
                <img src="${_images_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__}" alt="Delete icon">
                </button>`
        },
        {
            tag: "th",
            classes: ["name", "title"],
            attribute: {scope: "col"},
            text: "Name",
            contentHtml: null
        },
        {
            tag: "th",
            classes: ["todos",],
            attribute: { scope: "col" },
            text: "Todos",
            contentHtml: null
        },
        {
            tag: "th",
            classes: ["not-done",],
            attribute: { scope: "col" },
            text: "Not Yet",
            contentHtml: null
        },
        {
            tag: "th",
            classes: ["overdue",],
            attribute: { scope: "col" },
            text: "Overdue",
            contentHtml: null
        },
        {
            tag: "th",
            classes: ["progress",],
            attribute: { scope: "col", colspan: 2},
            text: "Progress",
            contentHtml: null
        },
    ]

    const handlers = [];

    _table_row__WEBPACK_IMPORTED_MODULE_0__.render(tr, JSON.stringify(cellsData), handlers);

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    for (let row of tableData.rows) {
        const tr = document.createElement("tr");
        tr.setAttribute("data-id", row.id);
        tbody.appendChild(tr);
        _projects_table_row_view__WEBPACK_IMPORTED_MODULE_1__.render(tr, JSON.stringify(row), tableHandlers);
    }

    const multiDeleteButton = table.querySelector("button.multi-delete")
    multiDeleteButton.addEventListener(
        "click",
        () => {
            const projectIds = [];
            table.querySelectorAll("input[name='select']:checked").forEach(
                input => projectIds.push(input.value)
            );
            tableHandlers.clickMultiDeleteButton(projectIds);
        }
    );
    multiDeleteButton.disabled = true;

    table.querySelectorAll("input[name='select']").forEach(
        select => select.addEventListener(
            "change",
            () => {
                if (table.querySelectorAll("input[name='select']:checked").length > 0) {
                    multiDeleteButton.disabled = false;
                } else {
                    multiDeleteButton.disabled = true;
                }
            }
        )
    )

}

function update(){
}

function deleteRowById(table, rowId) {
    const tr = table.querySelector(`tr[data-id="${rowId}"]`);
    if (tr) {
        tr.remove();
    }
}



/***/ }),

/***/ "./src/views/projects-view.js":
/*!************************************!*\
  !*** ./src/views/projects-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _tools_parse_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/parse-html */ "./src/tools/parse-html.js");
/* harmony import */ var _projects_table_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-table-view */ "./src/views/projects-table-view.js");




function render(content, tableJson, tableHandlers) {
    const tableData = JSON.parse(tableJson);
    content.innerHTML = "";

    if (tableData.rows.length == 0) {
        content.appendChild((0,_tools_parse_html__WEBPACK_IMPORTED_MODULE_0__["default"])(`
            <div class="empty">
                <h1>${tableData.caption}</h1>
                <p>
                    No projects here. Time to dream big (or take a nap)!
                </p>
            </div>
        `));
    } else {
        const table = document.createElement("table");
        table.classList.add("projects");
        content.appendChild(table);
        _projects_table_view__WEBPACK_IMPORTED_MODULE_1__.render(table, JSON.stringify(tableData), tableHandlers);
    }

    const addButton = (0,_tools_parse_html__WEBPACK_IMPORTED_MODULE_0__["default"])(
        '<button class="add project">+</button>'
    );
    content.appendChild(addButton);

    addButton.addEventListener(
        "click",
        tableHandlers.clickAddButton
    )
}

function update(content, tableJson) {
    const table = content.querySelector("table.projects");
    _projects_table_view__WEBPACK_IMPORTED_MODULE_1__.update(table, tableJson);
}



/***/ }),

/***/ "./src/views/table-row.js":
/*!********************************!*\
  !*** ./src/views/table-row.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _tools_parse_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/parse-html */ "./src/tools/parse-html.js");


function render(tr, cellsJson, handlers){
    const cellsData = JSON.parse(cellsJson);
    for (let data of cellsData) {
        const cell = document.createElement(data.tag);
        data.classes.forEach(
            val => cell.classList.add(val)
        )
        for (let key in data.attribute) {
            cell.setAttribute(key, data.attribute[key]);
        }

        if (data.text !== null) {
            cell.textContent = data.text;
        }
        
        const child = (0,_tools_parse_html__WEBPACK_IMPORTED_MODULE_0__["default"])(data.contentHtml);
        if (child !== null) {
            cell.appendChild(child);
        }

        tr.appendChild(cell);
    }

    for (let handler of handlers) {
        const targets = tr.querySelectorAll(handler.selector);
        if (targets.length === 0) {
            return;
        }
        targets.forEach(
            target => target.addEventListener(
                handler.type,
                handler.func
            )
        )
    }
}

/***/ }),

/***/ "./src/views/todo-add-view.js":
/*!************************************!*\
  !*** ./src/views/todo-add-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _modal_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-view */ "./src/views/modal-view.js");
/* harmony import */ var _todo_form_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-form-view */ "./src/views/todo-form-view.js");



function render(content, formJson, formHandlers) {
    const dialog = document.createElement("dialog");
    content.appendChild(dialog)
    _modal_view__WEBPACK_IMPORTED_MODULE_0__.render(dialog, "New ToDo Task", formHandlers);
    _todo_form_view__WEBPACK_IMPORTED_MODULE_1__.render(dialog, formJson, formHandlers);
    dialog.querySelector("form").setAttribute("name", "todoAdd");

    const form = document.todoAdd;
    form.addEventListener(
        "submit",
        (e) => {
            e.preventDefault();
            formHandlers.clickSubmitButton(
                form.title.value,
                form.dueDate.value,
                form.priority.value,
                form.description.value,
                form.project.value,
            );
        }
    )

    // Prevent submit by enter key for accidental submit
    // Is there any elegant way to do this?
    const inputs = [
        form.title, form.dueDate, form.urgent, form.important, form.description
    ];

    inputs.forEach(
        (elem, index) => {
            if (elem !== form.description) {
                elem.addEventListener(
                    "keydown",
                    (e) => {
                        if (e.key === "Enter") {
                            inputs[index + 1].focus();
                            e.preventDefault();
                        }
                    }
                )
            }
        }
    )
}




/***/ }),

/***/ "./src/views/todo-edit-view.js":
/*!*************************************!*\
  !*** ./src/views/todo-edit-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _modal_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-view */ "./src/views/modal-view.js");
/* harmony import */ var _todo_form_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-form-view */ "./src/views/todo-form-view.js");
/* harmony import */ var _todo_status_input_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-status-input-view */ "./src/views/todo-status-input-view.js");
/* harmony import */ var _tools_parse_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/parse-html */ "./src/tools/parse-html.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isBefore.mjs");






function render(content, formJson, formHandlers) {
    const formData = JSON.parse(formJson);
    let dialog = document.querySelector("dialog");
    if (dialog === null) {
        dialog = document.createElement("dialog");
        content.appendChild(dialog)
    } else {
        dialog.textContent = "";
    }
    _modal_view__WEBPACK_IMPORTED_MODULE_0__.render(dialog, "Edit ToDo Task", formHandlers);
    _todo_form_view__WEBPACK_IMPORTED_MODULE_1__.render(dialog, formJson, formHandlers);

    const form = dialog.querySelector("form");
    form.setAttribute("name", "todoEdit");

    // Add Status (done)
    const statusWrapper = (0,_tools_parse_html__WEBPACK_IMPORTED_MODULE_3__["default"])(`
        <div class="status-wrapper">
            <div class="label">Status</div>
        </div>>`
    );
    const statusInputWrapper= document.createElement("div");
    statusWrapper.appendChild(statusInputWrapper);
    _todo_status_input_view__WEBPACK_IMPORTED_MODULE_2__.render(statusInputWrapper, JSON.stringify(formData.todo), ()=>{});
    form.insertBefore(statusWrapper, form.dueDate.parentNode);

    // Populate other data
    form.title.value = formData.todo.title;
    form.dueDate.value = formData.todo.dueDate;
    form.priority.value = formData.todo.priority;
    form.description.value = formData.todo.description;
    form.project.value = formData.todo.projectId;
    setPriorityCheckbox(form, form.priority.value);

    // Alert for overdue date
    if (formData.todo.dueDate !== "") {
        const dueDateObj = new Date(formData.todo.dueDate);
        const today = new Date();
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isBefore)(dueDateObj, today)){
            const alert = document.createElement("span");
            alert.classList.add("alert");
            alert.textContent = "This task is overdue. Set a new date.";
            form.dueDate.parentNode.appendChild(alert);        
        }
    }

    form.addEventListener(
        "submit",
        (e) => {
            e.preventDefault();
            formHandlers.clickSubmitButton(
                formData.todo.id,
                form.title.value,
                form.dueDate.value,
                form.priority.value,
                form.description.value,
                form.project.value,
                form.done.checked,
            );
        }
    )

    // Prevent submit by enter key for accidental submit
    // Is there any elegant way to do this?
    const inputs = [
        form.title, form.dueDate, form.done, form.urgent, form.important, form.description
    ];

    inputs.forEach(
        (elem, index) => {
            if (elem !== form.description) {
                elem.addEventListener(
                    "keydown",
                    (e) => {
                        if (e.key === "Enter") {
                            inputs[index + 1].focus();
                            e.preventDefault();
                        }
                    }
                )
            }
        }
    )
}

function setPriorityCheckbox(form, priority) {
    const matrix = {
        do: {
            urgent: true,
            important: true
        },
        schedule: {
            urgent: false,
            important: true
        },
        delegate: {
            urgent: true,
            important: false
        },
        eliminate: {
            urgent: false,
            important: false
        },
    };
    form.urgent.checked = matrix[priority].urgent;
    form.important.checked = matrix[priority].important;

    const priorityDisply = form.querySelector(".priority-display");
    priorityDisply.setAttribute("data-value", priority);
    priorityDisply.textContent = priority ;
}




/***/ }),

/***/ "./src/views/todo-form-view.js":
/*!*************************************!*\
  !*** ./src/views/todo-form-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _tools_parse_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/parse-html */ "./src/tools/parse-html.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var _images_triangle_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/triangle.svg */ "./src/images/triangle.svg");




const template = `
    <form>
        <label for="title"><span>Title<span class="required">*</span></span>
        <input type="text" name="title" id="title"
            required
            maxlength="50"
            placeholder="What's your task? (Required, keep it under 50 characters)">
        </label>
        <label for="due-date">Due Date
        <input type="date" name="dueDate" id="due-date" 
            min="${(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(), "yyyy-MM-dd")}">
        </label>
        <div class="priority-wrapper">
            <div class="label">Priority</div>
            <div class="priority-input-wrapper">
                <div class="prompt">This task is...</div>
                <fieldset>
                    <label for="urgent">
                        <input type="checkbox" name="urgent" id="urgent">
                        Urgent
                    </label>
                    <label for="important">
                        <input type="checkbox" name="important" id="important">
                        Important
                    </label>
                </fieldset>
                <img src="${_images_triangle_svg__WEBPACK_IMPORTED_MODULE_1__}">
                <div class="priority-display" data-value="eliminate">eliminate</div>
                <a href="https://en.wikipedia.org/wiki/Time_management#The_Eisenhower_Method" target="_blank" rel="noopener noreferrer">
                    What does this mean?
                    <span class="more">Learn more about Eisenhower Matrix!</span>
                </a>
                <input type="hidden" name="priority" id="priority" value="eliminate">
            </div>
        </div>
        <label for="description">
            Description
            <textarea name="description" id="description" rows="3"></textarea>
        </label>
        <label for="project">Project
            <select name="project" id="project">
                <option value="">---Select---</option>
            </select>
        </label>
        <div class="button-wrapper">
            <button type="button" class="cancel">Cancel</button>
            <button type="submit">Submit</button>
        </div>
    </form>
`;

function render(parent, formJson, formHandlers) {
    const formData = JSON.parse(formJson);

    const form = (0,_tools_parse_html__WEBPACK_IMPORTED_MODULE_0__["default"])(template);
    parent.appendChild(form);
    const select = form.querySelector("select");
    formData.projects.forEach(
        project => {
            const option = document.createElement("option");
            option.value = project.id;
            option.textContent = project.name;
            select.appendChild(option);
        }
    )

    const cancelButton = form.querySelector(".cancel");
    cancelButton.addEventListener(
        "click",
        event => {
            event.preventDefault();
            formHandlers.clickCancelButton();
        }
    );


    const checkboxes = form.querySelectorAll("#urgent, #important");
    checkboxes.forEach(
        box => box.addEventListener(
            // Somehow "click" event fires when user interacts with other inputs
            // Use "change" instead
            "change", updatePriority
        )
    )
}

function updatePriority() {
    const priority = document.querySelector("#priority");
    const priorityDisplay = document.querySelector(".priority-display");
    const urgent = document.querySelector("#urgent").checked;
    const important = document.querySelector("#important").checked;
    let level;
    if (urgent && important) {
        level = "do";
    } else if (!urgent && important) {
        level = "schedule"
    } else if (urgent && !important) {
        level = "delegate"
    } else {
        level = "eliminate"
    }
    priority.value = level;
    priorityDisplay.textContent = level;
    priorityDisplay.setAttribute("data-value", level);
}




/***/ }),

/***/ "./src/views/todo-status-button-view.js":
/*!**********************************************!*\
  !*** ./src/views/todo-status-button-view.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   toggle: () => (/* binding */ toggle),
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _tools_parse_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/parse-html */ "./src/tools/parse-html.js");


function render(button, buttonJson, handler){
    const buttonData = JSON.parse(buttonJson);
    button.classList.add("toggle");
    button.value = buttonData.done ? "on" : "off";
    button.append((0,_tools_parse_html__WEBPACK_IMPORTED_MODULE_0__["default"])(`<span>${buttonData.done ? "Done" : "Not Yet"}</span>`));
    button.append((0,_tools_parse_html__WEBPACK_IMPORTED_MODULE_0__["default"])(`
        <svg viewBox="0, 0, 10, 10" xmlns="http://www.w3.org/2000/svg" fill="#fafafa">
            <circle cx="5" cy="5" r="4"/>
        </svg>
    `));
    button.addEventListener(
        "click",
        event => {
            handler(button, buttonData.id);
            event.preventDefault();
        }
    );
}

function update(button, done){
    button.value = done ? "on" : "off";
    button.querySelector("span").textContent = done ? "Done" : "Not Yet";
}

function toggle(button){
    if (button.value === "on") {
        update(button, false);
    } else {
        update(button, true);
    }
}



/***/ }),

/***/ "./src/views/todo-status-input-view.js":
/*!*********************************************!*\
  !*** ./src/views/todo-status-input-view.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _tools_parse_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/parse-html */ "./src/tools/parse-html.js");


function render(wrapper, json, changeHandler) {
    wrapper.classList.add("button-like-checkbox-wrapper");
    const data = JSON.parse(json);

    // Unique ID is required for when modal shows over todos view
    const doneId = `done_${crypto.randomUUID()}`;
    const label = (0,_tools_parse_html__WEBPACK_IMPORTED_MODULE_0__["default"])(`
        <label for="${doneId}"></label>
    `);
    const span = (0,_tools_parse_html__WEBPACK_IMPORTED_MODULE_0__["default"])(`
        <span>${data.done ? "Done" : "Not Yet"}</span>
    `);
    const checkbox = (0,_tools_parse_html__WEBPACK_IMPORTED_MODULE_0__["default"])(`
        <input type="checkbox" name="done" id="${doneId}">
    `);
    checkbox.checked = data.done;

    label.appendChild(span);
    label.appendChild(checkbox);

    wrapper.appendChild(label);
    
    checkbox.addEventListener(
        "change",
        () => {
            updateLabel();
            changeHandler(data.id);
        }
    );

    function updateLabel() {
        span.textContent = checkbox.checked ? "Done" : "Not Yet";
    }
}





/***/ }),

/***/ "./src/views/todo-view.js":
/*!********************************!*\
  !*** ./src/views/todo-view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _modal_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-view */ "./src/views/modal-view.js");
/* harmony import */ var _todo_status_input_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-status-input-view */ "./src/views/todo-status-input-view.js");
/* harmony import */ var _tools_parse_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/parse-html */ "./src/tools/parse-html.js");




function render(content, formJson, formHandlers) {
    const formData = JSON.parse(formJson);
    const dialog = document.createElement("dialog");
    content.appendChild(dialog)
    _modal_view__WEBPACK_IMPORTED_MODULE_0__.render(dialog, "ToDo Task", formHandlers);
    dialog.appendChild((0,_tools_parse_html__WEBPACK_IMPORTED_MODULE_2__["default"])(`
        <div class="todo single-display">
            <div class="title row">
                <div class="label">Title</div>
                <div class="data">${formData.todo.title}</div>
            </div>
            <div class="status row">
                <div class="label">Status</div>
                <div class="data"></div>
            </div>
            <div class="due-date row">
                <div class="label">Due Date</div>
                <div class="data">${formData.todo.dueDate}</div>
            </div>
            <div class="priority row">
                <div class="label">Priority</div>
                <div class="data">
                    <div class="priority-display" data-value="${formData.todo.priority}">${formData.todo.priority}</div>
                    <a href="https://en.wikipedia.org/wiki/Time_management#The_Eisenhower_Method" target="_blank" rel="noopener noreferrer">
                        What does this mean?
                        <span class="more">Learn more about Eisenhower Matrix!</span>
                    </a>                
                </div>
            </div>
            <div class="description row">
                <div class="label">Description</div>
                <div class="data">${formData.todo.description}</div>
            </div>
            <div class="project row">
                <div class="label">Project</div>
                <div class="data">${formData.todo.projectName}</div>
            </div>
            <form>
                <button class="cancel">Cancel</button>
                <button class="edit">Edit</button>
            </form>
        </div>
    `));


    // Add status component
    const statusWrapper = document.createElement("div");
    statusWrapper.classList.add("status-input-wrapper");
    _todo_status_input_view__WEBPACK_IMPORTED_MODULE_1__.render(statusWrapper, JSON.stringify(formData.todo), () => { });
    statusWrapper.querySelector("input").disabled = true;
    dialog.querySelector(".status>.data").appendChild(statusWrapper);

    dialog.querySelector("button.edit").addEventListener(
        "click",
        (event) => {
            event.preventDefault();
            formHandlers.clickEditButton(formData.todo.id);
        }
    );
}

function setPriorityCheckbox(form, priority) {
    const matrix = {
        do: {
            urgent: true,
            important: true
        },
        schedule: {
            urgent: false,
            important: true
        },
        delegate: {
            urgent: true,
            important: false
        },
        eliminate: {
            urgent: false,
            important: false
        },
    };
    form.urgent.checked = matrix[priority].urgent;
    form.important.checked = matrix[priority].important;

    const priorityDisply = form.querySelector(".priority-display");
    priorityDisply.setAttribute("data-value", priority);
    priorityDisply.textContent = priority;
}




/***/ }),

/***/ "./src/views/todos-table-row-view.js":
/*!*******************************************!*\
  !*** ./src/views/todos-table-row-view.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _tools_parse_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/parse-html.js */ "./src/tools/parse-html.js");
/* harmony import */ var _todo_status_button_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-status-button-view.js */ "./src/views/todo-status-button-view.js");
/* harmony import */ var _todo_status_input_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-status-input-view.js */ "./src/views/todo-status-input-view.js");




let handlers;

function render(tr, rowJson, rowHandlers){
    handlers = rowHandlers;

    const row = JSON.parse(rowJson);
    tr.classList.add(row.priority);

    let cell = document.createElement("td");
    cell.classList.add("select");
    cell.appendChild((0,_tools_parse_html_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`
        <input type="checkbox" name="select" value="${row.id}"></input>
        `));
    tr.appendChild(cell);

    cell = document.createElement("th");
    cell.classList.add("title");
    cell.setAttribute("scope", "row");
    cell.appendChild((0,_tools_parse_html_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`
        <a>${row.title}</a>
        `));
    tr.appendChild(cell);

    cell = document.createElement("td");
    cell.classList.add("due-date");
    cell.textContent = row.dueDate;
    tr.appendChild(cell);

    cell = document.createElement("td");
    cell.classList.add("priority");
    cell.textContent = row.priority;
    tr.appendChild(cell);

    cell = document.createElement("td");
    cell.classList.add("status");    
    const statusWrapper = document.createElement("div");
    statusWrapper.classList.add("status-input-wrapper");
    _todo_status_input_view_js__WEBPACK_IMPORTED_MODULE_2__.render(
        statusWrapper,
        JSON.stringify({ id: row.id, done: row.done }), 
        handlers.clickStatusButton
    )
    cell.appendChild(statusWrapper);
    tr.appendChild(cell);


    // const button = document.createElement("button");
    // cell.appendChild(button);
    // statusButton.render(
    //     button, 
    //     JSON.stringify({id: row.id, done: row.done}), 
    //     handlers.clickStatusButton
    // );
    // tr.appendChild(cell);

    cell = document.createElement("td");
    cell.classList.add("project");
    cell.appendChild((0,_tools_parse_html_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`
        <a data-projectId="${row.projectId}">${row.project}</a>
        `));
    tr.appendChild(cell);

    tr.querySelector(".title a").addEventListener(
        "click",
        e => handlers.clickTitleLink(row.id)
    );

    tr.querySelector(".project a").addEventListener(
        "click",
        () => {
            handlers.clickProjectLink(row.projectId);
        }
    );
}

function update(tr, rowJson){
    const rowData = JSON.parse(rowJson);
    setRowPriority(tr, rowData.priority);
    tr.querySelector(".title a").textContent = rowData.title;
    tr.querySelector(".due-date").textContent = rowData.dueDate;
    tr.querySelector(".priority").textContent = rowData.priority;

    const button = tr.querySelector(".status button");
    _todo_status_button_view_js__WEBPACK_IMPORTED_MODULE_1__.toggle(button);

    tr.querySelector(".project a").textContent = rowData.project;
}

function setRowPriority(tr, priority){
    tr.classList.remove("do");
    tr.classList.remove("schedule");
    tr.classList.remove("delegate");
    tr.classList.remove("eliminate");
    tr.classList.add(priority);
}




/***/ }),

/***/ "./src/views/todos-table-view.js":
/*!***************************************!*\
  !*** ./src/views/todos-table-view.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteRowById: () => (/* binding */ deleteRowById),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _todos_table_row_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos-table-row-view.js */ "./src/views/todos-table-row-view.js");
/* harmony import */ var _tools_parse_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/parse-html.js */ "./src/tools/parse-html.js");
/* harmony import */ var _images_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/trash-can.svg */ "./src/images/trash-can.svg");




let handlers;

function render(table, tableJson, tableHandlers){
    handlers = tableHandlers;

    const tableData = JSON.parse(tableJson);

    const caption = document.createElement("caption");
    caption.textContent = tableData.caption;
    table.appendChild(caption);


    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    thead.appendChild(tr);

    let cell = document.createElement("th");
    cell.classList.add("select");
    cell.appendChild((0,_tools_parse_html_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`
        <button class="multi-delete">
            <img src="${_images_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__}" alt="Delete icon">
        </button>
    `));
    tr.appendChild(cell);

    cell = document.createElement("th");
    cell.classList.add("title");
    cell.setAttribute("scope", "col");
    cell.textContent = "Title";
    tr.appendChild(cell);

    cell = document.createElement("th");
    cell.classList.add("due-date");
    cell.setAttribute("scope", "col");
    cell.textContent = "Due Date";
    tr.appendChild(cell);

    cell = document.createElement("th");
    cell.classList.add("priority");
    cell.setAttribute("scope", "col");
    cell.textContent = "Priority";
    tr.appendChild(cell);

    cell = document.createElement("th");
    cell.classList.add("done");
    cell.setAttribute("scope", "col");
    cell.textContent = "Status";
    tr.appendChild(cell);

    cell = document.createElement("th");
    cell.classList.add("project");
    cell.setAttribute("scope", "col");
    cell.textContent = "Project";
    tr.appendChild(cell);
    
    table.appendChild(thead);
    
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    for (let row of tableData.rows) {
        const tr = document.createElement("tr");
        tr.setAttribute("data-id", row.id);
        tbody.appendChild(tr);
        _todos_table_row_view_js__WEBPACK_IMPORTED_MODULE_0__.render(tr, JSON.stringify(row), handlers);
    }

    const multiDeleteButton = table.querySelector("button.multi-delete");
    multiDeleteButton.addEventListener(
        "click",
        () => {
            const todoIds = [];
            table.querySelectorAll("input[name='select']:checked").forEach(
                input => todoIds.push(input.value)
            );
            handlers.clickMultiDeleteButton(todoIds);
        }
    );

    multiDeleteButton.disabled = true;
    
    table.querySelectorAll("input[name='select']").forEach(
        select => select.addEventListener(
            "change",
            () => {
                if (table.querySelectorAll("input[name='select']:checked").length > 0) {
                    multiDeleteButton.disabled = false;
                } else {
                    multiDeleteButton.disabled = true;
                }
            }
        )
    )
    
}

function update(table, tableJson){
    const tableData = JSON.parse(tableJson);
    const caption = table.querySelector("caption");
    caption.textContent = tableData.caption;

    const tbody = table.querySelector("tbody");
    tbody.textContent = "";

    for (let row of tableData.rows) {
        const tr = document.createElement("tr");
        tr.setAttribute("data-id", row.id);
        tbody.appendChild(tr);
        _todos_table_row_view_js__WEBPACK_IMPORTED_MODULE_0__.render(tr, JSON.stringify(row), handlers);
    }
}

function deleteRowById(table, rowId) {
    const tr = table.querySelector(`tr[data-id="${rowId}"]`);
    if (tr) {
        tr.remove();
    }    
}



/***/ }),

/***/ "./src/views/todos-view.js":
/*!*********************************!*\
  !*** ./src/views/todos-view.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _tools_parse_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/parse-html.js */ "./src/tools/parse-html.js");
/* harmony import */ var _todos_table_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos-table-view.js */ "./src/views/todos-table-view.js");



let handlers;

function render(content, tableJson, todosHandlers) {
    handlers = todosHandlers;
    const tableData = JSON.parse(tableJson);

    content.innerHTML = "";

    if (tableData.rows.length === 0) {
        let emptyMessage;
        if (tableData.emptyMessage !== "") {
            emptyMessage = tableData.emptyMessage;
        } else {
            emptyMessage = "No tasks found. Create one (or just relax)."
        }

        content.appendChild((0,_tools_parse_html_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`
            <div class="empty">
                <h1>${tableData.caption}</h1>
                <p>
                    ${emptyMessage}
                </p>
            </div>
        `));
    } else {
        const table = document.createElement("table");
        table.classList.add("todos");
        content.appendChild(table);
        _todos_table_view_js__WEBPACK_IMPORTED_MODULE_1__.render(table, JSON.stringify(tableData), handlers);
    }

    const addButton = (0,_tools_parse_html_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
        '<button class="add">+</button>'
    );
    content.appendChild(addButton);

    addButton.addEventListener(
        "click",
        handlers.clickAddButton
    )
}

function update(content, tableJson) {
    const table = content.querySelector("table.todos");
    _todos_table_view_js__WEBPACK_IMPORTED_MODULE_1__.update(table, tableJson);  
}




/***/ }),

/***/ "./src/fonts/leaguespartan-bold-webfont.woff":
/*!***************************************************!*\
  !*** ./src/fonts/leaguespartan-bold-webfont.woff ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "244921d47c6d8471a5c6.woff";

/***/ }),

/***/ "./src/fonts/leaguespartan-bold-webfont.woff2":
/*!****************************************************!*\
  !*** ./src/fonts/leaguespartan-bold-webfont.woff2 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e8231a81f2da04e8e1c4.woff2";

/***/ }),

/***/ "./src/images/close.svg":
/*!******************************!*\
  !*** ./src/images/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2f778702e3f9be580ac5.svg";

/***/ }),

/***/ "./src/images/trash-can.svg":
/*!**********************************!*\
  !*** ./src/images/trash-can.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b4a7b26be64c05d0f239.svg";

/***/ }),

/***/ "./src/images/triangle.svg":
/*!*********************************!*\
  !*** ./src/images/triangle.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1fc0c59bcb5933757802.svg";

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.mjs */ "./node_modules/date-fns/getDayOfYear.mjs");
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");
/* harmony import */ var _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.mjs */ "./node_modules/date-fns/_lib/format/lightFormatters.mjs");








const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(date.getTime() / 1000);
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    const timestamp = date.getTime();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/constructNow.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/constructNow.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructNow: () => (/* binding */ constructNow),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");


/**
 * @name constructNow
 * @category Generic Helpers
 * @summary Constructs a new current date using the passed value constructor.
 * @pure false
 *
 * @description
 * The function constructs a new current date using the constructor from
 * the reference date. It helps to build generic functions that accept date
 * extensions and use the current date.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 *
 * @returns Current date initialized using the given date constructor
 *
 * @example
 * import { constructNow, isSameDay } from 'date-fns'
 *
 * function isToday<DateType extends Date>(
 *   date: DateType | number | string,
 * ): boolean {
 *   // If we were to use `new Date()` directly, the function would  behave
 *   // differently in different timezones and return false for the same date.
 *   return isSameDay(date, constructNow(date));
 * }
 */
function constructNow(date) {
  return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructNow);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/format.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/format.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDate: () => (/* binding */ format),
/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");
/* harmony import */ var _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/formatters.mjs */ "./node_modules/date-fns/_lib/format/formatters.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");
/* harmony import */ var _isValid_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.mjs */ "./node_modules/date-fns/isValid.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");








// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;



/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(date);

  if (!(0,_isValid_mjs__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (_lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(token))
      ) {
        (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(token, formatStr, String(date));
      }

      const formatter = _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.mjs */ "./node_modules/date-fns/startOfYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/getWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isBefore.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/isBefore.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isBefore: () => (/* binding */ isBefore)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore(date, dateToCompare) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _dateToCompare = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateToCompare);
  return +_date < +_dateToCompare;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBefore);


/***/ }),

/***/ "./node_modules/date-fns/isDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isSameDay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const dateRightStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isToday.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isToday.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructNow.mjs */ "./node_modules/date-fns/constructNow.mjs");
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");



/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, (0,_constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__.constructNow)(date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);


/***/ }),

/***/ "./node_modules/date-fns/isValid.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isValid.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.mjs */ "./node_modules/date-fns/isDate.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  if (!(0,_isDate_mjs__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") {
    return false;
  }
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  return !isNaN(Number(_date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date) {
  const cleanDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _date = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ }),

/***/ "./src/dummy-todos.json":
/*!******************************!*\
  !*** ./src/dummy-todos.json ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"title":"Complete project proposal","description":"Draft and finalize the proposal for the new client project","dueDate":"2024-07-30","priority":3,"done":false,"project":"Work"},{"title":"Buy groceries","description":"Pick up milk, eggs, bread, and vegetables from the supermarket","dueDate":"2024-07-18","priority":2,"done":false,"project":"Family"},{"title":"Schedule dentist appointment","description":"Call Dr. Smith\'s office to book a check-up","dueDate":"2024-08-15","priority":2,"done":true,"project":"Me"},{"title":"Prepare presentation slides","description":"Create slides for the team meeting on project progress","dueDate":"2024-07-25","priority":1,"done":false,"project":"Work"},{"title":"Pay electricity bill","description":"Log in to the utility company website and pay the monthly bill","dueDate":"2024-07-20","priority":1,"done":true,"project":"Family"},{"title":"Clean garage","description":"Organize tools, dispose of old items, and sweep the floor","dueDate":"2024-08-06","priority":0,"done":false,"project":"Family"},{"title":"Submit expense report","description":"Compile receipts and fill out the expense form for the business trip","dueDate":"2024-07-22","priority":1,"done":false,"project":"Work"},{"title":"Plan team building event","description":"Research and propose ideas for the quarterly team outing","dueDate":"2024-08-10","priority":0,"done":false,"project":"Work"},{"title":"Update resume","description":"Add recent projects and skills to CV","dueDate":"2024-09-01","priority":3,"done":false,"project":"Job Hunt"},{"title":"Fix leaky faucet","description":"Replace washer in bathroom sink faucet","dueDate":"2024-07-23","priority":1,"done":true,"project":"Family"},{"title":"Prepare for job interview","description":"Research company, practice common questions, choose outfit","dueDate":"2024-08-02","priority":3,"done":false,"project":"Job Hunt"},{"title":"Renew gym membership","description":"Visit the gym or renew online before membership expires","dueDate":"2024-07-31","priority":3,"done":false,"project":"Me"},{"title":"Back up computer files","description":"Perform monthly backup of important documents and photos","dueDate":"2024-07-28","priority":3,"done":false,"project":"Me"},{"title":"Learn new programming language","description":"Complete online course on Python basics","dueDate":"2024-09-30","priority":2,"done":false,"project":"Me"},{"title":"Write blog post","description":"Draft and publish article on recent industry trends","dueDate":"2024-08-05","priority":2,"done":true,"project":"Me"},{"title":"File tax returns","description":"Gather documents and submit last year\'s tax returns","dueDate":"2024-04-15","priority":3,"done":true,"project":"Me"},{"title":"Renew driver\'s license","description":"Visit DMV to renew expired driver\'s license","dueDate":"2024-05-31","priority":3,"done":true,"project":"Me"},{"title":"Return library books","description":"Return overdue books to the city library","dueDate":"2024-06-30","priority":1,"done":false,"project":"Me"},{"title":"Schedule annual health checkup","description":"Book appointment for yearly physical examination","dueDate":"2024-03-15","priority":2,"done":false,"project":"Me"},{"title":"Plan retirement savings strategy","description":"Research and outline long-term financial goals and investment plans","dueDate":"2030-12-31","priority":2,"done":false,"project":"Me"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.js */ "./src/view.js");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.js */ "./src/model.js");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








const controller = new _controller_js__WEBPACK_IMPORTED_MODULE_2__["default"](_view_js__WEBPACK_IMPORTED_MODULE_0__, _model_js__WEBPACK_IMPORTED_MODULE_1__);

controller.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZKQUEyRDtBQUN2Ryw0Q0FBNEMsMkpBQTBEO0FBQ3RHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hELFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQSxtQ0FBbUM7Ozs7QUFJbkM7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLGdGQUFnRixZQUFZLE1BQU0sT0FBTyxhQUFhLGFBQWEsU0FBUyxLQUFLLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLHVCQUF1QixhQUFhLGFBQWEsYUFBYSx1QkFBdUIsYUFBYSxhQUFhLGFBQWEsYUFBYSx1QkFBdUIsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsVUFBVSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksUUFBUSxhQUFhLE1BQU0sWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksMEJBQTBCLGFBQWEsMEJBQTBCLE1BQU0sWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFNBQVMsVUFBVSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLFlBQVksTUFBTSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksWUFBWSxPQUFPLFFBQVEsWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLGFBQWEsUUFBUSxLQUFLLFFBQVEsTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxTQUFTLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLFFBQVEsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFNBQVMsWUFBWSxhQUFhLE9BQU8sUUFBUSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxP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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLDZCQUE2QixtQkFBTyxDQUFDLG1EQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFN0pwRjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdEQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQU07QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxnQ0FBZ0M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxhQUFhOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEMsb0JBQW9CLGtEQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixpREFBTztBQUMzQjtBQUNBO0FBQ0EscUNBQXFDLGdEQUFNLDJCQUEyQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrREFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnREFBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLGlEQUFPLGFBQWEsa0RBQVE7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsaURBQU8sYUFBYSxrREFBUTtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUU1bEJ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRHRCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Q0QjtBQUNRO0FBQ1A7QUFDTTtBQUNLO0FBQ0s7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLHNDQUFzQyxnREFBSTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHlCQUF5QixnREFBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixzQ0FBc0MsZ0RBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixzQ0FBc0MsbURBQU87QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTiw0QkFBNEIsbURBQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLHNDQUFzQyxtREFBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrREFBUTtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxtREFBWTtBQUN2QixXQUFXLG1EQUFZO0FBQ3ZCLFdBQVcsbURBQVk7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxJQUFJLG1EQUFZO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsSUFBSSxtREFBWTtBQUNoQjs7QUFFQTtBQUNBLElBQUksbURBQVk7QUFDaEI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHNCQUFzQixrREFBVztBQUNqQyx5QkFBeUIsa0RBQVc7QUFDcEMsK0JBQStCLGtEQUFXOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4Q0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVU7QUFDZDs7QUFFQTtBQUNBLFdBQVcsMENBQUk7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLHFCQUFxQjtBQUN0RDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUN2Rm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0I7QUFDVztBQUNPO0FBQ0U7QUFDdEI7QUFDUTtBQUNSO0FBQ087QUFDRTtBQUNIO0FBQ087QUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hWOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixnRUFBUztBQUM5QjtBQUNBO0FBQ0EscUJBQXFCLGdFQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDMkQ7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSwwREFBc0I7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDBEQUFzQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEQ0QztBQUNBOztBQUU1QztBQUNBLHdCQUF3Qiw2REFBUztBQUNqQztBQUNBLHdCQUF3Qiw4Q0FBUyxDQUFDO0FBQ2xDO0FBQ0E7QUFDQSxlQUFlLDZEQUFTLFFBQVEsTUFBTTs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CMEM7QUFDRTs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0EsSUFBSSwrQ0FBZ0I7O0FBRXBCLGlCQUFpQiw2REFBUztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEMEM7QUFDRTs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtDQUFnQjs7QUFFcEIsaUJBQWlCLDZEQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNCQUFzQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnlCO0FBQ0U7OztBQUc1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLCtDQUFnQjs7QUFFcEIsdUJBQXVCLDZEQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msc0JBQXNCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUN3QztBQUNtQjs7QUFFM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHdFQUF3RSxPQUFPO0FBQy9FLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2QztBQUNBLCtDQUErQyxPQUFPLElBQUksU0FBUztBQUNuRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsK0NBQStDLE9BQU8sSUFBSSxVQUFVO0FBQ3BFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSwrQ0FBK0MsT0FBTyxJQUFJLFlBQVk7QUFDdEUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLCtDQUErQyxPQUFPLElBQUksWUFBWTtBQUN0RSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxJQUFJLDhDQUFlOztBQUVuQjtBQUNBO0FBQ0EsUUFBUSw4REFBa0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEd3QztBQUMwQjtBQUNuQjs7O0FBRy9DOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLDRCQUE0QixrREFBUyxDQUFDO0FBQ3RDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixhQUFhO0FBQ3JDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGNBQWM7QUFDdkM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlCQUF5QjtBQUNsRDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBLElBQUksOENBQWU7O0FBRW5CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUEyQjtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxNQUFNO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BINEM7QUFDZTs7O0FBRzNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qiw2REFBUztBQUNyQztBQUNBLHNCQUFzQixrQkFBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUF3QjtBQUNoQzs7QUFFQSxzQkFBc0IsNkRBQVM7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0RBQXdCO0FBQzVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QzRDOztBQUVyQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2REFBUztBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQzBDO0FBQ087O0FBRWpEO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQWdCO0FBQ3BCLElBQUksbURBQW1CO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEd0I7QUFDTztBQUNXO0FBQ2hCO0FBQ1I7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSSwrQ0FBZ0I7QUFDcEIsSUFBSSxtREFBbUI7O0FBRXZCO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsNkRBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBc0IsMERBQTBEO0FBQ3BGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrREFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEgwQjtBQUNWO0FBQ2U7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdEQUFNLDJCQUEyQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQVcsQ0FBQztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDZEQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUc0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkRBQVMsVUFBVSxxQ0FBcUM7QUFDMUUsa0JBQWtCLDZEQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQzRDOztBQUU1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsb0JBQW9CO0FBQy9DLGtCQUFrQiw2REFBUztBQUMzQixzQkFBc0IsT0FBTztBQUM3QjtBQUNBLGlCQUFpQiw2REFBUztBQUMxQixnQkFBZ0IsK0JBQStCO0FBQy9DO0FBQ0EscUJBQXFCLDZEQUFTO0FBQzlCLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEMyQjtBQUNrQjtBQUNoQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtDQUFnQjtBQUNwQix1QkFBdUIsNkRBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9CQUFvQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxzQkFBc0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsdUJBQXVCLElBQUksdUJBQXVCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsMEJBQTBCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywwQkFBMEI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQXNCLHdEQUF3RDtBQUNsRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGNkI7QUFDYztBQUNGOztBQUUzRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixnRUFBUztBQUM5QixzREFBc0QsT0FBTztBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnRUFBUztBQUM5QixhQUFhLFVBQVU7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQWtCO0FBQ3RCO0FBQ0EseUJBQXlCLDRCQUE0QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkJBQTJCO0FBQ3REO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGdFQUFTO0FBQzlCLDZCQUE2QixjQUFjLElBQUksWUFBWTtBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksK0RBQW1COztBQUV2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHK0Q7QUFDaEI7QUFDQTs7QUFFL0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGdFQUFTO0FBQzlCO0FBQ0Esd0JBQXdCLGtEQUFTLENBQUM7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQXdCO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBd0I7QUFDaEM7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxNQUFNO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hIK0M7QUFDUzs7QUFFeEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsNEJBQTRCLGdFQUFTO0FBQ3JDO0FBQ0Esc0JBQXNCLGtCQUFrQjtBQUN4QztBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBcUI7QUFDN0I7O0FBRUEsc0JBQXNCLGdFQUFTO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHdEQUFxQjtBQUN6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hETztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnNEO0FBQ0o7QUFDUTtBQUNkO0FBQ1E7QUFDSztBQUNEOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHNCQUFzQjtBQUN6RDtBQUNBO0FBQ0EsbUNBQW1DLGlCQUFpQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZUFBZTtBQUNsRDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsY0FBYztBQUMxRDs7QUFFQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLDJCQUEyQiw2REFBVztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUVBQWU7QUFDNUI7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxjQUFjO0FBQzlEOztBQUVBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQSx3QkFBd0IsbUVBQWM7O0FBRXRDO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0EsaURBQWlELGlCQUFpQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBLGlEQUFpRCxpQkFBaUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlFQUFlO0FBQzlCO0FBQ0E7QUFDQSxtREFBbUQsZUFBZTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHNDQUFzQztBQUM3RTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0EsbURBQW1ELGVBQWU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxzQ0FBc0M7QUFDN0U7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxpQkFBaUIscURBQU87O0FBRXhCO0FBQ0EsNENBQTRDLGNBQWM7QUFDMUQ7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQVU7O0FBRTlCO0FBQ0EsK0NBQStDLGNBQWM7QUFDN0Q7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxjQUFjO0FBQ3BFOztBQUVBLFdBQVcsaUVBQWU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esc0JBQXNCLCtEQUFZOztBQUVsQztBQUNBLGlEQUFpRCxtQkFBbUI7QUFDcEU7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQSx3REFBd0QsYUFBYTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBLHdEQUF3RCxhQUFhO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0Esc0RBQXNELGFBQWE7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDa0M7QUFDQztBQUNNOztBQUVwQjs7O0FBR3JCLHVCQUF1QixzREFBVSxDQUFDLHFDQUFJLEVBQUUsc0NBQUs7O0FBRTdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3VsaWQvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdWxpZC9zdHVicy9jcnlwdG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2RlbHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2RlbHMvcmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2RlbHMvc2VydmljZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2RlbHMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90b29scy9wYXJzZS1odG1sLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdmlld3MvbWVudS1wcm9qZWN0cy12aWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3ZpZXdzL21lbnUtdmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9tb2RhbC12aWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3Byb2plY3QtYWRkLXZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdmlld3MvcHJvamVjdC1lZGl0LXZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdmlld3MvcHJvamVjdC1wcm9ncmVzcy1iYXItdmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9wcm9qZWN0LXZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdmlld3MvcHJvamVjdHMtdGFibGUtcm93LXZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdmlld3MvcHJvamVjdHMtdGFibGUtdmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9wcm9qZWN0cy12aWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3RhYmxlLXJvdy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy92aWV3cy90b2RvLWFkZC12aWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3RvZG8tZWRpdC12aWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3RvZG8tZm9ybS12aWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3RvZG8tc3RhdHVzLWJ1dHRvbi12aWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3RvZG8tc3RhdHVzLWlucHV0LXZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdmlld3MvdG9kby12aWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3RvZG9zLXRhYmxlLXJvdy12aWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3RvZG9zLXRhYmxlLXZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdmlld3MvdG9kb3Mtdmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2FkZExlYWRpbmdaZXJvcy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9kZWZhdWx0T3B0aW9ucy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvZm9ybWF0dGVycy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL3Byb3RlY3RlZFRva2Vucy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RhbnRzLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3RGcm9tLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3ROb3cubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZm9ybWF0Lm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXREYXlPZlllYXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWsubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNCZWZvcmUubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNTYW1lRGF5Lm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RvZGF5Lm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1ZhbGlkLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4ubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZJU09XZWVrLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vla1llYXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZZZWFyLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvbGVhZ3Vlc3BhcnRhbi1ib2xkLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2xlYWd1ZXNwYXJ0YW4tYm9sZC13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdsZWFndWVfc3BhcnRhbmJvbGQnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cblxuXG46cm9vdCB7XG4gICAgLS1ndXR0ZXI6IDE2cHg7XG5cbiAgICAvKiBTZWN0aW9uIHNpemUgKi9cbiAgICAtLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcbiAgICAtLWJyYW5kLWhlaWdodDogMy41cmVtO1xuICAgIC0tbmF2LWhlaWdodDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIHZhcigtLWJyYW5kLWhlaWdodCkpO1xuICAgIC0tZm9vdGVyLWhlaWdodDogMnJlbTtcblxuICAgIC8qIEZvbnQgc2l6ZSAqL1xuICAgIC0tbG9nby1mb250LXNpemU6IGNhbGModmFyKC0tYnJhbmQtaGVpZ2h0KSAtIHZhcigtLWd1dHRlcikpO1xuICAgIC0tbmF2LWZvbnQtc2l6ZTogY2FsYyh2YXIoLS1uYXYtaGVpZ2h0KSAtIHZhcigtLWd1dHRlcikpO1xuICAgIC0tY29udGVudC1oMS1mb250LXNpemU6IDEuOHJlbTtcbiAgICAtLWNvbnRlbnQtaDItZm9udC1zaXplOiAxLjVyZW07XG4gICAgLS1jb250ZW50LWgzLWZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIC0tdGFibGUtZm9udC1zaXplOiAxLjFyZW07XG5cbiAgICAvKiBPdGhlciBzaXplKi9cbiAgICAtLXRhYmxlLXdpZHRoOiBtaW4oOTAwcHgsIDEwMCUpO1xuICAgIC0tdGFibGUtbGluZS1oZWlnaHQ6IDMuNXJlbTtcbiAgICAtLWFkZC1idXR0b24tc2l6ZTogNHJlbTtcbiAgICAtLWNsb3NlLWJ1dHRvbi1zaXplOiAzcmVtO1xuXG4gICAgLyogRm9udCBmYW1pbHkgKi9cbiAgICAtLWJyYW5kLWZvbnQtZmFtaWx5OiAnbGVhZ3VlX3NwYXJ0YW5ib2xkJywgc2FuLXNlcmlmO1xuXG4gICAgLyogRnJvbSBUYWlsd2luZCBjb2xvciBwYWxsZXRlKi9cbiAgICAtLXByaW1hcnktY29sb3I6ICMxNGI4YTY7IC8qVGVhbDUwMCovXG4gICAgLS1wcmltYXJ5LWNvbG9yLTQwMDogIzJkZDRiZjtcbiAgICAtLXByaW1hcnktY29sb3ItMjAwOiAjOTlmNmU0O1xuICAgIC0tcHJpbWFyeS1jb2xvci0xMDA6ICNjY2ZiZjE7XG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICNmOTczMTY7IC8qT3JhbmdlNTAwKi9cbiAgICAtLXNlY29uZGFyeS1jb2xvci00MDA6ICNmYjkyM2M7XG4gICAgLS1zZWNvbmRhcnktY29sb3ItMzAwOiAjZmRiYTc0O1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yLTIwMDogI2ZlZDdhYTtcbiAgICAtLXNlY29uZGFyeS1jb2xvci0xMDA6ICNmZmVkZDU7IFxuICAgIC0tbmV1dHJhbC1jb2xvcjogIzBhMGEwYTsgIC8qTmV1dHJhbDk1MCovXG4gICAgLS1uZXV0cmFsLWNvbG9yLTcwMDogIzQwNDA0MDtcbiAgICAtLW5ldXRyYWwtY29sb3ItNjAwOiAjNTI1MjUyO1xuICAgIC0tbmV1dHJhbC1jb2xvci01MDA6ICM3MzczNzM7XG4gICAgLS1uZXV0cmFsLWNvbG9yLTQwMDogI2E4YTI5ZTtcbiAgICAtLW5ldXRyYWwtY29sb3ItMzAwOiAjZDZkM2QxO1xuICAgIC0tbmV1dHJhbC1jb2xvci0yMDA6ICNlNWU1ZTU7XG4gICAgLS1uZXV0cmFsLWNvbG9yLTE1MDogI2VkZWRlZDtcbiAgICAtLW5ldXRyYWwtY29sb3ItMTAwOiAjZjVmNWY1O1xuICAgIC0tbmV1dHJhbC1jb2xvci01MDogI2ZhZmFmYTsgXG5cbiAgICAtLWRvLWNvbG9yOiAjZDAwMjFiO1xuICAgIC0tc2NoZWR1bGUtY29sb3I6ICNGNUE2MjM7XG4gICAgLS1kZWxlZ2F0ZS1jb2xvcjogIzRBOTBFMjtcbiAgICAtLWVsaW1pbmF0ZS1jb2xvcjojYmJiYmJiO1xuXG4gICAgLS10ZXh0LWNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yKTtcbiAgICAtLXRleHQtY29sb3Itd2hpdGU6IHZhcigtLW5ldXRyYWwtY29sb3ItNTApO1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci0yMDApO1xuICAgIC0tc3VyZmFjZS1jb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci01MCk7XG59XG5cbi8qIFJlc2V0IENTUyAqL1xuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBwaW5rOyAqL1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCxcbmE6ZGlzYWJsZWR7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBmb250LXNpemU6IHZhcigtLXRhYmxlLWZvbnQtc2l6ZSk7XG59XG5cblxuLyogUGFydHMgKi9cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgYWNjZW50LWNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTUwMCk7XG59XG5cbmJ1dHRvbi5hZGQge1xuICAgIHdpZHRoOiB2YXIoLS1hZGQtYnV0dG9uLXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0tYWRkLWJ1dHRvbi1zaXplKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IGNhbGModmFyKC0tYWRkLWJ1dHRvbi1zaXplKSAtIHZhcigtLWd1dHRlcikpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiBjYWxjKHZhcigtLWZvb3Rlci1oZWlnaHQpICsgdmFyKC0tZ3V0dGVyKSk7XG4gICAgcmlnaHQ6IGNhbGMoNTB2dyAtICh2YXIoLS10YWJsZS13aWR0aCkgLyAyKSArIHZhcigtLWd1dHRlcikpO1xufVxuXG5idXR0b24udG9nZ2xlIHtcbiAgICB3aWR0aDogMTFjaDtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgcGFkZGluZzogMCAwLjRyZW0gMCAxcmVtO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNXJlbTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJsYWJlbCBrbm9iXCI7IFxufVxuXG5idXR0b24udG9nZ2xlIHNwYW4ge1xuICBncmlkLWFyZWE6IGxhYmVsO1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xufVxuXG5idXR0b24udG9nZ2xlIHN2ZyB7XG4gICAgZ3JpZC1hcmVhOiBrbm9iO1xufVxuXG5idXR0b24udG9nZ2xlW3ZhbHVlPVwib25cIl0gc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuXG4vKiBDb21tb24gc2VjdGlvbnMqL1xuXG5ib2R5IHtcbiAgICAvKiByZXF1aXJlZCB0byBtYWtlIHRoZSBmb290ZXIgc3RpY2sgdG8gdGhlIGJvdHRvbSovXG4gICAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgICAvKiB0aGlzIG1ha2VzIHRoZSB3aWR0aCBjaGFuZ2UgKHRodXMgdGFibGUgcG9zaXRpb24pICovXG4gICAgLyogZGVwZW5kaW5nIG9uIHRoZSBoZWlnaHQgYmVjYXVzZSBvZiB0aGUgdmVydGljYWwgc2Nyb2xsYmFyICovXG4gICAgLyogMTAwdncgd291bGQgbWFrZSBpdCBzdGFibGUgYnV0IGNhdXNlcyBob3Jpem9udGFsIG92ZXJmbG93Ki9cbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1oZWFkZXItaGVpZ2h0KSAxZnIgdmFyKC0tZm9vdGVyLWhlaWdodCk7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1icmFuZC1oZWlnaHQpIHZhcigtLW5hdi1oZWlnaHQpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmhlYWRlciBoMSB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJyYW5kLWZvbnQtZmFtaWx5KTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xY2g7XG4gICAgZm9udC1zaXplOiB2YXIoLS1sb2dvLWZvbnQtc2l6ZSk7XG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLWd1dHRlcik7XG59XG5cbm5hdiB7XG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaGVpZ2h0KTtcbiAgICBmb250LXNpemU6IHZhcigtLW5hdi1mb250LXNpemUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwtY29sb3ItMjAwKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxubmF2IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci0yMDApO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tbmF2LWZvbnQtc2l6ZSk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1ndXR0ZXIpO1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tZ3V0dGVyKTtcbn1cblxubmF2IGJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTQwMCk7XG59XG5cbm5hdiBidXR0b24uc2VsZWN0ZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci02MDApO1xuICAgIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTUwKTtcbn1cblxuYnV0dG9uLmRyb3BidG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWNvbG9yKTtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tZ3V0dGVyKSAvIDIpIHZhcigtLWd1dHRlcik7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEluc2VydCBzZXBhcmF0aW9uIGxpbmUgYmVmb3JlICovXG4uZHJvcGRvd24tY29udGVudCBhLnNlcGFyYXRle1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1uZXV0cmFsLWNvbG9yLTMwMCk7XG59XG5cbi8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci0zMDApO31cblxuLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtkaXNwbGF5OiBibG9jazt9XG5cblxuXG4jY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgcGFkZGluZzogdmFyKC0tZ3V0dGVyKTtcbn1cblxuXG5mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogdmFyKC0tZ3V0dGVyKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG5cblxuLyogVG9kbyB0YWJsZSAqL1xuI2NvbnRlbnQgYTpob3ZlciB7XG4gICAgZm9udC13ZWlnaHQ6NzAwO1xufVxuXG5jYXB0aW9uIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tY29udGVudC1oMS1mb250LXNpemUpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1ndXR0ZXIpICogMik7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogdmFyKC0tdGFibGUtd2lkdGgpO1xuICAgIG1hcmdpbjogdmFyKC0tZ3V0dGVyKSBcbiAgICAgICAgYXV0byBcbiAgICAgICAgY2FsYyh2YXIoLS1hZGQtYnV0dG9uLXNpemUpICogMilcbn1cblxudGhlYWQsIHRib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1yb3dzOiB2YXIoLS10YWJsZS1saW5lLWhlaWdodCk7XG4gICAgZ2FwOiB2YXIoLS1ndXR0ZXIpO1xufVxuXG50ciB7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tZ3V0dGVyKTtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWd1dHRlcik7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmNoIDFmciAxMGNoIDEwY2ggMTBjaCAxMGNoO1xuICAgIGdhcDogY2FsYyh2YXIoLS1ndXR0ZXIpKjIpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxudGJvZHkgdHIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtY29sb3IpO1xufVxuXG50aCwgdGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGQuc2VsZWN0IHtcbiAgICAvKiBUaGlzIGlzIG5lY2Vzc2FyeSB0byBmaXQgY2hlY2tib3ggdG8gdGhlIGhlaWdodCovXG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG50ZC5wcmlvcml0eSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG50aD5hLCB0ZD5hIHtcbiAgICAvKiBUbyBtYWtlIGEgd2hvbGUgY2VsbCBjbGlja2FibGUgYW5kIGNlbnRlci1hbGlnbiovXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxudHIgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxudGgudGl0bGUsIFxudGQudGl0bGUsIFxudGgucHJpb3JpdHksXG50ZC5wcmlvcml0eSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGgudGl0bGVbc2NvcGU9XCJyb3dcIl0ge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbnRkLnByaW9yaXR5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFjaDtcbn1cblxudHIuZG8gdGQucHJpb3JpdHkge1xuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdmFyKC0tZG8tY29sb3IpO1xufVxuXG50ci5zY2hlZHVsZSB0ZC5wcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB2YXIoLS1zY2hlZHVsZS1jb2xvcik7XG59XG5cbnRyLmRlbGVnYXRlIHRkLnByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHZhcigtLWRlbGVnYXRlLWNvbG9yKTtcbn1cblxudHIuZWxpbWluYXRlIHRkLnByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHZhcigtLWVsaW1pbmF0ZS1jb2xvcik7XG59XG5cbnRhYmxlLnRvZG9zIHRkLnN0YXR1cyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbnRhYmxlLnRvZG9zIC5idXR0b24tbGlrZS1jaGVja2JveC13cmFwcGVyIHtcbiAgICAtLWJ1dHRvbi1oZWlnaHQ6IDMycHg7XG4gICAgLS1idXR0b24td2lkdGg6IDEyY2g7XG59XG5cbnRhYmxlLnRvZG9zIC5idXR0b24tbGlrZS1jaGVja2JveC13cmFwcGVyIHNwYW57XG4gICAgZm9udC1zaXplOiB2YXIoLS10YWJsZS1mb250LXNpemUpO1xufVxuXG50ZC5wcm9qZWN0IHtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbnRkLnByb2plY3QgYSB7XG4gICAgd2lkdGg6IDEwY2g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG5idXR0b24ubXVsdGktZGVsZXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IHZhcigtLXRhYmxlLWxpbmUtaGVpZ2h0KTtcbn1cblxuYnV0dG9uLm11bHRpLWRlbGV0ZSBpbWd7XG4gICAgd2lkdGg6IGNhbGModmFyKC0tdGFibGUtZm9udC1zaXplKSAqIDEuMyk7XG59XG5cbmJ1dHRvbi5tdWx0aS1kZWxldGU6ZGlzYWJsZWQgaW1ne1xuICAgIGZpbHRlcjpjb250cmFzdCgwLjEpO1xufVxuXG5idXR0b24ubXVsdGktZGVsZXRlOmVuYWJsZWQ6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4vKiBObyB0YXNrIGZvdW5kIG1lc3NhZ2UgKi9cbi5lbXB0eSB7XG4gICAgd2lkdGg6IHZhcigtLXRhYmxlLXdpZHRoKTtcbiAgICBtYXJnaW46IHZhcigtLWd1dHRlcikgYXV0byBjYWxjKHZhcigtLWFkZC1idXR0b24tc2l6ZSkgKiAyKTtcbn1cblxuLmVtcHR5IGgxe1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiB2YXIoLS1jb250ZW50LWgxLWZvbnQtc2l6ZSk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWd1dHRlcikgKiAyKTtcbn1cblxuLmVtcHR5IHAge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tY29udGVudC1oMi1mb250LXNpemUpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cblxuLyogT3ZlcnJpZGlpbmcgcnVsZXMgZm9yIHByb2plY3RzIHRhYmxlICovXG50YWJsZS5wcm9qZWN0cyB0aGVhZHtcbiAgICBnYXA6IDA7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IGNhbGModmFyKC0tdGFibGUtbGluZS1oZWlnaHQpKSA7XG59XG50YWJsZS5wcm9qZWN0cyB0ciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyY2ggMWZyIHJlcGVhdCg0LCA4Y2gpIDE1Y2g7XG59XG5cblxudHIuc3VtbWFyeSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyY2ggMWZyIGNhbGMoKHZhcigtLWd1dHRlcikgKiA4KSArIDQ3Y2gpO1xufVxudHIuc3VtbWFyeSB0aCB7XG4gICAgZ3JpZC1jb2x1bW46IDMgLyA2O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLW5ldXRyYWwtY29sb3ItNDAwKTtcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbnRhYmxlLnByb2plY3RzIHRoLnRvZG9zLFxudGFibGUucHJvamVjdHMgdGQudG9kb3MsXG50YWJsZS5wcm9qZWN0cyB0aC5ub3QtZG9uZSxcbnRhYmxlLnByb2plY3RzIHRkLm5vdC1kb25lLFxudGFibGUucHJvamVjdHMgdGgub3ZlcmR1ZSxcbnRhYmxlLnByb2plY3RzIHRkLm92ZXJkdWUsXG50YWJsZS5wcm9qZWN0cyB0aC5wcm9ncmVzcyxcbnRhYmxlLnByb2plY3RzIHRkLnByb2dyZXNzIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxudGFibGUucHJvamVjdHMgdGQudG9kb3MsXG50YWJsZS5wcm9qZWN0cyB0ZC5ub3QtZG9uZSxcbnRhYmxlLnByb2plY3RzIHRkLm92ZXJkdWUsXG50YWJsZS5wcm9qZWN0cyB0ZC5wcm9ncmVzcyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cblxudGFibGUucHJvamVjdHMgdGQ+YTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTEwMCk7XG5cbiAgICAvKiBUbyBtYWtlIGhpZ2hsaWdodCBhIGJpdCB3aWRlciB0aGFuIHRoZSBjZWxsIGl0c2VsZiAqL1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgICBjYWxjKC0xICogdmFyKC0tZ3V0dGVyKSkgMCB2YXIoLS1zZWNvbmRhcnktY29sb3ItMTAwKSxcbiAgICAgICAgdmFyKC0tZ3V0dGVyKSAwIHZhcigtLXNlY29uZGFyeS1jb2xvci0xMDApXG4gICAgO1xufVxuXG5cblxudGgudGl0bGUsXG50ZC5wcm9qZWN0IHtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbnRkLnRpdGxlIGEge1xuICAgIHdpZHRoOiBhdXRvO1xufVxuXG50ZC5wcm9qZWN0IGEge1xuICAgIHdpZHRoOiAxMGNoO1xufVxuXG50aC50aXRsZSBhLFxudGQucHJvamVjdCBhIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbnRhYmxlLnByb2plY3RzIHN2ZyB7XG4gICAgZmlsbDogdmFyKC0tbmV1dHJhbC1jb2xvci0xNTApO1xufVxuXG50YWJsZS5wcm9qZWN0cyAub3ZlcjI1IHN2ZyB7XG4gICAgZmlsbDogdmFyKC0tbmV1dHJhbC1jb2xvci0yMDApO1xufVxuXG50YWJsZS5wcm9qZWN0cyAub3ZlcjUwIHN2ZyB7XG4gICAgZmlsbDogdmFyKC0tbmV1dHJhbC1jb2xvci0zMDApO1xufVxuXG50YWJsZS5wcm9qZWN0cyAub3Zlcjc1IHN2ZyB7XG4gICAgZmlsbDogdmFyKC0tbmV1dHJhbC1jb2xvci00MDApO1xufVxuXG50YWJsZS5wcm9qZWN0cyAuY29tcGxldGUgc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuXG4vKiBNb2RhbCBkaWFsb2cgKi9cblxuZGlhbG9nIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaW5zZXQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tZ3V0dGVyKSAqIDIpO1xuICAgIHdpZHRoOiB2YXIoLS10YWJsZS13aWR0aCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuYnV0dG9uLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBjYWxjKHZhcigtLWd1dHRlcikgKiAxKTtcbiAgICByaWdodDogY2FsYyh2YXIoLS1ndXR0ZXIpICogMSk7XG4gICAgd2lkdGg6IHZhcigtLWNsb3NlLWJ1dHRvbi1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWNsb3NlLWJ1dHRvbi1zaXplKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG5idXR0b24uY2xvc2U+aW1nIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogODAlO1xufVxuXG5kaWFsb2cgaDEge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tY29udGVudC1oMS1mb250LXNpemUpO1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tZ3V0dGVyKSoyKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuZGlhbG9nOjpiYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuZm9ybSB7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdhcDogdmFyKC0tZ3V0dGVyKTtcbn1cblxuZm9ybSBsYWJlbCwgXG4uc3RhdHVzLXdyYXBwZXIsXG4ucHJpb3JpdHktd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEyY2ggMWZyO1xuICAgIGNvbHVtbi1nYXA6IHZhcigtLWd1dHRlcik7XG4gICAgLyogcm93LWdhcDogY2FsYyh2YXIoLS1ndXR0ZXIpIC8gMik7ICovXG59XG5cbmZvcm0gbGFiZWwgPiAuYWxlcnQsIFxuLnByaW9yaXR5LXdyYXBwZXIgPiAuYWxlcnR7XG4gICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgY29sb3I6IHZhcigtLWRvLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbmZvcm0+bGFiZWwsXG4ucHJpb3JpdHktd3JhcHBlcixcbi5idXR0b24td3JhcHBlcixcbi5zdGF0dXMtd3JhcHBlcixcbi5wcmlvcml0eS1kaXNwbGF5IHtcbiAgICBmb250LXNpemU6IHZhcigtLWNvbnRlbnQtaDItZm9udC1zaXplKTtcbn1cblxuZm9ybT5sYWJlbCxcbi5wcmlvcml0eS13cmFwcGVyPi5sYWJlbCxcbi5zdGF0dXMtd3JhcHBlcj4ubGFiZWwge1xuICAgIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTcwMCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0sXG5mb3JtIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tY29udGVudC1oMy1mb250LXNpemUpO1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uZXV0cmFsLWNvbG9yLTQwMCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxuZm9ybSBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpmb2N1cyxcbmZvcm0gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMsXG5zZWxlY3Q6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgb3V0bGluZTogNHB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG5mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuZm9ybSBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWd1dHRlcikgLyAyKSB2YXIoLS1ndXR0ZXIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwtY29sb3ItMTAwKTtcbn1cblxuZm9ybSBpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XG4gICAgYm94LXNpemluZzogY29udGVudC1iaG94O1xuICAgIHdpZHRoOiAxNWNoO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xufVxuXG4ucHJpb3JpdHktaW5wdXQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMmNoIDEyY2ggMWZyO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgY29sdW1uLWdhcDogdmFyKC0tZ3V0dGVyKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJpb3JpdHktaW5wdXQtd3JhcHBlciAucHJvbXB0LFxuLnByaW9yaXR5LWlucHV0LXdyYXBwZXIgYSB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbn1cblxuLnByaW9yaXR5LWlucHV0LXdyYXBwZXIgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBoZWlnaHQ6IDgwJTtcbn1cblxuLnByaW9yaXR5LWlucHV0LXdyYXBwZXIgaW1nIHtcbiAgICBoZWlnaHQ6IDJjaFxufVxuXG4ucHJpb3JpdHktZGlzcGxheSB7XG4gICAgZ3JpZC1jb2x1bW46IDM7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggdmFyKC0tbmV1dHJhbC1jb2xvci00MDApO1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tZ3V0dGVyKS8yKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYucHJpb3JpdHktZGlzcGxheVtkYXRhLXZhbHVlPVwiZG9cIl17XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZG8tY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcbn1cblxuZGl2LnByaW9yaXR5LWRpc3BsYXlbZGF0YS12YWx1ZT1cInNjaGVkdWxlXCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY2hlZHVsZS1jb2xvcik7XG59XG5cbmRpdi5wcmlvcml0eS1kaXNwbGF5W2RhdGEtdmFsdWU9XCJkZWxlZ2F0ZVwiXXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWxlZ2F0ZS1jb2xvcik7XG59XG5cbmRpdi5wcmlvcml0eS1kaXNwbGF5W2RhdGEtdmFsdWU9XCJlbGltaW5hdGVcIl0gIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lbGltaW5hdGUtY29sb3IpO1xuICAgIC8qIEZvciBiZXR0ZXIgY29udHJhc3QgKi9cbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmZpZWxkc2V0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1ndXR0ZXIpLzIpIHZhcigtLWd1dHRlcik7XG59XG5cbmZpZWxkc2V0IGxhYmVsIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJjaCAxZnI7XG4gICAgZ2FwOiAwLjc1Y2g7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByaW9yaXR5LWlucHV0LXdyYXBwZXIgYSB7XG4gICAgZm9udC1zaXplOiBpbml0aWFsO1xufVxuXG4ucHJpb3JpdHktaW5wdXQtd3JhcHBlciBhOm5vdCg6aG92ZXIpIC5tb3JlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5wcmlvcml0eS1pbnB1dC13cmFwcGVyIGE6aG92ZXIgLm1vcmUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi5idXR0b24td3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEyY2ggcmVwZWF0KDIsIDFmcik7XG4gICAgZ2FwOiB2YXIoLS1ndXR0ZXIpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IHZhcigtLWd1dHRlcik7XG59XG5cbmZvcm0gYnV0dG9uIHtcbiAgICBmb250LXNpemU6IHZhcigtLWNvbnRlbnQtaDItZm9udC1zaXplKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWd1dHRlcikvMikgNWNoO1xuICAgIGJvcmRlci1yYWRpdXM6IDJjaDtcbn1cblxuZGlhbG9nIGJ1dHRvbjpob3ZlcixcbmRpYWxvZyBidXR0b246Zm9jdXMge1xuICAgIG91dGxpbmU6IDRweCBzb2xpZCB2YXIoLS1uZXV0cmFsLWNvbG9yLTYwMCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpYWxvZyBidXR0b246YWN0aXZlIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wNSk7XG59XG5cbmJ1dHRvbi5jYW5jZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwtY29sb3ItMzAwKTtcbiAgICBncmlkLWNvbHVtbjogMjtcbn1cblxuYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgIGdyaWQtY29sdW1uOiAzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG5cbi8qIFRvZG8gRGlzcGxheSAvIEVkaXQgRm9ybSBzcGVjaWZpYyAqL1xuZGlhbG9nIC5idXR0b24tbGlrZS1jaGVja2JveC13cmFwcGVyIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tY29udGVudC1oMi1mb250LXNpemUpO1xufVxuXG4vKiBUb2RvIHNpbmdsZSBkaXNwbGF5IHNwZWNpZmljKi9cbi50b2RvLnNpbmdsZS1kaXNwbGF5IC5idXR0b24tbGlrZS1jaGVja2JveC13cmFwcGVyPmxhYmVsOmhvdmVye1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuXG4vKiBUb2RvIC8gUHJvamVjdCBzaW5nbGUgZGlzcGxheSovXG4uc2luZ2xlLWRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiB2YXIoLS1ndXR0ZXIpO1xufVxuXG4uc2luZ2xlLWRpc3BsYXk+LnJvdyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBmb250LXNpemU6IHZhcigtLWNvbnRlbnQtaDItZm9udC1zaXplKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDExY2ggMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBnYXA6IHZhcigtLWd1dHRlcik7XG59XG5cbi5zaW5nbGUtZGlzcGxheT5mb3JtIHtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZm9udC1zaXplOiB2YXIoLS1jb250ZW50LWgyLWZvbnQtc2l6ZSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMWNoIDFmciAxZnI7XG4gICAgZ2FwOiB2YXIoLS1ndXR0ZXIpO1xufVxuXG4uc2luZ2xlLWRpc3BsYXkgLmNhbmNlbCB7XG4gICAgZ3JpZC1jb2x1bW46IDI7XG59XG5cbi5zaW5nbGUtZGlzcGxheSAuZWRpdCB7XG4gICAgZ3JpZC1jb2x1bW46IDM7XG59XG5cbi5zaW5nbGUtZGlzcGxheSAubGFiZWwge1xuICAgIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTcwMCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zaW5nbGUtZGlzcGxheSAuZGVzY3JpcHRpb24gLmRhdGEge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tY29udGVudC1oMy1mb250LXNpemUpO1xufVxuXG4uc2luZ2xlLWRpc3BsYXkgLnByaW9yaXR5LnJvdyB7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uc2luZ2xlLWRpc3BsYXkgLnByaW9yaXR5LWRpc3BsYXkge1xuICAgIHdpZHRoOiAxMmNoO1xufVxuXG4uc2luZ2xlLWRpc3BsYXkgLnByaW9yaXR5IGEge1xuICAgIGZvbnQtc2l6ZTogaW5pdGlhbDtcbn1cblxuLnNpbmdsZS1kaXNwbGF5IC5wcmlvcml0eSBhOm5vdCg6aG92ZXIpIC5tb3JlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5zaW5nbGUtZGlzcGxheSAucHJpb3JpdHkgYTpob3ZlciAubW9yZSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLnNpbmdsZS1kaXNwbGF5IC5lZGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLyogU3RhdHVzIFRvZ2dsZSAqL1xuLmJ1dHRvbi1saWtlLWNoZWNrYm94LXdyYXBwZXIge1xuICAgIC8qIFBhcmFtZXRlcnMgZm9yIHRoZSBjb21wb25lbnQgYXBwZWFyYW5jZSAqL1xuICAgIC0tYnV0dG9uLWhlaWdodDogY2FsYyh2YXIoLS1jb250ZW50LWgyLWZvbnQtc2l6ZSkgKyB2YXIoLS1ndXR0ZXIpKTtcbiAgICAtLWJ1dHRvbi13aWR0aDogMTgwcHg7XG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbiAgICAtLWJ1dHRvbi1vbi1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgLS1idXR0b24tb2ZmLWNvbG9yOiB3aGl0ZTtcblxuICAgIC0tYnV0dG9uLWxhYmVsLWhlaWdodDogY2FsYyh2YXIoLS1idXR0b24taGVpZ2h0KSAqIDAuNik7XG4gICAgLS1idXR0b24tcGFkZGluZzogY2FsYyh2YXIoLS1idXR0b24taGVpZ2h0KSAqIDAuMik7XG4gICAgZm9udC1zaXplOiBpbml0aWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xuICAgIHdpZHRoOiB2YXIoLS1idXR0b24td2lkdGgpO1xuICAgIGhlaWdodDogdmFyKC0tYnV0dG9uLWhlaWdodCk7XG59XG5cbi5idXR0b24tbGlrZS1jaGVja2JveC13cmFwcGVyPmxhYmVsIHtcbiAgZGlzcGxheTogZmxleDsgIFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1heC1oZWlnaHQ6IHZhcigtLWJ1dHRvbi1oZWlnaHQpO1xuICBmb250LXNpemU6IHZhcigtLWJ1dHRvbi1sYWJlbC1oZWlnaHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvcik7XG4gIHBhZGRpbmc6IHZhcigtLWJ1dHRvbi1wYWRkaW5nKTtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWJ1dHRvbi1wYWRkaW5nKSAqIDIpO1xuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWJ1dHRvbi1oZWlnaHQpICogMC41KTtcbn1cblxuLmJ1dHRvbi1saWtlLWNoZWNrYm94LXdyYXBwZXI+bGFiZWw6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9uLWxpa2UtY2hlY2tib3gtd3JhcHBlciBzcGFuIHtcbiAgZmxleDogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5idXR0b24tbGlrZS1jaGVja2JveC13cmFwcGVyIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIGZsZXg6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjhlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1vZmYtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxY2g7XG4gIGhlaWdodDogMWNoO1xufVxuXG4uYnV0dG9uLWxpa2UtY2hlY2tib3gtd3JhcHBlciBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxY2g7XG4gIGhlaWdodDogMWNoO1xuICBjbGlwLXBhdGg6IGNpcmNsZSg1MCUgYXQgNTAlIDUwJSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1vbi1jb2xvcik7XG59XG5cblxuLmJ1dHRvbi1saWtlLWNoZWNrYm94LXdyYXBwZXIgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHdpZHRoOiAxY2g7XG4gIGhlaWdodDogMWNoO1xufVxuXG5mb3JtIC5idXR0b24tbGlrZS1jaGVja2JveC13cmFwcGVyIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpmb2N1cyB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWJ1dHRvbi1vbi1jb2xvcik7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlDQUFpQztFQUNqQzswREFDK0Q7RUFDL0QsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7OztBQUlBO0lBQ0ksY0FBYzs7SUFFZCxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qiw4REFBOEQ7SUFDOUQscUJBQXFCOztJQUVyQixjQUFjO0lBQ2QsMkRBQTJEO0lBQzNELHdEQUF3RDtJQUN4RCw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qix5QkFBeUI7O0lBRXpCLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2Qix5QkFBeUI7O0lBRXpCLGdCQUFnQjtJQUNoQixvREFBb0Q7O0lBRXBELCtCQUErQjtJQUMvQix3QkFBd0IsRUFBRSxVQUFVO0lBQ3BDLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDBCQUEwQixFQUFFLFlBQVk7SUFDeEMsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsOEJBQThC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QUFDN0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ2xlYWd1ZV9zcGFydGFuYm9sZCc7XFxuICBzcmM6IHVybCgnLi9mb250cy9sZWFndWVzcGFydGFuLWJvbGQtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgdXJsKCcuL2ZvbnRzL2xlYWd1ZXNwYXJ0YW4tYm9sZC13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcblxcblxcbjpyb290IHtcXG4gICAgLS1ndXR0ZXI6IDE2cHg7XFxuXFxuICAgIC8qIFNlY3Rpb24gc2l6ZSAqL1xcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcXG4gICAgLS1icmFuZC1oZWlnaHQ6IDMuNXJlbTtcXG4gICAgLS1uYXYtaGVpZ2h0OiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpIC0gdmFyKC0tYnJhbmQtaGVpZ2h0KSk7XFxuICAgIC0tZm9vdGVyLWhlaWdodDogMnJlbTtcXG5cXG4gICAgLyogRm9udCBzaXplICovXFxuICAgIC0tbG9nby1mb250LXNpemU6IGNhbGModmFyKC0tYnJhbmQtaGVpZ2h0KSAtIHZhcigtLWd1dHRlcikpO1xcbiAgICAtLW5hdi1mb250LXNpemU6IGNhbGModmFyKC0tbmF2LWhlaWdodCkgLSB2YXIoLS1ndXR0ZXIpKTtcXG4gICAgLS1jb250ZW50LWgxLWZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICAtLWNvbnRlbnQtaDItZm9udC1zaXplOiAxLjVyZW07XFxuICAgIC0tY29udGVudC1oMy1mb250LXNpemU6IDEuMnJlbTtcXG4gICAgLS10YWJsZS1mb250LXNpemU6IDEuMXJlbTtcXG5cXG4gICAgLyogT3RoZXIgc2l6ZSovXFxuICAgIC0tdGFibGUtd2lkdGg6IG1pbig5MDBweCwgMTAwJSk7XFxuICAgIC0tdGFibGUtbGluZS1oZWlnaHQ6IDMuNXJlbTtcXG4gICAgLS1hZGQtYnV0dG9uLXNpemU6IDRyZW07XFxuICAgIC0tY2xvc2UtYnV0dG9uLXNpemU6IDNyZW07XFxuXFxuICAgIC8qIEZvbnQgZmFtaWx5ICovXFxuICAgIC0tYnJhbmQtZm9udC1mYW1pbHk6ICdsZWFndWVfc3BhcnRhbmJvbGQnLCBzYW4tc2VyaWY7XFxuXFxuICAgIC8qIEZyb20gVGFpbHdpbmQgY29sb3IgcGFsbGV0ZSovXFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzE0YjhhNjsgLypUZWFsNTAwKi9cXG4gICAgLS1wcmltYXJ5LWNvbG9yLTQwMDogIzJkZDRiZjtcXG4gICAgLS1wcmltYXJ5LWNvbG9yLTIwMDogIzk5ZjZlNDtcXG4gICAgLS1wcmltYXJ5LWNvbG9yLTEwMDogI2NjZmJmMTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICNmOTczMTY7IC8qT3JhbmdlNTAwKi9cXG4gICAgLS1zZWNvbmRhcnktY29sb3ItNDAwOiAjZmI5MjNjO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvci0zMDA6ICNmZGJhNzQ7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yLTIwMDogI2ZlZDdhYTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3ItMTAwOiAjZmZlZGQ1OyBcXG4gICAgLS1uZXV0cmFsLWNvbG9yOiAjMGEwYTBhOyAgLypOZXV0cmFsOTUwKi9cXG4gICAgLS1uZXV0cmFsLWNvbG9yLTcwMDogIzQwNDA0MDtcXG4gICAgLS1uZXV0cmFsLWNvbG9yLTYwMDogIzUyNTI1MjtcXG4gICAgLS1uZXV0cmFsLWNvbG9yLTUwMDogIzczNzM3MztcXG4gICAgLS1uZXV0cmFsLWNvbG9yLTQwMDogI2E4YTI5ZTtcXG4gICAgLS1uZXV0cmFsLWNvbG9yLTMwMDogI2Q2ZDNkMTtcXG4gICAgLS1uZXV0cmFsLWNvbG9yLTIwMDogI2U1ZTVlNTtcXG4gICAgLS1uZXV0cmFsLWNvbG9yLTE1MDogI2VkZWRlZDtcXG4gICAgLS1uZXV0cmFsLWNvbG9yLTEwMDogI2Y1ZjVmNTtcXG4gICAgLS1uZXV0cmFsLWNvbG9yLTUwOiAjZmFmYWZhOyBcXG5cXG4gICAgLS1kby1jb2xvcjogI2QwMDIxYjtcXG4gICAgLS1zY2hlZHVsZS1jb2xvcjogI0Y1QTYyMztcXG4gICAgLS1kZWxlZ2F0ZS1jb2xvcjogIzRBOTBFMjtcXG4gICAgLS1lbGltaW5hdGUtY29sb3I6I2JiYmJiYjtcXG5cXG4gICAgLS10ZXh0LWNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yKTtcXG4gICAgLS10ZXh0LWNvbG9yLXdoaXRlOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTUwKTtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTIwMCk7XFxuICAgIC0tc3VyZmFjZS1jb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci01MCk7XFxufVxcblxcbi8qIFJlc2V0IENTUyAqL1xcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHBpbms7ICovXFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCxcXG5hOmRpc2FibGVke1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS10YWJsZS1mb250LXNpemUpO1xcbn1cXG5cXG5cXG4vKiBQYXJ0cyAqL1xcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gIGFjY2VudC1jb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci01MDApO1xcbn1cXG5cXG5idXR0b24uYWRkIHtcXG4gICAgd2lkdGg6IHZhcigtLWFkZC1idXR0b24tc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tYWRkLWJ1dHRvbi1zaXplKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IGNhbGModmFyKC0tYWRkLWJ1dHRvbi1zaXplKSAtIHZhcigtLWd1dHRlcikpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogY2FsYyh2YXIoLS1mb290ZXItaGVpZ2h0KSArIHZhcigtLWd1dHRlcikpO1xcbiAgICByaWdodDogY2FsYyg1MHZ3IC0gKHZhcigtLXRhYmxlLXdpZHRoKSAvIDIpICsgdmFyKC0tZ3V0dGVyKSk7XFxufVxcblxcbmJ1dHRvbi50b2dnbGUge1xcbiAgICB3aWR0aDogMTFjaDtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBwYWRkaW5nOiAwIDAuNHJlbSAwIDFyZW07XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNXJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibGFiZWwga25vYlxcXCI7IFxcbn1cXG5cXG5idXR0b24udG9nZ2xlIHNwYW4ge1xcbiAgZ3JpZC1hcmVhOiBsYWJlbDtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbmJ1dHRvbi50b2dnbGUgc3ZnIHtcXG4gICAgZ3JpZC1hcmVhOiBrbm9iO1xcbn1cXG5cXG5idXR0b24udG9nZ2xlW3ZhbHVlPVxcXCJvblxcXCJdIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG5cXG4vKiBDb21tb24gc2VjdGlvbnMqL1xcblxcbmJvZHkge1xcbiAgICAvKiByZXF1aXJlZCB0byBtYWtlIHRoZSBmb290ZXIgc3RpY2sgdG8gdGhlIGJvdHRvbSovXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbiAgICAvKiB0aGlzIG1ha2VzIHRoZSB3aWR0aCBjaGFuZ2UgKHRodXMgdGFibGUgcG9zaXRpb24pICovXFxuICAgIC8qIGRlcGVuZGluZyBvbiB0aGUgaGVpZ2h0IGJlY2F1c2Ugb2YgdGhlIHZlcnRpY2FsIHNjcm9sbGJhciAqL1xcbiAgICAvKiAxMDB2dyB3b3VsZCBtYWtlIGl0IHN0YWJsZSBidXQgY2F1c2VzIGhvcml6b250YWwgb3ZlcmZsb3cqL1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1oZWFkZXItaGVpZ2h0KSAxZnIgdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogdmFyKC0tYnJhbmQtaGVpZ2h0KSB2YXIoLS1uYXYtaGVpZ2h0KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJyYW5kLWZvbnQtZmFtaWx5KTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWNoO1xcbiAgICBmb250LXNpemU6IHZhcigtLWxvZ28tZm9udC1zaXplKTtcXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLWd1dHRlcik7XFxufVxcblxcbm5hdiB7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWhlaWdodCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbmF2LWZvbnQtc2l6ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwtY29sb3ItMjAwKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXFxubmF2IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwtY29sb3ItMjAwKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1uYXYtZm9udC1zaXplKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tZ3V0dGVyKTtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1ndXR0ZXIpO1xcbn1cXG5cXG5uYXYgYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTQwMCk7XFxufVxcblxcbm5hdiBidXR0b24uc2VsZWN0ZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwtY29sb3ItNjAwKTtcXG4gICAgY29sb3I6IHZhcigtLW5ldXRyYWwtY29sb3ItNTApO1xcbn1cXG5cXG5idXR0b24uZHJvcGJ0biB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5kcm9wZG93biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWNvbG9yKTtcXG4gIG1pbi13aWR0aDogMTYwcHg7XFxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cXG4uZHJvcGRvd24tY29udGVudCBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IGNhbGModmFyKC0tZ3V0dGVyKSAvIDIpIHZhcigtLWd1dHRlcik7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5zZXJ0IHNlcGFyYXRpb24gbGluZSBiZWZvcmUgKi9cXG4uZHJvcGRvd24tY29udGVudCBhLnNlcGFyYXRle1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbmV1dHJhbC1jb2xvci0zMDApO1xcbn1cXG5cXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTMwMCk7fVxcblxcbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cXG5cXG5cXG5cXG4jY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1ndXR0ZXIpO1xcbn1cXG5cXG5cXG5mb290ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IHZhcigtLWd1dHRlcik7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuXFxuXFxuLyogVG9kbyB0YWJsZSAqL1xcbiNjb250ZW50IGE6aG92ZXIge1xcbiAgICBmb250LXdlaWdodDo3MDA7XFxufVxcblxcbmNhcHRpb24ge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IHZhcigtLWNvbnRlbnQtaDEtZm9udC1zaXplKTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1ndXR0ZXIpICogMik7XFxufVxcblxcbnRhYmxlIHtcXG4gICAgd2lkdGg6IHZhcigtLXRhYmxlLXdpZHRoKTtcXG4gICAgbWFyZ2luOiB2YXIoLS1ndXR0ZXIpIFxcbiAgICAgICAgYXV0byBcXG4gICAgICAgIGNhbGModmFyKC0tYWRkLWJ1dHRvbi1zaXplKSAqIDIpXFxufVxcblxcbnRoZWFkLCB0Ym9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1yb3dzOiB2YXIoLS10YWJsZS1saW5lLWhlaWdodCk7XFxuICAgIGdhcDogdmFyKC0tZ3V0dGVyKTtcXG59XFxuXFxudHIge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1ndXR0ZXIpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWd1dHRlcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmNoIDFmciAxMGNoIDEwY2ggMTBjaCAxMGNoO1xcbiAgICBnYXA6IGNhbGModmFyKC0tZ3V0dGVyKSoyKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbnRib2R5IHRyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1jb2xvcik7XFxufVxcblxcbnRoLCB0ZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7IFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnRkLnNlbGVjdCB7XFxuICAgIC8qIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGZpdCBjaGVja2JveCB0byB0aGUgaGVpZ2h0Ki9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG50ZC5wcmlvcml0eSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbnRoPmEsIHRkPmEge1xcbiAgICAvKiBUbyBtYWtlIGEgd2hvbGUgY2VsbCBjbGlja2FibGUgYW5kIGNlbnRlci1hbGlnbiovXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudHIgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbnRoLnRpdGxlLCBcXG50ZC50aXRsZSwgXFxudGgucHJpb3JpdHksXFxudGQucHJpb3JpdHkge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG50aC50aXRsZVtzY29wZT1cXFwicm93XFxcIl0ge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG50ZC5wcmlvcml0eSB7XFxuICAgIHBhZGRpbmctbGVmdDogMWNoO1xcbn1cXG5cXG50ci5kbyB0ZC5wcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdmFyKC0tZG8tY29sb3IpO1xcbn1cXG5cXG50ci5zY2hlZHVsZSB0ZC5wcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdmFyKC0tc2NoZWR1bGUtY29sb3IpO1xcbn1cXG5cXG50ci5kZWxlZ2F0ZSB0ZC5wcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdmFyKC0tZGVsZWdhdGUtY29sb3IpO1xcbn1cXG5cXG50ci5lbGltaW5hdGUgdGQucHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHZhcigtLWVsaW1pbmF0ZS1jb2xvcik7XFxufVxcblxcbnRhYmxlLnRvZG9zIHRkLnN0YXR1cyB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG50YWJsZS50b2RvcyAuYnV0dG9uLWxpa2UtY2hlY2tib3gtd3JhcHBlciB7XFxuICAgIC0tYnV0dG9uLWhlaWdodDogMzJweDtcXG4gICAgLS1idXR0b24td2lkdGg6IDEyY2g7XFxufVxcblxcbnRhYmxlLnRvZG9zIC5idXR0b24tbGlrZS1jaGVja2JveC13cmFwcGVyIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGFibGUtZm9udC1zaXplKTtcXG59XFxuXFxudGQucHJvamVjdCB7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxudGQucHJvamVjdCBhIHtcXG4gICAgd2lkdGg6IDEwY2g7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxufVxcblxcbmJ1dHRvbi5tdWx0aS1kZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogdmFyKC0tdGFibGUtbGluZS1oZWlnaHQpO1xcbn1cXG5cXG5idXR0b24ubXVsdGktZGVsZXRlIGltZ3tcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tdGFibGUtZm9udC1zaXplKSAqIDEuMyk7XFxufVxcblxcbmJ1dHRvbi5tdWx0aS1kZWxldGU6ZGlzYWJsZWQgaW1ne1xcbiAgICBmaWx0ZXI6Y29udHJhc3QoMC4xKTtcXG59XFxuXFxuYnV0dG9uLm11bHRpLWRlbGV0ZTplbmFibGVkOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi8qIE5vIHRhc2sgZm91bmQgbWVzc2FnZSAqL1xcbi5lbXB0eSB7XFxuICAgIHdpZHRoOiB2YXIoLS10YWJsZS13aWR0aCk7XFxuICAgIG1hcmdpbjogdmFyKC0tZ3V0dGVyKSBhdXRvIGNhbGModmFyKC0tYWRkLWJ1dHRvbi1zaXplKSAqIDIpO1xcbn1cXG5cXG4uZW1wdHkgaDF7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tY29udGVudC1oMS1mb250LXNpemUpO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWd1dHRlcikgKiAyKTtcXG59XFxuXFxuLmVtcHR5IHAge1xcbiAgICBmb250LXNpemU6IHZhcigtLWNvbnRlbnQtaDItZm9udC1zaXplKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuXFxuLyogT3ZlcnJpZGlpbmcgcnVsZXMgZm9yIHByb2plY3RzIHRhYmxlICovXFxudGFibGUucHJvamVjdHMgdGhlYWR7XFxuICAgIGdhcDogMDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IGNhbGModmFyKC0tdGFibGUtbGluZS1oZWlnaHQpKSA7XFxufVxcbnRhYmxlLnByb2plY3RzIHRyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyY2ggMWZyIHJlcGVhdCg0LCA4Y2gpIDE1Y2g7XFxufVxcblxcblxcbnRyLnN1bW1hcnkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJjaCAxZnIgY2FsYygodmFyKC0tZ3V0dGVyKSAqIDgpICsgNDdjaCk7XFxufVxcbnRyLnN1bW1hcnkgdGgge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDY7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1uZXV0cmFsLWNvbG9yLTQwMCk7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbnRhYmxlLnByb2plY3RzIHRoLnRvZG9zLFxcbnRhYmxlLnByb2plY3RzIHRkLnRvZG9zLFxcbnRhYmxlLnByb2plY3RzIHRoLm5vdC1kb25lLFxcbnRhYmxlLnByb2plY3RzIHRkLm5vdC1kb25lLFxcbnRhYmxlLnByb2plY3RzIHRoLm92ZXJkdWUsXFxudGFibGUucHJvamVjdHMgdGQub3ZlcmR1ZSxcXG50YWJsZS5wcm9qZWN0cyB0aC5wcm9ncmVzcyxcXG50YWJsZS5wcm9qZWN0cyB0ZC5wcm9ncmVzcyB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG50YWJsZS5wcm9qZWN0cyB0ZC50b2RvcyxcXG50YWJsZS5wcm9qZWN0cyB0ZC5ub3QtZG9uZSxcXG50YWJsZS5wcm9qZWN0cyB0ZC5vdmVyZHVlLFxcbnRhYmxlLnByb2plY3RzIHRkLnByb2dyZXNzIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbnRhYmxlLnByb2plY3RzIHRkPmE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItMTAwKTtcXG5cXG4gICAgLyogVG8gbWFrZSBoaWdobGlnaHQgYSBiaXQgd2lkZXIgdGhhbiB0aGUgY2VsbCBpdHNlbGYgKi9cXG4gICAgYm94LXNoYWRvdzogXFxuICAgICAgICBjYWxjKC0xICogdmFyKC0tZ3V0dGVyKSkgMCB2YXIoLS1zZWNvbmRhcnktY29sb3ItMTAwKSxcXG4gICAgICAgIHZhcigtLWd1dHRlcikgMCB2YXIoLS1zZWNvbmRhcnktY29sb3ItMTAwKVxcbiAgICA7XFxufVxcblxcblxcblxcbnRoLnRpdGxlLFxcbnRkLnByb2plY3Qge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbnRkLnRpdGxlIGEge1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxudGQucHJvamVjdCBhIHtcXG4gICAgd2lkdGg6IDEwY2g7XFxufVxcblxcbnRoLnRpdGxlIGEsXFxudGQucHJvamVjdCBhIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG59XFxuXFxudGFibGUucHJvamVjdHMgc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tbmV1dHJhbC1jb2xvci0xNTApO1xcbn1cXG5cXG50YWJsZS5wcm9qZWN0cyAub3ZlcjI1IHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLW5ldXRyYWwtY29sb3ItMjAwKTtcXG59XFxuXFxudGFibGUucHJvamVjdHMgLm92ZXI1MCBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTMwMCk7XFxufVxcblxcbnRhYmxlLnByb2plY3RzIC5vdmVyNzUgc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tbmV1dHJhbC1jb2xvci00MDApO1xcbn1cXG5cXG50YWJsZS5wcm9qZWN0cyAuY29tcGxldGUgc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcblxcbi8qIE1vZGFsIGRpYWxvZyAqL1xcblxcbmRpYWxvZyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaW5zZXQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1ndXR0ZXIpICogMik7XFxuICAgIHdpZHRoOiB2YXIoLS10YWJsZS13aWR0aCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG5idXR0b24uY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogY2FsYyh2YXIoLS1ndXR0ZXIpICogMSk7XFxuICAgIHJpZ2h0OiBjYWxjKHZhcigtLWd1dHRlcikgKiAxKTtcXG4gICAgd2lkdGg6IHZhcigtLWNsb3NlLWJ1dHRvbi1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1jbG9zZS1idXR0b24tc2l6ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5idXR0b24uY2xvc2U+aW1nIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbmRpYWxvZyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tY29udGVudC1oMS1mb250LXNpemUpO1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWd1dHRlcikqMik7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ2FwOiB2YXIoLS1ndXR0ZXIpO1xcbn1cXG5cXG5mb3JtIGxhYmVsLCBcXG4uc3RhdHVzLXdyYXBwZXIsXFxuLnByaW9yaXR5LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEyY2ggMWZyO1xcbiAgICBjb2x1bW4tZ2FwOiB2YXIoLS1ndXR0ZXIpO1xcbiAgICAvKiByb3ctZ2FwOiBjYWxjKHZhcigtLWd1dHRlcikgLyAyKTsgKi9cXG59XFxuXFxuZm9ybSBsYWJlbCA+IC5hbGVydCwgXFxuLnByaW9yaXR5LXdyYXBwZXIgPiAuYWxlcnR7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBjb2xvcjogdmFyKC0tZG8tY29sb3IpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmZvcm0+bGFiZWwsXFxuLnByaW9yaXR5LXdyYXBwZXIsXFxuLmJ1dHRvbi13cmFwcGVyLFxcbi5zdGF0dXMtd3JhcHBlcixcXG4ucHJpb3JpdHktZGlzcGxheSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tY29udGVudC1oMi1mb250LXNpemUpO1xcbn1cXG5cXG5mb3JtPmxhYmVsLFxcbi5wcmlvcml0eS13cmFwcGVyPi5sYWJlbCxcXG4uc3RhdHVzLXdyYXBwZXI+LmxhYmVsIHtcXG4gICAgY29sb3I6IHZhcigtLW5ldXRyYWwtY29sb3ItNzAwKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmZvcm0gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tY29udGVudC1oMy1mb250LXNpemUpO1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5ldXRyYWwtY29sb3ItNDAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyxcXG5mb3JtIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTpmb2N1cyxcXG5mb3JtIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgb3V0bGluZTogNHB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG5mb3JtIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSxcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWd1dHRlcikgLyAyKSB2YXIoLS1ndXR0ZXIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTEwMCk7XFxufVxcblxcbmZvcm0gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgYm94LXNpemluZzogY29udGVudC1iaG94O1xcbiAgICB3aWR0aDogMTVjaDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XFxufVxcblxcbi5wcmlvcml0eS1pbnB1dC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDJjaCAxMmNoIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgY29sdW1uLWdhcDogdmFyKC0tZ3V0dGVyKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5LWlucHV0LXdyYXBwZXIgLnByb21wdCxcXG4ucHJpb3JpdHktaW5wdXQtd3JhcHBlciBhIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuLnByaW9yaXR5LWlucHV0LXdyYXBwZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIGhlaWdodDogODAlO1xcbn1cXG5cXG4ucHJpb3JpdHktaW5wdXQtd3JhcHBlciBpbWcge1xcbiAgICBoZWlnaHQ6IDJjaFxcbn1cXG5cXG4ucHJpb3JpdHktZGlzcGxheSB7XFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCB2YXIoLS1uZXV0cmFsLWNvbG9yLTQwMCk7XFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tZ3V0dGVyKS8yKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5kaXYucHJpb3JpdHktZGlzcGxheVtkYXRhLXZhbHVlPVxcXCJkb1xcXCJde1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kby1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXG59XFxuXFxuZGl2LnByaW9yaXR5LWRpc3BsYXlbZGF0YS12YWx1ZT1cXFwic2NoZWR1bGVcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjaGVkdWxlLWNvbG9yKTtcXG59XFxuXFxuZGl2LnByaW9yaXR5LWRpc3BsYXlbZGF0YS12YWx1ZT1cXFwiZGVsZWdhdGVcXFwiXXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVsZWdhdGUtY29sb3IpO1xcbn1cXG5cXG5kaXYucHJpb3JpdHktZGlzcGxheVtkYXRhLXZhbHVlPVxcXCJlbGltaW5hdGVcXFwiXSAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lbGltaW5hdGUtY29sb3IpO1xcbiAgICAvKiBGb3IgYmV0dGVyIGNvbnRyYXN0ICovXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tZ3V0dGVyKS8yKSB2YXIoLS1ndXR0ZXIpO1xcbn1cXG5cXG5maWVsZHNldCBsYWJlbCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmNoIDFmcjtcXG4gICAgZ2FwOiAwLjc1Y2g7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eS1pbnB1dC13cmFwcGVyIGEge1xcbiAgICBmb250LXNpemU6IGluaXRpYWw7XFxufVxcblxcbi5wcmlvcml0eS1pbnB1dC13cmFwcGVyIGE6bm90KDpob3ZlcikgLm1vcmUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5wcmlvcml0eS1pbnB1dC13cmFwcGVyIGE6aG92ZXIgLm1vcmUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmJ1dHRvbi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMmNoIHJlcGVhdCgyLCAxZnIpO1xcbiAgICBnYXA6IHZhcigtLWd1dHRlcik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tZ3V0dGVyKTtcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgICBmb250LXNpemU6IHZhcigtLWNvbnRlbnQtaDItZm9udC1zaXplKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tZ3V0dGVyKS8yKSA1Y2g7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJjaDtcXG59XFxuXFxuZGlhbG9nIGJ1dHRvbjpob3ZlcixcXG5kaWFsb2cgYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogNHB4IHNvbGlkIHZhcigtLW5ldXRyYWwtY29sb3ItNjAwKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpYWxvZyBidXR0b246YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMDUpO1xcbn1cXG5cXG5idXR0b24uY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci0zMDApO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG5cXG4vKiBUb2RvIERpc3BsYXkgLyBFZGl0IEZvcm0gc3BlY2lmaWMgKi9cXG5kaWFsb2cgLmJ1dHRvbi1saWtlLWNoZWNrYm94LXdyYXBwZXIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tY29udGVudC1oMi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBUb2RvIHNpbmdsZSBkaXNwbGF5IHNwZWNpZmljKi9cXG4udG9kby5zaW5nbGUtZGlzcGxheSAuYnV0dG9uLWxpa2UtY2hlY2tib3gtd3JhcHBlcj5sYWJlbDpob3ZlcntcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG5cXG4vKiBUb2RvIC8gUHJvamVjdCBzaW5nbGUgZGlzcGxheSovXFxuLnNpbmdsZS1kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiB2YXIoLS1ndXR0ZXIpO1xcbn1cXG5cXG4uc2luZ2xlLWRpc3BsYXk+LnJvdyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tY29udGVudC1oMi1mb250LXNpemUpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDExY2ggMWZyO1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgIGdhcDogdmFyKC0tZ3V0dGVyKTtcXG59XFxuXFxuLnNpbmdsZS1kaXNwbGF5PmZvcm0ge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tY29udGVudC1oMi1mb250LXNpemUpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDExY2ggMWZyIDFmcjtcXG4gICAgZ2FwOiB2YXIoLS1ndXR0ZXIpO1xcbn1cXG5cXG4uc2luZ2xlLWRpc3BsYXkgLmNhbmNlbCB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4uc2luZ2xlLWRpc3BsYXkgLmVkaXQge1xcbiAgICBncmlkLWNvbHVtbjogMztcXG59XFxuXFxuLnNpbmdsZS1kaXNwbGF5IC5sYWJlbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTcwMCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uc2luZ2xlLWRpc3BsYXkgLmRlc2NyaXB0aW9uIC5kYXRhIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1jb250ZW50LWgzLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5zaW5nbGUtZGlzcGxheSAucHJpb3JpdHkucm93IHtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4uc2luZ2xlLWRpc3BsYXkgLnByaW9yaXR5LWRpc3BsYXkge1xcbiAgICB3aWR0aDogMTJjaDtcXG59XFxuXFxuLnNpbmdsZS1kaXNwbGF5IC5wcmlvcml0eSBhIHtcXG4gICAgZm9udC1zaXplOiBpbml0aWFsO1xcbn1cXG5cXG4uc2luZ2xlLWRpc3BsYXkgLnByaW9yaXR5IGE6bm90KDpob3ZlcikgLm1vcmUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zaW5nbGUtZGlzcGxheSAucHJpb3JpdHkgYTpob3ZlciAubW9yZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4uc2luZ2xlLWRpc3BsYXkgLmVkaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLyogU3RhdHVzIFRvZ2dsZSAqL1xcbi5idXR0b24tbGlrZS1jaGVja2JveC13cmFwcGVyIHtcXG4gICAgLyogUGFyYW1ldGVycyBmb3IgdGhlIGNvbXBvbmVudCBhcHBlYXJhbmNlICovXFxuICAgIC0tYnV0dG9uLWhlaWdodDogY2FsYyh2YXIoLS1jb250ZW50LWgyLWZvbnQtc2l6ZSkgKyB2YXIoLS1ndXR0ZXIpKTtcXG4gICAgLS1idXR0b24td2lkdGg6IDE4MHB4O1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xcbiAgICAtLWJ1dHRvbi1vbi1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIC0tYnV0dG9uLW9mZi1jb2xvcjogd2hpdGU7XFxuXFxuICAgIC0tYnV0dG9uLWxhYmVsLWhlaWdodDogY2FsYyh2YXIoLS1idXR0b24taGVpZ2h0KSAqIDAuNik7XFxuICAgIC0tYnV0dG9uLXBhZGRpbmc6IGNhbGModmFyKC0tYnV0dG9uLWhlaWdodCkgKiAwLjIpO1xcbiAgICBmb250LXNpemU6IGluaXRpYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xcbiAgICB3aWR0aDogdmFyKC0tYnV0dG9uLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1idXR0b24taGVpZ2h0KTtcXG59XFxuXFxuLmJ1dHRvbi1saWtlLWNoZWNrYm94LXdyYXBwZXI+bGFiZWwge1xcbiAgZGlzcGxheTogZmxleDsgIFxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1heC1oZWlnaHQ6IHZhcigtLWJ1dHRvbi1oZWlnaHQpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1idXR0b24tbGFiZWwtaGVpZ2h0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIHBhZGRpbmc6IHZhcigtLWJ1dHRvbi1wYWRkaW5nKTtcXG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1idXR0b24tcGFkZGluZykgKiAyKTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tYnV0dG9uLWhlaWdodCkgKiAwLjUpO1xcbn1cXG5cXG4uYnV0dG9uLWxpa2UtY2hlY2tib3gtd3JhcHBlcj5sYWJlbDpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnV0dG9uLWxpa2UtY2hlY2tib3gtd3JhcHBlciBzcGFuIHtcXG4gIGZsZXg6IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLmJ1dHRvbi1saWtlLWNoZWNrYm94LXdyYXBwZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBmbGV4OiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1vZmYtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDFjaDtcXG4gIGhlaWdodDogMWNoO1xcbn1cXG5cXG4uYnV0dG9uLWxpa2UtY2hlY2tib3gtd3JhcHBlciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMWNoO1xcbiAgaGVpZ2h0OiAxY2g7XFxuICBjbGlwLXBhdGg6IGNpcmNsZSg1MCUgYXQgNTAlIDUwJSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLW9uLWNvbG9yKTtcXG59XFxuXFxuXFxuLmJ1dHRvbi1saWtlLWNoZWNrYm94LXdyYXBwZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHdpZHRoOiAxY2g7XFxuICBoZWlnaHQ6IDFjaDtcXG59XFxuXFxuZm9ybSAuYnV0dG9uLWxpa2UtY2hlY2tib3gtd3JhcHBlciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWJ1dHRvbi1vbi1jb2xvcik7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIGVyci5zb3VyY2UgPSBcInVsaWRcIjtcbiAgICByZXR1cm4gZXJyO1xufVxuLy8gVGhlc2UgdmFsdWVzIHNob3VsZCBORVZFUiBjaGFuZ2UuIElmXG4vLyB0aGV5IGRvLCB3ZSdyZSBubyBsb25nZXIgbWFraW5nIHVsaWRzIVxudmFyIEVOQ09ESU5HID0gXCIwMTIzNDU2Nzg5QUJDREVGR0hKS01OUFFSU1RWV1hZWlwiOyAvLyBDcm9ja2ZvcmQncyBCYXNlMzJcbnZhciBFTkNPRElOR19MRU4gPSBFTkNPRElORy5sZW5ndGg7XG52YXIgVElNRV9NQVggPSBNYXRoLnBvdygyLCA0OCkgLSAxO1xudmFyIFRJTUVfTEVOID0gMTA7XG52YXIgUkFORE9NX0xFTiA9IDE2O1xuZnVuY3Rpb24gcmVwbGFjZUNoYXJBdChzdHIsIGluZGV4LCBjaGFyKSB7XG4gICAgaWYgKGluZGV4ID4gc3RyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgaW5kZXgpICsgY2hhciArIHN0ci5zdWJzdHIoaW5kZXggKyAxKTtcbn1cbmZ1bmN0aW9uIGluY3JlbWVudEJhc2UzMihzdHIpIHtcbiAgICB2YXIgZG9uZSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSBzdHIubGVuZ3RoO1xuICAgIHZhciBjaGFyID0gdm9pZCAwO1xuICAgIHZhciBjaGFySW5kZXggPSB2b2lkIDA7XG4gICAgdmFyIG1heENoYXJJbmRleCA9IEVOQ09ESU5HX0xFTiAtIDE7XG4gICAgd2hpbGUgKCFkb25lICYmIGluZGV4LS0gPj0gMCkge1xuICAgICAgICBjaGFyID0gc3RyW2luZGV4XTtcbiAgICAgICAgY2hhckluZGV4ID0gRU5DT0RJTkcuaW5kZXhPZihjaGFyKTtcbiAgICAgICAgaWYgKGNoYXJJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IGNyZWF0ZUVycm9yKFwiaW5jb3JyZWN0bHkgZW5jb2RlZCBzdHJpbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXJJbmRleCA9PT0gbWF4Q2hhckluZGV4KSB7XG4gICAgICAgICAgICBzdHIgPSByZXBsYWNlQ2hhckF0KHN0ciwgaW5kZXgsIEVOQ09ESU5HWzBdKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGRvbmUgPSByZXBsYWNlQ2hhckF0KHN0ciwgaW5kZXgsIEVOQ09ESU5HW2NoYXJJbmRleCArIDFdKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkb25lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBkb25lO1xuICAgIH1cbiAgICB0aHJvdyBjcmVhdGVFcnJvcihcImNhbm5vdCBpbmNyZW1lbnQgdGhpcyBzdHJpbmdcIik7XG59XG5mdW5jdGlvbiByYW5kb21DaGFyKHBybmcpIHtcbiAgICB2YXIgcmFuZCA9IE1hdGguZmxvb3IocHJuZygpICogRU5DT0RJTkdfTEVOKTtcbiAgICBpZiAocmFuZCA9PT0gRU5DT0RJTkdfTEVOKSB7XG4gICAgICAgIHJhbmQgPSBFTkNPRElOR19MRU4gLSAxO1xuICAgIH1cbiAgICByZXR1cm4gRU5DT0RJTkcuY2hhckF0KHJhbmQpO1xufVxuZnVuY3Rpb24gZW5jb2RlVGltZShub3csIGxlbikge1xuICAgIGlmIChpc05hTihub3cpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihub3cgKyBcIiBtdXN0IGJlIGEgbnVtYmVyXCIpO1xuICAgIH1cbiAgICBpZiAobm93ID4gVElNRV9NQVgpIHtcbiAgICAgICAgdGhyb3cgY3JlYXRlRXJyb3IoXCJjYW5ub3QgZW5jb2RlIHRpbWUgZ3JlYXRlciB0aGFuIFwiICsgVElNRV9NQVgpO1xuICAgIH1cbiAgICBpZiAobm93IDwgMCkge1xuICAgICAgICB0aHJvdyBjcmVhdGVFcnJvcihcInRpbWUgbXVzdCBiZSBwb3NpdGl2ZVwiKTtcbiAgICB9XG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIobm93KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhyb3cgY3JlYXRlRXJyb3IoXCJ0aW1lIG11c3QgYmUgYW4gaW50ZWdlclwiKTtcbiAgICB9XG4gICAgdmFyIG1vZCA9IHZvaWQgMDtcbiAgICB2YXIgc3RyID0gXCJcIjtcbiAgICBmb3IgKDsgbGVuID4gMDsgbGVuLS0pIHtcbiAgICAgICAgbW9kID0gbm93ICUgRU5DT0RJTkdfTEVOO1xuICAgICAgICBzdHIgPSBFTkNPRElORy5jaGFyQXQobW9kKSArIHN0cjtcbiAgICAgICAgbm93ID0gKG5vdyAtIG1vZCkgLyBFTkNPRElOR19MRU47XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5mdW5jdGlvbiBlbmNvZGVSYW5kb20obGVuLCBwcm5nKSB7XG4gICAgdmFyIHN0ciA9IFwiXCI7XG4gICAgZm9yICg7IGxlbiA+IDA7IGxlbi0tKSB7XG4gICAgICAgIHN0ciA9IHJhbmRvbUNoYXIocHJuZykgKyBzdHI7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5mdW5jdGlvbiBkZWNvZGVUaW1lKGlkKSB7XG4gICAgaWYgKGlkLmxlbmd0aCAhPT0gVElNRV9MRU4gKyBSQU5ET01fTEVOKSB7XG4gICAgICAgIHRocm93IGNyZWF0ZUVycm9yKFwibWFsZm9ybWVkIHVsaWRcIik7XG4gICAgfVxuICAgIHZhciB0aW1lID0gaWQuc3Vic3RyKDAsIFRJTUVfTEVOKS5zcGxpdChcIlwiKS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChjYXJyeSwgY2hhciwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGVuY29kaW5nSW5kZXggPSBFTkNPRElORy5pbmRleE9mKGNoYXIpO1xuICAgICAgICBpZiAoZW5jb2RpbmdJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IGNyZWF0ZUVycm9yKFwiaW52YWxpZCBjaGFyYWN0ZXIgZm91bmQ6IFwiICsgY2hhcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhcnJ5ICs9IGVuY29kaW5nSW5kZXggKiBNYXRoLnBvdyhFTkNPRElOR19MRU4sIGluZGV4KTtcbiAgICB9LCAwKTtcbiAgICBpZiAodGltZSA+IFRJTUVfTUFYKSB7XG4gICAgICAgIHRocm93IGNyZWF0ZUVycm9yKFwibWFsZm9ybWVkIHVsaWQsIHRpbWVzdGFtcCB0b28gbGFyZ2VcIik7XG4gICAgfVxuICAgIHJldHVybiB0aW1lO1xufVxuZnVuY3Rpb24gZGV0ZWN0UHJuZygpIHtcbiAgICB2YXIgYWxsb3dJbnNlY3VyZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG4gICAgdmFyIHJvb3QgPSBhcmd1bWVudHNbMV07XG5cbiAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgcm9vdCA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiBudWxsO1xuICAgIH1cbiAgICB2YXIgYnJvd3NlckNyeXB0byA9IHJvb3QgJiYgKHJvb3QuY3J5cHRvIHx8IHJvb3QubXNDcnlwdG8pO1xuICAgIGlmIChicm93c2VyQ3J5cHRvKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gICAgICAgICAgICBicm93c2VyQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyhidWZmZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlclswXSAvIDB4ZmY7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBub2RlQ3J5cHRvID0gcmVxdWlyZShcImNyeXB0b1wiKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVDcnlwdG8ucmFuZG9tQnl0ZXMoMSkucmVhZFVJbnQ4KCkgLyAweGZmO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgaWYgKGFsbG93SW5zZWN1cmUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJzZWN1cmUgY3J5cHRvIHVudXNhYmxlLCBmYWxsaW5nIGJhY2sgdG8gaW5zZWN1cmUgTWF0aC5yYW5kb20oKSFcIik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdGhyb3cgY3JlYXRlRXJyb3IoXCJzZWN1cmUgY3J5cHRvIHVudXNhYmxlLCBpbnNlY3VyZSBNYXRoLnJhbmRvbSBub3QgYWxsb3dlZFwiKTtcbn1cbmZ1bmN0aW9uIGZhY3RvcnkoY3VyclBybmcpIHtcbiAgICBpZiAoIWN1cnJQcm5nKSB7XG4gICAgICAgIGN1cnJQcm5nID0gZGV0ZWN0UHJuZygpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gdWxpZChzZWVkVGltZSkge1xuICAgICAgICBpZiAoaXNOYU4oc2VlZFRpbWUpKSB7XG4gICAgICAgICAgICBzZWVkVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVuY29kZVRpbWUoc2VlZFRpbWUsIFRJTUVfTEVOKSArIGVuY29kZVJhbmRvbShSQU5ET01fTEVOLCBjdXJyUHJuZyk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIG1vbm90b25pY0ZhY3RvcnkoY3VyclBybmcpIHtcbiAgICBpZiAoIWN1cnJQcm5nKSB7XG4gICAgICAgIGN1cnJQcm5nID0gZGV0ZWN0UHJuZygpO1xuICAgIH1cbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgIHZhciBsYXN0UmFuZG9tID0gdm9pZCAwO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bGlkKHNlZWRUaW1lKSB7XG4gICAgICAgIGlmIChpc05hTihzZWVkVGltZSkpIHtcbiAgICAgICAgICAgIHNlZWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VlZFRpbWUgPD0gbGFzdFRpbWUpIHtcbiAgICAgICAgICAgIHZhciBpbmNyZW1lbnRlZFJhbmRvbSA9IGxhc3RSYW5kb20gPSBpbmNyZW1lbnRCYXNlMzIobGFzdFJhbmRvbSk7XG4gICAgICAgICAgICByZXR1cm4gZW5jb2RlVGltZShsYXN0VGltZSwgVElNRV9MRU4pICsgaW5jcmVtZW50ZWRSYW5kb207XG4gICAgICAgIH1cbiAgICAgICAgbGFzdFRpbWUgPSBzZWVkVGltZTtcbiAgICAgICAgdmFyIG5ld1JhbmRvbSA9IGxhc3RSYW5kb20gPSBlbmNvZGVSYW5kb20oUkFORE9NX0xFTiwgY3VyclBybmcpO1xuICAgICAgICByZXR1cm4gZW5jb2RlVGltZShzZWVkVGltZSwgVElNRV9MRU4pICsgbmV3UmFuZG9tO1xuICAgIH07XG59XG52YXIgdWxpZCA9IGZhY3RvcnkoKTtcblxuZXhwb3J0IHsgcmVwbGFjZUNoYXJBdCwgaW5jcmVtZW50QmFzZTMyLCByYW5kb21DaGFyLCBlbmNvZGVUaW1lLCBlbmNvZGVSYW5kb20sIGRlY29kZVRpbWUsIGRldGVjdFBybmcsIGZhY3RvcnksIG1vbm90b25pY0ZhY3RvcnksIHVsaWQgfTtcbiIsIiIsImltcG9ydCB7IGZvcm1hdCwgaXNUb2RheSwgaXNCZWZvcmUgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY2xhc3MgQ29udHJvbGxlcntcbiAgICAjdmlldztcbiAgICAjbW9kZWw7XG5cbiAgICAjcmVsb2FkO1xuXG4gICAgc3RhdGljICNwcmlvcml0eUxhYmVscyA9IFtcImVsaW1pbmF0ZVwiLCBcImRlbGVnYXRlXCIsIFwic2NoZWR1bGVcIiwgXCJkb1wiXTtcblxuICAgIGNvbnN0cnVjdG9yKHZpZXcsIG1vZGVsKSB7XG4gICAgICAgIHRoaXMuI3ZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLiNtb2RlbCA9IG1vZGVsO1xuICAgIH1cblxuICAgIGluaXQoKXtcbiAgICAgICAgdGhpcy4jbW9kZWwuaW5pdCgpOyAgIFxuICAgICAgICB0aGlzLmRpc3BsYXlNZW51KCk7ICBcbiAgICAgICAgdGhpcy5kaXNwbGF5QWxsVG9kb3MoKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5TWVudSgpe1xuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcbiAgICAgICAgY29uc3QgbWVudUhhbmRsZXJzID0ge1xuICAgICAgICAgICAgY2xpY2tBbGxUb2Rvc0xpbms6IHRoaXMuZGlzcGxheUFsbFRvZG9zLmJpbmQodGhpcyksXG4gICAgICAgICAgICBjbGlja1RvZGF5VG9kb3NMaW5rOiB0aGlzLmRpc3BsYXlUb2RheVRvZG9zLmJpbmQodGhpcyksXG4gICAgICAgICAgICBjbGlja092ZXJkdWVUb2Rvc0xpbms6IHRoaXMuZGlzcGxheU92ZXJkdWVUb2Rvcy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgY2xpY2tQcm9qZWN0TGluazogdGhpcy5kaXNwbGF5VG9kb3NJblByb2plY3QuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGNsaWNrQWxsUHJvamVjdHNMaW5rOiB0aGlzLmRpc3BsYXlBbGxQcm9qZWN0cy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgY2xpY2tBZGRMaW5rOiAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUFsbFByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5UHJvamVjdEFkZE1vZGFsKCk7XG4gICAgICAgICAgICB9KS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgY2xpY2tEdW1teURhdGFMaW5rOiAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuI21vZGVsLnBvcHVsYXRlRHVtbXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlNZW51KCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jcmVsb2FkKCk7XG4gICAgICAgICAgICB9KS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgY2xpY2tDbGVhckxpbms6ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4jbW9kZWwuY2xlYXJEYXRhKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICB9KS5iaW5kKHRoaXMpLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvamVjdHNEYXRhID0gW107XG4gICAgICAgIHRoaXMuI21vZGVsLmdldEFsbFByb2plY3RzKCkuZm9yRWFjaChcbiAgICAgICAgICAgIHByb2plY3QgPT4gcHJvamVjdHNEYXRhLnB1c2goXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogcHJvamVjdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvamVjdC5uYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuI3ZpZXcubWVudS5yZW5kZXIobWVudSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNEYXRhKSwgbWVudUhhbmRsZXJzKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5UHJvamVjdEFkZE1vZGFsKCl7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0ge1xuICAgICAgICAgICAgLy8gbm93IGVtcHR5LCBidXQgY2FuIGJlIGFkZGVkIG5ldyBwcm9wZXJ0eVxuICAgICAgICAgICAgLy8gZS5nLiwgdG9kbyB0YXNrcyB3aXRob3V0IHByb2plY3RzXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlcnMgPSB7XG4gICAgICAgICAgICBjbGlja0Nsb3NlQnV0dG9uOiB0aGlzLiNyZWxvYWQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGNsaWNrQ2FuY2VsQnV0dG9uOiB0aGlzLiNyZWxvYWQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGNsaWNrU3VibWl0QnV0dG9uOiAoKG5hbWUpID0+IHRoaXMuc3VibWl0UHJvamVjdEFkZEZvcm0obmFtZSkpLmJpbmQodGhpcyksXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiN2aWV3LnByb2plY3RBZGQucmVuZGVyKFxuICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcbiAgICAgICAgICAgIGhhbmRsZXJzXG4gICAgICAgIClcbiAgICAgICAgLy8gVGhpcyBtZXRob2Qgb3BlbnMgYSBtb2RhbCB3aW5kb3csIHNvICNyZWxvYWQgaXMgbm90IHVwZGF0ZWRcbiAgICB9XG5cbiAgICBkaXNwbGF5UHJvamVjdEVkaXRNb2RhbChwcm9qZWN0SWQpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMuI21vZGVsLmdldFByb2plY3RCeUlkKHByb2plY3RJZCk7XG5cbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSB7XG4gICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgaWQ6IHByb2plY3RJZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9qZWN0Lm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZXJzID0ge1xuICAgICAgICAgICAgY2xpY2tDbG9zZUJ1dHRvbjogdGhpcy4jcmVsb2FkLmJpbmQodGhpcyksXG4gICAgICAgICAgICBjbGlja0NhbmNlbEJ1dHRvbjogdGhpcy4jcmVsb2FkLmJpbmQodGhpcyksXG4gICAgICAgICAgICBjbGlja1N1Ym1pdEJ1dHRvbjogKFxuICAgICAgICAgICAgICAgIChwcm9qZWN0SWQsIG5hbWUpID0+IHRoaXMuc3VibWl0UHJvamVjdEVkaXRGb3JtKHByb2plY3RJZCwgbmFtZSlcbiAgICAgICAgICAgICkuYmluZCh0aGlzKSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3ZpZXcucHJvamVjdEVkaXQucmVuZGVyKGNvbnRlbnQsIEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSwgaGFuZGxlcnMpO1xuICAgIH1cblxuXG4gICAgZGlzcGxheVByb2plY3RNb2RhbChwcm9qZWN0SWQpe1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy4jbW9kZWwuZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKTtcblxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHtcbiAgICAgICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICAgICAgICBpZDogcHJvamVjdElkLFxuICAgICAgICAgICAgICAgIG5hbWU6IHByb2plY3QubmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGFuZGxlcnMgPSB7XG4gICAgICAgICAgICBjbGlja0Nsb3NlQnV0dG9uOiB0aGlzLiNyZWxvYWQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGNsaWNrQ2FuY2VsQnV0dG9uOiB0aGlzLiNyZWxvYWQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGNsaWNrRWRpdEJ1dHRvbjogKHByb2plY3RJZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5UHJvamVjdEVkaXRNb2RhbChwcm9qZWN0SWQpXG4gICAgICAgICAgICB9KS5iaW5kKHRoaXMpLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jdmlldy5wcm9qZWN0LnJlbmRlcihjb250ZW50LCBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksIGhhbmRsZXJzKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5VG9kb0FkZE1vZGFsKCl7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0ge1xuICAgICAgICAgICAgcHJvamVjdHM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jbW9kZWwuZ2V0QWxsUHJvamVjdHMoKS5mb3JFYWNoKFxuICAgICAgICAgICAgcHJvamVjdCA9PiBmb3JtRGF0YS5wcm9qZWN0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogcHJvamVjdC5pZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZXJzID0ge1xuICAgICAgICAgICAgY2xpY2tDbG9zZUJ1dHRvbjogdGhpcy4jcmVsb2FkLmJpbmQodGhpcyksXG4gICAgICAgICAgICBjbGlja0NhbmNlbEJ1dHRvbjogdGhpcy4jcmVsb2FkLmJpbmQodGhpcyksXG4gICAgICAgICAgICBjbGlja1N1Ym1pdEJ1dHRvbjogdGhpcy5zdWJtaXRUb2RvQWRkRm9ybS5iaW5kKHRoaXMpLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuI3ZpZXcudG9kb0FkZC5yZW5kZXIoXG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxuICAgICAgICAgICAgaGFuZGxlcnNcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUaGlzIG1ldGhvZCBvcGVucyBhIG1vZGFsIHdpbmRvdywgc28gI3JlbG9hZCBpcyBub3QgdXBkYXRlZFxuICAgIH1cblxuICAgIGRpc3BsYXlUb2RvTW9kYWwodG9kb0lkKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgICAgIGNvbnN0IHRvZG8gPSB0aGlzLiNtb2RlbC5nZXRUb2RvQnlJZCh0b2RvSWQpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy4jbW9kZWwuZ2V0UHJvamVjdEJ5VG9kb0lkKHRvZG9JZCk7XG5cbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSB7XG4gICAgICAgICAgICBwcm9qZWN0czogW10sXG4gICAgICAgICAgICB0b2RvOiB7XG4gICAgICAgICAgICAgICAgaWQ6IHRvZG8uaWQsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRvZG8udGl0bGUsXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogdG9kby5kdWVEYXRlID09PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICA6IGZvcm1hdCh0b2RvLmR1ZURhdGUsIFwieXl5eS1NTS1kZFwiKSxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogQ29udHJvbGxlci4jcHJpb3JpdHlMYWJlbHNbdG9kby5wcmlvcml0eV0sXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRvZG8uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgZG9uZTogdG9kby5kb25lLFxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0ID09PSBudWxsID8gXCJcIiA6IHByb2plY3QubmFtZSxcbiAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHByb2plY3QgPT09IG51bGwgPyBcIlwiIDogcHJvamVjdC5pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuI21vZGVsLmdldEFsbFByb2plY3RzKCkuZm9yRWFjaChcbiAgICAgICAgICAgIHByb2plY3QgPT4gZm9ybURhdGEucHJvamVjdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHByb2plY3QuaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogcHJvamVjdC5uYW1lLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgaGFuZGxlcnMgPSB7XG4gICAgICAgICAgICBjbGlja0Nsb3NlQnV0dG9uOiB0aGlzLiNyZWxvYWQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGNsaWNrQ2FuY2VsQnV0dG9uOiB0aGlzLiNyZWxvYWQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGNsaWNrRWRpdEJ1dHRvbjogKHRvZG9JZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5VG9kb0VkaXRNb2RhbCh0b2RvSWQpXG4gICAgICAgICAgICB9KS5iaW5kKHRoaXMpLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jdmlldy50b2RvLnJlbmRlcihcbiAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gICAgICAgICAgICBoYW5kbGVyc1xuICAgICAgICApXG5cbiAgICAgICAgLy8gVGhpcyBtZXRob2Qgb3BlbnMgYSBtb2RhbCB3aW5kb3csIHNvICNyZWxvYWQgaXMgbm90IHVwZGF0ZWRcbiAgICB9XG5cblxuICAgIGRpc3BsYXlUb2RvRWRpdE1vZGFsKHRvZG9JZCl7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgICAgIGNvbnN0IHRvZG8gPSB0aGlzLiNtb2RlbC5nZXRUb2RvQnlJZCh0b2RvSWQpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy4jbW9kZWwuZ2V0UHJvamVjdEJ5VG9kb0lkKHRvZG9JZCk7XG5cbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSB7XG4gICAgICAgICAgICBwcm9qZWN0czogW10sXG4gICAgICAgICAgICB0b2RvOiB7XG4gICAgICAgICAgICAgICAgaWQ6IHRvZG8uaWQsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRvZG8udGl0bGUsXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogdG9kby5kdWVEYXRlID09PSBudWxsIFxuICAgICAgICAgICAgICAgICAgICA/IFwiXCIgXG4gICAgICAgICAgICAgICAgICAgIDogZm9ybWF0KHRvZG8uZHVlRGF0ZSwgXCJ5eXl5LU1NLWRkXCIpLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiBDb250cm9sbGVyLiNwcmlvcml0eUxhYmVsc1t0b2RvLnByaW9yaXR5XSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdG9kby5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBkb25lOiB0b2RvLmRvbmUsXG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3QgPT09IG51bGw/IFwiXCIgOiBwcm9qZWN0Lm5hbWUsIFxuICAgICAgICAgICAgICAgIHByb2plY3RJZDogcHJvamVjdCA9PT0gbnVsbCA/IFwiXCIgOiBwcm9qZWN0LmlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jbW9kZWwuZ2V0QWxsUHJvamVjdHMoKS5mb3JFYWNoKFxuICAgICAgICAgICAgcHJvamVjdCA9PiBmb3JtRGF0YS5wcm9qZWN0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogcHJvamVjdC5pZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBoYW5kbGVycyA9IHtcbiAgICAgICAgICAgIGNsaWNrQ2xvc2VCdXR0b246IHRoaXMuI3JlbG9hZC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgY2xpY2tDYW5jZWxCdXR0b246IHRoaXMuI3JlbG9hZC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgY2xpY2tTdWJtaXRCdXR0b246IHRoaXMuc3VibWl0VG9kb0VkaXRGb3JtLmJpbmQodGhpcyksXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiN2aWV3LnRvZG9FZGl0LnJlbmRlcihcbiAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gICAgICAgICAgICBoYW5kbGVyc1xuICAgICAgICApXG5cbiAgICAgICAgLy8gVGhpcyBtZXRob2Qgb3BlbnMgYSBtb2RhbCB3aW5kb3csIHNvICNyZWxvYWQgaXMgbm90IHVwZGF0ZWRcbiAgICB9XG5cbiAgICBkaXNwbGF5QWxsUHJvamVjdHMoKSB7XG4gICAgICAgIGNvbnN0IHRhYmxlRGF0YSA9IHtcbiAgICAgICAgICAgIGNhcHRpb246IFwiQWxsIFByb2plY3RzXCIsXG4gICAgICAgICAgICByb3dzOiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jbW9kZWwuZ2V0QWxsUHJvamVjdHMoKS5mb3JFYWNoKFxuICAgICAgICAgICAgcHJvamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcmR1ZVRvZG9zID0gdGhpcy4jbW9kZWwuZ2V0T3ZlcmR1ZVRvZG9zSW5Qcm9qZWN0KHByb2plY3QuaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzUmF0ZSA9IHRoaXMuI21vZGVsLmdldFByb2plY3RQcm9ncmVzc1JhdGUocHJvamVjdC5pZCk7XG4gICAgICAgICAgICAgICAgdGFibGVEYXRhLnJvd3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHByb2plY3QuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvczogcHJvamVjdC50b2Rvcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBub3REb25lOiBwcm9qZWN0LnRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmRvbmUpLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJkdWU6IG92ZXJkdWVUb2Rvcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogYCR7TWF0aC5yb3VuZChwcm9ncmVzc1JhdGUgKiAxMDApIH0lYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzUmF0ZTogcHJvZ3Jlc3NSYXRlLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG5cbiAgICAgICAgY29uc3QgdGFibGVIYW5kbGVycyA9IHtcbiAgICAgICAgICAgIGNsaWNrTmFtZUxpbms6IChcbiAgICAgICAgICAgICAgICBwcm9qZWN0SUQgPT4gdGhpcy5kaXNwbGF5UHJvamVjdE1vZGFsKHByb2plY3RJRClcbiAgICAgICAgICAgICkuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGNsaWNrVG9kb3NMaW5rOiB0aGlzLmRpc3BsYXlUb2Rvc0luUHJvamVjdC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgY2xpY2tNdWx0aURlbGV0ZUJ1dHRvbjogKFxuICAgICAgICAgICAgICAgIHByb2plY3RJZHMgPT4gdGhpcy5kZWxldGVTZWxlY3RlZFByb2plY3RzKHByb2plY3RJZHMpXG4gICAgICAgICAgICApLmJpbmQodGhpcyksXG4gICAgICAgICAgICBjbGlja05vdERvbmVMaW5rOiB0aGlzLmRpc3BsYXlOb3REb25lVG9kb3NJblByb2plY3QuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGNsaWNrT3ZlcmR1ZUxpbms6IHRoaXMuZGlzcGxheU92ZXJkdWVUb2Rvc0luUHJvamVjdC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgY2xpY2tBZGRCdXR0b246IHRoaXMuZGlzcGxheVByb2plY3RBZGRNb2RhbC5iaW5kKHRoaXMpLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuI3ZpZXcucHJvamVjdHMucmVuZGVyKFxuICAgICAgICAgICAgY29udGVudCwgXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0YWJsZURhdGEpLCBcbiAgICAgICAgICAgIHRhYmxlSGFuZGxlcnNcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcbiAgICAgICAgdGhpcy4jdmlldy5tZW51LnVwZGF0ZUhpZ2hsaWdodChtZW51LCBcInByb2plY3RcIik7XG5cbiAgICAgICAgdGhpcy4jcmVsb2FkID0gdGhpcy5kaXNwbGF5QWxsUHJvamVjdHM7XG4gICAgfVxuXG4gICAgZGVsZXRlU2VsZWN0ZWRQcm9qZWN0cyhwcm9qZWN0SWRzKSB7XG4gICAgICAgIGZvciAobGV0IGlkIG9mIHByb2plY3RJZHMpIHtcbiAgICAgICAgICAgIHRoaXMuI21vZGVsLmRlbGV0ZVByb2plY3RCeUlkKGlkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiNyZWxvYWQoKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5VG9kb3NXaXRob3V0UHJvamVjdCgpe1xuICAgICAgICBjb25zdCB0b2RvcyA9IHRoaXMuI21vZGVsLmdldFRvZG9zV2l0aG91dFByb2plY3QoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5VG9kb3MoXG4gICAgICAgICAgICBcIlRvRG8gdGFza3Mgd2l0aG91dCBwcm9qZWN0XCIsXG4gICAgICAgICAgICB0b2RvcyxcbiAgICAgICAgICAgIFwiRXZlcnkgdGFzayBiZWxvbmdzIHRvIGEgcHJvamVjdC4gR3JlYXQgam9iIHN0YXlpbmcgb3JnYW5pemVkIVwiXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBkaXNwbGF5VG9kb3NJblByb2plY3QocHJvamVjdElkKXtcbiAgICAgICAgaWYgKHByb2plY3RJZCA9PT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5VG9kb3NXaXRob3V0UHJvamVjdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLiNtb2RlbC5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpO1xuICAgICAgICB0aGlzLmRpc3BsYXlUb2RvcyhgUHJvamVjdDogJHtwcm9qZWN0Lm5hbWV9YCwgcHJvamVjdC50b2RvcylcblxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcbiAgICAgICAgdGhpcy4jdmlldy5tZW51LnVwZGF0ZUhpZ2hsaWdodChtZW51LCBcInByb2plY3RcIik7XG4gICAgICAgIHRoaXMuI3JlbG9hZCA9ICgpID0+IHRoaXMuZGlzcGxheVRvZG9zSW5Qcm9qZWN0KHByb2plY3RJZClcbiAgICB9XG5cblxuICAgIGRpc3BsYXlPdmVyZHVlVG9kb3NJblByb2plY3QocHJvamVjdElkKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLiNtb2RlbC5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpO1xuICAgICAgICB0aGlzLmRpc3BsYXlTZWFyY2hlZFRvZG9zKFxuICAgICAgICAgICAgYFByb2plY3Q6ICR7cHJvamVjdC5uYW1lfSAvIE92ZXJkdWUgVGFza3NgLFxuICAgICAgICAgICAgdG9kbyA9PiBpc0JlZm9yZSh0b2RvLmR1ZURhdGUsIG5ldyBEYXRlKCkpICYmICF0b2RvLmRvbmUsXG4gICAgICAgICAgICBwcm9qZWN0SWQsXG4gICAgICAgICAgICBcIk5vIE92ZXJkdWUgVGFza3MuIEdyZWF0IEpvYiFcIixcbiAgICAgICAgKVxuICAgICAgICB0aGlzLiNyZWxvYWQgPSAoKSA9PiB0aGlzLmRpc3BsYXlPdmVyZHVlVG9kb3NJblByb2plY3QocHJvamVjdElkKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5Tm90RG9uZVRvZG9zSW5Qcm9qZWN0KHByb2plY3RJZCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy4jbW9kZWwuZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U2VhcmNoZWRUb2RvcyhcbiAgICAgICAgICAgIGBQcm9qZWN0OiAke3Byb2plY3QubmFtZX0gLyBVbmZpbmlzaGVkIFRhc2tzYCxcbiAgICAgICAgICAgIHRvZG8gPT4gIXRvZG8uZG9uZSxcbiAgICAgICAgICAgIHByb2plY3RJZCxcbiAgICAgICAgICAgIFwiTm8gdW5maW5pc2hlZCB0YXNrcy4gWWF5IVwiXG4gICAgICAgIClcbiAgICAgICAgdGhpcy4jcmVsb2FkID0gKCkgPT4gdGhpcy5kaXNwbGF5Tm90RG9uZVRvZG9zSW5Qcm9qZWN0KHByb2plY3RJZCk7XG4gICAgfVxuXG4gICAgZGlzcGxheURvbmVUb2Rvc0luUHJvamVjdChwcm9qZWN0SWQpe1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy4jbW9kZWwuZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U2VhcmNoZWRUb2RvcyhcbiAgICAgICAgICAgIGBQcm9qZWN0OiAke3Byb2plY3QubmFtZX0gLyBGaW5pc2hlZCBUYXNrc2AsXG4gICAgICAgICAgICB0b2RvID0+IHRvZG8uZG9uZSxcbiAgICAgICAgICAgIHByb2plY3RJZFxuICAgICAgICApXG4gICAgICAgIHRoaXMuI3JlbG9hZCA9ICgpID0+IHRoaXMuZGlzcGxheURvbmVUb2Rvc0luUHJvamVjdChwcm9qZWN0SWQpO1xuICAgIH1cblxuICAgIGRpc3BsYXlUb2RheVRvZG9zKCl7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gdGhpcy4jbW9kZWwuc2VhcmNoVG9kb3MoXG4gICAgICAgICAgICB0b2RvID0+IGlzVG9kYXkodG9kby5kdWVEYXRlKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmRpc3BsYXlUb2RvcyhcbiAgICAgICAgICAgIGBUb0RvIFRhc2tzIER1ZSBUb2RheSAoJHtmb3JtYXQobmV3IERhdGUoKSwgXCJ5eXl5LU1NLWRkXCIpfSlgLFxuICAgICAgICAgICAgIHRvZG9zLFxuICAgICAgICAgICAgXCJObyB0YXNrcyBmb3VuZC4gV2hhdCBhIGJlYXV0aWZ1bCBkYXkuXCJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcbiAgICAgICAgdGhpcy4jdmlldy5tZW51LnVwZGF0ZUhpZ2hsaWdodChtZW51LCBcInRvZGF5XCIpO1xuXG4gICAgICAgIHRoaXMuI3JlbG9hZCA9IHRoaXMuZGlzcGxheVRvZGF5VG9kb3M7XG4gICAgfVxuXG4gICAgZGlzcGxheU92ZXJkdWVUb2RvcygpIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB0b2RvcyA9IHRoaXMuI21vZGVsLnNlYXJjaFRvZG9zKFxuICAgICAgICAgICAgdG9kbyA9PiBpc0JlZm9yZSh0b2RvLmR1ZURhdGUsIHRvZGF5KSAmJiAhdG9kby5kb25lXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZGlzcGxheVRvZG9zKFwiT3ZlcmR1ZSBUb2RvIFRhc2tzXCIsIHRvZG9zLCBcIk5vIG92ZXJkdWUgdGFza3MuIEV2ZXJ5dGhpbmcgaXMgb24gc2NoZWR1bGUuXCIpO1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuICAgICAgICB0aGlzLiN2aWV3Lm1lbnUudXBkYXRlSGlnaGxpZ2h0KG1lbnUsIFwib3ZlcmR1ZVwiKTtcblxuICAgICAgICB0aGlzLiNyZWxvYWQgPSB0aGlzLmRpc3BsYXlPdmVyZHVlVG9kb3M7XG4gICAgfVxuXG4gICAgZGlzcGxheVNlYXJjaGVkVG9kb3MoY2FwdGlvbiwgZmlsdGVyLCBwcm9qZWN0SWQ9bnVsbCwgZW1wdHlNZXNzYWdlPVwiXCIpIHtcbiAgICAgICAgbGV0IHRvZG9zID0gdGhpcy4jbW9kZWwuc2VhcmNoVG9kb3MoZmlsdGVyKTtcbiAgICAgICAgaWYgKHByb2plY3RJZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdG9kb3MgPSB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgdG9kbyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2ogPSB0aGlzLiNtb2RlbC5nZXRQcm9qZWN0QnlUb2RvSWQodG9kby5pZCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9qLmlkID09PSBwcm9qZWN0SWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc3BsYXlUb2RvcyhjYXB0aW9uLCB0b2RvcywgZW1wdHlNZXNzYWdlKTtcbiAgICAgICAgdGhpcy4jcmVsb2FkID0gKCkgPT4gdGhpcy5kaXNwbGF5U2VhcmNoZWRUb2RvcyhcbiAgICAgICAgICAgIGNhcHRpb24sIFxuICAgICAgICAgICAgZmlsdGVyLCBcbiAgICAgICAgICAgIHByb2plY3RJZCxcbiAgICAgICAgICAgIGVtcHR5TWVzc2FnZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGRpc3BsYXlUb2RvcyhjYXB0aW9uLCB0b2RvcywgZW1wdHlNZXNzYWdlPVwiXCIpe1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgICBjb25zdCB0YWJsZURhdGEgPSB7XG4gICAgICAgICAgICBjYXB0aW9uOiBjYXB0aW9uLFxuICAgICAgICAgICAgcm93czogW10sXG4gICAgICAgICAgICBlbXB0eU1lc3NhZ2U6IGVtcHR5TWVzc2FnZSxcbiAgICAgICAgfTtcblxuICAgICAgICB0b2Rvcy5tYXAoXG4gICAgICAgICAgICB0b2RvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qID0gdGhpcy4jbW9kZWwuZ2V0UHJvamVjdEJ5VG9kb0lkKHRvZG8uaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVTdHJpbmcgPSB0b2RvLmR1ZURhdGUgPT09IG51bGwgXG4gICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICA6IGZvcm1hdChuZXcgRGF0ZSh0b2RvLmR1ZURhdGUpLCBcInl5eXktTU0tZGRcIilcbiAgICAgICAgICAgICAgICB0YWJsZURhdGEucm93cy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdG9kby5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0b2RvLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZVN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBDb250cm9sbGVyLiNwcmlvcml0eUxhYmVsc1t0b2RvLnByaW9yaXR5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmU6IHRvZG8uZG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHByb2ogPT09IG51bGwgPyBcIlwiIDogcHJvai5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkOiBwcm9qID09PSBudWxsID8gXCJcIiA6IHByb2ouaWQsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHRvZG9zSGFuZGxlcnMgPSB7XG4gICAgICAgICAgICBjbGlja011bHRpRGVsZXRlQnV0dG9uOiAoXG4gICAgICAgICAgICAgICAgdG9kb0lkcyA9PiB0aGlzLmRlbGV0ZVNlbGVjdGVkVG9kb3ModG9kb0lkcylcbiAgICAgICAgICAgICkuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGNsaWNrQWRkQnV0dG9uOiB0aGlzLmRpc3BsYXlUb2RvQWRkTW9kYWwuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGNsaWNrVGl0bGVMaW5rOiB0aGlzLmRpc3BsYXlUb2RvTW9kYWwuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGNsaWNrUHJvamVjdExpbms6IChcbiAgICAgICAgICAgICAgICAocHJvamVjdElkKSA9PiB0aGlzLmRpc3BsYXlUb2Rvc0luUHJvamVjdChwcm9qZWN0SWQpXG4gICAgICAgICAgICApLmJpbmQodGhpcyksXG4gICAgICAgICAgICBjbGlja1N0YXR1c0J1dHRvbjogKCh0b2RvSWQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRvZ2dsZVRvZG9TdGF0dXMoYnV0dG9uLCBpZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb2RvU3RhdHVzKHRvZG9JZCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jcmVsb2FkKCk7XG4gICAgICAgICAgICB9KS5iaW5kKHRoaXMpLFxuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiN2aWV3LnRvZG9zLnJlbmRlcihjb250ZW50LCBKU09OLnN0cmluZ2lmeSh0YWJsZURhdGEpLCB0b2Rvc0hhbmRsZXJzKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5QWxsVG9kb3MoKXtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgY29uc3QgdG9kb3MgPSB0aGlzLiNtb2RlbC5nZXRBbGxUb2RvcygpO1xuICAgICAgICB0aGlzLmRpc3BsYXlUb2RvcyhcIkFsbCBUb0RvIFRhc2tzXCIsIHRvZG9zKTtcblxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcbiAgICAgICAgdGhpcy4jdmlldy5tZW51LnVwZGF0ZUhpZ2hsaWdodChtZW51LCBcImFsbFwiKTtcblxuICAgICAgICB0aGlzLiNyZWxvYWQgPSB0aGlzLmRpc3BsYXlBbGxUb2RvcztcbiAgICB9XG5cbiAgICBkZWxldGVTZWxlY3RlZFRvZG9zKHRvZG9JZHMpe1xuICAgICAgICBmb3IgKGxldCBpZCBvZiB0b2RvSWRzKSB7XG4gICAgICAgICAgICB0aGlzLiNtb2RlbC5kZWxldGVUb2RvQnlJZChpZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jcmVsb2FkKCk7XG4gICAgfVxuXG4gICAgLy8gRm9yIGJ1dHRvbiBzdGF0dXMgY29tcG9uZW50XG4gICAgdG9nZ2xlVG9kb1N0YXR1cyhidXR0b24sIHRvZG9JZCl7XG4gICAgICAgIHRoaXMuI21vZGVsLnRvZ2dsZVRvZG9Eb25lQnlJRCh0b2RvSWQpO1xuICAgICAgICB0aGlzLiN2aWV3LnN0YXR1c0J1dHRvbi50b2dnbGUoYnV0dG9uKTtcbiAgICB9XG5cbiAgICAvLyBGb3IgY2hlY2tib3ggc3RhdHVzIGNvbXBvbmVudFxuICAgIGNoYW5nZVRvZG9TdGF0dXModG9kb0lkKSB7XG4gICAgICAgIHRoaXMuI21vZGVsLnRvZ2dsZVRvZG9Eb25lQnlJRCh0b2RvSWQpO1xuICAgIH1cblxuICAgIHN1Ym1pdFByb2plY3RFZGl0Rm9ybShwcm9qZWN0SWQsIG5hbWUpIHtcbiAgICAgICAgLy8gRGF0YSBWYWxpZGF0aW9uXG4gICAgICAgIC8vIChTaG91bGQgdXN1YWxseSBwYXNzIHRoYW5rcyB0byBIVE1MIGZvcm0gdmFsaWRhdGlvbilcbiAgICAgICAgaWYgKG5hbWUubGVuZ3RoID4gNTApIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiVGhlIHByb2plY3QgbmFtZSBpcyB0b28gbG9uZy4gS2VlcCBpdCB1bmRlciA1MCBjaGFyYWN0ZXJzLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBwcm9qZWN0IC8gVmFsaWRhdGlvbiBhZ2FpbnN0IHNjaGVtYVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy4jbW9kZWwudXBkYXRlUHJvamVjdEJ5SWQocHJvamVjdElkLCBuYW1lKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgdGhpcy4jbW9kZWwuVmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2FuIGJlIG1vcmUgc3BlY2lmaWMgdXNpbmcgZXJyb3IgbWVzc2FnZS5cbiAgICAgICAgICAgICAgICBhbGVydChcIkludmFsaWQgZGF0YSBzdWJtaXR0ZWQ6IHByb2plY3Qgbm90IHVwZGF0ZWQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLiNyZWxvYWQoKTtcbiAgICB9XG5cbiAgICBzdWJtaXRQcm9qZWN0QWRkRm9ybShuYW1lKXtcbiAgICAgICAgaWYgKG5hbWUubGVuZ3RoID4gNTApIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiVGhlIHByb2plY3QgbmFtZSBpcyB0b28gbG9uZy4gS2VlcCBpdCB1bmRlciA1MCBjaGFyYWN0ZXJzLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBuZXcgVG9kbyAvIFZhbGlkYXRpb24gYWdhaW5zdCBzY2hlbWFcbiAgICAgICAgbGV0IHByb2plY3Q7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwcm9qZWN0ID0gdGhpcy4jbW9kZWwuY3JlYXRlUHJvamVjdChuYW1lKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgdGhpcy4jbW9kZWwuVmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2FuIGJlIG1vcmUgc3BlY2lmaWMgdXNpbmcgZXJyb3IgbWVzc2FnZS5cbiAgICAgICAgICAgICAgICBhbGVydChcIkludmFsaWQgZGF0YSBzdWJtaXR0ZWQ6IG5vIHByb2plY3Qgd2FzIGNyZWF0ZWQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3JlbG9hZCgpO1xuICAgIH1cblxuICAgIHN1Ym1pdFRvZG9FZGl0Rm9ybShpZCwgdGl0bGUsIGR1ZURhdGVTdHJpbmcsIFxuICAgICAgICBwcmlvcml0eUxhYmVsLCBkZXNjcmlwdGlvbiwgcHJvamVjdElkLCBkb25lU3RyaW5nXG4gICAgKXtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBDb250cm9sbGVyLiNwcmlvcml0eUxhYmVscy5pbmRleE9mKHByaW9yaXR5TGFiZWwpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZVN0cmluZyA9PT0gXCJcIiA/IG51bGwgOiBuZXcgRGF0ZShkdWVEYXRlU3RyaW5nKTtcbiAgICAgICAgY29uc3QgZG9uZSA9IEpTT04ucGFyc2UoZG9uZVN0cmluZyk7XG5cbiAgICAgICAgLy8gRGF0YSBWYWxpZGF0aW9uXG4gICAgICAgIC8vIChTaG91bGQgdXN1YWxseSBwYXNzIHRoYW5rcyB0byBIVE1MIGZvcm0gdmFsaWRhdGlvbilcblxuICAgICAgICAvLyBOZXcgdGFzaydzIGR1ZURhdGUgc2hvdWxkIGJlIHRvZGF5IG9yIGxhdGVyXG4gICAgICAgIC8vIChUaGlzIGlzIG5vdCBpbiBzY2hlbWEgYmVjYXVzZSB0YXNrcyBjYW4gYmUgb3ZlcmR1ZSlcbiAgICAgICAgaWYgKGR1ZURhdGUgIT09IG51bGwgJiYgIWlzVG9kYXkoZHVlRGF0ZSkgJiYgaXNCZWZvcmUoZHVlRGF0ZSwgbmV3IERhdGUoKSkpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiVGhlIGR1ZSBkYXRlIG11c3QgYmUgdG9kYXkgb3IgbGF0ZXIuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRpdGxlLmxlbmd0aCA+IDUwKSB7XG4gICAgICAgICAgICBhbGVydChcIlRoZSB0YXNrIHRpdGxlIGlzIHRvbyBsb25nLiBLZWVwIGl0IHVuZGVyIDUwIGNoYXJhY3RlcnMuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIFRvZG8gLyBWYWxpZGF0aW9uIGFnYWluc3Qgc2NoZW1hXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLiNtb2RlbC51cGRhdGVUb2RvQnlJRChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIHRoaXMuI21vZGVsLlZhbGlkYXRpb25FcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIENhbiBiZSBtb3JlIHNwZWNpZmljIHVzaW5nIGVycm9yIG1lc3NhZ2UuXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJJbnZhbGlkIGRhdGEgc3VibWl0dGVkOiB0YXNrIG5vdCB1cGRhdGVkLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy4jbW9kZWwuZ2V0UHJvamVjdEJ5VG9kb0lkKGlkKTtcblxuICAgICAgICAvLyBVcGRhdGUgcHJvamVjdFxuICAgICAgICBpZiAocHJvamVjdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4jbW9kZWwuZGVsZXRlVG9kb0Zyb21DdXJyZW50UHJvamVjdChpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2plY3RJZCAhPT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy4jbW9kZWwuYWRkVG9kb1RvUHJvamVjdChpZCwgcHJvamVjdElkKTtcbiAgICAgICAgfVxuICAgIFxuXG4gICAgICAgIHRoaXMuI3JlbG9hZCgpO1xuICAgIH1cblxuICAgIHN1Ym1pdFRvZG9BZGRGb3JtKHRpdGxlLCBkdWVEYXRlU3RyaW5nLCBwcmlvcml0eUxhYmVsLCBkZXNjcmlwdGlvbiwgcHJvamVjdElkKXtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBDb250cm9sbGVyLiNwcmlvcml0eUxhYmVscy5pbmRleE9mKHByaW9yaXR5TGFiZWwpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZVN0cmluZyA9PT0gXCJcIiA/IG51bGwgOiBuZXcgRGF0ZShkdWVEYXRlU3RyaW5nKTtcblxuICAgICAgICAvLyBEYXRhIFZhbGlkYXRpb25cbiAgICAgICAgLy8gKFNob3VsZCB1c3VhbGx5IHBhc3MgdGhhbmtzIHRvIEhUTUwgZm9ybSB2YWxpZGF0aW9uKVxuXG4gICAgICAgIC8vIE5ldyB0YXNrJ3MgZHVlRGF0ZSBzaG91bGQgYmUgdG9kYXkgb3IgbGF0ZXJcbiAgICAgICAgLy8gKFRoaXMgaXMgbm90IGluIHNjaGVtYSBiZWNhdXNlIHRhc2tzIGNhbiBiZSBvdmVyZHVlKVxuICAgICAgICBpZiAoZHVlRGF0ZSAhPT0gbnVsbCAmJiAhaXNUb2RheShkdWVEYXRlKSAmJiBpc0JlZm9yZShkdWVEYXRlLCBuZXcgRGF0ZSgpKSkge1xuICAgICAgICAgICAgYWxlcnQoXCJUaGUgZHVlIGRhdGUgbXVzdCBiZSB0b2RheSBvciBsYXRlci5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGl0bGUubGVuZ3RoID4gNTApIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiVGhlIHRhc2sgdGl0bGUgaXMgdG9vIGxvbmcuIEtlZXAgaXQgdW5kZXIgNTAgY2hhcmFjdGVycy5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgbmV3IFRvZG8gLyBWYWxpZGF0aW9uIGFnYWluc3Qgc2NoZW1hXG4gICAgICAgIGxldCB0b2RvO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdG9kbyA9IHRoaXMuI21vZGVsLmNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZmFsc2UpO1xuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIHRoaXMuI21vZGVsLlZhbGlkYXRpb25FcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIENhbiBiZSBtb3JlIHNwZWNpZmljIHVzaW5nIGVycm9yIG1lc3NhZ2UuXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJJbnZhbGlkIGRhdGEgc3VibWl0dGVkOiBubyB0YXNrIHdhcyBjcmVhdGVkLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdG8gcHJvamVjdFxuICAgICAgICBpZiAocHJvamVjdElkICE9PSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLiNtb2RlbC5hZGRUb2RvVG9Qcm9qZWN0KHRvZG8uaWQsIHByb2plY3RJZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNyZWxvYWQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7IiwiZXhwb3J0ICogZnJvbSAnLi9tb2RlbHMvc2VydmljZS5qcyc7IiwiY2xhc3MgUHJvamVjdCB7XG4gICAgI2lkO1xuICAgICN0b2RvcztcbiAgICAjbmFtZTtcbiAgICBjb25zdHJ1Y3RvcihpZCwgbmFtZSkge1xuICAgICAgICB0aGlzLiNpZCA9IGlkO1xuICAgICAgICB0aGlzLiNuYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy4jdG9kb3MgPSBbXTtcbiAgICB9XG4gICAgZ2V0IGlkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLiNpZDtcbiAgICB9XG4gICAgZ2V0IHRvZG9zKCl7XG4gICAgICAgIHJldHVybiB0aGlzLiN0b2RvcztcbiAgICB9XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNuYW1lO1xuICAgIH1cbiAgICBzZXQgbmFtZShuZXdOYW1lKXtcbiAgICAgICAgdGhpcy4jbmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgYWRkVG9kbyh0b2RvKXtcbiAgICAgICAgaWYgKCF0aGlzLiN0b2Rvcy5pbmNsdWRlcyh0b2RvKSkge1xuICAgICAgICAgICAgdGhpcy4jdG9kb3MucHVzaCh0b2RvKTsgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGV0ZVRvZG8odG9kbykge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuI3RvZG9zLmluZGV4T2YodG9kbyk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuI3RvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgI3NjaGVtYSA9IHtcbiAgICAgICAgaWQ6IHZhbCA9PiB2YWwgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgJiYgdmFsICE9PSBudWxsXG4gICAgICAgICAgICAmJiB0eXBlb2YgKHZhbCkgPT09ICdzdHJpbmcnLFxuICAgICAgICBuYW1lOiB2YWwgPT4gdmFsICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICYmIHZhbCAhPT0gbnVsbFxuICAgICAgICAgICAgJiYgdHlwZW9mICh2YWwpID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgJiYgdmFsLmxlbmd0aCA+IDAsXG4gICAgfTtcblxuICAgIHN0YXRpYyBnZXQgc2NoZW1hKCl7XG4gICAgICAgIHJldHVybiB0aGlzLiNzY2hlbWE7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwiZnVuY3Rpb24gc2F2ZU9iaihrZXksIG9iail7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuZnVuY3Rpb24gZ2V0T2JqKGtleSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xufVxuXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbn1cblxuZnVuY3Rpb24gaXNTYXZlZChrZXkpe1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoa2V5KTtcbn1cblxuZXhwb3J0IHtzYXZlT2JqLCBnZXRPYmosIGNsZWFyLCBpc1NhdmVkfSIsImltcG9ydCB7IHVsaWQgfSBmcm9tIFwidWxpZFwiO1xuaW1wb3J0IHsgaXNCZWZvcmUgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG8uanNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCAqIGFzIHJlcG8gZnJvbSBcIi4vcmVwb3NpdG9yeS5qc1wiO1xuaW1wb3J0IGR1bW15VG9kb3MgZnJvbSBcIi4uL2R1bW15LXRvZG9zLmpzb25cIjtcblxubGV0IHRvZG9zID0ge307XG5sZXQgcHJvamVjdHMgPSB7fTtcbmxldCBkZWZhdWx0UHJvamVjdDtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpZiAoaXNSZXBvc2l0b3J5KCkpIHtcbiAgICAgICAgcmV0cmlldmVTYXZlZERhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkZWZhdWx0UHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJkZWZhdWx0XCIpO1xuICAgICAgICBzYXZlVG9kb3MoKTtcbiAgICAgICAgc2F2ZVByb2plY3RzKCk7XG4gICAgICAgIHNhdmVEZWZhdWx0UHJvamVjdCgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBkb25lLCBpZD1udWxsKSB7XG4gICAgaWYgKGlkID09PSBudWxsKSB7XG4gICAgICAgIGlkID0gZ2V0SWQoKTtcbiAgICB9XG4gICAgY29uc3QgaW5wdXQgPSB7IGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBkb25lIH07XG4gICAgY29uc3QgdmFsaWRhdGVkID0gdmFsaWRhdGUoaW5wdXQsIFRvZG8uc2NoZW1hKTtcbiAgICBjb25zdCBpbnZhbGlkS2V5cyA9IE9iamVjdC5lbnRyaWVzKHZhbGlkYXRlZClcbiAgICAgICAgLmZpbHRlcigoW2tleSwgdmFsXSkgPT4gIXZhbClcbiAgICAgICAgLm1hcCgoW2tleSwgdmFsXSkgPT4ga2V5KTtcbiAgICBpZiAoaW52YWxpZEtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKGludmFsaWRLZXlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8oaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmUpO1xuICAgICAgICB0b2Rvc1tpZF0gPSB0b2RvO1xuICAgICAgICBkZWZhdWx0UHJvamVjdC5hZGRUb2RvKHRvZG8pO1xuICAgICAgICBzYXZlVG9kb3MoKTtcbiAgICAgICAgc2F2ZVByb2plY3RzKCk7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0VG9kb0J5SWQoaWQpIHtcbiAgICByZXR1cm4gdG9kb3NbaWRdO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUb2RvQnlJRChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZSkge1xuICAgIGNvbnN0IHRvZG8gPSBnZXRUb2RvQnlJZChpZCk7XG4gICAgY29uc3QgaW5wdXQgPSB7IGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBkb25lIH07XG4gICAgY29uc3QgdmFsaWRhdGVkID0gdmFsaWRhdGUoaW5wdXQsIFRvZG8uc2NoZW1hKTtcbiAgICBjb25zdCBpbnZhbGlkS2V5cyA9IE9iamVjdC5lbnRyaWVzKHZhbGlkYXRlZClcbiAgICAgICAgLmZpbHRlcigoW2tleSwgdmFsXSkgPT4gIXZhbClcbiAgICAgICAgLm1hcCgoW2tleSwgdmFsXSkgPT4ga2V5KVxuICAgIGlmIChpbnZhbGlkS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBWYWxpZGF0aW9uRXJyb3IoaW52YWxpZEtleXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG8uc2V0QWxsKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmUpO1xuICAgICAgICBzYXZlVG9kb3MoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSwgaWQ9bnVsbCkge1xuICAgIGlmIChpZCA9PT0gbnVsbCkge1xuICAgICAgICBpZCA9IGdldElkKCk7XG4gICAgfVxuICAgIGNvbnN0IGlucHV0ID0geyBpZCwgbmFtZSB9O1xuICAgIGNvbnN0IHZhbGlkYXRlZCA9IHZhbGlkYXRlKGlucHV0LCBQcm9qZWN0LnNjaGVtYSk7XG4gICAgY29uc3QgaW52YWxpZEtleXMgPSBPYmplY3QuZW50cmllcyh2YWxpZGF0ZWQpXG4gICAgICAgIC5maWx0ZXIoKFtrZXksIHZhbF0pID0+ICF2YWwpXG4gICAgICAgIC5tYXAoKFtrZXksIHZhbF0pID0+IGtleSlcbiAgICBpZiAoaW52YWxpZEtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKGludmFsaWRLZXlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoaWQsIG5hbWUpO1xuICAgICAgICBwcm9qZWN0c1tpZF0gPSBwcm9qZWN0O1xuICAgICAgICBzYXZlUHJvamVjdHMoKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0QnlJZChpZCkge1xuICAgIHJldHVybiBwcm9qZWN0c1tpZF07XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9Ub1Byb2plY3QodG9kb0lkLCBwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKTtcbiAgICBjb25zdCB0b2RvID0gZ2V0VG9kb0J5SWQodG9kb0lkKTtcbiAgICBpZiAocHJvamVjdCA9PT0gdW5kZWZpbmVkIHx8IHRvZG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3Qgbm90IGZvdW5kLlwiKTtcbiAgICB9XG4gICAgcHJvamVjdC5hZGRUb2RvKHRvZG8pO1xuICAgIHNhdmVQcm9qZWN0cygpO1xufVxuXG5mdW5jdGlvbiBpc0RlZmF1bHRQcm9qZWN0KHByb2plY3RJZCkge1xuICAgIHJldHVybiBnZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpID09PSBkZWZhdWx0UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVG9kb0Zyb21Qcm9qZWN0KHRvZG9JZCwgcHJvamVjdElkKSB7XG4gICAgaWYgKGlzRGVmYXVsdFByb2plY3QocHJvamVjdElkKSkge1xuICAgICAgICBkZWxldGVUb2RvKHRvZG9JZCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RCeUlkKHByb2plY3RJZCk7XG4gICAgY29uc3QgdG9kbyA9IGdldFRvZG9CeUlkKHRvZG9JZCk7XG4gICAgaWYgKHByb2plY3QgPT09IHVuZGVmaW5lZCB8fCB0b2RvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0IG5vdCBmb3VuZC5cIik7XG4gICAgfVxuICAgIHByb2plY3QuZGVsZXRlVG9kbyh0b2RvKTtcbiAgICBzYXZlUHJvamVjdHMoKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVG9kb0Zyb21DdXJyZW50UHJvamVjdCh0b2RvSWQpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEJ5VG9kb0lkKHRvZG9JZCk7XG4gICAgZGVsZXRlVG9kb0Zyb21Qcm9qZWN0KHRvZG9JZCwgcHJvamVjdC5pZCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RCeUlkKGlkLCBuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RCeUlkKGlkKTtcbiAgICBjb25zdCBpbnB1dCA9IHsgaWQsIG5hbWUgfTtcbiAgICBjb25zdCB2YWxpZGF0ZWQgPSB2YWxpZGF0ZShpbnB1dCwgUHJvamVjdC5zY2hlbWEpO1xuICAgIGNvbnN0IGludmFsaWRLZXlzID0gT2JqZWN0LmVudHJpZXModmFsaWRhdGVkKVxuICAgICAgICAuZmlsdGVyKChba2V5LCB2YWxdKSA9PiAhdmFsKVxuICAgICAgICAubWFwKChba2V5LCB2YWxdKSA9PiBrZXkpO1xuICAgIGlmIChpbnZhbGlkS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBWYWxpZGF0aW9uRXJyb3IoaW52YWxpZEtleXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3QubmFtZSA9IG5hbWU7XG4gICAgICAgIHNhdmVQcm9qZWN0cygpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEJ5SWQocHJvamVjdElEKSB7XG4gICAgZGVsZXRlIChwcm9qZWN0c1twcm9qZWN0SURdKTtcbiAgICBzYXZlUHJvamVjdHMoKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVG9kb0J5SWQodG9kb0lkKSB7XG4gICAgY29uc3QgdG9kbyA9IGdldFRvZG9CeUlkKHRvZG9JZCk7XG4gICAgT2JqZWN0LnZhbHVlcyhwcm9qZWN0cykuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgcHJvamVjdC5kZWxldGVUb2RvKHRvZG8pO1xuICAgIH0pO1xuICAgIGRlbGV0ZSAodG9kb3NbdG9kb0lkXSk7XG4gICAgc2F2ZVRvZG9zKCk7XG4gICAgc2F2ZVByb2plY3RzKCk7XG59XG5cbmZ1bmN0aW9uIGdldEFsbFRvZG9zKCkge1xuICAgIHJldHVybiBkZWZhdWx0UHJvamVjdC50b2Rvcztcbn1cblxuZnVuY3Rpb24gZ2V0QWxsUHJvamVjdHMoZXhjbHVkZURlZmF1bHQgPSB0cnVlKSB7XG4gICAgaWYgKGV4Y2x1ZGVEZWZhdWx0KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHByb2plY3RzKVxuICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgICBwcm9qZWN0ID0+IHByb2plY3QgIT09IGRlZmF1bHRQcm9qZWN0XG4gICAgICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHByb2plY3RzKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNlYXJjaFRvZG9zKGZpbHRlckZ1bmMpIHtcbiAgICByZXR1cm4gZ2V0QWxsVG9kb3MoKS5maWx0ZXIoXG4gICAgICAgIHRvZG8gPT4gZmlsdGVyRnVuYyh0b2RvKVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaFByb2plY3RzKGZpbHRlckZ1bmMsIGV4Y2x1ZGVEZWZhdWx0ID0gdHJ1ZSkge1xuICAgIGdldEFsbFByb2plY3RzKGV4Y2x1ZGVEZWZhdWx0KS5maWx0ZXIoXG4gICAgICAgIHByb2plY3QgPT4gZmlsdGVyRnVuYyhwcm9qZWN0KVxuICAgIClcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdEJ5VG9kb0lkKGlkLCBpZ25vcmVEZWZhdWx0ID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRvZG8gPSBnZXRUb2RvQnlJZChpZCk7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBPYmplY3QudmFsdWVzKHByb2plY3RzKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwcm9qZWN0LnRvZG9zLmluY2x1ZGVzKHRvZG8pXG4gICAgICAgICAgICAmJiAoIWlnbm9yZURlZmF1bHQgfHwgcHJvamVjdCAhPT0gZGVmYXVsdFByb2plY3QpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldFRvZG9zV2l0aG91dFByb2plY3QoKXtcbiAgICBjb25zdCB3aXRob3V0ID0gW107XG4gICAgZm9yIChsZXQgaWQgaW4gdG9kb3MpIHtcbiAgICAgICAgaWYgKGdldFByb2plY3RCeVRvZG9JZChpZCkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHdpdGhvdXQucHVzaCh0b2Rvc1tpZF0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHdpdGhvdXQ7XG59XG5cbmZ1bmN0aW9uIGdldE92ZXJkdWVUb2Rvc0luUHJvamVjdChpZCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0QnlJZChpZCk7XG4gICAgcmV0dXJuIHByb2plY3QudG9kb3MuZmlsdGVyKFxuICAgICAgICB0b2RvID0+IGlzQmVmb3JlKHRvZG8uZHVlRGF0ZSwgbmV3IERhdGUoKSkgJiYgIXRvZG8uZG9uZVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RQcm9ncmVzc1JhdGUoaWQpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEJ5SWQoaWQpO1xuICAgIGNvbnN0IHRvdGFsID0gcHJvamVjdC50b2Rvcy5sZW5ndGg7XG4gICAgaWYgKHRvdGFsID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCBkb25lID0gcHJvamVjdC50b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmRvbmUpLmxlbmd0aDtcbiAgICByZXR1cm4gZG9uZSAvIHRvdGFsO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUb2RvRG9uZUJ5SUQoaWQpIHtcbiAgICBjb25zdCB0b2RvID0gZ2V0VG9kb0J5SWQoaWQpO1xuICAgIHRvZG8uZG9uZSA9ICF0b2RvLmRvbmU7XG4gICAgc2F2ZVRvZG9zKCk7XG59XG5cbmZ1bmN0aW9uIGlzUmVwb3NpdG9yeSgpe1xuICAgIHJldHVybiByZXBvLmlzU2F2ZWQoXCJ0b2Rvc1wiKSBcbiAgICAgICAgJiYgcmVwby5pc1NhdmVkKFwicHJvamVjdHNcIilcbiAgICAgICAgJiYgcmVwby5pc1NhdmVkKFwiZGVmYXVsdFByb2plY3RcIilcbn1cblxuZnVuY3Rpb24gc2F2ZVRvZG9zKCl7XG4gICAgY29uc3QgdG9kb3NEYXRhID0gW107XG4gICAgT2JqZWN0LnZhbHVlcyh0b2RvcykuZm9yRWFjaChcbiAgICAgICAgdG9kbyA9PiB0b2Rvc0RhdGEucHVzaCh7XG4gICAgICAgICAgICBpZDogdG9kby5pZCxcbiAgICAgICAgICAgIHRpdGxlOiB0b2RvLnRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRvZG8uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkdWVEYXRlOiB0b2RvLmR1ZURhdGUsXG4gICAgICAgICAgICBkb25lOiB0b2RvLmRvbmUsXG4gICAgICAgICAgICBwcmlvcml0eTogdG9kby5wcmlvcml0eSxcbiAgICAgICAgfSlcbiAgICApXG4gICAgcmVwby5zYXZlT2JqKFwidG9kb3NcIiwgdG9kb3NEYXRhKTtcbn1cblxuZnVuY3Rpb24gc2F2ZVByb2plY3RzKCl7XG4gICAgY29uc3QgcHJvamVjdERhdGEgPSBbXTtcbiAgICBPYmplY3QudmFsdWVzKHByb2plY3RzKS5mb3JFYWNoKFxuICAgICAgICBwcm9qZWN0ID0+IHByb2plY3REYXRhLnB1c2goe1xuICAgICAgICAgICAgaWQ6IHByb2plY3QuaWQsXG4gICAgICAgICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgICAgICAgICB0b2RvczogcHJvamVjdC50b2Rvcy5tYXAodG9kb3MgPT4gdG9kb3MuaWQpXG4gICAgICAgIH0pXG4gICAgKVxuICAgIHJlcG8uc2F2ZU9iaihcInByb2plY3RzXCIsIHByb2plY3REYXRhKTtcbn1cblxuZnVuY3Rpb24gc2F2ZURlZmF1bHRQcm9qZWN0KCkge1xuICAgIHJlcG8uc2F2ZU9iaihcImRlZmF1bHRQcm9qZWN0XCIsIHtcbiAgICAgICAgaWQ6IGRlZmF1bHRQcm9qZWN0LmlkLFxuICAgICAgICBuYW1lOiBkZWZhdWx0UHJvamVjdC5uYW1lXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlU2F2ZWREYXRhKCl7XG4gICAgY29uc3QgdG9kb3NEYXRhID0gcmVwby5nZXRPYmooXCJ0b2Rvc1wiKTtcbiAgICBjb25zdCBwcm9qZWN0c0RhdGEgPSByZXBvLmdldE9iaihcInByb2plY3RzXCIpO1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0RGF0YSA9IHJlcG8uZ2V0T2JqKFwiZGVmYXVsdFByb2plY3RcIik7XG5cbiAgICAvLyBDcmVhdGUgZGVmYXVsdCBwcm9qZWN0IGZpcnN0IGJlY2F1c2UgY3JlYXRlVG9kbyBwb3B1bGF0ZXMgaXRzIHRvZG9zIFxuICAgIGRlZmF1bHRQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChkZWZhdWx0UHJvamVjdERhdGEubmFtZSwgZGVmYXVsdFByb2plY3REYXRhLmlkKTsgIFxuICAgIFxuICAgIHRvZG9zRGF0YS5mb3JFYWNoKFxuICAgICAgICBkYXRhID0+IGNyZWF0ZVRvZG8oXG4gICAgICAgICAgICBkYXRhLnRpdGxlLCBcbiAgICAgICAgICAgIGRhdGEuZGVzY3JpcHRpb24sIFxuICAgICAgICAgICAgbmV3IERhdGUoZGF0YS5kdWVEYXRlKSwgXG4gICAgICAgICAgICBkYXRhLnByaW9yaXR5LCBcbiAgICAgICAgICAgIGRhdGEuZG9uZSxcbiAgICAgICAgICAgIGRhdGEuaWRcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBwcm9qZWN0c0RhdGFcbiAgICAuZmlsdGVyKGRhdGEgPT4gZGF0YS5pZCAhPT0gZGVmYXVsdFByb2plY3QuaWQpXG4gICAgLmZvckVhY2goXG4gICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdChkYXRhLm5hbWUsIGRhdGEuaWQpO1xuICAgICAgICAgICAgZGF0YS50b2Rvcy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgIHRvZG9JZCA9PiBhZGRUb2RvVG9Qcm9qZWN0KHRvZG9JZCwgZGF0YS5pZClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICApO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0QnlOYW1lKG5hbWUpe1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHByb2plY3RzKS5maW5kKFxuICAgICAgICBwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gbmFtZVxuICAgIClcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVEdW1teSgpIHtcbiAgICBjbGVhckRhdGEoKTtcbiAgICBpbml0KCk7XG4gICAgZHVtbXlUb2Rvcy5mb3JFYWNoKFxuICAgICAgICB0b2RvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBjcmVhdGVUb2RvKFxuICAgICAgICAgICAgICAgIHRvZG8udGl0bGUsXG4gICAgICAgICAgICAgICAgdG9kby5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAobmV3IERhdGUodG9kby5kdWVEYXRlKSksXG4gICAgICAgICAgICAgICAgdG9kby5wcmlvcml0eSxcbiAgICAgICAgICAgICAgICB0b2RvLmRvbmVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgbmV3UHJvamVjdCA9IE9iamVjdC52YWx1ZXMocHJvamVjdHMpLmZpbmQoXG4gICAgICAgICAgICAgICAgcHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IHRvZG8ucHJvamVjdFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKG5ld1Byb2plY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KHRvZG8ucHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRUb2RvVG9Qcm9qZWN0KG5ld1RvZG8uaWQsIG5ld1Byb2plY3QuaWQpO1xuICAgICAgICB9XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJEYXRhKCl7XG4gICAgdG9kb3MgPSB7fTtcbiAgICBwcm9qZWN0cyA9IHt9O1xuICAgIGRlZmF1bHRQcm9qZWN0ID0gbnVsbDtcbiAgICByZXBvLmNsZWFyKCk7XG59XG5cbmZ1bmN0aW9uIGdldElkKCkge1xuICAgIHJldHVybiB1bGlkKCk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKG9iaiwgc2NoZW1hKSB7XG4gICAgY29uc3QgdmFsaWRhdGVkID0ge307XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqKSkge1xuICAgICAgICB2YWxpZGF0ZWRba2V5XSA9IHNjaGVtYVtrZXldKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkYXRlZDtcblxuXG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRQcm9qZWN0KCkge1xuICAgIHJldHVybiBkZWZhdWx0UHJvamVjdDtcbn1cblxuY2xhc3MgVmFsaWRhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKGtleXMpIHtcbiAgICAgICAgc3VwZXIoYEludmFsaWQga2V5KHMpOiAke0pTT04uc3RyaW5naWZ5KGtleXMpfWApO1xuICAgIH1cbn1cblxuXG5leHBvcnQge1xuICAgIGluaXQsXG4gICAgZ2V0RGVmYXVsdFByb2plY3QsXG4gICAgY3JlYXRlVG9kbyxcbiAgICBnZXRUb2RvQnlJZCxcbiAgICB1cGRhdGVUb2RvQnlJRCxcbiAgICBjcmVhdGVQcm9qZWN0LFxuICAgIGdldFByb2plY3RCeUlkLFxuICAgIGFkZFRvZG9Ub1Byb2plY3QsXG4gICAgaXNEZWZhdWx0UHJvamVjdCxcbiAgICBkZWxldGVUb2RvRnJvbVByb2plY3QsXG4gICAgdXBkYXRlUHJvamVjdEJ5SWQsXG4gICAgZGVsZXRlUHJvamVjdEJ5SWQsXG4gICAgZGVsZXRlVG9kb0J5SWQsXG4gICAgZGVsZXRlVG9kb0Zyb21DdXJyZW50UHJvamVjdCxcbiAgICBnZXRBbGxUb2RvcyxcbiAgICBnZXRBbGxQcm9qZWN0cyxcbiAgICBzZWFyY2hUb2RvcyxcbiAgICBzZWFyY2hQcm9qZWN0cyxcbiAgICBnZXRQcm9qZWN0QnlUb2RvSWQsXG4gICAgZ2V0VG9kb3NXaXRob3V0UHJvamVjdCxcbiAgICBnZXRPdmVyZHVlVG9kb3NJblByb2plY3QsXG4gICAgZ2V0UHJvamVjdFByb2dyZXNzUmF0ZSxcbiAgICB0b2dnbGVUb2RvRG9uZUJ5SUQsXG4gICAgZ2V0UHJvamVjdEJ5TmFtZSxcbiAgICBwb3B1bGF0ZUR1bW15LFxuICAgIGNsZWFyRGF0YSxcbiAgICBWYWxpZGF0aW9uRXJyb3IsXG59OyIsImNsYXNzIFRvZG8ge1xuICAgICNpZDtcbiAgICAjdGl0bGU7XG4gICAgI2Rlc2NyaXB0aW9uO1xuICAgICNkdWVEYXRlO1xuICAgICNwcmlvcml0eTtcbiAgICAjZG9uZTtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZSkge1xuICAgICAgICB0aGlzLiNpZCA9IGlkO1xuICAgICAgICB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLiNkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLiNkdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy4jcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy4jZG9uZSA9IGRvbmU7XG4gICAgfVxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgLy8gaWQgaXMgaW1tdXRhYmxlIGFuZCBoYXMgbm8gc2V0dGVyXG4gICAgICAgIHJldHVybiB0aGlzLiNpZDtcbiAgICB9XG4gICAgZ2V0IHRpdGxlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLiN0aXRsZTtcbiAgICB9XG4gICAgc2V0IHRpdGxlKG5ld1RpdGxlKXtcbiAgICAgICAgdGhpcy4jdGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZGVzY3JpcHRpb247XG4gICAgfVxuICAgIHNldCBkZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLiNkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2R1ZURhdGU7XG4gICAgfSBcbiAgICBzZXQgZHVlRGF0ZShuZXdEdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuI2R1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgIH1cbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcmlvcml0eTtcbiAgICB9XG4gICAgc2V0IHByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuI3ByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfSBcbiAgICBnZXQgZG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2RvbmU7XG4gICAgfVxuICAgIHNldCBkb25lKG5ld0RvbmUpIHtcbiAgICAgICAgdGhpcy4jZG9uZSA9IG5ld0RvbmU7XG4gICAgfVxuXG4gICAgc2V0QWxsKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmUpe1xuICAgICAgICAvLyBpZCBpcyBpbW11dGFibGUgYW5kIGhhcyBubyBzZXR0ZXJcbiAgICAgICAgdGhpcy4jdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuI3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuI2RvbmUgPSBkb25lO1xuICAgIH1cblxuICAgIHN0YXRpYyAjc2NoZW1hID0ge1xuICAgICAgICBpZDogdmFsID0+IHZhbCAhPT0gbnVsbCBcbiAgICAgICAgICAgICYmIHZhbCAhPT0gdW5kZWZpbmVkIFxuICAgICAgICAgICAgJiYgdHlwZW9mICh2YWwpID09PSAnc3RyaW5nJyxcbiAgICAgICAgdGl0bGU6IHZhbCA9PiB2YWwgIT09IG51bGwgXG4gICAgICAgICAgICAmJiB2YWwgIT09IHVuZGVmaW5lZCBcbiAgICAgICAgICAgICYmIHR5cGVvZiAodmFsKSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICYmIHZhbC5sZW5ndGggPiAwLFxuICAgICAgICBkZXNjcmlwdGlvbjogdmFsID0+IHZhbCAhPT0gbnVsbCBcbiAgICAgICAgICAgICYmIHZhbCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAmJiB0eXBlb2YgKHZhbCkgPT09ICdzdHJpbmcnLFxuICAgICAgICBkdWVEYXRlOiB2YWwgPT4gdmFsICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICYmIChEYXRlLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHZhbCkgfHwgdmFsID09PSBudWxsKVxuICAgICAgICAgICAgLFxuICAgICAgICBwcmlvcml0eTogdmFsID0+IHZhbCAhPT0gbnVsbFxuICAgICAgICAgICAgJiYgdmFsICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICYmIHR5cGVvZih2YWwpID09PSBcIm51bWJlclwiXG4gICAgICAgICAgICAmJiBbMywgMiwgMSwgMF0uaW5jbHVkZXModmFsKSxcbiAgICAgICAgZG9uZTogdmFsID0+IHZhbCAhPT0gbnVsbFxuICAgICAgICAgICAgJiYgdmFsICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICYmIHR5cGVvZih2YWwpID09PSBcImJvb2xlYW5cIixcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IHNjaGVtYSgpe1xuICAgICAgICByZXR1cm4gVG9kby4jc2NoZW1hO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbzsiLCJmdW5jdGlvbiBwYXJzZUh0bWwoaHRtbFRleHQpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sVGV4dCwgJ3RleHQvaHRtbCcpO1xuICAgIHJldHVybiBkb2MuYm9keS5maXJzdEVsZW1lbnRDaGlsZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VIdG1sOyIsImltcG9ydCAqIGFzIHRvZG9zIGZyb20gXCIuL3ZpZXdzL3RvZG9zLXZpZXdcIjtcbmltcG9ydCAqIGFzIHRvZG9zVGFibGUgZnJvbSBcIi4vdmlld3MvdG9kb3MtdGFibGUtdmlld1wiO1xuaW1wb3J0ICogYXMgdG9kb3NUYWJsZVJvdyBmcm9tIFwiLi92aWV3cy90b2Rvcy10YWJsZS1yb3ctdmlld1wiO1xuaW1wb3J0ICogYXMgc3RhdHVzQnV0dG9uIGZyb20gXCIuL3ZpZXdzL3RvZG8tc3RhdHVzLWJ1dHRvbi12aWV3XCI7XG5pbXBvcnQgKiBhcyBtZW51IGZyb20gXCIuL3ZpZXdzL21lbnUtdmlld1wiO1xuaW1wb3J0ICogYXMgcHJvamVjdHMgZnJvbSBcIi4vdmlld3MvcHJvamVjdHMtdmlld1wiO1xuaW1wb3J0ICogYXMgdG9kbyBmcm9tIFwiLi92aWV3cy90b2RvLXZpZXdcIjtcbmltcG9ydCAqIGFzIHRvZG9BZGQgZnJvbSBcIi4vdmlld3MvdG9kby1hZGQtdmlld1wiO1xuaW1wb3J0ICogYXMgdG9kb0VkaXQgZnJvbSBcIi4vdmlld3MvdG9kby1lZGl0LXZpZXdcIjtcbmltcG9ydCAqIGFzIHByb2plY3QgZnJvbSBcIi4vdmlld3MvcHJvamVjdC12aWV3XCI7XG5pbXBvcnQgKiBhcyBwcm9qZWN0QWRkIGZyb20gXCIuL3ZpZXdzL3Byb2plY3QtYWRkLXZpZXdcIjtcbmltcG9ydCAqIGFzIHByb2plY3RFZGl0IGZyb20gXCIuL3ZpZXdzL3Byb2plY3QtZWRpdC12aWV3XCI7XG5cbmV4cG9ydCB7IFxuICAgIHRvZG9zLCB0b2Rvc1RhYmxlLCB0b2Rvc1RhYmxlUm93LCBzdGF0dXNCdXR0b24sIFxuICAgIG1lbnUsXG4gICAgcHJvamVjdHMsXG4gICAgdG9kbywgdG9kb0FkZCwgdG9kb0VkaXQsXG4gICAgcHJvamVjdCwgcHJvamVjdEFkZCwgcHJvamVjdEVkaXQsXG59OyIsImltcG9ydCBwYXJzZUh0bWwgZnJvbSBcIi4uL3Rvb2xzL3BhcnNlLWh0bWwuanNcIjtcblxuZnVuY3Rpb24gcmVuZGVyKG1lbnUsIHByb2plY3RzRGF0YSwgaGFuZGxlcnMpIHtcbiAgICBtZW51LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UocHJvamVjdHNEYXRhKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKFxuICAgICAgICBwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImxpbmstcHJvamVjdFwiKTtcbiAgICAgICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcnMuY2xpY2tQcm9qZWN0TGluayhwcm9qZWN0LmlkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChwYXJzZUh0bWwoYFxuICAgICAgICA8YSBpZD1cImxpbmstcHJvamVjdHMtYWxsXCIgY2xhc3M9XCJzZXBhcmF0ZVwiIGhyZWY9XCIjXCI+VmlldyBhbGw8L2E+XG4gICAgYCkpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQocGFyc2VIdG1sKGBcbiAgICAgICAgPGEgaWQ9XCJhZGQtcHJvamVjdFwiIGNsYXNzPVwic2VwYXJhdGVcIiBocmVmPVwiI1wiPkFkZC4uLjwvYT5cbiAgICBgKSk7XG4gICAgXG4gICAgbWVudS5xdWVyeVNlbGVjdG9yKFwiYSNsaW5rLXByb2plY3RzLWFsbFwiKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgIGhhbmRsZXJzLmNsaWNrQWxsUHJvamVjdHNMaW5rXG4gICAgICAgICk7XG5cbiAgICBtZW51LnF1ZXJ5U2VsZWN0b3IoXCJhI2FkZC1wcm9qZWN0XCIpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgaGFuZGxlcnMuY2xpY2tBZGRMaW5rXG4gICAgICAgICk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZShtZW51LCBwcm9qZWN0c0RhdGEpe1xuXG59XG5cbmV4cG9ydCB7cmVuZGVyLCB1cGRhdGV9OyIsImltcG9ydCAqIGFzIHByb2plY3RNZW51VmlldyBmcm9tIFwiLi9tZW51LXByb2plY3RzLXZpZXcuanNcIjtcblxuZnVuY3Rpb24gcmVuZGVyKG1lbnUsIHByb2plY3RzRGF0YSwgaGFuZGxlcnMpIHtcbiAgICBtZW51LnF1ZXJ5U2VsZWN0b3IoXCIjbGluay10b2Rvcy1hbGxcIilcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICBoYW5kbGVycy5jbGlja0FsbFRvZG9zTGlua1xuICAgICAgICApO1xuXG4gICAgbWVudS5xdWVyeVNlbGVjdG9yKFwiI2xpbmstdG9kb3MtdG9kYXlcIilcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICBoYW5kbGVycy5jbGlja1RvZGF5VG9kb3NMaW5rXG4gICAgICAgICk7XG4gICAgXG4gICAgbWVudS5xdWVyeVNlbGVjdG9yKFwiI2xpbmstdG9kb3Mtb3ZlcmR1ZVwiKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgIGhhbmRsZXJzLmNsaWNrT3ZlcmR1ZVRvZG9zTGlua1xuICAgICAgICApO1xuXG4gICAgY29uc3QgcHJvamVjdE1lbnUgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1tZW51XCIpO1xuICAgIHByb2plY3RNZW51Vmlldy5yZW5kZXIocHJvamVjdE1lbnUsIHByb2plY3RzRGF0YSwgaGFuZGxlcnMpOyAgICBcblxuICAgIG1lbnUucXVlcnlTZWxlY3RvcihcIiNsaW5rLWR1bW15LWRhdGFcIilcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICBoYW5kbGVycy5jbGlja0R1bW15RGF0YUxpbmtcbiAgICAgICAgKTtcblxuICAgIG1lbnUucXVlcnlTZWxlY3RvcihcIiNsaW5rLWNsZWFyXCIpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgaGFuZGxlcnMuY2xpY2tDbGVhckxpbmtcbiAgICAgICAgKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKG1lbnUsIHByb2plY3RzRGF0YSkge1xuICAgIGNvbnN0IHByb2plY3RNZW51ID0gbWVudS5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbWVudVwiKTtcbiAgICBwcm9qZWN0TWVudVZpZXcudXBkYXRlKHByb2plY3RNZW51LCBwcm9qZWN0c0RhdGEpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVIaWdobGlnaHQobWVudSwgbWVudUNsYXNzKXtcbiAgICBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikuZm9yRWFjaChcbiAgICAgICAgYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKG1lbnVDbGFzcykpIHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyLCB1cGRhdGUsIHVwZGF0ZUhpZ2hsaWdodCB9OyIsImltcG9ydCBwYXJzZUh0bWwgZnJvbSBcIi4uL3Rvb2xzL3BhcnNlLWh0bWxcIjtcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIi4uL2ltYWdlcy9jbG9zZS5zdmdcIjtcblxuZnVuY3Rpb24gcmVuZGVyKGRpYWxvZywgdGl0bGUsIG1vZGFsSGFuZGxlcnMpIHtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IHBhcnNlSHRtbChgXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtDbG9zZUljb259XCIgYWx0PVwiQ2xvc2VcIj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgYCk7XG4gICAgY29uc3QgaDEgPSBwYXJzZUh0bWwoYDxoMT4ke3RpdGxlfTwvaDE+YCk7XG5cbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbW9kYWxIYW5kbGVycy5jbGlja0Nsb3NlQnV0dG9uKTtcblxuICAgIGRpYWxvZy5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgZGlhbG9nLmFwcGVuZENoaWxkKGgxKTtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZShjb250ZW50LCB0aXRsZSkge1xufVxuXG5leHBvcnQgeyByZW5kZXIsIHVwZGF0ZSB9IiwiaW1wb3J0ICogYXMgbW9kYWxWaWV3IGZyb20gXCIuL21vZGFsLXZpZXdcIjtcbmltcG9ydCBwYXJzZUh0bWwgZnJvbSBcIi4uL3Rvb2xzL3BhcnNlLWh0bWxcIjtcblxuY29uc3QgdGVtcGxhdGUgPSBgXG4gICAgPGZvcm0gbmFtZT1cInByb2plY3RBZGRcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5cbiAgICAgICAgICAgIDxzcGFuPk5hbWU8c3BhbiBjbGFzcz1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxuICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cIjUwXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQncyB5b3VyIHByb2plY3Q/IChSZXF1aXJlZCwga2VlcCBpdCB1bmRlciA1MCBjaGFyYWN0ZXJzKVwiPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuYFxuXG5mdW5jdGlvbiByZW5kZXIoY29udGVudCwgZm9ybUpzb24sIGZvcm1IYW5kbGVycykge1xuICAgIGxldCBkaWFsb2cgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG4gICAgaWYgKGRpYWxvZyAhPT0gbnVsbCkge1xuICAgICAgICBkaWFsb2cudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZm9ybURhdGEgPSBKU09OLnBhcnNlKGZvcm1Kc29uKTsgLy8gRm9yIGZ1dHVyZSBuZXcgZmVhdHVyZXNcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpYWxvZylcbiAgICBtb2RhbFZpZXcucmVuZGVyKGRpYWxvZywgXCJOZXcgUHJvamVjdFwiLCBmb3JtSGFuZGxlcnMpO1xuXG4gICAgY29uc3QgZm9ybSA9IHBhcnNlSHRtbCh0ZW1wbGF0ZSk7XG4gICAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZm9ybUhhbmRsZXJzLmNsaWNrQ2FuY2VsQnV0dG9uKCk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcInN1Ym1pdFwiLFxuICAgICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb3JtSGFuZGxlcnMuY2xpY2tTdWJtaXRCdXR0b24oZm9ybS5uYW1lLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIClcblxuICAgIFxuXG5cbn1cblxuZXhwb3J0IHtyZW5kZXJ9OyIsImltcG9ydCAqIGFzIG1vZGFsVmlldyBmcm9tIFwiLi9tb2RhbC12aWV3XCI7XG5pbXBvcnQgcGFyc2VIdG1sIGZyb20gXCIuLi90b29scy9wYXJzZS1odG1sXCI7XG5cbmZ1bmN0aW9uIHJlbmRlcihjb250ZW50LCBmb3JtSnNvbiwgZm9ybUhhbmRsZXJzKSB7XG4gICAgbGV0IGRpYWxvZyA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcbiAgICBpZiAoZGlhbG9nICE9PSBudWxsKSB7XG4gICAgICAgIGRpYWxvZy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaWFsb2cpO1xuICAgIH1cbiAgICBjb25zdCBmb3JtRGF0YSA9IEpTT04ucGFyc2UoZm9ybUpzb24pO1xuICAgIG1vZGFsVmlldy5yZW5kZXIoZGlhbG9nLCBcIk5ldyBQcm9qZWN0XCIsIGZvcm1IYW5kbGVycyk7XG5cbiAgICBjb25zdCBmb3JtID0gcGFyc2VIdG1sKGBcbiAgICAgICAgPGZvcm0gbmFtZT1cInByb2plY3RFZGl0XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPk5hbWU8c3BhbiBjbGFzcz1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXG4gICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cIjUwXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0J3MgeW91ciBwcm9qZWN0PyAoUmVxdWlyZWQsIGtlZXAgaXQgdW5kZXIgNTAgY2hhcmFjdGVycylcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIiR7Zm9ybURhdGEucHJvamVjdC5uYW1lfVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Zvcm0+YCk7XG4gICAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZm9ybUhhbmRsZXJzLmNsaWNrQ2FuY2VsQnV0dG9uKCk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcInN1Ym1pdFwiLFxuICAgICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb3JtSGFuZGxlcnMuY2xpY2tTdWJtaXRCdXR0b24oZm9ybURhdGEucHJvamVjdC5pZCwgZm9ybS5uYW1lLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIClcbn1cblxuZXhwb3J0IHsgcmVuZGVyIH07IiwiZnVuY3Rpb24gcmVuZGVyKHBhcmVudCwgcmF0ZSwgc3RlcCA9IDUsIGJsb2NrUmF0aW8gPSAwLjYsIGNvbG9yID0gXCJibGFja1wiKSB7XG4gICAgY29uc3QgcGVyY2VudCA9IE1hdGgucm91bmQocmF0ZSAqIDEwMCk7XG4gICAgY29uc3QgYmxvY2tOID0gTWF0aC5mbG9vcihwZXJjZW50IC8gc3RlcCk7XG4gICAgY29uc3QgYmxvY2tXaWR0aCA9IHN0ZXAgKiBibG9ja1JhdGlvO1xuXG4gICAgLy8gY3JlYXRlRWxlbWVudCBkb2VzIG5vdCB3b3JrIHdpdGggU1ZHIGVsZW1lbnRzLiBpbnN0ZWFkOlxuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuXG4gICAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwLCAwLCAxMDAsIDI1XCIpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGNvbG9yKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzdmcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBibG9ja047IGkrKykge1xuICAgICAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicmVjdFwiKTtcbiAgICAgICAgYmxvY2suc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgYmxvY2tXaWR0aCk7XG4gICAgICAgIGJsb2NrLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCAyNSk7XG4gICAgICAgIGJsb2NrLnNldEF0dHJpYnV0ZShcInhcIiwgaSAqIHN0ZXApO1xuICAgICAgICBibG9jay5zZXRBdHRyaWJ1dGUoXCJ5XCIsIDApO1xuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQoYmxvY2spO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgcmVuZGVyIH1cblxuXG4iLCJpbXBvcnQgKiBhcyBtb2RhbFZpZXcgZnJvbSBcIi4vbW9kYWwtdmlld1wiO1xuaW1wb3J0IHBhcnNlSHRtbCBmcm9tIFwiLi4vdG9vbHMvcGFyc2UtaHRtbFwiO1xuXG5cbmZ1bmN0aW9uIHJlbmRlcihjb250ZW50LCBmb3JtSnNvbiwgZm9ybUhhbmRsZXJzKSB7XG4gICAgbGV0IGRpYWxvZyA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcbiAgICBpZiAoZGlhbG9nICE9PSBudWxsKSB7XG4gICAgICAgIGRpYWxvZy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaWFsb2cpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1EYXRhID0gSlNPTi5wYXJzZShmb3JtSnNvbik7XG4gICAgbW9kYWxWaWV3LnJlbmRlcihkaWFsb2csIFwiUHJvamVjdFwiLCBmb3JtSGFuZGxlcnMpO1xuXG4gICAgZGlhbG9nLmFwcGVuZENoaWxkKHBhcnNlSHRtbChgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0IHNpbmdsZS1kaXNwbGF5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZSByb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+JHtmb3JtRGF0YS5wcm9qZWN0Lm5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdFwiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgYCkpO1xuXG4gICAgZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uY2FuY2VsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGZvcm1IYW5kbGVycy5jbGlja0NhbmNlbEJ1dHRvbigpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmVkaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb3JtSGFuZGxlcnMuY2xpY2tFZGl0QnV0dG9uKGZvcm1EYXRhLnByb2plY3QuaWQpO1xuICAgICAgICB9XG4gICAgKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyIH07IiwiaW1wb3J0ICogYXMgdGFibGVSb3cgZnJvbSBcIi4vdGFibGUtcm93XCI7XG5pbXBvcnQgKiBhcyBwcm9ncmVzc0JhciBmcm9tIFwiLi9wcm9qZWN0LXByb2dyZXNzLWJhci12aWV3XCI7XG5cbmZ1bmN0aW9uIHJlbmRlcih0ciwgcm93SnNvbiwgcm93SGFuZGxlcnMpIHtcbiAgICBjb25zdCByb3cgPSBKU09OLnBhcnNlKHJvd0pzb24pO1xuXG4gICAgY29uc3QgY2VsbHNEYXRhID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0YWc6IFwidGRcIixcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcInNlbGVjdFwiXSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZToge30sXG4gICAgICAgICAgICB0ZXh0OiBudWxsLFxuICAgICAgICAgICAgY29udGVudEh0bWw6IGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInNlbGVjdFwiIHZhbHVlPVwiJHtyb3cuaWR9XCI+YFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0YWc6IFwidGRcIixcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcIm5hbWVcIiwgXCJ0aXRsZVwiXSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogeyBzY29wZTogXCJyb3dcIiB9LFxuICAgICAgICAgICAgdGV4dDogbnVsbCxcbiAgICAgICAgICAgIGNvbnRlbnRIdG1sOiBgPGEgZGF0YS1wcm9qZWN0SWQ9XCIke3Jvdy5pZH1cIj4ke3Jvdy5uYW1lfTwvYT5gXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRhZzogXCJ0ZFwiLFxuICAgICAgICAgICAgY2xhc3NlczogW1widG9kb3NcIixdLFxuICAgICAgICAgICAgYXR0cmlidXRlOiB7fSxcbiAgICAgICAgICAgIHRleHQ6IG51bGwsXG4gICAgICAgICAgICBjb250ZW50SHRtbDogYDxhIGRhdGEtcHJvamVjdElkPVwiJHtyb3cuaWR9XCI+JHtyb3cudG9kb3N9PC9hPmBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGFnOiBcInRkXCIsXG4gICAgICAgICAgICBjbGFzc2VzOiBbXCJub3QtZG9uZVwiLF0sXG4gICAgICAgICAgICBhdHRyaWJ1dGU6IHt9LFxuICAgICAgICAgICAgdGV4dDogbnVsbCxcbiAgICAgICAgICAgIGNvbnRlbnRIdG1sOiBgPGEgZGF0YS1wcm9qZWN0SWQ9XCIke3Jvdy5pZH1cIj4ke3Jvdy5ub3REb25lfTwvYT5gXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRhZzogXCJ0ZFwiLFxuICAgICAgICAgICAgY2xhc3NlczogW1wib3ZlcmR1ZVwiLF0sXG4gICAgICAgICAgICBhdHRyaWJ1dGU6IHt9LFxuICAgICAgICAgICAgdGV4dDogbnVsbCxcbiAgICAgICAgICAgIGNvbnRlbnRIdG1sOiBgPGEgZGF0YS1wcm9qZWN0SWQ9XCIke3Jvdy5pZH1cIj4ke3Jvdy5vdmVyZHVlfTwvYT5gXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRhZzogXCJ0ZFwiLFxuICAgICAgICAgICAgY2xhc3NlczogW1wicHJvZ3Jlc3NcIixdLFxuICAgICAgICAgICAgYXR0cmlidXRlOiB7fSxcbiAgICAgICAgICAgIHRleHQ6IHJvdy5wcm9ncmVzcyxcbiAgICAgICAgICAgIGNvbnRlbnRIdG1sOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0YWc6IFwidGRcIixcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcInByb2dyZXNzLWJhclwiLF0sXG4gICAgICAgICAgICBhdHRyaWJ1dGU6IHt9LFxuICAgICAgICAgICAgdGV4dDogbnVsbCxcbiAgICAgICAgICAgIGNvbnRlbnRIdG1sOiBudWxsXG4gICAgICAgIH0sXG4gICAgXVxuXG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcIi5uYW1lIGFcIixcbiAgICAgICAgICAgIHR5cGU6IFwiY2xpY2tcIixcbiAgICAgICAgICAgIGZ1bmM6ICgpID0+IHJvd0hhbmRsZXJzLmNsaWNrTmFtZUxpbmsocm93LmlkKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiLnRvZG9zIGFcIixcbiAgICAgICAgICAgIHR5cGU6IFwiY2xpY2tcIixcbiAgICAgICAgICAgIGZ1bmM6IChldmVudCkgPT4gcm93SGFuZGxlcnMuY2xpY2tUb2Rvc0xpbmsocm93LmlkKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCIubm90LWRvbmUgYVwiLFxuICAgICAgICAgICAgdHlwZTogXCJjbGlja1wiLFxuICAgICAgICAgICAgZnVuYzogKGV2ZW50KSA9PiByb3dIYW5kbGVycy5jbGlja05vdERvbmVMaW5rKHJvdy5pZClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiLm92ZXJkdWUgYVwiLFxuICAgICAgICAgICAgdHlwZTogXCJjbGlja1wiLFxuICAgICAgICAgICAgZnVuYzogKGV2ZW50KSA9PiByb3dIYW5kbGVycy5jbGlja092ZXJkdWVMaW5rKHJvdy5pZClcbiAgICAgICAgfSxcbiAgICBdO1xuXG4gICAgdGFibGVSb3cucmVuZGVyKHRyLCBKU09OLnN0cmluZ2lmeShjZWxsc0RhdGEpLCBoYW5kbGVycyk7XG5cbiAgICBjb25zdCBwcm9ncmVzc0JhckNlbGwgPSB0ci5xdWVyeVNlbGVjdG9yKFwidGQucHJvZ3Jlc3MtYmFyXCIpO1xuICAgIGlmIChwcm9ncmVzc0JhckNlbGwgIT09IG51bGwpIHtcbiAgICAgICAgcHJvZ3Jlc3NCYXIucmVuZGVyKHByb2dyZXNzQmFyQ2VsbCwgcm93LnByb2dyZXNzUmF0ZSk7XG4gICAgfVxuICAgIHByb2dyZXNzQmFyQ2VsbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICByb3cucHJvZ3Jlc3NSYXRlID09PSAxID8gXCJjb21wbGV0ZVwiIDpcbiAgICAgICAgICAgIHJvdy5wcm9ncmVzc1JhdGUgPj0gMC43NSA/IFwib3Zlcjc1XCIgOlxuICAgICAgICAgICAgICAgIHJvdy5wcm9ncmVzc1JhdGUgPj0gMC41MCA/IFwib3ZlcjUwXCIgOlxuICAgICAgICAgICAgICAgICAgICByb3cucHJvZ3Jlc3NSYXRlID49IDAuMjUgPyBcIm92ZXIyNVwiIDogXCJ1bmRlcjI1XCJcbiAgICApXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSh0ciwgcm93SnNvbikge1xuICAgIGNvbnN0IHJvdyA9IEpTT04ucGFyc2Uocm93SnNvbik7XG4gICAgdHIucXVlcnlTZWxlY3RvcihcIi5uYW1lIGFcIikudGV4dENvbnRlbnQgPSByb3cubmFtZTtcbiAgICB0ci5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zIGFcIikudGV4dENvbnRlbnQgPSByb3cudG9kb3M7XG4gICAgdHIucXVlcnlTZWxlY3RvcihcIi5kb25lIGFcIikudGV4dENvbnRlbnQgPSByb3cuZG9uZTtcbiAgICB0ci5xdWVyeVNlbGVjdG9yKFwiLm92ZXJkdWUgYVwiKS50ZXh0Q29udGVudCA9IHJvdy5vdmVyZHVlO1xuICAgIHRyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NcIikudGV4dENvbnRlbnQgPSByb3cucHJvZ3Jlc3M7XG59XG5cbmV4cG9ydCB7IHJlbmRlciwgdXBkYXRlIH07IiwiaW1wb3J0ICogYXMgdGFibGVSb3cgZnJvbSBcIi4vdGFibGUtcm93XCI7XG5pbXBvcnQgKiBhcyBwcm9qZWN0c1RhYmxlUm93VmlldyBmcm9tIFwiLi9wcm9qZWN0cy10YWJsZS1yb3ctdmlld1wiO1xuaW1wb3J0IHRyYXNoSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3RyYXNoLWNhbi5zdmdcIlxuXG5cbmZ1bmN0aW9uIHJlbmRlcih0YWJsZSwgdGFibGVKc29uLCB0YWJsZUhhbmRsZXJzKSB7XG5cbiAgICBjb25zdCB0YWJsZURhdGEgPSBKU09OLnBhcnNlKHRhYmxlSnNvbik7XG5cbiAgICBjb25zdCBjYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhcHRpb25cIik7XG4gICAgY2FwdGlvbi50ZXh0Q29udGVudCA9IHRhYmxlRGF0YS5jYXB0aW9uO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKGNhcHRpb24pO1xuXG4gICAgY29uc3QgdGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGhlYWQpO1xuXG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgdGhlYWQuYXBwZW5kQ2hpbGQodHIpO1xuXG4gICAgY29uc3QgY2VsbHNEYXRhID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0YWc6IFwidGhcIixcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcInNlbGVjdFwiXSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZToge30sXG4gICAgICAgICAgICB0ZXh0OiBudWxsLFxuICAgICAgICAgICAgY29udGVudEh0bWw6IGA8YnV0dG9uIGNsYXNzPVwibXVsdGktZGVsZXRlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3RyYXNoSWNvbn1cIiBhbHQ9XCJEZWxldGUgaWNvblwiPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPmBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGFnOiBcInRoXCIsXG4gICAgICAgICAgICBjbGFzc2VzOiBbXCJuYW1lXCIsIFwidGl0bGVcIl0sXG4gICAgICAgICAgICBhdHRyaWJ1dGU6IHtzY29wZTogXCJjb2xcIn0sXG4gICAgICAgICAgICB0ZXh0OiBcIk5hbWVcIixcbiAgICAgICAgICAgIGNvbnRlbnRIdG1sOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRhZzogXCJ0aFwiLFxuICAgICAgICAgICAgY2xhc3NlczogW1widG9kb3NcIixdLFxuICAgICAgICAgICAgYXR0cmlidXRlOiB7IHNjb3BlOiBcImNvbFwiIH0sXG4gICAgICAgICAgICB0ZXh0OiBcIlRvZG9zXCIsXG4gICAgICAgICAgICBjb250ZW50SHRtbDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0YWc6IFwidGhcIixcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcIm5vdC1kb25lXCIsXSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogeyBzY29wZTogXCJjb2xcIiB9LFxuICAgICAgICAgICAgdGV4dDogXCJOb3QgWWV0XCIsXG4gICAgICAgICAgICBjb250ZW50SHRtbDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0YWc6IFwidGhcIixcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcIm92ZXJkdWVcIixdLFxuICAgICAgICAgICAgYXR0cmlidXRlOiB7IHNjb3BlOiBcImNvbFwiIH0sXG4gICAgICAgICAgICB0ZXh0OiBcIk92ZXJkdWVcIixcbiAgICAgICAgICAgIGNvbnRlbnRIdG1sOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRhZzogXCJ0aFwiLFxuICAgICAgICAgICAgY2xhc3NlczogW1wicHJvZ3Jlc3NcIixdLFxuICAgICAgICAgICAgYXR0cmlidXRlOiB7IHNjb3BlOiBcImNvbFwiLCBjb2xzcGFuOiAyfSxcbiAgICAgICAgICAgIHRleHQ6IFwiUHJvZ3Jlc3NcIixcbiAgICAgICAgICAgIGNvbnRlbnRIdG1sOiBudWxsXG4gICAgICAgIH0sXG4gICAgXVxuXG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXTtcblxuICAgIHRhYmxlUm93LnJlbmRlcih0ciwgSlNPTi5zdHJpbmdpZnkoY2VsbHNEYXRhKSwgaGFuZGxlcnMpO1xuXG4gICAgY29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xuXG4gICAgZm9yIChsZXQgcm93IG9mIHRhYmxlRGF0YS5yb3dzKSB7XG4gICAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICB0ci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIHJvdy5pZCk7XG4gICAgICAgIHRib2R5LmFwcGVuZENoaWxkKHRyKTtcbiAgICAgICAgcHJvamVjdHNUYWJsZVJvd1ZpZXcucmVuZGVyKHRyLCBKU09OLnN0cmluZ2lmeShyb3cpLCB0YWJsZUhhbmRsZXJzKTtcbiAgICB9XG5cbiAgICBjb25zdCBtdWx0aURlbGV0ZUJ1dHRvbiA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24ubXVsdGktZGVsZXRlXCIpXG4gICAgbXVsdGlEZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SWRzID0gW107XG4gICAgICAgICAgICB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT0nc2VsZWN0J106Y2hlY2tlZFwiKS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgIGlucHV0ID0+IHByb2plY3RJZHMucHVzaChpbnB1dC52YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0YWJsZUhhbmRsZXJzLmNsaWNrTXVsdGlEZWxldGVCdXR0b24ocHJvamVjdElkcyk7XG4gICAgICAgIH1cbiAgICApO1xuICAgIG11bHRpRGVsZXRlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPSdzZWxlY3QnXVwiKS5mb3JFYWNoKFxuICAgICAgICBzZWxlY3QgPT4gc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNoYW5nZVwiLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT0nc2VsZWN0J106Y2hlY2tlZFwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG11bHRpRGVsZXRlQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlEZWxldGVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIClcblxufVxuXG5mdW5jdGlvbiB1cGRhdGUoKXtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUm93QnlJZCh0YWJsZSwgcm93SWQpIHtcbiAgICBjb25zdCB0ciA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoYHRyW2RhdGEtaWQ9XCIke3Jvd0lkfVwiXWApO1xuICAgIGlmICh0cikge1xuICAgICAgICB0ci5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IHJlbmRlciwgdXBkYXRlLCBkZWxldGVSb3dCeUlkIH07IiwiaW1wb3J0IHBhcnNlSHRtbCBmcm9tIFwiLi4vdG9vbHMvcGFyc2UtaHRtbFwiO1xuaW1wb3J0ICogYXMgcHJvamVjdHNUYWJsZVZpZXcgZnJvbSBcIi4vcHJvamVjdHMtdGFibGUtdmlld1wiO1xuXG5cbmZ1bmN0aW9uIHJlbmRlcihjb250ZW50LCB0YWJsZUpzb24sIHRhYmxlSGFuZGxlcnMpIHtcbiAgICBjb25zdCB0YWJsZURhdGEgPSBKU09OLnBhcnNlKHRhYmxlSnNvbik7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgaWYgKHRhYmxlRGF0YS5yb3dzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyc2VIdG1sKGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbXB0eVwiPlxuICAgICAgICAgICAgICAgIDxoMT4ke3RhYmxlRGF0YS5jYXB0aW9ufTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIE5vIHByb2plY3RzIGhlcmUuIFRpbWUgdG8gZHJlYW0gYmlnIChvciB0YWtlIGEgbmFwKSFcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICAgICAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFibGUpO1xuICAgICAgICBwcm9qZWN0c1RhYmxlVmlldy5yZW5kZXIodGFibGUsIEpTT04uc3RyaW5naWZ5KHRhYmxlRGF0YSksIHRhYmxlSGFuZGxlcnMpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IHBhcnNlSHRtbChcbiAgICAgICAgJzxidXR0b24gY2xhc3M9XCJhZGQgcHJvamVjdFwiPis8L2J1dHRvbj4nXG4gICAgKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG5cbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICB0YWJsZUhhbmRsZXJzLmNsaWNrQWRkQnV0dG9uXG4gICAgKVxufVxuXG5mdW5jdGlvbiB1cGRhdGUoY29udGVudCwgdGFibGVKc29uKSB7XG4gICAgY29uc3QgdGFibGUgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZS5wcm9qZWN0c1wiKTtcbiAgICBwcm9qZWN0c1RhYmxlVmlldy51cGRhdGUodGFibGUsIHRhYmxlSnNvbik7XG59XG5cbmV4cG9ydCB7cmVuZGVyLCB1cGRhdGV9OyIsImltcG9ydCBwYXJzZUh0bWwgZnJvbSBcIi4uL3Rvb2xzL3BhcnNlLWh0bWxcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcih0ciwgY2VsbHNKc29uLCBoYW5kbGVycyl7XG4gICAgY29uc3QgY2VsbHNEYXRhID0gSlNPTi5wYXJzZShjZWxsc0pzb24pO1xuICAgIGZvciAobGV0IGRhdGEgb2YgY2VsbHNEYXRhKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGRhdGEudGFnKTtcbiAgICAgICAgZGF0YS5jbGFzc2VzLmZvckVhY2goXG4gICAgICAgICAgICB2YWwgPT4gY2VsbC5jbGFzc0xpc3QuYWRkKHZhbClcbiAgICAgICAgKVxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YS5hdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKGtleSwgZGF0YS5hdHRyaWJ1dGVba2V5XSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS50ZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gZGF0YS50ZXh0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjaGlsZCA9IHBhcnNlSHRtbChkYXRhLmNvbnRlbnRIdG1sKTtcbiAgICAgICAgaWYgKGNoaWxkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGhhbmRsZXIgb2YgaGFuZGxlcnMpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0cyA9IHRyLnF1ZXJ5U2VsZWN0b3JBbGwoaGFuZGxlci5zZWxlY3Rvcik7XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaChcbiAgICAgICAgICAgIHRhcmdldCA9PiB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBoYW5kbGVyLnR5cGUsXG4gICAgICAgICAgICAgICAgaGFuZGxlci5mdW5jXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgbW9kYWxWaWV3IGZyb20gXCIuL21vZGFsLXZpZXdcIjtcbmltcG9ydCAqIGFzIHRvZG9Gb3JtVmlldyBmcm9tIFwiLi90b2RvLWZvcm0tdmlld1wiO1xuXG5mdW5jdGlvbiByZW5kZXIoY29udGVudCwgZm9ybUpzb24sIGZvcm1IYW5kbGVycykge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaWFsb2cpXG4gICAgbW9kYWxWaWV3LnJlbmRlcihkaWFsb2csIFwiTmV3IFRvRG8gVGFza1wiLCBmb3JtSGFuZGxlcnMpO1xuICAgIHRvZG9Gb3JtVmlldy5yZW5kZXIoZGlhbG9nLCBmb3JtSnNvbiwgZm9ybUhhbmRsZXJzKTtcbiAgICBkaWFsb2cucXVlcnlTZWxlY3RvcihcImZvcm1cIikuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG9BZGRcIik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQudG9kb0FkZDtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwic3VibWl0XCIsXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb3JtSGFuZGxlcnMuY2xpY2tTdWJtaXRCdXR0b24oXG4gICAgICAgICAgICAgICAgZm9ybS50aXRsZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBmb3JtLmR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgICAgICAgZm9ybS5wcmlvcml0eS52YWx1ZSxcbiAgICAgICAgICAgICAgICBmb3JtLmRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgIGZvcm0ucHJvamVjdC52YWx1ZSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICApXG5cbiAgICAvLyBQcmV2ZW50IHN1Ym1pdCBieSBlbnRlciBrZXkgZm9yIGFjY2lkZW50YWwgc3VibWl0XG4gICAgLy8gSXMgdGhlcmUgYW55IGVsZWdhbnQgd2F5IHRvIGRvIHRoaXM/XG4gICAgY29uc3QgaW5wdXRzID0gW1xuICAgICAgICBmb3JtLnRpdGxlLCBmb3JtLmR1ZURhdGUsIGZvcm0udXJnZW50LCBmb3JtLmltcG9ydGFudCwgZm9ybS5kZXNjcmlwdGlvblxuICAgIF07XG5cbiAgICBpbnB1dHMuZm9yRWFjaChcbiAgICAgICAgKGVsZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbSAhPT0gZm9ybS5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgXCJrZXlkb3duXCIsXG4gICAgICAgICAgICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0c1tpbmRleCArIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKVxufVxuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCAqIGFzIG1vZGFsVmlldyBmcm9tIFwiLi9tb2RhbC12aWV3XCI7XG5pbXBvcnQgKiBhcyB0b2RvRm9ybVZpZXcgZnJvbSBcIi4vdG9kby1mb3JtLXZpZXdcIjtcbmltcG9ydCAqIGFzIHN0YXR1c0lucHV0VmlldyBmcm9tIFwiLi90b2RvLXN0YXR1cy1pbnB1dC12aWV3XCI7XG5pbXBvcnQgcGFyc2VIdG1sIGZyb20gXCIuLi90b29scy9wYXJzZS1odG1sXCI7XG5pbXBvcnQgeyBpc0JlZm9yZSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5mdW5jdGlvbiByZW5kZXIoY29udGVudCwgZm9ybUpzb24sIGZvcm1IYW5kbGVycykge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gSlNPTi5wYXJzZShmb3JtSnNvbik7XG4gICAgbGV0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG4gICAgaWYgKGRpYWxvZyA9PT0gbnVsbCkge1xuICAgICAgICBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpYWxvZylcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaWFsb2cudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH1cbiAgICBtb2RhbFZpZXcucmVuZGVyKGRpYWxvZywgXCJFZGl0IFRvRG8gVGFza1wiLCBmb3JtSGFuZGxlcnMpO1xuICAgIHRvZG9Gb3JtVmlldy5yZW5kZXIoZGlhbG9nLCBmb3JtSnNvbiwgZm9ybUhhbmRsZXJzKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkaWFsb2cucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9kb0VkaXRcIik7XG5cbiAgICAvLyBBZGQgU3RhdHVzIChkb25lKVxuICAgIGNvbnN0IHN0YXR1c1dyYXBwZXIgPSBwYXJzZUh0bWwoYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPlN0YXR1czwvZGl2PlxuICAgICAgICA8L2Rpdj4+YFxuICAgICk7XG4gICAgY29uc3Qgc3RhdHVzSW5wdXRXcmFwcGVyPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN0YXR1c1dyYXBwZXIuYXBwZW5kQ2hpbGQoc3RhdHVzSW5wdXRXcmFwcGVyKTtcbiAgICBzdGF0dXNJbnB1dFZpZXcucmVuZGVyKHN0YXR1c0lucHV0V3JhcHBlciwgSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEudG9kbyksICgpPT57fSk7XG4gICAgZm9ybS5pbnNlcnRCZWZvcmUoc3RhdHVzV3JhcHBlciwgZm9ybS5kdWVEYXRlLnBhcmVudE5vZGUpO1xuXG4gICAgLy8gUG9wdWxhdGUgb3RoZXIgZGF0YVxuICAgIGZvcm0udGl0bGUudmFsdWUgPSBmb3JtRGF0YS50b2RvLnRpdGxlO1xuICAgIGZvcm0uZHVlRGF0ZS52YWx1ZSA9IGZvcm1EYXRhLnRvZG8uZHVlRGF0ZTtcbiAgICBmb3JtLnByaW9yaXR5LnZhbHVlID0gZm9ybURhdGEudG9kby5wcmlvcml0eTtcbiAgICBmb3JtLmRlc2NyaXB0aW9uLnZhbHVlID0gZm9ybURhdGEudG9kby5kZXNjcmlwdGlvbjtcbiAgICBmb3JtLnByb2plY3QudmFsdWUgPSBmb3JtRGF0YS50b2RvLnByb2plY3RJZDtcbiAgICBzZXRQcmlvcml0eUNoZWNrYm94KGZvcm0sIGZvcm0ucHJpb3JpdHkudmFsdWUpO1xuXG4gICAgLy8gQWxlcnQgZm9yIG92ZXJkdWUgZGF0ZVxuICAgIGlmIChmb3JtRGF0YS50b2RvLmR1ZURhdGUgIT09IFwiXCIpIHtcbiAgICAgICAgY29uc3QgZHVlRGF0ZU9iaiA9IG5ldyBEYXRlKGZvcm1EYXRhLnRvZG8uZHVlRGF0ZSk7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgaWYgKGlzQmVmb3JlKGR1ZURhdGVPYmosIHRvZGF5KSl7XG4gICAgICAgICAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgYWxlcnQuY2xhc3NMaXN0LmFkZChcImFsZXJ0XCIpO1xuICAgICAgICAgICAgYWxlcnQudGV4dENvbnRlbnQgPSBcIlRoaXMgdGFzayBpcyBvdmVyZHVlLiBTZXQgYSBuZXcgZGF0ZS5cIjtcbiAgICAgICAgICAgIGZvcm0uZHVlRGF0ZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGFsZXJ0KTsgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcInN1Ym1pdFwiLFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZm9ybUhhbmRsZXJzLmNsaWNrU3VibWl0QnV0dG9uKFxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLnRvZG8uaWQsXG4gICAgICAgICAgICAgICAgZm9ybS50aXRsZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBmb3JtLmR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgICAgICAgZm9ybS5wcmlvcml0eS52YWx1ZSxcbiAgICAgICAgICAgICAgICBmb3JtLmRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgIGZvcm0ucHJvamVjdC52YWx1ZSxcbiAgICAgICAgICAgICAgICBmb3JtLmRvbmUuY2hlY2tlZCxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICApXG5cbiAgICAvLyBQcmV2ZW50IHN1Ym1pdCBieSBlbnRlciBrZXkgZm9yIGFjY2lkZW50YWwgc3VibWl0XG4gICAgLy8gSXMgdGhlcmUgYW55IGVsZWdhbnQgd2F5IHRvIGRvIHRoaXM/XG4gICAgY29uc3QgaW5wdXRzID0gW1xuICAgICAgICBmb3JtLnRpdGxlLCBmb3JtLmR1ZURhdGUsIGZvcm0uZG9uZSwgZm9ybS51cmdlbnQsIGZvcm0uaW1wb3J0YW50LCBmb3JtLmRlc2NyaXB0aW9uXG4gICAgXTtcblxuICAgIGlucHV0cy5mb3JFYWNoKFxuICAgICAgICAoZWxlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtICE9PSBmb3JtLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICAgICBcImtleWRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRzW2luZGV4ICsgMV0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApXG59XG5cbmZ1bmN0aW9uIHNldFByaW9yaXR5Q2hlY2tib3goZm9ybSwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBtYXRyaXggPSB7XG4gICAgICAgIGRvOiB7XG4gICAgICAgICAgICB1cmdlbnQ6IHRydWUsXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgc2NoZWR1bGU6IHtcbiAgICAgICAgICAgIHVyZ2VudDogZmFsc2UsXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZGVsZWdhdGU6IHtcbiAgICAgICAgICAgIHVyZ2VudDogdHJ1ZSxcbiAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgZWxpbWluYXRlOiB7XG4gICAgICAgICAgICB1cmdlbnQ6IGZhbHNlLFxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZVxuICAgICAgICB9LFxuICAgIH07XG4gICAgZm9ybS51cmdlbnQuY2hlY2tlZCA9IG1hdHJpeFtwcmlvcml0eV0udXJnZW50O1xuICAgIGZvcm0uaW1wb3J0YW50LmNoZWNrZWQgPSBtYXRyaXhbcHJpb3JpdHldLmltcG9ydGFudDtcblxuICAgIGNvbnN0IHByaW9yaXR5RGlzcGx5ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5LWRpc3BsYXlcIik7XG4gICAgcHJpb3JpdHlEaXNwbHkuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBwcmlvcml0eSk7XG4gICAgcHJpb3JpdHlEaXNwbHkudGV4dENvbnRlbnQgPSBwcmlvcml0eSA7XG59XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHBhcnNlSHRtbCBmcm9tIFwiLi4vdG9vbHMvcGFyc2UtaHRtbFwiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgQ29udmVydEljb24gZnJvbSBcIi4uL2ltYWdlcy90cmlhbmdsZS5zdmdcIjtcblxuY29uc3QgdGVtcGxhdGUgPSBgXG4gICAgPGZvcm0+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPjxzcGFuPlRpdGxlPHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+PC9zcGFuPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBpZD1cInRpdGxlXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBtYXhsZW5ndGg9XCI1MFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQncyB5b3VyIHRhc2s/IChSZXF1aXJlZCwga2VlcCBpdCB1bmRlciA1MCBjaGFyYWN0ZXJzKVwiPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZHVlLWRhdGVcIj5EdWUgRGF0ZVxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiIGlkPVwiZHVlLWRhdGVcIiBcbiAgICAgICAgICAgIG1pbj1cIiR7Zm9ybWF0KG5ldyBEYXRlKCksIFwieXl5eS1NTS1kZFwiKX1cIj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPlByaW9yaXR5PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9tcHRcIj5UaGlzIHRhc2sgaXMuLi48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cmdlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidXJnZW50XCIgaWQ9XCJ1cmdlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFVyZ2VudFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW1wb3J0YW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImltcG9ydGFudFwiIGlkPVwiaW1wb3J0YW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBJbXBvcnRhbnRcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtDb252ZXJ0SWNvbn1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktZGlzcGxheVwiIGRhdGEtdmFsdWU9XCJlbGltaW5hdGVcIj5lbGltaW5hdGU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVGltZV9tYW5hZ2VtZW50I1RoZV9FaXNlbmhvd2VyX01ldGhvZFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgV2hhdCBkb2VzIHRoaXMgbWVhbj9cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb3JlXCI+TGVhcm4gbW9yZSBhYm91dCBFaXNlbmhvd2VyIE1hdHJpeCE8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJwcmlvcml0eVwiIHZhbHVlPVwiZWxpbWluYXRlXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgcm93cz1cIjNcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgZm9yPVwicHJvamVjdFwiPlByb2plY3RcbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInByb2plY3RcIiBpZD1cInByb2plY3RcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS0tU2VsZWN0LS0tPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbmA7XG5cbmZ1bmN0aW9uIHJlbmRlcihwYXJlbnQsIGZvcm1Kc29uLCBmb3JtSGFuZGxlcnMpIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IEpTT04ucGFyc2UoZm9ybUpzb24pO1xuXG4gICAgY29uc3QgZm9ybSA9IHBhcnNlSHRtbCh0ZW1wbGF0ZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGNvbnN0IHNlbGVjdCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKTtcbiAgICBmb3JtRGF0YS5wcm9qZWN0cy5mb3JFYWNoKFxuICAgICAgICBwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0LmlkO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cbiAgICApXG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb3JtSGFuZGxlcnMuY2xpY2tDYW5jZWxCdXR0b24oKTtcbiAgICAgICAgfVxuICAgICk7XG5cblxuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdXJnZW50LCAjaW1wb3J0YW50XCIpO1xuICAgIGNoZWNrYm94ZXMuZm9yRWFjaChcbiAgICAgICAgYm94ID0+IGJveC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgLy8gU29tZWhvdyBcImNsaWNrXCIgZXZlbnQgZmlyZXMgd2hlbiB1c2VyIGludGVyYWN0cyB3aXRoIG90aGVyIGlucHV0c1xuICAgICAgICAgICAgLy8gVXNlIFwiY2hhbmdlXCIgaW5zdGVhZFxuICAgICAgICAgICAgXCJjaGFuZ2VcIiwgdXBkYXRlUHJpb3JpdHlcbiAgICAgICAgKVxuICAgIClcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJpb3JpdHkoKSB7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xuICAgIGNvbnN0IHByaW9yaXR5RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHktZGlzcGxheVwiKTtcbiAgICBjb25zdCB1cmdlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VyZ2VudFwiKS5jaGVja2VkO1xuICAgIGNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1wb3J0YW50XCIpLmNoZWNrZWQ7XG4gICAgbGV0IGxldmVsO1xuICAgIGlmICh1cmdlbnQgJiYgaW1wb3J0YW50KSB7XG4gICAgICAgIGxldmVsID0gXCJkb1wiO1xuICAgIH0gZWxzZSBpZiAoIXVyZ2VudCAmJiBpbXBvcnRhbnQpIHtcbiAgICAgICAgbGV2ZWwgPSBcInNjaGVkdWxlXCJcbiAgICB9IGVsc2UgaWYgKHVyZ2VudCAmJiAhaW1wb3J0YW50KSB7XG4gICAgICAgIGxldmVsID0gXCJkZWxlZ2F0ZVwiXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV2ZWwgPSBcImVsaW1pbmF0ZVwiXG4gICAgfVxuICAgIHByaW9yaXR5LnZhbHVlID0gbGV2ZWw7XG4gICAgcHJpb3JpdHlEaXNwbGF5LnRleHRDb250ZW50ID0gbGV2ZWw7XG4gICAgcHJpb3JpdHlEaXNwbGF5LnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgbGV2ZWwpO1xufVxuXG5cbmV4cG9ydCB7cmVuZGVyfTsiLCJpbXBvcnQgcGFyc2VIdG1sIGZyb20gXCIuLi90b29scy9wYXJzZS1odG1sXCI7XG5cbmZ1bmN0aW9uIHJlbmRlcihidXR0b24sIGJ1dHRvbkpzb24sIGhhbmRsZXIpe1xuICAgIGNvbnN0IGJ1dHRvbkRhdGEgPSBKU09OLnBhcnNlKGJ1dHRvbkpzb24pO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlXCIpO1xuICAgIGJ1dHRvbi52YWx1ZSA9IGJ1dHRvbkRhdGEuZG9uZSA/IFwib25cIiA6IFwib2ZmXCI7XG4gICAgYnV0dG9uLmFwcGVuZChwYXJzZUh0bWwoYDxzcGFuPiR7YnV0dG9uRGF0YS5kb25lID8gXCJEb25lXCIgOiBcIk5vdCBZZXRcIn08L3NwYW4+YCkpO1xuICAgIGJ1dHRvbi5hcHBlbmQocGFyc2VIdG1sKGBcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCwgMCwgMTAsIDEwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCIjZmFmYWZhXCI+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNVwiIGN5PVwiNVwiIHI9XCI0XCIvPlxuICAgICAgICA8L3N2Zz5cbiAgICBgKSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaGFuZGxlcihidXR0b24sIGJ1dHRvbkRhdGEuaWQpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZShidXR0b24sIGRvbmUpe1xuICAgIGJ1dHRvbi52YWx1ZSA9IGRvbmUgPyBcIm9uXCIgOiBcIm9mZlwiO1xuICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS50ZXh0Q29udGVudCA9IGRvbmUgPyBcIkRvbmVcIiA6IFwiTm90IFlldFwiO1xufVxuXG5mdW5jdGlvbiB0b2dnbGUoYnV0dG9uKXtcbiAgICBpZiAoYnV0dG9uLnZhbHVlID09PSBcIm9uXCIpIHtcbiAgICAgICAgdXBkYXRlKGJ1dHRvbiwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZShidXR0b24sIHRydWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtyZW5kZXIsIHVwZGF0ZSwgdG9nZ2xlfSIsImltcG9ydCBwYXJzZUh0bWwgZnJvbSBcIi4uL3Rvb2xzL3BhcnNlLWh0bWxcIjtcblxuZnVuY3Rpb24gcmVuZGVyKHdyYXBwZXIsIGpzb24sIGNoYW5nZUhhbmRsZXIpIHtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tbGlrZS1jaGVja2JveC13cmFwcGVyXCIpO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb24pO1xuXG4gICAgLy8gVW5pcXVlIElEIGlzIHJlcXVpcmVkIGZvciB3aGVuIG1vZGFsIHNob3dzIG92ZXIgdG9kb3Mgdmlld1xuICAgIGNvbnN0IGRvbmVJZCA9IGBkb25lXyR7Y3J5cHRvLnJhbmRvbVVVSUQoKX1gO1xuICAgIGNvbnN0IGxhYmVsID0gcGFyc2VIdG1sKGBcbiAgICAgICAgPGxhYmVsIGZvcj1cIiR7ZG9uZUlkfVwiPjwvbGFiZWw+XG4gICAgYCk7XG4gICAgY29uc3Qgc3BhbiA9IHBhcnNlSHRtbChgXG4gICAgICAgIDxzcGFuPiR7ZGF0YS5kb25lID8gXCJEb25lXCIgOiBcIk5vdCBZZXRcIn08L3NwYW4+XG4gICAgYCk7XG4gICAgY29uc3QgY2hlY2tib3ggPSBwYXJzZUh0bWwoYFxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImRvbmVcIiBpZD1cIiR7ZG9uZUlkfVwiPlxuICAgIGApO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBkYXRhLmRvbmU7XG5cbiAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNoYW5nZVwiLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVMYWJlbCgpO1xuICAgICAgICAgICAgY2hhbmdlSGFuZGxlcihkYXRhLmlkKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYWJlbCgpIHtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGNoZWNrYm94LmNoZWNrZWQgPyBcIkRvbmVcIiA6IFwiTm90IFlldFwiO1xuICAgIH1cbn1cblxuXG5leHBvcnQge3JlbmRlcn1cbiIsImltcG9ydCAqIGFzIG1vZGFsVmlldyBmcm9tIFwiLi9tb2RhbC12aWV3XCI7XG5pbXBvcnQgKiBhcyBzdGF0dXNJbnB1dFZpZXcgZnJvbSBcIi4vdG9kby1zdGF0dXMtaW5wdXQtdmlld1wiO1xuaW1wb3J0IHBhcnNlSHRtbCBmcm9tIFwiLi4vdG9vbHMvcGFyc2UtaHRtbFwiO1xuXG5mdW5jdGlvbiByZW5kZXIoY29udGVudCwgZm9ybUpzb24sIGZvcm1IYW5kbGVycykge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gSlNPTi5wYXJzZShmb3JtSnNvbik7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpYWxvZylcbiAgICBtb2RhbFZpZXcucmVuZGVyKGRpYWxvZywgXCJUb0RvIFRhc2tcIiwgZm9ybUhhbmRsZXJzKTtcbiAgICBkaWFsb2cuYXBwZW5kQ2hpbGQocGFyc2VIdG1sKGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8gc2luZ2xlLWRpc3BsYXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZSByb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj5UaXRsZTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+JHtmb3JtRGF0YS50b2RvLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzIHJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPlN0YXR1czwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkdWUtZGF0ZSByb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj5EdWUgRGF0ZTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+JHtmb3JtRGF0YS50b2RvLmR1ZURhdGV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eSByb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj5Qcmlvcml0eTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eS1kaXNwbGF5XCIgZGF0YS12YWx1ZT1cIiR7Zm9ybURhdGEudG9kby5wcmlvcml0eX1cIj4ke2Zvcm1EYXRhLnRvZG8ucHJpb3JpdHl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9UaW1lX21hbmFnZW1lbnQjVGhlX0Vpc2VuaG93ZXJfTWV0aG9kXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgV2hhdCBkb2VzIHRoaXMgbWVhbj9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9yZVwiPkxlYXJuIG1vcmUgYWJvdXQgRWlzZW5ob3dlciBNYXRyaXghPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb24gcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+RGVzY3JpcHRpb248L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPiR7Zm9ybURhdGEudG9kby5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3Qgcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+UHJvamVjdDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+JHtmb3JtRGF0YS50b2RvLnByb2plY3ROYW1lfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXRcIj5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIGApKTtcblxuXG4gICAgLy8gQWRkIHN0YXR1cyBjb21wb25lbnRcbiAgICBjb25zdCBzdGF0dXNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGF0dXNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJzdGF0dXMtaW5wdXQtd3JhcHBlclwiKTtcbiAgICBzdGF0dXNJbnB1dFZpZXcucmVuZGVyKHN0YXR1c1dyYXBwZXIsIEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhLnRvZG8pLCAoKSA9PiB7IH0pO1xuICAgIHN0YXR1c1dyYXBwZXIucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBkaWFsb2cucXVlcnlTZWxlY3RvcihcIi5zdGF0dXM+LmRhdGFcIikuYXBwZW5kQ2hpbGQoc3RhdHVzV3JhcHBlcik7XG5cbiAgICBkaWFsb2cucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5lZGl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZm9ybUhhbmRsZXJzLmNsaWNrRWRpdEJ1dHRvbihmb3JtRGF0YS50b2RvLmlkKTtcbiAgICAgICAgfVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIHNldFByaW9yaXR5Q2hlY2tib3goZm9ybSwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBtYXRyaXggPSB7XG4gICAgICAgIGRvOiB7XG4gICAgICAgICAgICB1cmdlbnQ6IHRydWUsXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgc2NoZWR1bGU6IHtcbiAgICAgICAgICAgIHVyZ2VudDogZmFsc2UsXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZGVsZWdhdGU6IHtcbiAgICAgICAgICAgIHVyZ2VudDogdHJ1ZSxcbiAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgZWxpbWluYXRlOiB7XG4gICAgICAgICAgICB1cmdlbnQ6IGZhbHNlLFxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZVxuICAgICAgICB9LFxuICAgIH07XG4gICAgZm9ybS51cmdlbnQuY2hlY2tlZCA9IG1hdHJpeFtwcmlvcml0eV0udXJnZW50O1xuICAgIGZvcm0uaW1wb3J0YW50LmNoZWNrZWQgPSBtYXRyaXhbcHJpb3JpdHldLmltcG9ydGFudDtcblxuICAgIGNvbnN0IHByaW9yaXR5RGlzcGx5ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5LWRpc3BsYXlcIik7XG4gICAgcHJpb3JpdHlEaXNwbHkuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBwcmlvcml0eSk7XG4gICAgcHJpb3JpdHlEaXNwbHkudGV4dENvbnRlbnQgPSBwcmlvcml0eTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQgcGFyc2VIdG1sIGZyb20gXCIuLi90b29scy9wYXJzZS1odG1sLmpzXCI7XG5pbXBvcnQgKiBhcyBzdGF0dXNCdXR0b24gZnJvbSBcIi4vdG9kby1zdGF0dXMtYnV0dG9uLXZpZXcuanNcIjtcbmltcG9ydCAqIGFzIHN0YXR1c0lucHV0IGZyb20gXCIuL3RvZG8tc3RhdHVzLWlucHV0LXZpZXcuanNcIjtcblxubGV0IGhhbmRsZXJzO1xuXG5mdW5jdGlvbiByZW5kZXIodHIsIHJvd0pzb24sIHJvd0hhbmRsZXJzKXtcbiAgICBoYW5kbGVycyA9IHJvd0hhbmRsZXJzO1xuXG4gICAgY29uc3Qgcm93ID0gSlNPTi5wYXJzZShyb3dKc29uKTtcbiAgICB0ci5jbGFzc0xpc3QuYWRkKHJvdy5wcmlvcml0eSk7XG5cbiAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RcIik7XG4gICAgY2VsbC5hcHBlbmRDaGlsZChwYXJzZUh0bWwoYFxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInNlbGVjdFwiIHZhbHVlPVwiJHtyb3cuaWR9XCI+PC9pbnB1dD5cbiAgICAgICAgYCkpO1xuICAgIHRyLmFwcGVuZENoaWxkKGNlbGwpO1xuXG4gICAgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICBjZWxsLnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93XCIpO1xuICAgIGNlbGwuYXBwZW5kQ2hpbGQocGFyc2VIdG1sKGBcbiAgICAgICAgPGE+JHtyb3cudGl0bGV9PC9hPlxuICAgICAgICBgKSk7XG4gICAgdHIuYXBwZW5kQ2hpbGQoY2VsbCk7XG5cbiAgICBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpO1xuICAgIGNlbGwudGV4dENvbnRlbnQgPSByb3cuZHVlRGF0ZTtcbiAgICB0ci5hcHBlbmRDaGlsZChjZWxsKTtcblxuICAgIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG4gICAgY2VsbC50ZXh0Q29udGVudCA9IHJvdy5wcmlvcml0eTtcbiAgICB0ci5hcHBlbmRDaGlsZChjZWxsKTtcblxuICAgIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic3RhdHVzXCIpOyAgICBcbiAgICBjb25zdCBzdGF0dXNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGF0dXNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJzdGF0dXMtaW5wdXQtd3JhcHBlclwiKTtcbiAgICBzdGF0dXNJbnB1dC5yZW5kZXIoXG4gICAgICAgIHN0YXR1c1dyYXBwZXIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgaWQ6IHJvdy5pZCwgZG9uZTogcm93LmRvbmUgfSksIFxuICAgICAgICBoYW5kbGVycy5jbGlja1N0YXR1c0J1dHRvblxuICAgIClcbiAgICBjZWxsLmFwcGVuZENoaWxkKHN0YXR1c1dyYXBwZXIpO1xuICAgIHRyLmFwcGVuZENoaWxkKGNlbGwpO1xuXG5cbiAgICAvLyBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIC8vIGNlbGwuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAvLyBzdGF0dXNCdXR0b24ucmVuZGVyKFxuICAgIC8vICAgICBidXR0b24sIFxuICAgIC8vICAgICBKU09OLnN0cmluZ2lmeSh7aWQ6IHJvdy5pZCwgZG9uZTogcm93LmRvbmV9KSwgXG4gICAgLy8gICAgIGhhbmRsZXJzLmNsaWNrU3RhdHVzQnV0dG9uXG4gICAgLy8gKTtcbiAgICAvLyB0ci5hcHBlbmRDaGlsZChjZWxsKTtcblxuICAgIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBjZWxsLmFwcGVuZENoaWxkKHBhcnNlSHRtbChgXG4gICAgICAgIDxhIGRhdGEtcHJvamVjdElkPVwiJHtyb3cucHJvamVjdElkfVwiPiR7cm93LnByb2plY3R9PC9hPlxuICAgICAgICBgKSk7XG4gICAgdHIuYXBwZW5kQ2hpbGQoY2VsbCk7XG5cbiAgICB0ci5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlIGFcIikuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICBlID0+IGhhbmRsZXJzLmNsaWNrVGl0bGVMaW5rKHJvdy5pZClcbiAgICApO1xuXG4gICAgdHIucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0IGFcIikuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVycy5jbGlja1Byb2plY3RMaW5rKHJvdy5wcm9qZWN0SWQpO1xuICAgICAgICB9XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKHRyLCByb3dKc29uKXtcbiAgICBjb25zdCByb3dEYXRhID0gSlNPTi5wYXJzZShyb3dKc29uKTtcbiAgICBzZXRSb3dQcmlvcml0eSh0ciwgcm93RGF0YS5wcmlvcml0eSk7XG4gICAgdHIucXVlcnlTZWxlY3RvcihcIi50aXRsZSBhXCIpLnRleHRDb250ZW50ID0gcm93RGF0YS50aXRsZTtcbiAgICB0ci5xdWVyeVNlbGVjdG9yKFwiLmR1ZS1kYXRlXCIpLnRleHRDb250ZW50ID0gcm93RGF0YS5kdWVEYXRlO1xuICAgIHRyLnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIikudGV4dENvbnRlbnQgPSByb3dEYXRhLnByaW9yaXR5O1xuXG4gICAgY29uc3QgYnV0dG9uID0gdHIucXVlcnlTZWxlY3RvcihcIi5zdGF0dXMgYnV0dG9uXCIpO1xuICAgIHN0YXR1c0J1dHRvbi50b2dnbGUoYnV0dG9uKTtcblxuICAgIHRyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdCBhXCIpLnRleHRDb250ZW50ID0gcm93RGF0YS5wcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBzZXRSb3dQcmlvcml0eSh0ciwgcHJpb3JpdHkpe1xuICAgIHRyLmNsYXNzTGlzdC5yZW1vdmUoXCJkb1wiKTtcbiAgICB0ci5jbGFzc0xpc3QucmVtb3ZlKFwic2NoZWR1bGVcIik7XG4gICAgdHIuY2xhc3NMaXN0LnJlbW92ZShcImRlbGVnYXRlXCIpO1xuICAgIHRyLmNsYXNzTGlzdC5yZW1vdmUoXCJlbGltaW5hdGVcIik7XG4gICAgdHIuY2xhc3NMaXN0LmFkZChwcmlvcml0eSk7XG59XG5cblxuZXhwb3J0IHtyZW5kZXIsIHVwZGF0ZX07IiwiaW1wb3J0ICogYXMgdG9kb3NUYWJsZVJvd1ZpZXcgZnJvbSBcIi4vdG9kb3MtdGFibGUtcm93LXZpZXcuanNcIjtcbmltcG9ydCBwYXJzZUh0bWwgZnJvbSBcIi4uL3Rvb2xzL3BhcnNlLWh0bWwuanNcIjtcbmltcG9ydCB0cmFzaEljb24gZnJvbSBcIi4uL2ltYWdlcy90cmFzaC1jYW4uc3ZnXCJcblxubGV0IGhhbmRsZXJzO1xuXG5mdW5jdGlvbiByZW5kZXIodGFibGUsIHRhYmxlSnNvbiwgdGFibGVIYW5kbGVycyl7XG4gICAgaGFuZGxlcnMgPSB0YWJsZUhhbmRsZXJzO1xuXG4gICAgY29uc3QgdGFibGVEYXRhID0gSlNPTi5wYXJzZSh0YWJsZUpzb24pO1xuXG4gICAgY29uc3QgY2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYXB0aW9uXCIpO1xuICAgIGNhcHRpb24udGV4dENvbnRlbnQgPSB0YWJsZURhdGEuY2FwdGlvbjtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChjYXB0aW9uKTtcblxuXG4gICAgY29uc3QgdGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgdGhlYWQuYXBwZW5kQ2hpbGQodHIpO1xuXG4gICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0XCIpO1xuICAgIGNlbGwuYXBwZW5kQ2hpbGQocGFyc2VIdG1sKGBcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm11bHRpLWRlbGV0ZVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3RyYXNoSWNvbn1cIiBhbHQ9XCJEZWxldGUgaWNvblwiPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICBgKSk7XG4gICAgdHIuYXBwZW5kQ2hpbGQoY2VsbCk7XG5cbiAgICBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIGNlbGwuc2V0QXR0cmlidXRlKFwic2NvcGVcIiwgXCJjb2xcIik7XG4gICAgY2VsbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcbiAgICB0ci5hcHBlbmRDaGlsZChjZWxsKTtcblxuICAgIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XG4gICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcImNvbFwiKTtcbiAgICBjZWxsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuICAgIHRyLmFwcGVuZENoaWxkKGNlbGwpO1xuXG4gICAgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcbiAgICBjZWxsLnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwiY29sXCIpO1xuICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gICAgdHIuYXBwZW5kQ2hpbGQoY2VsbCk7XG5cbiAgICBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImRvbmVcIik7XG4gICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcImNvbFwiKTtcbiAgICBjZWxsLnRleHRDb250ZW50ID0gXCJTdGF0dXNcIjtcbiAgICB0ci5hcHBlbmRDaGlsZChjZWxsKTtcblxuICAgIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBjZWxsLnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwiY29sXCIpO1xuICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcbiAgICB0ci5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICBcbiAgICB0YWJsZS5hcHBlbmRDaGlsZCh0aGVhZCk7XG4gICAgXG4gICAgY29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xuICAgIGZvciAobGV0IHJvdyBvZiB0YWJsZURhdGEucm93cykge1xuICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgdHIuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCByb3cuaWQpO1xuICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZCh0cik7XG4gICAgICAgIHRvZG9zVGFibGVSb3dWaWV3LnJlbmRlcih0ciwgSlNPTi5zdHJpbmdpZnkocm93KSwgaGFuZGxlcnMpO1xuICAgIH1cblxuICAgIGNvbnN0IG11bHRpRGVsZXRlQnV0dG9uID0gdGFibGUucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5tdWx0aS1kZWxldGVcIik7XG4gICAgbXVsdGlEZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2RvSWRzID0gW107XG4gICAgICAgICAgICB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT0nc2VsZWN0J106Y2hlY2tlZFwiKS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgIGlucHV0ID0+IHRvZG9JZHMucHVzaChpbnB1dC52YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBoYW5kbGVycy5jbGlja011bHRpRGVsZXRlQnV0dG9uKHRvZG9JZHMpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIG11bHRpRGVsZXRlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBcbiAgICB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT0nc2VsZWN0J11cIikuZm9yRWFjaChcbiAgICAgICAgc2VsZWN0ID0+IHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjaGFuZ2VcIixcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFibGUucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9J3NlbGVjdCddOmNoZWNrZWRcIikubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBtdWx0aURlbGV0ZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG11bHRpRGVsZXRlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICApXG4gICAgXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSh0YWJsZSwgdGFibGVKc29uKXtcbiAgICBjb25zdCB0YWJsZURhdGEgPSBKU09OLnBhcnNlKHRhYmxlSnNvbik7XG4gICAgY29uc3QgY2FwdGlvbiA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJjYXB0aW9uXCIpO1xuICAgIGNhcHRpb24udGV4dENvbnRlbnQgPSB0YWJsZURhdGEuY2FwdGlvbjtcblxuICAgIGNvbnN0IHRib2R5ID0gdGFibGUucXVlcnlTZWxlY3RvcihcInRib2R5XCIpO1xuICAgIHRib2R5LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGZvciAobGV0IHJvdyBvZiB0YWJsZURhdGEucm93cykge1xuICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgdHIuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCByb3cuaWQpO1xuICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZCh0cik7XG4gICAgICAgIHRvZG9zVGFibGVSb3dWaWV3LnJlbmRlcih0ciwgSlNPTi5zdHJpbmdpZnkocm93KSwgaGFuZGxlcnMpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlUm93QnlJZCh0YWJsZSwgcm93SWQpIHtcbiAgICBjb25zdCB0ciA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoYHRyW2RhdGEtaWQ9XCIke3Jvd0lkfVwiXWApO1xuICAgIGlmICh0cikge1xuICAgICAgICB0ci5yZW1vdmUoKTtcbiAgICB9ICAgIFxufVxuXG5leHBvcnQgeyByZW5kZXIsIHVwZGF0ZSwgZGVsZXRlUm93QnlJZCB9OyIsImltcG9ydCBwYXJzZUh0bWwgZnJvbSBcIi4uL3Rvb2xzL3BhcnNlLWh0bWwuanNcIjtcbmltcG9ydCAqIGFzIHRvZG9zVGFibGVWaWV3IGZyb20gXCIuL3RvZG9zLXRhYmxlLXZpZXcuanNcIjtcblxubGV0IGhhbmRsZXJzO1xuXG5mdW5jdGlvbiByZW5kZXIoY29udGVudCwgdGFibGVKc29uLCB0b2Rvc0hhbmRsZXJzKSB7XG4gICAgaGFuZGxlcnMgPSB0b2Rvc0hhbmRsZXJzO1xuICAgIGNvbnN0IHRhYmxlRGF0YSA9IEpTT04ucGFyc2UodGFibGVKc29uKTtcblxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGlmICh0YWJsZURhdGEucm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbGV0IGVtcHR5TWVzc2FnZTtcbiAgICAgICAgaWYgKHRhYmxlRGF0YS5lbXB0eU1lc3NhZ2UgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGVtcHR5TWVzc2FnZSA9IHRhYmxlRGF0YS5lbXB0eU1lc3NhZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbXB0eU1lc3NhZ2UgPSBcIk5vIHRhc2tzIGZvdW5kLiBDcmVhdGUgb25lIChvciBqdXN0IHJlbGF4KS5cIlxuICAgICAgICB9XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJzZUh0bWwoYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVtcHR5XCI+XG4gICAgICAgICAgICAgICAgPGgxPiR7dGFibGVEYXRhLmNhcHRpb259PC9oMT5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgJHtlbXB0eU1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICAgICAgdGFibGUuY2xhc3NMaXN0LmFkZChcInRvZG9zXCIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgICAgICAgdG9kb3NUYWJsZVZpZXcucmVuZGVyKHRhYmxlLCBKU09OLnN0cmluZ2lmeSh0YWJsZURhdGEpLCBoYW5kbGVycyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkQnV0dG9uID0gcGFyc2VIdG1sKFxuICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cImFkZFwiPis8L2J1dHRvbj4nXG4gICAgKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG5cbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICBoYW5kbGVycy5jbGlja0FkZEJ1dHRvblxuICAgIClcbn1cblxuZnVuY3Rpb24gdXBkYXRlKGNvbnRlbnQsIHRhYmxlSnNvbikge1xuICAgIGNvbnN0IHRhYmxlID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwidGFibGUudG9kb3NcIik7XG4gICAgdG9kb3NUYWJsZVZpZXcudXBkYXRlKHRhYmxlLCB0YWJsZUpzb24pOyAgXG59XG5cblxuZXhwb3J0IHtyZW5kZXIsIHVwZGF0ZX07IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICBjb25zdCBzaWduID0gbnVtYmVyIDwgMCA/IFwiLVwiIDogXCJcIjtcbiAgY29uc3Qgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpLnBhZFN0YXJ0KHRhcmdldExlbmd0aCwgXCIwXCIpO1xuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn1cbiIsImxldCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufVxuIiwiaW1wb3J0IHsgZ2V0RGF5T2ZZZWFyIH0gZnJvbSBcIi4uLy4uL2dldERheU9mWWVhci5tanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0SVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4uLy4uL2dldElTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2VlayB9IGZyb20gXCIuLi8uLi9nZXRXZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBhZGRMZWFkaW5nWmVyb3MgfSBmcm9tIFwiLi4vYWRkTGVhZGluZ1plcm9zLm1qc1wiO1xuaW1wb3J0IHsgbGlnaHRGb3JtYXR0ZXJzIH0gZnJvbSBcIi4vbGlnaHRGb3JtYXR0ZXJzLm1qc1wiO1xuXG5jb25zdCBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogXCJhbVwiLFxuICBwbTogXCJwbVwiLFxuICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICBub29uOiBcIm5vb25cIixcbiAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gIG5pZ2h0OiBcIm5pZ2h0XCIsXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxuZXhwb3J0IGNvbnN0IGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZXJhID0gZGF0ZS5nZXRGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSBcIkdcIjpcbiAgICAgIGNhc2UgXCJHR1wiOlxuICAgICAgY2FzZSBcIkdHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJhYmJyZXZpYXRlZFwiIH0pO1xuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSBcIkdHR0dHXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcIm5hcnJvd1wiIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcbiAgICAgIGNhc2UgXCJHR0dHXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJ3aWRlXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSBcInlvXCIpIHtcbiAgICAgIGNvbnN0IHNpZ25lZFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgICAgY29uc3QgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwgeyB1bml0OiBcInllYXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHNpZ25lZFdlZWtZZWFyID0gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICBjb25zdCB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyO1xuXG4gICAgLy8gVHdvIGRpZ2l0IHllYXJcbiAgICBpZiAodG9rZW4gPT09IFwiWVlcIikge1xuICAgICAgY29uc3QgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfVxuXG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09IFwiWW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgaXNvV2Vla1llYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlKTtcblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcIlFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwiUVFcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcIlFvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcIlFRUVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJRUVFRUVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgXCJRUVFRXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwicVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwicW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwicXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcInFxcXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcInFxcXFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIk1cIjpcbiAgICAgIGNhc2UgXCJNTVwiOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIk1vXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJNTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJNTU1NTVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIkxvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJMTExMTFwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHdlZWsgPSBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIndvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGlzb1dlZWsgPSBnZXRJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIklvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJkb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldERhdGUoKSwgeyB1bml0OiBcImRhdGVcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiRG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7IHVuaXQ6IFwiZGF5T2ZZZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiRVwiOlxuICAgICAgY2FzZSBcIkVFXCI6XG4gICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcIkVFRUVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgXCJlXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSBcImVlXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiZW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIGNhc2UgXCJlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiZWVlZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiZWVlZVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJjY1wiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiY29cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiY2NjY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlIFwiaVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSBcImlpXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG4gICAgICBjYXNlIFwiaW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiaWlpaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiaWlpaVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYWFhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImJcIjpcbiAgICAgIGNhc2UgXCJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYmJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiYlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJCXCI6XG4gICAgICBjYXNlIFwiQkJcIjpcbiAgICAgIGNhc2UgXCJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCQlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiaG9cIikge1xuICAgICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiSG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRIb3VycygpLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiS29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJrb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIm1vXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0TWludXRlcygpLCB7IHVuaXQ6IFwibWludXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJzb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFNlY29uZHMoKSwgeyB1bml0OiBcInNlY29uZFwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFwiWlwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwiWFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG4gICAgICBjYXNlIFwiWFhYWFwiOlxuICAgICAgY2FzZSBcIlhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG4gICAgICBjYXNlIFwiWFhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlIFwieHh4eFwiOlxuICAgICAgY2FzZSBcInh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG4gICAgICBjYXNlIFwieHh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eHhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwiT1wiOlxuICAgICAgY2FzZSBcIk9PXCI6XG4gICAgICBjYXNlIFwiT09PXCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcIk9PT09cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwielwiOlxuICAgICAgY2FzZSBcInp6XCI6XG4gICAgICBjYXNlIFwienp6XCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcInp6enpcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBNYXRoLnRydW5jKGRhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApO1xuICBjb25zdCBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGVsaW1pdGVyID0gXCJcIikge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gIGNvbnN0IGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIGNvbnN0IGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgY29uc3QgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuIiwiaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4uL2FkZExlYWRpbmdaZXJvcy5tanNcIjtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGxpZ2h0Rm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG5cbiAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3QgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09IFwieXlcIiA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1vbnRoXG4gIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09IFwiTVwiID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0RGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEFNIG9yIFBNXG4gIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldEhvdXJzKCkgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYWFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgICBjYXNlIFwiYWFhYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSBcImFtXCIgPyBcImEubS5cIiA6IFwicC5tLlwiO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldEhvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTIzXVxuICBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldEhvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWludXRlXG4gIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0TWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIFNlY29uZFxuICBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFNlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUyhkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gICAgY29uc3QgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLnRydW5jKFxuICAgICAgbWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMyksXG4gICAgKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufTtcbiIsImNvbnN0IGRhdGVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcIlBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcIlBQUFBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgdGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlIFwicFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgY2FzZSBcInBwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgY2FzZSBcInBwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICBjYXNlIFwicHBwcFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICB9XG59O1xuXG5jb25zdCBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBjb25zdCBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICBjb25zdCBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICBjb25zdCB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICBsZXQgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0XG4gICAgLnJlcGxhY2UoXCJ7e2RhdGV9fVwiLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpXG4gICAgLnJlcGxhY2UoXCJ7e3RpbWV9fVwiLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyLFxufTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgdXRjRGF0ZSA9IG5ldyBEYXRlKFxuICAgIERhdGUuVVRDKFxuICAgICAgX2RhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIF9kYXRlLmdldE1vbnRoKCksXG4gICAgICBfZGF0ZS5nZXREYXRlKCksXG4gICAgICBfZGF0ZS5nZXRIb3VycygpLFxuICAgICAgX2RhdGUuZ2V0TWludXRlcygpLFxuICAgICAgX2RhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgX2RhdGUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICAgKSxcbiAgKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihfZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuICtkYXRlIC0gK3V0Y0RhdGU7XG59XG4iLCJjb25zdCBkYXlPZlllYXJUb2tlblJFID0gL15EKyQvO1xuY29uc3Qgd2Vla1llYXJUb2tlblJFID0gL15ZKyQvO1xuXG5jb25zdCB0aHJvd1Rva2VucyA9IFtcIkRcIiwgXCJERFwiLCBcIllZXCIsIFwiWVlZWVwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIGRheU9mWWVhclRva2VuUkUudGVzdCh0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHdlZWtZZWFyVG9rZW5SRS50ZXN0KHRva2VuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgY29uc3QgX21lc3NhZ2UgPSBtZXNzYWdlKHRva2VuLCBmb3JtYXQsIGlucHV0KTtcbiAgY29uc29sZS53YXJuKF9tZXNzYWdlKTtcbiAgaWYgKHRocm93VG9rZW5zLmluY2x1ZGVzKHRva2VuKSkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoX21lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBtZXNzYWdlKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGNvbnN0IHN1YmplY3QgPSB0b2tlblswXSA9PT0gXCJZXCIgPyBcInllYXJzXCIgOiBcImRheXMgb2YgdGhlIG1vbnRoXCI7XG4gIHJldHVybiBgVXNlIFxcYCR7dG9rZW4udG9Mb3dlckNhc2UoKX1cXGAgaW5zdGVhZCBvZiBcXGAke3Rva2VufVxcYCAoaW4gXFxgJHtmb3JtYXR9XFxgKSBmb3IgZm9ybWF0dGluZyAke3N1YmplY3R9IHRvIHRoZSBpbnB1dCBcXGAke2lucHV0fVxcYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kYDtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBjb25zdGFudHNcbiAqIEBzdW1tYXJ5IFVzZWZ1bCBjb25zdGFudHNcbiAqIEBkZXNjcmlwdGlvblxuICogQ29sbGVjdGlvbiBvZiB1c2VmdWwgZGF0ZSBjb25zdGFudHMuXG4gKlxuICogVGhlIGNvbnN0YW50cyBjb3VsZCBiZSBpbXBvcnRlZCBmcm9tIGBkYXRlLWZucy9jb25zdGFudHNgOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBtYXhUaW1lLCBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGZ1bmN0aW9uIGlzQWxsb3dlZFRpbWUodGltZSkge1xuICogICByZXR1cm4gdGltZSA8PSBtYXhUaW1lICYmIHRpbWUgPj0gbWluVGltZTtcbiAqIH1cbiAqIGBgYFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luWWVhclxuICogQHN1bW1hcnkgRGF5cyBpbiAxIHllYXIuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBIb3cgbWFueSBkYXlzIGluIGEgeWVhci5cbiAqXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBzdW1tYXJ5IE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXhUaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSA4NjQwMDAwMDAwMDAwMDAxIDw9IG1heFRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoODY0MDAwMDAwMDAwMDAwMSk7XG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAc3VtbWFyeSBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gLTg2NDAwMDAwMDAwMDAwMDEgPj0gbWluVGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSgtODY0MDAwMDAwMDAwMDAwMSlcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbldlZWsgPSA2MDQ4MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5EYXkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJblllYXIgPSA1MjU2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Nb250aFxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIG1vbnRoLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luTW9udGggPSA0MzIwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkRheVxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkRheSA9IDE0NDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAc3VtbWFyeSBRdWFydGVycyBpbiAxIHllYXJcbiAqL1xuZXhwb3J0IGNvbnN0IHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtaW51dGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtb250aFxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7XG4iLCIvKipcbiAqIEBuYW1lIGNvbnN0cnVjdEZyb21cbiAqIEBjYXRlZ29yeSBHZW5lcmljIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnN0cnVjdHMgYSBkYXRlIHVzaW5nIHRoZSByZWZlcmVuY2UgZGF0ZSBhbmQgdGhlIHZhbHVlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgZnVuY3Rpb24gY29uc3RydWN0cyBhIG5ldyBkYXRlIHVzaW5nIHRoZSBjb25zdHJ1Y3RvciBmcm9tIHRoZSByZWZlcmVuY2VcbiAqIGRhdGUgYW5kIHRoZSBnaXZlbiB2YWx1ZS4gSXQgaGVscHMgdG8gYnVpbGQgZ2VuZXJpYyBmdW5jdGlvbnMgdGhhdCBhY2NlcHRcbiAqIGRhdGUgZXh0ZW5zaW9ucy5cbiAqXG4gKiBJdCBkZWZhdWx0cyB0byBgRGF0ZWAgaWYgdGhlIHBhc3NlZCByZWZlcmVuY2UgZGF0ZSBpcyBhIG51bWJlciBvciBhIHN0cmluZy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSByZWZlcmVuY2UgZGF0ZSB0byB0YWtlIGNvbnN0cnVjdG9yIGZyb21cbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjcmVhdGUgdGhlIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBEYXRlIGluaXRpYWxpemVkIHVzaW5nIHRoZSBnaXZlbiBkYXRlIGFuZCB2YWx1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSAnZGF0ZS1mbnMnXG4gKlxuICogLy8gQSBmdW5jdGlvbiB0aGF0IGNsb25lcyBhIGRhdGUgcHJlc2VydmluZyB0aGUgb3JpZ2luYWwgdHlwZVxuICogZnVuY3Rpb24gY2xvbmVEYXRlPERhdGVUeXBlIGV4dGVuZHMgRGF0ZShkYXRlOiBEYXRlVHlwZSk6IERhdGVUeXBlIHtcbiAqICAgcmV0dXJuIGNvbnN0cnVjdEZyb20oXG4gKiAgICAgZGF0ZSwgLy8gVXNlIGNvbnRydXN0b3IgZnJvbSB0aGUgZ2l2ZW4gZGF0ZVxuICogICAgIGRhdGUuZ2V0VGltZSgpIC8vIFVzZSB0aGUgZGF0ZSB2YWx1ZSB0byBjcmVhdGUgYSBuZXcgZGF0ZVxuICogICApXG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RGcm9tKGRhdGUsIHZhbHVlKSB7XG4gIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBuZXcgZGF0ZS5jb25zdHJ1Y3Rvcih2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGNvbnN0cnVjdEZyb207XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3ROb3dcbiAqIEBjYXRlZ29yeSBHZW5lcmljIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnN0cnVjdHMgYSBuZXcgY3VycmVudCBkYXRlIHVzaW5nIHRoZSBwYXNzZWQgdmFsdWUgY29uc3RydWN0b3IuXG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgY3VycmVudCBkYXRlIHVzaW5nIHRoZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiB0aGUgcmVmZXJlbmNlIGRhdGUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0IGRhdGVcbiAqIGV4dGVuc2lvbnMgYW5kIHVzZSB0aGUgY3VycmVudCBkYXRlLlxuICpcbiAqIEl0IGRlZmF1bHRzIHRvIGBEYXRlYCBpZiB0aGUgcGFzc2VkIHJlZmVyZW5jZSBkYXRlIGlzIGEgbnVtYmVyIG9yIGEgc3RyaW5nLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICpcbiAqIEByZXR1cm5zIEN1cnJlbnQgZGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBjb25zdHJ1Y3RvclxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjb25zdHJ1Y3ROb3csIGlzU2FtZURheSB9IGZyb20gJ2RhdGUtZm5zJ1xuICpcbiAqIGZ1bmN0aW9uIGlzVG9kYXk8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlPihcbiAqICAgZGF0ZTogRGF0ZVR5cGUgfCBudW1iZXIgfCBzdHJpbmcsXG4gKiApOiBib29sZWFuIHtcbiAqICAgLy8gSWYgd2Ugd2VyZSB0byB1c2UgYG5ldyBEYXRlKClgIGRpcmVjdGx5LCB0aGUgZnVuY3Rpb24gd291bGQgIGJlaGF2ZVxuICogICAvLyBkaWZmZXJlbnRseSBpbiBkaWZmZXJlbnQgdGltZXpvbmVzIGFuZCByZXR1cm4gZmFsc2UgZm9yIHRoZSBzYW1lIGRhdGUuXG4gKiAgIHJldHVybiBpc1NhbWVEYXkoZGF0ZSwgY29uc3RydWN0Tm93KGRhdGUpKTtcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdE5vdyhkYXRlKSB7XG4gIHJldHVybiBjb25zdHJ1Y3RGcm9tKGRhdGUsIERhdGUubm93KCkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGNvbnN0cnVjdE5vdztcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luRGF5IH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkubWpzXCI7XG5pbXBvcnQgeyBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIH0gZnJvbSBcIi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCB0aW1lc3RhbXBMZWZ0ID1cbiAgICArc3RhcnRPZkRheUxlZnQgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgY29uc3QgdGltZXN0YW1wUmlnaHQgPVxuICAgICtzdGFydE9mRGF5UmlnaHQgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBtaWxsaXNlY29uZHNJbkRheSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xuIiwiaW1wb3J0IHsgZGVmYXVsdExvY2FsZSB9IGZyb20gXCIuL19saWIvZGVmYXVsdExvY2FsZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcbmltcG9ydCB7IGZvcm1hdHRlcnMgfSBmcm9tIFwiLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzLm1qc1wiO1xuaW1wb3J0IHsgbG9uZ0Zvcm1hdHRlcnMgfSBmcm9tIFwiLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5tanNcIjtcbmltcG9ydCB7XG4gIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sXG4gIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbixcbiAgd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcixcbn0gZnJvbSBcIi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMubWpzXCI7XG5pbXBvcnQgeyBpc1ZhbGlkIH0gZnJvbSBcIi4vaXNWYWxpZC5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLy8gUmV4cG9ydHMgb2YgaW50ZXJuYWwgZm9yIGxpYnJhcmllcyB0byB1c2UuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzYzOCNpc3N1ZWNvbW1lbnQtMTg3NzA4Mjg3NFxuZXhwb3J0IHsgZm9ybWF0dGVycywgbG9uZ0Zvcm1hdHRlcnMgfTtcblxuLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5jb25zdCBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID1cbiAgL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG4vLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5jb25zdCBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG5jb25zdCBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG5jb25zdCBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xuY29uc3QgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuXG5leHBvcnQgeyBmb3JtYXQgYXMgZm9ybWF0RGF0ZSB9O1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZm9ybWF0fSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAYWxpYXMgZm9ybWF0RGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyKVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcikpLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gZm9ybWF0IC0gVGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqXG4gKiBAdGhyb3dzIGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3MgYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3MgdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoZGF0ZSwgZm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgbG9jYWxlID0gb3B0aW9ucz8ubG9jYWxlID8/IGRlZmF1bHRPcHRpb25zLmxvY2FsZSA/PyBkZWZhdWx0TG9jYWxlO1xuXG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgdGltZSB2YWx1ZVwiKTtcbiAgfVxuXG4gIGxldCBwYXJ0cyA9IGZvcm1hdFN0clxuICAgIC5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKChzdWJzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcInBcIiB8fCBmaXJzdENoYXJhY3RlciA9PT0gXCJQXCIpIHtcbiAgICAgICAgY29uc3QgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3Vic3RyaW5nO1xuICAgIH0pXG4gICAgLmpvaW4oXCJcIilcbiAgICAubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKChzdWJzdHJpbmcpID0+IHtcbiAgICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IFwiJ1wiIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXSkge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiB0cnVlLCB2YWx1ZTogc3Vic3RyaW5nIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgXCJGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYFwiICtcbiAgICAgICAgICAgIGZpcnN0Q2hhcmFjdGVyICtcbiAgICAgICAgICAgIFwiYFwiLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IHN1YnN0cmluZyB9O1xuICAgIH0pO1xuXG4gIC8vIGludm9rZSBsb2NhbGl6ZSBwcmVwcm9jZXNzb3IgKG9ubHkgZm9yIGZyZW5jaCBsb2NhbGVzIGF0IHRoZSBtb21lbnQpXG4gIGlmIChsb2NhbGUubG9jYWxpemUucHJlcHJvY2Vzc29yKSB7XG4gICAgcGFydHMgPSBsb2NhbGUubG9jYWxpemUucHJlcHJvY2Vzc29yKG9yaWdpbmFsRGF0ZSwgcGFydHMpO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZSxcbiAgfTtcblxuICByZXR1cm4gcGFydHNcbiAgICAubWFwKChwYXJ0KSA9PiB7XG4gICAgICBpZiAoIXBhcnQuaXNUb2tlbikgcmV0dXJuIHBhcnQudmFsdWU7XG5cbiAgICAgIGNvbnN0IHRva2VuID0gcGFydC52YWx1ZTtcblxuICAgICAgaWYgKFxuICAgICAgICAoIW9wdGlvbnM/LnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJlxuICAgICAgICAgIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikpIHx8XG4gICAgICAgICghb3B0aW9ucz8udXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJlxuICAgICAgICAgIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pKVxuICAgICAgKSB7XG4gICAgICAgIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdFN0ciwgU3RyaW5nKGRhdGUpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1t0b2tlblswXV07XG4gICAgICByZXR1cm4gZm9ybWF0dGVyKG9yaWdpbmFsRGF0ZSwgdG9rZW4sIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKTtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIGNvbnN0IG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZlllYXIgfSBmcm9tIFwiLi9zdGFydE9mWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXREYXlPZlllYXJcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIGRheSBvZiB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgeWVhciBpcyAyIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldERheU9mWWVhcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gMTgzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlPZlllYXIoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhfZGF0ZSwgc3RhcnRPZlllYXIoX2RhdGUpKTtcbiAgY29uc3QgZGF5T2ZZZWFyID0gZGlmZiArIDE7XG4gIHJldHVybiBkYXlPZlllYXI7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF5T2ZZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiA1M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2VlayhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gK3N0YXJ0T2ZJU09XZWVrKF9kYXRlKSAtICtzdGFydE9mSVNPV2Vla1llYXIoX2RhdGUpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2Ygd2Vla3MgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIG1pbGxpc2Vjb25kc0luV2VlaykgKyAxO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldElTT1dlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0SVNPV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZSxcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWtZZWFyKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHllYXIgPSBfZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldElTT1dlZWtZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSB3aXRoIGRlZmF1bHQgb3B0aW9ucz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSxcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLFxuICogLy8gYW5kIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyIGFsd2F5cyBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiA1M1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSArc3RhcnRPZldlZWsoX2RhdGUsIG9wdGlvbnMpIC0gK3N0YXJ0T2ZXZWVrWWVhcihfZGF0ZSwgb3B0aW9ucyk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0V2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMgVGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IHdpdGggdGhlIGRlZmF1bHQgc2V0dGluZ3M/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpKVxuICogLy89PiAyMDA1XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB3ZWVrIHN0YXJ0cyBvbiBTYXR1cmRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgd2Vla1N0YXJ0c09uOiA2IH0pXG4gKiAvLz0+IDIwMDRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHRoZSBmaXJzdCB3ZWVrIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0IH0pXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHllYXIgPSBfZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCBmaXJzdFdlZWtPZk5leHRZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG5cbiAgY29uc3QgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0RnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0V2Vla1llYXI7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNCZWZvcmVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYmVmb3JlIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSBkYXRlVG9Db21wYXJlIC0gVGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKlxuICogQHJldHVybnMgVGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgZGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYmVmb3JlIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0JlZm9yZShuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQmVmb3JlKGRhdGUsIGRhdGVUb0NvbXBhcmUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IF9kYXRlVG9Db21wYXJlID0gdG9EYXRlKGRhdGVUb0NvbXBhcmUpO1xuICByZXR1cm4gK19kYXRlIDwgK19kYXRlVG9Db21wYXJlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzQmVmb3JlO1xuIiwiLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc0RhdGU7XG4iLCJpbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURheShkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIHJldHVybiArZGF0ZUxlZnRTdGFydE9mRGF5ID09PSArZGF0ZVJpZ2h0U3RhcnRPZkRheTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1NhbWVEYXk7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3ROb3cgfSBmcm9tIFwiLi9jb25zdHJ1Y3ROb3cubWpzXCI7XG5pbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tIFwiLi9pc1NhbWVEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvZGF5KGRhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZURheShkYXRlLCBjb25zdHJ1Y3ROb3coZGF0ZSkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVG9kYXk7XG4iLCJpbXBvcnQgeyBpc0RhdGUgfSBmcm9tIFwiLi9pc0RhdGUubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGUpXG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdmFsaWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQoZGF0ZSkge1xuICBpZiAoIWlzRGF0ZShkYXRlKSAmJiB0eXBlb2YgZGF0ZSAhPT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoX2RhdGUpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1ZhbGlkO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIChvcHRpb25zID0ge30pID0+IHtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICBjb25zdCBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogVGhlIGxvY2FsaXplIGZ1bmN0aW9uIGFyZ3VtZW50IGNhbGxiYWNrIHdoaWNoIGFsbG93cyB0byBjb252ZXJ0IHJhdyB2YWx1ZSB0b1xuICogdGhlIGFjdHVhbCB0eXBlLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIGNvbnZlcnRlZCB2YWx1ZVxuICovXG5cbi8qKlxuICogVGhlIG1hcCBvZiBsb2NhbGl6ZWQgdmFsdWVzIGZvciBlYWNoIHdpZHRoLlxuICovXG5cbi8qKlxuICogVGhlIGluZGV4IHR5cGUgb2YgdGhlIGxvY2FsZSB1bml0IHZhbHVlLiBJdCB0eXBlcyBjb252ZXJzaW9uIG9mIHVuaXRzIG9mXG4gKiB2YWx1ZXMgdGhhdCBkb24ndCBzdGFydCBhdCAwIChpLmUuIHF1YXJ0ZXJzKS5cbiAqL1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSB1bml0IHZhbHVlIHRvIHRoZSB0dXBsZSBvZiB2YWx1ZXMuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGVyYSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgQkMsXG4gKiB0aGUgc2Vjb25kIGVsZW1lbnQgcmVwcmVzZW50cyBBRC5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgcXVhcnRlciB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgUTEuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGRheSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgU3VuZGF5LlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBtb250aCB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgSmFudWFyeS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuICh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSBvcHRpb25zPy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiBcInN0YW5kYWxvbmVcIjtcblxuICAgIGxldCB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gXCJmb3JtYXR0aW5nXCIgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9XG4gICAgICAgIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIChzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aDtcblxuICAgIGNvbnN0IG1hdGNoUGF0dGVybiA9XG4gICAgICAod2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSkgfHxcbiAgICAgIGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUGF0dGVybnMgPVxuICAgICAgKHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG5cbiAgICBjb25zdCBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpXG4gICAgICA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCAocGF0dGVybikgPT4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpKVxuICAgICAgOiAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIGZpbmRLZXkocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSk7XG5cbiAgICBsZXQgdmFsdWU7XG5cbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrXG4gICAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICAgICAgb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKVxuICAgICAgOiB2YWx1ZTtcblxuICAgIGNvbnN0IHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHsgdmFsdWUsIHJlc3QgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmXG4gICAgICBwcmVkaWNhdGUob2JqZWN0W2tleV0pXG4gICAgKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKGxldCBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIChzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrXG4gICAgICA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSlcbiAgICAgIDogcGFyc2VSZXN1bHRbMF07XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG4iLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXRMb25nIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRMb25nLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0UmVsYXRpdmUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLm1qc1wiO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2xvY2FsaXplLm1qc1wiO1xuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi9lbi1VUy9fbGliL21hdGNoLm1qc1wiO1xuXG4vKipcbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBdKGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwKVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXShodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzKVxuICovXG5leHBvcnQgY29uc3QgZW5VUyA9IHtcbiAgY29kZTogXCJlbi1VU1wiLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMSxcbiAgfSxcbn07XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZW5VUztcbiIsImNvbnN0IGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiBcImxlc3MgdGhhbiBhIHNlY29uZFwiLFxuICAgIG90aGVyOiBcImxlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kc1wiLFxuICB9LFxuXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiBcIjEgc2Vjb25kXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICBoYWxmQU1pbnV0ZTogXCJoYWxmIGEgbWludXRlXCIsXG5cbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXNcIixcbiAgfSxcblxuICB4TWludXRlczoge1xuICAgIG9uZTogXCIxIG1pbnV0ZVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSBob3VyXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IGhvdXJzXCIsXG4gIH0sXG5cbiAgeEhvdXJzOiB7XG4gICAgb25lOiBcIjEgaG91clwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhEYXlzOiB7XG4gICAgb25lOiBcIjEgZGF5XCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IGRheXNcIixcbiAgfSxcblxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogXCJhYm91dCAxIHdlZWtcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gd2Vla3NcIixcbiAgfSxcblxuICB4V2Vla3M6IHtcbiAgICBvbmU6IFwiMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiBcImFib3V0IDEgbW9udGhcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gbW9udGhzXCIsXG4gIH0sXG5cbiAgeE1vbnRoczoge1xuICAgIG9uZTogXCIxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgeWVhclwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIHhZZWFyczoge1xuICAgIG9uZTogXCIxIHllYXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiBcIm92ZXIgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwib3ZlciB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6IFwiYWxtb3N0IDEgeWVhclwiLFxuICAgIG90aGVyOiBcImFsbW9zdCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREaXN0YW5jZSA9ICh0b2tlbiwgY291bnQsIG9wdGlvbnMpID0+IHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKFwie3tjb3VudH19XCIsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnM/LmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuIFwiaW4gXCIgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyBcIiBhZ29cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCB7IGJ1aWxkRm9ybWF0TG9uZ0ZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4ubWpzXCI7XG5cbmNvbnN0IGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiBcIkVFRUUsIE1NTU0gZG8sIHlcIixcbiAgbG9uZzogXCJNTU1NIGRvLCB5XCIsXG4gIG1lZGl1bTogXCJNTU0gZCwgeVwiLFxuICBzaG9ydDogXCJNTS9kZC95eXl5XCIsXG59O1xuXG5jb25zdCB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJoOm1tOnNzIGEgenp6elwiLFxuICBsb25nOiBcImg6bW06c3MgYSB6XCIsXG4gIG1lZGl1bTogXCJoOm1tOnNzIGFcIixcbiAgc2hvcnQ6IFwiaDptbSBhXCIsXG59O1xuXG5jb25zdCBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiBcInt7ZGF0ZX19LCB7e3RpbWV9fVwiLFxuICBzaG9ydDogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG5cbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxufTtcbiIsImNvbnN0IGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogXCJQXCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0UmVsYXRpdmUgPSAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSA9PlxuICBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG4iLCJpbXBvcnQgeyBidWlsZExvY2FsaXplRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4ubWpzXCI7XG5cbmNvbnN0IGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJCXCIsIFwiQVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIkJDXCIsIFwiQURcIl0sXG4gIHdpZGU6IFtcIkJlZm9yZSBDaHJpc3RcIiwgXCJBbm5vIERvbWluaVwiXSxcbn07XG5cbmNvbnN0IHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlExXCIsIFwiUTJcIiwgXCJRM1wiLCBcIlE0XCJdLFxuICB3aWRlOiBbXCIxc3QgcXVhcnRlclwiLCBcIjJuZCBxdWFydGVyXCIsIFwiM3JkIHF1YXJ0ZXJcIiwgXCI0dGggcXVhcnRlclwiXSxcbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbmNvbnN0IG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkpcIiwgXCJGXCIsIFwiTVwiLCBcIkFcIiwgXCJNXCIsIFwiSlwiLCBcIkpcIiwgXCJBXCIsIFwiU1wiLCBcIk9cIiwgXCJOXCIsIFwiRFwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcbiAgICBcIkphblwiLFxuICAgIFwiRmViXCIsXG4gICAgXCJNYXJcIixcbiAgICBcIkFwclwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5cIixcbiAgICBcIkp1bFwiLFxuICAgIFwiQXVnXCIsXG4gICAgXCJTZXBcIixcbiAgICBcIk9jdFwiLFxuICAgIFwiTm92XCIsXG4gICAgXCJEZWNcIixcbiAgXSxcblxuICB3aWRlOiBbXG4gICAgXCJKYW51YXJ5XCIsXG4gICAgXCJGZWJydWFyeVwiLFxuICAgIFwiTWFyY2hcIixcbiAgICBcIkFwcmlsXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1bmVcIixcbiAgICBcIkp1bHlcIixcbiAgICBcIkF1Z3VzdFwiLFxuICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgXCJPY3RvYmVyXCIsXG4gICAgXCJOb3ZlbWJlclwiLFxuICAgIFwiRGVjZW1iZXJcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJTXCIsIFwiTVwiLCBcIlRcIiwgXCJXXCIsIFwiVFwiLCBcIkZcIiwgXCJTXCJdLFxuICBzaG9ydDogW1wiU3VcIiwgXCJNb1wiLCBcIlR1XCIsIFwiV2VcIiwgXCJUaFwiLCBcIkZyXCIsIFwiU2FcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXG4gIHdpZGU6IFtcbiAgICBcIlN1bmRheVwiLFxuICAgIFwiTW9uZGF5XCIsXG4gICAgXCJUdWVzZGF5XCIsXG4gICAgXCJXZWRuZXNkYXlcIixcbiAgICBcIlRodXJzZGF5XCIsXG4gICAgXCJGcmlkYXlcIixcbiAgICBcIlNhdHVyZGF5XCIsXG4gIF0sXG59O1xuXG5jb25zdCBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiBcImFcIixcbiAgICBwbTogXCJwXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlcIixcbiAgICBub29uOiBcIm5cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogXCJBTVwiLFxuICAgIHBtOiBcIlBNXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiBcImEubS5cIixcbiAgICBwbTogXCJwLm0uXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbn07XG5cbmNvbnN0IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiBcImFcIixcbiAgICBwbTogXCJwXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlcIixcbiAgICBub29uOiBcIm5cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogXCJBTVwiLFxuICAgIHBtOiBcIlBNXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiBcImEubS5cIixcbiAgICBwbTogXCJwLm0uXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbn07XG5cbmNvbnN0IG9yZGluYWxOdW1iZXIgPSAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSA9PiB7XG4gIGNvbnN0IG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICBjb25zdCByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwic3RcIjtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwibmRcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwicmRcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlciArIFwidGhcIjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcixcblxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgICBhcmd1bWVudENhbGxiYWNrOiAocXVhcnRlcikgPT4gcXVhcnRlciAtIDEsXG4gIH0pLFxuXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxufTtcbiIsImltcG9ydCB7IGJ1aWxkTWF0Y2hGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi5tanNcIjtcbmltcG9ydCB7IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuLm1qc1wiO1xuXG5jb25zdCBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xuY29uc3QgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG5cbmNvbnN0IG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaSxcbn07XG5jb25zdCBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2ksXG59O1xuY29uc3QgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldLFxufTtcblxuY29uc3QgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2ksXG59O1xuY29uc3QgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFtcbiAgICAvXmovaSxcbiAgICAvXmYvaSxcbiAgICAvXm0vaSxcbiAgICAvXmEvaSxcbiAgICAvXm0vaSxcbiAgICAvXmovaSxcbiAgICAvXmovaSxcbiAgICAvXmEvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcblxuICBhbnk6IFtcbiAgICAvXmphL2ksXG4gICAgL15mL2ksXG4gICAgL15tYXIvaSxcbiAgICAvXmFwL2ksXG4gICAgL15tYXkvaSxcbiAgICAvXmp1bi9pLFxuICAgIC9eanVsL2ksXG4gICAgL15hdS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaSxcbn07XG5jb25zdCBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV0sXG59O1xuXG5jb25zdCBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbn07XG5jb25zdCBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2ksXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogKHZhbHVlKSA9PiBwYXJzZUludCh2YWx1ZSwgMTApLFxuICB9KSxcblxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gICAgdmFsdWVDYWxsYmFjazogKGluZGV4KSA9PiBpbmRleCArIDEsXG4gIH0pLFxuXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwiYW55XCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG59O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRheShkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZEYXk7XG4iLCJpbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mSVNPV2VlayhkYXRlKSB7XG4gIHJldHVybiBzdGFydE9mV2VlayhkYXRlLCB7IHdlZWtTdGFydHNPbjogMSB9KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mSVNPV2VlaztcbiIsImltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4vZ2V0SVNPV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDU6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWtZZWFyKGRhdGUpIHtcbiAgY29uc3QgeWVhciA9IGdldElTT1dlZWtZZWFyKGRhdGUpO1xuICBjb25zdCBmb3VydGhPZkphbnVhcnkgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZklTT1dlZWtZZWFyO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGF5ID0gX2RhdGUuZ2V0RGF5KCk7XG4gIGNvbnN0IGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuXG4gIF9kYXRlLnNldERhdGUoX2RhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IGdldFdlZWtZZWFyIH0gZnJvbSBcIi4vZ2V0V2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1IHdpdGggZGVmYXVsdCBzZXR0aW5nczpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSlcbiAqIC8vPT4gU3VuIERlYyAyNiAyMDA0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1XG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB3ZWVrXG4gKiAvLyBhbmQgNCBKYW51YXJ5IGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhcjpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gTW9uIEphbiAwMyAyMDA1IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgeWVhciA9IGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICBjb25zdCBmaXJzdFdlZWsgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWsuc2V0RnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBfZGF0ZSA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2Vla1llYXI7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mWWVhclxuICogQGNhdGVnb3J5IFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB5ZWFyIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZlllYXIobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwMCkpXG4gKiAvLz0+IFdlZCBKYW4gMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZlllYXIoZGF0ZSkge1xuICBjb25zdCBjbGVhbkRhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IF9kYXRlID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgX2RhdGUuc2V0RnVsbFllYXIoY2xlYW5EYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZZZWFyO1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbmltcG9ydCAqIGFzIHZpZXcgZnJvbSBcIi4vdmlldy5qc1wiO1xuaW1wb3J0ICogYXMgbW9kZWwgZnJvbSBcIi4vbW9kZWwuanNcIlxuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlci5qc1wiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5cbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcih2aWV3LCBtb2RlbCk7XG5cbmNvbnRyb2xsZXIuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9