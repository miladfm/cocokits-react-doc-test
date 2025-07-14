import{F as i,L as r,d as t}from"./index-BpWvhXjj.js";import{j as o}from"./DocsRenderer-CFRXHY34-B65lPUAR.js";import"./mdx-page-with-theme-section--zravBVf.js";import{l as n,p as a,i as l,c as s,s as d,a as p,d as c,r as m,b as u,e as f}from"./control.config-rFiFMmGE.js";import"./index-C33_amOP.js";import{r as h}from"./preview.base-BrjdJoms.js";import"./react-18-B-IeCXFN.js";import"./preview-B2grt8E0.js";import"./iframe-BZzbWXmA.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";const b="The `Input` from `@cocokits` is a versatile UI element designed to allow users to enter and edit data seamlessly. Whether used for simple text entries, complex data input, or various specialized input types, this component provides a reliable and customizable solution that enhances the user experience. The InputComponent integrates effortlessly with multiple design system themes, ensuring a consistent and visually appealing interface across different application styles.",w={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[f("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
                     import { FormField, Label , Input } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
          <FormField>
            <% if (label) { %>
              <Label><%= label %></Label>
            <% } %>
            <Input
              <% if (type) { %> type='<%= type %>' <% } %>
              <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
              <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
              <% if (required) { %> required <% } %>
              <% if (disabled) { %> disabled <% } %>
              <% if (invalid) { %> invalid <% } %>
              <% if (placeholder) { %> placeholder="<%= placeholder %>" <% } %>
            />
          </FormField>
                </>
              );
            }

            `}],hasControl:!0,controls:[n(),a(),l(),s(),d(),p(),c(),m(),u()]}},render:e=>o.jsxs(i,{style:{minWidth:"200px"},children:[e.cckControl.label&&o.jsx(r,{children:e.cckControl.label}),o.jsx(t,{...h(e),placeholder:e.cckControl.placeholder,required:e.cckControl.required,disabled:e.cckControl.disabled,invalid:e.cckControl.invalid})]})},L={component:t,title:"UI Components/Input",parameters:{docs:{description:{component:[b].join(`
`)}},cckAddon:{componentName:"input"}}},A=["Default"];export{w as Default,A as __namedExportsOrder,L as default};
