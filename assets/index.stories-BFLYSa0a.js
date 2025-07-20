import{a as s}from"./badge-container-BH89DChx.js";import{j as e}from"./DocsRenderer-CFRXHY34-DnFIM2bJ.js";import"./mdx-page-with-theme-section-BPd9EgOg.js";import{t as a,s as p,c as d,a as m,e as i,x as c}from"./control.config-B-LHnSwa.js";import"./index-C33_amOP.js";import"./index-CVIK8CIp.js";import{r as l}from"./preview.base-CR9G6040.js";import"./react-18-B-IeCXFN.js";import"./iframe-C_FjfnNR.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";import"./preview-DfOC2OG8.js";const f=`TODO: ...\r
`,S={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
          import { Badge, SvgIcon} from '@cocokits/react-components';

          export const MyComponent = () => {
            return (
              <Badge
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
              >
              </Badge>
            )
          }
          `}],renderConditions:[i("Overview")],hasControl:!0,controls:[a(),p(),d(),m()]}},args:{},render:o=>e.jsx(s,{...l(o)})},b={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique Badge styles."}},cckAddon:{renderConditions:[c("type"),i("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { Badge } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.type.values.map(type => { %>
                  <Badge
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                  />
                <% }) %>
              </>
            );
          }
          `}]}},render:o=>{var t;return e.jsx(e.Fragment,{children:(t=o.cckControl.themeComponentConfig.type)==null?void 0:t.values.map((n,r)=>e.jsx(s,{type:n},r))})}},O={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[c("size"),i("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { <%= componentName.className %> } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.size.values.map(size => { %>
                  <Badge
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    size='<%= size %>'
                  />
                <% }) %>
              </>

            );
          }
          `}],controls:[a()]}},render:o=>{var t;return e.jsx(e.Fragment,{children:(t=o.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((n,r)=>e.jsx(s,{type:o.cckControl.type,size:n},r))})}},A={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[c("color"),i("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { Badge } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.color.values.map(color => { %>
                  <Badge
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    color='<%= color %>'
                  />
                <% }) %>
              </>
            );
          }
          `}],controls:[a()]}},render:o=>{var t;return e.jsx(e.Fragment,{children:(t=o.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((n,r)=>e.jsx(s,{type:o.cckControl.type,color:n},r))})}},D={component:s,title:"UI Components/Badge",tags:["status:new"],decorators:[],parameters:{docs:{description:{component:[f].join(`
`)}},cckAddon:{componentName:"badge"}},argTypes:{}},M=["Default","Type","Size","Color"];export{A as Color,S as Default,O as Size,b as Type,M as __namedExportsOrder,D as default};
