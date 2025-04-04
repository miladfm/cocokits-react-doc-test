import{_ as a}from"./iframe-CsW61chZ.js";import"../sb-preview/runtime.js";var i=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34-BuG8fQTd.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>i[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-CFRXHY34-BuG8fQTd.js","./chunk-NUUEMKO5-CwXScIoX.js","./iframe-CsW61chZ.js","./index-qVDZzPEr.js","./index-DM35cTar.js","./index-D2o5vtt7.js","./index-DrFu-skq.js","./react-18-CVVedRj1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
