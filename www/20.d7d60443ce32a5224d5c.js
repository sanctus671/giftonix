(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{FSyz:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=t("mrSG"),o=t("ZZ/e"),r=t("KWTU"),i=t("llfe"),c=t("xX4t"),s=function(){function n(n,l,t,e,u,o){this.orderService=n,this.route=l,this.loadingController=t,this.alertController=e,this.favouriteService=u,this.modalController=o,this.gift={id:this.route.snapshot.params.id,profile:{},order_items:[]},this.loading=!0,this.getGift()}return n.prototype.ngOnInit=function(){},n.prototype.regift=function(){var n=this;this.alertController.create({header:"Re-gift",subHeader:"Send this gift to someone else",message:"Are you sure you want to send this gift to someone else? Once you have done this, you will no longer be able to claim items in this gift.",buttons:[{text:"Cancel",role:"cancel"},{text:"Send",handler:function(){n.orderService.regiftOrder({order_id:n.gift.id}).then((function(l){n.sendGift(),n.favouriteService.favouritesChanged(0)}))}}]}).then((function(n){n.present()}))},n.prototype.sendGift=function(){return u.b(this,void 0,void 0,(function(){var n;return u.e(this,(function(l){switch(l.label){case 0:return[4,this.modalController.create({component:c.a,componentProps:{order:Object.assign({},this.gift)}})];case 1:return(n=l.sent()).onDidDismiss().then((function(n){console.log(n)})),[4,n.present()];case 2:return l.sent(),[2]}}))}))},n.prototype.getGift=function(){var n=this;this.orderService.getOrder(this.gift.id).then((function(l){n.gift=l,n.loading=!1})).catch((function(){n.loading=!1}))},n.prototype.redeem=function(n){var l=this;this.alertController.create({header:"Are You Sure?",message:"You are about to redeem this item. This cannot be undone.",buttons:[{text:"Cancel",role:"cancel"},{text:"Redeem",handler:function(){"pin"===n.product.redemption_method?l.alertController.create({header:"Enter PIN",message:"To claim this item, the store must enter their unique PIN.",inputs:[{name:"pin",type:"text",placeholder:"Store PIN"}],buttons:[{text:"Cancel",role:"cancel"},{text:"Redeem",handler:function(t){t&&t.pin&&l.doRedeem(n,{pin:t.pin})}}]}).then((function(n){n.present()})):l.doRedeem(n,{})}}]}).then((function(n){n.present()}))},n.prototype.doRedeem=function(n,l){var t,e=this;this.loadingController.create({message:"Redeeming...",duration:2e4}).then((function(n){t=n,n.present()})),this.orderService.redeemItem(n.id,l).then((function(){n.status="redeemed",e.getGift(),t.dismiss(),e.favouriteService.favouritesChanged(0)})).catch((function(){t.dismiss(),e.alertController.create({header:"Error",message:"There was an error redeeming this item.",buttons:[{text:"Dismiss",role:"cancel"}]}).then((function(n){n.present()}))}))},n.prototype.redeemOrder=function(){for(var n=this,l=!1,t=0,e=this.gift.order_items;t<e.length;t++)if("pin"===e[t].product.redemption_method){l=!0;break}this.alertController.create({header:"Are You Sure?",message:"You are about to redeem all items in this gift. This cannot be undone.",buttons:[{text:"Cancel",role:"cancel"},{text:"Redeem",handler:function(){l?n.alertController.create({header:"Enter PIN",message:"To claim this order, the store must enter their unique PIN.",inputs:[{name:"pin",type:"text",placeholder:"Store PIN"}],buttons:[{text:"Cancel",role:"cancel"},{text:"Redeem",handler:function(l){l&&l.pin&&n.doRedeemOrder({pin:l.pin})}}]}).then((function(n){n.present()})):n.doRedeemOrder({})}}]}).then((function(n){n.present()}))},n.prototype.doRedeemOrder=function(n){var l,t=this;this.loadingController.create({message:"Redeeming...",duration:2e4}).then((function(n){l=n,n.present()})),this.orderService.redeemOrder(this.gift.id,n).then((function(){l.dismiss(),t.gift.status="redeemed",t.getGift(),t.favouriteService.favouritesChanged(0)})).catch((function(){l.dismiss(),t.alertController.create({header:"Error",message:"There was an error redeeming items.",buttons:[{text:"Dismiss",role:"cancel"}]}).then((function(n){n.present()}))}))},n}(),a=function(){return function(){}}(),d=t("pMnS"),b=t("oBZk"),f=t("ZYCi"),g=t("Ip0R"),p=e.rb({encapsulation:0,styles:[[".gift[_ngcontent-%COMP%]   .gift__loading[_ngcontent-%COMP%]{text-align:center;margin-top:60px}.gift[_ngcontent-%COMP%]   .gift__message[_ngcontent-%COMP%]{text-align:Center}.gift[_ngcontent-%COMP%]   .gift__products[_ngcontent-%COMP%]   .gift__products__card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{display:-webkit-box;display:flex;padding:0}.gift[_ngcontent-%COMP%]   .gift__products[_ngcontent-%COMP%]   .gift__products__card[_ngcontent-%COMP%]   .gift__products__card__image[_ngcontent-%COMP%]{width:100px;height:auto;min-height:150px;display:inline-block;background-size:cover;background-position:center center;background-repeat:no-repeat}.gift[_ngcontent-%COMP%]   .gift__products[_ngcontent-%COMP%]   .gift__products__card[_ngcontent-%COMP%]   .gift__products__card__content[_ngcontent-%COMP%]{display:inline-block;-webkit-box-flex:1;flex:1}.gift[_ngcontent-%COMP%]   .gift__products[_ngcontent-%COMP%]   .gift__products__card[_ngcontent-%COMP%]   .gift__products__card__content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;color:#000;padding:10px 16px 5px}.gift[_ngcontent-%COMP%]   .gift__products[_ngcontent-%COMP%]   .gift__products__card[_ngcontent-%COMP%]   .gift__products__card__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0 16px}.gift[_ngcontent-%COMP%]   .gift__products[_ngcontent-%COMP%]   .gift__products__card[_ngcontent-%COMP%]   .gift__products__card__content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{padding:0 16px;color:#000}.gift[_ngcontent-%COMP%]   .gift__products[_ngcontent-%COMP%]   .gift__products__card[_ngcontent-%COMP%]   .gift__products__card__content[_ngcontent-%COMP%]   .gift__products__card__content__actions[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.05);margin-top:10px;padding-top:10px}"]],data:{}});function _(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,2,"ion-button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.regift()&&e),e}),b.S,b.e)),e.sb(1,49152,null,0,o.j,[e.h,e.k,e.z],null,null),(n()(),e.Mb(-1,0,[" Re-gift "]))],null,null)}function m(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,2,"div",[["class","gift__loading"]],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,1,"ion-spinner",[],null,null,null,b.xb,b.J)),e.sb(2,49152,null,0,o.rb,[e.h,e.k,e.z],null,null)],null,null)}function h(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["s"]))],null,null)}function k(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(1,null,["x ",""]))],null,(function(n,l){n(l,1,0,l.parent.context.$implicit.quantity)}))}function C(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,4,"h6",[["routerDirection","forward"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Eb(n,1).onClick()&&u),"click"===l&&(u=!1!==e.Eb(n,3).onClick(t)&&u),u}),null,null)),e.sb(1,16384,null,0,f.o,[f.n,f.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.Fb(2,1),e.sb(3,737280,null,0,o.Lb,[g.h,o.Hb,e.k,f.n,[2,f.o]],{routerDirection:[0,"routerDirection"]},null),(n()(),e.Mb(4,null,[""," "]))],(function(n,l){var t=n(l,2,0,"/brand/"+l.parent.context.$implicit.product.brand_id);n(l,1,0,t),n(l,3,0,"forward")}),(function(n,l){n(l,4,0,l.parent.context.$implicit.product.brand.name)}))}function O(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Redeem"]))],null,null)}function M(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Redeemed"]))],null,null)}function x(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,29,"ion-card",[["class","gift__products__card"]],null,null,null,b.Y,b.g)),e.sb(1,49152,null,0,o.l,[e.h,e.k,e.z],null,null),(n()(),e.tb(2,0,null,0,27,"ion-card-content",[],null,null,null,b.U,b.h)),e.sb(3,49152,null,0,o.m,[e.h,e.k,e.z],null,null),(n()(),e.tb(4,0,null,0,3,"div",[["class","gift__products__card__image"]],null,null,null,null,null)),e.Jb(512,null,g.u,g.v,[e.k,e.t,e.D]),e.sb(6,278528,null,0,g.n,[g.u],{ngStyle:[0,"ngStyle"]},null),e.Hb(7,{"background-image":0}),(n()(),e.tb(8,0,null,0,21,"div",[["class","gift__products__card__content"]],null,null,null,null,null)),(n()(),e.tb(9,0,null,null,3,"h2",[],null,null,null,null,null)),(n()(),e.Mb(10,null,[""," "])),(n()(),e.ib(16777216,null,null,1,null,k)),e.sb(12,16384,null,0,g.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,null,1,null,C)),e.sb(14,16384,null,0,g.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(15,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Mb(16,null,["",""])),(n()(),e.tb(17,0,null,null,12,"div",[["class","gift__products__card__content__actions"]],null,null,null,null,null)),(n()(),e.tb(18,0,null,null,5,"ion-button",[["color","dark"],["fill","clear"],["routerDirection","forward"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Eb(n,20).onClick()&&u),"click"===l&&(u=!1!==e.Eb(n,22).onClick(t)&&u),u}),b.S,b.e)),e.sb(19,49152,null,0,o.j,[e.h,e.k,e.z],{color:[0,"color"],fill:[1,"fill"],routerDirection:[2,"routerDirection"]},null),e.sb(20,16384,null,0,f.o,[f.n,f.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.Fb(21,1),e.sb(22,737280,null,0,o.Lb,[g.h,o.Hb,e.k,f.n,[2,f.o]],{routerDirection:[0,"routerDirection"]},null),(n()(),e.Mb(-1,0,[" Details "])),(n()(),e.tb(24,0,null,null,5,"ion-button",[["color","primary"],["fill","clear"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.redeem(n.context.$implicit)&&e),e}),b.S,b.e)),e.sb(25,49152,null,0,o.j,[e.h,e.k,e.z],{color:[0,"color"],disabled:[1,"disabled"],fill:[2,"fill"]},null),(n()(),e.ib(16777216,null,0,1,null,O)),e.sb(27,16384,null,0,g.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,0,1,null,M)),e.sb(29,16384,null,0,g.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=n(l,7,0,"url("+l.context.$implicit.product.image+")");n(l,6,0,t),n(l,12,0,l.context.$implicit.quantity>1),n(l,14,0,l.context.$implicit.product.brand),n(l,19,0,"dark","clear","forward");var e=n(l,21,0,"/product/"+l.context.$implicit.product_id);n(l,20,0,e),n(l,22,0,"forward"),n(l,25,0,"primary","redeemed"===l.context.$implicit.status,"clear"),n(l,27,0,"redeemed"!==l.context.$implicit.status),n(l,29,0,"redeemed"===l.context.$implicit.status)}),(function(n,l){n(l,10,0,l.context.$implicit.product.name),n(l,16,0,l.context.$implicit.product.description)}))}function v(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,19,"div",[],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,15,"ion-card",[["class","gift__message"],["color","primary"]],null,null,null,b.Y,b.g)),e.sb(2,49152,null,0,o.l,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.tb(3,0,null,0,10,"ion-card-header",[],null,null,null,b.V,b.i)),e.sb(4,49152,null,0,o.n,[e.h,e.k,e.z],null,null),(n()(),e.tb(5,0,null,0,5,"ion-card-subtitle",[],null,null,null,b.W,b.j)),e.sb(6,49152,null,0,o.o,[e.h,e.k,e.z],null,null),(n()(),e.Mb(7,0,[""," item"])),(n()(),e.ib(16777216,null,0,1,null,h)),e.sb(9,16384,null,0,g.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.Mb(-1,0,[" gifted to you"])),(n()(),e.tb(11,0,null,0,2,"ion-card-title",[],null,null,null,b.X,b.k)),e.sb(12,49152,null,0,o.p,[e.h,e.k,e.z],null,null),(n()(),e.Mb(13,0,["A gift from "," ",""])),(n()(),e.tb(14,0,null,0,2,"ion-card-content",[],null,null,null,b.U,b.h)),e.sb(15,49152,null,0,o.m,[e.h,e.k,e.z],null,null),(n()(),e.Mb(16,0,[" "," "])),(n()(),e.tb(17,0,null,null,2,"div",[["class","gift__products"]],null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,x)),e.sb(19,278528,null,0,g.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,2,0,"primary"),n(l,9,0,1!==t.gift.order_items.length),n(l,19,0,t.gift.order_items)}),(function(n,l){var t=l.component;n(l,7,0,t.gift.order_items.length),n(l,13,0,t.gift.profile.first_name,t.gift.profile.last_name),n(l,16,0,t.gift.message)}))}function P(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Redeem All Items"]))],null,null)}function y(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Redeemed"]))],null,null)}function I(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,7,"ion-footer",[["class","gift-footer"]],null,null,null,b.db,b.p)),e.sb(1,49152,null,0,o.y,[e.h,e.k,e.z],null,null),(n()(),e.tb(2,0,null,0,5,"ion-button",[["class","gift-footer__button"],["color","primary"],["expand","full"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.redeemOrder()&&e),e}),b.S,b.e)),e.sb(3,49152,null,0,o.j,[e.h,e.k,e.z],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(n()(),e.ib(16777216,null,0,1,null,P)),e.sb(5,16384,null,0,g.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,0,1,null,y)),e.sb(7,16384,null,0,g.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,3,0,"primary","redeemed"===t.gift.status,"full"),n(l,5,0,"redeemed"!==t.gift.status),n(l,7,0,"redeemed"===t.gift.status)}),null)}function z(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,17,"ion-header",[],null,null,null,b.fb,b.r)),e.sb(1,49152,null,0,o.A,[e.h,e.k,e.z],null,null),(n()(),e.tb(2,0,null,0,15,"ion-toolbar",[["color","primary"]],null,null,null,b.Bb,b.N)),e.sb(3,49152,null,0,o.Bb,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.tb(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,b.T,b.f)),e.sb(5,49152,null,0,o.k,[e.h,e.k,e.z],null,null),(n()(),e.tb(6,0,null,0,4,"ion-button",[],null,null,null,b.S,b.e)),e.sb(7,49152,null,0,o.j,[e.h,e.k,e.z],null,null),(n()(),e.tb(8,0,null,0,2,"ion-back-button",[["defaultHref","/home"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Eb(n,10).onClick(t)&&u),u}),b.Q,b.c)),e.sb(9,49152,null,0,o.f,[e.h,e.k,e.z],{defaultHref:[0,"defaultHref"]},null),e.sb(10,16384,null,0,o.g,[[2,o.hb],o.Hb],{defaultHref:[0,"defaultHref"]},null),(n()(),e.tb(11,0,null,0,2,"ion-title",[],null,null,null,b.Ab,b.M)),e.sb(12,49152,null,0,o.zb,[e.h,e.k,e.z],null,null),(n()(),e.Mb(-1,0,["Your Gift"])),(n()(),e.tb(14,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,b.T,b.f)),e.sb(15,49152,null,0,o.k,[e.h,e.k,e.z],null,null),(n()(),e.ib(16777216,null,0,1,null,_)),e.sb(17,16384,null,0,g.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(18,0,null,null,5,"ion-content",[["class","gift"]],null,null,null,b.ab,b.m)),e.sb(19,49152,null,0,o.t,[e.h,e.k,e.z],null,null),(n()(),e.ib(16777216,null,0,1,null,m)),e.sb(21,16384,null,0,g.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,0,1,null,v)),e.sb(23,16384,null,0,g.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,null,1,null,I)),e.sb(25,16384,null,0,g.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,3,0,"primary"),n(l,9,0,"/home"),n(l,10,0,"/home"),n(l,17,0,!t.loading&&"redeemed"!==t.gift.status),n(l,21,0,t.loading),n(l,23,0,!t.loading),n(l,25,0,!t.loading)}),null)}function S(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,1,"app-gift",[],null,null,null,z,p)),e.sb(1,114688,null,0,s,[r.a,f.a,o.Fb,o.a,i.a,o.Gb],null,null)],(function(n,l){n(l,1,0)}),null)}var w=e.pb("app-gift",s,S,{},{},[]),R=t("gIcY");t.d(l,"GiftPageModuleNgFactory",(function(){return D}));var D=e.qb(a,[],(function(n){return e.Bb([e.Cb(512,e.j,e.bb,[[8,[d.a,w]],[3,e.j],e.x]),e.Cb(4608,g.m,g.l,[e.u,[2,g.x]]),e.Cb(4608,R.j,R.j,[]),e.Cb(4608,o.b,o.b,[e.z,e.g]),e.Cb(4608,o.Gb,o.Gb,[o.b,e.j,e.q]),e.Cb(4608,o.Kb,o.Kb,[o.b,e.j,e.q]),e.Cb(1073742336,g.b,g.b,[]),e.Cb(1073742336,R.i,R.i,[]),e.Cb(1073742336,R.b,R.b,[]),e.Cb(1073742336,o.Db,o.Db,[]),e.Cb(1073742336,f.q,f.q,[[2,f.v],[2,f.n]]),e.Cb(1073742336,a,a,[]),e.Cb(1024,f.l,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);