import{B as c,S as l,x as i,y as u,I as s,z as g}from"./doc-page-DBjR3k1M.js";import{ag as o}from"./chunk-NUUEMKO5-Dz559y2o.js";import"./mdx-page-with-theme-section-CIBIxBgl.js";import{r as a,v as C,B as I,C as S,m as d,c as k,s as b,a as B,d as M,w as p}from"./control.config-CLCh4489.js";import{r as V}from"./index-qVDZzPEr.js";import{r as z}from"./preview.base-BI4venBl.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./radio.context-BCyPJP52.js";import"./toggle-atil26TP.js";import"./iframe-BGBlGzCY.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const A="A button in the context of UI is an interactive element that allows users to perform an action.\r\n\r\nThe `Button` from `@cocokits` provides a flexible, customizable button element within React applications. This component is compatible with multiple design system themes and allows for various configurations, including different button types, colors, and sizes.\r\n",J={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],renderConditions:[a("Overview")],hasControl:!0,controls:[C("Button"),I("heartFill"),S("none"),d(),k(),b(),B(),M()]}},args:{},render:e=>o.jsxs(c,{...z(e),disabled:e.cckControl.disabled,children:[e.cckControl.leftIcon!=="none"&&o.jsx(l,{icon:e.cckIcons[e.cckControl.leftIcon]}),e.cckControl.text,e.cckControl.rightIcon!=="none"&&o.jsx(l,{icon:e.cckIcons[e.cckControl.rightIcon]})]})},Q={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[p("type"),a("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.type)==null?void 0:t.values.map((n,r)=>o.jsx(c,{type:n,children:n},r))})}},Z={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[p("color"),a("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[d()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((n,r)=>o.jsx(c,{type:e.cckControl.type,color:n,children:n},r))})}},ee={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[p("size"),a("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[d()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((n,r)=>o.jsxs(c,{type:e.cckControl.type,size:n,children:["Button - ",n]},r))})}},E={[i.FramesX]:{name:"FramesX",volumeIconSize:"2xl",volumeIconColor:"brand"},[i.CocoKits]:{name:"CocoKits",volumeIconSize:"2xl",volumeIconColor:"h-contrast"}},j={[i.FramesX]:{"--volume-host-gap":"0px","--volume-text-font":"var(--text-xs-font-medium)","--volume-text-color":"var(--text-dark-primary)"},[i.CocoKits]:{"--volume-host-gap":"4px","--volume-text-font":"var(--display-xs-medium)","--volume-text-color":"var(--color-font-default)"}},L=[{language:"tsx",filename:"VolumeButton.styled.tsx",code:`
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
      }`,visibleConditions:[e=>e.id===i.CocoKits]},{language:"scss",filename:"global.scss",code:`
      :root {
        --volume-host-gap: 0px;
        --volume-text-font: var(--text-xs-font-medium);
        --volume-text-color: var(--text-dark-primary);
      }`,visibleConditions:[e=>e.id===i.FramesX]}],O=u.div`
  display: flex;
  align-items: center;
  gap: var(--volume-host-gap);
`,w=u.span`
  font: var(--volume-text-font);
  color: var(--volume-text-color);
`,m={Host:O,Label:w},f=5,v=0;function x(e){const[t,n]=V.useState(3),r=()=>{switch(t){case 0:return s.volumeMute;case 1:return s.volumeOff;case 2:return s.volumeLow;case 3:return s.volume;case 4:return s.volumeHigh;default:return s.volumeHigh}},y=()=>{n(Math.max(v,Math.min(f,t+1)))},h=()=>{n(Math.max(v,Math.min(f,t-1)))};return o.jsxs(m.Host,{children:[o.jsx(c,{size:"sm",onClick:h,children:o.jsx(l,{icon:s.minus})}),o.jsx(m.Label,{children:e.cckExampleArgs.name}),o.jsx(l,{size:e.cckExampleArgs.volumeIconSize,color:e.cckExampleArgs.volumeIconColor,icon:r()}),o.jsx(m.Label,{children:t}),o.jsx(c,{size:"sm",onClick:y,children:o.jsx(l,{icon:s.plus})})]})}x.__docgenInfo={description:"",methods:[],displayName:"VolumeButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const oe={name:"Volume Button",parameters:{cckAddon:{renderConditions:[a("Examples")],source:L,exampleStory:{templateArgsMap:E,cssArgsMap:j}}},render:e=>o.jsx(T,{styles:e.cckExampleVariables,children:o.jsx(x,{cckExampleArgs:e.cckExampleArgs})})},T=u.div`
  ${({styles:e})=>g`${e}`}
`,te={component:c,title:"UI Components/Button",decorators:[],parameters:{docs:{description:{component:[A].join(`
`)}},cckAddon:{componentName:"button"}},argTypes:{}},ne=["Default","Type","Color","Size","VolumeButtonStory"];export{Z as Color,J as Default,ee as Size,Q as Type,oe as VolumeButtonStory,ne as __namedExportsOrder,te as default};
