import{E as O,F as a,L as r,S as l,O as i,f as t,h as v}from"./doc-page-d6wbzmmI.js";import{ag as e}from"./chunk-NUUEMKO5-D5vKVSNs.js";import"./mdx-page-with-theme-section-COUKzgnD.js";import{r as s,l as d,p as x,t as c,c as p,s as u,a as m,q as S,u as b,d as y,v as f,b as k,e as C}from"./control.config-BM35WZI0.js";import"./index-qVDZzPEr.js";import{r as h}from"./preview.base-CncZ5j19.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-D3xBubCU.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const j="The `Select` from `@cocokits` is a versatile UI element designed to enable users to choose one or more options from a dropdown list seamlessly. Commonly used in forms where specific selections from predefined choices are required, the Select component enhances user interactions by providing an intuitive and efficient way to make selections. It integrates effortlessly with multiple design system themes, ensuring a consistent and visually appealing interface across various application styles.",T={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[s("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
            `}],hasControl:!0,controls:[d("Favorite Foods"),x("Add a new food"),c(),p(),u(),m(),S(O.BottomLeft),b(),y(),f(),k(),C()]}},render:o=>e.jsxs(a,{style:{minWidth:"200px"},children:[o.cckControl.label&&e.jsx(r,{children:o.cckControl.label}),e.jsxs(l,{...h(o),placeholder:o.cckControl.placeholder,disabled:o.cckControl.disabled,required:o.cckControl.required,invalid:o.cckControl.invalid,multiple:o.cckControl.multiple,anchorPoint:o.cckControl.anchorPoint,maxOptionsHeight:o.cckControl.maxOptionsHeight,children:[e.jsx(i,{value:"Steak",children:"Steak"}),e.jsx(i,{value:"Pizza",children:"Pizza"}),e.jsx(i,{value:"Burger",children:"Burger"})]})]})},E={name:"Options",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[s("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
            `}],hasControl:!0,controls:[d("Favorite Foods"),c(),p(),u(),m(),f()]}},render:o=>e.jsxs(a,{style:{minWidth:"200px"},children:[o.cckControl.label&&e.jsx(r,{children:o.cckControl.label}),e.jsxs(l,{...h(o),placeholder:"Add a new food",multiple:o.cckControl.multiple,maxOptionsHeight:300,children:[e.jsxs(t,{label:"Fast Foods",children:[e.jsx(i,{value:"Steak",children:"Steak"}),e.jsx(i,{value:"Pizza",disabled:!0,children:"Pizza"}),e.jsx(i,{value:"Burger",children:"Burger"})]}),e.jsxs(t,{label:"Healthy Options",children:[e.jsx(i,{value:"Salad",children:"Salad"}),e.jsx(i,{value:"Sushi",children:"Sushi"}),e.jsx(i,{value:"Soup",disabled:!0,children:"Soup"})]}),e.jsxs(t,{label:"Desserts",disabled:!0,children:[e.jsx(i,{value:"ice-cream",children:"Ice Cream"}),e.jsx(i,{value:"cake",children:"Cake"}),e.jsx(i,{value:"pie",children:"Pie"})]})]})]})},W={name:"CustomPreview",parameters:{docs:{description:{story:"Displays the select component with a customized view for the selected item, enabling more complex and visually rich representations instead of just plain text."}},cckAddon:{renderConditions:[s("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
            `}],hasControl:!0,controls:[d("Favorite Foods"),c(),p(),u(),m()]}},render:o=>e.jsxs(a,{style:{minWidth:"200px"},children:[o.cckControl.label&&e.jsx(r,{children:o.cckControl.label}),e.jsxs(l,{...h(o),placeholder:"Add a new food",multiple:!0,selectPreview:n=>e.jsxs(v,{children:[n[0],n.length>1&&e.jsxs("span",{style:{opacity:.5},children:[" (+",n.length-1," more)"]})]}),children:[e.jsx(i,{value:"Steak",children:"Steak"}),e.jsx(i,{value:"Pizza",children:"Pizza"}),e.jsx(i,{value:"Burger",children:"Burger"}),e.jsx(i,{value:"Salad",children:"Salad"}),e.jsx(i,{value:"Sushi",children:"Sushi"}),e.jsx(i,{value:"Soup",children:"Soup"}),e.jsx(i,{value:"IceCream",children:"Ice Cream"}),e.jsx(i,{value:"Cake",children:"Cake"}),e.jsx(i,{value:"Pie",children:"Pie"})]})]})},N={component:l,subcomponents:{OptionGroup:t,Option:i,SelectPreview:v},title:"UI Components/Select",decorators:[],parameters:{docs:{description:{component:[j].join(`
`)}},cckAddon:{componentName:"select",subcomponentNames:{Option:"option",OptionGroup:"optionGroup",SelectPreview:"selectPreview"}}}},U=["Default","Options","CustomPreview"];export{W as CustomPreview,T as Default,E as Options,U as __namedExportsOrder,N as default};
