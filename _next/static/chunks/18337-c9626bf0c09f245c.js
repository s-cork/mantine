"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18337],{18337:function(e,n,t){t.d(n,{P:function(){return u},t:function(){return m}});var o=t(27378),i=t(22971),r=t(30770),a=t(26569),c=t(76253);let s=[{id:"bender",image:"https://img.icons8.com/clouds/256/000000/futurama-bender.png",label:"Bender Bending Rodr\xedguez",description:"Fascinated with cooking, though has no sense of taste",content:"Bender Bending Rodr\xedguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend."},{id:"carol",image:"https://img.icons8.com/clouds/256/000000/futurama-mom.png",label:"Carol Miller",description:"One of the richest people on Earth",content:"Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series."},{id:"homer",image:"https://img.icons8.com/clouds/256/000000/homer-simpson.png",label:"Homer Simpson",description:"Overweight, lazy, and often ignorant",content:"Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson."}],l=`
import { Group, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
  {
    id: 'bender',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodr\xedguez',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodr\xedguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },

  {
    id: 'carol',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    description: 'One of the richest people on Earth',
    content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
  },

  {
    id: 'homer',
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
    content: 'Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.',
  },
];

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

function Demo() {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion chevronPosition="right" variant="contained">
      {items}
    </Accordion>
  );
}
`;function d({label:e,image:n,description:t}){return o.createElement(i.Z,{wrap:"nowrap"},o.createElement(r.q,{src:n,radius:"xl",size:"lg"}),o.createElement("div",null,o.createElement(a.x,null,e),o.createElement(a.x,{size:"sm",c:"dimmed",fw:400},t)))}function m(e){let n=s.map(e=>o.createElement(c.U.Item,{value:e.id,key:e.label},o.createElement(c.U.Control,null,o.createElement(d,{...e})),o.createElement(c.U.Panel,null,o.createElement(a.x,{size:"sm"},e.content))));return o.createElement(c.U,{chevronPosition:"right",variant:"contained",...e},n)}let u={type:"code",code:l,component:function(){return o.createElement(m,null)},maxWidth:540,centered:!0}},76253:function(e,n,t){t.d(n,{U:function(){return B}});var o=t(27378),i=t(31002),r=t(58675),a=t(71078),c=t(88140),s=t(92082),l=t(83453),d=t(96739),m=t(6231),u=t(56589),h=t(71656);let[f,p]=(0,h.R)("Accordion component was not found in the tree");var g=t(1189),v=t(61734),b=t(20410),y=t(19397);let[w,A]=(0,h.R)("Accordion.Item component was not found in the tree");var E={root:"m-9bdbb667",panel:"m-df78851f",content:"m-4ba554d4",itemTitle:"m-8fa820a0",control:"m-4ba585b8","control--default":"m-6939a5e9","control--contained":"m-4271d21b",label:"m-df3ffa0f",chevron:"m-3f35ae96",icon:"m-9bd771fe",item:"m-9bd7b098","item--default":"m-fe19b709","item--contained":"m-1f921b3b","item--filled":"m-2cdf939a","item--separated":"m-9f59b069"};let x={},C=(0,b.d)((e,n)=>{let{classNames:t,className:i,style:r,styles:a,vars:c,chevron:s,icon:l,onClick:m,onKeyDown:h,children:f,disabled:g,mod:b,...w}=(0,d.w)("AccordionControl",x,e),{value:E}=A(),C=p(),S=C.isItemActive(E),M="number"==typeof C.order,I=`h${C.order}`,k=o.createElement(y.k,{...w,...C.getStyles("control",{className:i,classNames:t,style:r,styles:a,variant:C.variant}),unstyled:C.unstyled,mod:["accordion-control",{active:S,"chevron-position":C.chevronPosition,disabled:g},b],ref:n,onClick:e=>{m?.(e),C.onChange(E)},type:"button",disabled:g,"aria-expanded":S,"aria-controls":C.getRegionId(E),id:C.getControlId(E),onKeyDown:(0,v.R)({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:C.loop,orientation:"vertical",onKeyDown:h})},o.createElement(u.x,{component:"span",mod:{rotate:!C.disableChevronRotation&&S,position:C.chevronPosition},...C.getStyles("chevron",{classNames:t,styles:a})},s||C.chevron),o.createElement("span",{...C.getStyles("label",{classNames:t,styles:a})},f),l&&o.createElement(u.x,{component:"span",mod:{"chevron-position":C.chevronPosition},...C.getStyles("icon",{classNames:t,styles:a})},l));return M?o.createElement(I,{...C.getStyles("itemTitle",{classNames:t,styles:a})},k):k});C.displayName="@mantine/core/AccordionControl",C.classes=E;let S={},M=(0,b.d)((e,n)=>{let{classNames:t,className:i,style:r,styles:a,vars:c,value:s,mod:l,...m}=(0,d.w)("AccordionItem",S,e),h=p();return o.createElement(w,{value:{value:s}},o.createElement(u.x,{ref:n,mod:[{active:h.isItemActive(s)},l],...h.getStyles("item",{className:i,classNames:t,styles:a,style:r,variant:h.variant}),...m}))});M.displayName="@mantine/core/AccordionItem",M.classes=E;var I=t(4184);let k={},P=(0,b.d)((e,n)=>{let{classNames:t,className:i,style:r,styles:a,vars:c,children:s,...l}=(0,d.w)("AccordionPanel",k,e),{value:m}=A(),u=p();return o.createElement(I.U,{ref:n,...u.getStyles("panel",{className:i,classNames:t,style:r,styles:a}),...l,in:u.isItemActive(m),transitionDuration:u.transitionDuration??200,role:"region",id:u.getRegionId(m),"aria-labelledby":u.getControlId(m)},o.createElement("div",{...u.getStyles("content",{classNames:t,styles:a})},s))});P.displayName="@mantine/core/AccordionPanel",P.classes=E;let T={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevron:o.createElement(g.Q,null)},z=(0,l.Z)((e,{transitionDuration:n,chevronSize:t,radius:o})=>({root:{"--accordion-transition-duration":void 0===n?void 0:`${n}ms`,"--accordion-chevron-size":void 0===t?void 0:(0,a.h)(t),"--accordion-radius":void 0===o?void 0:(0,s.H5)(o)}}));function B(e){let n=(0,d.w)("Accordion",T,e),{classNames:t,className:a,style:s,styles:l,unstyled:h,vars:p,children:g,multiple:v,value:b,defaultValue:y,onChange:w,id:A,loop:x,transitionDuration:C,disableChevronRotation:S,chevronPosition:M,chevronSize:I,order:k,chevron:P,variant:B,radius:R,...H}=n,$=(0,i.M)(A),[F,U]=(0,r.C)({value:b,defaultValue:y,finalValue:v?[]:null,onChange:w}),L=(0,m.y)({name:"Accordion",classes:E,props:n,className:a,style:s,classNames:t,styles:l,unstyled:h,vars:p,varsResolver:z});return o.createElement(f,{value:{isItemActive:e=>Array.isArray(F)?F.includes(e):e===F,onChange:e=>{let n=Array.isArray(F)?F.includes(e)?F.filter(n=>n!==e):[...F,e]:e===F?null:e;U(n)},getControlId:(0,c.A)(`${$}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:(0,c.A)(`${$}-panel`,"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:C,disableChevronRotation:S,chevronPosition:M,order:k,chevron:P,loop:x,getStyles:L,variant:B,unstyled:h}},o.createElement(u.x,{...L("root"),id:$,...H,variant:B,"data-accordion":!0},g))}B.extend=e=>e,B.classes=E,B.displayName="@mantine/core/Accordion",B.Item=M,B.Panel=P,B.Control=C,B.Chevron=g.Q},4184:function(e,n,t){t.d(n,{U:function(){return g}});var o=t(27378),i=t(82269),r=t(2256),a=t(96739),c=t(48649),s=t(56589),l=t(20410),d=t(31542),m=t(82591),u=t(72840);function h(e){return e?.current?e.current.scrollHeight:"auto"}let f="undefined"!=typeof window&&window.requestAnimationFrame,p={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},g=(0,l.d)((e,n)=>{let{children:t,in:l,transitionDuration:g,transitionTimingFunction:v,style:b,onTransitionEnd:y,animateOpacity:w,...A}=(0,a.w)("Collapse",p,e),E=(0,r.rZ)(),x=(0,i.J)(),C=!!E.respectReducedMotion&&x,S=C?0:g,M=function({transitionDuration:e,transitionTimingFunction:n="ease",onTransitionEnd:t=()=>{},opened:i}){let r=(0,o.useRef)(null),a={display:"none",height:0,overflow:"hidden"},[c,s]=(0,o.useState)(i?{}:a),l=e=>{(0,d.flushSync)(()=>s(e))},p=e=>{l(n=>({...n,...e}))};function g(t){let o=e||function(e){if(!e||"string"==typeof e)return 0;let n=e/36;return Math.round((4+15*n**.25+n/5)*10)}(t);return{transition:`height ${o}ms ${n}, opacity ${o}ms ${n}`}}(0,m.l)(()=>{"function"==typeof f&&(i?f(()=>{p({willChange:"height",display:"block",overflow:"hidden"}),f(()=>{let e=h(r);p({...g(e),height:e})})}):f(()=>{let e=h(r);p({...g(e),willChange:"height",height:e}),f(()=>p({height:0,overflow:"hidden"}))}))},[i]);let v=e=>{if(e.target===r.current&&"height"===e.propertyName){if(i){let e=h(r);e===c.height?l({}):p({height:e}),t()}else 0===c.height&&(l(a),t())}};return function({style:e={},refKey:n="ref",...t}={}){let o=t[n];return{"aria-hidden":!i,...t,[n]:(0,u.lq)(r,o),onTransitionEnd:v,style:{boxSizing:"border-box",...e,...c}}}}({opened:l,transitionDuration:S,transitionTimingFunction:v,onTransitionEnd:y});return 0===S?l?o.createElement(s.x,{...A},t):null:o.createElement(s.x,{...M({style:{opacity:l||!w?1:0,transition:w?`opacity ${S}ms ${v}`:"none",...(0,c.c)(b,E)},ref:n,...A})},t)});g.displayName="@mantine/core/Collapse"}}]);