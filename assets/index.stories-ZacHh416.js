import{B as c,j as l,N as i,Q as u,I as s,R as g}from"./doc-page-BxZKXuST.js";import{ag as e}from"./chunk-NUUEMKO5-s6z9Pfb4.js";import"./mdx-page-with-theme-section-DOp5Uwfh.js";import{r as a,o as C,J as I,K as S,t as d,c as k,s as b,a as B,d as M,j as p}from"./control.config-CV_xzXa5.js";import{r as V}from"./index-qVDZzPEr.js";import{r as z}from"./preview.base-Bdj123Qn.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./menu-item-Cyn1qhyx.js";import"./toggle-4Z1M9lIo.js";import"./iframe-Bj4MtXn0.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const A="A button in the context of UI is an interactive element that allows users to perform an action.\r\n\r\nThe `Button` from `@cocokits` provides a flexible, customizable button element within React applications. This component is compatible with multiple design system themes and allows for various configurations, including different button types, colors, and sizes.\r\n",J={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],renderConditions:[a("Overview")],hasControl:!0,controls:[C("Button"),I("heartFill"),S("none"),d(),k(),b(),B(),M()]}},args:{},render:o=>e.jsxs(c,{...z(o),disabled:o.cckControl.disabled,children:[o.cckControl.leftIcon!=="none"&&e.jsx(l,{icon:o.cckIcons[o.cckControl.leftIcon]}),o.cckControl.text,o.cckControl.rightIcon!=="none"&&e.jsx(l,{icon:o.cckIcons[o.cckControl.rightIcon]})]})},Q={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[p("type"),a("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}]}},render:o=>{var t;return e.jsx(e.Fragment,{children:(t=o.cckControl.themeComponentConfig.type)==null?void 0:t.values.map((n,r)=>e.jsx(c,{type:n,children:n},r))})}},Z={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[p("color"),a("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[d()]}},render:o=>{var t;return e.jsx(e.Fragment,{children:(t=o.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((n,r)=>e.jsx(c,{type:o.cckControl.type,color:n,children:n},r))})}},oo={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[p("size"),a("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[d()]}},render:o=>{var t;return e.jsx(e.Fragment,{children:(t=o.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((n,r)=>e.jsxs(c,{type:o.cckControl.type,size:n,children:["Button - ",n]},r))})}},j={[i.FramesX]:{name:"FramesX",volumeIconSize:"2xl",volumeIconColor:"brand"},[i.CocoKits]:{name:"CocoKits",volumeIconSize:"2xl",volumeIconColor:"h-contrast"}},E={[i.FramesX]:{"--volume-host-gap":"0px","--volume-text-font":"var(--text-xs-font-medium)","--volume-text-color":"var(--text-dark-primary)"},[i.CocoKits]:{"--volume-host-gap":"4px","--volume-text-font":"var(--display-xs-medium)","--volume-text-color":"var(--color-font-default)"}},L=[{language:"tsx",filename:"VolumeButton.styled.tsx",code:`
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

export function VolumeButton() {
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
      }`,visibleConditions:[o=>o.id===i.CocoKits]},{language:"scss",filename:"global.scss",code:`
      :root {
        --volume-host-gap: 0px;
        --volume-text-font: var(--text-xs-font-medium);
        --volume-text-color: var(--text-dark-primary);
      }`,visibleConditions:[o=>o.id===i.FramesX]}],O=u.div`
  display: flex;
  align-items: center;
  gap: var(--volume-host-gap);
`,w=u.span`
  font: var(--volume-text-font);
  color: var(--volume-text-color);
`,m={Host:O,Label:w},f=5,v=0;function x(o){const[t,n]=V.useState(3),r=()=>{switch(t){case 0:return s.volumeMute;case 1:return s.volumeOff;case 2:return s.volumeLow;case 3:return s.volume;case 4:return s.volumeHigh;default:return s.volumeHigh}},y=()=>{n(Math.max(v,Math.min(f,t+1)))},h=()=>{n(Math.max(v,Math.min(f,t-1)))};return e.jsxs(m.Host,{children:[e.jsx(c,{size:"sm",onClick:h,children:e.jsx(l,{icon:s.minus})}),e.jsx(m.Label,{children:o.cckExampleArgs.name}),e.jsx(l,{size:o.cckExampleArgs.volumeIconSize,color:o.cckExampleArgs.volumeIconColor,icon:r()}),e.jsx(m.Label,{children:t}),e.jsx(c,{size:"sm",onClick:y,children:e.jsx(l,{icon:s.plus})})]})}x.__docgenInfo={description:"",methods:[],displayName:"VolumeButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const eo={name:"Volume Button",parameters:{cckAddon:{renderConditions:[a("Examples")],source:L,exampleStory:{templateArgsMap:j,cssArgsMap:E}}},render:o=>e.jsx(T,{styles:o.cckExampleVariables,children:e.jsx(x,{cckExampleArgs:o.cckExampleArgs})})},T=u.div`
  ${({styles:o})=>g`${o}`}
`,to={component:c,title:"UI Components/Button",decorators:[],parameters:{docs:{description:{component:[A].join(`
`)}},cckAddon:{componentName:"button"}},argTypes:{}},no=["Default","Type","Color","Size","VolumeButtonStory"];export{Z as Color,J as Default,oo as Size,Q as Type,eo as VolumeButtonStory,no as __namedExportsOrder,to as default};
