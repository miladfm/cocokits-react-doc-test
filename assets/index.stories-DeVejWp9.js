import{E as h,B as M}from"./index-DNsOJRlX.js";import{r as m}from"./index-C33_amOP.js";import"./radio-group-DkpQeqkF.js";import{M as c,a as t,D as s}from"./menu-item-D_-ybvr7.js";import"./toggle-sGVxRRkH.js";import{j as e}from"./DocsRenderer-CFRXHY34-B0Fvrjtp.js";import"./react-18-B-IeCXFN.js";import"./mdx-page-with-theme-section-BwlOJl6T.js";import{t as u,c as f,s as v,a as y,u as I,E as x,F as C,d as g,e as a,x as l}from"./control.config-B1b8V5tA.js";import{r as j}from"./preview.base-fh5Wvfmp.js";import"./preview-D09guH6v.js";import"./iframe-CSwqnnwm.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";const k="The `Menu` from `@cocokits` is a dynamic UI element designed to provide users with a floating panel that displays a list of actions or options upon interaction. Whether triggered by a button click, hover, or other user actions, the Menu enhances navigation within your application by offering a structured and intuitive way to present multiple choices. This component seamlessly integrates with various design system themes, ensuring a consistent and visually appealing experience across different interface styles.",U={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[a("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { Button , Menu, MenuItem  , Divider} from "@cocokits/react-components";

          export const MyComponent = () => {
            const buttonRef = useRef<HTMLButtonElement>(null);
            const [open, setOpen] = useState(false);


            return (
              <>
                <Button ref={buttonRef} onClick={() => setOpen(true)}>
                  Open
                </Button>

                <Menu 
                  <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                  <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                  <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
                  open={open}
                  targetRef={buttonRef}
                  menuAnchorPoint={'<%= anchorPoint %>'}
                  onMenuStatusChange={(isOpen) => setOpen(isOpen)}
                  closeOnSelectItem={<%= closeOnSelectItem %>}
                >
                  <MenuItem <% if (disabledFirstItem) { %> disabled <% } %>>Edit</MenuItem>
                  <MenuItem>Duplicate</MenuItem>
                  <Divider/>
                  <MenuItem>Archive</MenuItem>
                  <MenuItem disabled>Move</MenuItem>
                  <Divider/>
                  <MenuItem>Share</MenuItem>
                  <MenuItem>Add to favorite</MenuItem>
                </Menu>
              </>
            );
          };
          `}],hasControl:!0,controls:[u(),f(),v(),y(),I(h.BottomLeft),x(),C(),g(!1,"Disabled First Item","disabledFirstItem")]}},render:n=>e.jsx(b,{...n})};function b(n){const o=m.useRef(null),[r,i]=m.useState(n.cckControl.open);m.useEffect(()=>{i(n.cckControl.open)},[n.cckControl.open]);const p=()=>{i(!0)};return e.jsxs(e.Fragment,{children:[e.jsx(M,{ref:o,onClick:p,children:"Open"}),e.jsxs(c,{...j(n),open:r,targetRef:o,menuAnchorPoint:n.cckControl.anchorPoint,onMenuStatusChange:d=>i(d),closeOnSelectItem:n.cckControl.closeOnSelectItem,children:[e.jsx(t,{disabled:n.cckControl.disabledFirstItem,children:"Edit"}),e.jsx(t,{children:"Duplicate"}),e.jsx(s,{}),e.jsx(t,{children:"Archive"}),e.jsx(t,{disabled:!0,children:"Move"}),e.jsx(s,{}),e.jsx(t,{children:"Share"}),e.jsx(t,{children:"Add to favorite"})]})]})}const q={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[l("type"),a("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
                     import { Divider , Menu, MenuItem } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
            <>
              <% themeComponentConfig.type.values.map(type => { %>

                {/* <%= color %> */}
                <Menu [type]="<%= type %>">
                  <MenuItem>Edit</MenuItem>
                  <MenuItem>Duplicate</MenuItem>
                  <Divider/>
                  <MenuItem>Archive</MenuItem>
                  <MenuItem>Move</MenuItem>
                </Menu>
              <% }) %>
              
            </>
              );
            }

          `}]}},render:n=>{var o;return e.jsx(e.Fragment,{children:(o=n.cckControl.themeComponentConfig.type)==null?void 0:o.values.map((r,i)=>e.jsxs(c,{type:r,open:!0,children:[e.jsx(t,{children:"Edit"}),e.jsx(t,{children:"Duplicate"}),e.jsx(s,{}),e.jsx(t,{children:"Archive"}),e.jsx(t,{children:"Move"})]},i))})}},H={name:"Size",parameters:{docs:{description:{story:"Size options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[l("size"),a("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
                     import { Menu, MenuItem , Divider } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
            <>

              <% themeComponentConfig.size.values.map(size => { %>

                {/* <%= size %> */}
                <Menu
                  size="<%= size %>"
                  <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                >
                  <MenuItem>Edit</MenuItem>
                  <MenuItem>Duplicate</MenuItem>
                  <Divider/>
                  <MenuItem>Archive</MenuItem>
                  <MenuItem>Move</MenuItem>
                </Menu>
              <% }) %>

            </>
              );
            }

          `}],controls:[u()]}},render:n=>{var o;return e.jsx(e.Fragment,{children:(o=n.cckControl.themeComponentConfig.size)==null?void 0:o.values.map((r,i)=>e.jsxs(c,{type:n.cckControl.type,size:r,open:!0,_skipOverlay:!0,children:[e.jsx(t,{children:"Edit"}),e.jsx(t,{children:"Duplicate"}),e.jsx(s,{}),e.jsx(t,{children:"Archive"}),e.jsx(t,{children:"Move"})]},i))})}},N={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[l("color"),a("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
                     import { Divider, Menu, MenuItem } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
          <>
            <% themeComponentConfig.color.values.map(color => { %>

              {/* <%= color %> */}
              <Menu
                color="<%= color %>"
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
              >
                <MenuItem>Edit</MenuItem>
                <MenuItem>Duplicate</MenuItem>
                <Divider/>
                <MenuItem>Archive</MenuItem>
                <MenuItem>Move</MenuItem>
              </Menu>

            <% }) %>
          </>
              );
            }

          `}],controls:[u()]}},render:n=>{var o;return e.jsx(e.Fragment,{children:(o=n.cckControl.themeComponentConfig.color)==null?void 0:o.values.map((r,i)=>e.jsxs(c,{type:n.cckControl.type,color:r,open:!0,_skipOverlay:!0,children:[e.jsx(t,{children:"Edit"}),e.jsx(t,{children:"Duplicate"}),e.jsx(s,{}),e.jsx(t,{children:"Archive"}),e.jsx(t,{children:"Move"})]},i))})}},G={component:c,subcomponents:{MenuItem:t},title:"UI Components/Menu",parameters:{docs:{description:{component:[k].join(`
`)}},cckAddon:{componentName:"menu",subcomponents:{MenuItem:{name:"menuItem"}}}}},J=["Default","Type","Size","Color"];export{N as Color,U as Default,H as Size,q as Type,J as __namedExportsOrder,G as default};
