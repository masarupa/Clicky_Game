(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,o){e.exports=o(12)},,,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var s=o(0),i=o.n(s),a=o(3),r=o.n(a),c=(o(10),o(1));o(11);function n(e){return i.a.createElement("div",{style:{backgroundColor:"pink",display:"flex",justifyContent:"space-between",alignItems:"center",padding:10}},i.a.createElement("h2",null,"Clicky Game"),i.a.createElement("h3",null,"Click an image to begin!"),i.a.createElement("h4",null,"Score: ",e.score,"  | Top Score:  ",e.newScore," "))}var l=function(e){for(var t,o,s=e.length;0!==s;)o=Math.floor(Math.random()*s),t=e[s-=1],e[s]=e[o],e[o]=t;return e},p="http://webint.io/img/3b112900-7d34-11e9-aef4-f342897fbe7f",m=[];var d=function(){var e=Object(s.useState)([]),t=Object(c.a)(e,2),o=t[0],a=t[1],r=Object(s.useState)(0),d=Object(c.a)(r,2),h=d[0],u=d[1],b=Object(s.useState)(0),f=Object(c.a)(b,2),g=f[0],w=f[1];return Object(s.useEffect)(function(){var e=[{src:"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500",id:1,visible:!0},{src:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",id:2,visible:!0},{src:"https://images.unsplash.com/photo-1486989813814-da4a10a6fc7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",id:3,visible:!0},{src:"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500",id:4,visible:!0},{src:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",id:5,visible:!0},{src:"https://images.unsplash.com/photo-1486989813814-da4a10a6fc7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",id:6,visible:!0},{src:"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500",id:7,visible:!0},{src:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",id:8,visible:!0},{src:"https://images.unsplash.com/photo-1486989813814-da4a10a6fc7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",id:9,visible:!1}];a(e),console.log("effect called!",e)},[]),i.a.createElement("div",null,i.a.createElement(n,{score:h,newScore:g}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},o.map(function(e){var t;return t=!1===e.visible?p:e.src,i.a.createElement("img",{src:t,width:"200",height:"200",style:{margin:10},className:"col-md-3",onClick:function(t){return function(e,t){if(e.stopPropagation(),-1==m.indexOf(t)){u(g=h+1),w(g);var s=l(o);a(s),m.push(t),console.log("USER CLICKED: ",t,m)}else{u(0);var i=l(o);a(i)}}(t,e.id)}})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.036aed09.chunk.js.map