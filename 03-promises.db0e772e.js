!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var u=o("6JpON");function a(e,t){return new Promise((function(n,r){var o=Math.random()>.3;setTimeout((function(){o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}var i=document.querySelector(".form");document.querySelector("button"),document.querySelector('[name="delay"]'),document.querySelector('[name="step"]'),document.querySelector('[name="amount"]');i.addEventListener("submit",(function(t){t.preventDefault();for(var n=t.currentTarget.elements.delay.valueAsNumber,r=t.currentTarget.elements.step.valueAsNumber,o=t.currentTarget.elements.amount.valueAsNumber,i=1;i<=o;i+=1){a(i,n+r*(i-1)).then((function(t){var n=t.position,r=t.delay;e(u).Notify.success(" Fulfilled promise ".concat(n," in ").concat(r,"ms"))})).catch((function(t){var n=t.position,r=t.delay;e(u).Notify.failure(" Rejected promise ".concat(n," in ").concat(r,"ms"))}))}t.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.db0e772e.js.map
