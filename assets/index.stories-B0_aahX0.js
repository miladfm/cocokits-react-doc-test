import{j as o,B as c,d as l,t as f,I as i}from"./doc-page-5zLays8Z.js";import{A as s}from"./addon.model-Bsae6IwI.js";import"./mdx-page-with-theme-section-CCFNwcN6.js";import{r as m,a as u}from"./story-render-conditions-DLc_5R_H.js";import{r as k}from"./preview.base-Ynu-9aKP.js";import{r as y}from"./index-Sx7-C1CO.js";import"./react-18-dacazFhf.js";import"./index-D6h3T3dG.js";import"./chunk-NUUEMKO5-C8BnHNo7.js";import"./iframe-h_a-ZhoG.js";import"../sb-preview/runtime.js";import"./index-XgUrtOhL.js";import"./index-DrFu-skq.js";const h="A button in the context of UI is an interactive element that allows users to perform an action.\r\n\r\nThe `Button` from `@cocokits` provides a flexible, customizable button element within React applications. This component is compatible with multiple design system themes and allows for various configurations, including different button types, colors, and sizes.\r\n",M={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
          import { Button, SvgIcon} from '@cocokits/react-components';

          export const MyComponent = () => {
            return (
              <Button
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
                <% if (disabled) { %> disabled={true} <% } %>
              >
                <% if (leftIcon !== 'none') { %>
                  <SvgIcon icon="YOUR_ICON"/>
                <% } %>
                <%= text %>
                <% if (rightIcon !== 'none') { %>
                  <SvgIcon icon="YOUR_ICON"/>
                <% } %>
              </Button>
            )
          }
          `}],renderConditions:[m("Overview")],hasControl:!0,controls:[{displayName:"Text",default:"Button",storyArgKey:"text",type:s.Text},{displayName:"Left Icon",default:"heartFill",icons:["none","heartFill","heart","link"],storyArgKey:"leftIcon",type:s.Icon},{displayName:"Right Icon",default:"none",icons:["none","heartFill","heart","link"],storyArgKey:"rightIcon",type:s.Icon},{prop:"type",type:s.SelectThemeConfig},{prop:"color",type:s.SelectThemeConfig},{prop:"size",type:s.SelectThemeConfig},{prop:"additional",type:s.SelectThemeConfig},{displayName:"Disabled",default:!1,storyArgKey:"disabled",type:s.Boolean}]}},args:{},render:e=>o.jsxDEV(c,{...k(e),disabled:e.cckControl.disabled,children:[e.cckControl.leftIcon!=="none"&&o.jsxDEV(l,{icon:e.cckIcons[e.cckControl.leftIcon]},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/overview/default.stories.tsx",lineNumber:77,columnNumber:48},void 0),e.cckControl.text,e.cckControl.rightIcon!=="none"&&o.jsxDEV(l,{icon:e.cckIcons[e.cckControl.rightIcon]},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/overview/default.stories.tsx",lineNumber:79,columnNumber:49},void 0)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/overview/default.stories.tsx",lineNumber:73,columnNumber:5},void 0)},O={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[u("type"),m("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { Button } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.type.values.map(type => { %>
                  <Button
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                  >
                    <%= type %>
                  </Button>
                <% }) %>
              </>
            );
          }
          `}]}},render:e=>{var t;return o.jsxDEV(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.type)==null?void 0:t.values.map((n,r)=>o.jsxDEV(c,{type:n,children:n},r,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/overview/type.stories.tsx",lineNumber:43,columnNumber:9},void 0))},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/overview/type.stories.tsx",lineNumber:41,columnNumber:5},void 0)}},_={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[u("color"),m("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { Button } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.color.values.map(color => { %>
                  <Button
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    color='<%= color %>'
                  >
                    <%= color %>
                  </Button>
                <% }) %>
              </>
            );
          }
          `}],controls:[{prop:"type",type:s.SelectThemeConfig}]}},render:e=>{var t;return o.jsxDEV(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((n,r)=>o.jsxDEV(c,{type:e.cckControl.type,color:n,children:n},r,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/overview/color.stories.tsx",lineNumber:46,columnNumber:9},void 0))},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/overview/color.stories.tsx",lineNumber:44,columnNumber:5},void 0)}},L={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[u("size"),m("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { Button } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.size.values.map(size => { %>
                  <Button
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    size='<%= size %>'
                  >
                    Button - <%= size %>
                  </Button>
                <% }) %>
              </>
            );
          }
          `}],controls:[{prop:"type",type:s.SelectThemeConfig}]}},render:e=>{var t;return o.jsxDEV(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((n,r)=>o.jsxDEV(c,{type:e.cckControl.type,size:n,children:["Button - ",n]},r,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/overview/size.stories.tsx",lineNumber:46,columnNumber:9},void 0))},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/overview/size.stories.tsx",lineNumber:44,columnNumber:5},void 0)}},x=f.div`
  display: flex;
  align-items: center;
  gap: var(--volume-host-gap);
`,C=f.span`
  font: var(--volume-text-font);
  color: var(--volume-text-color);
`,a={Host:x,Label:C},p=5,d=0;function N(e){const[t,n]=y.useState(3),r=()=>{switch(t){case 0:return i.volumeMute;case 1:return i.volumeOff;case 2:return i.volumeLow;case 3:return i.volume;case 4:return i.volumeHigh;default:return i.volumeHigh}},b=()=>{n(Math.max(d,Math.min(p,t+1)))},v=()=>{n(Math.max(d,Math.min(p,t-1)))};return o.jsxDEV(a.Host,{children:[o.jsxDEV(c,{size:"sm",onClick:v,children:o.jsxDEV(l,{icon:i.minus},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/examples/volume-button/VolumeButton.tsx",lineNumber:43,columnNumber:9},this)},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/examples/volume-button/VolumeButton.tsx",lineNumber:42,columnNumber:7},this),o.jsxDEV(a.Label,{children:e.cckExampleArgs.name},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/examples/volume-button/VolumeButton.tsx",lineNumber:46,columnNumber:7},this),o.jsxDEV(l,{size:e.cckExampleArgs.volumeIconSize,color:e.cckExampleArgs.volumeIconColor,icon:r()},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/examples/volume-button/VolumeButton.tsx",lineNumber:48,columnNumber:7},this),o.jsxDEV(a.Label,{children:t},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/examples/volume-button/VolumeButton.tsx",lineNumber:54,columnNumber:7},this),o.jsxDEV(c,{size:"sm",onClick:b,children:o.jsxDEV(l,{icon:i.plus},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/examples/volume-button/VolumeButton.tsx",lineNumber:57,columnNumber:9},this)},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/examples/volume-button/VolumeButton.tsx",lineNumber:56,columnNumber:7},this)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/examples/volume-button/VolumeButton.tsx",lineNumber:41,columnNumber:5},this)}N.__docgenInfo={description:"",methods:[],displayName:"VolumeButtonStory",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const F={component:c,title:"UI Components/Button",decorators:[],parameters:{docs:{description:{component:[h].join(`
`)}},cckAddon:{componentName:"button"}},argTypes:{}},R=["Default","Type","Color","Size","VolumeButtonStory"];export{_ as Color,M as Default,L as Size,O as Type,N as VolumeButtonStory,R as __namedExportsOrder,F as default};
