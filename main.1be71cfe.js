parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return n(e)||r(e)||o(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function n(e){if(Array.isArray(e))return l(e)}function a(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=o(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,l=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){i=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(i)throw a}}}}function o(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i=document.querySelector("table"),c=document.querySelectorAll("thead > tr > th"),u=function(t){for(var r=document.querySelectorAll("tbody > tr"),n=function(n){t.target===c[n]&&(r=e(r).sort(function(e,r){var a=e.querySelectorAll("td")[n].innerText,o=r.querySelectorAll("td")[n].innerText;return"Age"===t.target.innerText?t.target.isSorted?+o-+a:+a-+o:"Salary"===t.target.innerText?(a=parseFloat(a.slice(1)),o=parseFloat(o.slice(1)),t.target.isSorted?+o-+a:+a-+o):t.target.isSorted?o.localeCompare(a):a.localeCompare(o)}))},o=0;o<5;o++)n(o);var l,i=a(r);try{for(i.s();!(l=i.n()).done;){var u=l.value;document.querySelector("tbody").append(u)}}catch(m){i.e(m)}finally{i.f()}t.target.isSorted?t.target.isSorted=!1:t.target.isSorted=!0;var d,s=a(c);try{for(s.s();!(d=s.n()).done;){var f=d.value;f!==t.target&&(f.isSorted=!1)}}catch(m){s.e(m)}finally{s.f()}};i.addEventListener("click",u),document.querySelector("table").addEventListener("click",function(e){var t,r=a(document.querySelectorAll("tbody > tr"));try{for(r.s();!(t=r.n()).done;){var n=t.value;e.target.closest("tr")===n?n.classList.add("active"):n.classList.remove("active")}}catch(o){r.e(o)}finally{r.f()}});var d=document.createElement("form");d.className="new-employee-form";var s=["Name","Position","Office","Age","Salary"],f=["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"];function m(e,t){for(var r=0;r<e.length;r++){var n=document.createElement("option");n.value=e[r].toLocaleLowerCase(),n.innerText=e[r],t.append(n)}}for(var y=0;y<5;y++){var p=document.createElement("label"),v=document.createElement("input");p.innerText=s[y]+":",v.type="text","Age"!==s[y]&&"Salary"!==s[y]||(v.type="number"),"Office"===s[y]&&m(f,v=document.createElement("select")),v.dataset.qa=s[y].toLocaleLowerCase(),v.name=s[y].toLocaleLowerCase(),v.required=!0,v.id=s[y].toLocaleLowerCase(),p.htmlFor=v.id,p.append(v),d.append(p)}var g=document.createElement("button");function b(e){for(var t=e.slice(0,1).toUpperCase(),r=1;r<e.length;r++)" "===e[r-1]?t+=" "+e[r].toLocaleUpperCase():t+=e[r];return t}g.innerText="Save to table",g.formMethod="POST",g.type="submit",d.append(g),document.body.append(d),g.addEventListener("click",function(e){e.preventDefault();var t=document.createElement("tr"),r=new FormData(d);if(r.get("name").length<4)h("Name is too short. Minimal name length is 4 letter.","error");else if(+r.get("age")>90||+r.get("age")<18)h("Аge must be between 18 and 90 years old","error");else if(""!==r.get("position")&&""!==r.get("salary")){for(var n=0;n<s.length;n++){var a=document.createElement("td");"salary"===s[n].toLocaleLowerCase()?a.innerText="$"+(+r.get(s[n].toLocaleLowerCase())).toLocaleString("en-US"):a.innerText=b(r.get(s[n].toLocaleLowerCase())),t.append(a)}h("New employee is successfully added to the table.","success"),i.querySelector("tbody").append(t)}else h("Fill in all fields of the form","error")});var S,h=function(e,t){var r=document.createElement("div"),n=document.createElement("h2"),a=document.createElement("p"),o="";switch(t){case"error":o="Error!";break;case"success":o="Done!";break;default:o="Try again."}r.classList.add("notification"),r.classList.add(t),n.className="title",n.innerText=o,a.innerText=e,r.style.bottom="10px",r.style.right="10px",r.append(n),r.append(a),r.dataset.qa="notification",document.body.append(r),setTimeout(function(){r.hidden=!0},2e3)},L=a(document.querySelectorAll("td"));try{var E=function(){var e=S.value;e.addEventListener("dblclick",function(t){var r=document.createElement("input"),n=t.target.innerText;r.className="cell-input",r.type="text",r.value=t.target.innerText,t.target.innerText="",t.target.append(r),r.focus(),r.addEventListener("blur",function(t){""!==r.value?e.innerText=r.value:e.innerText=n,t.target.remove()}),r.addEventListener("keydown",function(t){"Enter"===t.key&&""!==r.value?e.innerText=r.value:"Enter"===t.key&&(e.innerText=n)})})};for(L.s();!(S=L.n()).done;)E()}catch(T){L.e(T)}finally{L.f()}
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.1be71cfe.js.map