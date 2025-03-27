import{F as t,L as a,d as i}from"./doc-page-k0DjxlZo.js";import"./index-qVDZzPEr.js";import"./menu-item-yOyptmpb.js";import"./toggle-BvzP4LL0.js";import{ag as o}from"./chunk-NUUEMKO5-Ch6kBRqy.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./mdx-page-with-theme-section-BKPFU3aV.js";import{r,l as n,p as s,m as l,f as d,t as c,c as m,s as p,a as f,g as u,d as x,b as h,e as b}from"./control.config-DRv8_nye.js";import{r as w}from"./preview.base-DgZXWlJO.js";import"./iframe-xcCtAxcb.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const R="The `Textarea` from `@cocokits` is a versatile UI element designed to allow users to input and edit multiple lines of text seamlessly. Ideal for scenarios where users need to provide detailed information, comments, or descriptions, the Textarea enhances the user experience by offering a spacious and flexible input area. This component integrates effortlessly with various design system themes, ensuring a consistent and visually appealing interface across different application styles.\r\n",M={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[r("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
                     import { FormField, Label, Textarea } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
<FormField>
              <% if (label) { %>
                <Label><%= label %></Label>
              <% } %>
              
              <Textarea
                <% if (placeholder) { %> placeholder="<%= placeholder %>" <% } %>
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
                <% if (disabled) { %> disabled <% } %>
                <% if (required) { %> required <% } %>
                <% if (invalid) { %> invalid <% } %>
                <% if (autoResize) { %> autoResize <% } %>
                <% if (typeof minRows !== 'undefined') { %> minRows={<%= minRows %>} <% } %>
                <% if (typeof maxRows !== 'undefined') { %> maxRows={<%= maxRows %>} <% } %>
              />
            </FormField>
                </>
              );
            }
            
          `}],hasControl:!0,controls:[n(),s(),l(),d(),c(),m(),p(),f(),u(),x(),h(),b()]}},render:e=>o.jsxs(t,{children:[e.cckControl.label&&o.jsx(a,{children:e.cckControl.label}),o.jsx(i,{...w(e),placeholder:e.cckControl.placeholder,required:e.cckControl.required,disabled:e.cckControl.disabled,invalid:e.cckControl.invalid,autoResize:e.cckControl.autoResize,minRows:e.cckControl.minRows,maxRows:e.cckControl.maxRows})]})},O={component:i,title:"UI Components/Textarea",parameters:{docs:{description:{component:[R].join(`
`)}},cckAddon:{componentName:"textarea"}}},S=["Default"];export{M as Default,S as __namedExportsOrder,O as default};
