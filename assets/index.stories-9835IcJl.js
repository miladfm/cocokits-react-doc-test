import{B as n,j as a,N as e,I as d,n as l,m as r}from"./index-JWD7Mr_9.js";import{j as o}from"./DocsRenderer-CFRXHY34-BjW3q4eN.js";import"./mdx-page-with-theme-section-DF3pGNGH.js";import{C as k,t as m,c as A,s as E,O as h,P as b,a as I,d as T,e as s,x as u}from"./control.config-BeKCBS3w.js";import"./index-C33_amOP.js";import{r as v}from"./preview.base-BPa6Ngeu.js";import"./react-18-B-IeCXFN.js";import"./menu-item-BF5s_Wzz.js";import"./toggle-D2NTfzx5.js";import"./preview-BLxfJc_2.js";import"./iframe-lR3HNRPu.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";const z=`
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.2 8.8V18C7.2 18.2209 7.37909 18.4 7.6 18.4H16.4C16.6231 18.4 16.8 18.2208 16.8 18.0021V8.80007L18.4 8.8V18.0021C18.4 19.1066 17.5046 20 16.4 20H7.6C6.49543 20 5.6 19.1046 5.6 18V8.8H4.8C4.35817 8.8 4 8.44183 4 8C4 7.55817 4.35817 7.2 4.8 7.2H8V4.8C8 4.58783 8.08429 4.38434 8.23431 4.23431C8.38434 4.08429 8.58783 4 8.8 4H15.2C15.4122 4 15.6157 4.08429 15.7657 4.23431C15.9157 4.38434 16 4.58783 16 4.8V7.2H19.2C19.6418 7.2 20 7.55817 20 8C20 8.44183 19.6418 8.8 19.2 8.8H18.4H7.2ZM9.6 7.2V5.6H14.4V7.2H9.6Z"/>
  </svg>
`,j={trash:z},w="A button in the context of UI is an interactive element that allows users to perform an action.\r\n\r\nThe `Button` from `@cocokits` provides a flexible, customizable button element within React applications. This component is compatible with multiple design system themes and allows for various configurations, including different button types, colors, and sizes.\r\n",At={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],renderConditions:[s("Overview")],hasControl:!0,controls:[k("Button"),m(),A(),E(),h("none"),b("heartFill"),I(),T()]}},args:{},render:t=>o.jsxs(n,{...v(t),disabled:t.cckControl.disabled,children:[t.cckControl.leftIcon!=="none"&&o.jsx(a,{icon:t.cckIcons[t.cckControl.leftIcon]}),t.cckControl.text,t.cckControl.rightIcon!=="none"&&o.jsx(a,{icon:t.cckIcons[t.cckControl.rightIcon]})]})},Et={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[u("type"),s("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}]}},render:t=>{var c;return o.jsx(o.Fragment,{children:(c=t.cckControl.themeComponentConfig.type)==null?void 0:c.values.map((i,p)=>o.jsx(n,{type:i,children:i},p))})}},ht={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[u("size"),s("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[m()]}},render:t=>{var c;return o.jsx(o.Fragment,{children:(c=t.cckControl.themeComponentConfig.size)==null?void 0:c.values.map((i,p)=>o.jsxs(n,{type:t.cckControl.type,size:i,children:["Button - ",i]},p))})}},bt={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[u("color"),s("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[m()]}},render:t=>{var c;return o.jsx(o.Fragment,{children:(c=t.cckControl.themeComponentConfig.color)==null?void 0:c.values.map((i,p)=>o.jsx(n,{type:t.cckControl.type,color:i,children:i},p))})}},$={[e.FramesX]:{},[e.CocoKits]:{}},M={[e.FramesX]:{},[e.CocoKits]:{}},V=[{language:"tsx",filename:"BackButton.tsx",code:`
import { Icons } from '@cocokits/common-icons';

import { Button, SvgIcon } from '@cocokits/react-components';

export function BackButton() {
  return (
    <Button>
      <SvgIcon icon={Icons.arrowLeft} />
      <span>Back</span>
    </Button>
  );
}
`}];function y(t){return o.jsxs(n,{children:[o.jsx(a,{icon:d.arrowLeft}),o.jsx("span",{children:"Back"})]})}y.__docgenInfo={description:"",methods:[],displayName:"BackButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const It={name:"Back Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:V,exampleStory:{templateArgsMap:$,cssArgsMap:M}}},render:t=>o.jsx(_,{styles:t.cckExampleCssVariables,children:o.jsx(y,{cckExampleArgs:t.cckExampleArgs})})},_=r.div`
  ${({styles:t})=>l`
    ${t}
  `}
`,R={[e.FramesX]:{buttonType:"ghost"},[e.CocoKits]:{buttonType:"outline"}},H={[e.FramesX]:{},[e.CocoKits]:{}},L=[{language:"tsx",filename:"CopyLinkButton.tsx",code:`
import { Icons } from '@cocokits/common-icons';

import { Button, SvgIcon } from '@cocokits/react-components';

export function CopyLinkButton() {
  return (
    <Button type='<%= buttonType %>'>
      <SvgIcon icon={Icons.link} />
      <span>Copy Link</span>
    </Button>
  );
}
`}];function x(t){return o.jsxs(n,{type:t.cckExampleArgs.buttonType,children:[o.jsx(a,{icon:d.link}),o.jsx("span",{children:"Copy Link"})]})}x.__docgenInfo={description:"",methods:[],displayName:"CopyLinkButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Tt={name:"Copy Link Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:L,exampleStory:{templateArgsMap:R,cssArgsMap:H}}},render:t=>o.jsx(O,{styles:t.cckExampleCssVariables,children:o.jsx(x,{cckExampleArgs:t.cckExampleArgs})})},O=r.div`
  ${({styles:t})=>l`
    ${t}
  `}
`,N={[e.FramesX]:{buttonType:"default",buttonColor:"danger"},[e.CocoKits]:{buttonType:"primary",buttonColor:"error"}},F={[e.FramesX]:{},[e.CocoKits]:{}},D=[{language:"tsx",filename:"DeleteButton.tsx",code:`
import { OutlineIcons } from '@cocokits/common-icons';

import { Button, SvgIcon } from '@cocokits/react-components';

export function DeleteButton() {
  return (
    <Button color='<%= buttonColor %>' type='<%= buttonType %>'>
      <SvgIcon icon={OutlineIcons.trash} />
      <span>Delete</span>
    </Button>
  );
}
`}];function B(t){return o.jsxs(n,{color:t.cckExampleArgs.buttonColor,type:t.cckExampleArgs.buttonType,children:[o.jsx(a,{icon:j.trash}),o.jsx("span",{children:"Delete"})]})}B.__docgenInfo={description:"",methods:[],displayName:"DeleteButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const vt={name:"Delete Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:D,exampleStory:{templateArgsMap:N,cssArgsMap:F}}},render:t=>o.jsx(K,{styles:t.cckExampleCssVariables,children:o.jsx(B,{cckExampleArgs:t.cckExampleArgs})})},K=r.div`
  ${({styles:t})=>l`
    ${t}
  `}
`,X={[e.FramesX]:{buttonType:"default",buttonColor:"brand",buttonSize:"md"},[e.CocoKits]:{buttonType:"primary ",buttonColor:"brand",buttonSize:"md"}},U={[e.FramesX]:{},[e.CocoKits]:{}},P=[{language:"tsx",filename:"AddNewButton.tsx",code:`
import { Icons } from '@cocokits/common-icons';

import { Button, SvgIcon } from '@cocokits/react-components';

export function AddNewButton() {
  return (
    <Button
      type='<%= buttonType %>'
      color='<%= buttonColor %>'
      size='<%= buttonSize %>'>
      <span>Add New</span>
      <SvgIcon icon={Icons.plus} />
    </Button>
  );
}
`}];function f(t){return o.jsxs(n,{type:t.cckExampleArgs.buttonType,color:t.cckExampleArgs.buttonColor,size:t.cckExampleArgs.buttonSize,children:[o.jsx("span",{children:"Add New"}),o.jsx(a,{icon:d.plus})]})}f.__docgenInfo={description:"",methods:[],displayName:"AddNewButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const zt={name:"Volume Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:P,exampleStory:{templateArgsMap:X,cssArgsMap:U}}},render:t=>o.jsx(q,{styles:t.cckExampleCssVariables,children:o.jsx(f,{cckExampleArgs:t.cckExampleArgs})})},q=r.div`
  ${({styles:t})=>l`
    ${t}
  `}
`,G={[e.FramesX]:{buttonType:"secondary",buttonColor:"brand"},[e.CocoKits]:{buttonType:"outline",buttonColor:"brand"}},W={[e.FramesX]:{},[e.CocoKits]:{}},Y=[{language:"tsx",filename:"ShowMoreButton.tsx",code:`
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
`}];function C(t){return o.jsxs(n,{type:t.cckExampleArgs.buttonType,color:t.cckExampleArgs.buttonColor,children:[o.jsx("span",{children:"Show More"}),o.jsx(a,{icon:d.arrowHeadDown})]})}C.__docgenInfo={description:"",methods:[],displayName:"ShowMoreButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const jt={name:"Volume Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:Y,exampleStory:{templateArgsMap:G,cssArgsMap:W}}},render:t=>o.jsx(Z,{styles:t.cckExampleCssVariables,children:o.jsx(C,{cckExampleArgs:t.cckExampleArgs})})},Z=r.div`
  ${({styles:t})=>l`
    ${t}
  `}
`,J={[e.FramesX]:{firstButtonType:"secondary",firstButtonSize:"md",firstButtonColor:"brand",secondButtonType:"default",secondButtonSize:"md",secondButtonColor:"brand"},[e.CocoKits]:{firstButtonType:"outline",firstButtonSize:"md",firstButtonColor:"brand",secondButtonType:"primary",secondButtonSize:"md",secondButtonColor:"brand"}},Q={[e.FramesX]:{},[e.CocoKits]:{}},tt=[{language:"tsx",filename:"StackHorizontalButton.tsx",code:`
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
`}];function S(t){return o.jsxs(ot,{children:[o.jsx(n,{type:t.cckExampleArgs.firstButtonType,size:t.cckExampleArgs.firstButtonSize,color:t.cckExampleArgs.firstButtonColor,children:"Cancel"}),o.jsx(n,{type:t.cckExampleArgs.secondButtonType,size:t.cckExampleArgs.secondButtonSize,color:t.cckExampleArgs.secondButtonColor,children:"Confirm"})]})}const ot=r.div`
  display: flex;
  gap: 12px;
`;S.__docgenInfo={description:"",methods:[],displayName:"StackHorizontalButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const wt={name:"Volume Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:tt,exampleStory:{templateArgsMap:J,cssArgsMap:Q}}},render:t=>o.jsx(et,{styles:t.cckExampleCssVariables,children:o.jsx(S,{cckExampleArgs:t.cckExampleArgs})})},et=r.div`
  ${({styles:t})=>l`
    ${t}
  `}
`,nt={[e.FramesX]:{firstButtonType:"secondary",firstButtonSize:"md",firstButtonColor:"brand",secondButtonType:"default",secondButtonSize:"md",secondButtonColor:"brand"},[e.CocoKits]:{firstButtonType:"outline",firstButtonSize:"md",firstButtonColor:"brand",secondButtonType:"primary",secondButtonSize:"md",secondButtonColor:"brand"}},st={[e.FramesX]:{},[e.CocoKits]:{}},rt=[{language:"tsx",filename:"StackVerticalButton.tsx",code:`
import React from 'react';
import styled from "styled-components";

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
        <SvgIcon icon={Icons.arrowRight} />
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
`}];function g(t){return o.jsxs(ct,{children:[o.jsx(n,{type:t.cckExampleArgs.firstButtonType,size:t.cckExampleArgs.firstButtonSize,color:t.cckExampleArgs.firstButtonColor,children:"Skip"}),o.jsxs(n,{type:t.cckExampleArgs.secondButtonType,size:t.cckExampleArgs.secondButtonSize,color:t.cckExampleArgs.secondButtonColor,children:["Confirm",o.jsx(a,{icon:d.arrowRight})]})]})}const ct=r.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  gap: 12px;
`;g.__docgenInfo={description:"",methods:[],displayName:"StackVerticalButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const $t={name:"Volume Button",parameters:{cckAddon:{renderConditions:[s("Examples")],source:rt,exampleStory:{templateArgsMap:nt,cssArgsMap:st}}},render:t=>o.jsx(it,{styles:t.cckExampleCssVariables,children:o.jsx(g,{cckExampleArgs:t.cckExampleArgs})})},it=r.div`
  ${({styles:t})=>l`
    ${t}
  `}
`,Mt={component:n,title:"UI Components/Button",decorators:[],parameters:{docs:{description:{component:[w].join(`
`)}},cckAddon:{componentName:"button"}},argTypes:{}},Vt=["Default","Type","Size","Color","BackButtonStory","CopyLinkButtonStory","DeleteButtonStory","AddNewButtonStory","ShowMoreButtonStory","StackHorizontalButtonStory","StackVerticalButtonStory"];export{zt as AddNewButtonStory,It as BackButtonStory,bt as Color,Tt as CopyLinkButtonStory,At as Default,vt as DeleteButtonStory,jt as ShowMoreButtonStory,ht as Size,wt as StackHorizontalButtonStory,$t as StackVerticalButtonStory,Et as Type,Vt as __namedExportsOrder,Mt as default};
