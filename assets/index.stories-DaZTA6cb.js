import{F as t,L as a,e as i}from"./index-CVIK8CIp.js";import"./index-C33_amOP.js";import"./menu-item-B68y8g-9.js";import"./toggle-hkci940J.js";import{j as o}from"./DocsRenderer-CFRXHY34-DnFIM2bJ.js";import"./react-18-B-IeCXFN.js";import"./mdx-page-with-theme-section-BPd9EgOg.js";import{l as r,p as n,m as s,f as l,t as d,c,s as m,a as p,g as f,d as u,r as x,b as h,e as b}from"./control.config-B-LHnSwa.js";import{r as w}from"./preview.base-CR9G6040.js";import"./preview-DfOC2OG8.js";import"./iframe-C_FjfnNR.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";const R="The `Textarea` from `@cocokits` is a versatile UI element designed to allow users to input and edit multiple lines of text seamlessly. Ideal for scenarios where users need to provide detailed information, comments, or descriptions, the Textarea enhances the user experience by offering a spacious and flexible input area. This component integrates effortlessly with various design system themes, ensuring a consistent and visually appealing interface across different application styles.\r\n",E={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[b("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
            
          `}],hasControl:!0,controls:[r(),n(),s(),l(),d(),c(),m(),p(),f(),u(),x(),h()]}},render:e=>o.jsxs(t,{children:[e.cckControl.label&&o.jsx(a,{children:e.cckControl.label}),o.jsx(i,{...w(e),placeholder:e.cckControl.placeholder,required:e.cckControl.required,disabled:e.cckControl.disabled,invalid:e.cckControl.invalid,autoResize:e.cckControl.autoResize,minRows:e.cckControl.minRows,maxRows:e.cckControl.maxRows})]})},M={component:i,title:"UI Components/Textarea",parameters:{docs:{description:{component:[R].join(`
`)}},cckAddon:{componentName:"textarea"}}},O=["Default"];export{E as Default,O as __namedExportsOrder,M as default};
