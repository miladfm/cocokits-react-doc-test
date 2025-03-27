import{H as n,J as t,K as a,M as d}from"./doc-page-k0DjxlZo.js";import{ag as o}from"./chunk-NUUEMKO5-Ch6kBRqy.js";import"./mdx-page-with-theme-section-BKPFU3aV.js";import{r as c,u as x,t as l,c as k,s as b,a as C,D as u,w as y,d as f,j as p}from"./control.config-DRv8_nye.js";import"./index-qVDZzPEr.js";import{r as g}from"./preview.base-DgZXWlJO.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-xcCtAxcb.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const L="The `Checkbox` from `@cocokits` is an essential UI element designed to enable users to make binary selections within React applications. Whether used in forms, settings panels, or anywhere multiple selections are required, this component provides a reliable and customizable solution that aligns seamlessly with various design system themes.\r\n\r\n#### Features:\r\n- **Theming Flexibility:** Fully compatible with multiple design system themes, ensuring that the checkbox adapts its appearance to match the overall aesthetic of the application without additional configuration.",W={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[c("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
           
            import { Checkbox } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                   <Checkbox
                      <% if (typeof type !== 'undefined') { %> type="<%= type %>" <% } %>
                      <% if (typeof size !== 'undefined') { %> size="<%= size %>" <% } %>
                      <% if (typeof color !== 'undefined') { %> color="<%= color %>" <% } %>
                      <% if (indeterminate) { %> indeterminate <% } %>
                      <% if (disabled) { %> disabled <% } %>
                      <% if (checked) { %> checked <% } %>
                      value="YOUR_VALUE"
                    >
                       Checkbox Label
                    </Checkbox>
                </>
              );
            }
          `}],hasControl:!0,controls:[x("Checkbox Label"),l(),k(),b(),C(),u(),y(),f()]}},render:e=>o.jsx(n,{...g(e),indeterminate:e.cckControl.indeterminate,checked:e.cckControl.checked,disabled:e.cckControl.disabled,children:e.cckControl.text})},B={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[p("size"),c("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
            import { Checkbox } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                  <% themeComponentConfig.size.values.map(size => { %>
                    <Checkbox
                      <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                      size='<%= size %>'
                    >
                      Checkbox - <%= size %>
                    </Checkbox>
                  <% }) %>
                </>
              );
            }
            `}],controls:[l()]}},render:e=>{var r;return o.jsx(o.Fragment,{children:(r=e.cckControl.themeComponentConfig.size)==null?void 0:r.values.map((s,i)=>o.jsxs(n,{type:e.cckControl.type,size:s,children:["Checkbox - ",s]},i))})}},G={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[p("color"),c("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
            import { Checkbox } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                  <% themeComponentConfig.color.values.map(color => { %>
                    <Checkbox
                      <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                      color='<%= color %>'
                    >
                      <%= color %>
                    </Checkbox>
                  <% }) %>
                </>
              );
            }
            `}],controls:[l()]}},render:e=>{var r;return o.jsx(o.Fragment,{children:(r=e.cckControl.themeComponentConfig.color)==null?void 0:r.values.map((s,i)=>o.jsx(n,{type:e.cckControl.type,color:s,checked:!0,children:s},i))})}},S={[t.FramesX]:{size:"md"},[t.CocoKits]:{size:"md"}},A={[t.FramesX]:{},[t.CocoKits]:{}},v=[{language:"tsx",filename:"CheckboxLabelThrough.styled.tsx",code:`
import styled from 'styled-components';

const StrikedLabel = styled.span\`
  text-decoration: line-through;
\`;

export const Styled = {
  StrikedLabel,
};
`},{language:"tsx",filename:"CheckboxLabelThrough.tsx",code:`

import { Checkbox } from '@cocokits/react-checkbox';

import { Styled } from './CheckboxLabelThrough.styled';

export function CheckboxLabelThrough() {
  return (
    <Checkbox size='<%= size %>' value={1}>
      <Styled.StrikedLabel>Checkbox Label</Styled.StrikedLabel>
    </Checkbox>
  );
}
`}],E=a.span`
  text-decoration: line-through;
`,T={StrikedLabel:E};function m(e){return o.jsx(n,{size:e.cckExampleArgs.size,value:1,children:o.jsx(T.StrikedLabel,{children:"Checkbox Label"})})}m.__docgenInfo={description:"",methods:[],displayName:"CheckboxLabelThrough",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const H={name:"Checkbox Label Through",parameters:{cckAddon:{renderConditions:[c("Examples")],source:v,exampleStory:{templateArgsMap:S,cssArgsMap:A}}},render:e=>o.jsx(z,{styles:e.cckExampleCssVariables,children:o.jsx(m,{cckExampleArgs:e.cckExampleArgs})})},z=a.div`
  ${({styles:e})=>d`
    ${e}
  `}
`,j={[t.FramesX]:{},[t.CocoKits]:{}},w={[t.FramesX]:{},[t.CocoKits]:{}},I=[{language:"tsx",filename:"CheckboxLabelLink.tsx",code:`

import { Checkbox } from '@cocokits/react-checkbox';

export function CheckboxLabelLink() {
  return (
    <Checkbox>
      I accept the <a href="/">Privacy Policy</a>
    </Checkbox>
  );
}
`}];function h(e){return o.jsxs(n,{children:["I accept the ",o.jsx("a",{href:"/",children:"Privacy Policy"})]})}h.__docgenInfo={description:"",methods:[],displayName:"CheckboxLabelLink",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const J={name:"Checkbox Label Link",parameters:{cckAddon:{renderConditions:[c("Examples")],source:I,exampleStory:{templateArgsMap:j,cssArgsMap:w}}},render:e=>o.jsx(M,{styles:e.cckExampleCssVariables,children:o.jsx(h,{cckExampleArgs:e.cckExampleArgs})})},M=a.div`
  ${({styles:e})=>d`
    ${e}
  `}
`,Y={component:n,title:"UI Components/Checkbox",parameters:{docs:{description:{component:[L].join(`
`)}},cckAddon:{componentName:"checkbox"}}},Q=["Default","Size","Color","CheckboxLabelThroughStory","CheckboxLabelLinkStory"];export{J as CheckboxLabelLinkStory,H as CheckboxLabelThroughStory,G as Color,W as Default,B as Size,Q as __namedExportsOrder,Y as default};
