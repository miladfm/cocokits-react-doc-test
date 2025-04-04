import{B as n,h as a,M as e,I as m,w as r,N as l}from"./doc-page-BUpmYpE7.js";import{ag as o}from"./chunk-NUUEMKO5-CwXScIoX.js";import"./mdx-page-with-theme-section-c7cMjpCP.js";import{r as s,u as k,t as d,c as A,s as E,E as h,F as b,a as I,d as T,j as u}from"./control.config-CPqwFQ65.js";import"./index-qVDZzPEr.js";import{r as v}from"./preview.base-CB0fb4M8.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./menu-item-B8BzZBwE.js";import"./toggle-OMlCaLhS.js";import"./iframe-CsW61chZ.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const z=`
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 5.5C13.7239 5.5 15.3772 6.18482 16.5962 7.40381C17.8152 8.62279 18.5 10.2761 18.5 12C18.5 13.7239 17.8152 15.3772 16.5962 16.5962C15.3772 17.8152 13.7239 18.5 12 18.5C10.2761 18.5 8.62279 17.8152 7.40381 16.5962C6.18482 15.3772 5.5 13.7239 5.5 12C5.5 10.2761 6.18482 8.62279 7.40381 7.40381C8.62279 6.18482 10.2761 5.5 12 5.5ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM10.75 14.5H10V16H10.75H13.25H14V14.5H13.25H13V11.75V11H12.25H10.75H10V12.5H10.75H11.5V14.5H10.75ZM13 10V8H11V10H13Z"/>
</svg>
`,j=`
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.2 8.8V18C7.2 18.2209 7.37909 18.4 7.6 18.4H16.4C16.6231 18.4 16.8 18.2208 16.8 18.0021V8.80007L18.4 8.8V18.0021C18.4 19.1066 17.5046 20 16.4 20H7.6C6.49543 20 5.6 19.1046 5.6 18V8.8H4.8C4.35817 8.8 4 8.44183 4 8C4 7.55817 4.35817 7.2 4.8 7.2H8V4.8C8 4.58783 8.08429 4.38434 8.23431 4.23431C8.38434 4.08429 8.58783 4 8.8 4H15.2C15.4122 4 15.6157 4.08429 15.7657 4.23431C15.9157 4.38434 16 4.58783 16 4.8V7.2H19.2C19.6418 7.2 20 7.55817 20 8C20 8.44183 19.6418 8.8 19.2 8.8H18.4H7.2ZM9.6 7.2V5.6H14.4V7.2H9.6Z"/>
  </svg>
`,w={info:z,trash:j},M="A button in the context of UI is an interactive element that allows users to perform an action.\r\n\r\nThe `Button` from `@cocokits` provides a flexible, customizable button element within React applications. This component is compatible with multiple design system themes and allows for various configurations, including different button types, colors, and sizes.\r\n",ht={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],renderConditions:[s("Overview")],hasControl:!0,controls:[k("Button"),d(),A(),E(),h("none"),b("heartFill"),I(),T()]}},args:{},render:t=>o.jsxs(n,{...v(t),disabled:t.cckControl.disabled,children:[t.cckControl.leftIcon!=="none"&&o.jsx(a,{icon:t.cckIcons[t.cckControl.leftIcon]}),t.cckControl.text,t.cckControl.rightIcon!=="none"&&o.jsx(a,{icon:t.cckIcons[t.cckControl.rightIcon]})]})},bt={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[u("type"),s("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}]}},render:t=>{var c;return o.jsx(o.Fragment,{children:(c=t.cckControl.themeComponentConfig.type)==null?void 0:c.values.map((i,p)=>o.jsx(n,{type:i,children:i},p))})}},It={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[u("size"),s("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[d()]}},render:t=>{var c;return o.jsx(o.Fragment,{children:(c=t.cckControl.themeComponentConfig.size)==null?void 0:c.values.map((i,p)=>o.jsxs(n,{type:t.cckControl.type,size:i,children:["Button - ",i]},p))})}},Tt={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[u("color"),s("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[d()]}},render:t=>{var c;return o.jsx(o.Fragment,{children:(c=t.cckControl.themeComponentConfig.color)==null?void 0:c.values.map((i,p)=>o.jsx(n,{type:t.cckControl.type,color:i,children:i},p))})}},H={[e.FramesX]:{},[e.CocoKits]:{}},V={[e.FramesX]:{},[e.CocoKits]:{}},$=[{language:"tsx",filename:"BackButton.tsx",code:`
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
`}];function y(t){return o.jsxs(n,{children:[o.jsx(a,{icon:m.arrowLeft}),o.jsx("span",{children:"Back"})]})}y.__docgenInfo={description:"",methods:[],displayName:"BackButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const vt={name:"Back Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:$,exampleStory:{templateArgsMap:H,cssArgsMap:V}}},render:t=>o.jsx(_,{styles:t.cckExampleCssVariables,children:o.jsx(y,{cckExampleArgs:t.cckExampleArgs})})},_=r.div`
  ${({styles:t})=>l`${t}`}
`,R={[e.FramesX]:{buttonType:"ghost"},[e.CocoKits]:{buttonType:"outline"}},L={[e.FramesX]:{},[e.CocoKits]:{}},F=[{language:"tsx",filename:"CopyLinkButton.tsx",code:`
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
`}];function x(t){return o.jsxs(n,{type:t.cckExampleArgs.buttonType,children:[o.jsx(a,{icon:m.link}),o.jsx("span",{children:"Copy Link"})]})}x.__docgenInfo={description:"",methods:[],displayName:"CopyLinkButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const zt={name:"Copy Link Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:F,exampleStory:{templateArgsMap:R,cssArgsMap:L}}},render:t=>o.jsx(N,{styles:t.cckExampleCssVariables,children:o.jsx(x,{cckExampleArgs:t.cckExampleArgs})})},N=r.div`
  ${({styles:t})=>l`${t}`}
`,O={[e.FramesX]:{buttonType:"default",buttonColor:"danger"},[e.CocoKits]:{buttonType:"primary",buttonColor:"error"}},D={[e.FramesX]:{},[e.CocoKits]:{}},K=[{language:"tsx",filename:"DeleteButton.tsx",code:`
import { OutlineIcons } from '@cocokits/common-icons';

import { Button, SvgIcon } from '@cocokits/react-components';

export function DeleteButton(props: {cckExampleArgs: ExampleArgs}) {

  return (
    <Button color='<%= buttonColor %>' type='<%= buttonType %>'>  
      <SvgIcon icon={OutlineIcons.trash}/>
      <span>Delete</span>
    </Button>
  );
}
`}];function B(t){return o.jsxs(n,{color:t.cckExampleArgs.buttonColor,type:t.cckExampleArgs.buttonType,children:[o.jsx(a,{icon:w.trash}),o.jsx("span",{children:"Delete"})]})}B.__docgenInfo={description:"",methods:[],displayName:"DeleteButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const jt={name:"Delete Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:K,exampleStory:{templateArgsMap:O,cssArgsMap:D}}},render:t=>o.jsx(X,{styles:t.cckExampleCssVariables,children:o.jsx(B,{cckExampleArgs:t.cckExampleArgs})})},X=r.div`
  ${({styles:t})=>l`${t}`}
`,U={[e.FramesX]:{buttonType:"default",buttonColor:"brand",buttonSize:"md"},[e.CocoKits]:{buttonType:"primary ",buttonColor:"brand",buttonSize:"md"}},P={[e.FramesX]:{},[e.CocoKits]:{}},q=[{language:"tsx",filename:"AddNewButton.tsx",code:`
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
`}];function C(t){return o.jsxs(n,{type:t.cckExampleArgs.buttonType,color:t.cckExampleArgs.buttonColor,size:t.cckExampleArgs.buttonSize,children:[o.jsx("span",{children:"Add New"}),o.jsx(a,{icon:m.plus})]})}C.__docgenInfo={description:"",methods:[],displayName:"AddNewButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const wt={name:"Volume Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:q,exampleStory:{templateArgsMap:U,cssArgsMap:P}}},render:t=>o.jsx(G,{styles:t.cckExampleCssVariables,children:o.jsx(C,{cckExampleArgs:t.cckExampleArgs})})},G=r.div`
  ${({styles:t})=>l`
    ${t}
  `}
`,Z={[e.FramesX]:{buttonType:"secondary",buttonColor:"brand"},[e.CocoKits]:{buttonType:"outline",buttonColor:"brand"}},W={[e.FramesX]:{},[e.CocoKits]:{}},Y=[{language:"tsx",filename:"ShowMoreButton.tsx",code:`
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
`}];function f(t){return o.jsxs(n,{type:t.cckExampleArgs.buttonType,color:t.cckExampleArgs.buttonColor,children:[o.jsx("span",{children:"Show More"}),o.jsx(a,{icon:m.arrowHeadDown})]})}f.__docgenInfo={description:"",methods:[],displayName:"ShowMoreButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Mt={name:"Volume Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:Y,exampleStory:{templateArgsMap:Z,cssArgsMap:W}}},render:t=>o.jsx(J,{styles:t.cckExampleCssVariables,children:o.jsx(f,{cckExampleArgs:t.cckExampleArgs})})},J=r.div`
  ${({styles:t})=>l`
    ${t}
  `}
`,Q={[e.FramesX]:{firstButtonType:"secondary",firstButtonSize:"md",firstButtonColor:"brand",secondButtonType:"default",secondButtonSize:"md",secondButtonColor:"brand"},[e.CocoKits]:{firstButtonType:"outline",firstButtonSize:"md",firstButtonColor:"brand",secondButtonType:"primary",secondButtonSize:"md",secondButtonColor:"brand"}},tt={[e.FramesX]:{},[e.CocoKits]:{}},ot=[{language:"tsx",filename:"StackHorizontalButton.tsx",code:`
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
`}];function g(t){return o.jsxs(et,{children:[o.jsx(n,{type:t.cckExampleArgs.firstButtonType,size:t.cckExampleArgs.firstButtonSize,color:t.cckExampleArgs.firstButtonColor,children:"Cancel"}),o.jsx(n,{type:t.cckExampleArgs.secondButtonType,size:t.cckExampleArgs.secondButtonSize,color:t.cckExampleArgs.secondButtonColor,children:"Confirm"})]})}const et=r.div`
  display: flex;
  gap: 12px;
`;g.__docgenInfo={description:"",methods:[],displayName:"StackHorizontalButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Ht={name:"Volume Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:ot,exampleStory:{templateArgsMap:Q,cssArgsMap:tt}}},render:t=>o.jsx(nt,{styles:t.cckExampleCssVariables,children:o.jsx(g,{cckExampleArgs:t.cckExampleArgs})})},nt=r.div`
  ${({styles:t})=>l`
    ${t}
  `}
`,st={[e.FramesX]:{firstButtonType:"secondary",firstButtonSize:"md",firstButtonColor:"brand",secondButtonType:"default",secondButtonSize:"md",secondButtonColor:"brand"},[e.CocoKits]:{firstButtonType:"outline",firstButtonSize:"md",firstButtonColor:"brand",secondButtonType:"primary",secondButtonSize:"md",secondButtonColor:"brand"}},rt={[e.FramesX]:{},[e.CocoKits]:{}},ct=[{language:"tsx",filename:"StackVerticalButton.tsx",code:`
import React from 'react';
import { styled } from 'styled-components';

import { Icons } from '@cocokits/common-icons';

import { Button, SvgIcon } from '@cocokits/react-components';

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
`}];function S(t){return o.jsxs(it,{children:[o.jsx(n,{type:t.cckExampleArgs.firstButtonType,size:t.cckExampleArgs.firstButtonSize,color:t.cckExampleArgs.firstButtonColor,children:"Skip"}),o.jsxs(n,{type:t.cckExampleArgs.secondButtonType,size:t.cckExampleArgs.secondButtonSize,color:t.cckExampleArgs.secondButtonColor,children:["Confirm",o.jsx(a,{icon:m.arrowRight})]})]})}const it=r.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  gap: 12px;
`;S.__docgenInfo={description:"",methods:[],displayName:"StackVerticalButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Vt={name:"Volume Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:ct,exampleStory:{templateArgsMap:st,cssArgsMap:rt}}},render:t=>o.jsx(at,{styles:t.cckExampleCssVariables,children:o.jsx(S,{cckExampleArgs:t.cckExampleArgs})})},at=r.div`
  ${({styles:t})=>l`
    ${t}
  `}
`,$t={component:n,title:"UI Components/Button",decorators:[],parameters:{docs:{description:{component:[M].join(`
`)}},cckAddon:{componentName:"button"}},argTypes:{}},_t=["Default","Type","Size","Color","BackButtonStory","CopyLinkButtonStory","DeleteButtonStory","AddNewButtonStory","ShowMoreButtonStory","StackHorizontalButtonStory","StackVerticalButtonStory"];export{wt as AddNewButtonStory,vt as BackButtonStory,Tt as Color,zt as CopyLinkButtonStory,ht as Default,jt as DeleteButtonStory,Mt as ShowMoreButtonStory,It as Size,Ht as StackHorizontalButtonStory,Vt as StackVerticalButtonStory,bt as Type,_t as __namedExportsOrder,$t as default};
