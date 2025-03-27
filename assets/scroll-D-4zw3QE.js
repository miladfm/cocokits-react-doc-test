import{ag as e,ah as c}from"./chunk-NUUEMKO5-Ch6kBRqy.js";import{useMDXComponents as n}from"./index-DOvxcyG1.js";import{M as o}from"./mdx-page-with-theme-section-BKPFU3aV.js";import"./index-qVDZzPEr.js";import"./doc-page-k0DjxlZo.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-xcCtAxcb.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";const i=[{id:"selection_scrolllocker",name:"ScrollLocker"}];function r(s){const l={code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Utils/Scroll"}),`
`,e.jsxs(o,{breadcrumb:"Utils",title:"Scroll",tocItems:i,hideThemeSwitcher:!0,children:[e.jsx("div",{}),e.jsxs("div",{id:"selection_scrolllocker",children:[e.jsx(l.h2,{id:"scrolllocker",children:"ScrollLocker"}),e.jsx(l.p,{children:`A utility class that provides methods to lock and unlock scrolling on the page.\r
It also allows for the addition of callback functions to be notified whenever\r
the scroll lock state changes.`}),e.jsxs(l.p,{children:[e.jsx(l.code,{children:"ScrollLocker"}),` is designed as a singleton, providing a global instance to manage\r
scroll locking behavior across different parts of the application.`]}),e.jsx(l.h3,{id:"use-cases",children:"Use Cases:"}),e.jsxs(l.ul,{children:[`
`,e.jsxs(l.li,{children:[e.jsx(l.strong,{children:"Overlay modals or popups"}),`: When an overlay (such as a modal or a popup) is opened,\r
users should not be able to scroll the underlying content.`]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.strong,{children:"Side navigation menus"}),`: Locking the scroll when a side navigation menu is opened can\r
prevent users from scrolling the main content.`]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.strong,{children:"Loading or confirmation screens"}),`: In scenarios where a confirmation or loading screen\r
appears, locking the scroll ensures users remain focused on the task at hand and do not\r
scroll unintentionally.`]}),`
`]}),e.jsx(l.h3,{id:"example",children:"Example"}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-typescript",children:`const locker = ScrollLocker.globalInstance();\r
locker.lock(true);  // Locks the scroll and hides the scrollbar\r
locker.unlock();    // Unlocks the scroll
`})}),e.jsx(l.h3,{id:"accessors",children:"Accessors"}),e.jsx(l.h4,{id:"islocked",children:"isLocked"}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-ts",children:`get isLocked(): boolean
`})}),e.jsx(l.p,{children:"Determines whether scrolling is currently locked on the page."}),e.jsx(l.h5,{id:"example-1",children:"Example"}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-typescript",children:`const isLocked = ScrollLocker.globalInstance().isLocked;\r
console.log(isLocked);  // Outputs: true or false
`})}),e.jsx(l.h5,{id:"returns",children:"Returns"}),e.jsx(l.p,{children:e.jsx(l.code,{children:"boolean"})}),e.jsxs(l.p,{children:[e.jsx(l.code,{children:"true"})," if scrolling is locked, otherwise ",e.jsx(l.code,{children:"false"}),"."]}),e.jsx(l.h3,{id:"methods",children:"Methods"}),e.jsx(l.h4,{id:"addlockchangelistener",children:"addLockChangeListener()"}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-ts",children:`addLockChangeListener(callback: (isLock: boolean) => void): void
`})}),e.jsx(l.p,{children:"Adds a callback function that is invoked whenever the scroll lock state changes."}),e.jsx(l.h5,{id:"parameters",children:"Parameters"}),e.jsx("div",{class:"arg-type-table-wrapper",children:e.jsxs("table",{class:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{class:"description-column",children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(l.p,{children:e.jsx(l.code,{children:"callback"})})}),e.jsx("td",{children:e.jsx(l.p,{children:e.jsx(l.code,{children:"(isLock: boolean) => void"})})}),e.jsx("td",{children:e.jsxs(l.p,{children:["A function that receives the current lock state (",e.jsx(l.code,{children:"true"})," for locked, ",e.jsx(l.code,{children:"false"})," for unlocked)."]})})]})})]})}),e.jsx(l.h5,{id:"returns-1",children:"Returns"}),e.jsx(l.p,{children:e.jsx(l.code,{children:"void"})}),e.jsx(l.h5,{id:"example-2",children:"Example"}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-typescript",children:`const locker = ScrollLocker.globalInstance();\r
locker.addLockChangeListener((isLocked) => {\r
  console.log('Scroll locked:', isLocked);\r
});
`})}),e.jsx(l.h4,{id:"lock",children:"lock()"}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-ts",children:`lock(hideScrollbar: boolean): void
`})}),e.jsx(l.p,{children:"Locks the scroll on the page, optionally hiding the scrollbar."}),e.jsxs(l.p,{children:[e.jsx(l.strong,{children:"Note"}),`: Hiding the scrollbar may cause a visible shift in content due to changes in\r
the body width, particularly when the content resizes.`]}),e.jsx(l.h5,{id:"parameters-1",children:"Parameters"}),e.jsx("div",{class:"arg-type-table-wrapper",children:e.jsxs("table",{class:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default value"}),e.jsx("th",{class:"description-column",children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(l.p,{children:e.jsx(l.code,{children:"hideScrollbar"})})}),e.jsx("td",{children:e.jsx(l.p,{children:e.jsx(l.code,{children:"boolean"})})}),e.jsx("td",{children:e.jsx(l.p,{children:e.jsx(l.code,{children:"false"})})}),e.jsxs("td",{children:[e.jsx(l.p,{children:"Whether to hide the scrollbar when locking."}),e.jsxs(l.ul,{children:[`
`,e.jsxs(l.li,{children:[`
`,e.jsxs(l.p,{children:["If ",e.jsx(l.code,{children:"hideScrollbar"})," is ",e.jsx(l.code,{children:"false"}),`, the scrollbar remains visible, but the user cannot scroll.\r
This is useful when you want to avoid changing the width of the body element to ensure\r
that all elements stay in their original position. This method is ideal for cases where\r
the overlay has a backdrop (like a modal) with opacity or no backdrop.`]}),`
`]}),`
`,e.jsxs(l.li,{children:[`
`,e.jsxs(l.p,{children:["If ",e.jsx(l.code,{children:"hideScrollbar"})," is ",e.jsx(l.code,{children:"true"}),`, the scrollbar is hidden, and the body width changes.\r
This is beneficial for scenarios where a fullscreen overlay is in place, and the user\r
cannot see the content behind the overlay. The size change in the body will be hidden behind\r
the overlay, so the user will not notice any layout shift.`]}),`
`]}),`
`]})]})]})})]})}),e.jsx(l.h5,{id:"returns-2",children:"Returns"}),e.jsx(l.p,{children:e.jsx(l.code,{children:"void"})}),e.jsx(l.h5,{id:"example-3",children:"Example"}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-typescript",children:`const locker = ScrollLocker.globalInstance();\r
locker.lock();     // Locks scroll with visible scrollbar\r
locker.lock(true); // Locks scroll and hides the scrollbar
`})}),e.jsx(l.h4,{id:"removelockchangelistener",children:"removeLockChangeListener()"}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-ts",children:`removeLockChangeListener(callback: (isLock: boolean) => void): void
`})}),e.jsx(l.p,{children:"Removes a previously added scroll lock change listener."}),e.jsx(l.h5,{id:"parameters-2",children:"Parameters"}),e.jsx("div",{class:"arg-type-table-wrapper",children:e.jsxs("table",{class:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{class:"description-column",children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(l.p,{children:e.jsx(l.code,{children:"callback"})})}),e.jsx("td",{children:e.jsx(l.p,{children:e.jsx(l.code,{children:"(isLock: boolean) => void"})})}),e.jsx("td",{children:e.jsx(l.p,{children:"The listener function to be removed."})})]})})]})}),e.jsx(l.h5,{id:"returns-3",children:"Returns"}),e.jsx(l.p,{children:e.jsx(l.code,{children:"void"})}),e.jsx(l.h5,{id:"example-4",children:"Example"}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-typescript",children:`const locker = ScrollLocker.globalInstance();\r
locker.removeLockChangeListener(myCallback);
`})}),e.jsx(l.h4,{id:"unlock",children:"unlock()"}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-ts",children:`unlock(): void
`})}),e.jsx(l.p,{children:`Unlocks the scroll on the page, restoring the previous scroll position.\r
If the scroll is already unlocked, this function has no effect.`}),e.jsx(l.h5,{id:"returns-4",children:"Returns"}),e.jsx(l.p,{children:e.jsx(l.code,{children:"void"})}),e.jsx(l.h5,{id:"example-5",children:"Example"}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-typescript",children:`const locker = ScrollLocker.globalInstance();\r
locker.unlock();  // Unlocks scrolling and restores scroll position
`})}),e.jsx(l.h4,{id:"globalinstance",children:"globalInstance()"}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-ts",children:`static globalInstance(): ScrollLocker
`})}),e.jsxs(l.p,{children:["Returns the global instance of ",e.jsx(l.code,{children:"ScrollLocker"})," ensuring a singleton pattern."]}),e.jsx(l.h5,{id:"returns-5",children:"Returns"}),e.jsx(l.p,{children:e.jsx(l.code,{children:"ScrollLocker"})}),e.jsxs(l.p,{children:["The global ",e.jsx(l.code,{children:"ScrollLocker"})," instance."]}),e.jsx(l.h5,{id:"example-6",children:"Example"}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-typescript",children:`const locker = ScrollLocker.globalInstance();\r
const locker2 = ScrollLocker.globalInstance();\r
locker.lock();      // Locks scrolling\r
locker2.isLocked(); // true
`})})]})]})]})}function b(s={}){const{wrapper:l}={...n(),...s.components};return l?e.jsx(l,{...s,children:e.jsx(r,{...s})}):r(s)}export{b as default,i as tocItems};
