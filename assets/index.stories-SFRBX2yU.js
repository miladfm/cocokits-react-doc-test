import{y as B,z as C,A as E,H as f,m as T,F as m,c as v,B as x,b as j,s as k,v as _,J as N}from"./doc-page-BUpmYpE7.js";import{e as P,r as d}from"./index-qVDZzPEr.js";import"./menu-item-B8BzZBwE.js";import"./toggle-OMlCaLhS.js";import{ag as e}from"./chunk-NUUEMKO5-CwXScIoX.js";import{c as D}from"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./mdx-page-with-theme-section-c7cMjpCP.js";import{r as y,B as h,C as g}from"./control.config-CPqwFQ65.js";import{w as O}from"./preview.base-CB0fb4M8.js";import"./iframe-CsW61chZ.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";function R(t,o={}){const l=B.globalInstance(),a=C(),n=C(),r={...E,...o},p=r.decorator??(c=>c),i=F(r.zIndex);r.parentElement.appendChild(i);const s=D(i);l.lock(),n.promise.then(()=>{s.unmount(),i.remove(),l.unlock()});const u=c=>{a.resolve(c)};return s.render(p(e.jsx(f,{config:r,afterClosedPromise:n,closedPromise:a,children:typeof t=="function"?P.createElement(t,{data:r.data,close:u}):t}))),{afterClosed:n.promise,closed:a.promise,close:u}}function F(t){const o=document.createElement("div");return o.style.position="fixed",o.style.top="0",o.style.left="0",o.style.width="100%",o.style.height="100%",o.style.zIndex=`${t}`,o.style.perspective="1000px",o.style.display="flex",o.style.position="fixed",o.style.justifyContent="center",o.style.alignItems="center",o.style.pointerEvents="none",o.style.touchAction="none",o}const A=`The \`Overlay\` CDK (Component Dev Kit) from \`@cocokits\` is a flexible utility that allows developers to create floating panels or elements that are positioned dynamically over the main content of an application. It is used to manage popups, modals, tooltips, dropdowns, and other temporary UI elements. The \`Overlay\` CDK provides robust control over placement, behavior, and interactions of overlay components, enhancing the user experience by offering non-intrusive, context-sensitive content.\r
\r
#### Features:\r
\r
- **Dynamic Positioning:** Provides advanced positioning strategies for floating elements, ensuring overlays are placed in the optimal position relative to the trigger element or the viewport.\r
- **Dismissable Interactions:** Supports user interactions such as clicks outside the overlay or pressing the escape key to dismiss the overlay, providing intuitive controls to close temporary UI elements.\r
- **Backdrop Support:** Optionally includes backdrop functionality to dim the underlying content when the overlay is active, drawing the user's attention to the overlay while maintaining focus on the interactive area.\r
- **Scroll Management:** Manages scroll behaviors effectively, preventing content scrolling when modals or other overlays are open, thereby maintaining user focus and improving the usability of overlay elements.\r
- **Animations:** Offers support for custom animations, allowing overlays to appear and disappear with smooth transitions, contributing to a polished and engaging user experience.`,w=({data:t,close:o})=>{const[l,a]=d.useState(""),n=()=>{o({result:l})};return e.jsxs("div",{className:"overlay-dialog-standalone__host",children:[e.jsx("h3",{className:"overlay-dialog-standalone__header",children:"THIS IS A OVERLAY"}),e.jsxs("p",{className:"overlay-dialog-standalone__text",children:[e.jsx("b",{children:"Data: "}),t?JSON.stringify(t,null,2):""]}),e.jsx(m,{children:e.jsx(v,{placeholder:"Enter the result text",onInput:r=>a(r.currentTarget.value)})}),e.jsx(x,{onClick:n,children:"Close Overlay"})]})},b=({hasBackdrop:t,disableBackdropClose:o})=>{const l=T(),[a,n]=d.useState(""),[r,p]=d.useState(),i=async()=>{const u=await R(w,{disableBackdropClose:o,hasBackdrop:t,panelClass:["overlay-standalone-example"],decorator:c=>e.jsx(j.Provider,{value:l.themeConfig,children:c}),data:a?{text:a}:null}).afterClosed;p(u??{result:"No result"})};return e.jsxs("div",{className:"overlay-standalone__host",children:[e.jsx(m,{children:e.jsx(v,{placeholder:"Enter any text",onInput:s=>n(s.currentTarget.value)})}),e.jsxs("p",{className:"overlay-standalone__text",children:[e.jsx("b",{children:"Overlay Result: "}),JSON.stringify(r,null,2)]}),e.jsx(x,{onClick:i,children:"Open"})]})};b.__docgenInfo={description:"",methods:[],displayName:"OverlayStandaloneExample",props:{hasBackdrop:{required:!0,tsType:{name:"boolean"},description:""},disableBackdropClose:{required:!0,tsType:{name:"boolean"},description:""}}};const ee={name:"Standalone",decorators:[O({insideBox:!0})],parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[y("Overview")],source:[{filename:"OverlayDialogStandaloneExample.tsx",language:"tsx",code:`
            <%
              function toCamelCase(str) {
                return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
              }
            %>
            import './OverlayDialogStandaloneExample.scss';
            import { useState } from "react";
            import { Button, FormField, Input, openStandaloneOverlay, OverlayRef, ThemeConfigContext } from "@cocokits/react-components";
            import { <%= toCamelCase(themeId) %>ThemeConfig } from '@cocokits/theme-<%= themeId %>';


            interface OverlayDialogData {
              text: string;
            }
            
            interface OverlayDialogResult {
              result: string;
            }
            
            const OverlayDialogStandaloneExample = ({data, close}: OverlayRef<OverlayDialogData | null, OverlayDialogResult>) => {
            
              const [text, setText] = useState('');
            
              const onCloseClick = () => {
                close({result: text});
              };
              
              return (
                <div className="overlay-dialog-standalone__host">
                  <h3 className='overlay-dialog-standalone__header'>THIS IS A OVERLAY</h3>
                  <p className='overlay-dialog-standalone__text'>
                    <b>Data: </b>
                    {data ? JSON.stringify(data, null, 2) : ''}
                  </p>
            
                  <FormField>
                    <Input placeholder="Enter the result text" onInput={(e) => setText(e.currentTarget.value)}/>
                  </FormField>
            
                  <Button onClick={onCloseClick}>Close Overlay</Button>
                </div>
              );
            };
            
            export const OverlayStandaloneExample = () => {
            
              const theme = useTheme();
            
              const [text, setText] = useState('');
              const [result, setResult] = useState<OverlayDialogResult>();
            
            
              const openOverlay = async () => {
                const renderedOverlay = openStandaloneOverlay(OverlayDialogStandaloneExample, {
                  disableBackdropClose: <%= disableBackdropClose %>,
                  hasBackdrop: <%= hasBackdrop %>,
                  panelClass: ['overlay-standalone-example'],
                  decorator: (children) => (
                    <ThemeConfigContext.Provider value={<%= toCamelCase(themeId) %>ThemeConfig}>
                      {children}
                    </ThemeConfigContext.Provider>
                  ),
                  data: text ? {text} : null
                });
            
                const overlayResult = await renderedOverlay.afterClosed;
                setResult(overlayResult ?? {result: 'No result'});
              };
            
              return (
                <div className='overlay-standalone__host'>
                  <FormField>
                    <Input placeholder='Enter any text' onInput={e => setText(e.currentTarget.value)}/>
                  </FormField>
            
                  <p className="overlay-standalone__text">
                    <b>Overlay Result: </b>
                    {JSON.stringify(result, null, 2)}
                  </p>
            
                  <Button onClick={openOverlay}>Open</Button>
                </div>
              );
            };
          `},{filename:"OverlayDialogStandalone.scss",language:"scss",code:`
            .overlay-dialog-standalone__host {
              padding: 24px;
              background-color: white;
              border-radius: 4px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            
            .overlay-dialog-standalone__header {
              margin: 0 0 16px;
              font-size: 24px;
              font-weight: 500;
            }
            
            .overlay-dialog-standalone__text {
              margin: 0 0 16px;
              font-size: 16px;
            }
          `}],hasControl:!0,controls:[h(),g()]}},render:t=>e.jsx(b,{hasBackdrop:t.cckControl.hasBackdrop,disableBackdropClose:t.cckControl.disableBackdropClose})},I=({hasBackdrop:t,disableBackdropClose:o})=>{const l="OverlayPortalExample",a=k.getWithId(l),[n,r]=d.useState(""),[p,i]=d.useState(""),s=async()=>{a.open({disableBackdropClose:o,hasBackdrop:t,panelClass:["overlay-portal-example"]})},u=()=>{a.close()};return e.jsxs("div",{className:"overlay-portal__host",children:[e.jsx(m,{children:e.jsx(v,{placeholder:"Enter any text",onInput:c=>r(c.currentTarget.value)})}),e.jsxs("p",{className:"overlay-portal__text",children:[e.jsx("b",{children:"Overlay Result: "}),p]}),e.jsx(x,{onClick:s,children:"Open"}),e.jsx(_,{portalId:l,children:e.jsxs("div",{className:"overlay-dialog-standalone__host",children:[e.jsx("h3",{className:"overlay-dialog-standalone__header",children:"THIS IS A OVERLAY"}),e.jsxs("p",{className:"overlay-dialog-standalone__text",children:[e.jsx("b",{children:"Data: "}),n]}),e.jsx(m,{children:e.jsx(v,{placeholder:"Enter the result text",onInput:c=>i(c.currentTarget.value)})}),e.jsx(x,{onClick:u,children:"Close Overlay"})]})})]})};I.__docgenInfo={description:"",methods:[],displayName:"OverlayPortalExample",props:{hasBackdrop:{required:!0,tsType:{name:"boolean"},description:""},disableBackdropClose:{required:!0,tsType:{name:"boolean"},description:""}}};const te={name:"Portal",decorators:[O({insideBox:!0})],parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[y("Overview")],source:[{filename:"OverlayPortalExample.tsx",language:"tsx",code:`
          import './OverlayPortalExample.scss';
          import { useState } from "react";
          
          import { Button, FormField, Input, OverlayPortal, OverlayPortalManager } from "@cocokits/react-components";
          
          
          export const OverlayPortalExample = () => {
          
            const id = 'OverlayPortalExample';
            const portalManager = OverlayPortalManager.getWithId(id);
          
            const [text, setText] = useState('');
            const [result, setResult] = useState('');
          
          
            const openOverlay = async () => {
              portalManager.open({
                disableBackdropClose: <%= disableBackdropClose %>,
                hasBackdrop: <%= hasBackdrop %>,
                panelClass: ['overlay-portal-example']
              });
            };
          
            const onCloseClick = () => {
              portalManager.close();
            };
          
            return (
              <div className='overlay-portal__host'>
                <FormField>
                  <Input placeholder='Enter any text' onInput={e => setText(e.currentTarget.value)}/>
                </FormField>
          
                <p className="overlay-portal__text">
                  <b>Overlay Result: </b>
                  {result}
                </p>
          
                <Button onClick={openOverlay}>Open</Button>
          
                <OverlayPortal portalId={id}>
                  <div className="overlay-dialog-standalone__host">
                    <h3 className='overlay-dialog-standalone__header'>THIS IS A OVERLAY</h3>
                    <p className='overlay-dialog-standalone__text'>
                      <b>Data: </b>
                      {text}
                    </p>
          
                    <FormField>
                      <Input placeholder="Enter the result text" onInput={(e) => setResult(e.currentTarget.value)}/>
                    </FormField>
          
                    <Button onClick={onCloseClick}>Close Overlay</Button>
                  </div>
                </OverlayPortal>
              </div>
            );
          };
            
          `},{filename:"OverlayPortalExample.scss",language:"scss",code:`
            .overlay-dialog-portal__host {
              display: flex;
              flex-direction: column;
              gap: 12px;
            }

            .overlay-dialog-portal__header {
              font: var(--cck-doc-display-xs-medium, 500 24px / 38px Inter);
              color: var(--cck-doc-color-font-1, #000);
            }

            .overlay-dialog-portal__text {
              font: var(--cck-doc-text-sm-regular, 400 14px / 24px Inter);
              color: var(--cck-doc-color-font-3, #ccc);
            }

            .overlay-portal__host {
              padding: 8px 4px;
              display: flex;
              gap: 12px;
              flex-direction: column;
              align-items: center;
            }

            .overlay-portal__text {
              font: var(--cck-doc-text-sm-regular, 400 14px/24px Inter);
              color: var(--cck-doc-color-font-3, #ccc);
            }


            .overlay-portal-example .cck-overlay__content-wrapper {
              background-color: var(--cck-doc-color-bg-2, #15171e);
              border: 1px solid var(--cck-doc-color-border-1, #2d2f36);
              padding: 12px 24px 24px;
              border-radius: var(--cck-doc-radius-md, 8px);
            }

            .overlay-portal-example .cck-overlay__backdrop {
              background-color: color-mix(in srgb, var(--cck-doc-color-bg-1, #0d0e11) 80%, transparent);
            }

          `}],hasControl:!0,controls:[h(),g()]}},render:t=>e.jsx(I,{hasBackdrop:t.cckControl.hasBackdrop,disableBackdropClose:t.cckControl.disableBackdropClose})},M=()=>{const{data:t,close:o}=N(),[l,a]=d.useState(""),n=()=>{o({result:l})};return e.jsxs("div",{className:"overlay-dialog-standalone__host",children:[e.jsx("h3",{className:"overlay-dialog-standalone__header",children:"THIS IS A OVERLAY"}),e.jsxs("p",{className:"overlay-dialog-standalone__text",children:[e.jsx("b",{children:"Data: "}),t?JSON.stringify(t,null,2):""]}),e.jsx(m,{children:e.jsx(v,{placeholder:"Enter the result text",onInput:r=>a(r.currentTarget.value)})}),e.jsx(x,{onClick:n,children:"Close Overlay"})]})},S=({hasBackdrop:t,disableBackdropClose:o})=>{const l="OverlayPortalAsComponentExample",[a,n]=d.useState(""),[r,p]=d.useState(),i=async()=>{const s=k.getWithId(l);if(s.getState().isOpened)return;const c=await s.open({disableBackdropClose:o,hasBackdrop:t,panelClass:["overlay-portal-as-component-example"],data:a?{text:a}:null}).afterClosed;p(c??{result:"No result"})};return e.jsxs("div",{className:"overlay-portal__host",children:[e.jsx(m,{children:e.jsx(v,{placeholder:"Enter any text",onInput:s=>n(s.currentTarget.value)})}),e.jsxs("p",{className:"overlay-portal__text",children:[e.jsx("b",{children:"Overlay Result: "}),JSON.stringify(r,null,2)]}),e.jsx(x,{onClick:i,children:"Open"}),e.jsx(_,{portalId:l,children:e.jsx(M,{})})]})};S.__docgenInfo={description:"",methods:[],displayName:"OverlayPortalAsComponentExample",props:{hasBackdrop:{required:!0,tsType:{name:"boolean"},description:""},disableBackdropClose:{required:!0,tsType:{name:"boolean"},description:""}}};const oe={name:"Portal as Component",decorators:[O({insideBox:!0})],parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[y("Overview")],source:[{filename:"OverlayPortalAsComponentExample.tsx",language:"tsx",code:`
            import './OverlayPortalAsComponentExample.scss';
            import { useState } from "react";
            
            import { Button, FormField, Input, OverlayPortal, OverlayPortalManager, useOverlayRef } from "@cocokits/react-components";
            
            
            interface OverlayDialogData {
              text: string;
            }
            
            interface OverlayDialogResult {
              result: string;
            }
            
            const OverlayPortalAsComponentDialogExample = () => {
            
              const {data, close} = useOverlayRef<OverlayDialogData | null, OverlayDialogResult>();
              const [text, setText] = useState('');
            
              const onCloseClick = () => {
                close({result: text});
              };
              
              return (
                <div className="overlay-dialog-standalone__host">
                  <h3 className='overlay-dialog-standalone__header'>THIS IS A OVERLAY</h3>
                  <p className='overlay-dialog-standalone__text'>
                    <b>Data: </b>
                    {data ? JSON.stringify(data, null, 2) : ''}
                  </p>
            
                  <FormField>
                    <Input placeholder="Enter the result text" onInput={(e) => setText(e.currentTarget.value)}/>
                  </FormField>
            
                  <Button onClick={onCloseClick}>Close Overlay</Button>
                </div>
              );
            };
            
            
            export const OverlayPortalAsComponentExample = ({hasBackdrop, disableBackdropClose}: {
              hasBackdrop: boolean,
              disableBackdropClose: boolean,
            }) => {
            
              const id = 'OverlayPortalAsComponentExample';
            
              const [text, setText] = useState('');
              const [result, setResult] = useState<OverlayDialogResult>();
            
            
              const openOverlay = async () => {
                const portal = OverlayPortalManager.getWithId<OverlayDialogData | null, OverlayDialogResult>(id);
                
                if(portal.getState().isOpened) {
                  return;
                }
            
                const renderedOverlay = portal.open({
                  disableBackdropClose,
                  hasBackdrop,
                  panelClass: ['overlay-portal-as-component-example'],
                  data: text ? {text} : null,
                });
            
                const overlayResult = await renderedOverlay.afterClosed;
                setResult(overlayResult ?? {result: 'No result'});
              };
            
              return (
                <div className='overlay-portal__host'>
                  <FormField>
                    <Input placeholder='Enter any text' onInput={e => setText(e.currentTarget.value)}/>
                  </FormField>
            
                  <p className="overlay-portal__text">
                    <b>Overlay Result: </b>
                    {JSON.stringify(result, null, 2)}
                  </p>
            
                  <Button onClick={openOverlay}>Open</Button>
            
                  <OverlayPortal portalId={id}>
                    <OverlayPortalAsComponentDialogExample />
                  </OverlayPortal>
                </div>
              );
            };
          `},{filename:"OverlayPortalAsComponentExample.scss",language:"scss",code:`
            .overlay-dialog-portal__host {
                display: flex;
                flex-direction: column;
                gap: 12px;
              }

              .overlay-dialog-portal__header {
                font: var(--cck-doc-display-xs-medium, 500 24px / 38px Inter);
                color: var(--cck-doc-color-font-1, #000);
              }

              .overlay-dialog-portal__text {
                font: var(--cck-doc-text-sm-regular, 400 14px / 24px Inter);
                color: var(--cck-doc-color-font-3, #ccc);
              }

              .overlay-portal__host {
                padding: 8px 4px;
                display: flex;
                gap: 12px;
                flex-direction: column;
                align-items: center;
              }

              .overlay-portal__text {
                font: var(--cck-doc-text-sm-regular, 400 14px/24px Inter);
                color: var(--cck-doc-color-font-3, #ccc);
              }


              .overlay-portal-as-component-example .cck-overlay__content-wrapper {
                background-color: var(--cck-doc-color-bg-2, #15171e);
                border: 1px solid var(--cck-doc-color-border-1, #2d2f36);
                padding: 12px 24px 24px;
                border-radius: var(--cck-doc-radius-md, 8px);
              }

              .overlay-portal-as-component-example .cck-overlay__backdrop {
                background-color: color-mix(in srgb, var(--cck-doc-color-bg-1, #0d0e11) 80%, transparent);
              }

          `}],hasControl:!0,controls:[h(),g()]}},render:t=>e.jsx(S,{hasBackdrop:t.cckControl.hasBackdrop,disableBackdropClose:t.cckControl.disableBackdropClose})},ae={component:f,title:"CDK/Overlay",parameters:{docs:{description:{component:[A].join(`
`)}},cckAddon:{componentName:"overlay"}}},re=["Standalone","Portal","PortalAsComponent"];export{te as Portal,oe as PortalAsComponent,ee as Standalone,re as __namedExportsOrder,ae as default};
