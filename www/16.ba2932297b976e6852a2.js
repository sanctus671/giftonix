(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+wUQ":function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),r=t("mrSG"),o=t("esXn"),c=t("KWTU"),e=t("ZZ/e"),a=t("g/tx"),i=function(){function n(n,l,t,u,r,o){var c=this;this.cartService=n,this.modalController=l,this.alertController=t,this.loadingController=u,this.navController=r,this.orderService=o,this.cart=[],this.cartService.getCart().subscribe((function(n){n&&(c.cart=n)}))}return n.prototype.ngOnInit=function(){},n.prototype.updateQuantity=function(n,l){this.cart[n].quantity+=l,this.cart[n].quantity<1&&this.cart.splice(n,1),this.cartService.setCart(this.cart)},n.prototype.clearCart=function(){var n=this;this.alertController.create({header:"Clear Cart",message:"Are you sure you want to remove everything in your cart?",buttons:[{text:"No",role:"cancel"},{text:"Yes",handler:function(){n.cart=[],n.cartService.setCart(n.cart)}}]}).then((function(n){n.present()}))},n.prototype.getCartTotal=function(){for(var n=0,l=0,t=this.cart;l<t.length;l++){var u=t[l];n+=u.price*u.quantity}return n},n.prototype.placeOrder=function(){var n,l=this;this.loadingController.create({message:"Placing your order. Please wait...",duration:2e4}).then((function(l){n=l,l.present()})),this.orderService.createOrder({order_items:this.cart}).then((function(t){console.log(t),n.dismiss(),l.sendGift(t),l.cart=[],l.cartService.setCart(l.cart),l.navController.back()})).catch((function(){n.dismiss(),l.alertController.create({header:"Error",message:"There was an error making payment.",buttons:[{text:"Dismiss",role:"cancel"}]}).then((function(n){n.present()}))}))},n.prototype.sendGift=function(n){return r.b(this,void 0,void 0,(function(){var l;return r.e(this,(function(t){switch(t.label){case 0:return[4,this.modalController.create({component:a.a,componentProps:{order:Object.assign({},n)}})];case 1:return(l=t.sent()).onDidDismiss().then((function(n){console.log(n)})),[4,l.present()];case 2:return t.sent(),[2]}}))}))},n}(),_=function(){return function(){}}(),b=t("pMnS"),s=t("oBZk"),p=t("ZYCi"),d=t("Ip0R"),g=u.rb({encapsulation:0,styles:[[".cart[_ngcontent-%COMP%]   .cart__empty[_ngcontent-%COMP%]{text-align:center;opacity:.2;padding-top:60px;padding-bottom:60px}.cart[_ngcontent-%COMP%]   .cart__empty[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:60px}.cart[_ngcontent-%COMP%]   .cart__empty[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:5px 0 0;font-size:22px}.cart[_ngcontent-%COMP%]   .cart__products[_ngcontent-%COMP%]   .cart__products__product[_ngcontent-%COMP%]{display:-webkit-box;display:flex;padding:20px 0;border-bottom:1px solid rgba(0,0,0,.1)}.cart[_ngcontent-%COMP%]   .cart__products[_ngcontent-%COMP%]   .cart__products__product[_ngcontent-%COMP%]   .cart__products__product__quantity[_ngcontent-%COMP%]{display:inline-block;text-align:center}.cart[_ngcontent-%COMP%]   .cart__products[_ngcontent-%COMP%]   .cart__products__product[_ngcontent-%COMP%]   .cart__products__product__quantity[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;width:40px;height:40px;border-radius:20px;text-align:center;line-height:38px;border:1px solid #000;opacity:.4;margin:10px 20px}.cart[_ngcontent-%COMP%]   .cart__products[_ngcontent-%COMP%]   .cart__products__product[_ngcontent-%COMP%]   .cart__products__product__details[_ngcontent-%COMP%]{display:inline-block;-webkit-box-flex:1;flex:1;padding:0 10px}.cart[_ngcontent-%COMP%]   .cart__products[_ngcontent-%COMP%]   .cart__products__product[_ngcontent-%COMP%]   .cart__products__product__details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-weight:400}.cart[_ngcontent-%COMP%]   .cart__products[_ngcontent-%COMP%]   .cart__products__product[_ngcontent-%COMP%]   .cart__products__product__details[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:34px 0 0;color:#f25b26}.cart[_ngcontent-%COMP%]   .cart__products[_ngcontent-%COMP%]   .cart__products__product[_ngcontent-%COMP%]   .cart__products__product__details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;opacity:.4;font-size:14px}.cart[_ngcontent-%COMP%]   .cart__products[_ngcontent-%COMP%]   .cart__products__product[_ngcontent-%COMP%]   .cart__products__product__image[_ngcontent-%COMP%]{display:inline-block;width:100px;height:110px;background-size:cover;background-position:center center;background-repeat:no-repeat}.cart[_ngcontent-%COMP%]   .cart__payment[_ngcontent-%COMP%]{display:-webkit-box;display:flex;padding:10px 0;margin-top:20px}.cart[_ngcontent-%COMP%]   .cart__payment[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{background-color:#2e373b;color:#fff;width:24px;height:24px;font-size:24px;border-radius:22px;padding:10px;display:block;margin:0 20px}.cart[_ngcontent-%COMP%]   .cart__payment[_ngcontent-%COMP%]   .cart__payment__details[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}.cart[_ngcontent-%COMP%]   .cart__payment[_ngcontent-%COMP%]   .cart__payment__details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-weight:400;font-size:20px}.cart[_ngcontent-%COMP%]   .cart__payment[_ngcontent-%COMP%]   .cart__payment__details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:3px 0 0;opacity:.4;font-size:14px}.cart[_ngcontent-%COMP%]   .cart__payment[_ngcontent-%COMP%]   .cart__payment__edit[_ngcontent-%COMP%]{background-color:#fff;color:#2e373b}.cart-footer[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-weight:400}.cart-footer[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000;font-size:16px}"]],data:{}});function f(n){return u.Ob(0,[(n()(),u.tb(0,0,null,null,5,"ion-buttons",[["slot","end"]],null,null,null,s.T,s.f)),u.sb(1,49152,null,0,e.k,[u.h,u.k,u.z],null,null),(n()(),u.tb(2,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.clearCart()&&u),u}),s.S,s.e)),u.sb(3,49152,null,0,e.j,[u.h,u.k,u.z],null,null),(n()(),u.tb(4,0,null,0,1,"ion-icon",[["name","trash"],["slot","icon-only"]],null,null,null,s.gb,s.s)),u.sb(5,49152,null,0,e.B,[u.h,u.k,u.z],{name:[0,"name"]},null)],(function(n,l){n(l,5,0,"trash")}),null)}function C(n){return u.Ob(0,[(n()(),u.tb(0,0,null,null,4,"div",[["class","cart__empty"]],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,1,"ion-icon",[["name","cart"]],null,null,null,s.gb,s.s)),u.sb(2,49152,null,0,e.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(n()(),u.tb(3,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Cart empty"]))],(function(n,l){n(l,2,0,"cart")}),null)}function h(n){return u.Ob(0,[(n()(),u.tb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Mb(1,null,["",""]))],null,(function(n,l){n(l,1,0,l.parent.context.$implicit.brand)}))}function m(n){return u.Ob(0,[(n()(),u.tb(0,0,null,null,24,"div",[["class","cart__products__product"]],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,6,"div",[["class","cart__products__product__quantity"]],null,null,null,null,null)),(n()(),u.tb(2,0,null,null,1,"ion-icon",[["name","add"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.updateQuantity(n.context.index,1)&&u),u}),s.gb,s.s)),u.sb(3,49152,null,0,e.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(n()(),u.tb(4,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u.Mb(5,null,["",""])),(n()(),u.tb(6,0,null,null,1,"ion-icon",[["name","remove"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.updateQuantity(n.context.index,-1)&&u),u}),s.gb,s.s)),u.sb(7,49152,null,0,e.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(n()(),u.tb(8,0,null,null,9,"div",[["class","cart__products__product__details"],["routerDirection","forward"]],null,[[null,"click"]],(function(n,l,t){var r=!0;return"click"===l&&(r=!1!==u.Eb(n,9).onClick()&&r),"click"===l&&(r=!1!==u.Eb(n,11).onClick(t)&&r),r}),null,null)),u.sb(9,16384,null,0,p.o,[p.n,p.a,[8,null],u.D,u.k],{routerLink:[0,"routerLink"]},null),u.Fb(10,1),u.sb(11,737280,null,0,e.Lb,[d.h,e.Hb,u.k,p.n,[2,p.o]],{routerDirection:[0,"routerDirection"]},null),(n()(),u.tb(12,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),u.Mb(13,null,["",""])),(n()(),u.ib(16777216,null,null,1,null,h)),u.sb(15,16384,null,0,d.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.tb(16,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),u.Mb(17,null,["$",""])),(n()(),u.tb(18,0,null,null,6,"div",[["class","cart__products__product__image"],["routerDirection","forward"]],null,[[null,"click"]],(function(n,l,t){var r=!0;return"click"===l&&(r=!1!==u.Eb(n,22).onClick()&&r),"click"===l&&(r=!1!==u.Eb(n,24).onClick(t)&&r),r}),null,null)),u.Jb(512,null,d.u,d.v,[u.k,u.t,u.D]),u.sb(20,278528,null,0,d.n,[d.u],{ngStyle:[0,"ngStyle"]},null),u.Hb(21,{"background-image":0}),u.sb(22,16384,null,0,p.o,[p.n,p.a,[8,null],u.D,u.k],{routerLink:[0,"routerLink"]},null),u.Fb(23,1),u.sb(24,737280,null,0,e.Lb,[d.h,e.Hb,u.k,p.n,[2,p.o]],{routerDirection:[0,"routerDirection"]},null)],(function(n,l){n(l,3,0,"add"),n(l,7,0,"remove");var t=n(l,10,0,"/product/"+l.context.$implicit.id);n(l,9,0,t),n(l,11,0,"forward"),n(l,15,0,l.context.$implicit.brand);var u=n(l,21,0,"url("+l.context.$implicit.image+")");n(l,20,0,u);var r=n(l,23,0,"/product/"+l.context.$implicit.id);n(l,22,0,r),n(l,24,0,"forward")}),(function(n,l){n(l,5,0,l.context.$implicit.quantity),n(l,13,0,l.context.$implicit.name),n(l,17,0,l.context.$implicit.price)}))}function O(n){return u.Ob(0,[(n()(),u.tb(0,0,null,null,9,"div",[["class","cart__payment"]],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,1,"ion-icon",[["name","card"]],null,null,null,s.gb,s.s)),u.sb(2,49152,null,0,e.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(n()(),u.tb(3,0,null,null,4,"div",[["class","cart__payment__details"]],null,null,null,null,null)),(n()(),u.tb(4,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Google Pay"])),(n()(),u.tb(6,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Payment Method"])),(n()(),u.tb(8,0,null,null,1,"ion-icon",[["class","cart__payment__edit"],["name","create"]],null,null,null,s.gb,s.s)),u.sb(9,49152,null,0,e.B,[u.h,u.k,u.z],{name:[0,"name"]},null)],(function(n,l){n(l,2,0,"card"),n(l,9,0,"create")}),null)}function M(n){return u.Ob(0,[(n()(),u.tb(0,0,null,null,14,"ion-footer",[["class","cart-footer"]],null,null,null,s.db,s.p)),u.sb(1,49152,null,0,e.y,[u.h,u.k,u.z],null,null),(n()(),u.tb(2,0,null,0,12,"ion-toolbar",[["color","primary"]],null,null,null,s.Bb,s.N)),u.sb(3,49152,null,0,e.Bb,[u.h,u.k,u.z],{color:[0,"color"]},null),(n()(),u.tb(4,0,null,0,5,"ion-title",[],null,null,null,s.Ab,s.M)),u.sb(5,49152,null,0,e.zb,[u.h,u.k,u.z],null,null),(n()(),u.tb(6,0,null,0,1,"span",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Total:"])),(n()(),u.Mb(8,0,[" $",""])),u.Ib(9,2),(n()(),u.tb(10,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,s.T,s.f)),u.sb(11,49152,null,0,e.k,[u.h,u.k,u.z],null,null),(n()(),u.tb(12,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.placeOrder()&&u),u}),s.S,s.e)),u.sb(13,49152,null,0,e.j,[u.h,u.k,u.z],null,null),(n()(),u.Mb(-1,0,[" Place Order "]))],(function(n,l){n(l,3,0,"primary")}),(function(n,l){var t=l.component,r=u.Nb(l,8,0,n(l,9,0,u.Eb(l.parent,0),t.getCartTotal(),"1.0-2"));n(l,8,0,r)}))}function k(n){return u.Ob(0,[u.Gb(0,d.d,[u.u]),(n()(),u.tb(1,0,null,null,15,"ion-header",[],null,null,null,s.fb,s.r)),u.sb(2,49152,null,0,e.A,[u.h,u.k,u.z],null,null),(n()(),u.tb(3,0,null,0,13,"ion-toolbar",[["color","primary"]],null,null,null,s.Bb,s.N)),u.sb(4,49152,null,0,e.Bb,[u.h,u.k,u.z],{color:[0,"color"]},null),(n()(),u.tb(5,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,s.T,s.f)),u.sb(6,49152,null,0,e.k,[u.h,u.k,u.z],null,null),(n()(),u.tb(7,0,null,0,4,"ion-button",[],null,null,null,s.S,s.e)),u.sb(8,49152,null,0,e.j,[u.h,u.k,u.z],null,null),(n()(),u.tb(9,0,null,0,2,"ion-back-button",[["defaultHref","/home"]],null,[[null,"click"]],(function(n,l,t){var r=!0;return"click"===l&&(r=!1!==u.Eb(n,11).onClick(t)&&r),r}),s.Q,s.c)),u.sb(10,49152,null,0,e.f,[u.h,u.k,u.z],{defaultHref:[0,"defaultHref"]},null),u.sb(11,16384,null,0,e.g,[[2,e.hb],e.Hb],{defaultHref:[0,"defaultHref"]},null),(n()(),u.tb(12,0,null,0,2,"ion-title",[],null,null,null,s.Ab,s.M)),u.sb(13,49152,null,0,e.zb,[u.h,u.k,u.z],null,null),(n()(),u.Mb(-1,0,["Your Cart"])),(n()(),u.ib(16777216,null,0,1,null,f)),u.sb(16,16384,null,0,d.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.tb(17,0,null,null,8,"ion-content",[["class","cart"]],null,null,null,s.ab,s.m)),u.sb(18,49152,null,0,e.t,[u.h,u.k,u.z],null,null),(n()(),u.ib(16777216,null,0,1,null,C)),u.sb(20,16384,null,0,d.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.tb(21,0,null,0,2,"div",[["class","cart__products"]],null,null,null,null,null)),(n()(),u.ib(16777216,null,null,1,null,m)),u.sb(23,278528,null,0,d.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(n()(),u.ib(16777216,null,0,1,null,O)),u.sb(25,16384,null,0,d.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.ib(16777216,null,null,1,null,M)),u.sb(27,16384,null,0,d.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,4,0,"primary"),n(l,10,0,"/home"),n(l,11,0,"/home"),n(l,16,0,t.cart.length>0),n(l,20,0,!t.cart||t.cart.length<1),n(l,23,0,t.cart),n(l,25,0,t.cart.length>0&&!1),n(l,27,0,t.cart.length>0)}),null)}function P(n){return u.Ob(0,[(n()(),u.tb(0,0,null,null,1,"app-cart",[],null,null,null,k,g)),u.sb(1,114688,null,0,i,[o.a,e.Gb,e.a,e.Fb,e.Hb,c.a],null,null)],(function(n,l){n(l,1,0)}),null)}var y=u.pb("app-cart",i,P,{},{},[]),x=t("gIcY");t.d(l,"CartPageModuleNgFactory",(function(){return v}));var v=u.qb(_,[],(function(n){return u.Bb([u.Cb(512,u.j,u.bb,[[8,[b.a,y]],[3,u.j],u.x]),u.Cb(4608,d.m,d.l,[u.u,[2,d.x]]),u.Cb(4608,x.j,x.j,[]),u.Cb(4608,e.b,e.b,[u.z,u.g]),u.Cb(4608,e.Gb,e.Gb,[e.b,u.j,u.q]),u.Cb(4608,e.Kb,e.Kb,[e.b,u.j,u.q]),u.Cb(1073742336,d.b,d.b,[]),u.Cb(1073742336,x.i,x.i,[]),u.Cb(1073742336,x.b,x.b,[]),u.Cb(1073742336,e.Db,e.Db,[]),u.Cb(1073742336,p.q,p.q,[[2,p.v],[2,p.n]]),u.Cb(1073742336,_,_,[]),u.Cb(1024,p.l,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);