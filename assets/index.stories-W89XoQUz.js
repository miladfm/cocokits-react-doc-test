import{E as h,B as f}from"./doc-page-DZtkdTH4.js";import{r as l}from"./index-qVDZzPEr.js";import{M as c,a as t,D as s}from"./menu-item-aPzZiBK7.js";import"./toggle-Cnr3XnTF.js";import{ag as e}from"./chunk-NUUEMKO5-LLHHQr8R.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./mdx-page-with-theme-section-DmqQ5M3U.js";import{r as a,t as m,c as M,s as v,a as y,z as I,A as x,d as C,q as g,j as u}from"./control.config-sD2qr6-r.js";import{r as j}from"./preview.base-wbKrezOq.js";import"./iframe-C3BREnma.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const b="The `Menu` from `@cocokits` is a dynamic UI element designed to provide users with a floating panel that displays a list of actions or options upon interaction. Whether triggered by a button click, hover, or other user actions, the Menu enhances navigation within your application by offering a structured and intuitive way to present multiple choices. This component seamlessly integrates with various design system themes, ensuring a consistent and visually appealing experience across different interface styles.",L={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[a("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { Button, SvgIcon } from "@cocokits/react-components";

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
          `}],hasControl:!0,controls:[m(),M(),v(),y(),I(),x(),C(!1,"Disabled First Item","disabledFirstItem"),g(h.BottomLeft)]}},render:n=>e.jsx(k,{...n})};function k(n){const o=l.useRef(null),[r,i]=l.useState(n.cckControl.open);l.useEffect(()=>{i(n.cckControl.open)},[n.cckControl.open]);const d=()=>{i(!0)};return e.jsxs(e.Fragment,{children:[e.jsx(f,{ref:o,onClick:d,children:"Open"}),e.jsxs(c,{...j(n),open:r,targetRef:o,menuAnchorPoint:n.cckControl.anchorPoint,onMenuStatusChange:p=>i(p),closeOnSelectItem:n.cckControl.closeOnSelectItem,children:[e.jsx(t,{disabled:n.cckControl.disabledFirstItem,children:"Edit"}),e.jsx(t,{children:"Duplicate"}),e.jsx(s,{}),e.jsx(t,{children:"Archive"}),e.jsx(t,{disabled:!0,children:"Move"}),e.jsx(s,{}),e.jsx(t,{children:"Share"}),e.jsx(t,{children:"Add to favorite"})]})]})}const N={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[u("type"),a("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}]}},render:n=>{var o;return e.jsx(e.Fragment,{children:(o=n.cckControl.themeComponentConfig.type)==null?void 0:o.values.map((r,i)=>e.jsxs(c,{type:r,open:!0,children:[e.jsx(t,{children:"Edit"}),e.jsx(t,{children:"Duplicate"}),e.jsx(s,{}),e.jsx(t,{children:"Archive"}),e.jsx(t,{children:"Move"})]},i))})}},U={name:"Size",parameters:{docs:{description:{story:"Size options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[u("size"),a("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[m()]}},render:n=>{var o;return e.jsx(e.Fragment,{children:(o=n.cckControl.themeComponentConfig.size)==null?void 0:o.values.map((r,i)=>e.jsxs(c,{type:n.cckControl.type,size:r,open:!0,_skipOverlay:!0,children:[e.jsx(t,{children:"Edit"}),e.jsx(t,{children:"Duplicate"}),e.jsx(s,{}),e.jsx(t,{children:"Archive"}),e.jsx(t,{children:"Move"})]},i))})}},H={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[u("color"),a("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[m()]}},render:n=>{var o;return e.jsx(e.Fragment,{children:(o=n.cckControl.themeComponentConfig.color)==null?void 0:o.values.map((r,i)=>e.jsxs(c,{type:n.cckControl.type,color:r,open:!0,_skipOverlay:!0,children:[e.jsx(t,{children:"Edit"}),e.jsx(t,{children:"Duplicate"}),e.jsx(s,{}),e.jsx(t,{children:"Archive"}),e.jsx(t,{children:"Move"})]},i))})}},G={component:c,subcomponents:{MenuItem:t},title:"UI Components/Menu",parameters:{docs:{description:{component:[b].join(`
`)}},cckAddon:{componentName:"menu",subcomponentNames:{MenuItem:"menuItem"}}}},J=["Default","Type","Size","Color"];export{H as Color,L as Default,U as Size,N as Type,J as __namedExportsOrder,G as default};
