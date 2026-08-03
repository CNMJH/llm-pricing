function makeEl() {
  return {
    innerHTML: "", textContent: "", value: "", style: {}, dataset: {},
    className: "", children: [],
    addEventListener(){}, appendChild(c){ this.children.push(c); return c; },
    querySelector(){ return makeEl(); }, querySelectorAll(){ return []; },
    classList: { add(){}, remove(){}, toggle(){}, contains(){ return false; } },
    set onclick(f){ this._onclick = f; },
  };
}
const els = {};
function getEl(id) {
  if (!els[id]) {
    const el = makeEl();
    if (id === "calc-model") el.value = JSON.stringify({ in: 1, out: 5 });
    if (id === "calc-in") el.value = "1";
    if (id === "calc-out") el.value = "0.2";
    els[id] = el;
  }
  return els[id];
}
global.window = { PRICING_DATA: null };
global.document = {
  getElementById: getEl,
  createElement: () => makeEl(),
  querySelectorAll: (sel) => {
    const out = [];
    if (sel.includes("sort-row")) out.push(makeEl(), makeEl(), makeEl());
    if (sel.includes("view-toggle")) out.push(makeEl(), makeEl());
    if (sel.includes("thead")) out.push(makeEl());
    return out;
  },
};
global.localStorage = { getItem: () => null, setItem(){} };
const fs = require("fs");
eval(fs.readFileSync("data.js", "utf8"));
const html = fs.readFileSync("index.html", "utf8");
const m = html.match(/<script>([\s\S]*?)<\/script>/);
eval(m[1]);
console.log("SMOKE TEST PASSED：页面初始化无运行时错误");
console.log("providers =", PROVIDERS.length, "| 模型数 =", PROVIDERS.reduce((s,p)=>s+p.models.length,0));
console.log("汇率 RATE =", RATE);
console.log("GPT-5.6 Sol 输入 ¥" + (5*RATE).toFixed(2));
