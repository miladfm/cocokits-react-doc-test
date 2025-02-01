import{j as o,F as l,L as n,c,P as d,d as r,b as k,e as a,f,H as p,h as m,S as y,O as t}from"./doc-page-5zLays8Z.js";import{A as i}from"./addon.model-Bsae6IwI.js";import"./mdx-page-with-theme-section-CCFNwcN6.js";import{r as u}from"./story-render-conditions-DLc_5R_H.js";import{r as s}from"./preview.base-Ynu-9aKP.js";import"./index-Sx7-C1CO.js";import"./react-18-dacazFhf.js";import"./index-D6h3T3dG.js";import"./chunk-NUUEMKO5-C8BnHNo7.js";import"./iframe-h_a-ZhoG.js";import"../sb-preview/runtime.js";import"./index-XgUrtOhL.js";import"./index-DrFu-skq.js";const v="The `FormField` from `@cocokits` serves as a versatile wrapper designed to structure and associate form inputs, labels, and validation messages seamlessly. By ensuring consistent spacing, and alignment, the FormField enhances the overall user experience, making forms more intuitive and user-friendly. This component integrates effortlessly with multiple design system themes, maintaining a cohesive look and feel across various application interfaces.\r\n\r\n`FormField` is a component used to wrap several `CocoKits` components and apply common text field styles, error, and hint messages. In this document, `FormField` refers to the wrapper component, while form controller refers to the component that the `FormField` is wrapping (e.g., the input, textarea, select, etc.).\r\n\r\nThe following `CocoKits` components are designed to work inside a `FormField`:\r\n\r\n- `<Input>`\r\n- `<Textarea>`\r\n- `<Select>`\r\n- `<ChipList>`",U={name:"Input",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[u("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
            <FormField
              <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
              <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
              <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
              <% if (disabled) { %> disabled <% } %>
              <% if (required) { %> required <% } %>
              <% if (invalid) { %> invalid <% } %>
              <% if (hideRequiredMarker) { %> hideRequiredMarker <% } %>
            >

              <% if (label) { %>
                <Label><%= label %></Label>
              <% } %>
              <% if (leading) { %>
                <Leading><%= leading %></Leading>
              <% } %>
              <% if (prefix !== 'none') { %>
                <Prefix>
                  <SvgIcon icon={YOUR_ICON} />
                </Prefix>
              <% } %>

              <Input
                <% if (placeholder) { %> placeholder="<%= placeholder %>" <% } %>
              />

               <% if (trailing) { %>
                <Trailing><%= trailing %></Trailing>
              <% } %>
              <% if (suffix !== 'none') { %>
                <Suffix>
                  <SvgIcon icon={YOUR_ICON} />
                </Suffix>
              <% } %>

              <% if (hint) { %>
                <Hint><%= hint %></Hint>
              <% } %>

              <% if (error) { %>
                <Error><%= error %></Error>
              <% } %>

            </FormField>
          `}],hasControl:!0,controls:[{displayName:"Label",default:"Label",storyArgKey:"label",type:i.Text},{displayName:"Placeholder",default:"Placeholder",storyArgKey:"placeholder",type:i.Text},{displayName:"Hint",default:"",storyArgKey:"hint",type:i.Text},{displayName:"Error",default:"",storyArgKey:"error",type:i.Text},{displayName:"Prefix Icon",default:"none",icons:["none","link","info","email"],storyArgKey:"prefix",type:i.Icon},{displayName:"Suffix Icon",default:"none",icons:["none","link","info","email"],storyArgKey:"suffix",type:i.Icon},{displayName:"Leading",default:"",storyArgKey:"leading",type:i.Text},{displayName:"Trailing",default:"",storyArgKey:"trailing",type:i.Text},{prop:"type",type:i.SelectThemeConfig},{prop:"color",type:i.SelectThemeConfig},{prop:"size",type:i.SelectThemeConfig},{prop:"additional",type:i.SelectThemeConfig},{displayName:"Required",default:!1,storyArgKey:"required",type:i.Boolean},{displayName:"Disabled",default:!1,storyArgKey:"disabled",type:i.Boolean},{displayName:"Invalid",default:!1,storyArgKey:"invalid",type:i.Boolean},{displayName:"Hide Required Marker",default:!1,storyArgKey:"hideRequiredMarker",type:i.Boolean}]}},render:e=>o.jsxDEV(l,{...s(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&o.jsxDEV(n,{children:e.cckControl.label},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:117,columnNumber:34},void 0),e.cckControl.leading&&o.jsxDEV(c,{children:e.cckControl.leading},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:118,columnNumber:36},void 0),e.cckControl.prefix!=="none"&&o.jsxDEV(d,{children:o.jsxDEV(r,{icon:e.cckIcons[e.cckControl.prefix]},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:122,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:121,columnNumber:9},void 0),o.jsxDEV(k,{placeholder:e.cckControl.placeholder},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:126,columnNumber:7},void 0),e.cckControl.suffix!=="none"&&o.jsxDEV(a,{children:o.jsxDEV(r,{icon:e.cckIcons[e.cckControl.suffix]},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:131,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:130,columnNumber:9},void 0),e.cckControl.trailing&&o.jsxDEV(f,{children:e.cckControl.trailing},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:135,columnNumber:37},void 0),e.cckControl.hint&&o.jsxDEV(p,{children:e.cckControl.hint},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:137,columnNumber:33},void 0),e.cckControl.error&&o.jsxDEV(m,{children:e.cckControl.error},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:138,columnNumber:34},void 0)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:109,columnNumber:5},void 0)},I={name:"Select",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[u("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
            <cck-form-field
              <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
              <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
              <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
              <% if (disabled) { %> disabled <% } %>
            >
              <% if (label) { %>
                <cck-label><%= label %></cck-label>
              <% } %>
              <% if (leading) { %>
                <cck-leading><%= leading %></cck-leading>
              <% } %>
              <% if (prefix !== 'none') { %>
                <cck-prefix>
                  <cck-svg-icon [icon]="YOUR_ICON"></cck-svg-icon>
                </cck-prefix>
              <% } %>
              
              <cck-select
                 <% if (placeholder) { %> placeholder="<%= placeholder %>" <% } %>
                 <% if (multiple) { %> [multiple]="<%= multiple %>" <% } %>
                 <% if (maxOptionsHeight) { %> [maxOptionsHeight]="<%= maxOptionsHeight %>" <% } %>
                 <% if (required) { %> [required]="<%= required %>" <% } %>
              >
                <cck-option value="Steak">Steak</cck-option>
                <cck-option value="Pizza">Pizza</cck-option>
                <cck-option value="Burger">Burger</cck-option>
              </cck-select>

              <% if (suffix !== 'none') { %>
                <cck-suffix>
                  <cck-svg-icon [icon]="YOUR_ICON"></cck-svg-icon>
                </cck-suffix>
              <% } %>
              <% if (trailing) { %>
                <cck-trailing><%= trailing %></cck-trailing>
              <% } %>
              <% if (hint) { %>
                <cck-hint><%= hint %></cck-hint>
              <% } %>
              <% if (error) { %>
                <cck-hint [force]="true"><%= error %></cck-hint>
              <% } %>
            </cck-form-field>
          `}],hasControl:!0,controls:[{displayName:"Label",default:"Label",storyArgKey:"label",type:i.Text},{displayName:"Placeholder",default:"Placeholder",storyArgKey:"placeholder",type:i.Text},{displayName:"Hint",default:"",storyArgKey:"hint",type:i.Text},{displayName:"Error",default:"",storyArgKey:"error",type:i.Text},{displayName:"Prefix Icon",default:"none",icons:["none","link","info","email"],storyArgKey:"prefix",type:i.Icon},{displayName:"Suffix Icon",default:"none",icons:["none","link","info","email"],storyArgKey:"suffix",type:i.Icon},{displayName:"Leading",default:"",storyArgKey:"leading",type:i.Text},{displayName:"Trailing",default:"",storyArgKey:"trailing",type:i.Text},{displayName:"Max Options Height",default:"",storyArgKey:"maxOptionsHeight",type:i.Text},{prop:"type",type:i.SelectThemeConfig},{prop:"color",type:i.SelectThemeConfig},{prop:"size",type:i.SelectThemeConfig},{prop:"additional",type:i.SelectThemeConfig},{displayName:"Disabled",default:!1,storyArgKey:"disabled",type:i.Boolean},{displayName:"Required",default:!1,storyArgKey:"required",type:i.Boolean},{displayName:"Multiple",default:!1,storyArgKey:"multiple",type:i.Boolean},{displayName:"Invalid",default:!1,storyArgKey:"invalid",type:i.Boolean},{displayName:"Hide Required Marker",default:!1,storyArgKey:"hideRequiredMarker",type:i.Boolean}]}},render:e=>o.jsxDEV(l,{style:{minWidth:"200px"},...s(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&o.jsxDEV(n,{children:e.cckControl.label},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:130,columnNumber:33},void 0),e.cckControl.leading&&o.jsxDEV(c,{children:e.cckControl.leading},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:131,columnNumber:35},void 0),e.cckControl.prefix!=="none"&&o.jsxDEV(d,{children:o.jsxDEV(r,{icon:e.cckIcons[e.cckControl.prefix]},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:134,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:133,columnNumber:9},void 0),o.jsxDEV(y,{...s(e),placeholder:e.cckControl.placeholder,multiple:e.cckControl.multiple,anchorPoint:e.cckControl.anchorPoint,maxOptionsHeight:e.cckControl.maxOptionsHeight,children:[o.jsxDEV(t,{value:"Steak",children:"Steak"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:144,columnNumber:9},void 0),o.jsxDEV(t,{value:"Pizza",children:"Pizza"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:145,columnNumber:9},void 0),o.jsxDEV(t,{value:"Burger",children:"Burger"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:146,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:138,columnNumber:7},void 0),e.cckControl.suffix!=="none"&&o.jsxDEV(a,{children:o.jsxDEV(r,{icon:e.cckIcons[e.cckControl.suffix]},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:151,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:150,columnNumber:9},void 0),e.cckControl.trailing&&o.jsxDEV(f,{children:e.cckControl.trailing},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:155,columnNumber:36},void 0),e.cckControl.hint&&o.jsxDEV(p,{children:e.cckControl.hint},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:157,columnNumber:32},void 0),e.cckControl.error&&o.jsxDEV(m,{children:e.cckControl.error},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:158,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:122,columnNumber:5},void 0)},K={component:l,title:"UI Components/FormField",decorators:[],parameters:{docs:{description:{component:[v].join(`
`)}},cckAddon:{componentName:"formField"}}},V=["Input","Select"];export{U as Input,I as Select,V as __namedExportsOrder,K as default};
