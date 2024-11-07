"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[715],{715:(_,w,c)=>{c.r(w),c.d(w,{EditProfilePageModule:()=>O});var m=c(177),i=c(4341),r=c(4742),P=c(9166),p=c(467),t=c(4438),C=c(1740),b=c(2872);const M=[{path:"",component:(()=>{var e;class l{constructor(n,o,a,g){this.formBuilder=n,this.authService=o,this.alertController=a,this.navCtrl=g}ngOnInit(){this.userData$=this.authService.getUserData$(),this.initializeForm()}initializeForm(){this.editForm=this.formBuilder.group({fullName:["",i.k0.required],contact:["",[i.k0.required,i.k0.pattern("^09\\d{9}$")]],department:["",i.k0.required]}),this.userData$.subscribe(n=>{n&&this.editForm.patchValue({fullName:n.fullName,contact:n.contact,department:n.department})})}uploadImage(){var n=this;return(0,p.A)(function*(){const o=document.createElement("input");o.type="file",o.accept="image/*",o.onchange=function(){var a=(0,p.A)(function*(g){const d=g.target.files[0];if(d){const h=yield n.authService.getCurrentUserId();if(h)try{yield n.authService.uploadProfilePicture(h,d).toPromise(),n.presentAlert("Success","Profile picture updated successfully.")}catch{n.presentAlert("Error","Failed to update profile picture. Please try again.")}}});return function(g){return a.apply(this,arguments)}}(),o.click()})()}updateProfile(){var n=this;return(0,p.A)(function*(){if(n.editForm.valid){const{fullName:o,contact:a,department:g}=n.editForm.value,d=yield n.authService.getCurrentUserId();d&&(yield n.authService.updateUserProfile(d,{fullName:o,contact:a,department:g}),n.presentAlert("Success","Profile updated successfully."),n.navCtrl.back())}})()}presentAlert(n,o){var a=this;return(0,p.A)(function*(){yield(yield a.alertController.create({header:n,message:o,buttons:["OK"]})).present()})()}goBack(){this.navCtrl.back()}}return(e=l).\u0275fac=function(n){return new(n||e)(t.rXU(i.ok),t.rXU(C.k),t.rXU(r.hG),t.rXU(b.q9))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-edit-profile"]],decls:48,vars:9,consts:[[1,"bg-white","shadow-md",3,"translucent"],[1,"flex","items-center","justify-between"],["slot","start"],[3,"click"],["name","arrow-back-outline","slot","icon-only",1,"text-red-700","text-lg"],[1,"text-gray-800","font-semibold","text-lg"],["slot","end"],[1,"ion-padding"],[1,"background-logo"],[1,"profile-container"],[1,"profile-header"],[1,"profile-image",3,"click"],["alt","Profile picture",3,"src"],[1,"upload-overlay"],["name","camera"],[1,"w-full","max-w-md","mx-auto",3,"ngSubmit","formGroup"],["lines","none"],[1,"mb-4"],["position","floating"],["type","text","formControlName","fullName"],["type","tel","formControlName","contact"],["position","stacked"],["formControlName","department","placeholder","Select Department"],["value","CICS"],["value","CET"],["value","CTE"],["value","CAS"],["value","CABEIHM"],["type","submit",1,"w-full","bg-red-600","text-white","py-2","rounded-md","hover:bg-red-700","mt-6",3,"disabled"]],template:function(n,o){if(1&n&&(t.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2)(3,"ion-button",3),t.bIt("click",function(){return o.goBack()}),t.nrm(4,"ion-icon",4),t.k0s()(),t.j41(5,"ion-title",5),t.EFF(6,"Edit Profile"),t.k0s(),t.nrm(7,"ion-buttons",6),t.k0s()(),t.j41(8,"ion-content",7),t.nrm(9,"div",8),t.j41(10,"div",9)(11,"div",10)(12,"div",11),t.bIt("click",function(){return o.uploadImage()}),t.nrm(13,"img",12),t.nI1(14,"async"),t.j41(15,"div",13),t.nrm(16,"ion-icon",14),t.k0s()(),t.j41(17,"h2"),t.EFF(18),t.nI1(19,"async"),t.k0s(),t.j41(20,"p"),t.EFF(21,"Edit Profile"),t.k0s()(),t.j41(22,"form",15),t.bIt("ngSubmit",function(){return o.updateProfile()}),t.j41(23,"ion-list",16)(24,"ion-item",17)(25,"ion-label",18),t.EFF(26,"Full Name"),t.k0s(),t.nrm(27,"ion-input",19),t.k0s(),t.j41(28,"ion-item",17)(29,"ion-label",18),t.EFF(30,"Contact Number"),t.k0s(),t.nrm(31,"ion-input",20),t.k0s(),t.j41(32,"ion-item",17)(33,"ion-label",21),t.EFF(34,"Department"),t.k0s(),t.j41(35,"ion-select",22)(36,"ion-select-option",23),t.EFF(37,"College of Informatics and Computing Sciences (CICS)"),t.k0s(),t.j41(38,"ion-select-option",24),t.EFF(39,"College of Engineering Technology (CET)"),t.k0s(),t.j41(40,"ion-select-option",25),t.EFF(41,"College of Teacher Education (CTE)"),t.k0s(),t.j41(42,"ion-select-option",26),t.EFF(43,"College of Arts and Sciences (CAS)"),t.k0s(),t.j41(44,"ion-select-option",27),t.EFF(45,"College of Accountancy, Business, Economics and International Hospitality Management (CABEIHM)"),t.k0s()()()(),t.j41(46,"button",28),t.EFF(47," Save Changes "),t.k0s()()()()),2&n){let a,g;t.Y8G("translucent",!0),t.R7$(13),t.Y8G("src",(null==(a=t.bMT(14,5,o.userData$))?null:a.profilePictureUrl)||"./assets/profile-placeholder.jpg",t.B4B),t.R7$(5),t.JRh((null==(g=t.bMT(19,7,o.userData$))?null:g.fullName)||"User Name"),t.R7$(4),t.Y8G("formGroup",o.editForm),t.R7$(24),t.Y8G("disabled",o.editForm.invalid)}},dependencies:[i.qT,i.BC,i.cb,r.Jm,r.QW,r.W9,r.eU,r.iq,r.$w,r.uz,r.he,r.nf,r.Nm,r.Ip,r.BC,r.ai,r.Je,r.Gw,i.j4,i.JD,m.Jj],styles:['*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }[_ngcontent-%COMP%]::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}[_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{--tw-content: ""}html[_ngcontent-%COMP%], [_nghost-%COMP%]{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body[_ngcontent-%COMP%]{margin:0;line-height:inherit}hr[_ngcontent-%COMP%]{height:0;color:inherit;border-top-width:1px}abbr[_ngcontent-%COMP%]:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-size:inherit;font-weight:inherit}a[_ngcontent-%COMP%]{color:inherit;text-decoration:inherit}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}table[_ngcontent-%COMP%]{text-indent:0;border-color:inherit;border-collapse:collapse}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:where([type=button]), input[_ngcontent-%COMP%]:where([type=reset]), input[_ngcontent-%COMP%]:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}[_ngcontent-%COMP%]:-moz-focusring{outline:auto}[_ngcontent-%COMP%]:-moz-ui-invalid{box-shadow:none}progress[_ngcontent-%COMP%]{vertical-align:baseline}[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary[_ngcontent-%COMP%]{display:list-item}blockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{margin:0}fieldset[_ngcontent-%COMP%]{margin:0;padding:0}legend[_ngcontent-%COMP%]{padding:0}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}dialog[_ngcontent-%COMP%]{padding:0}textarea[_ngcontent-%COMP%]{resize:vertical}input[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder{opacity:1;color:#9ca3af}button[_ngcontent-%COMP%], [role=button][_ngcontent-%COMP%]{cursor:pointer}[_ngcontent-%COMP%]:disabled{cursor:default}img[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%]{display:block;vertical-align:middle}img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{max-width:100%;height:auto}[hidden][_ngcontent-%COMP%]:where(:not([hidden=until-found])){display:none}.container[_ngcontent-%COMP%]{width:100%}@media (min-width: 640px){.container[_ngcontent-%COMP%]{max-width:640px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{max-width:768px}}@media (min-width: 1024px){.container[_ngcontent-%COMP%]{max-width:1024px}}@media (min-width: 1280px){.container[_ngcontent-%COMP%]{max-width:1280px}}@media (min-width: 1536px){.container[_ngcontent-%COMP%]{max-width:1536px}}.collapse[_ngcontent-%COMP%]{visibility:collapse}.static[_ngcontent-%COMP%]{position:static}.fixed[_ngcontent-%COMP%]{position:fixed}.absolute[_ngcontent-%COMP%]{position:absolute}.relative[_ngcontent-%COMP%]{position:relative}.sticky[_ngcontent-%COMP%]{position:sticky}.inset-0[_ngcontent-%COMP%]{top:0;right:0;bottom:0;left:0}.inset-y-0[_ngcontent-%COMP%]{top:0;bottom:0}.bottom-0[_ngcontent-%COMP%]{bottom:0}.right-0[_ngcontent-%COMP%]{right:0}.right-2[_ngcontent-%COMP%]{right:.5rem}.top-2[_ngcontent-%COMP%]{top:.5rem}.z-50[_ngcontent-%COMP%]{z-index:50}.mx-auto[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.mb-2[_ngcontent-%COMP%]{margin-bottom:.5rem}.mb-3[_ngcontent-%COMP%]{margin-bottom:.75rem}.mb-4[_ngcontent-%COMP%]{margin-bottom:1rem}.mb-6[_ngcontent-%COMP%]{margin-bottom:1.5rem}.ml-0[_ngcontent-%COMP%]{margin-left:0}.ml-64[_ngcontent-%COMP%]{margin-left:16rem}.mr-2[_ngcontent-%COMP%]{margin-right:.5rem}.mr-4[_ngcontent-%COMP%]{margin-right:1rem}.mt-1[_ngcontent-%COMP%]{margin-top:.25rem}.mt-10[_ngcontent-%COMP%]{margin-top:2.5rem}.mt-2[_ngcontent-%COMP%]{margin-top:.5rem}.mt-3[_ngcontent-%COMP%]{margin-top:.75rem}.mt-4[_ngcontent-%COMP%]{margin-top:1rem}.mt-6[_ngcontent-%COMP%]{margin-top:1.5rem}.mt-7[_ngcontent-%COMP%]{margin-top:1.75rem}.block[_ngcontent-%COMP%]{display:block}.inline[_ngcontent-%COMP%]{display:inline}.flex[_ngcontent-%COMP%]{display:flex}.table[_ngcontent-%COMP%]{display:table}.grid[_ngcontent-%COMP%]{display:grid}.hidden[_ngcontent-%COMP%]{display:none}.h-10[_ngcontent-%COMP%]{height:2.5rem}.h-12[_ngcontent-%COMP%]{height:3rem}.h-32[_ngcontent-%COMP%]{height:8rem}.h-40[_ngcontent-%COMP%]{height:10rem}.h-48[_ngcontent-%COMP%]{height:12rem}.h-52[_ngcontent-%COMP%]{height:13rem}.h-64[_ngcontent-%COMP%]{height:16rem}.h-auto[_ngcontent-%COMP%]{height:auto}.h-full[_ngcontent-%COMP%]{height:100%}.max-h-40[_ngcontent-%COMP%]{max-height:10rem}.max-h-60[_ngcontent-%COMP%]{max-height:15rem}.max-h-\\__ph-0__[_ngcontent-%COMP%]{max-height:60vh}.w-10[_ngcontent-%COMP%]{width:2.5rem}.w-12[_ngcontent-%COMP%]{width:3rem}.w-full[_ngcontent-%COMP%]{width:100%}.max-w-2xl[_ngcontent-%COMP%]{max-width:42rem}.max-w-full[_ngcontent-%COMP%]{max-width:100%}.max-w-lg[_ngcontent-%COMP%]{max-width:32rem}.max-w-md[_ngcontent-%COMP%]{max-width:28rem}.max-w-none[_ngcontent-%COMP%]{max-width:none}.flex-1[_ngcontent-%COMP%]{flex:1 1 0%}.grow[_ngcontent-%COMP%]{flex-grow:1}.transform[_ngcontent-%COMP%]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}.grid-cols-1[_ngcontent-%COMP%]{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col[_ngcontent-%COMP%]{flex-direction:column}.items-start[_ngcontent-%COMP%]{align-items:flex-start}.items-center[_ngcontent-%COMP%]{align-items:center}.justify-end[_ngcontent-%COMP%]{justify-content:flex-end}.justify-center[_ngcontent-%COMP%]{justify-content:center}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.gap-2[_ngcontent-%COMP%]{gap:.5rem}.gap-4[_ngcontent-%COMP%]{gap:1rem}.gap-6[_ngcontent-%COMP%]{gap:1.5rem}.gap-8[_ngcontent-%COMP%]{gap:2rem}.space-x-2[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-3[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-6[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1.5rem * var(--tw-space-x-reverse));margin-left:calc(1.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-1[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.space-y-2[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-3[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.space-y-4[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-6[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.overflow-auto[_ngcontent-%COMP%]{overflow:auto}.overflow-hidden[_ngcontent-%COMP%]{overflow:hidden}.overflow-y-auto[_ngcontent-%COMP%]{overflow-y:auto}.rounded-full[_ngcontent-%COMP%]{border-radius:9999px}.rounded-lg[_ngcontent-%COMP%]{border-radius:.5rem}.rounded-md[_ngcontent-%COMP%]{border-radius:.375rem}.rounded-t-lg[_ngcontent-%COMP%]{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.border[_ngcontent-%COMP%]{border-width:1px}.border-2[_ngcontent-%COMP%]{border-width:2px}.border-b[_ngcontent-%COMP%]{border-bottom-width:1px}.border-r[_ngcontent-%COMP%]{border-right-width:1px}.border-t[_ngcontent-%COMP%]{border-top-width:1px}.border-dashed[_ngcontent-%COMP%]{border-style:dashed}.border-gray-200[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-gray-300[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.bg-black[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-gray-100[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-gray-200[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-gray-50[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-green-100[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity))}.bg-green-500[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.bg-red-500[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-red-600[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.bg-red-700[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))}.bg-white[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-opacity-50[_ngcontent-%COMP%]{--tw-bg-opacity: .5}.bg-opacity-70[_ngcontent-%COMP%]{--tw-bg-opacity: .7}.object-cover[_ngcontent-%COMP%]{object-fit:cover}.p-2[_ngcontent-%COMP%]{padding:.5rem}.p-3[_ngcontent-%COMP%]{padding:.75rem}.p-4[_ngcontent-%COMP%]{padding:1rem}.p-6[_ngcontent-%COMP%]{padding:1.5rem}.px-3[_ngcontent-%COMP%]{padding-left:.75rem;padding-right:.75rem}.px-4[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}.px-6[_ngcontent-%COMP%]{padding-left:1.5rem;padding-right:1.5rem}.py-2[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem}.py-3[_ngcontent-%COMP%]{padding-top:.75rem;padding-bottom:.75rem}.pl-10[_ngcontent-%COMP%]{padding-left:2.5rem}.pl-12[_ngcontent-%COMP%]{padding-left:3rem}.pl-14[_ngcontent-%COMP%]{padding-left:3.5rem}.pr-4[_ngcontent-%COMP%]{padding-right:1rem}.pt-4[_ngcontent-%COMP%]{padding-top:1rem}.text-left[_ngcontent-%COMP%]{text-align:left}.text-center[_ngcontent-%COMP%]{text-align:center}.text-2xl[_ngcontent-%COMP%]{font-size:1.5rem;line-height:2rem}.text-3xl[_ngcontent-%COMP%]{font-size:1.875rem;line-height:2.25rem}.text-lg[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem}.text-sm[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.25rem}.text-xl[_ngcontent-%COMP%]{font-size:1.25rem;line-height:1.75rem}.text-xs[_ngcontent-%COMP%]{font-size:.75rem;line-height:1rem}.font-bold[_ngcontent-%COMP%]{font-weight:700}.font-medium[_ngcontent-%COMP%]{font-weight:500}.font-semibold[_ngcontent-%COMP%]{font-weight:600}.uppercase[_ngcontent-%COMP%]{text-transform:uppercase}.lowercase[_ngcontent-%COMP%]{text-transform:lowercase}.text-black[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-blue-600[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity))}.text-gray-400[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-500[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-gray-600[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-gray-700[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-gray-800[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.text-gray-900[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.text-green-700[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity))}.text-red-500[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.text-red-600[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.text-red-700[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}.text-white[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-yellow-400[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(250 204 21 / var(--tw-text-opacity))}.placeholder-gray-500[_ngcontent-%COMP%]::placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.shadow[_ngcontent-%COMP%]{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg[_ngcontent-%COMP%]{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md[_ngcontent-%COMP%]{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm[_ngcontent-%COMP%]{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline[_ngcontent-%COMP%]{outline-style:solid}.filter[_ngcontent-%COMP%]{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-colors[_ngcontent-%COMP%]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-shadow[_ngcontent-%COMP%]{transition-property:box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform[_ngcontent-%COMP%]{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200[_ngcontent-%COMP%]{transition-duration:.2s}.duration-300[_ngcontent-%COMP%]{transition-duration:.3s}ion-header[_ngcontent-%COMP%]{--background: transparent !important}ion-toolbar[_ngcontent-%COMP%]{--background: transparent !important}ion-content[_ngcontent-%COMP%]{--background: transparent !important}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:20px;background-color:transparent}.background-logo[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;background-image:url(logo-no-text.13f4a142e83b093f.png);background-size:cover;opacity:.1;z-index:-1}.profile-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-bottom:2rem;text-align:center}.profile-image[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:50%;border:4px solid #a00;overflow:hidden;margin-bottom:1rem;position:relative;cursor:pointer}.profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.upload-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;background:#00000080;display:flex;justify-content:center;align-items:center;opacity:0;transition:opacity .3s}.profile-image[_ngcontent-%COMP%]:hover   .upload-overlay[_ngcontent-%COMP%]{opacity:1}.upload-overlay[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:2rem;color:#fff}h2[_ngcontent-%COMP%]{margin:0;font-size:1.8rem;font-weight:700}p[_ngcontent-%COMP%]{margin:0;font-size:1.2rem;color:var(--ion-color-medium)}ion-list[_ngcontent-%COMP%]{width:100%}ion-item[_ngcontent-%COMP%]{--background: #fff;border-radius:8px;margin-bottom:10px;transition:background .3s ease}ion-item[_ngcontent-%COMP%]:hover{--background: #e2e6ea}button[_ngcontent-%COMP%]{width:100%;background-color:#990008;color:#fff;border:none;border-radius:25px;padding:10px 20px;font-size:16px;font-weight:700;transition:background-color .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#a00}.hover\\:scale-105[_ngcontent-%COMP%]:hover{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:bg-green-600[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(22 163 74 / var(--tw-bg-opacity))}.hover\\:bg-red-600[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.hover\\:bg-red-700[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))}.hover\\:text-gray-800[_ngcontent-%COMP%]:hover{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.hover\\:shadow-lg[_ngcontent-%COMP%]:hover{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.focus\\:border-red-500[_ngcontent-%COMP%]:focus{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.focus\\:outline-none[_ngcontent-%COMP%]:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2[_ngcontent-%COMP%]:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-blue-400[_ngcontent-%COMP%]:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity))}.focus\\:ring-red-500[_ngcontent-%COMP%]:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(239 68 68 / var(--tw-ring-opacity))}@media (min-width: 640px){.sm\\:grid-cols-2[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width: 768px){.md\\:grid-cols-2[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3[_ngcontent-%COMP%]{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:flex-row[_ngcontent-%COMP%]{flex-direction:row}}@media (min-width: 1024px){.lg\\:ml-64[_ngcontent-%COMP%]{margin-left:16rem}.lg\\:block[_ngcontent-%COMP%]{display:block}.lg\\:hidden[_ngcontent-%COMP%]{display:none}.lg\\:h-full[_ngcontent-%COMP%]{height:100%}.lg\\:w-64[_ngcontent-%COMP%]{width:16rem}.lg\\:grid-cols-3[_ngcontent-%COMP%]{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:flex-row[_ngcontent-%COMP%]{flex-direction:row}}']}),l})()}];let u=(()=>{var e;class l{}return(e=l).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[P.iI.forChild(M),P.iI]}),l})(),O=(()=>{var e;class l{}return(e=l).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[m.MD,i.YN,r.bv,u,i.X1]}),l})()}}]);