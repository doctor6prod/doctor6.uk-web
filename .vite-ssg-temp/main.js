"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var viteSsg = require("vite-ssg");
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var core = require("@vueuse/core");
var vueRouter = require("vue-router");
const _hoisted_1$b = {
  height: "1.2em",
  width: "1.2em",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48"
};
function render$b(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$b, [..._cache[0] || (_cache[0] = [
    vue.createElementVNode("path", { d: "M25,44C13.972,44,5,35.028,5,24S13.972,4,25,4c0.39,0,0.772,0.026,1.155,0.053l0.2,0.014	c0.493,0.034,0.937,0.307,1.188,0.731c0.252,0.424,0.279,0.945,0.072,1.393C26.544,8.517,26,10.976,26,13.5	c0,8.973,6.72,16.452,15.632,17.397c0.491,0.052,0.925,0.343,1.161,0.777c0.235,0.435,0.242,0.957,0.017,1.396	C39.37,39.812,32.545,44,25,44z" }, null, -1)
  ])]);
}
var __unplugin_components_0$3 = { name: "fluency-moon", render: render$b };
var _imports_0 = "/assets/doctor6_logo.7ec9c787.svg";
const _hoisted_1$a = {
  height: "1.2em",
  width: "1.2em",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
};
function render$a(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$a, [..._cache[0] || (_cache[0] = [
    vue.createElementVNode("path", { d: "M 8 2 C 4.686 2 2 4.686 2 8 C 2 11.314 4.686 14 8 14 C 11.314 14 14 11.314 14 8 C 14 4.686 11.314 2 8 2 z M 8 3 C 10.757 3 13 5.243 13 8 C 13 10.757 10.757 13 8 13 C 5.243 13 3 10.757 3 8 C 3 5.243 5.243 3 8 3 z M 6.5 6 A 0.50005 0.50005 0 0 0 6.0253906 6.3417969 L 5.0253906 9.3417969 A 0.50005 0.50005 0 0 0 5.5 10 L 9.5 10 A 0.50005 0.50005 0 0 0 9.9746094 9.6582031 L 10.974609 6.6582031 A 0.50005 0.50005 0 0 0 10.5 6 L 6.5 6 z M 6.8613281 7 L 9.8066406 7 L 9.1386719 9 L 6.1933594 9 L 6.8613281 7 z" }, null, -1)
  ])]);
}
var __unplugin_components_7 = { name: "fluency-bandcamp", render: render$a };
const _hoisted_1$9 = {
  height: "1.2em",
  width: "1.2em",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48"
};
function render$9(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$9, [..._cache[0] || (_cache[0] = [
    vue.createElementVNode("path", { d: "M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z" }, null, -1)
  ])]);
}
var __unplugin_components_6 = { name: "fluency-github", render: render$9 };
const _hoisted_1$8 = {
  height: "1.2em",
  width: "1.2em",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48"
};
function render$8(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$8, [..._cache[0] || (_cache[0] = [
    vue.createElementVNode("path", { d: "M 16.671875 7.2148438 C 16.486405 7.2190874 16.299581 7.2386152 16.113281 7.2734375 C 13.574331 7.7479578 10.975933 8.649134 8.3554688 9.7148438 A 1.50015 1.50015 0 0 0 7.7226562 10.201172 C 2.0175326 17.763657 0.3684573 25.710581 1.2402344 33.605469 A 1.50015 1.50015 0 0 0 1.9570312 34.726562 C 5.0443136 36.584848 8.2440569 38.215846 11.642578 39.337891 C 13.115662 39.823695 14.751851 39.27377 15.628906 37.992188 L 17.027344 35.945312 C 17.581741 36.085368 18.144758 36.213605 18.714844 36.328125 C 20.410438 36.733685 22.175039 36.957031 23.988281 36.957031 C 25.981196 36.957031 27.915944 36.694149 29.763672 36.207031 C 30.150613 36.12236 30.537903 36.039741 30.917969 35.943359 L 32.390625 38.035156 C 33.27394 39.291311 34.892743 39.826103 36.349609 39.345703 C 39.756167 38.223569 42.960978 36.588499 46.054688 34.726562 A 1.50015 1.50015 0 0 0 46.773438 33.605469 C 47.6452 25.71071 45.995291 17.763742 40.289062 10.201172 A 1.50015 1.50015 0 0 0 39.658203 9.7148438 C 37.037148 8.6478745 34.438942 7.7478833 31.900391 7.2734375 C 30.408472 6.9945742 28.892989 7.7176076 28.173828 9.0546875 L 28.15625 9.0878906 C 26.973043 8.9716886 25.763955 8.862565 24.005859 8.9023438 C 22.246769 8.8617578 21.039043 8.9711398 19.855469 9.0878906 L 19.837891 9.0546875 C 19.208719 7.8862268 17.970165 7.1851384 16.671875 7.2148438 z M 16.826172 10.216797 C 16.982233 10.235833 17.117055 10.3276 17.197266 10.476562 L 17.660156 11.335938 A 1.50015 1.50015 0 0 0 19.175781 12.111328 C 20.401057 11.950157 21.866217 11.849961 23.970703 11.900391 A 1.50015 1.50015 0 0 0 24.041016 11.900391 C 26.144782 11.850921 27.611838 11.951001 28.837891 12.111328 A 1.50015 1.50015 0 0 0 30.353516 11.335938 L 30.814453 10.476562 C 30.919293 10.281643 31.127575 10.18152 31.347656 10.222656 C 33.443438 10.61435 35.747401 11.417301 38.115234 12.363281 C 42.996223 18.995645 44.42905 25.642641 43.8125 32.535156 C 41.062959 34.147542 38.284264 35.549515 35.410156 36.496094 C 35.193022 36.567694 34.974435 36.496392 34.84375 36.310547 L 33.742188 34.746094 C 34.104612 34.573012 34.464659 34.394563 34.816406 34.203125 A 1.50015 1.50015 0 1 0 33.382812 31.568359 C 31.734964 32.4652 29.951905 33.12537 28.074219 33.523438 C 26.764025 33.745094 25.40575 33.885414 23.978516 33.914062 C 22.625605 33.886829 21.326145 33.761688 20.072266 33.560547 C 18.131495 33.167227 16.290693 32.492226 14.59375 31.568359 A 1.50015 1.50015 0 0 0 13.876953 31.375 A 1.50015 1.50015 0 0 0 13.160156 34.203125 C 13.506722 34.391805 13.86178 34.567432 14.21875 34.738281 L 13.152344 36.298828 C 13.023796 36.486666 12.802248 36.561303 12.583984 36.490234 C 9.7179766 35.544001 6.9431409 34.144986 4.2011719 32.537109 C 3.5842436 25.643997 5.0177769 18.996357 9.8984375 12.363281 C 12.266754 11.417839 14.568689 10.614274 16.664062 10.222656 C 16.719464 10.212301 16.774152 10.210452 16.826172 10.216797 z M 30.488281 18.966797 C 28.580281 18.966797 27.009766 21.007281 27.009766 23.488281 C 27.009766 25.969281 28.580281 28.009766 30.488281 28.009766 C 32.396281 28.009766 33.966797 25.969281 33.966797 23.488281 C 33.966797 21.007281 32.396281 18.966797 30.488281 18.966797 z M 16.488281 18.992188 C 14.562281 18.992188 12.976563 21.022281 12.976562 23.488281 C 12.976562 25.954281 14.562281 27.982422 16.488281 27.982422 C 18.414281 27.982422 19.998047 25.954281 19.998047 23.488281 C 19.998047 21.022281 18.414281 18.992187 16.488281 18.992188 z" }, null, -1)
  ])]);
}
var __unplugin_components_5 = { name: "fluency-discord", render: render$8 };
const _hoisted_1$7 = {
  height: "1.2em",
  width: "1.2em",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48"
};
function render$7(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$7, [..._cache[0] || (_cache[0] = [
    vue.createElementVNode("path", { d: "M 24 8 C 16.522892 8 10.415747 13.720449 9.6523438 21 L 9 21 C 4.0472805 21 0 25.047281 0 30 C 0 34.952719 4.0472805 39 9 39 L 24 39 L 39 39 C 43.952719 39 48 34.952719 48 30 C 48 25.047281 43.952719 21 39 21 L 38.347656 21 C 37.584253 13.720449 31.477108 8 24 8 z M 24 11 C 30.369415 11 35.5 16.130585 35.5 22.5 A 1.50015 1.50015 0 0 0 37 24 L 39 24 C 42.331281 24 45 26.668719 45 30 C 45 33.331281 42.331281 36 39 36 L 24 36 L 9 36 C 5.6687195 36 3 33.331281 3 30 C 3 26.668719 5.6687195 24 9 24 L 11 24 A 1.50015 1.50015 0 0 0 12.5 22.5 C 12.5 16.130585 17.630585 11 24 11 z" }, null, -1)
  ])]);
}
var __unplugin_components_4 = { name: "fluency-cloud", render: render$7 };
const _hoisted_1$6 = {
  height: "1.2em",
  width: "1.2em",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48"
};
function render$6(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$6, [..._cache[0] || (_cache[0] = [
    vue.createElementVNode("path", { d: "M 18.5 9 C 16.032499 9 14 11.032499 14 13.5 L 14 17.5 C 14 18.094042 14.128485 18.65836 14.341797 19.179688 C 12.530639 19.403793 10.881843 20.38207 10.052734 22.039062 A 1.50015 1.50015 0 0 0 10.052734 22.041016 L 8.5742188 25 L 8.0019531 25 C 6.7253728 25 5.4351855 25.493081 4.4648438 26.464844 C 2.5247097 28.404978 2.5247097 31.595022 4.4648438 33.535156 L 7.4648438 36.535156 C 8.4341028 37.504415 9.7223036 38 11 38 L 37 38 C 38.277696 38 39.565366 37.505482 40.535156 36.537109 A 1.50015 1.50015 0 0 0 40.535156 36.535156 L 43.535156 33.535156 C 45.47529 31.595022 45.47529 28.404978 43.535156 26.464844 C 42.564282 25.494016 41.276006 25 40 25 L 39.425781 25 L 37.947266 22.041016 A 1.50015 1.50015 0 0 0 37.947266 22.039062 C 37.016591 20.179132 35.10736 19 33.027344 19 L 32.498047 19 C 33.181135 18.495664 33.702745 17.804589 33.90625 17 L 41.001953 17 A 2.5 2.5 0 0 0 43 18 A 2.5 2.5 0 0 0 43 13 A 2.5 2.5 0 0 0 41.001953 14 L 33.914062 14 C 33.691349 12.976738 33.023603 12.085043 32.064453 11.605469 L 28.015625 9.5800781 C 27.250635 9.1968938 26.407571 9 25.554688 9 L 18.5 9 z M 18.5 12 L 25.554688 12 C 25.943803 12 26.326865 12.09086 26.671875 12.263672 A 1.50015 1.50015 0 0 0 26.673828 12.263672 L 30.722656 14.289062 C 30.895133 14.375303 31.001698 14.54546 31.001953 14.738281 L 31.001953 15.240234 A 1.50015 1.50015 0 0 0 31.001953 15.751953 L 31.001953 16.263672 C 31.001953 16.457028 30.898142 16.624171 30.724609 16.710938 L 26.673828 18.736328 C 26.324476 18.910021 25.943506 19 25.556641 19 L 18.5 19 C 17.653501 19 17 18.346499 17 17.5 L 17 13.5 C 17 12.653501 17.653501 12 18.5 12 z M 14.972656 22 L 18.5 22 L 25.556641 22 L 33.027344 22 C 33.977327 22 34.838347 22.532791 35.263672 23.382812 L 36.074219 25 L 11.925781 25 L 12.736328 23.382812 L 12.736328 23.380859 C 13.161889 22.531669 14.023175 22 14.972656 22 z M 8.0019531 28 L 9.4492188 28 L 38.5 28 L 40 28 C 40.513994 28 41.016937 28.188811 41.414062 28.585938 C 42.207929 29.379803 42.207929 30.620198 41.414062 31.414062 L 38.414062 34.414062 C 38.016076 34.81073 37.513698 35 37 35 L 11 35 C 10.485696 35 9.9826783 34.810803 9.5859375 34.414062 L 6.5859375 31.414062 C 5.7920716 30.620197 5.7920716 29.379802 6.5859375 28.585938 A 1.50015 1.50015 0 0 0 6.5878906 28.583984 C 6.9835519 28.187793 7.4865335 28 8.0019531 28 z M 13.5 29 A 2.5 2.5 0 0 0 13.5 34 A 2.5 2.5 0 0 0 13.5 29 z M 20.5 29 A 2.5 2.5 0 0 0 20.5 34 A 2.5 2.5 0 0 0 20.5 29 z M 27.5 29 A 2.5 2.5 0 0 0 27.5 34 A 2.5 2.5 0 0 0 27.5 29 z M 34.5 29 A 2.5 2.5 0 0 0 34.5 34 A 2.5 2.5 0 0 0 34.5 29 z" }, null, -1)
  ])]);
}
var __unplugin_components_3 = { name: "fluency-tank", render: render$6 };
const _hoisted_1$5 = {
  height: "1.2em",
  width: "1.2em",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48"
};
function render$5(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$5, [..._cache[0] || (_cache[0] = [
    vue.createElementVNode("path", { d: "M 32 6 C 26.568583 6 22.160643 10.388731 22.042969 15.792969 C 17.240727 15.216998 14.113589 13.421507 12.195312 11.652344 C 10.067982 9.6903754 9.3945312 7.9472656 9.3945312 7.9472656 A 1.50015 1.50015 0 0 0 6.8007812 7.5996094 C 6.8007812 7.5996094 5 10 5 13.5 C 5 15.500985 5.6317952 16.981554 6.3847656 18.236328 C 6.3570276 18.223338 6.1699219 18.158203 6.1699219 18.158203 A 1.50015 1.50015 0 0 0 4.0058594 19.636719 C 4.0058594 19.636719 4.5832039 23.856843 8.5507812 26.941406 L 8.1367188 27.044922 A 1.50015 1.50015 0 0 0 7.1972656 29.244141 C 7.1972656 29.244141 7.8700527 30.382221 9.2792969 31.580078 C 10.11485 32.290298 11.34227 33.023169 12.789062 33.701172 C 11.012271 34.35044 8.362818 35 4.5 35 A 1.50015 1.50015 0 0 0 3.3710938 37.488281 C 3.3710938 37.488281 4.5173251 38.751002 6.7832031 39.849609 C 9.0490812 40.948217 12.539474 42 17.5 42 C 26.219697 42 32.484656 37.817151 36.394531 32.515625 C 40.304407 27.214099 42 20.861111 42 16 C 42 15.691547 41.980739 15.387437 41.953125 15.085938 C 44.064371 13.051602 44.856626 11.522235 44.894531 11.447266 C 45.084531 11.066266 45.01375 10.608688 44.71875 10.304688 C 44.42475 9.9996875 43.969031 9.9137969 43.582031 10.091797 L 43.419922 10.166016 C 43.280922 10.230016 43.141953 10.294422 43.001953 10.357422 C 43.408953 9.7084219 43.730125 9.014875 43.953125 8.296875 C 44.077125 7.900875 43.943234 7.4669375 43.615234 7.2109375 C 43.287234 6.9549375 42.835469 6.9275312 42.480469 7.1445312 C 41.258221 7.8873594 40.086652 8.40739 38.867188 8.7558594 C 37.072578 7.0534724 34.656873 6 32 6 z M 32 9 C 35.883178 9 39 12.116822 39 16 C 39 20.138889 37.445593 26.035901 33.980469 30.734375 C 30.515344 35.432849 25.280303 39 17.5 39 C 13.7348 39 11.230189 38.318942 9.3535156 37.582031 C 11.319341 37.276755 13.011947 36.869367 14.228516 36.398438 C 16.338182 35.581792 17.476563 34.638672 17.476562 34.638672 A 1.50015 1.50015 0 0 0 16.863281 32.044922 C 14.140556 31.364241 12.394328 30.263307 11.298828 29.345703 L 12.863281 28.955078 A 1.50015 1.50015 0 0 0 13.039062 26.099609 C 9.7939415 24.851486 8.4312292 23.086373 7.734375 21.607422 C 8.5823538 21.782967 9.3718961 22 10.5 22 A 1.50015 1.50015 0 0 0 11.169922 19.158203 C 11.169922 19.158203 8 17.7 8 13.5 C 8 12.745947 8.2088435 12.268355 8.3613281 11.697266 C 8.884507 12.400354 9.3156815 13.07859 10.160156 13.857422 C 12.734824 16.231954 16.990366 18.653154 23.419922 18.998047 A 1.50015 1.50015 0 0 0 25 17.5 L 25 16 C 25 12.116822 28.116822 9 32 9 z" }, null, -1)
  ])]);
}
var __unplugin_components_2 = { name: "fluency-twitter", render: render$5 };
const _hoisted_1$4 = {
  height: "1.2em",
  width: "1.2em",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48"
};
function render$4(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$4, [..._cache[0] || (_cache[0] = [
    vue.createElementVNode("path", { d: "M 23.857422 8.5 C 17.504717 8.5 11.602344 8.9526234 8.234375 9.65625 A 1.50015 1.50015 0 0 0 8.2128906 9.6621094 C 5.6754768 10.230693 3.2861897 12.048234 2.7832031 14.894531 A 1.50015 1.50015 0 0 0 2.78125 14.90625 C 2.394836 17.200265 2 20.190694 2 24.5 C 2 28.801151 2.3961903 31.712324 2.8847656 34.126953 C 3.4000756 36.889296 5.7342165 38.761817 8.3105469 39.337891 A 1.50015 1.50015 0 0 0 8.3476562 39.347656 C 11.86271 40.040284 17.598467 40.5 23.951172 40.5 C 30.303877 40.5 36.042686 40.04028 39.558594 39.347656 A 1.50015 1.50015 0 0 0 39.595703 39.337891 C 42.133117 38.769306 44.522404 36.951766 45.025391 34.105469 A 1.50015 1.50015 0 0 0 45.029297 34.083984 C 45.409789 31.743169 45.902812 28.755621 46 24.439453 A 1.50015 1.50015 0 0 0 46 24.40625 C 46 20.087697 45.50571 17.078675 45.023438 14.695312 C 44.512192 11.927074 42.175378 10.049478 39.595703 9.4726562 A 1.50015 1.50015 0 0 0 39.476562 9.4511719 C 36.0464 8.9689502 30.211115 8.5 23.857422 8.5 z M 23.857422 11.5 C 30.017774 11.5 35.726167 11.961361 38.966797 12.412109 C 40.559483 12.778239 41.824973 13.890643 42.074219 15.240234 A 1.50015 1.50015 0 0 0 42.078125 15.265625 C 42.543492 17.56209 42.996187 20.292628 42.998047 24.384766 C 42.904597 28.49001 42.450899 31.244675 42.070312 33.585938 C 41.810413 35.044446 40.592 36.034419 38.953125 36.40625 C 35.805209 37.023818 30.142051 37.5 23.951172 37.5 C 17.759247 37.5 12.097629 37.021978 8.9511719 36.404297 C 7.3525116 36.041193 6.081938 34.925434 5.8320312 33.572266 A 1.50015 1.50015 0 0 0 5.8261719 33.546875 C 5.3660305 31.276194 5 28.628694 5 24.5 C 5 20.378688 5.3654221 17.62199 5.7363281 15.417969 C 5.9947549 13.955585 7.2164425 12.963194 8.859375 12.591797 C 11.774266 11.984227 17.659955 11.5 23.857422 11.5 z M 20.460938 16.023438 C 18.668395 16.081606 17 17.525347 17 19.486328 L 17 28.515625 C 17 31.130266 19.966455 32.825862 22.238281 31.542969 A 1.50015 1.50015 0 0 0 22.238281 31.541016 L 30.228516 27.027344 C 32.516764 25.734577 32.516764 22.265423 30.228516 20.972656 L 22.238281 16.458984 C 21.670325 16.138261 21.058451 16.004047 20.460938 16.023438 z M 20.472656 18.980469 C 20.562791 18.985356 20.661175 19.013538 20.761719 19.070312 L 28.751953 23.585938 C 29.157705 23.815171 29.157705 24.186783 28.751953 24.416016 L 20.761719 28.929688 C 20.359545 29.156793 20 28.944984 20 28.515625 L 20 19.486328 C 20 19.271649 20.09013 19.111638 20.230469 19.033203 C 20.300636 18.993988 20.382521 18.975581 20.472656 18.980469 z" }, null, -1)
  ])]);
}
var __unplugin_components_1$1 = { name: "fluency-youtube", render: render$4 };
const _hoisted_1$3 = {
  height: "1.2em",
  width: "1.2em",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48"
};
function render$3(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$3, [..._cache[0] || (_cache[0] = [
    vue.createElementVNode("path", { d: "M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z" }, null, -1)
  ])]);
}
var __unplugin_components_0$2 = { name: "fluency-instagram", render: render$3 };
var SocialMedia_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$a = vue.defineComponent({
  __name: "SocialMedia",
  __ssrInlineRender: true,
  props: {
    link: {},
    title: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_fluency_instagram = __unplugin_components_0$2;
      const _component_i_fluency_youtube = __unplugin_components_1$1;
      const _component_i_fluency_twitter = __unplugin_components_2;
      const _component_i_fluency_tank = __unplugin_components_3;
      const _component_i_fluency_cloud = __unplugin_components_4;
      const _component_i_fluency_discord = __unplugin_components_5;
      const _component_i_fluency_github = __unplugin_components_6;
      const _component_i_fluency_bandcamp = __unplugin_components_7;
      _push(`<li${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "hidden md:flex" }, _attrs))} data-v-713f3f3f><a class="flex items-center text-contrast hover:text-white transition-colors" target="_blank"${serverRenderer.ssrRenderAttr("href", __props.link)} data-v-713f3f3f>`);
      if (__props.link.includes("instagram")) {
        _push(serverRenderer.ssrRenderComponent(_component_i_fluency_instagram, { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.link.includes("youtube")) {
        _push(serverRenderer.ssrRenderComponent(_component_i_fluency_youtube, { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.link.includes("twitter")) {
        _push(serverRenderer.ssrRenderComponent(_component_i_fluency_twitter, { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.link.includes("newgrounds")) {
        _push(serverRenderer.ssrRenderComponent(_component_i_fluency_tank, { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.link.includes("soundcloud")) {
        _push(serverRenderer.ssrRenderComponent(_component_i_fluency_cloud, { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.link.includes("discord")) {
        _push(serverRenderer.ssrRenderComponent(_component_i_fluency_discord, { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.link.includes("github")) {
        _push(serverRenderer.ssrRenderComponent(_component_i_fluency_github, { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.link.includes("bandcamp")) {
        _push(serverRenderer.ssrRenderComponent(_component_i_fluency_bandcamp, { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</a></li>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/SocialMedia.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var SocialMedia = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-713f3f3f"]]);
let link$4;
if (typeof window !== "undefined") {
  link$4 = document.createElement("link");
  link$4.type = "text/css";
  link$4.rel = "stylesheet";
  link$4.media = "screen,print";
  link$4.href = `/themes/${localStorage.getItem("theme") || "dark"}.css`;
  document.getElementsByTagName("head")[0].appendChild(link$4);
}
const switchTheme = (name2) => {
  link$4.href = `/themes/${name2}.css`;
};
var Header_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$9 = vue.defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const themeState = core.useLocalStorage("theme", "dark");
    vue.watch(themeState, () => switchTheme(themeState.value), { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      const _component_i_fluency_moon = __unplugin_components_0$3;
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["padding py-4 flex w-full flex-col", _ctx.$route.name === "home" && "absolute"]
      }, _attrs))} data-v-7d2e670c><noscript class="bg-red-600 text-white text-sm py-1 px-2 w-full rounded-4px mb-2" data-v-7d2e670c> This site works better with Javascript enabled </noscript><div class="flex items-center justify-between" data-v-7d2e670c><!-- LOGO DOCTOR 6 --><img class="hidden md:flex logo h-5 cursor-pointer"${serverRenderer.ssrRenderAttr("src", _imports_0)} data-v-7d2e670c><ul class="flex w-full justify-between md:justify-end text-contrast gap-4 uppercase text-sm" data-v-7d2e670c><div class="flex gap-4 items-center md:justify-between" data-v-7d2e670c><!-- TUS REDES REALES YA CARGADAS -->`);
      _push(serverRenderer.ssrRenderComponent(SocialMedia, {
        title: "instagram",
        link: "https://www.instagram.com/doctor6prod?igsh=czcydHlwMmcyNGU5"
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(SocialMedia, {
        title: "youtube",
        link: "https://www.youtube.com/@doctorsix6"
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(SocialMedia, {
        title: "discord",
        link: "https://discord.gg/HFQNXYFwwA"
      }, null, _parent));
      _push(`<!-- SECCIONES --><li data-v-7d2e670c>`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: { name: "music" } }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Music`);
          } else {
            return [
              vue.createTextVNode("Music")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-7d2e670c>`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: { name: "services" } }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Services`);
          } else {
            return [
              vue.createTextVNode("Services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-7d2e670c>`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: { name: "biography" } }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Biography`);
          } else {
            return [
              vue.createTextVNode("Biography")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></div><!-- BOT\xD3N DE TEMA (LUNA) --><button class="flex items-center text-contrast" data-v-7d2e670c>`);
      _push(serverRenderer.ssrRenderComponent(_component_i_fluency_moon, null, null, _parent));
      _push(`</button></ul></div></header>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Header.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var Header = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-7d2e670c"]]);
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main$8 = vue.defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = vue.resolveComponent("router-view");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "flex flex-col min-h-screen bg-black" }, _attrs))}><!-- El Header ahora deber\xEDa aparecer arriba -->`);
      _push(serverRenderer.ssrRenderComponent(Header, null, null, _parent));
      _push(`<!-- Aqu\xED se muestra el contenido (Homepage, Biography, etc.) --><main class="flex-grow">`);
      _push(serverRenderer.ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(`</main></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/App.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const routes = [
  {
    path: "/",
    name: "home",
    component: () => Promise.resolve().then(function() {
      return Homepage$1;
    }),
    meta: { title: "Doctor 6 | Home" }
  },
  {
    path: "/biography",
    name: "biography",
    component: () => Promise.resolve().then(function() {
      return Biography$1;
    }),
    meta: { title: "Doctor 6 | Biography" }
  },
  {
    path: "/music",
    name: "music",
    component: () => Promise.resolve().then(function() {
      return Music$1;
    }),
    meta: { title: "Doctor 6 | Music" }
  },
  {
    path: "/services",
    name: "services",
    component: () => Promise.resolve().then(function() {
      return Services$1;
    }),
    meta: { title: "Doctor 6 | Services" }
  },
  {
    path: "/downloads/:category?",
    name: "downloads",
    component: () => Promise.resolve().then(function() {
      return Downloads;
    }),
    meta: { title: "Doctor 6 | Downloads" }
  }
];
var windi = "";
const createApp = viteSsg.ViteSSG(_sfc_main$8, { routes }, ({ router }) => {
});
var logoVideo = "/assets/doctor6logofloat.bcae5f0c.webm";
var Homepage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = vue.defineComponent({
  __name: "Homepage",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><!-- Contenedor principal que centra todo en pantalla --><div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "flex h-screen w-full justify-center items-center overflow-hidden bg-black" }, _attrs))} data-v-6bd2410b><!-- Contenedor del Logo con efecto Click y Hover --><div class="relative flex items-center justify-center cursor-pointer transition-transform duration-500 ease-out hover:scale-110 active:scale-95" data-v-6bd2410b><!-- RESPLANDOR (GLOW) VERDE DE FONDO --><div class="absolute w-[40rem] h-[40rem] bg-green-500/20 filter blur-[100px] rounded-full animate-pulse z-0" data-v-6bd2410b></div><!-- VIDEO DEL LOGO 3D --><video${serverRenderer.ssrRenderAttr("src", vue.unref(logoVideo))} autoplay loop muted playsinline class="relative z-10 w-[30rem] max-w-[85vw] h-auto mix-blend-screen contrast-125 brightness-110 pointer-events-none" data-v-6bd2410b></video></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/views/Homepage.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var Homepage = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-6bd2410b"]]);
var Homepage$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Homepage
});
var Biography_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "padding text-contrast" }, _attrs))} data-v-e748479e><!-- Bio Principal --><section data-v-e748479e><h1 data-v-e748479e>Biography</h1><p data-v-e748479e><strong data-v-e748479e>Doctor 6 (Six)</strong> is an Argentine producer and mixer dedicated to the relentless pursuit of sonic precision. His work explores the contrast between the raw aggression of bass music and the melodic atmospheres of Deep House. <br data-v-e748479e><br data-v-e748479e> Drawing from a background in IT and mechanics, Six views sound as a complex system to be engineered, focusing on &quot;corrupted&quot; textures and industrial glitches. </p><!-- Hito: 15 a\xF1os --><section data-v-e748479e><header data-v-e748479e><h2 data-v-e748479e>At age 15</h2></header><p data-v-e748479e> Six began his journey into production using a basic Pentium 4 PC. What started as teenage beatmaking soon turned into an obsession with audio architecture, leading him to explore piano and professional vocal coaching, while also teaching himself guitar. </p></section><!-- Hito: 23 a\xF1os --><section data-v-e748479e><header data-v-e748479e><h2 data-v-e748479e>At age 23</h2></header><p data-v-e748479e> After completing Sound Technician studies and DJ courses (Vinyl &amp; CDJ), he shifted his focus from beatmaking to the art of mixing. A pivotal mentorship with a Gardel Award-winning engineer marked the beginning of his path as a dedicated mixer. </p></section><!-- Hito: A\xF1os recientes --><section data-v-e748479e><header data-v-e748479e><h2 data-v-e748479e>In recent years</h2></header><p data-v-e748479e> Six has focused on specialized training in bass music and electronic mixing from Germany. Rather than following trends, he is committed to the craft of sound design, constantly refining his output to bridge the gap between technical grit and melodic clarity. </p></section><!-- Hito: Actualidad --><section data-v-e748479e><header data-v-e748479e><h2 data-v-e748479e>Today</h2></header><p data-v-e748479e> His current vision is a collision of worlds: a constant effort to <strong data-v-e748479e>contrast the raw aggression of Bass Music with deep melodic sensitivity</strong>. By merging experimental sound design with true musicality to avoid generic structures, Six continues to build his own sonic universe\u2014a place where industrial machinery and <strong data-v-e748479e>spatial atmospheres</strong> converge. </p></section></section></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/views/Biography.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var Biography = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-e748479e"]]);
var Biography$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Biography
});
const name$3 = "Fenne";
const original$3 = "https://pub-5c9420081d13423a88101ec75f1bb396.r2.dev/fenne%20para%20web%20800x800.jpg";
var fenne$1 = {
  name: name$3,
  original: original$3
};
var __glob_10_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  name: name$3,
  original: original$3,
  "default": fenne$1
});
const name$2 = "Kernel-panic";
const original$2 = "https://pub-5c9420081d13423a88101ec75f1bb396.r2.dev/kernel%20panic%20para%20web%20800x800.jpg";
var kernekPanic = {
  name: name$2,
  original: original$2
};
var __glob_10_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  name: name$2,
  original: original$2,
  "default": kernekPanic
});
const name$1 = "Reboot";
const original$1 = "https://pub-5c9420081d13423a88101ec75f1bb396.r2.dev/reboot%20portada%20web%20800x800.jpg";
var reboot$1 = {
  name: name$1,
  original: original$1
};
var __glob_10_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  name: name$1,
  original: original$1,
  "default": reboot$1
});
const name = "Sistema";
const original = "https://pub-5c9420081d13423a88101ec75f1bb396.r2.dev/sistema%20portada%20para%20web%20800x800.jpg";
var sistema$1 = {
  name,
  original
};
var __glob_10_3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  name,
  original,
  "default": sistema$1
});
const artists$3 = [
  "Doctor 6"
];
const title$3 = "Fenne";
const cover$3 = "Fenne";
const is_remix$3 = false;
const type$3 = "Single";
const date$3 = "Apr 9, 2026";
const link$3 = "https://pub-5c9420081d13423a88101ec75f1bb396.r2.dev/Doctor%206%20-%20Fenne.mp3";
var fenne = {
  artists: artists$3,
  title: title$3,
  cover: cover$3,
  is_remix: is_remix$3,
  type: type$3,
  date: date$3,
  link: link$3
};
var __glob_11_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  artists: artists$3,
  title: title$3,
  cover: cover$3,
  is_remix: is_remix$3,
  type: type$3,
  date: date$3,
  link: link$3,
  "default": fenne
});
const artists$2 = [
  "Doctor 6"
];
const title$2 = "Kernel Panic";
const cover$2 = "Kernel-panic";
const is_remix$2 = false;
const type$2 = "Single";
const date$2 = "Apr 8, 2026";
const link$2 = "https://pub-5c9420081d13423a88101ec75f1bb396.r2.dev/Doctor%206%20-%20Kernel%20Panic.mp3";
var kernelPanic = {
  artists: artists$2,
  title: title$2,
  cover: cover$2,
  is_remix: is_remix$2,
  type: type$2,
  date: date$2,
  link: link$2
};
var __glob_11_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  artists: artists$2,
  title: title$2,
  cover: cover$2,
  is_remix: is_remix$2,
  type: type$2,
  date: date$2,
  link: link$2,
  "default": kernelPanic
});
const artists$1 = [
  "Doctor 6"
];
const title$1 = "Reboot";
const cover$1 = "Reboot";
const is_remix$1 = false;
const type$1 = "Single";
const date$1 = "Apr 9, 2025";
const link$1 = "https://pub-5c9420081d13423a88101ec75f1bb396.r2.dev/Doctor%206%20-%20Reboot.mp3";
var reboot = {
  artists: artists$1,
  title: title$1,
  cover: cover$1,
  is_remix: is_remix$1,
  type: type$1,
  date: date$1,
  link: link$1
};
var __glob_11_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  artists: artists$1,
  title: title$1,
  cover: cover$1,
  is_remix: is_remix$1,
  type: type$1,
  date: date$1,
  link: link$1,
  "default": reboot
});
const artists = [
  "Doctor 6"
];
const title = "Sistema";
const cover = "Sistema";
const is_remix = false;
const type = "Single";
const date = "Apr 9, 2024";
const link = "https://pub-5c9420081d13423a88101ec75f1bb396.r2.dev/Doctor%206%20-%20Sistema.mp3";
var sistema = {
  artists,
  title,
  cover,
  is_remix,
  type,
  date,
  link
};
var __glob_11_3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  artists,
  title,
  cover,
  is_remix,
  type,
  date,
  link,
  "default": sistema
});
var Music_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = vue.defineComponent({
  __name: "Music",
  __ssrInlineRender: true,
  setup(__props) {
    const songFiles = { "../assets/songs/fenne.json": __glob_11_0, "../assets/songs/kernel-panic.json": __glob_11_1, "../assets/songs/reboot.json": __glob_11_2, "../assets/songs/sistema.json": __glob_11_3 };
    const songs = Object.values(songFiles);
    const coverFiles = { "../assets/covers/fenne.json": __glob_10_0, "../assets/covers/kernek-panic.json": __glob_10_1, "../assets/covers/reboot.json": __glob_10_2, "../assets/covers/sistema.json": __glob_10_3 };
    const covers = Object.values(coverFiles);
    const sortedSongs = vue.computed(() => {
      return [...songs].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      });
    });
    const getCoverImage = (coverName) => {
      const found = covers.find((c) => c.name === coverName);
      return found ? found.original : "https://placeholder.com";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "padding text-contrast" }, _attrs))} data-v-db3db81c><section data-v-db3db81c><!-- Solo dejamos el t\xEDtulo para un look m\xE1s minimalista --><h1 class="text-4xl font-bold" data-v-db3db81c>Music</h1><!-- Lista de Canciones --><div class="mt-10 flex flex-col gap-6" data-v-db3db81c><!--[-->`);
      serverRenderer.ssrRenderList(sortedSongs.value, (song) => {
        _push(`<div class="flex flex-col md:flex-row items-center gap-6 bg-theme-200 p-6 rounded-lg border border-theme-300" data-v-db3db81c><!-- Portada --><img${serverRenderer.ssrRenderAttr("src", getCoverImage(song.cover))} class="w-32 h-32 rounded shadow-2xl object-cover" data-v-db3db81c><div class="flex-1 w-full" data-v-db3db81c><div class="flex justify-between items-start mb-4" data-v-db3db81c><div data-v-db3db81c><h2 class="text-2xl font-bold text-title" data-v-db3db81c>${serverRenderer.ssrInterpolate(song.title)}</h2><p class="text-theme-700" data-v-db3db81c>${serverRenderer.ssrInterpolate(song.artists.join(" & "))}</p></div><span class="text-sm opacity-50 uppercase tracking-widest" data-v-db3db81c>${serverRenderer.ssrInterpolate(song.type)}</span></div><!-- Reproductor con Sincronizaci\xF3n --><audio controls${serverRenderer.ssrRenderAttr("src", song.link)} preload="none" class="w-full h-10 custom-player" data-v-db3db81c> Your browser does not support the audio element. </audio></div></div>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/views/Music.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var Music = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-db3db81c"]]);
var Music$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Music
});
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "padding py-20 flex flex-col gap-8 min-h-screen" }, _attrs))}><section class="flex flex-col gap-4"><h1 class="text-4xl uppercase font-bold text-contrast">Services</h1><p class="text-contrast/60 leading-relaxed max-w-2xl text-lg"> Aqu\xED pod\xE9s contratar mis servicios profesionales de producci\xF3n musical. </p></section><!-- Ejemplo de c\xF3mo podr\xEDas poner un servicio --><section class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="border border-contrast/10 p-6 rounded-lg bg-contrast/5"><h2 class="text-xl font-bold uppercase">Mezcla &amp; Mastering</h2><p class="text-contrast/60 mt-2">Finalizaci\xF3n profesional para tus tracks (WAV 44.1kHz / 24bit).</p><p class="mt-4 font-mono text-accent text-xl">$---</p></div></section></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/views/Services.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var Services = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
var Services$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Services
});
const _hoisted_1$2 = {
  height: "1.2em",
  width: "1.2em",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48"
};
function render$2(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [
    vue.createElementVNode("path", { d: "M 9.0996094 4 C 6.3007442 4 4 6.3007442 4 9.0996094 L 4 37.900391 C 4 40.699256 6.3007442 43 9.0996094 43 L 37.900391 43 C 40.699256 43 43 40.699256 43 37.900391 L 43 27.855469 A 1.50015 1.50015 0 0 0 43 27.464844 L 43 9.0996094 C 43 6.3007442 40.699256 4 37.900391 4 L 9.0996094 4 z M 9.0996094 7 L 37.900391 7 C 39.077525 7 40 7.9224746 40 9.0996094 L 40 26.875 C 39.71639 27.039107 39.404057 27.196325 39.087891 27.310547 C 38.539094 27.50881 37.990138 27.529278 37.990234 27.529297 C 36.120993 27.156459 34.760474 26.997816 33.025391 27.576172 C 31.546409 28.069166 30.445926 29.095191 29.431641 29.904297 C 28.417355 30.713402 27.449903 31.146484 27.5 31.146484 C 27.388227 31.146484 26.842972 30.991276 26.064453 30.726562 C 25.285934 30.461855 24.25 30.146484 23 30.146484 C 22.099043 30.146484 21.120495 30.309436 20.150391 30.53125 C 20.16719 30.200718 20.191167 29.874874 20.228516 29.568359 C 20.300516 28.975359 19.546875 28.666812 19.171875 29.132812 C 18.499875 29.968812 17.927734 30.738281 17.927734 30.738281 C 17.927734 30.738281 16.945312 28.778359 16.945312 26.818359 C 16.945312 24.535359 16.576844 24.2355 15.964844 20.9375 C 15.668844 19.3415 15.634219 19.383422 15.449219 18.357422 C 14.548219 13.365422 15.449 10.697 14.5 10.5 C 13.919 10.38 13.500953 11.999719 13.376953 12.886719 C 13.186953 14.243719 13.068437 15.205156 13.023438 16.035156 L 13.023438 23.878906 C 13.023438 25.838906 12.042969 28.778766 12.042969 29.759766 C 12.042969 30.112902 12.182505 30.604546 12.345703 31.121094 C 10.725974 30.758948 8.951902 30.468718 7 30.255859 L 7 9.0996094 C 7 7.9224746 7.9224746 7 9.0996094 7 z M 21 8 A 1 1 0 0 0 21 10 A 1 1 0 0 0 21 8 z M 36.5 9 A 1.5 1.5 0 0 0 36.5 12 A 1.5 1.5 0 0 0 36.5 9 z M 10 12 A 1 1 0 0 0 10 14 A 1 1 0 0 0 10 12 z M 20.984375 12.015625 C 19.462284 12.015625 18.058179 12.592145 17.001953 13.535156 A 1.50015 1.50015 0 1 0 18.998047 15.773438 C 19.527821 15.300448 20.214466 15.015625 20.984375 15.015625 A 1.50015 1.50015 0 1 0 20.984375 12.015625 z M 24.984375 12.015625 A 1.50015 1.50015 0 1 0 24.984375 15.015625 C 26.647254 15.015625 27.96875 16.336717 27.96875 18 A 1.50015 1.50015 0 1 0 30.96875 18 C 30.96875 14.713283 28.271496 12.015625 24.984375 12.015625 z M 24.492188 17.494141 A 1.50015 1.50015 0 0 0 23.015625 19.015625 C 23.015625 22.302746 25.713283 25 29 25 A 1.50015 1.50015 0 1 0 29 22 C 27.336717 22 26.015625 20.678504 26.015625 19.015625 A 1.50015 1.50015 0 0 0 24.492188 17.494141 z M 36.556641 20.847656 A 1.50015 1.50015 0 0 0 35.501953 21.242188 C 34.971983 21.714682 34.285534 22 33.515625 22 A 1.50015 1.50015 0 1 0 33.515625 25 C 35.037716 25 36.442017 24.423926 37.498047 23.482422 A 1.50015 1.50015 0 0 0 36.556641 20.847656 z M 9.5644531 22 A 1.5 1.5 0 0 0 9.5644531 25 A 1.5 1.5 0 0 0 9.5644531 22 z M 21.5 24.5 A 1 1 0 0 0 21.5 26.5 A 1 1 0 0 0 21.5 24.5 z M 35.476562 30.152344 C 35.946537 30.171121 36.486965 30.288125 37.402344 30.470703 C 38.360655 30.662365 39.182307 30.456453 40 30.167969 L 40 37.900391 C 40 39.077525 39.077525 40 37.900391 40 L 25.314453 40 C 24.517291 38.922637 22.828125 38.578125 22.828125 38.578125 C 22.828125 38.578125 24.788656 35.638203 21.847656 34.658203 C 21.266242 34.463755 20.88309 34.050852 20.617188 33.535156 C 21.572099 33.316391 22.468068 33.146484 23 33.146484 C 23.75 33.146484 24.405675 33.331119 25.097656 33.566406 C 25.789637 33.801694 26.493773 34.146484 27.5 34.146484 C 29.224097 34.146484 30.241317 33.095145 31.300781 32.25 C 32.360245 31.404855 33.422591 30.607834 33.974609 30.423828 C 34.607068 30.213009 35.006588 30.133566 35.476562 30.152344 z M 7 33.275391 C 9.1778836 33.523052 11.121802 33.857828 12.804688 34.28125 C 12.301526 35.095818 11.064453 36.033811 11.064453 37.599609 C 11.064453 38.863099 11.8743 39.315898 12.453125 40 L 9.0996094 40 C 7.9224746 40 7 39.077525 7 37.900391 L 7 33.275391 z" }, null, -1)
  ])]);
}
var __unplugin_components_1 = { name: "fluency-cover", render: render$2 };
const _hoisted_1$1 = {
  height: "1.2em",
  width: "1.2em",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48"
};
function render$1(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    vue.createElementVNode("path", { d: "M 18.429688 4.9863281 A 1.50015 1.50015 0 0 0 17.902344 5.1054688 C 10.622496 5.3956354 6 10.412918 6 15.742188 C 6 18.323633 6.6600191 20.976174 8.3808594 22.904297 C 10.1017 24.83242 12.974455 25.771308 16.373047 24.898438 A 1.5002454 1.5002454 0 0 0 16.560547 24.833984 A 3.5 3.5 0 0 0 15.5 18 A 3.5 3.5 0 0 0 12.029297 21.955078 C 11.473864 21.715798 11.018528 21.353746 10.619141 20.90625 C 9.5899805 19.753123 9 17.782742 9 15.742188 C 9 12.112211 12.020323 8.3468031 17.939453 8.0917969 C 22.718688 12.714902 24.598779 16.92465 24.822266 20.664062 C 25.053848 24.53894 23.556371 28.068945 21.345703 31.132812 C 16.924368 37.260548 9.7851563 41.181641 9.7851562 41.181641 A 1.50015 1.50015 0 0 0 10.734375 43.982422 C 10.734375 43.982422 16.679559 43.051788 22.675781 40.025391 C 28.672004 36.998993 35 31.613548 35 22.931641 C 35 15.862912 32.116988 11.209131 28.599609 8.5175781 C 25.27432 5.9730148 21.603417 5.1703101 19.013672 5.0820312 A 1.50015 1.50015 0 0 0 18.429688 4.9863281 z M 22.738281 8.8613281 C 24.080891 9.3180197 25.49184 9.9181974 26.775391 10.900391 C 29.633012 13.087087 32 16.64937 32 22.931641 C 32 30.168733 26.827996 34.567851 21.324219 37.345703 C 20.384382 37.820055 19.645396 37.958702 18.730469 38.328125 C 20.475603 36.772984 22.239296 35.023032 23.779297 32.888672 C 26.256129 29.455914 28.102402 25.237029 27.818359 20.484375 C 27.597639 16.791242 26.020636 12.864007 22.738281 8.8613281 z M 40 16 A 2 2 0 0 0 40 20 A 2 2 0 0 0 40 16 z M 40 27 A 2 2 0 0 0 40 31 A 2 2 0 0 0 40 27 z" }, null, -1)
  ])]);
}
var __unplugin_components_0$1 = { name: "fluency-bass-clef", render: render$1 };
var DownloadCategory_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = vue.defineComponent({
  __name: "DownloadCategory",
  __ssrInlineRender: true,
  props: {
    category: {},
    desc: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      _push(serverRenderer.ssrRenderComponent(_component_router_link, vue.mergeProps({
        to: { name: "downloads", params: { category: __props.category } },
        class: "category w-full border-2 text-contrast border-transparent hover:border-accent hover:text-accent text-center sm:text-left sm:flex-row flex-col flex py-4 px-6 sm:gap-4 gap-1 rounded-4px"
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full flex sm:justify-start justify-center items-center text-xl md:text-4xl" data-v-211f7ad2${_scopeId}>`);
            serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><div class="flex gap-1 flex-col" data-v-211f7ad2${_scopeId}><h1 class="capitalize" data-v-211f7ad2${_scopeId}>${serverRenderer.ssrInterpolate(__props.category)}</h1><p class="hidden md:flex text-sm" data-v-211f7ad2${_scopeId}>${serverRenderer.ssrInterpolate(__props.desc)}</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "h-full flex sm:justify-start justify-center items-center text-xl md:text-4xl" }, [
                vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ]),
              vue.createVNode("div", { class: "flex gap-1 flex-col" }, [
                vue.createVNode("h1", { class: "capitalize" }, vue.toDisplayString(__props.category), 1),
                vue.createVNode("p", { class: "hidden md:flex text-sm" }, vue.toDisplayString(__props.desc), 1)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/DownloadCategory.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var DownloadCategory = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-211f7ad2"]]);
const _sfc_main$2 = vue.defineComponent({
  __name: "Cover",
  __ssrInlineRender: true,
  props: {
    cover: {}
  },
  setup(__props) {
    const props = __props;
    const preview = vue.computed(() => {
      var _a, _b, _c;
      if ((_a = props.cover) == null ? void 0 : _a.preview)
        return (_b = props.cover) == null ? void 0 : _b.preview;
      else
        return (_c = props.cover) == null ? void 0 : _c.original;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "cursor-pointer box-content cover rounded-4px relative w-full" }, _attrs))}><div class="flex gap-2 bg-white text-text">`);
      if (__props.cover) {
        _push(`<a target="_blank "${serverRenderer.ssrRenderAttr("href", __props.cover.original)}><img class="w-full h-full"${serverRenderer.ssrRenderAttr("src", preview.value)}${serverRenderer.ssrRenderAttr("alt", __props.cover.name)}></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Cover.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _hoisted_1 = {
  height: "1.2em",
  width: "1.2em",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48"
};
function render(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    vue.createElementVNode("path", { d: "M 11.5 6 C 8.467 6 6 8.467 6 11.5 L 6 36.5 C 6 39.533 8.467 42 11.5 42 L 12 42 L 12 27.5 C 12 25.57 13.57 24 15.5 24 L 32.5 24 C 34.43 24 36 25.57 36 27.5 L 36 42 L 36.5 42 C 39.533 42 42 39.533 42 36.5 L 42 15.5 C 42 15.072 41.816094 14.663906 41.496094 14.378906 L 32.496094 6.3789062 C 32.350094 6.2489063 32.181 6.1557969 32 6.0917969 L 32 14.5 C 32 16.43 30.43 18 28.5 18 L 16.5 18 C 14.57 18 13 16.43 13 14.5 L 13 6 L 11.5 6 z M 16 6 L 16 14.5 C 16 14.776 16.224 15 16.5 15 L 28.5 15 C 28.776 15 29 14.776 29 14.5 L 29 6 L 16 6 z M 15.5 27 C 15.224 27 15 27.224 15 27.5 L 15 42 L 33 42 L 33 27.5 C 33 27.224 32.776 27 32.5 27 L 15.5 27 z" }, null, -1)
  ])]);
}
var __unplugin_components_0 = { name: "fluency-save", render };
var Song_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = vue.defineComponent({
  __name: "Song",
  __ssrInlineRender: true,
  props: {
    song: {},
    cover: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_fluency_save = __unplugin_components_0;
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "hover:bg-theme-300 rounded-4px overflow-hidden flex flex-col w-full" }, _attrs))} data-v-c23a308e><div class="flex justify-between items-center" data-v-c23a308e><div class="flex items-center gap-4" data-v-c23a308e><div class="w-24 min-w-24 h-24 min-h-24" data-v-c23a308e>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$2, { cover: __props.cover }, null, _parent));
      _push(`</div><div class="flex flex-col w-auto md:w-64" data-v-c23a308e><h1 class="text-lg text-title" data-v-c23a308e>${serverRenderer.ssrInterpolate(__props.song.is_remix ? __props.song.title + " (Geoxor Remix)" : __props.song.title)}</h1><p class="text-theme-700" data-v-c23a308e>${serverRenderer.ssrInterpolate(__props.song.artists.join(" & "))}</p></div><p class="hidden md:flex text-theme-700 w-32" data-v-c23a308e>${serverRenderer.ssrInterpolate(__props.song.date)}</p><label class="${serverRenderer.ssrRenderClass([__props.song.type.toLowerCase(), "bg-accent border-accent text-accent"])}" data-v-c23a308e>${serverRenderer.ssrInterpolate(__props.song.type)}</label>`);
      if (__props.song.is_remix) {
        _push(`<label class="remix" data-v-c23a308e>Remix</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center gap-4 px-4" data-v-c23a308e><a target="_blank" download${serverRenderer.ssrRenderAttr("href", __props.song.link)} class="rounded-full flex items-center gap-2 border-2 border-accent select-none bg-accent h-min text-white px-4 py-2" data-v-c23a308e>`);
      _push(serverRenderer.ssrRenderComponent(_component_i_fluency_save, null, null, _parent));
      _push(`<span class="hidden sm:block" data-v-c23a308e>Download</span></a></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Song.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Song = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c23a308e"]]);
const _sfc_main = vue.defineComponent({
  __name: "Downloads",
  __ssrInlineRender: true,
  setup(__props) {
    const coverSearch = vue.ref("");
    const route = vueRouter.useRoute();
    const activeRoute = vue.computed(() => route.params.category);
    const covers = Object.values({ "../assets/covers/fenne.json": __glob_10_0, "../assets/covers/kernek-panic.json": __glob_10_1, "../assets/covers/reboot.json": __glob_10_2, "../assets/covers/sistema.json": __glob_10_3 });
    const songs = Object.values({ "../assets/songs/fenne.json": __glob_11_0, "../assets/songs/kernel-panic.json": __glob_11_1, "../assets/songs/reboot.json": __glob_11_2, "../assets/songs/sistema.json": __glob_11_3 });
    const songToString = (song) => [song.title, song.type, song.cover, song.artists.join(" "), song.is_remix ? "remix" : void 0].join(" ").toLowerCase();
    const sortSongs = (songs2) => songs2.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1);
    const songResults = vue.computed(() => {
      if (coverSearch.value) {
        const lowercase = coverSearch.value.toLowerCase();
        return songs.filter((song) => {
          if (songToString(song).includes(lowercase))
            return song;
        });
      }
      return songs;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_fluency_bass_clef = __unplugin_components_0$1;
      const _component_i_fluency_cover = __unplugin_components_1;
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "flex flex-col h-full gap-2 padding items-center justify-start" }, _attrs))}><div class="flex flex-row gap-2 w-full">`);
      _push(serverRenderer.ssrRenderComponent(DownloadCategory, {
        category: "songs",
        desc: "Official audio files"
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_i_fluency_bass_clef, null, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_i_fluency_bass_clef)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(DownloadCategory, {
        category: "covers",
        desc: "Official high quality artwork"
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_i_fluency_cover, null, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_i_fluency_cover)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (activeRoute.value == "songs") {
        _push(`<div class="flex flex-col gap-2 w-full"><input class="rounded-4px p-2 border-2 border-transparent bg-theme-300 focus:border-accent text-title"${serverRenderer.ssrRenderAttr("value", coverSearch.value)} type="text" placeholder="Search for a song..."><!--[-->`);
        serverRenderer.ssrRenderList(sortSongs(songResults.value), (song) => {
          _push(`<div class="flex flex-col">`);
          _push(serverRenderer.ssrRenderComponent(Song, {
            song,
            cover: vue.unref(covers).find((cover2) => cover2.name === song.cover)
          }, null, _parent));
          _push(`<div class="w-full h-1px mt-2 bg-theme-500"></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeRoute.value == "covers") {
        _push(`<div class="covers grid gap-2 grid-cols-2 md:grid-cols-5"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(covers), (cover2) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$2, { cover: cover2 }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/views/Downloads.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Downloads = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
exports.createApp = createApp;
