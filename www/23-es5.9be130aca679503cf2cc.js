(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{zDS7:function(n,l,t){"use strict";t.r(l);var o=t("CcnG"),e=t("ZZ/e"),u=t("Z4xi"),i=t("ri4K"),s=t("9B/o"),a=function(){function n(n,l,t,o,e){var u=this;this.emailComposer=n,this.plt=l,this.authenticationService=t,this.alertCtrl=o,this.iab=e,this.user={},this.authenticationService.getUserData().subscribe((function(n){u.user=n}))}return n.prototype.ngOnInit=function(){},n.prototype.openRate=function(){this.plt.is("ios")?this.iab.create("https://itunes.apple.com/","_system"):this.iab.create("https://play.google.com/store/apps/details?id=com.giftonix.app","_system")},n.prototype.openFollow=function(){this.iab.create("https://www.facebook.com/","_system")},n.prototype.openEmail=function(){this.emailComposer.open({to:["tristan@giftonix.com"],subject:"Subject for your support query",body:"Provide details about the support you require.",isHtml:!0})},n.prototype.openChangePassword=function(){var n=this;this.alertCtrl.create({header:"Change Password",inputs:[{name:"password",placeholder:"Password",type:"password"},{name:"confirmPassword",placeholder:"Confirm Password",type:"password"}],buttons:[{text:"Cancel",role:"cancel",handler:function(n){}},{text:"Change",handler:function(l){l.password&&l.confirmPassword&&l.password===l.confirmPassword?n.authenticationService.changePassword(n.user.email,l.password,l.confirmPassword).then((function(){n.alertCtrl.create({header:"Success",message:"Your password has been updated",buttons:[{text:"Dismiss",role:"cancel",handler:function(n){}}]}).then((function(n){n.present()}))})).catch((function(){n.alertCtrl.create({header:"Error",message:"There was an error while changing your password.",buttons:[{text:"Cancel",role:"cancel",handler:function(n){}},{text:"Try Again",handler:function(l){setTimeout((function(){n.openChangePassword()}),200)}}]}).then((function(n){n.present()}))})):n.alertCtrl.create({header:"Error",message:"Passwords do not match",buttons:[{text:"Cancel",role:"cancel",handler:function(n){}},{text:"Try Again",handler:function(l){setTimeout((function(){n.openChangePassword()}),200)}}]}).then((function(n){n.present()}))}}]}).then((function(n){n.present()}))},n.prototype.logout=function(){this.authenticationService.logout()},n}(),r=function(){return function(){}}(),c=t("pMnS"),b=t("oBZk"),h=o.rb({encapsulation:0,styles:[[".settings-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{margin-bottom:10px;margin-top:20px;padding-top:10px}.settings-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]:first-child{margin-top:0;padding-top:0}.settings-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-bottom:0}.settings-list[_ngcontent-%COMP%]   ion-icon[name=trophy][_ngcontent-%COMP%]{color:#ffbf00}.settings-list[_ngcontent-%COMP%]   ion-icon[name=heart][_ngcontent-%COMP%]{color:#e31b23}.settings-list[_ngcontent-%COMP%]   ion-icon[name=logo-facebook][_ngcontent-%COMP%]{color:#3b5998}.settings-list[_ngcontent-%COMP%]   ion-icon[name=mail][_ngcontent-%COMP%]{color:grey}.settings-list[_ngcontent-%COMP%]   ion-icon[name=unlock][_ngcontent-%COMP%]{color:#d6a000}.settings-list[_ngcontent-%COMP%]   ion-icon[name=lock][_ngcontent-%COMP%]{color:#d47835}.settings-list[_ngcontent-%COMP%]   ion-icon[name=cloud-upload][_ngcontent-%COMP%]{color:#8cd0ef}.settings-list[_ngcontent-%COMP%]   ion-icon[name=locate][_ngcontent-%COMP%]{color:#90e483}"]],data:{}});function p(n){return o.Lb(0,[(n()(),o.tb(0,0,null,null,10,"ion-header",[],null,null,null,b.eb,b.r)),o.sb(1,49152,null,0,e.A,[o.h,o.k,o.z],null,null),(n()(),o.tb(2,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,b.zb,b.M)),o.sb(3,49152,null,0,e.Bb,[o.h,o.k,o.z],{color:[0,"color"]},null),(n()(),o.tb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,b.S,b.f)),o.sb(5,49152,null,0,e.k,[o.h,o.k,o.z],null,null),(n()(),o.tb(6,0,null,0,1,"ion-menu-button",[],null,null,null,b.lb,b.z)),o.sb(7,49152,null,0,e.Q,[o.h,o.k,o.z],null,null),(n()(),o.tb(8,0,null,0,2,"ion-title",[],null,null,null,b.yb,b.L)),o.sb(9,49152,null,0,e.zb,[o.h,o.k,o.z],null,null),(n()(),o.Kb(-1,0,["Settings"])),(n()(),o.tb(11,0,null,null,45,"ion-content",[],null,null,null,b.Z,b.m)),o.sb(12,49152,null,0,e.t,[o.h,o.k,o.z],null,null),(n()(),o.tb(13,0,null,0,43,"ion-list",[["class","settings-list"]],null,null,null,b.kb,b.w)),o.sb(14,49152,null,0,e.N,[o.h,o.k,o.z],null,null),(n()(),o.tb(15,0,null,0,2,"ion-list-header",[],null,null,null,b.jb,b.x)),o.sb(16,49152,null,0,e.O,[o.h,o.k,o.z],null,null),(n()(),o.Kb(-1,0,["Support"])),(n()(),o.tb(18,0,null,0,7,"ion-item",[],null,null,null,b.hb,b.u)),o.sb(19,49152,null,0,e.G,[o.h,o.k,o.z],null,null),(n()(),o.tb(20,0,null,0,1,"ion-icon",[["name","heart"],["slot","start"]],null,null,null,b.fb,b.s)),o.sb(21,49152,null,0,e.B,[o.h,o.k,o.z],{name:[0,"name"]},null),(n()(),o.Kb(-1,0,[" Rate The App "])),(n()(),o.tb(23,0,null,0,2,"ion-button",[["fill","outline"],["slot","end"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.openRate()&&o),o}),b.R,b.e)),o.sb(24,49152,null,0,e.j,[o.h,o.k,o.z],{fill:[0,"fill"]},null),(n()(),o.Kb(-1,0,["Rate"])),(n()(),o.tb(26,0,null,0,7,"ion-item",[],null,null,null,b.hb,b.u)),o.sb(27,49152,null,0,e.G,[o.h,o.k,o.z],null,null),(n()(),o.tb(28,0,null,0,1,"ion-icon",[["name","logo-facebook"],["slot","start"]],null,null,null,b.fb,b.s)),o.sb(29,49152,null,0,e.B,[o.h,o.k,o.z],{name:[0,"name"]},null),(n()(),o.Kb(-1,0,[" Follow Us "])),(n()(),o.tb(31,0,null,0,2,"ion-button",[["fill","outline"],["slot","end"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.openFollow()&&o),o}),b.R,b.e)),o.sb(32,49152,null,0,e.j,[o.h,o.k,o.z],{fill:[0,"fill"]},null),(n()(),o.Kb(-1,0,["Follow"])),(n()(),o.tb(34,0,null,0,7,"ion-item",[],null,null,null,b.hb,b.u)),o.sb(35,49152,null,0,e.G,[o.h,o.k,o.z],null,null),(n()(),o.tb(36,0,null,0,1,"ion-icon",[["name","mail"],["slot","start"]],null,null,null,b.fb,b.s)),o.sb(37,49152,null,0,e.B,[o.h,o.k,o.z],{name:[0,"name"]},null),(n()(),o.Kb(-1,0,[" Contact Support "])),(n()(),o.tb(39,0,null,0,2,"ion-button",[["fill","outline"],["slot","end"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.openEmail()&&o),o}),b.R,b.e)),o.sb(40,49152,null,0,e.j,[o.h,o.k,o.z],{fill:[0,"fill"]},null),(n()(),o.Kb(-1,0,["Email"])),(n()(),o.tb(42,0,null,0,2,"ion-list-header",[],null,null,null,b.jb,b.x)),o.sb(43,49152,null,0,e.O,[o.h,o.k,o.z],null,null),(n()(),o.Kb(-1,0,["Account Settings"])),(n()(),o.tb(45,0,null,0,6,"ion-item",[["detail",""]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.openChangePassword()&&o),o}),b.hb,b.u)),o.sb(46,49152,null,0,e.G,[o.h,o.k,o.z],{detail:[0,"detail"]},null),(n()(),o.tb(47,0,null,0,1,"ion-icon",[["name","unlock"],["slot","start"]],null,null,null,b.fb,b.s)),o.sb(48,49152,null,0,e.B,[o.h,o.k,o.z],{name:[0,"name"]},null),(n()(),o.tb(49,0,null,0,2,"ion-label",[],null,null,null,b.ib,b.v)),o.sb(50,49152,null,0,e.M,[o.h,o.k,o.z],null,null),(n()(),o.Kb(-1,0,["Change Password"])),(n()(),o.tb(52,0,null,0,4,"ion-item",[],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.logout()&&o),o}),b.hb,b.u)),o.sb(53,49152,null,0,e.G,[o.h,o.k,o.z],null,null),(n()(),o.tb(54,0,null,0,1,"ion-icon",[["name","lock"],["slot","start"]],null,null,null,b.fb,b.s)),o.sb(55,49152,null,0,e.B,[o.h,o.k,o.z],{name:[0,"name"]},null),(n()(),o.Kb(-1,0,[" Logout "]))],(function(n,l){n(l,3,0,"primary"),n(l,21,0,"heart"),n(l,24,0,"outline"),n(l,29,0,"logo-facebook"),n(l,32,0,"outline"),n(l,37,0,"mail"),n(l,40,0,"outline"),n(l,46,0,""),n(l,48,0,"unlock"),n(l,55,0,"lock")}),null)}function g(n){return o.Lb(0,[(n()(),o.tb(0,0,null,null,1,"app-settings",[],null,null,null,p,h)),o.sb(1,114688,null,0,a,[u.a,e.Jb,i.a,e.a,s.a],null,null)],(function(n,l){n(l,1,0)}),null)}var m=o.pb("app-settings",a,g,{},{},[]),f=t("Ip0R"),d=t("gIcY"),C=t("ZYCi");t.d(l,"SettingsPageModuleNgFactory",(function(){return k}));var k=o.qb(r,[],(function(n){return o.Bb([o.Cb(512,o.j,o.bb,[[8,[c.a,m]],[3,o.j],o.x]),o.Cb(4608,f.k,f.j,[o.u,[2,f.t]]),o.Cb(4608,d.j,d.j,[]),o.Cb(4608,e.b,e.b,[o.z,o.g]),o.Cb(4608,e.Gb,e.Gb,[e.b,o.j,o.q]),o.Cb(4608,e.Kb,e.Kb,[e.b,o.j,o.q]),o.Cb(1073742336,f.b,f.b,[]),o.Cb(1073742336,d.i,d.i,[]),o.Cb(1073742336,d.b,d.b,[]),o.Cb(1073742336,e.Db,e.Db,[]),o.Cb(1073742336,C.q,C.q,[[2,C.v],[2,C.n]]),o.Cb(1073742336,r,r,[]),o.Cb(1024,C.l,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);