import{_ as a}from"./iframe-h_a-ZhoG.js";import"../sb-preview/runtime.js";var i=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34-YTM7woGV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>i[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-CFRXHY34-YTM7woGV.js","./chunk-NUUEMKO5-C8BnHNo7.js","./iframe-h_a-ZhoG.js","./index-Sx7-C1CO.js","./index-D6h3T3dG.js","./index-XgUrtOhL.js","./index-DrFu-skq.js","./react-18-dacazFhf.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
