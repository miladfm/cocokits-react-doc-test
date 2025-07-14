import{Z as r,N as c,m as t,n as i,j as p,I as b}from"./index-CJ4dMRjJ.js";import{j as o}from"./DocsRenderer-CFRXHY34-BQGoYUqN.js";import"./mdx-page-with-theme-section-RzKw2tZk.js";import{C as A,t as k,c as E,s as z,a as L,N as I,G as j,d as B,e as s,x as u}from"./control.config-Lq_-sO0J.js";import{r as G}from"./index-C33_amOP.js";import{r as $}from"./preview.base-CAQTzWSW.js";import"./react-18-B-IeCXFN.js";import"./menu-item-B58pmHkI.js";import"./toggle-BNuwnKN4.js";import"./preview--S8KCBjg.js";import"./iframe-D6lJ4O3E.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";const T="The `Checkbox` from `@cocokits` is an essential UI element designed to enable users to make binary selections within React applications. Whether used in forms, settings panels, or anywhere multiple selections are required, this component provides a reliable and customizable solution that aligns seamlessly with various design system themes.\r\n\r\n#### Features:\r\n- **Theming Flexibility:** Fully compatible with multiple design system themes, ensuring that the checkbox adapts its appearance to match the overall aesthetic of the application without additional configuration.",Ie={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[s("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
           
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
          `}],hasControl:!0,controls:[A("Checkbox Label"),k(),E(),z(),L(),I(),j(),B()]}},render:e=>o.jsx(r,{...$(e),indeterminate:e.cckControl.indeterminate,checked:e.cckControl.checked,disabled:e.cckControl.disabled,children:e.cckControl.text})},je={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[u("size"),s("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
            `}],controls:[k()]}},render:e=>{var n;return o.jsx(o.Fragment,{children:(n=e.cckControl.themeComponentConfig.size)==null?void 0:n.values.map((a,l)=>o.jsxs(r,{type:e.cckControl.type,size:a,children:["Checkbox - ",a]},l))})}},Be={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[u("color"),s("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
            `}],controls:[k()]}},render:e=>{var n;return o.jsx(o.Fragment,{children:(n=e.cckControl.themeComponentConfig.color)==null?void 0:n.values.map((a,l)=>o.jsx(r,{type:e.cckControl.type,color:a,checked:!0,children:a},l))})}},w={[c.FramesX]:{size:"md"},[c.CocoKits]:{size:"md"}},R={[c.FramesX]:{},[c.CocoKits]:{}},_=[{language:"tsx",filename:"CheckboxLabelThrough.styled.tsx",code:`
import styled from 'styled-components';

const StrikedLabel = styled.span\`
  text-decoration: line-through;
\`;

export const Styled = {
  StrikedLabel,
};
`},{language:"tsx",filename:"CheckboxLabelThrough.tsx",code:`
import { useState } from 'react';


import { Checkbox } from '@cocokits/react-components';

import { Styled } from './CheckboxLabelThrough.styled';

export function CheckboxLabelThrough() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox size='<%= size %>' value={1} checked={checked} onChange={() => setChecked((prev) => !prev)}>
      <Styled.StrikedLabel style={{ textDecoration: checked ? 'line-through' : 'none' }}>
        Checkbox Label
      </Styled.StrikedLabel>
    </Checkbox>
  );
}
`}],F=t.span`
  text-decoration: line-through;
`,M={StrikedLabel:F};function g(e){const[n,a]=G.useState(!1);return o.jsx(r,{size:e.cckExampleArgs.size,value:1,checked:n,onChange:()=>a(l=>!l),children:o.jsx(M.StrikedLabel,{style:{textDecoration:n?"line-through":"none"},children:"Checkbox Label"})})}g.__docgenInfo={description:"",methods:[],displayName:"CheckboxLabelThrough",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Ge={name:"Checkbox Label Through",parameters:{cckAddon:{renderConditions:[s("Examples")],source:_,exampleStory:{templateArgsMap:w,cssArgsMap:R}}},render:e=>o.jsx(K,{styles:e.cckExampleCssVariables,children:o.jsx(g,{cckExampleArgs:e.cckExampleArgs})})},K=t.div`
  ${({styles:e})=>i`
    ${e}
  `}
`,P={[c.FramesX]:{},[c.CocoKits]:{}},X={[c.FramesX]:{},[c.CocoKits]:{}},V=[{language:"tsx",filename:"CheckboxLabelLink.tsx",code:`

import { Checkbox } from '@cocokits/react-components';

export function CheckboxLabelLink() {
  return (
    <Checkbox value={1}>
      I accept the
      <a href="https://cocokits.com" target="_blank" rel="noopener noreferrer">
        Privacy Policy
      </a>
    </Checkbox>
  );
}
`}];function C(e){return o.jsxs(r,{value:1,children:["I accept the",o.jsx("a",{href:"https://cocokits.com",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"})]})}C.__docgenInfo={description:"",methods:[],displayName:"CheckboxLabelLink",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const $e={name:"Checkbox Label Link",parameters:{cckAddon:{renderConditions:[s("Examples")],source:V,exampleStory:{templateArgsMap:P,cssArgsMap:X}}},render:e=>o.jsx(D,{styles:e.cckExampleCssVariables,children:o.jsx(C,{cckExampleArgs:e.cckExampleArgs})})},D=t.div`
  ${({styles:e})=>i`
    ${e}
  `}
`,O={[c.FramesX]:{size:"md"},[c.CocoKits]:{size:"md"}},U={[c.FramesX]:{"--checkbox-group-column-color":"var(--colors-gray-300)","--checkbox-group-column-font-family":"var(--font-family)"},[c.CocoKits]:{"--checkbox-group-column-color":"var(--color-palette-gray-800)","--checkbox-group-column-font-family":"Inter"}},N=[{language:"tsx",filename:"CheckboxGroupColumn.styled.tsx",code:`
import styled from 'styled-components';

const Label = styled.span\`
  color: var(--checkbox-group-column-color);
  font-style: italic;
  font-family: var(--checkbox-group-column-font-family);
\`;

const CheckboxGroupColumn = styled.div\`
  display: flex;
  flex-direction: column;
  gap: 12px;
\`;

export const Styled = {
  Label,
  CheckboxGroupColumn,
};
`},{language:"tsx",filename:"CheckboxGroupColumn.tsx",code:`

import { Checkbox } from '@cocokits/react-components';

import { Styled } from './CheckboxGroupColumn.styled';

export function CheckboxGroupColumn() {
  return (
    <Styled.CheckboxGroupColumn>
      <Styled.Label>My hobbies</Styled.Label>
      <Checkbox size='<%= size %>' value={1}>
        Comic books
      </Checkbox>
      <Checkbox size='<%= size %>' value={2}>
        Listen to music
      </Checkbox>
      <Checkbox size='<%= size %>' value={3}>
        Travel the world
      </Checkbox>
      <Checkbox size='<%= size %>' value={4}>
        Watch movies
      </Checkbox>
    </Styled.CheckboxGroupColumn>
  );
}
`},{language:"scss",filename:"global.scss",code:`
      :root {--checkbox-group-column-color: var(--color-palette-gray-800);
        --checkbox-group-column-font-family: Inter;
      }`,visibleConditions:[e=>e.id===c.CocoKits]},{language:"scss",filename:"global.scss",code:`
      :root {--checkbox-group-column-color: var(--colors-gray-300);
        --checkbox-group-column-font-family: var(--font-family);
      }`,visibleConditions:[e=>e.id===c.FramesX]}],q=t.span`
  color: var(--checkbox-group-column-color);
  font-style: italic;
  font-family: var(--checkbox-group-column-font-family);
`,W=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,h={Label:q,CheckboxGroupColumn:W};function y(e){return o.jsxs(h.CheckboxGroupColumn,{children:[o.jsx(h.Label,{children:"My hobbies"}),o.jsx(r,{size:e.cckExampleArgs.size,value:1,children:"Comic books"}),o.jsx(r,{size:e.cckExampleArgs.size,value:2,children:"Listen to music"}),o.jsx(r,{size:e.cckExampleArgs.size,value:3,children:"Travel the world"}),o.jsx(r,{size:e.cckExampleArgs.size,value:4,children:"Watch movies"})]})}y.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupColumn",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Te={name:"Checkbox Group Column",parameters:{cckAddon:{renderConditions:[s("Examples")],source:N,exampleStory:{templateArgsMap:O,cssArgsMap:U}}},render:e=>o.jsx(Y,{styles:e.cckExampleCssVariables,children:o.jsx(y,{cckExampleArgs:e.cckExampleArgs})})},Y=t.div`
  ${({styles:e})=>i`
    ${e}
  `}
`,Z={[c.FramesX]:{size:"md"},[c.CocoKits]:{size:"md"}},H={[c.FramesX]:{"--checkbox-group-column-color":"var(--colors-gray-300)","--checkbox-group-column-font-family":"var(--font-family)"},[c.CocoKits]:{"--checkbox-group-column-color":"var(--color-palette-gray-800)","--checkbox-group-column-font-family":"Inter"}},J=[{language:"tsx",filename:"CheckboxGroupRow.styled.tsx",code:`
import styled from 'styled-components';

const Label = styled.span\`
  color: var(--checkbox-group-column-color);
  font-style: italic;
  font-family: var(--checkbox-group-column-font-family);
\`;

const CheckboxGroup = styled.div\`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 10px;
\`;

export const Styled = {
  Label,
  CheckboxGroup,
};
`},{language:"tsx",filename:"CheckboxGroupRow.tsx",code:`

import { Checkbox } from '@cocokits/react-components';

import { Styled } from './CheckboxGroupRow.styled';

export function CheckboxGroupRow() {
  return (
    <div>
      <Styled.Label>Favorite food</Styled.Label>
      <Styled.CheckboxGroup>
        <Checkbox size='<%= size %>' value={1}>
          Pizza
        </Checkbox>
        <Checkbox size='<%= size %>' value={2}>
          Pasta
        </Checkbox>
        <Checkbox size='<%= size %>' value={3}>
          Fruits
        </Checkbox>
      </Styled.CheckboxGroup>
    </div>
  );
}
`},{language:"scss",filename:"global.scss",code:`
      :root {--checkbox-group-column-color: var(--color-palette-gray-800);
        --checkbox-group-column-font-family: Inter;
      }`,visibleConditions:[e=>e.id===c.CocoKits]},{language:"scss",filename:"global.scss",code:`
      :root {--checkbox-group-column-color: var(--colors-gray-300);
        --checkbox-group-column-font-family: var(--font-family);
      }`,visibleConditions:[e=>e.id===c.FramesX]}],Q=t.span`
  color: var(--checkbox-group-column-color);
  font-style: italic;
  font-family: var(--checkbox-group-column-font-family);
`,ee=t.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 10px;
`,m={Label:Q,CheckboxGroup:ee};function f(e){return o.jsxs("div",{children:[o.jsx(m.Label,{children:"Favorite food"}),o.jsxs(m.CheckboxGroup,{children:[o.jsx(r,{size:e.cckExampleArgs.size,value:1,children:"Pizza"}),o.jsx(r,{size:e.cckExampleArgs.size,value:2,children:"Pasta"}),o.jsx(r,{size:e.cckExampleArgs.size,value:3,children:"Fruits"})]})]})}f.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroupRow",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const we={name:"Checkbox Group Row",parameters:{cckAddon:{renderConditions:[s("Examples")],source:J,exampleStory:{templateArgsMap:Z,cssArgsMap:H}}},render:e=>o.jsx(oe,{styles:e.cckExampleCssVariables,children:o.jsx(f,{cckExampleArgs:e.cckExampleArgs})})},oe=t.div`
  ${({styles:e})=>i`
    ${e}
  `}
`,ce={[c.FramesX]:{},[c.CocoKits]:{}},re={[c.FramesX]:{"--cck-checkbox-border-color":"var(--base-border)","--cck-checkbox-border-width":"var(--spacing-1)","--cck-checkbox-border-style":"solid","--cck-checkbox-border-radius":"var(--radi-6)","--cck-checkbox-padding":"var(--spacing-8)","--cck-checkbox-gap":"var(--spacing-7)"},[c.CocoKits]:{"--cck-checkbox-border-color":"var(--color-disabled-surface)","--cck-checkbox-border-width":"1px","--cck-checkbox-border-style":"solid","--cck-checkbox-border-radius":"12px","--cck-checkbox-padding":"16px","--cck-checkbox-gap":"var(--toggle-spacing-gap)"}},te=[{language:"tsx",filename:"CheckboxBoxSelection.styled.tsx",code:`
import styled from 'styled-components';

const Container = styled.div\`
  display: flex;
  flex-direction: column;
  gap: var(--cck-checkbox-gap);
\`;

const Box = styled.div\`
  padding: var(--cck-checkbox-padding);
  border: var(--cck-checkbox-border-width) var(--cck-checkbox-border-style) var(--cck-checkbox-border-color);
  border-radius: var(--cck-checkbox-border-radius);
\`;

export const Styled = {
  Container,
  Box,
};
`},{language:"tsx",filename:"CheckboxBoxSelection.tsx",code:`

import { Checkbox } from '@cocokits/react-components';

import { Styled } from './CheckboxBoxSelection.styled';

export function CheckboxBoxSelection() {
  return (
    <Styled.Container>
      <Styled.Box>
        <Checkbox value={1}>Vegetarian</Checkbox>
      </Styled.Box>
      <Styled.Box>
        <Checkbox value={2}>Gluten-Free</Checkbox>
      </Styled.Box>
    </Styled.Container>
  );
}
`},{language:"scss",filename:"global.scss",code:`
      :root {--cck-checkbox-border-color: var(--color-disabled-surface);
        --cck-checkbox-border-width: 1px;
        --cck-checkbox-border-style: solid;
        --cck-checkbox-border-radius: 12px;
        --cck-checkbox-padding: 16px;
        --cck-checkbox-gap: var(--toggle-spacing-gap);
      }`,visibleConditions:[e=>e.id===c.CocoKits]},{language:"scss",filename:"global.scss",code:`
      :root {--cck-checkbox-border-color: var(--base-border);
        --cck-checkbox-border-width: var(--spacing-1);
        --cck-checkbox-border-style: solid;
        --cck-checkbox-border-radius: var(--radi-6);
        --cck-checkbox-padding: var(--spacing-8);
        --cck-checkbox-gap: var(--spacing-7);
      }`,visibleConditions:[e=>e.id===c.FramesX]}],se=t.div`
  display: flex;
  flex-direction: column;
  gap: var(--cck-checkbox-gap);
`,ne=t.div`
  padding: var(--cck-checkbox-padding);
  border: var(--cck-checkbox-border-width) var(--cck-checkbox-border-style) var(--cck-checkbox-border-color);
  border-radius: var(--cck-checkbox-border-radius);
`,d={Container:se,Box:ne};function v(e){return o.jsxs(d.Container,{children:[o.jsx(d.Box,{children:o.jsx(r,{value:1,children:"Vegetarian"})}),o.jsx(d.Box,{children:o.jsx(r,{value:2,children:"Gluten-Free"})})]})}v.__docgenInfo={description:"",methods:[],displayName:"CheckboxBoxSelection",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Re={name:"Checkbox Box Selection",parameters:{cckAddon:{renderConditions:[s("Examples")],source:te,exampleStory:{templateArgsMap:ce,cssArgsMap:re}}},render:e=>o.jsx(ae,{styles:e.cckExampleCssVariables,children:o.jsx(v,{cckExampleArgs:e.cckExampleArgs})})},ae=t.div`
  ${({styles:e})=>i`
    ${e}
  `}
`,ie={[c.FramesX]:{IconSize:"lg"},[c.CocoKits]:{IconSize:"md"}},le={[c.FramesX]:{"--cck-checkbox-border-color":"var(--base-border)","--cck-checkbox-border-width":"var(--spacing-1)","--cck-checkbox-border-style":"solid","--cck-checkbox-border-radius":"var(--radi-6)","--cck-checkbox-padding":"var(--spacing-8)","--cck-checkbox-gap":"var(--spacing-7)","--cck-checkbox-box-gap":"var(--spacing-5)","--cck-checkbox-icon-color":"var(--colors-gray-300)"},[c.CocoKits]:{"--cck-checkbox-border-color":"var(--color-disabled-surface)","--cck-checkbox-border-width":"1px","--cck-checkbox-border-style":"solid","--cck-checkbox-border-radius":"12px","--cck-checkbox-padding":"16px","--cck-checkbox-gap":"var(--toggle-spacing-gap)","--cck-checkbox-box-gap":"var(--toggle-size-backdrop-sm)","--cck-checkbox-icon-color":"#D0D0D4"}},de=[{language:"tsx",filename:"CheckboxBoxSelectionInfo.styled.tsx",code:`
import styled from 'styled-components';

const Container = styled.div\`
  display: flex;
  flex-direction: column;
  gap: var(--cck-checkbox-gap);
\`;

const Box = styled.div\`
  padding: var(--cck-checkbox-padding);
  border: var(--cck-checkbox-border-width) var(--cck-checkbox-border-style) var(--cck-checkbox-border-color);
  border-radius: var(--cck-checkbox-border-radius);

  direction: rtl;
  display: flex;
  align-items: center;
  gap: var(--cck-checkbox-box-gap);

  svg {
    fill: var(--cck-checkbox-icon-color);
  }
\`;

export const Styled = {
  Container,
  Box,
};
`},{language:"tsx",filename:"CheckboxBoxSelectionInfo.tsx",code:`
import { Icons } from '@cocokits/common-icons';

import { Checkbox, SvgIcon } from '@cocokits/react-components';

import { Styled } from './CheckboxBoxSelectionInfo.styled';

export function CheckboxBoxSelectionInfo() {
  return (
    <Styled.Container>
      <Styled.Box>
        <Checkbox value={1}>Leave at Door</Checkbox>
        <SvgIcon icon={Icons.info} size='<%= IconSize %>' />
      </Styled.Box>
      <Styled.Box>
        <Checkbox value={2}>Call on Arrival</Checkbox>
        <SvgIcon icon={Icons.info} size='<%= IconSize %>' />
      </Styled.Box>
    </Styled.Container>
  );
}
`},{language:"scss",filename:"global.scss",code:`
      :root {--cck-checkbox-border-color: var(--color-disabled-surface);
        --cck-checkbox-border-width: 1px;
        --cck-checkbox-border-style: solid;
        --cck-checkbox-border-radius: 12px;
        --cck-checkbox-padding: 16px;
        --cck-checkbox-gap: var(--toggle-spacing-gap);
        --cck-checkbox-box-gap: var(--toggle-size-backdrop-sm);
        --cck-checkbox-icon-color: #D0D0D4;
      }`,visibleConditions:[e=>e.id===c.CocoKits]},{language:"scss",filename:"global.scss",code:`
      :root {--cck-checkbox-border-color: var(--base-border);
        --cck-checkbox-border-width: var(--spacing-1);
        --cck-checkbox-border-style: solid;
        --cck-checkbox-border-radius: var(--radi-6);
        --cck-checkbox-padding: var(--spacing-8);
        --cck-checkbox-gap: var(--spacing-7);
        --cck-checkbox-box-gap: var(--spacing-5);
        --cck-checkbox-icon-color: var(--colors-gray-300);
      }`,visibleConditions:[e=>e.id===c.FramesX]}],xe=t.div`
  display: flex;
  flex-direction: column;
  gap: var(--cck-checkbox-gap);
`,ke=t.div`
  padding: var(--cck-checkbox-padding);
  border: var(--cck-checkbox-border-width) var(--cck-checkbox-border-style) var(--cck-checkbox-border-color);
  border-radius: var(--cck-checkbox-border-radius);

  direction: rtl;
  display: flex;
  align-items: center;
  gap: var(--cck-checkbox-box-gap);

  svg {
    fill: var(--cck-checkbox-icon-color);
  }
`,x={Container:xe,Box:ke};function S(e){return o.jsxs(x.Container,{children:[o.jsxs(x.Box,{children:[o.jsx(r,{value:1,children:"Leave at Door"}),o.jsx(p,{icon:b.info,size:e.cckExampleArgs.IconSize})]}),o.jsxs(x.Box,{children:[o.jsx(r,{value:2,children:"Call on Arrival"}),o.jsx(p,{icon:b.info,size:e.cckExampleArgs.IconSize})]})]})}S.__docgenInfo={description:"",methods:[],displayName:"CheckboxBoxSelectionInfo",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const _e={name:"Checkbox Box Selection Info",parameters:{cckAddon:{renderConditions:[s("Examples")],source:de,exampleStory:{templateArgsMap:ie,cssArgsMap:le}}},render:e=>o.jsx(pe,{styles:e.cckExampleCssVariables,children:o.jsx(S,{cckExampleArgs:e.cckExampleArgs})})},pe=t.div`
  ${({styles:e})=>i`
    ${e}
  `}
`,Fe={component:r,title:"UI Components/Checkbox",parameters:{docs:{description:{component:[T].join(`
`)}},cckAddon:{componentName:"checkbox"}}},Me=["Default","Size","Color","CheckboxLabelThroughStory","CheckboxLabelLinkStory","CheckboxGroupColumnStory","CheckboxGroupRowStory","CheckboxBoxSelectionStory","CheckboxBoxSelectionInfoStory"];export{_e as CheckboxBoxSelectionInfoStory,Re as CheckboxBoxSelectionStory,Te as CheckboxGroupColumnStory,we as CheckboxGroupRowStory,$e as CheckboxLabelLinkStory,Ge as CheckboxLabelThroughStory,Be as Color,Ie as Default,je as Size,Me as __namedExportsOrder,Fe as default};
