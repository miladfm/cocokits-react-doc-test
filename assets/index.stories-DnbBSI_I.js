import{F as t,L as a,e as i}from"./index-B36bHotA.js";import"./index-C33_amOP.js";import"./radio-group-b_cjD_ID.js";import"./menu-item-xW0HetyI.js";import"./toggle-BB0ff5Y1.js";import{j as o}from"./DocsRenderer-CFRXHY34-Dc1_2tGE.js";import"./react-18-B-IeCXFN.js";import"./mdx-page-with-theme-section-BSQkRqpY.js";import{l as r,p as n,m as s,f as l,t as d,c,s as m,a as p,g as f,d as u,r as x,b as h,e as b}from"./control.config-Cjcq9hKb.js";import{r as w}from"./preview.base-DLlkFKr5.js";import"./preview-DRFNhc7A.js";import"./iframe-DspT6UfP.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";const R="The `Textarea` from `@cocokits` is a versatile UI element designed to allow users to input and edit multiple lines of text seamlessly. Ideal for scenarios where users need to provide detailed information, comments, or descriptions, the Textarea enhances the user experience by offering a spacious and flexible input area. This component integrates effortlessly with various design system themes, ensuring a consistent and visually appealing interface across different application styles.\r\n",M={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[b("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
            
          `}],hasControl:!0,controls:[r(),n(),s(),l(),d(),c(),m(),p(),f(),u(),x(),h()]}},render:e=>o.jsxs(t,{children:[e.cckControl.label&&o.jsx(a,{children:e.cckControl.label}),o.jsx(i,{...w(e),placeholder:e.cckControl.placeholder,required:e.cckControl.required,disabled:e.cckControl.disabled,invalid:e.cckControl.invalid,autoResize:e.cckControl.autoResize,minRows:e.cckControl.minRows,maxRows:e.cckControl.maxRows})]})},O={component:i,title:"UI Components/Textarea",parameters:{docs:{description:{component:[R].join(`
`)}},cckAddon:{componentName:"textarea"}}},S=["Default"];export{M as Default,S as __namedExportsOrder,O as default};
