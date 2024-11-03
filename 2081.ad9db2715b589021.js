"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2081],{2081:(M,l,r)=>{r.r(l),r.d(l,{ResetPasswordPageModule:()=>w});var m=r(177),o=r(4341),s=r(4742),g=r(9166),p=r(467),e=r(4438),u=r(1740);function _(t,i){1&t&&(e.j41(0,"ion-text",16),e.EFF(1," Please enter a valid email address. "),e.k0s())}const f=[{path:"",component:(()=>{var t;class i{constructor(n,a,d,P){this.formBuilder=n,this.authService=a,this.toastController=d,this.router=P}ngOnInit(){this.resetPasswordForm=this.formBuilder.group({email:["",[o.k0.required,o.k0.email]]})}goToLogin(){var n=this;return(0,p.A)(function*(){return n.router.navigate(["/authentication"])})()}resetPassword(){var n=this;return(0,p.A)(function*(){if(n.resetPasswordForm.valid){const a=n.resetPasswordForm.value.email;try{yield n.authService.sendPasswordResetEmail(a),yield(yield n.toastController.create({message:"Password reset email sent.",duration:2e3,color:"success"})).present()}catch{yield(yield n.toastController.create({message:"Error sending password reset email.",duration:2e3,color:"danger"})).present()}}})()}}return(t=i).\u0275fac=function(n){return new(n||t)(e.rXU(o.ok),e.rXU(u.k),e.rXU(s.K_),e.rXU(g.Ix))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-reset-password"]],decls:20,vars:3,consts:[[1,"ion-padding","reset-password-page"],[1,"background-decor"],[1,"circle","large"],[1,"circle","small"],[1,"form-container","animate__animated","animate__fadeIn"],["src","./assets/LOGO.png",1,"image-logo","animate__animated","animate__bounceInDown"],[1,"title","animate__animated","animate__fadeInUp"],[1,"subtitle","animate__animated","animate__fadeInUp","animate__delay-1s"],[3,"ngSubmit","formGroup"],[1,"input-field","animate__animated","animate__fadeInLeft"],["name","mail-outline",1,"icon-left"],["formControlName","email","type","email","placeholder","Enter your Email"],["color","danger","class","animate__animated animate__fadeIn animate__delay-2s",4,"ngIf"],["color","danger","expand","block","type","submit",1,"btn","animate__animated","animate__fadeInUp","animate__delay-2s",3,"disabled"],[1,"back-to-login","animate__animated","animate__fadeInUp","animate__delay-3s"],[3,"click"],["color","danger",1,"animate__animated","animate__fadeIn","animate__delay-2s"]],template:function(n,a){1&n&&(e.j41(0,"ion-content",0)(1,"div",1),e.nrm(2,"div",2)(3,"div",3),e.k0s(),e.j41(4,"div",4),e.nrm(5,"ion-img",5),e.j41(6,"h2",6),e.EFF(7,"Forgot Your Password?"),e.k0s(),e.j41(8,"p",7),e.EFF(9," Let us help you regain access to your BatStateU Connect+ account. Please enter your registered email address below. "),e.k0s(),e.j41(10,"form",8),e.bIt("ngSubmit",function(){return a.resetPassword()}),e.j41(11,"div",9),e.nrm(12,"ion-icon",10)(13,"ion-input",11),e.k0s(),e.DNE(14,_,2,0,"ion-text",12),e.j41(15,"ion-button",13),e.EFF(16," Send Reset Link "),e.k0s()(),e.j41(17,"p",14)(18,"a",15),e.bIt("click",function(){return a.goToLogin()}),e.EFF(19,"Back to Login"),e.k0s()()()()),2&n&&(e.R7$(10),e.Y8G("formGroup",a.resetPasswordForm),e.R7$(4),e.Y8G("ngIf",a.resetPasswordForm.controls.email.invalid&&a.resetPasswordForm.controls.email.touched),e.R7$(),e.Y8G("disabled",a.resetPasswordForm.invalid))},dependencies:[m.bT,o.qT,o.BC,o.cb,o.j4,o.JD,s.Jm,s.W9,s.iq,s.KW,s.$w,s.IO,s.Gw],styles:['@import"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";.reset-password-page[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;height:100vh;background-color:#f5f5f5;overflow:hidden}.reset-password-page[_ngcontent-%COMP%]   .background-decor[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100vw;height:100vh;overflow:hidden;z-index:1}.reset-password-page[_ngcontent-%COMP%]   .background-decor[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{border-radius:50%;background-color:#900;position:absolute;animation:_ngcontent-%COMP%_animateCircle 10s infinite ease-in-out alternate}.reset-password-page[_ngcontent-%COMP%]   .background-decor[_ngcontent-%COMP%]   .circle.large[_ngcontent-%COMP%]{width:600px;height:600px;top:-200px;right:-300px}.reset-password-page[_ngcontent-%COMP%]   .background-decor[_ngcontent-%COMP%]   .circle.small[_ngcontent-%COMP%]{width:300px;height:300px;bottom:-150px;left:-150px}.reset-password-page[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{position:relative;z-index:10;max-width:400px;background:#fff;padding:30px;margin-top:50%;border-radius:15px;box-shadow:0 4px 12px #0000001a;text-align:center}.reset-password-page[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .image-logo[_ngcontent-%COMP%]{width:120px;margin:0 auto 20px}.reset-password-page[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:24px;margin-bottom:10px;font-weight:700}.reset-password-page[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:14px;margin-bottom:20px;color:#6b6b6b}.reset-password-page[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:20px}.reset-password-page[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{flex:1;margin-left:10px;--padding-start: 0px;--padding-end: 0px}.reset-password-page[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   .icon-left[_ngcontent-%COMP%]{font-size:20px;color:#6b6b6b}.reset-password-page[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-top:20px;transition:background-color .3s ease-in-out}.reset-password-page[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .back-to-login[_ngcontent-%COMP%]{margin-top:20px}.reset-password-page[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .back-to-login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#900;font-weight:500;transition:color .3s ease-in-out}.reset-password-page[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .back-to-login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:gray}@keyframes _ngcontent-%COMP%_animateCircle{0%{transform:scale(1)}to{transform:scale(1.1)}}']}),i})()}];let C=(()=>{var t;class i{}return(t=i).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[g.iI.forChild(f),g.iI]}),i})(),w=(()=>{var t;class i{}return(t=i).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[m.MD,o.YN,o.X1,s.bv,C]}),i})()}}]);