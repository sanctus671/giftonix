(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{l43a:function(e,t,o){"use strict";o.r(t),o.d(t,"iosTransitionAnimation",(function(){return d})),o.d(t,"shadow",(function(){return s})),o("HWnG");var a=o("Vyxq");const r=(e,t="top")=>`calc(${e}px + var(--ion-safe-area-${t}))`,n=e=>document.querySelector(`${e}.ion-cloned-element`),s=e=>e.shadowRoot||e,l=e=>e.querySelector("ion-header:not(.header-collapse-condense-inactive) ion-title[size=large]"),c=(e,t)=>{const o=e.querySelectorAll("ion-buttons");for(const a of o){const e=a.closest("ion-header"),o=e&&!e.classList.contains("header-collapse-condense-inactive"),r=a.querySelector("ion-back-button"),n=a.classList.contains("buttons-collapse");if(null!==r&&(n&&o&&t||!n))return r}return null},i=(e,t,o,s)=>{const l=s.getBoundingClientRect(),c=t?`calc(100% - ${l.right+4}px)`:`${l.left-4}px`,i=t?"7px":"-7px",f=t?"-4px":"4px",d=t?"-4px":"4px",m=t?"right":"left",y=t?"left":"right",p=[{offset:0,opacity:0,transform:`translate(${i}, ${r(8)}) scale(2.1)`},{offset:1,opacity:1,transform:`translate(${f}, ${r(-40)}) scale(1)`}],b=[{offset:0,opacity:1,transform:`translate(${f}, ${r(-40)}) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate(${i}, ${r(8)}) scale(2.1)`}],u=o?b:p,$=[{offset:0,opacity:0,transform:`translate3d(${d}, ${r(-35)}, 0) scale(0.6)`},{offset:1,opacity:1,transform:`translate3d(${d}, ${r(-40)}, 0) scale(1)`}],S=[{offset:0,opacity:1,transform:`translate(${d}, ${r(-40)}) scale(1)`},{offset:.2,opacity:0,transform:`translate(${d}, ${r(-35)}) scale(0.6)`},{offset:1,opacity:0,transform:`translate(${d}, ${r(-35)}) scale(0.6)`}],T=o?S:$,h=Object(a.a)(),E=Object(a.a)(),g=n("ion-back-button"),q=g.querySelector(".button-text"),X=g.querySelector("ion-icon");g.text=s.text,g.mode=s.mode,g.icon=s.icon,g.color=s.color,g.disabled=s.disabled,g.style.setProperty("display","block"),g.style.setProperty("position","fixed"),E.addElement(X),h.addElement(q),h.beforeStyles({"transform-origin":`${m} center`}).beforeAddWrite(()=>{s.style.setProperty("display","none"),g.style.setProperty(m,c)}).afterAddWrite(()=>{s.style.setProperty("display",""),g.style.setProperty("display","none"),g.style.removeProperty(m)}).keyframes(u),E.beforeStyles({"transform-origin":`${y} center`}).keyframes(T),e.addAnimation([h,E])},f=(e,t,o,s)=>{const l=s.getBoundingClientRect(),c=t?`calc(100% - ${l.right}px)`:`${l.left}px`,i=t?"-18px":"18px",f=t?"right":"left",d=[{offset:0,opacity:0,transform:`translate(${i}, ${r(0)}) scale(0.49)`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate(0, ${r(49)}) scale(1)`}],m=[{offset:0,opacity:.99,transform:`translate(0, ${r(49)}) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate(${i}, ${r(0)}) scale(0.5)`}],y=o?d:m,p=n("ion-title"),b=Object(a.a)();p.innerText=s.innerText,p.size=s.size,p.color=s.color,b.addElement(p),b.beforeStyles({"transform-origin":`${f} center`,height:"46px",display:"",position:"relative",[f]:c}).beforeAddWrite(()=>{s.style.setProperty("display","none")}).afterAddWrite(()=>{s.style.setProperty("display",""),p.style.setProperty("display","none")}).keyframes(y),e.addAnimation(b)},d=(e,t)=>{try{const o="cubic-bezier(0.32,0.72,0,1)",r="opacity",n="transform",d="0%",m=.8,y="rtl"===e.ownerDocument.dir,p=y?"-99.5%":"99.5%",b=y?"33%":"-33%",u=t.enteringEl,$=t.leavingEl,S="back"===t.direction,T=u.querySelector(":scope > ion-content"),h=u.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),E=u.querySelectorAll(":scope > ion-header > ion-toolbar"),g=Object(a.a)(),q=Object(a.a)();if(g.addElement(u).duration(t.duration||540).easing(t.easing||o).fill("both").beforeRemoveClass("ion-page-invisible"),$&&e){const t=Object(a.a)();t.addElement(e),g.addAnimation(t)}if(T||0!==E.length||0!==h.length?(q.addElement(T),q.addElement(h)):q.addElement(u.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),g.addAnimation(q),S?q.beforeClearStyles([r]).fromTo("transform",`translateX(${b})`,`translateX(${d})`).fromTo(r,m,1):q.beforeClearStyles([r]).fromTo("transform",`translateX(${p})`,`translateX(${d})`),T){const e=s(T).querySelector(".transition-effect");if(e){const t=e.querySelector(".transition-cover"),o=e.querySelector(".transition-shadow"),n=Object(a.a)(),s=Object(a.a)(),l=Object(a.a)();n.addElement(e).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),s.addElement(t).beforeClearStyles([r]).fromTo(r,0,.1),l.addElement(o).beforeClearStyles([r]).fromTo(r,.03,.7),n.addAnimation([s,l]),q.addAnimation([n])}}const X=u.querySelector("ion-header.header-collapse-condense"),{forward:A,backward:j}=((e,t,o,a,r)=>{const n=c(a,o),s=l(r),d=l(a),m=c(r,o),y=null!==n&&null!==s&&!o,p=null!==d&&null!==m&&o;return y?(f(e,t,o,s),i(e,t,o,n)):p&&(f(e,t,o,d),i(e,t,o,m)),{forward:y,backward:p}})(g,y,S,u,$);if(E.forEach(e=>{const t=Object(a.a)();t.addElement(e),g.addAnimation(t);const o=Object(a.a)();o.addElement(e.querySelector("ion-title"));const n=Object(a.a)(),l=Array.from(e.querySelectorAll("ion-buttons,[menuToggle]")),c=e.closest("ion-header"),i=c&&c.classList.contains("header-collapse-condense-inactive");let f;f=l.filter(S?e=>{const t=e.classList.contains("buttons-collapse");return t&&!i||!t}:e=>!e.classList.contains("buttons-collapse")),n.addElement(f);const m=Object(a.a)();m.addElement(e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const u=Object(a.a)();u.addElement(s(e).querySelector(".toolbar-background"));const $=Object(a.a)(),T=e.querySelector("ion-back-button");if(T&&$.addElement(T),t.addAnimation([o,n,m,u,$]),n.fromTo(r,.01,1),m.fromTo(r,.01,1),S)i||o.fromTo("transform",`translateX(${b})`,`translateX(${d})`).fromTo(r,.01,1),m.fromTo("transform",`translateX(${b})`,`translateX(${d})`),$.fromTo(r,.01,1);else if(X||o.fromTo("transform",`translateX(${p})`,`translateX(${d})`).fromTo(r,.01,1),m.fromTo("transform",`translateX(${p})`,`translateX(${d})`),u.beforeClearStyles([r]).fromTo(r,.01,1),A||$.fromTo(r,.01,1),T&&!A){const e=Object(a.a)();e.addElement(s(T).querySelector(".button-text")).fromTo("transform",y?"translateX(-100px)":"translateX(100px)","translateX(0px)"),t.addAnimation(e)}}),$){const e=Object(a.a)(),t=$.querySelector(":scope > ion-content");if(e.addElement(t),e.addElement($.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),g.addAnimation(e),S?e.beforeClearStyles([r]).fromTo("transform",`translateX(${d})`,y?"translateX(-100%)":"translateX(100%)"):e.fromTo("transform",`translateX(${d})`,`translateX(${b})`).fromTo(r,1,m),t){const o=s(t).querySelector(".transition-effect");if(o){const t=o.querySelector(".transition-cover"),n=o.querySelector(".transition-shadow"),s=Object(a.a)(),l=Object(a.a)(),c=Object(a.a)();s.addElement(o).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),l.addElement(t).beforeClearStyles([r]).fromTo(r,.1,0),c.addElement(n).beforeClearStyles([r]).fromTo(r,.7,.03),s.addAnimation([l,c]),e.addAnimation([s])}}$.querySelectorAll(":scope > ion-header > ion-toolbar").forEach(e=>{const t=Object(a.a)();t.addElement(e);const o=Object(a.a)();o.addElement(e.querySelector("ion-title"));const l=Object(a.a)(),c=e.querySelectorAll("ion-buttons,[menuToggle]"),i=e.closest("ion-header"),f=i&&i.classList.contains("header-collapse-condense-inactive"),m=Array.from(c).filter(e=>{const t=e.classList.contains("buttons-collapse");return t&&!f||!t});l.addElement(m);const p=Object(a.a)(),u=e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");u.length>0&&p.addElement(u);const $=Object(a.a)();$.addElement(s(e).querySelector(".toolbar-background"));const T=Object(a.a)(),h=e.querySelector("ion-back-button");if(h&&T.addElement(h),t.addAnimation([o,l,p,T,$]),g.addAnimation(t),T.fromTo(r,.99,0),l.fromTo(r,.99,0),p.fromTo(r,.99,0),S){if(f||o.fromTo("transform",`translateX(${d})`,y?"translateX(-100%)":"translateX(100%)").fromTo(r,.99,0),p.fromTo("transform",`translateX(${d})`,y?"translateX(-100%)":"translateX(100%)"),$.beforeClearStyles([r]).fromTo(r,1,.01),h&&!j){const e=Object(a.a)();e.addElement(s(h).querySelector(".button-text")).fromTo("transform",`translateX(${d})`,`translateX(${(y?-124:124)+"px"})`),t.addAnimation(e)}}else f||o.fromTo("transform",`translateX(${d})`,`translateX(${b})`).fromTo(r,.99,0).afterClearStyles([n,r]),p.fromTo("transform",`translateX(${d})`,`translateX(${b})`).afterClearStyles([n,r]),T.afterClearStyles([r]),o.afterClearStyles([r]),l.afterClearStyles([r])})}return g}catch(o){throw o}}}}]);