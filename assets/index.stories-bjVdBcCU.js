import{j as o,B as r,S as l,v as c,w as a,I as n,x as C}from"./doc-page-DxYWeKL0.js";import"./mdx-page-with-theme-section-9sAv-js5.js";import{r as m,x as y,A as h,B as g,m as p,c as N,s as V,a as I,d as B,y as d}from"./control.config-C-L-5fkH.js";import{r as D}from"./preview.base-BgqTF_F3.js";import{r as E}from"./index-Sx7-C1CO.js";import"./react-18-dacazFhf.js";import"./index-D6h3T3dG.js";import"./chunk-NUUEMKO5-C39SUnvU.js";import"./iframe-C-op1SJ0.js";import"../sb-preview/runtime.js";import"./index-XgUrtOhL.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const S="A button in the context of UI is an interactive element that allows users to perform an action.\r\n\r\nThe `Button` from `@cocokits` provides a flexible, customizable button element within React applications. This component is compatible with multiple design system themes and allows for various configurations, including different button types, colors, and sizes.\r\n",$={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],renderConditions:[m("Overview")],hasControl:!0,controls:[y("Button"),h("heartFill"),g("none"),p(),N(),V(),I(),B()]}},args:{},render:e=>o.jsxDEV(r,{...D(e),disabled:e.cckControl.disabled,children:[e.cckControl.leftIcon!=="none"&&o.jsxDEV(l,{icon:e.cckIcons[e.cckControl.leftIcon]},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/overview/default.stories.tsx",lineNumber:65,columnNumber:48},void 0),e.cckControl.text,e.cckControl.rightIcon!=="none"&&o.jsxDEV(l,{icon:e.cckIcons[e.cckControl.rightIcon]},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/overview/default.stories.tsx",lineNumber:67,columnNumber:49},void 0)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/overview/default.stories.tsx",lineNumber:61,columnNumber:5},void 0)},G={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[d("type"),m("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}]}},render:e=>{var t;return o.jsxDEV(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.type)==null?void 0:t.values.map((s,i)=>o.jsxDEV(r,{type:s,children:s},i,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/overview/type.stories.tsx",lineNumber:43,columnNumber:9},void 0))},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/overview/type.stories.tsx",lineNumber:41,columnNumber:5},void 0)}},J={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[d("color"),m("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[p()]}},render:e=>{var t;return o.jsxDEV(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((s,i)=>o.jsxDEV(r,{type:e.cckControl.type,color:s,children:s},i,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/overview/color.stories.tsx",lineNumber:48,columnNumber:9},void 0))},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/overview/color.stories.tsx",lineNumber:46,columnNumber:5},void 0)}},Q={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[d("size"),m("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[p()]}},render:e=>{var t;return o.jsxDEV(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((s,i)=>o.jsxDEV(r,{type:e.cckControl.type,size:s,children:["Button - ",s]},i,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/overview/size.stories.tsx",lineNumber:50,columnNumber:9},void 0))},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/overview/size.stories.tsx",lineNumber:48,columnNumber:5},void 0)}},j={[c.FramesX]:{name:"FramesX",volumeIconSize:"2xl",volumeIconColor:"brand"},[c.CocoKits]:{name:"CocoKits",volumeIconSize:"2xl",volumeIconColor:"h-contrast"}},M={[c.FramesX]:{"--volume-host-gap":"0px","--volume-text-font":"var(--text-xs-font-medium)","--volume-text-color":"var(--text-dark-primary)"},[c.CocoKits]:{"--volume-host-gap":"4px","--volume-text-font":"var(--display-xs-medium)","--volume-text-color":"var(--color-font-default)"}},U=[{language:"tsx",filename:"VolumeButton.styled.tsx",code:`
import styled from "styled-components";

const Host = styled.div\`
  display: flex;
  align-items: center;
  gap: var(--volume-host-gap);
\`;

const Label = styled.span\`
  font: var(--volume-text-font);
  color: var(--volume-text-color);
\`;

export const Styled = {
  Host,
  Label
};`},{language:"tsx",filename:"VolumeButton.tsx",code:`
import { useState } from 'react';

import { Icons } from '@cocokits/common-icons';
import { Button, SvgIcon } from '@cocokits/react-components';

import { Styled } from './VolumeButton.styled';

const MAX_VOLUME = 5;
const MIN_VOLUME = 0;

export function VolumeButtonStory() {
  const [volume, setVolume] = useState(3);

  const volumeIcon = () => {
    switch (volume) {
      case 0:
        return Icons.volumeMute;
      case 1:
        return Icons.volumeOff;
      case 2:
        return Icons.volumeLow;
      case 3:
        return Icons.volume;
      case 4:
        return Icons.volumeHigh;
      default:
        return Icons.volumeHigh;
    }
  };

  const increaseVolume = () => {
    setVolume(Math.max(MIN_VOLUME, Math.min(MAX_VOLUME, volume + 1)));
  };

  const decreaseVolume = () => {
    setVolume(Math.max(MIN_VOLUME, Math.min(MAX_VOLUME, volume - 1)));
  };

  return (
    <Styled.Host>
      <Button size="sm" onClick={decreaseVolume}>
        <SvgIcon icon={Icons.minus} />
      </Button>

      <Styled.Label><%= name %></Styled.Label>

      <SvgIcon
        size='<%= volumeIconSize %>'
        color='<%= volumeIconColor %>'
        icon={volumeIcon()}
      />

      <Styled.Label>{volume}</Styled.Label>

      <Button size="sm" onClick={increaseVolume}>
        <SvgIcon icon={Icons.plus} />
      </Button>

    </Styled.Host>
  );
}
`},{language:"scss",filename:"global.scss",code:`
      :root {
        --volume-host-gap: 4px;
        --volume-text-font: var(--display-xs-medium);
        --volume-text-color: var(--color-font-default);
      }`,visibleConditions:[e=>e.id===c.CocoKits]},{language:"scss",filename:"global.scss",code:`
      :root {
        --volume-host-gap: 0px;
        --volume-text-font: var(--text-xs-font-medium);
        --volume-text-color: var(--text-dark-primary);
      }`,visibleConditions:[e=>e.id===c.FramesX]}],z=a.div`
  display: flex;
  align-items: center;
  gap: var(--volume-host-gap);
`,w=a.span`
  font: var(--volume-text-font);
  color: var(--volume-text-color);
`,u={Host:z,Label:w},f=5,v=0;function b(e){const[t,s]=E.useState(3),i=()=>{switch(t){case 0:return n.volumeMute;case 1:return n.volumeOff;case 2:return n.volumeLow;case 3:return n.volume;case 4:return n.volumeHigh;default:return n.volumeHigh}},x=()=>{s(Math.max(v,Math.min(f,t+1)))},k=()=>{s(Math.max(v,Math.min(f,t-1)))};return o.jsxDEV(u.Host,{children:[o.jsxDEV(r,{size:"sm",onClick:k,children:o.jsxDEV(l,{icon:n.minus},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/examples/volume-button/VolumeButton.tsx",lineNumber:43,columnNumber:9},this)},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/examples/volume-button/VolumeButton.tsx",lineNumber:42,columnNumber:7},this),o.jsxDEV(u.Label,{children:e.cckExampleArgs.name},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/examples/volume-button/VolumeButton.tsx",lineNumber:46,columnNumber:7},this),o.jsxDEV(l,{size:e.cckExampleArgs.volumeIconSize,color:e.cckExampleArgs.volumeIconColor,icon:i()},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/examples/volume-button/VolumeButton.tsx",lineNumber:48,columnNumber:7},this),o.jsxDEV(u.Label,{children:t},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/examples/volume-button/VolumeButton.tsx",lineNumber:54,columnNumber:7},this),o.jsxDEV(r,{size:"sm",onClick:x,children:o.jsxDEV(l,{icon:n.plus},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/examples/volume-button/VolumeButton.tsx",lineNumber:57,columnNumber:9},this)},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/examples/volume-button/VolumeButton.tsx",lineNumber:56,columnNumber:7},this)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/examples/volume-button/VolumeButton.tsx",lineNumber:41,columnNumber:5},this)}b.__docgenInfo={description:"",methods:[],displayName:"VolumeButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Z={name:"Volume Button",parameters:{cckAddon:{renderConditions:[m("Examples")],source:U,exampleStory:{templateArgsMap:j,cssArgsMap:M}}},render:e=>o.jsxDEV(A,{styles:e.cckExampleVariables,children:o.jsxDEV(b,{cckExampleArgs:e.cckExampleArgs},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/examples/volume-button/_volume-button.stories.tsx",lineNumber:24,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/button/examples/volume-button/_volume-button.stories.tsx",lineNumber:23,columnNumber:5},void 0)},A=a.div`
  ${({styles:e})=>C`${e}`}
`,ee={component:r,title:"UI Components/Button",decorators:[],parameters:{docs:{description:{component:[S].join(`
`)}},cckAddon:{componentName:"button"}},argTypes:{}},oe=["Default","Type","Color","Size","VolumeButtonStory"];export{J as Color,$ as Default,Q as Size,G as Type,Z as VolumeButtonStory,oe as __namedExportsOrder,ee as default};
