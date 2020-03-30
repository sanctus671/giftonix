(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{FSyz:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=t("mrSG"),r=t("ZZ/e"),i=t("KWTU"),o=t("llfe"),c=t("xX4t"),s=t("wd/R"),a=function(){function n(n,l,t,e,u,r,i){this.orderService=n,this.route=l,this.loadingController=t,this.alertController=e,this.favouriteService=u,this.modalController=r,this.navController=i,this.gift={id:this.route.snapshot.params.id,profile:{},order_items:[]},this.loading=!0,this.getGift()}return n.prototype.ngOnInit=function(){},n.prototype.regift=function(){var n=this;this.alertController.create({header:"Re-gift",subHeader:"Send this gift to someone else",message:"Are you sure you want to send this gift to someone else? Once you have done this, you will no longer be able to claim items in this gift.",buttons:[{text:"Cancel",role:"cancel"},{text:"Send",handler:function(){n.orderService.regiftOrder({order_id:n.gift.id}).then((function(l){n.sendGift(),n.favouriteService.favouritesChanged(0),n.navController.navigateRoot("/home")}))}}]}).then((function(n){n.present()}))},n.prototype.sendGift=function(){return u.b(this,void 0,void 0,(function(){var n;return u.e(this,(function(l){switch(l.label){case 0:return[4,this.modalController.create({component:c.a,componentProps:{order:Object.assign({},this.gift)}})];case 1:return(n=l.sent()).onDidDismiss().then((function(n){})),[4,n.present()];case 2:return l.sent(),[2]}}))}))},n.prototype.getGift=function(){var n=this;this.orderService.getOrder(this.gift.id).then((function(l){if(n.gift=l,console.log(n.gift),"redeemed"!==n.gift.status){for(var t=0,e=0,u=n.gift.order_items;e<u.length;e++){var r=u[e];if("redeemed"!==r.status&&r.product&&r.product.expiry_timeframe){var i=s(r.created_at).add(r.product.expiry_timeframe,"days");s().isAfter(i)&&(r.status="expired",t+=1)}}n.gift.expired_items=t,t===n.gift.order_items.length&&(n.gift.status="expired")}n.loading=!1})).catch((function(){n.loading=!1}))},n.prototype.redeem=function(n){var l=this;this.alertController.create({header:"Are You Sure?",subHeader:"You must be in store with a staff member to redeem it.",message:"You are about to redeem this item. This cannot be undone.",buttons:[{text:"Cancel",role:"cancel"},{text:"Redeem",handler:function(){"pin"===n.product.redemption_method?l.alertController.create({header:"Enter PIN",message:"To claim this item, the store must enter their unique PIN.",inputs:[{name:"pin",type:"text",placeholder:"Store PIN"}],buttons:[{text:"Cancel",role:"cancel"},{text:"Redeem",handler:function(t){t&&t.pin&&l.doRedeem(n,{pin:t.pin})}}]}).then((function(n){n.present()})):l.doRedeem(n,{})}}]}).then((function(n){n.present()}))},n.prototype.doRedeem=function(n,l){var t,e=this;this.loadingController.create({message:"Redeeming...",duration:2e4}).then((function(n){t=n,n.present()})),this.orderService.redeemItem(n.id,l).then((function(){n.status="redeemed",e.getGift(),t.dismiss(),e.favouriteService.favouritesChanged(0)})).catch((function(){t.dismiss(),e.alertController.create({header:"Error",message:"This item has already been redeemed.",buttons:[{text:"Dismiss",role:"cancel"}]}).then((function(n){n.present()}))}))},n.prototype.redeemOrder=function(){for(var n=this,l=!1,t=0,e=this.gift.order_items;t<e.length;t++)if("pin"===e[t].product.redemption_method){l=!0;break}this.alertController.create({header:"Are You Sure?",subHeader:"You must be in store with a staff member to redeem this gift.",message:"You are about to redeem all items in this gift. This cannot be undone.",buttons:[{text:"Cancel",role:"cancel"},{text:"Redeem",handler:function(){l?n.alertController.create({header:"Enter PIN",message:"To claim this gift, the store must enter their unique PIN.",inputs:[{name:"pin",type:"text",placeholder:"Store PIN"}],buttons:[{text:"Cancel",role:"cancel"},{text:"Redeem",handler:function(l){l&&l.pin&&n.doRedeemOrder({pin:l.pin})}}]}).then((function(n){n.present()})):n.doRedeemOrder({})}}]}).then((function(n){n.present()}))},n.prototype.doRedeemOrder=function(n){var l,t=this;this.loadingController.create({message:"Redeeming...",duration:2e4}).then((function(n){l=n,n.present()})),this.orderService.redeemOrder(this.gift.id,n).then((function(){l.dismiss(),t.gift.status="redeemed",t.getGift(),t.favouriteService.favouritesChanged(0)})).catch((function(){l.dismiss(),t.alertController.create({header:"Error",message:"This gift has already been redeemed.",buttons:[{text:"Dismiss",role:"cancel"}]}).then((function(n){n.present()}))}))},n.prototype.canRedeemAll=function(){for(var n=[],l=0,t=this.gift.order_items;l<t.length;l++){var e=t[l];if("redeemed"===e.status)return!1;e.brand&&n.push(e.brand.id)}return!(Array.from(new Set(n)).length>1)},n.prototype.getExpiryDate=function(n){return s(n.created_at).add(n.product.expiry_timeframe,"days").format("DD/MM/YYYY")},n.prototype.getExcerpt=function(n){return n.length>30?n.substr(0,30)+"...":n},n}(),d=function(){return function(){}}(),f=t("pMnS"),b=t("oBZk"),g=t("ZYCi"),p=t("Ip0R"),_=e.rb({encapsulation:0,styles:[[".gift[_ngcontent-%COMP%]   .gift__loading[_ngcontent-%COMP%]{text-align:center;margin-top:60px}.gift[_ngcontent-%COMP%]   .gift__message[_ngcontent-%COMP%]{text-align:Center}.gift[_ngcontent-%COMP%]   .gift__products[_ngcontent-%COMP%]   .gift__products__card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{display:-webkit-box;display:flex;padding:0}.gift[_ngcontent-%COMP%]   .gift__products[_ngcontent-%COMP%]   .gift__products__card[_ngcontent-%COMP%]   .gift__products__card__image[_ngcontent-%COMP%]{width:100px;height:auto;min-height:150px;display:inline-block;background-size:cover;background-position:center center;background-repeat:no-repeat}.gift[_ngcontent-%COMP%]   .gift__products[_ngcontent-%COMP%]   .gift__products__card[_ngcontent-%COMP%]   .gift__products__card__content[_ngcontent-%COMP%]{display:inline-block;-webkit-box-flex:1;flex:1}.gift[_ngcontent-%COMP%]   .gift__products[_ngcontent-%COMP%]   .gift__products__card[_ngcontent-%COMP%]   .gift__products__card__content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;color:#000;padding:10px 16px 5px}.gift[_ngcontent-%COMP%]   .gift__products[_ngcontent-%COMP%]   .gift__products__card[_ngcontent-%COMP%]   .gift__products__card__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0 16px}.gift[_ngcontent-%COMP%]   .gift__products[_ngcontent-%COMP%]   .gift__products__card[_ngcontent-%COMP%]   .gift__products__card__content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{padding:0 16px;color:#000}.gift[_ngcontent-%COMP%]   .gift__products[_ngcontent-%COMP%]   .gift__products__card[_ngcontent-%COMP%]   .gift__products__card__content[_ngcontent-%COMP%]   .gift__products__card__content__actions[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.05);margin-top:10px;padding-top:10px}"]],data:{}});function m(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,2,"ion-button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.regift()&&e),e}),b.U,b.e)),e.sb(1,49152,null,0,r.m,[e.h,e.k,e.z],null,null),(n()(),e.Mb(-1,0,[" Re-gift "]))],null,null)}function h(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,2,"div",[["class","gift__loading"]],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,1,"ion-spinner",[],null,null,null,b.Bb,b.L)),e.sb(2,49152,null,0,r.ub,[e.h,e.k,e.z],null,null)],null,null)}function O(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["s"]))],null,null)}function k(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(1,null,["x ",""]))],null,(function(n,l){n(l,1,0,l.parent.context.$implicit.quantity)}))}function C(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,4,"h6",[["routerDirection","forward"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Eb(n,1).onClick()&&u),"click"===l&&(u=!1!==e.Eb(n,3).onClick(t)&&u),u}),null,null)),e.sb(1,16384,null,0,g.o,[g.n,g.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.Fb(2,1),e.sb(3,737280,null,0,r.Ob,[p.h,r.Kb,e.k,g.n,[2,g.o]],{routerDirection:[0,"routerDirection"]},null),(n()(),e.Mb(4,null,[""," "]))],(function(n,l){var t=n(l,2,0,"/brand/"+l.parent.context.$implicit.product.brand_id);n(l,1,0,t),n(l,3,0,"forward")}),(function(n,l){n(l,4,0,l.parent.context.$implicit.product.brand.name)}))}function x(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,1,"p",[["class","gift__products__card__content__expiry"]],null,null,null,null,null)),(n()(),e.Mb(1,null,["Expires ",""]))],null,(function(n,l){n(l,1,0,l.component.getExpiryDate(l.parent.context.$implicit))}))}function v(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Redeem"]))],null,null)}function M(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Expired"]))],null,null)}function y(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Redeemed"]))],null,null)}function P(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,33,"ion-card",[["class","gift__products__card"]],null,null,null,b.ab,b.g)),e.sb(1,49152,null,0,r.o,[e.h,e.k,e.z],null,null),(n()(),e.tb(2,0,null,0,31,"ion-card-content",[],null,null,null,b.W,b.h)),e.sb(3,49152,null,0,r.p,[e.h,e.k,e.z],null,null),(n()(),e.tb(4,0,null,0,3,"div",[["class","gift__products__card__image"]],null,null,null,null,null)),e.Jb(512,null,p.u,p.v,[e.k,e.t,e.D]),e.sb(6,278528,null,0,p.n,[p.u],{ngStyle:[0,"ngStyle"]},null),e.Hb(7,{"background-image":0}),(n()(),e.tb(8,0,null,0,25,"div",[["class","gift__products__card__content"]],null,null,null,null,null)),(n()(),e.tb(9,0,null,null,3,"h2",[],null,null,null,null,null)),(n()(),e.Mb(10,null,[""," "])),(n()(),e.ib(16777216,null,null,1,null,k)),e.sb(12,16384,null,0,p.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,null,1,null,C)),e.sb(14,16384,null,0,p.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(15,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Mb(16,null,["",""])),(n()(),e.ib(16777216,null,null,1,null,x)),e.sb(18,16384,null,0,p.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(19,0,null,null,14,"div",[["class","gift__products__card__content__actions"]],null,null,null,null,null)),(n()(),e.tb(20,0,null,null,5,"ion-button",[["color","dark"],["fill","clear"],["routerDirection","forward"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Eb(n,22).onClick()&&u),"click"===l&&(u=!1!==e.Eb(n,24).onClick(t)&&u),u}),b.U,b.e)),e.sb(21,49152,null,0,r.m,[e.h,e.k,e.z],{color:[0,"color"],fill:[1,"fill"],routerDirection:[2,"routerDirection"]},null),e.sb(22,16384,null,0,g.o,[g.n,g.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.Fb(23,1),e.sb(24,737280,null,0,r.Ob,[p.h,r.Kb,e.k,g.n,[2,g.o]],{routerDirection:[0,"routerDirection"]},null),(n()(),e.Mb(-1,0,[" Details "])),(n()(),e.tb(26,0,null,null,7,"ion-button",[["color","primary"],["fill","clear"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.redeem(n.context.$implicit)&&e),e}),b.U,b.e)),e.sb(27,49152,null,0,r.m,[e.h,e.k,e.z],{color:[0,"color"],disabled:[1,"disabled"],fill:[2,"fill"]},null),(n()(),e.ib(16777216,null,0,1,null,v)),e.sb(29,16384,null,0,p.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,0,1,null,M)),e.sb(31,16384,null,0,p.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,0,1,null,y)),e.sb(33,16384,null,0,p.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=n(l,7,0,"url("+l.context.$implicit.product.image+")");n(l,6,0,t),n(l,12,0,l.context.$implicit.quantity>1),n(l,14,0,l.context.$implicit.product.brand),n(l,18,0,l.context.$implicit.product.expiry_timeframe),n(l,21,0,"dark","clear","forward");var e=n(l,23,0,"/product/"+l.context.$implicit.product_id);n(l,22,0,e),n(l,24,0,"forward"),n(l,27,0,"primary","redeemed"===l.context.$implicit.status||"expired"===l.context.$implicit.status,"clear"),n(l,29,0,"redeemed"!==l.context.$implicit.status&&"expired"!==l.context.$implicit.status),n(l,31,0,"expired"===l.context.$implicit.status),n(l,33,0,"redeemed"===l.context.$implicit.status)}),(function(n,l){var t=l.component;n(l,10,0,l.context.$implicit.product.name),n(l,16,0,t.getExcerpt(l.context.$implicit.product.description))}))}function I(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,19,"div",[],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,15,"ion-card",[["class","gift__message"],["color","primary"]],null,null,null,b.ab,b.g)),e.sb(2,49152,null,0,r.o,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.tb(3,0,null,0,10,"ion-card-header",[],null,null,null,b.X,b.i)),e.sb(4,49152,null,0,r.q,[e.h,e.k,e.z],null,null),(n()(),e.tb(5,0,null,0,5,"ion-card-subtitle",[],null,null,null,b.Y,b.j)),e.sb(6,49152,null,0,r.r,[e.h,e.k,e.z],null,null),(n()(),e.Mb(7,0,[""," item"])),(n()(),e.ib(16777216,null,0,1,null,O)),e.sb(9,16384,null,0,p.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.Mb(-1,0,[" gifted to you"])),(n()(),e.tb(11,0,null,0,2,"ion-card-title",[],null,null,null,b.Z,b.k)),e.sb(12,49152,null,0,r.s,[e.h,e.k,e.z],null,null),(n()(),e.Mb(13,0,["A gift from "," ",""])),(n()(),e.tb(14,0,null,0,2,"ion-card-content",[],null,null,null,b.W,b.h)),e.sb(15,49152,null,0,r.p,[e.h,e.k,e.z],null,null),(n()(),e.Mb(16,0,[" "," "])),(n()(),e.tb(17,0,null,null,2,"div",[["class","gift__products"]],null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,P)),e.sb(19,278528,null,0,p.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,2,0,"primary"),n(l,9,0,1!==t.gift.order_items.length),n(l,19,0,t.gift.order_items)}),(function(n,l){var t=l.component;n(l,7,0,t.gift.order_items.length),n(l,13,0,t.gift.profile.first_name,t.gift.profile.last_name),n(l,16,0,t.gift.message)}))}function z(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Redeem All Items"]))],null,null)}function R(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Gift Expired"]))],null,null)}function w(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Redeemed"]))],null,null)}function S(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,9,"ion-footer",[["class","gift-footer"]],null,null,null,b.hb,b.r)),e.sb(1,49152,null,0,r.B,[e.h,e.k,e.z],null,null),(n()(),e.tb(2,0,null,0,7,"ion-button",[["class","gift-footer__button"],["color","primary"],["expand","full"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.redeemOrder()&&e),e}),b.U,b.e)),e.sb(3,49152,null,0,r.m,[e.h,e.k,e.z],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(n()(),e.ib(16777216,null,0,1,null,z)),e.sb(5,16384,null,0,p.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,0,1,null,R)),e.sb(7,16384,null,0,p.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,0,1,null,w)),e.sb(9,16384,null,0,p.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,3,0,"primary","redeemed"===t.gift.status||"expired"===t.gift.status,"full"),n(l,5,0,"redeemed"!==t.gift.status&&"expired"!==t.gift.status),n(l,7,0,"expired"===t.gift.status),n(l,9,0,"redeemed"===t.gift.status)}),null)}function D(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,17,"ion-header",[],null,null,null,b.jb,b.t)),e.sb(1,49152,null,0,r.D,[e.h,e.k,e.z],null,null),(n()(),e.tb(2,0,null,0,15,"ion-toolbar",[["color","primary"]],null,null,null,b.Fb,b.P)),e.sb(3,49152,null,0,r.Eb,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.tb(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,b.V,b.f)),e.sb(5,49152,null,0,r.n,[e.h,e.k,e.z],null,null),(n()(),e.tb(6,0,null,0,4,"ion-button",[],null,null,null,b.U,b.e)),e.sb(7,49152,null,0,r.m,[e.h,e.k,e.z],null,null),(n()(),e.tb(8,0,null,0,2,"ion-back-button",[["defaultHref","/home"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Eb(n,10).onClick(t)&&u),u}),b.S,b.c)),e.sb(9,49152,null,0,r.i,[e.h,e.k,e.z],{defaultHref:[0,"defaultHref"]},null),e.sb(10,16384,null,0,r.j,[[2,r.kb],r.Kb],{defaultHref:[0,"defaultHref"]},null),(n()(),e.tb(11,0,null,0,2,"ion-title",[],null,null,null,b.Eb,b.O)),e.sb(12,49152,null,0,r.Cb,[e.h,e.k,e.z],null,null),(n()(),e.Mb(-1,0,["Your Gift"])),(n()(),e.tb(14,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,b.V,b.f)),e.sb(15,49152,null,0,r.n,[e.h,e.k,e.z],null,null),(n()(),e.ib(16777216,null,0,1,null,m)),e.sb(17,16384,null,0,p.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(18,0,null,null,5,"ion-content",[["class","gift"]],null,null,null,b.db,b.n)),e.sb(19,49152,null,0,r.w,[e.h,e.k,e.z],null,null),(n()(),e.ib(16777216,null,0,1,null,h)),e.sb(21,16384,null,0,p.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,0,1,null,I)),e.sb(23,16384,null,0,p.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,null,1,null,S)),e.sb(25,16384,null,0,p.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,3,0,"primary"),n(l,9,0,"/home"),n(l,10,0,"/home"),n(l,17,0,!t.loading&&"redeemed"!==t.gift.status&&"expired"!==t.gift.status),n(l,21,0,t.loading),n(l,23,0,!t.loading),n(l,25,0,!t.loading&&t.canRedeemAll())}),null)}function L(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,1,"app-gift",[],null,null,null,D,_)),e.sb(1,114688,null,0,a,[i.a,g.a,r.Ib,r.b,o.a,r.Jb,r.Kb],null,null)],(function(n,l){n(l,1,0)}),null)}var E=e.pb("app-gift",a,L,{},{},[]),$=t("gIcY");t.d(l,"GiftPageModuleNgFactory",(function(){return Y}));var Y=e.qb(d,[],(function(n){return e.Bb([e.Cb(512,e.j,e.bb,[[8,[f.a,E]],[3,e.j],e.x]),e.Cb(4608,p.m,p.l,[e.u,[2,p.x]]),e.Cb(4608,$.l,$.l,[]),e.Cb(4608,r.c,r.c,[e.z,e.g]),e.Cb(4608,r.Jb,r.Jb,[r.c,e.j,e.q]),e.Cb(4608,r.Nb,r.Nb,[r.c,e.j,e.q]),e.Cb(1073742336,p.b,p.b,[]),e.Cb(1073742336,$.k,$.k,[]),e.Cb(1073742336,$.b,$.b,[]),e.Cb(1073742336,r.Gb,r.Gb,[]),e.Cb(1073742336,g.q,g.q,[[2,g.v],[2,g.n]]),e.Cb(1073742336,d,d,[]),e.Cb(1024,g.l,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);