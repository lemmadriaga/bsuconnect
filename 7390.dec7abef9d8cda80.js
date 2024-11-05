"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7390],{7390:(w,d,a)=>{a.r(d),a.d(d,{ChatRoomModule:()=>v});var l=a(177),h=a(4341),i=a(4742),u=a(9166),m=a(467),p=a(8455),n=a(4438),C=a(2128),M=a(1740);const O=["messageInput"],_=o=>({"own-message":o});function P(o,g){if(1&o&&(n.j41(0,"div",16)(1,"div",17)(2,"p"),n.EFF(3),n.k0s(),n.j41(4,"small",18),n.EFF(5),n.nI1(6,"date"),n.k0s()()()),2&o){const r=g.$implicit,t=n.XpG();n.Y8G("ngClass",n.eq3(6,_,r.senderId===t.currentUserId)),n.R7$(3),n.JRh(r.content),n.R7$(2),n.JRh(n.i5U(6,3,r.timestamp,"short"))}}function f(o,g){if(1&o&&(n.j41(0,"div",19),n.EFF(1),n.k0s()),2&o){const r=n.XpG();n.R7$(),n.SpI(" ",r.newMessage.length,"/1000 ")}}const b=[{path:"",component:(()=>{var o;class g{constructor(t,e,s,c){this.route=t,this.chatService=e,this.authService=s,this.location=c,this.messages=[],this.newMessage="",this.maxMessageLength=1e3,this.currentUserId=null,this.subscriptions=[]}ngOnInit(){this.chatId=this.route.snapshot.paramMap.get("id"),this.loadMessages(),this.loadOtherUser(),this.subscriptions.push((0,p.H)(this.authService.getCurrentUserId()).subscribe(t=>{this.currentUserId=t,t&&this.chatService.updateUserStatus(t,!0),console.log("Current user ID:",this.currentUserId)}))}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}goBack(){this.location.back()}loadMessages(){this.subscriptions.push(this.chatService.getMessages(this.chatId).subscribe(t=>{this.messages=t.map(e=>{var s;return{...e,timestamp:null===(s=e.timestamp)||void 0===s?void 0:s.toDate()}}),this.scrollToBottom()},t=>{console.error("Error loading messages:",t)}))}loadOtherUser(){this.subscriptions.push(this.chatService.getOtherUser(this.chatId).subscribe(t=>{this.otherUser=t},t=>{console.error("Error loading other user:",t)}))}sendMessage(){var t=this;return(0,m.A)(function*(){var e;if(null!==(e=t.newMessage)&&void 0!==e&&e.trim()){const s=t.newMessage.trim();t.newMessage="";try{yield t.chatService.sendMessage(t.chatId,s).toPromise(),(yield t.messageInput.getInputElement()).style.height="auto",t.scrollToBottom()}catch(c){console.error("Error sending message:",c)}}})()}onInputChange(t){var e=this;return(0,m.A)(function*(){const s=yield e.messageInput.getInputElement();s.style.height="auto",s.style.height=s.scrollHeight+"px",e.newMessage.length>e.maxMessageLength&&(e.newMessage=e.newMessage.substring(0,e.maxMessageLength)),e.scrollToBottom()})()}scrollToBottom(t=300){setTimeout(()=>{var e;null===(e=this.content)||void 0===e||e.scrollToBottom(t)},100)}ionViewDidEnter(){var t=this;return(0,m.A)(function*(){t.scrollToBottom(0),setTimeout(()=>{var e;null===(e=t.messageInput)||void 0===e||e.setFocus()},500)})()}handleKeyPress(t){var e=this;return(0,m.A)(function*(){"Enter"===t.key&&!t.shiftKey&&(t.preventDefault(),yield e.sendMessage())})()}getUserLabel(t){var e;return t===this.currentUserId?"You":(null===(e=this.otherUser)||void 0===e?void 0:e.name)||"User"}}return(o=g).\u0275fac=function(t){return new(t||o)(n.rXU(u.nX),n.rXU(C.m),n.rXU(M.k),n.rXU(l.aZ))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-chat-room"]],viewQuery:function(t,e){if(1&t&&(n.GBs(i.W9,5),n.GBs(O,5)),2&t){let s;n.mGM(s=n.lsd())&&(e.content=s.first),n.mGM(s=n.lsd())&&(e.messageInput=s.first)}},decls:23,vars:9,consts:[[1,"ion-no-border"],["slot","start"],[3,"click"],["name","arrow-back"],[1,"user-info"],[3,"src"],[1,"user-details"],[1,"user-name"],[1,"user-status"],["scrollEvents","true"],[1,"message-list"],["class","message-item",3,"ngClass",4,"ngFor","ngForOf"],["placeholder","Type a message...",3,"ngModelChange","keyup.enter","ngModel"],["slot","end",3,"click","disabled"],["name","send"],["class","text-counter",4,"ngIf"],[1,"message-item",3,"ngClass"],[1,"message-content"],[1,"timestamp"],[1,"text-counter"]],template:function(t,e){1&t&&(n.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),n.bIt("click",function(){return e.goBack()}),n.nrm(4,"ion-icon",3),n.k0s()(),n.j41(5,"div",4)(6,"ion-avatar",1),n.nrm(7,"img",5),n.k0s(),n.j41(8,"div",6)(9,"ion-label",7),n.EFF(10),n.k0s(),n.j41(11,"ion-label",8),n.EFF(12),n.k0s()()()()(),n.j41(13,"ion-content",9)(14,"div",10),n.DNE(15,P,7,8,"div",11),n.k0s()(),n.j41(16,"ion-footer")(17,"ion-toolbar")(18,"ion-item")(19,"ion-input",12),n.mxI("ngModelChange",function(c){return n.DH7(e.newMessage,c)||(e.newMessage=c),c}),n.bIt("keyup.enter",function(){return e.sendMessage()}),n.k0s(),n.j41(20,"ion-button",13),n.bIt("click",function(){return e.sendMessage()}),n.nrm(21,"ion-icon",14),n.k0s()(),n.DNE(22,f,2,1,"div",15),n.k0s()()),2&t&&(n.R7$(7),n.Y8G("src",(null==e.otherUser?null:e.otherUser.profilePictureUrl)||"./assets/profile-placeholder.jpg",n.B4B),n.R7$(3),n.JRh((null==e.otherUser?null:e.otherUser.fullName)||"User"),n.R7$(),n.AVh("online",null==e.otherUser?null:e.otherUser.isOnline),n.R7$(),n.SpI(" ",null!=e.otherUser&&e.otherUser.isOnline?"Active Now":"Offline"," "),n.R7$(3),n.Y8G("ngForOf",e.messages),n.R7$(4),n.R50("ngModel",e.newMessage),n.R7$(),n.Y8G("disabled",!e.newMessage.trim()),n.R7$(2),n.Y8G("ngIf",null==e.newMessage?null:e.newMessage.length))},dependencies:[l.YU,l.Sq,l.bT,h.BC,h.vS,i.mC,i.Jm,i.QW,i.W9,i.M0,i.eU,i.iq,i.$w,i.uz,i.he,i.ai,i.Gw,l.vh],styles:['[_nghost-%COMP%]{--message-bg-color: #e9ecef;--own-message-bg-color: #900;--message-text-color: #343a40;--own-message-text-color: #ffffff;--timestamp-color: #6c757d;--border-radius: 18px;--avatar-size: 40px;--max-message-width: 75%;--input-max-height: 100px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: #ffffff;--border-width: 0;--min-height: 60px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{display:flex;align-items:center;padding:8px 16px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:var(--avatar-size);height:var(--avatar-size);margin-right:12px;flex-shrink:0}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:0}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{font-weight:600;font-size:16px;color:#000;margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%]{font-size:12px;color:var(--timestamp-color)}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-status.online[_ngcontent-%COMP%]{color:#28a745}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-status.online[_ngcontent-%COMP%]:before{content:"";display:inline-block;width:8px;height:8px;background-color:currentColor;border-radius:50%;margin-right:4px;vertical-align:middle}ion-content[_ngcontent-%COMP%]{--background: #f8f9fa}ion-content[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%]{padding:16px;display:flex;flex-direction:column;gap:8px}ion-content[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]{display:flex;max-width:var(--max-message-width)}ion-content[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]{padding:12px 16px;background:var(--message-bg-color);border-radius:var(--border-radius);position:relative;word-wrap:break-word;white-space:pre-wrap}ion-content[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--message-text-color);font-size:14px;line-height:1.4;overflow-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto;max-width:100%}ion-content[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%]{display:block;font-size:11px;color:var(--timestamp-color);margin-top:4px;white-space:nowrap}ion-content[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%]   .message-item.own-message[_ngcontent-%COMP%]{margin-left:auto}ion-content[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%]   .message-item.own-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]{background:var(--own-message-bg-color)}ion-content[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%]   .message-item.own-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--own-message-text-color)}ion-content[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%]   .message-item.own-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%]{color:#fffc}ion-footer[_ngcontent-%COMP%]{background:#fff;border-top:1px solid #dee2e6}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: transparent;--border-width: 0;padding:0 8px}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background: transparent;--border-width: 0;--inner-padding-end: 0;--padding-start: 0;--min-height: auto}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]{display:flex;align-items:flex-end;width:100%;padding:8px 0;gap:8px}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-start: 0;--padding-end: 0;width:44px;height:44px;margin:0;background-color:transparent!important}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20px;color:red!important}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   ion-button.button-disabled[_ngcontent-%COMP%]{opacity:.5}.text-counter[_ngcontent-%COMP%]{font-size:12px;color:var(--timestamp-color);text-align:right;padding:4px 8px;opacity:.7}.character-limit-warning[_ngcontent-%COMP%]{color:#dc3545}@keyframes _ngcontent-%COMP%_messageAppear{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.message-item[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_messageAppear .3s ease-out}.message-content[_ngcontent-%COMP%]{max-width:100%;overflow-wrap:break-word}.message-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .message-content[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{max-width:100%;height:auto}.message-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{white-space:pre-wrap;word-wrap:break-word;max-width:100%;overflow-x:auto}']}),g})()}];let v=(()=>{var o;class g{}return(o=g).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[l.MD,h.YN,i.bv,u.iI.forChild(b)]}),g})()}}]);