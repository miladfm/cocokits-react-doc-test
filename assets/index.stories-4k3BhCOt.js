import"./doc-page-aevdJz7D.js";import"./index-qVDZzPEr.js";import{D as r}from"./menu-item-BOv99wCc.js";import"./toggle-PaplBIhn.js";import{ag as e}from"./chunk-NUUEMKO5-BVchu3Kd.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import{r as d,w as p}from"./preview.base-DRFaOIJI.js";import"./mdx-page-with-theme-section-CKfXNv2c.js";import{r as s,t as a,c as l,s as m,a as y,j as c}from"./control.config-CMNGK8lF.js";import"./iframe-Duwiqhsn.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const u="The `DividerComponent` from `@cocokits` is a fundamental UI element designed to visually separate content, enhancing the clarity and organization of your application's interface. By creating clear distinctions between different sections or elements, the Divider improves the overall user experience by making layouts more intuitive and easier to navigate. This standalone component seamlessly integrates with multiple design system themes, ensuring consistency and adaptability across various application styles.",O={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[s("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
            <Divider
              <% if (typeof type !== 'undefined') { %> type="<%= type %>" <% } %>
              <% if (typeof size !== 'undefined') { %> size="<%= size %>" <% } %>
              <% if (typeof color !== 'undefined') { %> color="<%= color %>" <% } %>
            />
          `}],hasControl:!0,controls:[a(),l(),m(),y()]}},render:o=>e.jsx(r,{style:{margin:"0 auto"},...d(o)})},F={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[s("Overview"),c("type")],source:[{filename:"Source Code",language:"tsx",code:`
            <>
              <% themeComponentConfig.type.values.map(type => { %>
                <Divider type='<%= type %>'/>
              <% }) %>
            </>
          `}]}},render:o=>{var t;return e.jsx(e.Fragment,{children:(t=o.cckControl.themeComponentConfig.type)==null?void 0:t.values.map((i,n)=>e.jsx("div",{style:{flex:1,display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%"},children:e.jsx(r,{type:i})},n))})}},I={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[s("Overview"),c("size")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
            <>
              <% themeComponentConfig.size.values.map(size => { %>
                <Divider
                  <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                  size="<%= size %>"/>
              <% }) %>
            </>
          `}],controls:[a()]}},render:o=>{var t;return e.jsx(e.Fragment,{children:(t=o.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((i,n)=>e.jsx(r,{type:o.cckControl.type,size:i},n))})}},W={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[s("Overview"),c("color")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
            <>
              <% themeComponentConfig.color.values.map(color => { %>
                <Divider
                  <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                  color="<%= color %>"/>
              <% }) %>
            </>
          `}],controls:[a()]}},render:o=>{var t;return e.jsx(e.Fragment,{children:(t=o.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((i,n)=>e.jsx(r,{type:o.cckControl.type,color:i},n))})}},B={component:r,decorators:[p({direction:"row",insideBox:!0},{width:"200px",height:"100px"})],title:"UI Components/Divider",parameters:{docs:{description:{component:[u].join(`
`)}},cckAddon:{componentName:"divider"}}},E=["Default","Type","Size","Color"];export{W as Color,O as Default,I as Size,F as Type,E as __namedExportsOrder,B as default};
