import{E as v,j as e,F as r,L as l,h as t,O as i,k as s}from"./doc-page-DxYWeKL0.js";import"./mdx-page-with-theme-section-9sAv-js5.js";import{r as n,l as a,p as k,m as c,c as d,s as p,a as m,q as b,u as h,d as N,o as u,b as x,e as D}from"./control.config-C-L-5fkH.js";import{r as f}from"./preview.base-BgqTF_F3.js";import"./index-Sx7-C1CO.js";import"./react-18-dacazFhf.js";import"./index-D6h3T3dG.js";import"./chunk-NUUEMKO5-C39SUnvU.js";import"./iframe-C-op1SJ0.js";import"../sb-preview/runtime.js";import"./index-XgUrtOhL.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const O="The `Select` from `@cocokits` is a versatile UI element designed to enable users to choose one or more options from a dropdown list seamlessly. Commonly used in forms where specific selections from predefined choices are required, the Select component enhances user interactions by providing an intuitive and efficient way to make selections. It integrates effortlessly with multiple design system themes, ensuring a consistent and visually appealing interface across various application styles.",H={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[n("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
            `}],hasControl:!0,controls:[a("Favorite Foods"),k("Add a new food"),c(),d(),p(),m(),b(v.BottomLeft),h(),N(),u(),x(),D()]}},render:o=>e.jsxDEV(r,{children:[o.cckControl.label&&e.jsxDEV(l,{children:o.cckControl.label},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/default.stories.tsx",lineNumber:65,columnNumber:33},void 0),e.jsxDEV(t,{...f(o),placeholder:o.cckControl.placeholder,disabled:o.cckControl.disabled,required:o.cckControl.required,invalid:o.cckControl.invalid,multiple:o.cckControl.multiple,anchorPoint:o.cckControl.anchorPoint,maxOptionsHeight:o.cckControl.maxOptionsHeight,children:[e.jsxDEV(i,{value:"Steak",children:"Steak"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/default.stories.tsx",lineNumber:76,columnNumber:9},void 0),e.jsxDEV(i,{value:"Pizza",children:"Pizza"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/default.stories.tsx",lineNumber:77,columnNumber:9},void 0),e.jsxDEV(i,{value:"Burger",children:"Burger"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/default.stories.tsx",lineNumber:78,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/default.stories.tsx",lineNumber:66,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/default.stories.tsx",lineNumber:64,columnNumber:5},void 0)},A={name:"Options",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[n("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
            `}],hasControl:!0,controls:[a("Favorite Foods"),c(),d(),p(),m(),u()]}},render:o=>e.jsxDEV(r,{style:{minWidth:"200px"},children:[o.cckControl.label&&e.jsxDEV(l,{children:o.cckControl.label},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/options.stories.tsx",lineNumber:70,columnNumber:33},void 0),e.jsxDEV(t,{...f(o),placeholder:"Add a new food",multiple:o.cckControl.multiple,maxOptionsHeight:300,children:[e.jsxDEV(s,{label:"Fast Foods",children:[e.jsxDEV(i,{value:"Steak",children:"Steak"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/options.stories.tsx",lineNumber:78,columnNumber:11},void 0),e.jsxDEV(i,{value:"Pizza",disabled:!0,children:"Pizza"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/options.stories.tsx",lineNumber:79,columnNumber:11},void 0),e.jsxDEV(i,{value:"Burger",children:"Burger"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/options.stories.tsx",lineNumber:80,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/options.stories.tsx",lineNumber:77,columnNumber:9},void 0),e.jsxDEV(s,{label:"Healthy Options",children:[e.jsxDEV(i,{value:"Salad",children:"Salad"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/options.stories.tsx",lineNumber:84,columnNumber:11},void 0),e.jsxDEV(i,{value:"Sushi",children:"Sushi"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/options.stories.tsx",lineNumber:85,columnNumber:11},void 0),e.jsxDEV(i,{value:"Soup",disabled:!0,children:"Soup"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/options.stories.tsx",lineNumber:86,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/options.stories.tsx",lineNumber:83,columnNumber:9},void 0),e.jsxDEV(s,{label:"Desserts",disabled:!0,children:[e.jsxDEV(i,{value:"ice-cream",children:"Ice Cream"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/options.stories.tsx",lineNumber:90,columnNumber:11},void 0),e.jsxDEV(i,{value:"cake",children:"Cake"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/options.stories.tsx",lineNumber:91,columnNumber:11},void 0),e.jsxDEV(i,{value:"pie",children:"Pie"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/options.stories.tsx",lineNumber:92,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/options.stories.tsx",lineNumber:89,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/options.stories.tsx",lineNumber:71,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/select/overview/options.stories.tsx",lineNumber:69,columnNumber:5},void 0)},q={component:t,title:"UI Components/Select",decorators:[],parameters:{docs:{description:{component:[O].join(`
`)}},cckAddon:{componentName:"select"}}},G=["Default","Options"];export{H as Default,A as Options,G as __namedExportsOrder,q as default};
