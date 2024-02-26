"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6777],{30770:function(e,t,r){r.d(t,{q:function(){return y}});var n=r(27378),l=r(92082),a=r(83453),o=r(96739),i=r(6231),s=r(56589),u=r(50332),c=r(20410);let d=(0,n.createContext)(null),p=d.Provider;var m={group:"m-11def92b",root:"m-f85678b6",image:"m-11f8ac07",placeholder:"m-104cd71f"};let v={},f=(0,a.Z)((e,{spacing:t})=>({group:{"--ag-spacing":(0,l.bG)(t)}})),h=(0,c.d)((e,t)=>{let r=(0,o.w)("AvatarGroup",v,e),{classNames:l,className:a,style:u,styles:c,unstyled:d,vars:h,spacing:g,...E}=r,w=(0,i.y)({name:"AvatarGroup",classes:m,props:r,className:a,style:u,classNames:l,styles:c,unstyled:d,vars:h,varsResolver:f,rootSelector:"group"});return n.createElement(p,{value:!0},n.createElement(s.x,{ref:t,...w("group"),...E}))});function g(e){return n.createElement("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}h.classes=m,h.displayName="@mantine/core/AvatarGroup";let E={},w=(0,a.Z)((e,{size:t,radius:r,variant:n,gradient:a,color:o,autoContrast:i})=>{let s=e.variantColorResolver({color:o||"gray",theme:e,gradient:a,variant:n||"light",autoContrast:i});return{root:{"--avatar-size":(0,l.ap)(t,"avatar-size"),"--avatar-radius":void 0===r?void 0:(0,l.H5)(r),"--avatar-bg":o||n?s.background:void 0,"--avatar-color":o||n?s.color:void 0,"--avatar-bd":o||n?s.border:void 0}}}),y=(0,u.b)((e,t)=>{let r=(0,o.w)("Avatar",E,e),{classNames:l,className:a,style:u,styles:c,unstyled:p,vars:v,src:f,alt:h,radius:y,color:C,gradient:b,imageProps:D,children:x,autoContrast:P,mod:S,...k}=r,M=function(){let e=(0,n.useContext)(d);return{withinGroup:!!e}}(),[N,O]=(0,n.useState)(!f),I=(0,i.y)({name:"Avatar",props:r,classes:m,className:a,style:u,classNames:l,styles:c,unstyled:p,vars:v,varsResolver:w});return(0,n.useEffect)(()=>O(!f),[f]),n.createElement(s.x,{...I("root"),mod:[{"within-group":M.withinGroup},S],ref:t,...k},N?n.createElement("span",{...I("placeholder"),title:h},x||n.createElement(g,null)):n.createElement("img",{...D,...I("image"),src:f,alt:h,onError:e=>{O(!0),D?.onError?.(e)}}))});y.classes=m,y.displayName="@mantine/core/Avatar",y.Group=h},81097:function(e,t,r){r.d(t,{r:function(){return c}});var n=r(27378),l=r(40624),a=r(38765),o=r(49849),i=r(45608),s=r(61777),u=r(62443);function Option({data:e,withCheckIcon:t,value:r,checkIconPosition:o,unstyled:c,renderOption:d}){if(!(0,s.f)(e)){var p;let s=(p=e.value,Array.isArray(r)?r.includes(p):r===p),m=t&&s&&n.createElement(a.n,{className:u.Z.optionsDropdownCheckIcon}),v=n.createElement(n.Fragment,null,"left"===o&&m,n.createElement("span",null,e.label),"right"===o&&m);return n.createElement(i.h.Option,{value:e.value,disabled:e.disabled,className:(0,l.Z)({[u.Z.optionsDropdownOption]:!c}),"data-reverse":"right"===o||void 0,"data-checked":s||void 0,"aria-selected":s,active:s},"function"==typeof d?d({option:e,checked:s}):v)}let m=e.items.map(e=>n.createElement(Option,{data:e,value:r,key:e.value,unstyled:c,withCheckIcon:t,checkIconPosition:o}));return n.createElement(i.h.Group,{label:e.group},m)}function c({data:e,hidden:t,hiddenWhenEmpty:r,filter:l,search:a,limit:u,maxDropdownHeight:c,withScrollArea:d=!0,filterOptions:p=!0,withCheckIcon:m=!1,value:v,checkIconPosition:f,nothingFoundMessage:h,unstyled:g,labelId:E,renderOption:w}){!function e(t,r=new Set){if(Array.isArray(t))for(let n of t)if((0,s.f)(n))e(n.items,r);else{if(void 0===n.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof n.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof n.value}`);if(r.has(n.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${n.value}" was provided more than once`);r.add(n.value)}}(e);let y="string"==typeof a,C=y?(l||function e({options:t,search:r,limit:n}){let l=r.trim().toLowerCase(),a=[];for(let o=0;o<t.length;o+=1){let i=t[o];if(a.length===n)break;(0,s.f)(i)&&a.push({group:i.group,items:e({options:i.items,search:r,limit:n-a.length})}),!(0,s.f)(i)&&i.label.toLowerCase().includes(l)&&a.push(i)}return a})({options:e,search:p?a:"",limit:u??1/0}):e,b=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(C),D=C.map(e=>n.createElement(Option,{data:e,key:(0,s.f)(e)?e.group:e.value,withCheckIcon:m,value:v,checkIconPosition:f,unstyled:g,renderOption:w}));return n.createElement(i.h.Dropdown,{hidden:t||r&&b},n.createElement(i.h.Options,{labelledBy:E},d?n.createElement(o.x.Autosize,{mah:c??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y"},D):D,b&&h&&n.createElement(i.h.Empty,null,h)))}},61777:function(e,t,r){r.d(t,{f:function(){return n}});function n(e){return"group"in e}},38099:function(e,t,r){r.d(t,{g:function(){return function e(t){return t.reduce((t,r)=>"group"in r?{...t,...e(r.items)}:(t[r.value]=r,t),{})}}})},67415:function(e,t,r){r.d(t,{N:function(){return C}});var n=r(27378),l=r(31002),a=r(58675),o=r(5564),i=r(6231),s=r(96739),u=r(55934),c=r(20410),d=r(2161),p=r(38099),m=r(45608),v=r(81097),f=r(54526),h=r(23163),g=r(39394),E=r(28639),w=r(61777);let y={maxValues:1/0,withCheckIcon:!0,checkIconPosition:"left",hiddenInputValuesDivider:","},C=(0,c.d)((e,t)=>{let r=(0,s.w)("MultiSelect",y,e),{classNames:c,className:h,style:C,styles:b,unstyled:D,vars:x,size:P,value:S,defaultValue:k,onChange:M,onKeyDown:N,variant:O,data:I,dropdownOpened:z,defaultDropdownOpened:A,onDropdownOpen:G,onDropdownClose:Z,selectFirstOptionOnChange:_,onOptionSubmit:F,comboboxProps:R,filter:B,limit:V,withScrollArea:L,maxDropdownHeight:$,searchValue:H,defaultSearchValue:T,onSearchChange:K,readOnly:j,disabled:q,onFocus:W,onBlur:Y,onPaste:J,radius:Q,rightSection:U,rightSectionWidth:X,rightSectionPointerEvents:ee,rightSectionProps:et,leftSection:er,leftSectionWidth:en,leftSectionPointerEvents:el,leftSectionProps:ea,inputContainer:eo,inputWrapperOrder:ei,withAsterisk:es,labelProps:eu,descriptionProps:ec,errorProps:ed,wrapperProps:ep,description:em,label:ev,error:ef,maxValues:eh,searchable:eg,nothingFoundMessage:eE,withCheckIcon:ew,checkIconPosition:ey,hidePickedOptions:eC,withErrorStyles:eb,name:eD,form:ex,id:eP,clearable:eS,clearButtonProps:ek,hiddenInputProps:eM,placeholder:eN,hiddenInputValuesDivider:eO,required:eI,mod:ez,renderOption:eA,onRemove:eG,onClear:eZ,...e_}=r,eF=(0,l.M)(eP),eR=(0,d.R)(I),eB=(0,p.g)(eR),eV=(0,f.K)({opened:z,defaultOpened:A,onDropdownOpen:G,onDropdownClose:()=>{Z?.(),eV.resetSelectedOption()}}),{styleProps:eL,rest:{type:e$,...eH}}=(0,u.c)(e_),[eT,eK]=(0,a.C)({value:S,defaultValue:k,finalValue:[],onChange:M}),[ej,eq]=(0,a.C)({value:H,defaultValue:T,finalValue:"",onChange:K}),eW=(0,i.y)({name:"MultiSelect",classes:{},props:r,classNames:c,styles:b,unstyled:D}),{resolvedClassNames:eY,resolvedStyles:eJ}=(0,o.h)({props:r,styles:b,classNames:c}),eQ=eT.map((e,t)=>n.createElement(g.D,{key:`${e}-${t}`,withRemoveButton:!j&&!eB[e]?.disabled,onRemove:()=>{eK(eT.filter(t=>e!==t)),eG?.(e)},unstyled:D,...eW("pill")},eB[e]?.label||e));(0,n.useEffect)(()=>{_&&eV.selectFirstOption()},[_,eT]);let eU=eS&&eT.length>0&&!q&&!j&&n.createElement(m.h.ClearButton,{size:P,...ek,onClear:()=>{eZ?.(),eK([]),eq("")}}),eX=function({data:e,value:t}){let r=t.map(e=>e.trim().toLowerCase()),n=e.reduce((e,t)=>((0,w.f)(t)?e.push({group:t.group,items:t.items.filter(e=>-1===r.indexOf(e.value.toLowerCase().trim()))}):-1===r.indexOf(t.value.toLowerCase().trim())&&e.push(t),e),[]);return n}({data:eR,value:eT});return n.createElement(n.Fragment,null,n.createElement(m.h,{store:eV,classNames:eY,styles:eJ,unstyled:D,size:P,readOnly:j,__staticSelector:"MultiSelect",onOptionSubmit:e=>{F?.(e),eq(""),eV.updateSelectedOptionIndex("selected"),eT.includes(eB[e].value)?(eK(eT.filter(t=>t!==eB[e].value)),eG?.(eB[e].value)):eT.length<eh&&eK([...eT,eB[e].value])},...R},n.createElement(m.h.DropdownTarget,null,n.createElement(E.d,{...eL,__staticSelector:"MultiSelect",classNames:eY,styles:eJ,unstyled:D,size:P,className:h,style:C,variant:O,disabled:q,radius:Q,rightSection:U||eU||n.createElement(m.h.Chevron,{size:P,error:ef,unstyled:D}),rightSectionPointerEvents:ee||(eU?"all":"none"),rightSectionWidth:X,rightSectionProps:et,leftSection:er,leftSectionWidth:en,leftSectionPointerEvents:el,leftSectionProps:ea,inputContainer:eo,inputWrapperOrder:ei,withAsterisk:es,labelProps:eu,descriptionProps:ec,errorProps:ed,wrapperProps:ep,description:em,label:ev,error:ef,multiline:!0,withErrorStyles:eb,__stylesApiProps:{...r,rightSectionPointerEvents:ee||(eU?"all":"none"),multiline:!0},pointer:!eg,onClick:()=>eg?eV.openDropdown():eV.toggleDropdown(),"data-expanded":eV.dropdownOpened||void 0,id:eF,required:eI,mod:ez},n.createElement(g.D.Group,{disabled:q,unstyled:D,...eW("pillsList")},eQ,n.createElement(m.h.EventsTarget,null,n.createElement(E.d.Field,{...eH,ref:t,id:eF,placeholder:eN,type:eg||eN?"visible":"hidden",...eW("inputField"),unstyled:D,onFocus:e=>{W?.(e),eg&&eV.openDropdown()},onBlur:e=>{Y?.(e),eV.closeDropdown(),eq("")},onKeyDown:e=>{N?.(e)," "!==e.key||eg||(e.preventDefault(),eV.toggleDropdown()),"Backspace"===e.key&&0===ej.length&&eT.length>0&&(eG?.(eT[eT.length-1]),eK(eT.slice(0,eT.length-1)))},value:ej,onChange:e=>{eq(e.currentTarget.value),eg&&eV.openDropdown(),_&&eV.selectFirstOption()},disabled:q,readOnly:j||!eg,pointer:!eg}))))),n.createElement(v.r,{data:eC?eX:eR,hidden:j||q,filter:B,search:ej,limit:V,hiddenWhenEmpty:!eg||!eE||eC&&0===eX.length&&0===ej.trim().length,withScrollArea:L,maxDropdownHeight:$,filterOptions:eg,value:eT,checkIconPosition:ey,withCheckIcon:ew,nothingFoundMessage:eE,unstyled:D,labelId:`${eF}-label`,renderOption:eA})),n.createElement("input",{type:"hidden",name:eD,value:eT.join(eO),form:ex,disabled:q,...eM}))});C.classes={...h.M.classes,...m.h.classes},C.displayName="@mantine/core/MultiSelect"},39394:function(e,t,r){r.d(t,{D:function(){return C}});var n=r(27378),l=r(92082),a=r(83453),o=r(96739),i=r(6231),s=r(56589),u=r(20410),c=r(96217),d=r(33),p=r(89871);let[m,v]=(0,p.V)();var f={root:"m-7cda1cd6","root--default":"m-44da308b","root--contrast":"m-e3a01f8",label:"m-1e0e6180",remove:"m-ae386778",group:"m-1dcfd90b"};let h={},g=(0,a.Z)((e,{gap:t},{size:r})=>({group:{"--pg-gap":void 0!==t?(0,l.ap)(t):(0,l.ap)(r,"pg-gap")}})),E=(0,u.d)((e,t)=>{let r=(0,o.w)("PillGroup",h,e),{classNames:l,className:a,style:u,styles:c,unstyled:p,vars:v,size:E,disabled:w,...y}=r,C=(0,d.D)(),b=C?.size||E||void 0,D=(0,i.y)({name:"PillGroup",classes:f,props:r,className:a,style:u,classNames:l,styles:c,unstyled:p,vars:v,varsResolver:g,stylesCtx:{size:b},rootSelector:"group"});return n.createElement(m,{value:{size:b,disabled:w}},n.createElement(s.x,{ref:t,size:b,...D("group"),...y}))});E.classes=f,E.displayName="@mantine/core/PillGroup";let w={variant:"default"},y=(0,a.Z)((e,{radius:t},{size:r})=>({root:{"--pill-fz":(0,l.ap)(r,"pill-fz"),"--pill-height":(0,l.ap)(r,"pill-height"),"--pill-radius":void 0===t?void 0:(0,l.H5)(t)}})),C=(0,u.d)((e,t)=>{let r=(0,o.w)("Pill",w,e),{classNames:l,className:a,style:u,styles:p,unstyled:m,vars:h,variant:g,children:E,withRemoveButton:C,onRemove:b,removeButtonProps:D,radius:x,size:P,disabled:S,mod:k,...M}=r,N=v(),O=(0,d.D)(),I=P||N?.size||void 0,z=O?.variant==="filled"?"contrast":g||"default",A=(0,i.y)({name:"Pill",classes:f,props:r,className:a,style:u,classNames:l,styles:p,unstyled:m,vars:h,varsResolver:y,stylesCtx:{size:I}});return n.createElement(s.x,{component:"span",ref:t,variant:z,size:I,...A("root",{variant:z}),mod:[{"with-remove":C,disabled:S||N?.disabled},k],...M},n.createElement("span",{...A("label")},E),C&&n.createElement(c.P,{variant:"transparent",radius:x,tabIndex:-1,"aria-hidden":!0,unstyled:m,...D,...A("remove",{className:D?.className,style:D?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),D?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),b?.(),D?.onClick?.(e)}}))});C.classes=f,C.displayName="@mantine/core/Pill",C.Group=E},33:function(e,t,r){r.d(t,{D:function(){return a},H:function(){return l}}),r(27378);var n=r(89871);let[l,a]=(0,n.V)()},28639:function(e,t,r){r.d(t,{d:function(){return h}});var n=r(27378),l=r(96739),a=r(20410),o=r(23163),i=r(33),s=r(72840),u=r(6231),c=r(56589),d=r(5739),p={field:"m-45c4369d"};let m={type:"visible"},v=(0,a.d)((e,t)=>{let r=(0,l.w)("PillsInputField",m,e),{classNames:a,className:o,style:v,styles:f,unstyled:h,vars:g,type:E,disabled:w,id:y,pointer:C,mod:b,...D}=r,x=(0,i.D)(),P=(0,d.D)(),S=(0,u.y)({name:"PillsInputField",classes:p,props:r,className:o,style:v,classNames:a,styles:f,unstyled:h,rootSelector:"field"}),k=w||x?.disabled;return n.createElement(c.x,{component:"input",ref:(0,s.Yx)(t,x?.fieldRef),"data-type":E,disabled:k,mod:[{disabled:k,pointer:C},b],...S("field"),...D,id:P?.inputId||y,"aria-invalid":x?.hasError,"aria-describedby":P?.describedBy,type:"text",onMouseDown:e=>!C&&e.stopPropagation()})});v.classes=p,v.displayName="@mantine/core/PillsInputField";let f={},h=(0,a.d)((e,t)=>{let r=(0,l.w)("PillsInput",f,e),{children:a,onMouseDown:s,onClick:u,size:c,disabled:d,__staticSelector:p,error:m,variant:v,...h}=r,g=(0,n.useRef)();return n.createElement(i.H,{value:{fieldRef:g,size:c,disabled:d,hasError:!!m,variant:v}},n.createElement(o.M,{size:c,error:m,variant:v,component:"div",ref:t,onMouseDown:e=>{e.preventDefault(),s?.(e),g.current?.focus()},onClick:e=>{e.preventDefault(),u?.(e),g.current?.focus()},...h,multiline:!0,disabled:d,__staticSelector:p||"PillsInput",withAria:!1},a))});h.displayName="@mantine/core/PillsInput",h.Field=v}}]);