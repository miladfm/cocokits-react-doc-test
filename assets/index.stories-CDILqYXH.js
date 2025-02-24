import{B as n,j as a,W as e,I as l,X as r,Y as p}from"./doc-page-BN5Swiih.js";import{ag as o}from"./chunk-NUUEMKO5-H6bsAokA.js";import"./mdx-page-with-theme-section-DqXVsux9.js";import{r as s,o as C,L as A,M as E,t as d,c as h,s as b,a as I,d as T,j as u}from"./control.config-CS9gPXTS.js";import"./index-qVDZzPEr.js";import{r as z}from"./preview.base-CTOF-u6_.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./menu-item-DjIA2NH8.js";import"./toggle-CWt1D9X3.js";import"./iframe-CKj9WKtZ.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const j="A button in the context of UI is an interactive element that allows users to perform an action.\r\n\r\nThe `Button` from `@cocokits` provides a flexible, customizable button element within React applications. This component is compatible with multiple design system themes and allows for various configurations, including different button types, colors, and sizes.\r\n",Ct={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
          import { Button, SvgIcon} from '@cocokits/react-components';

          export const MyComponent = () => {
            return (
              <Button
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
                <% if (disabled) { %> disabled <% } %>
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
          `}],renderConditions:[s("Overview")],hasControl:!0,controls:[C("Button"),A("heartFill"),E("none"),d(),h(),b(),I(),T()]}},args:{},render:t=>o.jsxs(n,{...z(t),disabled:t.cckControl.disabled,children:[t.cckControl.leftIcon!=="none"&&o.jsx(a,{icon:t.cckIcons[t.cckControl.leftIcon]}),t.cckControl.text,t.cckControl.rightIcon!=="none"&&o.jsx(a,{icon:t.cckIcons[t.cckControl.rightIcon]})]})},At={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[u("type"),s("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}]}},render:t=>{var c;return o.jsx(o.Fragment,{children:(c=t.cckControl.themeComponentConfig.type)==null?void 0:c.values.map((i,m)=>o.jsx(n,{type:i,children:i},m))})}},Et={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[u("size"),s("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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

              <>
            );
          }
          `}],controls:[d()]}},render:t=>{var c;return o.jsx(o.Fragment,{children:(c=t.cckControl.themeComponentConfig.size)==null?void 0:c.values.map((i,m)=>o.jsxs(n,{type:t.cckControl.type,size:i,children:["Button - ",i]},m))})}},ht={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[u("color"),s("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[d()]}},render:t=>{var c;return o.jsx(o.Fragment,{children:(c=t.cckControl.themeComponentConfig.color)==null?void 0:c.values.map((i,m)=>o.jsx(n,{type:t.cckControl.type,color:i,children:i},m))})}},v={[e.FramesX]:{},[e.CocoKits]:{}},$={[e.FramesX]:{},[e.CocoKits]:{}},w=[{language:"tsx",filename:"BackButton.tsx",code:`
import { Icons } from '@cocokits/common-icons';

import { Button, SvgIcon } from '@cocokits/react-components';

export function BackButton(props: {cckExampleArgs: ExampleArgs}) {

  return (
    <Button>
      <SvgIcon icon={Icons.arrowLeft} />
      <span>Back</span>
    </Button>
  );
}
`}];function y(t){return o.jsxs(n,{children:[o.jsx(a,{icon:l.arrowLeft}),o.jsx("span",{children:"Back"})]})}y.__docgenInfo={description:"",methods:[],displayName:"BackButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const bt={name:"Back Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:w,exampleStory:{templateArgsMap:v,cssArgsMap:$}}},render:t=>o.jsx(M,{styles:t.cckExampleVariables,children:o.jsx(y,{cckExampleArgs:t.cckExampleArgs})})},M=r.div`
  ${({styles:t})=>p`${t}`}
`,_={[e.FramesX]:{buttonType:"ghost"},[e.CocoKits]:{buttonType:"outline"}},R={[e.FramesX]:{},[e.CocoKits]:{}},L=[{language:"tsx",filename:"CopyLinkButton.tsx",code:`
import { Icons } from '@cocokits/common-icons';

import { Button, SvgIcon } from '@cocokits/react-components';

export function CopyLinkButton(props: {cckExampleArgs: ExampleArgs}) {

  return (
    <Button type='<%= buttonType %>'>
      <SvgIcon icon={Icons.link} />
      <span>Copy Link</span>
    </Button>
  );
}
`}];function x(t){return o.jsxs(n,{type:t.cckExampleArgs.buttonType,children:[o.jsx(a,{icon:l.link}),o.jsx("span",{children:"Copy Link"})]})}x.__docgenInfo={description:"",methods:[],displayName:"CopyLinkButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const It={name:"Copy Link Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:L,exampleStory:{templateArgsMap:_,cssArgsMap:R}}},render:t=>o.jsx(V,{styles:t.cckExampleVariables,children:o.jsx(x,{cckExampleArgs:t.cckExampleArgs})})},V=r.div`
  ${({styles:t})=>p`${t}`}
`,F={[e.FramesX]:{buttonType:"default",buttonColor:"danger"},[e.CocoKits]:{buttonType:"primary",buttonColor:"error"}},N={[e.FramesX]:{},[e.CocoKits]:{}},O=[{language:"tsx",filename:"DeleteButton.tsx",code:`
import { Icons } from '@cocokits/common-icons';

import { Button, SvgIcon } from '@cocokits/react-components';

export function DeleteButton(props: {cckExampleArgs: ExampleArgs}) {

  return (
    <Button color='<%= buttonColor %>' type='<%= buttonType %>'>  
      <SvgIcon icon={Icons.trashOutline}/>
      <span>Delete</span>
    </Button>
  );
}
`}];function B(t){return o.jsxs(n,{color:t.cckExampleArgs.buttonColor,type:t.cckExampleArgs.buttonType,children:[o.jsx(a,{icon:l.trashOutline}),o.jsx("span",{children:"Delete"})]})}B.__docgenInfo={description:"",methods:[],displayName:"DeleteButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Tt={name:"Delete Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:O,exampleStory:{templateArgsMap:F,cssArgsMap:N}}},render:t=>o.jsx(H,{styles:t.cckExampleVariables,children:o.jsx(B,{cckExampleArgs:t.cckExampleArgs})})},H=r.div`
  ${({styles:t})=>p`${t}`}
`,D={[e.FramesX]:{buttonType:"default",buttonColor:"brand",buttonSize:"md"},[e.CocoKits]:{buttonType:"primary ",buttonColor:"brand",buttonSize:"md"}},X={[e.FramesX]:{},[e.CocoKits]:{}},K=[{language:"tsx",filename:"AddNewButton.tsx",code:`
import { Icons } from '@cocokits/common-icons';

import { Button, SvgIcon } from '@cocokits/react-components';

export function AddNewButton() {
  return (
    <Button type='<%= buttonType %>' color='<%= buttonColor %>' size='<%= buttonSize %>'>
      <span>Add New</span>
      <SvgIcon icon={Icons.plus} />
    </Button>
  );
}
`}];function f(t){return o.jsxs(n,{type:t.cckExampleArgs.buttonType,color:t.cckExampleArgs.buttonColor,size:t.cckExampleArgs.buttonSize,children:[o.jsx("span",{children:"Add New"}),o.jsx(a,{icon:l.plus})]})}f.__docgenInfo={description:"",methods:[],displayName:"AddNewButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const zt={name:"Volume Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:K,exampleStory:{templateArgsMap:D,cssArgsMap:X}}},render:t=>o.jsx(U,{styles:t.cckExampleVariables,children:o.jsx(f,{cckExampleArgs:t.cckExampleArgs})})},U=r.div`
  ${({styles:t})=>p`
    ${t}
  `}
`,P={[e.FramesX]:{buttonType:"secondary",buttonColor:"brand"},[e.CocoKits]:{buttonType:"outline",buttonColor:"brand"}},q={[e.FramesX]:{},[e.CocoKits]:{}},G=[{language:"tsx",filename:"ShowMoreButton.tsx",code:`
import { Icons } from '@cocokits/common-icons';

import { Button, SvgIcon } from '@cocokits/react-components';

export function ShowMoreButton() {
  return (
    <Button type='<%= buttonType %>' color='<%= buttonColor %>'>
      <span>Show More</span>
      <SvgIcon icon={Icons.arrowHeadDown} />
    </Button>
  );
}
`}];function S(t){return o.jsxs(n,{type:t.cckExampleArgs.buttonType,color:t.cckExampleArgs.buttonColor,children:[o.jsx("span",{children:"Show More"}),o.jsx(a,{icon:l.arrowHeadDown})]})}S.__docgenInfo={description:"",methods:[],displayName:"ShowMoreButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const jt={name:"Volume Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:G,exampleStory:{templateArgsMap:P,cssArgsMap:q}}},render:t=>o.jsx(W,{styles:t.cckExampleVariables,children:o.jsx(S,{cckExampleArgs:t.cckExampleArgs})})},W=r.div`
  ${({styles:t})=>p`
    ${t}
  `}
`,Y={[e.FramesX]:{firstButtonType:"secondary",firstButtonSize:"md",firstButtonColor:"brand",secondButtonType:"default",secondButtonSize:"md",secondButtonColor:"brand"},[e.CocoKits]:{firstButtonType:"outline",firstButtonSize:"md",firstButtonColor:"brand",secondButtonType:"primary",secondButtonSize:"md",secondButtonColor:"brand"}},J={[e.FramesX]:{},[e.CocoKits]:{}},Q=[{language:"tsx",filename:"StackHorizontalButton.tsx",code:`
import styled from 'styled-components';


import { Button } from '@cocokits/react-components';

export function StackHorizontalButton() {
  return (
    <HostStyles>
      <Button
        type='<%= firstButtonType %>'
        size='<%= firstButtonSize %>'
        color='<%= firstButtonColor %>'>
        Cancel
      </Button>

      <Button
        type='<%= secondButtonType %>'
        size='<%= secondButtonSize %>'
        color='<%= secondButtonColor %>'>
        Confirm
      </Button>
    </HostStyles>
  );
}

const HostStyles = styled.div\`
  display: flex;
  gap: 12px;
\`;
`}];function g(t){return o.jsxs(Z,{children:[o.jsx(n,{type:t.cckExampleArgs.firstButtonType,size:t.cckExampleArgs.firstButtonSize,color:t.cckExampleArgs.firstButtonColor,children:"Cancel"}),o.jsx(n,{type:t.cckExampleArgs.secondButtonType,size:t.cckExampleArgs.secondButtonSize,color:t.cckExampleArgs.secondButtonColor,children:"Confirm"})]})}const Z=r.div`
  display: flex;
  gap: 12px;
`;g.__docgenInfo={description:"",methods:[],displayName:"StackHorizontalButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const vt={name:"Volume Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:Q,exampleStory:{templateArgsMap:Y,cssArgsMap:J}}},render:t=>o.jsx(tt,{styles:t.cckExampleVariables,children:o.jsx(g,{cckExampleArgs:t.cckExampleArgs})})},tt=r.div`
  ${({styles:t})=>p`
    ${t}
  `}
`,ot={[e.FramesX]:{firstButtonType:"secondary",firstButtonSize:"md",firstButtonColor:"brand",secondButtonType:"default",secondButtonSize:"md",secondButtonColor:"brand"},[e.CocoKits]:{firstButtonType:"outline",firstButtonSize:"md",firstButtonColor:"brand",secondButtonType:"primary",secondButtonSize:"md",secondButtonColor:"brand"}},et={[e.FramesX]:{},[e.CocoKits]:{}},nt=[{language:"tsx",filename:"StackVerticalButton.tsx",code:`
import React from 'react';
import { styled } from 'styled-components';


import { Button, SvgIcon } from '@cocokits/react-components';
import { Icons } from '@cocokits/common-icons';

export function StackVerticalButton() {
  return (
    <HostStyles>
      <Button
        type='<%= firstButtonType %>'
        size='<%= firstButtonSize %>'
        color='<%= firstButtonColor %>'>
        Skip
      </Button>

      <Button
        type='<%= secondButtonType %>'
        size='<%= secondButtonSize %>'
        color='<%= secondButtonColor %>'>
        Confirm
        <SvgIcon icon={Icons.arrowRight}/>
      </Button>
    </HostStyles>
  );
}

const HostStyles = styled.div\`
  display: flex;
  flex-direction: column;
  width: 150px;
  gap: 12px;
\`;
`}];function k(t){return o.jsxs(st,{children:[o.jsx(n,{type:t.cckExampleArgs.firstButtonType,size:t.cckExampleArgs.firstButtonSize,color:t.cckExampleArgs.firstButtonColor,children:"Skip"}),o.jsxs(n,{type:t.cckExampleArgs.secondButtonType,size:t.cckExampleArgs.secondButtonSize,color:t.cckExampleArgs.secondButtonColor,children:["Confirm",o.jsx(a,{icon:l.arrowRight})]})]})}const st=r.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  gap: 12px;
`;k.__docgenInfo={description:"",methods:[],displayName:"StackVerticalButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const $t={name:"Volume Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:nt,exampleStory:{templateArgsMap:ot,cssArgsMap:et}}},render:t=>o.jsx(rt,{styles:t.cckExampleVariables,children:o.jsx(k,{cckExampleArgs:t.cckExampleArgs})})},rt=r.div`
  ${({styles:t})=>p`
    ${t}
  `}
`,wt={component:n,title:"UI Components/Button",decorators:[],parameters:{docs:{description:{component:[j].join(`
`)}},cckAddon:{componentName:"button"}},argTypes:{}},Mt=["Default","Type","Size","Color","BackButtonStory","CopyLinkButtonStory","DeleteButtonStory","AddNewButtonStory","ShowMoreButtonStory","StackHorizontalButtonStory","StackVerticalButtonStory"];export{zt as AddNewButtonStory,bt as BackButtonStory,ht as Color,It as CopyLinkButtonStory,Ct as Default,Tt as DeleteButtonStory,jt as ShowMoreButtonStory,Et as Size,vt as StackHorizontalButtonStory,$t as StackVerticalButtonStory,At as Type,Mt as __namedExportsOrder,wt as default};
