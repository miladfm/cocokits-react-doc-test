import{B as r,S as c,h as l,i,I as t,j as g}from"./doc-page-DiXawDwr.js";import{ag as o}from"./chunk-NUUEMKO5-CZ1jAMfe.js";import{r as h}from"./decorator-DCu1Xl3O.js";import{A as n}from"./addon.model-Bsae6IwI.js";import"./mdx-page-with-theme-section-KRT1t_RX.js";import{r as I}from"./index-qVDZzPEr.js";import"./react-18-BR1vYS__.js";import"./index-DM35cTar.js";import"./iframe-dTiSLixD.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";function p(e){return s=>s.docPageTab===e}const S="A button in the context of UI is an interactive element that allows users to perform an action.\r\n\r\nThe `Button` from `@cocokits` provides a flexible, customizable button element within React applications. This component is compatible with multiple design system themes and allows for various configurations, including different button types, colors, and sizes.\r\n",K={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"exampleComponent.tsx",language:"tsx",code:`

          import { Button, SvgIcon} from '@cocokits/react-components';
import { Example1 } from './examples/examples.stories';

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
          `}],renderConditions:[p("Overview")],hasControl:!0,controls:[{displayName:"Text",default:"Button",storyArgKey:"text",type:n.Text},{displayName:"Left Icon",default:"heartFill",icons:["none","heartFill","heart","link"],storyArgKey:"leftIcon",type:n.Icon},{displayName:"Right Icon",default:"none",icons:["none","heartFill","heart","link"],storyArgKey:"rightIcon",type:n.Icon},{prop:"type",type:n.SelectThemeConfig},{prop:"color",type:n.SelectThemeConfig},{prop:"size",type:n.SelectThemeConfig},{prop:"additional",type:n.SelectThemeConfig},{displayName:"Disabled",default:!1,storyArgKey:"disabled",type:n.Boolean}]}},args:{},render:e=>o.jsxs(r,{...h(e),disabled:e.cckControl.disabled,children:[e.cckControl.leftIcon!=="none"&&o.jsx(c,{icon:e.cckIcons[e.cckControl.leftIcon]}),e.cckControl.text,e.cckControl.rightIcon!=="none"&&o.jsx(c,{icon:e.cckIcons[e.cckControl.rightIcon]})]})},C={[l.FramesX]:{name:"FramesX",volumeIconSize:"2xl",volumeIconColor:"brand"},[l.CocoKits]:{name:"CocoKits",volumeIconSize:"2xl",volumeIconColor:"h-contrast"}},b={[l.FramesX]:{"--volume-host-gap":"0px","--volume-text-font":"var(--text-xs-font-medium)","--volume-text-color":"var(--text-dark-primary)"},[l.CocoKits]:{"--volume-host-gap":"4px","--volume-text-font":"var(--display-xs-medium)","--volume-text-color":"var(--color-font-default)"}},M=[{language:"tsx",filename:"VolumeButton.styled.tsx",code:`
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
import { Styled } from './VolumeButton.styled';
import { Button, SvgIcon } from '@cocokits/react-components';
import { Icons } from '@cocokits/common-icons';

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
      }`,visibleConditions:[e=>e.id===l.CocoKits]},{language:"scss",filename:"global.scss",code:`
      :root {
        --volume-host-gap: 0px;
        --volume-text-font: var(--text-xs-font-medium);
        --volume-text-color: var(--text-dark-primary);
      }`,visibleConditions:[e=>e.id===l.FramesX]}],k=i.div`
  display: flex;
  align-items: center;
  gap: var(--volume-host-gap);
`,V=i.span`
  font: var(--volume-text-font);
  color: var(--volume-text-color);
`,a={Host:k,Label:V},u=5,d=0;function f(e){const[s,m]=I.useState(3),x=()=>{switch(s){case 0:return t.volumeMute;case 1:return t.volumeOff;case 2:return t.volumeLow;case 3:return t.volume;case 4:return t.volumeHigh;default:return t.volumeHigh}},v=()=>{m(Math.max(d,Math.min(u,s+1)))},y=()=>{m(Math.max(d,Math.min(u,s-1)))};return o.jsxs(a.Host,{children:[o.jsx(r,{size:"sm",onClick:y,children:o.jsx(c,{icon:t.minus})}),o.jsx(a.Label,{children:e.cckExampleArgs.name}),o.jsx(c,{size:e.cckExampleArgs.volumeIconSize,color:e.cckExampleArgs.volumeIconColor,icon:x()}),o.jsx(a.Label,{children:s}),o.jsx(r,{size:"sm",onClick:v,children:o.jsx(c,{icon:t.plus})})]})}f.__docgenInfo={description:"",methods:[],displayName:"VolumeButton",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const R={name:"Volume Button",parameters:{cckAddon:{renderConditions:[p("Examples")],source:M,exampleStory:{templateArgsMap:C,cssArgsMap:b}}},render:e=>o.jsx(A,{styles:e.cckExampleVariables,children:o.jsx(f,{cckExampleArgs:e.cckExampleArgs})})},A=i.div`
  ${({styles:e})=>g`${e}`}
`,X={component:r,title:"UI Components/Button",decorators:[],parameters:{docs:{description:{component:[S].join(`
`)}},cckAddon:{componentName:"button"}},argTypes:{}},F=["Default","VolumeButtonStory"];export{K as Default,R as VolumeButtonStory,F as __namedExportsOrder,X as default};
