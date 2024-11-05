"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9503],{9503:(O,w,i)=>{i.r(w),i.d(w,{ReportPageModule:()=>_});var m=i(177),l=i(4341),r=i(4742),p=i(9166),h=i(467),t=i(4438),P=i(2123);function b(n,c){if(1&n&&(t.j41(0,"div",22),t.nrm(1,"img",23),t.k0s()),2&n){const s=t.XpG();t.R7$(),t.Y8G("src",s.imagePreview,t.B4B)}}const M=[{path:"",component:(()=>{var n;class c{constructor(e,o){this.reportService=e,this.router=o,this.report={title:"",description:""},this.selectedFile=null,this.imagePreview=null}goBack(){this.router.navigate(["/student-dashboard/profile"])}selectImage(){document.getElementById("fileInput").click()}onFileSelected(e){const o=e.target;if(o.files&&o.files.length>0){this.selectedFile=o.files[0];const g=new FileReader;g.onload=d=>{var a;this.imagePreview=null===(a=d.target)||void 0===a?void 0:a.result},g.readAsDataURL(this.selectedFile)}}submitReport(){var e=this;return(0,h.A)(function*(){if(e.report.title&&e.report.description)try{yield e.reportService.createReport(e.report,e.selectedFile),alert("Report submitted successfully!"),e.router.navigate(["/student-dashboard/profile"])}catch(o){console.error("Error submitting report:",o),alert("There was an error submitting your report. Please try again.")}else alert("Please fill out the title and description.")})()}}return(n=c).\u0275fac=function(e){return new(e||n)(t.rXU(P.G),t.rXU(p.Ix))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-report"]],decls:32,vars:3,consts:[["fileInput",""],[1,"bg-red-700"],["color","danger"],["slot","start"],["fill","clear",3,"click"],["name","arrow-back-outline","slot","icon-only",1,"text-white"],[1,"text-white","font-bold"],[1,"ion-padding"],[1,"background-logo"],[1,"report-container","max-w-md","mx-auto","bg-white","rounded-lg","shadow-lg","p-6"],[1,"text-2xl","text-center","font-bold","text-red-700","mb-2"],[1,"text-center","text-sm","text-gray-500","mb-6"],[1,"rounded-input","mb-4"],["position","stacked",1,"text-gray-700"],["name","title","required","",3,"ngModelChange","ngModel"],["name","description","placeholder","Describe the issue...","required","",3,"ngModelChange","ngModel"],[1,"mb-6"],[1,"block","text-gray-700","mb-2"],["expand","block","fill","outline","color","medium",1,"rounded-full",3,"click"],["type","file","id","fileInput",1,"hidden",3,"change"],["class","image-preview-container mt-4 mb-4 flex justify-center",4,"ngIf"],["expand","block","fill","solid","color","danger",1,"text-white","font-semibold","rounded-full",3,"click"],[1,"image-preview-container","mt-4","mb-4","flex","justify-center"],["alt","Image Preview",1,"rounded-md","max-h-40","object-cover",3,"src"]],template:function(e,o){if(1&e){const g=t.RV6();t.j41(0,"ion-header",1)(1,"ion-toolbar",2)(2,"ion-buttons",3)(3,"ion-button",4),t.bIt("click",function(){return t.eBV(g),t.Njj(o.goBack())}),t.nrm(4,"ion-icon",5),t.k0s()(),t.j41(5,"ion-title",6),t.EFF(6,"Report Issue"),t.k0s()()(),t.j41(7,"ion-content",7),t.nrm(8,"div",8),t.j41(9,"div",9)(10,"h2",10),t.EFF(11," Report Issue "),t.k0s(),t.j41(12,"p",11),t.EFF(13," Help us improve by reporting an issue "),t.k0s(),t.j41(14,"ion-item",12)(15,"ion-label",13),t.EFF(16,"Title"),t.k0s(),t.j41(17,"ion-input",14),t.mxI("ngModelChange",function(a){return t.eBV(g),t.DH7(o.report.title,a)||(o.report.title=a),t.Njj(a)}),t.k0s()(),t.j41(18,"ion-item",12)(19,"ion-label",13),t.EFF(20,"Description"),t.k0s(),t.j41(21,"ion-textarea",15),t.mxI("ngModelChange",function(a){return t.eBV(g),t.DH7(o.report.description,a)||(o.report.description=a),t.Njj(a)}),t.k0s()(),t.j41(22,"div",16)(23,"label",17),t.EFF(24,"Upload Image (Optional)"),t.k0s(),t.j41(25,"ion-button",18),t.bIt("click",function(){return t.eBV(g),t.Njj(o.selectImage())}),t.EFF(26," Add Image "),t.k0s(),t.j41(27,"input",19,0),t.bIt("change",function(a){return t.eBV(g),t.Njj(o.onFileSelected(a))}),t.k0s(),t.DNE(29,b,2,1,"div",20),t.k0s(),t.j41(30,"ion-button",21),t.bIt("click",function(){return t.eBV(g),t.Njj(o.submitReport())}),t.EFF(31," Submit Report "),t.k0s()()()}2&e&&(t.R7$(17),t.R50("ngModel",o.report.title),t.R7$(4),t.R50("ngModel",o.report.description),t.R7$(8),t.Y8G("ngIf",o.imagePreview))},dependencies:[m.bT,l.BC,l.YS,l.vS,r.Jm,r.QW,r.W9,r.eU,r.iq,r.$w,r.uz,r.he,r.nc,r.BC,r.ai,r.Gw],styles:['*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }[_ngcontent-%COMP%]::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}[_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{--tw-content: ""}html[_ngcontent-%COMP%], [_nghost-%COMP%]{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body[_ngcontent-%COMP%]{margin:0;line-height:inherit}hr[_ngcontent-%COMP%]{height:0;color:inherit;border-top-width:1px}abbr[_ngcontent-%COMP%]:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-size:inherit;font-weight:inherit}a[_ngcontent-%COMP%]{color:inherit;text-decoration:inherit}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}table[_ngcontent-%COMP%]{text-indent:0;border-color:inherit;border-collapse:collapse}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:where([type=button]), input[_ngcontent-%COMP%]:where([type=reset]), input[_ngcontent-%COMP%]:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}[_ngcontent-%COMP%]:-moz-focusring{outline:auto}[_ngcontent-%COMP%]:-moz-ui-invalid{box-shadow:none}progress[_ngcontent-%COMP%]{vertical-align:baseline}[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary[_ngcontent-%COMP%]{display:list-item}blockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{margin:0}fieldset[_ngcontent-%COMP%]{margin:0;padding:0}legend[_ngcontent-%COMP%]{padding:0}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}dialog[_ngcontent-%COMP%]{padding:0}textarea[_ngcontent-%COMP%]{resize:vertical}input[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder{opacity:1;color:#9ca3af}button[_ngcontent-%COMP%], [role=button][_ngcontent-%COMP%]{cursor:pointer}[_ngcontent-%COMP%]:disabled{cursor:default}img[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%]{display:block;vertical-align:middle}img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{max-width:100%;height:auto}[hidden][_ngcontent-%COMP%]:where(:not([hidden=until-found])){display:none}.container[_ngcontent-%COMP%]{width:100%}@media (min-width: 640px){.container[_ngcontent-%COMP%]{max-width:640px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{max-width:768px}}@media (min-width: 1024px){.container[_ngcontent-%COMP%]{max-width:1024px}}@media (min-width: 1280px){.container[_ngcontent-%COMP%]{max-width:1280px}}@media (min-width: 1536px){.container[_ngcontent-%COMP%]{max-width:1536px}}.collapse[_ngcontent-%COMP%]{visibility:collapse}.static[_ngcontent-%COMP%]{position:static}.fixed[_ngcontent-%COMP%]{position:fixed}.absolute[_ngcontent-%COMP%]{position:absolute}.relative[_ngcontent-%COMP%]{position:relative}.sticky[_ngcontent-%COMP%]{position:sticky}.inset-0[_ngcontent-%COMP%]{top:0;right:0;bottom:0;left:0}.inset-y-0[_ngcontent-%COMP%]{top:0;bottom:0}.bottom-0[_ngcontent-%COMP%]{bottom:0}.right-0[_ngcontent-%COMP%]{right:0}.mx-auto[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.mb-2[_ngcontent-%COMP%]{margin-bottom:.5rem}.mb-3[_ngcontent-%COMP%]{margin-bottom:.75rem}.mb-4[_ngcontent-%COMP%]{margin-bottom:1rem}.mb-6[_ngcontent-%COMP%]{margin-bottom:1.5rem}.ml-0[_ngcontent-%COMP%]{margin-left:0}.ml-64[_ngcontent-%COMP%]{margin-left:16rem}.mr-2[_ngcontent-%COMP%]{margin-right:.5rem}.mt-1[_ngcontent-%COMP%]{margin-top:.25rem}.mt-10[_ngcontent-%COMP%]{margin-top:2.5rem}.mt-2[_ngcontent-%COMP%]{margin-top:.5rem}.mt-3[_ngcontent-%COMP%]{margin-top:.75rem}.mt-4[_ngcontent-%COMP%]{margin-top:1rem}.mt-6[_ngcontent-%COMP%]{margin-top:1.5rem}.mt-7[_ngcontent-%COMP%]{margin-top:1.75rem}.block[_ngcontent-%COMP%]{display:block}.inline[_ngcontent-%COMP%]{display:inline}.flex[_ngcontent-%COMP%]{display:flex}.table[_ngcontent-%COMP%]{display:table}.grid[_ngcontent-%COMP%]{display:grid}.h-10[_ngcontent-%COMP%]{height:2.5rem}.h-12[_ngcontent-%COMP%]{height:3rem}.h-32[_ngcontent-%COMP%]{height:8rem}.h-40[_ngcontent-%COMP%]{height:10rem}.h-48[_ngcontent-%COMP%]{height:12rem}.h-52[_ngcontent-%COMP%]{height:13rem}.h-64[_ngcontent-%COMP%]{height:16rem}.h-auto[_ngcontent-%COMP%]{height:auto}.h-full[_ngcontent-%COMP%]{height:100%}.max-h-40[_ngcontent-%COMP%]{max-height:10rem}.max-h-60[_ngcontent-%COMP%]{max-height:15rem}.max-h-\\__ph-0__[_ngcontent-%COMP%]{max-height:60vh}.w-10[_ngcontent-%COMP%]{width:2.5rem}.w-12[_ngcontent-%COMP%]{width:3rem}.w-full[_ngcontent-%COMP%]{width:100%}.max-w-2xl[_ngcontent-%COMP%]{max-width:42rem}.max-w-full[_ngcontent-%COMP%]{max-width:100%}.max-w-lg[_ngcontent-%COMP%]{max-width:32rem}.max-w-md[_ngcontent-%COMP%]{max-width:28rem}.max-w-none[_ngcontent-%COMP%]{max-width:none}.flex-1[_ngcontent-%COMP%]{flex:1 1 0%}.grow[_ngcontent-%COMP%]{flex-grow:1}.transform[_ngcontent-%COMP%]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}.grid-cols-1[_ngcontent-%COMP%]{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col[_ngcontent-%COMP%]{flex-direction:column}.items-start[_ngcontent-%COMP%]{align-items:flex-start}.items-center[_ngcontent-%COMP%]{align-items:center}.justify-end[_ngcontent-%COMP%]{justify-content:flex-end}.justify-center[_ngcontent-%COMP%]{justify-content:center}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.gap-2[_ngcontent-%COMP%]{gap:.5rem}.gap-4[_ngcontent-%COMP%]{gap:1rem}.gap-6[_ngcontent-%COMP%]{gap:1.5rem}.gap-8[_ngcontent-%COMP%]{gap:2rem}.space-x-2[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-3[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-6[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1.5rem * var(--tw-space-x-reverse));margin-left:calc(1.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-1[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.space-y-2[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-3[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.space-y-4[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-6[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.overflow-auto[_ngcontent-%COMP%]{overflow:auto}.overflow-hidden[_ngcontent-%COMP%]{overflow:hidden}.overflow-y-auto[_ngcontent-%COMP%]{overflow-y:auto}.rounded-full[_ngcontent-%COMP%]{border-radius:9999px}.rounded-lg[_ngcontent-%COMP%]{border-radius:.5rem}.rounded-md[_ngcontent-%COMP%]{border-radius:.375rem}.rounded-t-lg[_ngcontent-%COMP%]{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.border[_ngcontent-%COMP%]{border-width:1px}.border-2[_ngcontent-%COMP%]{border-width:2px}.border-b[_ngcontent-%COMP%]{border-bottom-width:1px}.border-r[_ngcontent-%COMP%]{border-right-width:1px}.border-t[_ngcontent-%COMP%]{border-top-width:1px}.border-dashed[_ngcontent-%COMP%]{border-style:dashed}.border-gray-200[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-gray-300[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.bg-black[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-gray-100[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-gray-200[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-gray-50[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-green-500[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.bg-red-500[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-red-600[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.bg-red-700[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))}.bg-white[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-opacity-50[_ngcontent-%COMP%]{--tw-bg-opacity: .5}.object-cover[_ngcontent-%COMP%]{object-fit:cover}.p-2[_ngcontent-%COMP%]{padding:.5rem}.p-3[_ngcontent-%COMP%]{padding:.75rem}.p-4[_ngcontent-%COMP%]{padding:1rem}.p-6[_ngcontent-%COMP%]{padding:1.5rem}.px-3[_ngcontent-%COMP%]{padding-left:.75rem;padding-right:.75rem}.px-4[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}.px-6[_ngcontent-%COMP%]{padding-left:1.5rem;padding-right:1.5rem}.py-2[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem}.py-3[_ngcontent-%COMP%]{padding-top:.75rem;padding-bottom:.75rem}.pl-10[_ngcontent-%COMP%]{padding-left:2.5rem}.pl-12[_ngcontent-%COMP%]{padding-left:3rem}.pl-14[_ngcontent-%COMP%]{padding-left:3.5rem}.pr-4[_ngcontent-%COMP%]{padding-right:1rem}.pt-4[_ngcontent-%COMP%]{padding-top:1rem}.text-left[_ngcontent-%COMP%]{text-align:left}.text-center[_ngcontent-%COMP%]{text-align:center}.text-2xl[_ngcontent-%COMP%]{font-size:1.5rem;line-height:2rem}.text-3xl[_ngcontent-%COMP%]{font-size:1.875rem;line-height:2.25rem}.text-lg[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem}.text-sm[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.25rem}.text-xl[_ngcontent-%COMP%]{font-size:1.25rem;line-height:1.75rem}.text-xs[_ngcontent-%COMP%]{font-size:.75rem;line-height:1rem}.font-bold[_ngcontent-%COMP%]{font-weight:700}.font-medium[_ngcontent-%COMP%]{font-weight:500}.font-semibold[_ngcontent-%COMP%]{font-weight:600}.text-black[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-blue-600[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity))}.text-gray-400[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-500[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-gray-600[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-gray-700[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-gray-800[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.text-gray-900[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.text-red-600[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.text-red-700[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}.text-white[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-yellow-400[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(250 204 21 / var(--tw-text-opacity))}.placeholder-gray-500[_ngcontent-%COMP%]::placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.shadow[_ngcontent-%COMP%]{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg[_ngcontent-%COMP%]{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md[_ngcontent-%COMP%]{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm[_ngcontent-%COMP%]{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline[_ngcontent-%COMP%]{outline-style:solid}.filter[_ngcontent-%COMP%]{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-colors[_ngcontent-%COMP%]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-shadow[_ngcontent-%COMP%]{transition-property:box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform[_ngcontent-%COMP%]{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200[_ngcontent-%COMP%]{transition-duration:.2s}.duration-300[_ngcontent-%COMP%]{transition-duration:.3s}ion-header[_ngcontent-%COMP%]{--background: #990008;--color: white}ion-content[_ngcontent-%COMP%]{background-color:#f7f7f7;position:relative}.background-logo[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;background-image:url(logo-no-text.13f4a142e83b093f.png);background-size:cover;background-position:center;opacity:.1;z-index:-1}.report-container[_ngcontent-%COMP%]{position:relative;max-width:28rem;margin:auto;background-color:#fff;padding:2rem;border-radius:1rem;box-shadow:0 4px 12px #00000026}.text-red-700[_ngcontent-%COMP%]{color:#990008}.rounded-input[_ngcontent-%COMP%]{--background: #f1f1f1;--border-radius: .75rem;padding:.5rem}ion-item.rounded-input[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-item.rounded-input[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{border-radius:.75rem;background-color:#f1f1f1}ion-button[_ngcontent-%COMP%]{font-weight:700}.hidden[_ngcontent-%COMP%]{display:none}.image-preview-container[_ngcontent-%COMP%]{text-align:center}.image-preview-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:150px;border-radius:8px;object-fit:cover}.hover\\:scale-105[_ngcontent-%COMP%]:hover{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:bg-green-600[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(22 163 74 / var(--tw-bg-opacity))}.hover\\:bg-red-600[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.hover\\:bg-red-700[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))}.hover\\:text-gray-800[_ngcontent-%COMP%]:hover{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.hover\\:shadow-lg[_ngcontent-%COMP%]:hover{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.focus\\:border-red-500[_ngcontent-%COMP%]:focus{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.focus\\:outline-none[_ngcontent-%COMP%]:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2[_ngcontent-%COMP%]:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-blue-400[_ngcontent-%COMP%]:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity))}.focus\\:ring-red-500[_ngcontent-%COMP%]:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(239 68 68 / var(--tw-ring-opacity))}@media (min-width: 640px){.sm\\:grid-cols-2[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width: 768px){.md\\:grid-cols-2[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3[_ngcontent-%COMP%]{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:flex-row[_ngcontent-%COMP%]{flex-direction:row}}@media (min-width: 1024px){.lg\\:ml-64[_ngcontent-%COMP%]{margin-left:16rem}.lg\\:block[_ngcontent-%COMP%]{display:block}.lg\\:hidden[_ngcontent-%COMP%]{display:none}.lg\\:h-full[_ngcontent-%COMP%]{height:100%}.lg\\:w-64[_ngcontent-%COMP%]{width:16rem}.lg\\:grid-cols-3[_ngcontent-%COMP%]{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:flex-row[_ngcontent-%COMP%]{flex-direction:row}}']}),c})()}];let C=(()=>{var n;class c{}return(n=c).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[p.iI.forChild(M),p.iI]}),c})(),_=(()=>{var n;class c{}return(n=c).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[m.MD,l.YN,r.bv,C]}),c})()}}]);