(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{ypEY:function(n,t,l){"use strict";l.r(t);var o=l("CcnG"),u=l("AytR"),r=l("t/Na"),e=l("iw74"),i=function(){function n(n,t){this.http=n,this.storage=t}return n.prototype.getProduct=function(n){var t=this;return new Promise((function(l,o){t.storage.get("gx_token").then((function(r){r?t.http.get(u.a.apiUrl+"/products/"+n+"?token="+r).subscribe((function(n){l(n)}),(function(n){o(n)})):o()}))}))},n.ngInjectableDef=o.Ob({factory:function(){return new n(o.Pb(r.c),o.Pb(e.b))},token:n,providedIn:"root"}),n}(),c=l("llfe"),a=l("esXn"),b=l("ZZ/e"),d=function(){function n(n,t,l,o,u,r){this.productService=n,this.favouriteService=t,this.toastController=l,this.route=o,this.cartService=u,this.navController=r,this.product={id:this.route.snapshot.params.id,name:"Loading...",description:"",image:"",price:"",favourited:!1,brand:{}},this.getProduct()}return n.prototype.ngOnInit=function(){},n.prototype.getProduct=function(){var n=this;this.loading=!0,this.productService.getProduct(this.product.id).then((function(t){console.log(t),n.product=t,n.loading=!1})).catch((function(){n.loading=!1}))},n.prototype.toggleFavourite=function(){var n=this;this.product.favourited?(this.product.favourited=!1,this.product.favourite&&this.favouriteService.deleteFavourite(this.product.favourite.id).then((function(t){n.toastController.create({message:n.product.name+" has been removed from your favourites",duration:2e3}).then((function(n){n.present()})),n.favouriteService.favouritesChanged(n.product.favourite.id)}))):(this.product.favourited=!0,this.favouriteService.createFavourite({product_id:this.product.id}).then((function(t){n.product.favourite=t,n.toastController.create({message:n.product.name+" has been added to your favourites",duration:2e3}).then((function(n){n.present()})),n.favouriteService.favouritesChanged(n.product.favourite.id)})))},n.prototype.addToCart=function(){var n=this;this.cartService.addToCart(this.product),this.toastController.create({message:this.product.name+" has been added to your cart",duration:2e3,buttons:[{side:"end",text:"View Cart",handler:function(){n.navController.navigateForward(["cart"])}}]}).then((function(n){n.present()}))},n}(),p=function(){return function(){}}(),s=l("pMnS"),f=l("oBZk"),g=l("ZYCi"),h=l("Ip0R"),v=o.rb({encapsulation:0,styles:[['.transparent-header[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%}.transparent-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--ion-color-base:rgba(0, 0, 0, 0)!important}.transparent-header[_ngcontent-%COMP%]:after{background:0 0}.product[_ngcontent-%COMP%]   .product__header[_ngcontent-%COMP%]{position:relative;padding-top:180px;padding-bottom:30px;background-color:#000;background-size:cover;background-position:center center;background-repeat:no-repeat}.product[_ngcontent-%COMP%]   .product__header[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);background:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,0)),to(rgba(0,0,0,.65)));background:linear-gradient(0deg,rgba(0,0,0,0) 0,rgba(0,0,0,.65) 100%)}.product[_ngcontent-%COMP%]   .product__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;padding:0 30px;color:#fff;position:relative;font-size:30px;font-weight:400}.product[_ngcontent-%COMP%]   .product__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;padding:0 30px;color:#fff;position:relative;font-size:24px;line-height:36px;font-weight:400;float:right;opacity:.9}.product[_ngcontent-%COMP%]   .product__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:0 30px;position:relative;color:#fff;opacity:.8}.product[_ngcontent-%COMP%]   .product__description[_ngcontent-%COMP%]{padding:0 30px}.product[_ngcontent-%COMP%]   .product__description[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12px;opacity:.4;margin-bottom:5px}.product[_ngcontent-%COMP%]   .product__description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}']],data:{}});function C(n){return o.Lb(0,[(n()(),o.tb(0,0,null,null,3,"ion-button",[],null,[[null,"click"]],(function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.toggleFavourite()&&o),o}),f.R,f.e)),o.sb(1,49152,null,0,b.j,[o.h,o.k,o.z],null,null),(n()(),o.tb(2,0,null,0,1,"ion-icon",[["slot","icon-only"]],null,null,null,f.fb,f.s)),o.sb(3,49152,null,0,b.B,[o.h,o.k,o.z],{name:[0,"name"]},null)],(function(n,t){n(t,3,0,t.component.product.favourited?"heart":"heart-empty")}),null)}function m(n){return o.Lb(0,[(n()(),o.tb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),o.Kb(1,null,["$",""]))],null,(function(n,t){n(t,1,0,t.component.product.price)}))}function k(n){return o.Lb(0,[(n()(),o.tb(0,0,null,null,4,"p",[["routerDirection","forward"]],null,[[null,"click"]],(function(n,t,l){var u=!0;return"click"===t&&(u=!1!==o.Eb(n,1).onClick()&&u),"click"===t&&(u=!1!==o.Eb(n,3).onClick(l)&&u),u}),null,null)),o.sb(1,16384,null,0,g.o,[g.n,g.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.Fb(2,1),o.sb(3,737280,null,0,b.Lb,[h.g,b.Hb,o.k,g.n,[2,g.o]],{routerDirection:[0,"routerDirection"]},null),(n()(),o.Kb(4,null,["",""]))],(function(n,t){var l=n(t,2,0,"/brand/"+t.component.product.brand.id);n(t,1,0,l),n(t,3,0,"forward")}),(function(n,t){n(t,4,0,t.component.product.brand.name)}))}function _(n){return o.Lb(0,[(n()(),o.tb(0,0,null,null,4,"div",[["class","product__description"]],null,null,null,null,null)),(n()(),o.tb(1,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),o.Kb(-1,null,["Description:"])),(n()(),o.tb(3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Kb(4,null,["",""]))],null,(function(n,t){n(t,4,0,t.component.product.description)}))}function P(n){return o.Lb(0,[(n()(),o.tb(0,0,null,null,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,f.bb,f.n)),o.sb(1,49152,null,0,b.v,[o.h,o.k,o.z],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),o.tb(2,0,null,0,3,"ion-fab-button",[["color","primary"]],null,[[null,"click"]],(function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.addToCart()&&o),o}),f.ab,f.o)),o.sb(3,49152,null,0,b.w,[o.h,o.k,o.z],{color:[0,"color"]},null),(n()(),o.tb(4,0,null,0,1,"ion-icon",[["name","cart"]],null,null,null,f.fb,f.s)),o.sb(5,49152,null,0,b.B,[o.h,o.k,o.z],{name:[0,"name"]},null)],(function(n,t){n(t,1,0,"end","bottom"),n(t,3,0,"primary"),n(t,5,0,"cart")}),null)}function O(n){return o.Lb(0,[(n()(),o.tb(0,0,null,null,16,"ion-header",[["class","transparent-header"]],null,null,null,f.eb,f.r)),o.sb(1,49152,null,0,b.A,[o.h,o.k,o.z],null,null),(n()(),o.tb(2,0,null,0,14,"ion-toolbar",[["color","primary"]],null,null,null,f.zb,f.M)),o.sb(3,49152,null,0,b.Bb,[o.h,o.k,o.z],{color:[0,"color"]},null),(n()(),o.tb(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,f.S,f.f)),o.sb(5,49152,null,0,b.k,[o.h,o.k,o.z],null,null),(n()(),o.tb(6,0,null,0,4,"ion-button",[],null,null,null,f.R,f.e)),o.sb(7,49152,null,0,b.j,[o.h,o.k,o.z],null,null),(n()(),o.tb(8,0,null,0,2,"ion-back-button",[["defaultHref","/home"]],null,[[null,"click"]],(function(n,t,l){var u=!0;return"click"===t&&(u=!1!==o.Eb(n,10).onClick(l)&&u),u}),f.P,f.c)),o.sb(9,49152,null,0,b.f,[o.h,o.k,o.z],{defaultHref:[0,"defaultHref"]},null),o.sb(10,16384,null,0,b.g,[[2,b.hb],b.Hb],{defaultHref:[0,"defaultHref"]},null),(n()(),o.tb(11,0,null,0,1,"ion-title",[],null,null,null,f.yb,f.L)),o.sb(12,49152,null,0,b.zb,[o.h,o.k,o.z],null,null),(n()(),o.tb(13,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,f.S,f.f)),o.sb(14,49152,null,0,b.k,[o.h,o.k,o.z],null,null),(n()(),o.ib(16777216,null,0,1,null,C)),o.sb(16,16384,null,0,h.i,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.tb(17,0,null,null,15,"ion-content",[["class","product"]],null,null,null,f.Z,f.m)),o.sb(18,49152,null,0,b.t,[o.h,o.k,o.z],null,null),(n()(),o.tb(19,0,null,0,9,"div",[["class","product__header"]],null,null,null,null,null)),o.Hb(512,null,h.q,h.r,[o.k,o.t,o.D]),o.sb(21,278528,null,0,h.l,[h.q],{ngStyle:[0,"ngStyle"]},null),o.Gb(22,{"background-image":0}),(n()(),o.ib(16777216,null,null,1,null,m)),o.sb(24,16384,null,0,h.i,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.tb(25,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),o.Kb(26,null,["",""])),(n()(),o.ib(16777216,null,null,1,null,k)),o.sb(28,16384,null,0,h.i,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.ib(16777216,null,0,1,null,_)),o.sb(30,16384,null,0,h.i,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.ib(16777216,null,0,1,null,P)),o.sb(32,16384,null,0,h.i,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],(function(n,t){var l=t.component;n(t,3,0,"primary"),n(t,9,0,"/home"),n(t,10,0,"/home"),n(t,16,0,!l.loading);var o=n(t,22,0,"url("+l.product.image+")");n(t,21,0,o),n(t,24,0,!l.loading),n(t,28,0,!l.loading),n(t,30,0,!l.loading),n(t,32,0,!l.loading)}),(function(n,t){n(t,26,0,t.component.product.name)}))}function M(n){return o.Lb(0,[(n()(),o.tb(0,0,null,null,1,"app-product",[],null,null,null,O,v)),o.sb(1,114688,null,0,d,[i,c.a,b.Ob,g.a,a.a,b.Hb],null,null)],(function(n,t){n(t,1,0)}),null)}var y=o.pb("app-product",d,M,{},{},[]),z=l("gIcY");l.d(t,"ProductPageModuleNgFactory",(function(){return w}));var w=o.qb(p,[],(function(n){return o.Bb([o.Cb(512,o.j,o.bb,[[8,[s.a,y]],[3,o.j],o.x]),o.Cb(4608,h.k,h.j,[o.u,[2,h.t]]),o.Cb(4608,z.j,z.j,[]),o.Cb(4608,b.b,b.b,[o.z,o.g]),o.Cb(4608,b.Gb,b.Gb,[b.b,o.j,o.q]),o.Cb(4608,b.Kb,b.Kb,[b.b,o.j,o.q]),o.Cb(1073742336,h.b,h.b,[]),o.Cb(1073742336,z.i,z.i,[]),o.Cb(1073742336,z.b,z.b,[]),o.Cb(1073742336,b.Db,b.Db,[]),o.Cb(1073742336,g.q,g.q,[[2,g.v],[2,g.n]]),o.Cb(1073742336,p,p,[]),o.Cb(1024,g.l,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);