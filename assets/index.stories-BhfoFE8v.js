import{E as O,F as a,L as r,S as l,O as o,e as t,f}from"./doc-page-k0DjxlZo.js";import{ag as e}from"./chunk-NUUEMKO5-Ch6kBRqy.js";import"./mdx-page-with-theme-section-BKPFU3aV.js";import{r as s,l as c,p as x,k as S,t as p,c as d,s as u,a as m,n as b,d as y,o as v,b as k,e as C}from"./control.config-DRv8_nye.js";import"./index-qVDZzPEr.js";import{r as h}from"./preview.base-DgZXWlJO.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-xcCtAxcb.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const j="The `Select` from `@cocokits` is a versatile UI element designed to enable users to choose one or more options from a dropdown list seamlessly. Commonly used in forms where specific selections from predefined choices are required, the Select component enhances user interactions by providing an intuitive and efficient way to make selections. It integrates effortlessly with multiple design system themes, ensuring a consistent and visually appealing interface across various application styles.",T={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[s("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
                     import { FormField, Label, Option, Select } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
            <FormField>
               <% if (label) { %>
                <Label><%= label %></Label>
              <% } %>
              <Select
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
                <% if (placeholder) { %> placeholder='<%= placeholder %>' <% } %>
                <% if (disabled) { %> disabled <% } %>
                <% if (required) { %> required <% } %>
                <% if (invalid) { %> invalid <% } %>
                <% if (multiple) { %> multiple <% } %>
                <% if (anchorPoint) { %> anchorPoint='<%= anchorPoint %>' <% } %>
                <% if (typeof maxOptionsHeight === 'number') { %> maxOptionsHeight='<%= maxOptionsHeight %>' <% } %>
              >
                <Option value="Steak">Steak</Option>
                <Option value="Pizza">Pizza</Option>
                <Option value="Burger">Burger</Option>
              </Select>
            </FormField>
                </>
              );
            }

            `}],hasControl:!0,controls:[c("Favorite Foods"),x("Add a new food"),S(),p(),d(),u(),m(),b(O.BottomLeft),y(),v(),k(),C()]}},render:i=>e.jsxs(a,{style:{minWidth:"200px"},children:[i.cckControl.label&&e.jsx(r,{children:i.cckControl.label}),e.jsxs(l,{...h(i),placeholder:i.cckControl.placeholder,disabled:i.cckControl.disabled,required:i.cckControl.required,invalid:i.cckControl.invalid,multiple:i.cckControl.multiple,anchorPoint:i.cckControl.anchorPoint,maxOptionsHeight:i.cckControl.maxOptionsHeight,children:[e.jsx(o,{value:"Steak",children:"Steak"}),e.jsx(o,{value:"Pizza",children:"Pizza"}),e.jsx(o,{value:"Burger",children:"Burger"})]})]})},E={name:"Options",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[s("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
                     import { FormField, Label, Option, OptionGroup, Select } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
            <FormField>
               <% if (label) { %>
                <Label><%= label %></Label>
              <% } %>
              <Select
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
                placeholder='Add a new food'
                <% if (multiple) { %> multiple <% } %>
              >

              <OptionGroup label='Fast Foods'>
                <Option value="Steak">Steak</Option>
                <Option value="Pizza" disabled>Pizza</Option>
                <Option value="Burger">Burger</Option>
              </OptionGroup>

              <OptionGroup label='Healthy Options'>
                <Option value="Salad">Salad</Option>
                <Option value="Sushi">Sushi</Option>
                <Option value="Soup" disabled>Soup</Option>
              </OptionGroup>

              <OptionGroup label="Desserts" disabled>
                <Option value="ice-cream">Ice Cream</Option>
                <Option value="cake">Cake</Option>
                <Option value="pie">Pie</Option>
              </OptionGroup>

              </Select>
            </FormField>
                </>
              );
            }

            `}],hasControl:!0,controls:[c("Favorite Foods"),p(),d(),u(),m(),v()]}},render:i=>e.jsxs(a,{style:{minWidth:"200px"},children:[i.cckControl.label&&e.jsx(r,{children:i.cckControl.label}),e.jsxs(l,{...h(i),placeholder:"Add a new food",multiple:i.cckControl.multiple,maxOptionsHeight:300,children:[e.jsxs(t,{label:"Fast Foods",children:[e.jsx(o,{value:"Steak",children:"Steak"}),e.jsx(o,{value:"Pizza",disabled:!0,children:"Pizza"}),e.jsx(o,{value:"Burger",children:"Burger"})]}),e.jsxs(t,{label:"Healthy Options",children:[e.jsx(o,{value:"Salad",children:"Salad"}),e.jsx(o,{value:"Sushi",children:"Sushi"}),e.jsx(o,{value:"Soup",disabled:!0,children:"Soup"})]}),e.jsxs(t,{label:"Desserts",disabled:!0,children:[e.jsx(o,{value:"ice-cream",children:"Ice Cream"}),e.jsx(o,{value:"cake",children:"Cake"}),e.jsx(o,{value:"pie",children:"Pie"})]})]})]})},M={name:"CustomPreview",parameters:{docs:{description:{story:"Displays the select component with a customized view for the selected item, enabling more complex and visually rich representations instead of just plain text."}},cckAddon:{renderConditions:[s("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
                     import { FormField, Label, Option, Select } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
      <FormField>
               <% if (label) { %>
                <Label><%= label %></Label>
              <% } %>
              <Select
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
                placeholder="Add a new food"
                multiple
                selectPreview={(selected: string[]) => (
                  <SelectPreview>
                    {selected[0]}
                    {selected.length > 1 && <span style={{ opacity: 0.5 }}> (+{selected.length - 1} more)</span>}
                  </SelectPreview>
                )}>

              <Option value="Steak">Steak</Option>
              <Option value="Pizza">Pizza</Option>
              <Option value="Burger">Burger</Option>
              <Option value="Salad">Salad</Option>
              <Option value="Sushi">Sushi</Option>
              <Option value="Soup">Soup</Option>
              <Option value="IceCream">Ice Cream</Option>
              <Option value="Cake">Cake</Option>
              <Option value="Pie">Pie</Option>

              </Select>
            </FormField>
                </>
              );
            }
      
            `}],hasControl:!0,controls:[c("Favorite Foods"),p(),d(),u(),m()]}},render:i=>e.jsxs(a,{style:{minWidth:"200px"},children:[i.cckControl.label&&e.jsx(r,{children:i.cckControl.label}),e.jsxs(l,{...h(i),placeholder:"Add a new food",multiple:!0,selectPreview:n=>e.jsxs(f,{children:[n[0],n.length>1&&e.jsxs("span",{style:{opacity:.5},children:[" (+",n.length-1," more)"]})]}),children:[e.jsx(o,{value:"Steak",children:"Steak"}),e.jsx(o,{value:"Pizza",children:"Pizza"}),e.jsx(o,{value:"Burger",children:"Burger"}),e.jsx(o,{value:"Salad",children:"Salad"}),e.jsx(o,{value:"Sushi",children:"Sushi"}),e.jsx(o,{value:"Soup",children:"Soup"}),e.jsx(o,{value:"IceCream",children:"Ice Cream"}),e.jsx(o,{value:"Cake",children:"Cake"}),e.jsx(o,{value:"Pie",children:"Pie"})]})]})},W={component:l,subcomponents:{OptionGroup:t,Option:o,SelectPreview:f},title:"UI Components/Select",decorators:[],parameters:{docs:{description:{component:[j].join(`
`)}},cckAddon:{componentName:"select",subcomponentNames:{Option:"option",OptionGroup:"optionGroup",SelectPreview:"selectPreview"}}}},N=["Default","Options","CustomPreview"];export{M as CustomPreview,T as Default,E as Options,N as __namedExportsOrder,W as default};
