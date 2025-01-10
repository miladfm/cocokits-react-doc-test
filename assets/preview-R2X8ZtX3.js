import{_ as a}from"./iframe-DIQsahOU.js";import"../sb-preview/runtime.js";var i=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34-DpsHcl8A.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>i[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-CFRXHY34-DpsHcl8A.js","./chunk-NUUEMKO5-CVrpJ96j.js","./iframe-DIQsahOU.js","./index-Sx7-C1CO.js","./index-D6h3T3dG.js","./index-XgUrtOhL.js","./index-DrFu-skq.js","./react-18-dacazFhf.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
