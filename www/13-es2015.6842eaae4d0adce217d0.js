(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{HwoN:function(n,l,t){"use strict";t.r(l);var r=t("8Y7J"),o=t("Yrap"),u=t("llfe"),e=t("esXn"),a=t("ZZ/e");class i{constructor(n,l,t,r,o,u){this.brandService=n,this.favouriteService=l,this.toastController=t,this.route=r,this.cartService=o,this.navController=u,this.brand={id:this.route.snapshot.params.id,name:"Loading...",image:"",favourited:!1,products:[]},this.getBrand(),this.cart=[],this.cartService.getCart().subscribe(n=>{this.cart=n})}ngOnInit(){}getBrand(){this.loading=!0,this.brandService.getBrand(this.brand.id).then(n=>{console.log(n),this.brand=n,this.loading=!1}).catch(()=>{this.loading=!1})}toggleFavourite(){this.brand.favourited?(this.brand.favourited=!1,this.brand.favourite&&this.favouriteService.deleteFavourite(this.brand.favourite.id).then(n=>{this.toastController.create({message:this.brand.name+" has been removed from your favourites",duration:2e3}).then(n=>{n.present()}),this.favouriteService.favouritesChanged(this.brand.favourite.id)})):(this.brand.favourited=!0,this.favouriteService.createFavourite({brand_id:this.brand.id}).then(n=>{this.brand.favourite=n,this.toastController.create({message:this.brand.name+" has been added to your favourites",duration:2e3}).then(n=>{n.present()}),this.favouriteService.favouritesChanged(this.brand.favourite.id)}))}addToCart(n,l){n.preventDefault(),n.stopPropagation(),this.cartService.addToCart(l),this.toastController.create({message:l.name+" has been added to your cart",duration:2e3,buttons:[{side:"end",text:"View Cart",handler:()=>{this.navController.navigateForward(["cart"])}}]}).then(n=>{n.present()})}}class c{}var b=t("pMnS"),d=t("oBZk"),s=t("iInd"),_=t("SVse"),g=r.pb({encapsulation:0,styles:[['.transparent-header[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%}.transparent-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--ion-color-base:rgba(0, 0, 0, 0)!important}.transparent-header[_ngcontent-%COMP%]:after{background:0 0}.transparent-header[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{position:absolute;top:5px;right:8px;opacity:.9;font-size:8px;width:15px;height:15px;border-radius:7.5px}.brand[_ngcontent-%COMP%]   .brand__header[_ngcontent-%COMP%]{position:relative;padding-top:180px;padding-bottom:30px;color:#fff;background-color:#000;background-size:cover;background-position:center center;background-repeat:no-repeat}.brand[_ngcontent-%COMP%]   .brand__header[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);background:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.65)),to(rgba(0,0,0,0)));background:linear-gradient(0deg,rgba(0,0,0,.65) 0,rgba(0,0,0,0) 100%)}.brand[_ngcontent-%COMP%]   .brand__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;padding:0 50px;color:#fff;position:relative;font-size:30px;font-weight:400}.brand[_ngcontent-%COMP%]   .brand__header[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{position:absolute;right:20px;bottom:-20px;z-index:1}.brand[_ngcontent-%COMP%]   .brand__loading[_ngcontent-%COMP%]{text-align:center;margin-top:60px}.brand[_ngcontent-%COMP%]   .brand__description[_ngcontent-%COMP%]{padding:0 10px}.brand[_ngcontent-%COMP%]   .brand__products[_ngcontent-%COMP%]   .brand__products__card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{display:-webkit-box;display:flex;padding:0}.brand[_ngcontent-%COMP%]   .brand__products[_ngcontent-%COMP%]   .brand__products__card[_ngcontent-%COMP%]   .brand__products__card__image[_ngcontent-%COMP%]{width:100px;height:auto;min-height:150px;display:inline-block;background-size:cover;background-position:center center;background-repeat:no-repeat}.brand[_ngcontent-%COMP%]   .brand__products[_ngcontent-%COMP%]   .brand__products__card[_ngcontent-%COMP%]   .brand__products__card__content[_ngcontent-%COMP%]{display:inline-block;-webkit-box-flex:1;flex:1}.brand[_ngcontent-%COMP%]   .brand__products[_ngcontent-%COMP%]   .brand__products__card[_ngcontent-%COMP%]   .brand__products__card__content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;color:#000;padding:10px 16px 5px}.brand[_ngcontent-%COMP%]   .brand__products[_ngcontent-%COMP%]   .brand__products__card[_ngcontent-%COMP%]   .brand__products__card__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0 16px}.brand[_ngcontent-%COMP%]   .brand__products[_ngcontent-%COMP%]   .brand__products__card[_ngcontent-%COMP%]   .brand__products__card__content[_ngcontent-%COMP%]   .brand__products__card__content__actions[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.05);margin-top:10px;padding-top:10px}']],data:{}});function p(n){return r.Jb(0,[(n()(),r.rb(0,0,null,null,2,"ion-badge",[["color","dark"]],null,null,null,d.Q,d.d)),r.qb(1,49152,null,0,a.i,[r.h,r.k,r.x],{color:[0,"color"]},null),(n()(),r.Ib(2,0,["",""]))],(function(n,l){n(l,1,0,"dark")}),(function(n,l){n(l,2,0,l.component.cart.length)}))}function h(n){return r.Jb(0,[(n()(),r.rb(0,0,null,null,3,"ion-fab-button",[["color","primary"]],null,[[null,"click"]],(function(n,l,t){var r=!0;return"click"===l&&(r=!1!==n.component.toggleFavourite()&&r),r}),d.ab,d.o)),r.qb(1,49152,null,0,a.w,[r.h,r.k,r.x],{color:[0,"color"]},null),(n()(),r.rb(2,0,null,0,1,"ion-icon",[],null,null,null,d.fb,d.s)),r.qb(3,49152,null,0,a.B,[r.h,r.k,r.x],{name:[0,"name"]},null)],(function(n,l){var t=l.component;n(l,1,0,"primary"),n(l,3,0,t.brand.favourited?"heart":"heart-empty")}),null)}function f(n){return r.Jb(0,[(n()(),r.rb(0,0,null,null,2,"div",[["class","brand__loading"]],null,null,null,null,null)),(n()(),r.rb(1,0,null,null,1,"ion-spinner",[],null,null,null,d.wb,d.J)),r.qb(2,49152,null,0,a.rb,[r.h,r.k,r.x],null,null)],null,null)}function k(n){return r.Jb(0,[(n()(),r.rb(0,0,null,null,2,"div",[["class","brand__description"]],null,null,null,null,null)),(n()(),r.rb(1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),r.Ib(2,null,["",""]))],null,(function(n,l){n(l,2,0,l.component.brand.description)}))}function C(n){return r.Jb(0,[(n()(),r.rb(0,0,null,null,25,"ion-card",[["class","brand__products__card"],["routerDirection","forward"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==r.Cb(n,2).onClick()&&o),"click"===l&&(o=!1!==r.Cb(n,4).onClick(t)&&o),o}),d.X,d.g)),r.qb(1,49152,null,0,a.l,[r.h,r.k,r.x],{routerDirection:[0,"routerDirection"]},null),r.qb(2,16384,null,0,s.o,[s.n,s.a,[8,null],r.B,r.k],{routerLink:[0,"routerLink"]},null),r.Db(3,1),r.qb(4,737280,null,0,a.Lb,[_.g,a.Hb,r.k,s.n,[2,s.o]],{routerDirection:[0,"routerDirection"]},null),(n()(),r.rb(5,0,null,0,20,"ion-card-content",[],null,null,null,d.T,d.h)),r.qb(6,49152,null,0,a.m,[r.h,r.k,r.x],null,null),(n()(),r.rb(7,0,null,0,3,"div",[["class","brand__products__card__image"]],null,null,null,null,null)),r.Fb(512,null,_.q,_.r,[r.k,r.r,r.B]),r.qb(9,278528,null,0,_.l,[_.q],{ngStyle:[0,"ngStyle"]},null),r.Eb(10,{"background-image":0}),(n()(),r.rb(11,0,null,0,14,"div",[["class","brand__products__card__content"]],null,null,null,null,null)),(n()(),r.rb(12,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),r.Ib(13,null,[""," - $",""])),(n()(),r.rb(14,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),r.Ib(15,null,["",""])),(n()(),r.rb(16,0,null,null,9,"div",[["class","brand__products__card__content__actions"]],null,null,null,null,null)),(n()(),r.rb(17,0,null,null,5,"ion-button",[["color","dark"],["fill","clear"],["routerDirection","forward"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==r.Cb(n,19).onClick()&&o),"click"===l&&(o=!1!==r.Cb(n,21).onClick(t)&&o),o}),d.R,d.e)),r.qb(18,49152,null,0,a.j,[r.h,r.k,r.x],{color:[0,"color"],fill:[1,"fill"],routerDirection:[2,"routerDirection"]},null),r.qb(19,16384,null,0,s.o,[s.n,s.a,[8,null],r.B,r.k],{routerLink:[0,"routerLink"]},null),r.Db(20,1),r.qb(21,737280,null,0,a.Lb,[_.g,a.Hb,r.k,s.n,[2,s.o]],{routerDirection:[0,"routerDirection"]},null),(n()(),r.Ib(-1,0,[" Details "])),(n()(),r.rb(23,0,null,null,2,"ion-button",[["color","primary"],["fill","clear"]],null,[[null,"click"]],(function(n,l,t){var r=!0;return"click"===l&&(r=!1!==n.component.addToCart(t,n.context.$implicit)&&r),r}),d.R,d.e)),r.qb(24,49152,null,0,a.j,[r.h,r.k,r.x],{color:[0,"color"],fill:[1,"fill"]},null),(n()(),r.Ib(-1,0,[" Add To Cart "]))],(function(n,l){n(l,1,0,"forward");var t=n(l,3,0,"/product/"+l.context.$implicit.id);n(l,2,0,t),n(l,4,0,"forward");var r=n(l,10,0,"url("+l.context.$implicit.image+")");n(l,9,0,r),n(l,18,0,"dark","clear","forward");var o=n(l,20,0,"/product/"+l.context.$implicit.id);n(l,19,0,o),n(l,21,0,"forward"),n(l,24,0,"primary","clear")}),(function(n,l){n(l,13,0,l.context.$implicit.name,l.context.$implicit.price),n(l,15,0,l.context.$implicit.description)}))}function v(n){return r.Jb(0,[(n()(),r.rb(0,0,null,null,23,"ion-header",[["class","transparent-header"]],null,null,null,d.eb,d.r)),r.qb(1,49152,null,0,a.A,[r.h,r.k,r.x],null,null),(n()(),r.rb(2,0,null,0,21,"ion-toolbar",[["color","primary"]],null,null,null,d.zb,d.M)),r.qb(3,49152,null,0,a.Bb,[r.h,r.k,r.x],{color:[0,"color"]},null),(n()(),r.rb(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,d.S,d.f)),r.qb(5,49152,null,0,a.k,[r.h,r.k,r.x],null,null),(n()(),r.rb(6,0,null,0,4,"ion-button",[],null,null,null,d.R,d.e)),r.qb(7,49152,null,0,a.j,[r.h,r.k,r.x],null,null),(n()(),r.rb(8,0,null,0,2,"ion-back-button",[["defaultHref","/home"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==r.Cb(n,10).onClick(t)&&o),o}),d.P,d.c)),r.qb(9,49152,null,0,a.f,[r.h,r.k,r.x],{defaultHref:[0,"defaultHref"]},null),r.qb(10,16384,null,0,a.g,[[2,a.hb],a.Hb],{defaultHref:[0,"defaultHref"]},null),(n()(),r.rb(11,0,null,0,1,"ion-title",[],null,null,null,d.yb,d.L)),r.qb(12,49152,null,0,a.zb,[r.h,r.k,r.x],null,null),(n()(),r.rb(13,0,null,0,10,"ion-buttons",[["slot","end"]],null,null,null,d.S,d.f)),r.qb(14,49152,null,0,a.k,[r.h,r.k,r.x],null,null),(n()(),r.rb(15,0,null,0,8,"ion-button",[["routerDirection","forward"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==r.Cb(n,17).onClick()&&o),"click"===l&&(o=!1!==r.Cb(n,19).onClick(t)&&o),o}),d.R,d.e)),r.qb(16,49152,null,0,a.j,[r.h,r.k,r.x],{routerDirection:[0,"routerDirection"]},null),r.qb(17,16384,null,0,s.o,[s.n,s.a,[8,null],r.B,r.k],{routerLink:[0,"routerLink"]},null),r.Db(18,1),r.qb(19,737280,null,0,a.Lb,[_.g,a.Hb,r.k,s.n,[2,s.o]],{routerDirection:[0,"routerDirection"]},null),(n()(),r.rb(20,0,null,0,1,"ion-icon",[["name","cart"],["slot","icon-only"]],null,null,null,d.fb,d.s)),r.qb(21,49152,null,0,a.B,[r.h,r.k,r.x],{name:[0,"name"]},null),(n()(),r.gb(16777216,null,0,1,null,p)),r.qb(23,16384,null,0,_.i,[r.M,r.J],{ngIf:[0,"ngIf"]},null),(n()(),r.rb(24,0,null,null,16,"ion-content",[["class","brand"]],null,null,null,d.Z,d.m)),r.qb(25,49152,null,0,a.t,[r.h,r.k,r.x],null,null),(n()(),r.rb(26,0,null,0,7,"div",[["class","brand__header"]],null,null,null,null,null)),r.Fb(512,null,_.q,_.r,[r.k,r.r,r.B]),r.qb(28,278528,null,0,_.l,[_.q],{ngStyle:[0,"ngStyle"]},null),r.Eb(29,{"background-image":0}),(n()(),r.rb(30,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),r.Ib(31,null,["",""])),(n()(),r.gb(16777216,null,null,1,null,h)),r.qb(33,16384,null,0,_.i,[r.M,r.J],{ngIf:[0,"ngIf"]},null),(n()(),r.gb(16777216,null,0,1,null,f)),r.qb(35,16384,null,0,_.i,[r.M,r.J],{ngIf:[0,"ngIf"]},null),(n()(),r.gb(16777216,null,0,1,null,k)),r.qb(37,16384,null,0,_.i,[r.M,r.J],{ngIf:[0,"ngIf"]},null),(n()(),r.rb(38,0,null,0,2,"div",[["class","brand__products"]],null,null,null,null,null)),(n()(),r.gb(16777216,null,null,1,null,C)),r.qb(40,278528,null,0,_.h,[r.M,r.J,r.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,3,0,"primary"),n(l,9,0,"/home"),n(l,10,0,"/home"),n(l,16,0,"forward");var r=n(l,18,0,"/cart");n(l,17,0,r),n(l,19,0,"forward"),n(l,21,0,"cart"),n(l,23,0,t.cart.length>0);var o=n(l,29,0,"url("+t.brand.image+")");n(l,28,0,o),n(l,33,0,!t.loading),n(l,35,0,t.loading),n(l,37,0,t.brand.description),n(l,40,0,t.brand.products)}),(function(n,l){n(l,31,0,l.component.brand.name)}))}function m(n){return r.Jb(0,[(n()(),r.rb(0,0,null,null,1,"app-brand",[],null,null,null,v,g)),r.qb(1,114688,null,0,i,[o.a,u.a,a.Ob,s.a,e.a,a.Hb],null,null)],(function(n,l){n(l,1,0)}),null)}var x=r.nb("app-brand",i,m,{},{},[]),M=t("s7LF");t.d(l,"BrandPageModuleNgFactory",(function(){return O}));var O=r.ob(c,[],(function(n){return r.zb([r.Ab(512,r.j,r.Z,[[8,[b.a,x]],[3,r.j],r.v]),r.Ab(4608,_.k,_.j,[r.s,[2,_.t]]),r.Ab(4608,M.j,M.j,[]),r.Ab(4608,a.b,a.b,[r.x,r.g]),r.Ab(4608,a.Gb,a.Gb,[a.b,r.j,r.p]),r.Ab(4608,a.Kb,a.Kb,[a.b,r.j,r.p]),r.Ab(1073742336,_.b,_.b,[]),r.Ab(1073742336,M.i,M.i,[]),r.Ab(1073742336,M.b,M.b,[]),r.Ab(1073742336,a.Db,a.Db,[]),r.Ab(1073742336,s.q,s.q,[[2,s.v],[2,s.n]]),r.Ab(1073742336,c,c,[]),r.Ab(1024,s.l,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);