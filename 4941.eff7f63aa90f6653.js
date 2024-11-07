"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4941],{7322:(y,h,c)=>{c.r(h),c.d(h,{ChatPageModule:()=>v});var l=c(177),d=c(4341),g=c(4742),p=c(9166),w=c(467),m=c(8645),t=c(4438),C=c(2128),_=c(1740);function P(e,a){if(1&e&&(t.j41(0,"ion-badge",13),t.EFF(1),t.k0s()),2&e){const o=t.XpG().$implicit;t.R7$(),t.SpI(" ",o.unreadCount," ")}}function M(e,a){if(1&e){const o=t.RV6();t.j41(0,"ion-item",9),t.bIt("click",function(){const r=t.eBV(o).$implicit,i=t.XpG(2);return t.Njj(i.startChat(r.otherParticipant.uid))}),t.j41(1,"ion-avatar",10),t.nrm(2,"img",11),t.k0s(),t.j41(3,"ion-label")(4,"h2"),t.EFF(5),t.k0s(),t.j41(6,"p"),t.EFF(7),t.k0s()(),t.DNE(8,P,2,1,"ion-badge",12),t.k0s()}if(2&e){const o=a.$implicit;t.R7$(2),t.Y8G("src",(null==o.otherParticipant?null:o.otherParticipant.profilePictureUrl)||"./assets/profile-placeholder.jpg",t.B4B),t.R7$(3),t.JRh((null==o.otherParticipant?null:o.otherParticipant.fullName)||"Unknown User"),t.R7$(2),t.JRh((null==o.lastMessage?null:o.lastMessage.content)||"No messages yet"),t.R7$(),t.Y8G("ngIf",o.unreadCount>0)}}function O(e,a){if(1&e&&(t.j41(0,"ion-list",7),t.DNE(1,M,9,4,"ion-item",8),t.k0s()),2&e){const o=t.XpG();t.R7$(),t.Y8G("ngForOf",o.recentChats)}}function b(e,a){if(1&e){const o=t.RV6();t.j41(0,"ion-item",16),t.bIt("click",function(){const r=t.eBV(o).$implicit,i=t.XpG(2);return t.Njj(i.startChat(r.id))}),t.j41(1,"ion-avatar",10),t.nrm(2,"img",11),t.k0s(),t.j41(3,"ion-label")(4,"h2"),t.EFF(5),t.k0s(),t.j41(6,"p"),t.EFF(7),t.k0s()(),t.nrm(8,"ion-icon",17),t.k0s()}if(2&e){const o=a.$implicit;t.R7$(2),t.Y8G("src",o.avatar,t.B4B),t.R7$(3),t.JRh(o.fullName||"Unknown User"),t.R7$(2),t.JRh(o.status||"Active now")}}function u(e,a){if(1&e&&(t.j41(0,"ion-list",14),t.DNE(1,b,9,3,"ion-item",15),t.k0s()),2&e){const o=t.XpG();t.R7$(),t.Y8G("ngForOf",o.activeUsers)}}const x=[{path:"",component:(()=>{var e;class a{constructor(n,r,i){this.chatService=n,this.authService=r,this.router=i,this.segmentValue="chats",this.recentChats=[],this.activeUsers=[],this.currentUserId=null}ngOnInit(){this.authService.getCurrentUserId().then(n=>{this.currentUserId=n,n&&this.chatService.updateUserStatus(n,!0)}),this.loadRecentChats(),this.loadActiveUsers(),this.listenForNotifications()}listenForNotifications(){m.h.addListener("pushNotificationReceived",n=>{console.log("Push notification received:",n),"chat"===n.data.type?alert(`New message from ${n.data.senderName}: ${n.body}`):"forum"===n.data.type&&alert(`New forum post: ${n.body}`)})}ngOnDestroy(){this.chatSubscription&&this.chatSubscription.unsubscribe(),this.activeUsersSubscription&&this.activeUsersSubscription.unsubscribe()}loadRecentChats(){this.chatSubscription=this.chatService.getRecentChats().subscribe(n=>{console.log("Recent chats data in ChatPage:",n),this.recentChats=n},n=>{console.error("Error loading recent chats:",n)})}loadActiveUsers(){this.activeUsersSubscription=this.chatService.getActiveUsers().subscribe(n=>{this.activeUsers=n.filter(r=>r.id!==this.currentUserId).map(r=>({...r,avatar:r.profilePictureUrl||"./assets/profile-placeholder.jpg"})),console.log("Active users:",this.activeUsers)},n=>{console.error("Error loading active users:",n)})}onSegmentChange(n){this.segmentValue=n.detail.value,"active"===this.segmentValue&&this.loadActiveUsers()}startChat(n){var r=this;return(0,w.A)(function*(){console.log("StartChat called with userId:",n);try{const i=yield r.chatService.createOrGetChat(n);console.log("Received chatId:",i),i?(console.log("Navigating to chat-room with ID:",i),r.router.navigate([`/chat-room/${i}`])):console.error("Chat ID is undefined or null, cannot navigate to chat room")}catch(i){console.error("Error in startChat:",i)}})()}}return(e=a).\u0275fac=function(n){return new(n||e)(t.rXU(C.m),t.rXU(_.k),t.rXU(p.Ix))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-chat"]],decls:12,vars:3,consts:[[1,"top-image"],["src","assets/top-chat.png","alt","SafeTalks Header"],[1,"custom-segment",3,"ngModelChange","ionChange","ngModel"],["value","chats",1,"custom-segment-button"],["value","active",1,"custom-segment-button"],["class","user-list",4,"ngIf"],["class","user-list active-section",4,"ngIf"],[1,"user-list"],["lines","none","class","user-item",3,"click",4,"ngFor","ngForOf"],["lines","none",1,"user-item",3,"click"],["slot","start"],[3,"src"],["color","danger","slot","end",4,"ngIf"],["color","danger","slot","end"],[1,"user-list","active-section"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["name","ellipse","color","success","slot","end",1,"status-icon"]],template:function(n,r){1&n&&(t.j41(0,"ion-content")(1,"div",0),t.nrm(2,"img",1),t.k0s(),t.j41(3,"ion-segment",2),t.mxI("ngModelChange",function(s){return t.DH7(r.segmentValue,s)||(r.segmentValue=s),s}),t.bIt("ionChange",function(s){return r.onSegmentChange(s)}),t.j41(4,"ion-segment-button",3)(5,"ion-label"),t.EFF(6,"Chats"),t.k0s()(),t.j41(7,"ion-segment-button",4)(8,"ion-label"),t.EFF(9,"Active"),t.k0s()()(),t.DNE(10,O,2,1,"ion-list",5)(11,u,2,1,"ion-list",6),t.k0s()),2&n&&(t.R7$(3),t.R50("ngModel",r.segmentValue),t.R7$(7),t.Y8G("ngIf","chats"===r.segmentValue),t.R7$(),t.Y8G("ngIf","active"===r.segmentValue))},dependencies:[l.Sq,l.bT,d.BC,d.vS,g.mC,g.In,g.W9,g.iq,g.uz,g.he,g.nf,g.Gp,g.eP,g.Je],styles:['*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }[_ngcontent-%COMP%]::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}[_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{--tw-content: ""}html[_ngcontent-%COMP%], [_nghost-%COMP%]{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body[_ngcontent-%COMP%]{margin:0;line-height:inherit}hr[_ngcontent-%COMP%]{height:0;color:inherit;border-top-width:1px}abbr[_ngcontent-%COMP%]:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-size:inherit;font-weight:inherit}a[_ngcontent-%COMP%]{color:inherit;text-decoration:inherit}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}table[_ngcontent-%COMP%]{text-indent:0;border-color:inherit;border-collapse:collapse}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:where([type=button]), input[_ngcontent-%COMP%]:where([type=reset]), input[_ngcontent-%COMP%]:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}[_ngcontent-%COMP%]:-moz-focusring{outline:auto}[_ngcontent-%COMP%]:-moz-ui-invalid{box-shadow:none}progress[_ngcontent-%COMP%]{vertical-align:baseline}[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary[_ngcontent-%COMP%]{display:list-item}blockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{margin:0}fieldset[_ngcontent-%COMP%]{margin:0;padding:0}legend[_ngcontent-%COMP%]{padding:0}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}dialog[_ngcontent-%COMP%]{padding:0}textarea[_ngcontent-%COMP%]{resize:vertical}input[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder{opacity:1;color:#9ca3af}button[_ngcontent-%COMP%], [role=button][_ngcontent-%COMP%]{cursor:pointer}[_ngcontent-%COMP%]:disabled{cursor:default}img[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%]{display:block;vertical-align:middle}img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{max-width:100%;height:auto}[hidden][_ngcontent-%COMP%]:where(:not([hidden=until-found])){display:none}.container[_ngcontent-%COMP%]{width:100%}@media (min-width: 640px){.container[_ngcontent-%COMP%]{max-width:640px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{max-width:768px}}@media (min-width: 1024px){.container[_ngcontent-%COMP%]{max-width:1024px}}@media (min-width: 1280px){.container[_ngcontent-%COMP%]{max-width:1280px}}@media (min-width: 1536px){.container[_ngcontent-%COMP%]{max-width:1536px}}.collapse[_ngcontent-%COMP%]{visibility:collapse}.static[_ngcontent-%COMP%]{position:static}.fixed[_ngcontent-%COMP%]{position:fixed}.absolute[_ngcontent-%COMP%]{position:absolute}.relative[_ngcontent-%COMP%]{position:relative}.sticky[_ngcontent-%COMP%]{position:sticky}.inset-0[_ngcontent-%COMP%]{top:0;right:0;bottom:0;left:0}.inset-y-0[_ngcontent-%COMP%]{top:0;bottom:0}.bottom-0[_ngcontent-%COMP%]{bottom:0}.right-0[_ngcontent-%COMP%]{right:0}.right-2[_ngcontent-%COMP%]{right:.5rem}.top-2[_ngcontent-%COMP%]{top:.5rem}.z-50[_ngcontent-%COMP%]{z-index:50}.mx-auto[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.mb-2[_ngcontent-%COMP%]{margin-bottom:.5rem}.mb-3[_ngcontent-%COMP%]{margin-bottom:.75rem}.mb-4[_ngcontent-%COMP%]{margin-bottom:1rem}.mb-6[_ngcontent-%COMP%]{margin-bottom:1.5rem}.ml-0[_ngcontent-%COMP%]{margin-left:0}.ml-64[_ngcontent-%COMP%]{margin-left:16rem}.mr-2[_ngcontent-%COMP%]{margin-right:.5rem}.mr-4[_ngcontent-%COMP%]{margin-right:1rem}.mt-1[_ngcontent-%COMP%]{margin-top:.25rem}.mt-10[_ngcontent-%COMP%]{margin-top:2.5rem}.mt-2[_ngcontent-%COMP%]{margin-top:.5rem}.mt-3[_ngcontent-%COMP%]{margin-top:.75rem}.mt-4[_ngcontent-%COMP%]{margin-top:1rem}.mt-6[_ngcontent-%COMP%]{margin-top:1.5rem}.mt-7[_ngcontent-%COMP%]{margin-top:1.75rem}.block[_ngcontent-%COMP%]{display:block}.inline[_ngcontent-%COMP%]{display:inline}.flex[_ngcontent-%COMP%]{display:flex}.table[_ngcontent-%COMP%]{display:table}.grid[_ngcontent-%COMP%]{display:grid}.hidden[_ngcontent-%COMP%]{display:none}.h-10[_ngcontent-%COMP%]{height:2.5rem}.h-12[_ngcontent-%COMP%]{height:3rem}.h-32[_ngcontent-%COMP%]{height:8rem}.h-40[_ngcontent-%COMP%]{height:10rem}.h-48[_ngcontent-%COMP%]{height:12rem}.h-52[_ngcontent-%COMP%]{height:13rem}.h-64[_ngcontent-%COMP%]{height:16rem}.h-auto[_ngcontent-%COMP%]{height:auto}.h-full[_ngcontent-%COMP%]{height:100%}.max-h-40[_ngcontent-%COMP%]{max-height:10rem}.max-h-60[_ngcontent-%COMP%]{max-height:15rem}.max-h-\\__ph-0__[_ngcontent-%COMP%]{max-height:60vh}.w-10[_ngcontent-%COMP%]{width:2.5rem}.w-12[_ngcontent-%COMP%]{width:3rem}.w-full[_ngcontent-%COMP%]{width:100%}.max-w-2xl[_ngcontent-%COMP%]{max-width:42rem}.max-w-full[_ngcontent-%COMP%]{max-width:100%}.max-w-lg[_ngcontent-%COMP%]{max-width:32rem}.max-w-md[_ngcontent-%COMP%]{max-width:28rem}.max-w-none[_ngcontent-%COMP%]{max-width:none}.flex-1[_ngcontent-%COMP%]{flex:1 1 0%}.grow[_ngcontent-%COMP%]{flex-grow:1}.transform[_ngcontent-%COMP%]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}.grid-cols-1[_ngcontent-%COMP%]{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col[_ngcontent-%COMP%]{flex-direction:column}.items-start[_ngcontent-%COMP%]{align-items:flex-start}.items-center[_ngcontent-%COMP%]{align-items:center}.justify-end[_ngcontent-%COMP%]{justify-content:flex-end}.justify-center[_ngcontent-%COMP%]{justify-content:center}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.gap-2[_ngcontent-%COMP%]{gap:.5rem}.gap-4[_ngcontent-%COMP%]{gap:1rem}.gap-6[_ngcontent-%COMP%]{gap:1.5rem}.gap-8[_ngcontent-%COMP%]{gap:2rem}.space-x-2[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-3[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-6[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1.5rem * var(--tw-space-x-reverse));margin-left:calc(1.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-1[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.space-y-2[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-3[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.space-y-4[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-6[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.overflow-auto[_ngcontent-%COMP%]{overflow:auto}.overflow-hidden[_ngcontent-%COMP%]{overflow:hidden}.overflow-y-auto[_ngcontent-%COMP%]{overflow-y:auto}.rounded-full[_ngcontent-%COMP%]{border-radius:9999px}.rounded-lg[_ngcontent-%COMP%]{border-radius:.5rem}.rounded-md[_ngcontent-%COMP%]{border-radius:.375rem}.rounded-t-lg[_ngcontent-%COMP%]{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.border[_ngcontent-%COMP%]{border-width:1px}.border-2[_ngcontent-%COMP%]{border-width:2px}.border-b[_ngcontent-%COMP%]{border-bottom-width:1px}.border-r[_ngcontent-%COMP%]{border-right-width:1px}.border-t[_ngcontent-%COMP%]{border-top-width:1px}.border-dashed[_ngcontent-%COMP%]{border-style:dashed}.border-gray-200[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-gray-300[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.bg-black[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-gray-100[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-gray-200[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-gray-50[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-green-100[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity))}.bg-green-500[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.bg-red-500[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-red-600[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.bg-red-700[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))}.bg-white[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-opacity-50[_ngcontent-%COMP%]{--tw-bg-opacity: .5}.bg-opacity-70[_ngcontent-%COMP%]{--tw-bg-opacity: .7}.object-cover[_ngcontent-%COMP%]{object-fit:cover}.p-2[_ngcontent-%COMP%]{padding:.5rem}.p-3[_ngcontent-%COMP%]{padding:.75rem}.p-4[_ngcontent-%COMP%]{padding:1rem}.p-6[_ngcontent-%COMP%]{padding:1.5rem}.px-3[_ngcontent-%COMP%]{padding-left:.75rem;padding-right:.75rem}.px-4[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}.px-6[_ngcontent-%COMP%]{padding-left:1.5rem;padding-right:1.5rem}.py-2[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem}.py-3[_ngcontent-%COMP%]{padding-top:.75rem;padding-bottom:.75rem}.pl-10[_ngcontent-%COMP%]{padding-left:2.5rem}.pl-12[_ngcontent-%COMP%]{padding-left:3rem}.pl-14[_ngcontent-%COMP%]{padding-left:3.5rem}.pr-4[_ngcontent-%COMP%]{padding-right:1rem}.pt-4[_ngcontent-%COMP%]{padding-top:1rem}.text-left[_ngcontent-%COMP%]{text-align:left}.text-center[_ngcontent-%COMP%]{text-align:center}.text-2xl[_ngcontent-%COMP%]{font-size:1.5rem;line-height:2rem}.text-3xl[_ngcontent-%COMP%]{font-size:1.875rem;line-height:2.25rem}.text-lg[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem}.text-sm[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.25rem}.text-xl[_ngcontent-%COMP%]{font-size:1.25rem;line-height:1.75rem}.text-xs[_ngcontent-%COMP%]{font-size:.75rem;line-height:1rem}.font-bold[_ngcontent-%COMP%]{font-weight:700}.font-medium[_ngcontent-%COMP%]{font-weight:500}.font-semibold[_ngcontent-%COMP%]{font-weight:600}.uppercase[_ngcontent-%COMP%]{text-transform:uppercase}.lowercase[_ngcontent-%COMP%]{text-transform:lowercase}.text-black[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-blue-600[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity))}.text-gray-400[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-500[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-gray-600[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-gray-700[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-gray-800[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.text-gray-900[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.text-green-700[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity))}.text-red-500[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.text-red-600[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.text-red-700[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}.text-white[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-yellow-400[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(250 204 21 / var(--tw-text-opacity))}.placeholder-gray-500[_ngcontent-%COMP%]::placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.shadow[_ngcontent-%COMP%]{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg[_ngcontent-%COMP%]{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md[_ngcontent-%COMP%]{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm[_ngcontent-%COMP%]{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline[_ngcontent-%COMP%]{outline-style:solid}.filter[_ngcontent-%COMP%]{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-colors[_ngcontent-%COMP%]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-shadow[_ngcontent-%COMP%]{transition-property:box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform[_ngcontent-%COMP%]{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200[_ngcontent-%COMP%]{transition-duration:.2s}.duration-300[_ngcontent-%COMP%]{transition-duration:.3s}ion-content[_ngcontent-%COMP%]{--background: #f4f5f8}.top-image[_ngcontent-%COMP%]{background:#f4f5f8;padding:0;text-align:center}.top-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:300px;display:block;margin:20px auto 0}.custom-segment[_ngcontent-%COMP%]{--background: #ffffff;border-radius:20px;margin:16px;height:44px;width:90%;box-shadow:0 2px 10px #0000001a}.custom-segment-button[_ngcontent-%COMP%]{--background-checked: #900;--color-checked: #ffffff;--color: #86888f;--indicator-color: transparent;--border-radius: 20px;min-height:40px;text-transform:none;font-size:14px;font-weight:500}.user-list[_ngcontent-%COMP%]{background:#fff;margin:16px;border-radius:10px;padding:8px 0}.user-item[_ngcontent-%COMP%]{--padding-start: 16px;--padding-end: 16px;--inner-padding-end: 0;--background: transparent;--min-height: 70px}.user-item[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid #f4f5f8}.user-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:48px;height:48px;margin-right:16px}.user-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;border:2px solid #900;width:100%;height:100%;object-fit:cover}.user-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:#000;margin:0 0 4px}.user-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#86888f;margin:0}.user-item[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]{font-size:12px;margin-left:8px}.active-section[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:48px;height:48px;margin-right:16px}.active-section[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;border:2px solid #900;width:100%;height:100%;object-fit:cover}.unread-badge[_ngcontent-%COMP%]{background-color:#d9534f;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;position:absolute;top:10px;right:10px}ion-badge[_ngcontent-%COMP%]{font-size:12px;padding:4px;min-width:20px;height:20px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center}.hover\\:scale-105[_ngcontent-%COMP%]:hover{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:bg-green-600[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(22 163 74 / var(--tw-bg-opacity))}.hover\\:bg-red-600[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.hover\\:bg-red-700[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))}.hover\\:text-gray-800[_ngcontent-%COMP%]:hover{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.hover\\:shadow-lg[_ngcontent-%COMP%]:hover{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.focus\\:border-red-500[_ngcontent-%COMP%]:focus{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.focus\\:outline-none[_ngcontent-%COMP%]:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2[_ngcontent-%COMP%]:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-blue-400[_ngcontent-%COMP%]:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity))}.focus\\:ring-red-500[_ngcontent-%COMP%]:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(239 68 68 / var(--tw-ring-opacity))}@media (min-width: 640px){.sm\\:grid-cols-2[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width: 768px){.md\\:grid-cols-2[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3[_ngcontent-%COMP%]{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:flex-row[_ngcontent-%COMP%]{flex-direction:row}}@media (min-width: 1024px){.lg\\:ml-64[_ngcontent-%COMP%]{margin-left:16rem}.lg\\:block[_ngcontent-%COMP%]{display:block}.lg\\:hidden[_ngcontent-%COMP%]{display:none}.lg\\:h-full[_ngcontent-%COMP%]{height:100%}.lg\\:w-64[_ngcontent-%COMP%]{width:16rem}.lg\\:grid-cols-3[_ngcontent-%COMP%]{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:flex-row[_ngcontent-%COMP%]{flex-direction:row}}']}),a})()}];let f=(()=>{var e;class a{}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[p.iI.forChild(x),p.iI]}),a})(),v=(()=>{var e;class a{}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[l.MD,d.YN,g.bv,f]}),a})()}}]);