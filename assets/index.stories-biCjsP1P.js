import{A as o}from"./avatar-Bmi7HTX7.js";import{ag as t}from"./chunk-NUUEMKO5-CIZCJWsL.js";import"./mdx-page-with-theme-section-DGkTWGiE.js";import{r as a,t as c,c as i,s as r,l as s,h as l,j as n,k as p,n as m,o as d,a as f}from"./control.config-CAykUjYI.js";import"./index-qVDZzPEr.js";import"./doc-page-CbJ_Sq1o.js";import{r as h}from"./preview.base-CW2sR83Z.js";import"./iframe-CiK6iBO2.js";import"../sb-preview/runtime.js";import"./index-DM35cTar.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./react-18-CVVedRj1.js";import"./addon.model-Bxedznpl.js";const u=`A visual representation of users that displays profile images, name initials, or custom content through templates. These components handle common user representation scenarios like profile pictures in navigation bars, while providing full control for advanced cases such as custom fallback UIs or loading states. The template support enables developers to override default behaviors while maintaining design system consistency.\r
`,D={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
            import { Avatar } from '@cocokits/react-components';

            export const MyComponent = () => {
              <% if (placeholderSrc) { %> const placeholder="<%= placeholderSrc %>"; <% } %>
              <% if (fallbackSrc) { %> const fallback="<%= fallbackSrc %>"; <% } %>

              return (
                <Avatar
                  <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                  <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                  <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
                  <% if (src) { %> src='<%= src %>' <% } %>
                  <% if (alt) { %> alt='<%= alt %>' <% } %>
                  <% if (!src && label) { %> label='<%= label %>' <% } %>
                  <% if (src && placeholderSrc) { %> placeholderSrc={placeholder} <% } %>
                  <% if (src && fallbackSrc) { %> fallbackSrc={fallback} <% } %>
                  <% if (!clickable) { %> clickable={false} <% } %>
                />
              )
            }
          `}],renderConditions:[a("Overview")],hasControl:!0,controls:[c(),i(),r(),s(""),l("Image alt"),n(),p(),m(),d(),f()]}},args:{},render:e=>t.jsx(o,{...h(e),src:e.cckControl.src,alt:e.cckControl.alt,label:e.cckControl.label,placeholderSrc:e.cckControl.placeholderSrc,fallbackSrc:e.cckControl.fallbackSrc,clickable:e.cckControl.clickable})},I={name:"CustomTemplate",parameters:{docs:{description:{story:"Shows an example of custom content."}},cckAddon:{renderConditions:[a("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
            import { Avatar } from '@cocokits/react-components';

            export const MyComponent = () => {
              return (
                <Avatar
                  <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                  contentTemp={
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%', height: '100%', gap: '2px' }}>
                      <img src="https://i.pravatar.cc/100?img=5" alt="First Avatar" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                      <img src="https://i.pravatar.cc/100?img=12" alt="Second Avatar" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                  }
                />
              )
            }        
          `}],hasControl:!1,singleControls:["size"],controls:[r()]}},render:e=>t.jsx(o,{size:e.cckControl.size,contentTemp:t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",width:"100%",height:"100%",gap:"2px"},children:[t.jsx("img",{src:"https://i.pravatar.cc/100?img=5",alt:"",style:{objectFit:"cover",width:"100%",height:"100%"}}),t.jsx("img",{src:"https://i.pravatar.cc/100?img=12",alt:"",style:{objectFit:"cover",width:"100%",height:"100%"}})]})})},M={component:o,title:"UI Components/Avatar",tags:["status:new"],decorators:[],parameters:{docs:{description:{component:[u].join(`
`)}},cckAddon:{componentName:"avatar"}},argTypes:{}},O=["Default","CustomTemplate"];export{I as CustomTemplate,D as Default,O as __namedExportsOrder,M as default};
