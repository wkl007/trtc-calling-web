(self.webpackChunktrtc_calling_web=self.webpackChunktrtc_calling_web||[]).push([[535],{4384:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(5393),a=(0,n.HX)("data-v-1bc91e60");(0,n.dD)("data-v-1bc91e60");var u={class:"login"},c={class:"form-wrapper"},o=(0,n.Uk)(" 保存SDKAppID与加密秘钥 "),s=(0,n.Uk)(" 登录 ");(0,n.Cn)();var p=a((function(e,t,r,p,i,l){var d=(0,n.up)("info-circle-outlined"),f=(0,n.up)("a-tooltip"),m=(0,n.up)("a-input"),v=(0,n.up)("a-form-item"),h=(0,n.up)("a-checkbox"),I=(0,n.up)("a-button"),k=(0,n.up)("a-form");return(0,n.wg)(),(0,n.j4)("div",u,[(0,n.Wm)("div",c,[(0,n.Wm)(k,{layout:"horizontal","wrapper-col":e.wrapperCol,model:e.form,onSubmit:e.handleSubmit},{default:a((function(){return[(0,n.Wm)(v,e.validateInfos.sdkAppId,{default:a((function(){return[(0,n.Wm)(m,(0,n.dG)(e.inputProps,{placeholder:"SDKAppID",size:"large",value:e.form.sdkAppId,"onUpdate:value":t[1]||(t[1]=function(t){return e.form.sdkAppId=t})}),{suffix:a((function(){return[(0,n.Wm)(f,{title:"请在腾讯云实时音视频控制台中查看您的SDKAppID"},{default:a((function(){return[(0,n.Wm)(d,{style:{color:"rgba(0, 0, 0, 0.45)"}})]})),_:1})]})),_:1},16,["value"])]})),_:1},16),(0,n.Wm)(v,e.validateInfos.secretKey,{default:a((function(){return[(0,n.Wm)(m,(0,n.dG)(e.inputProps,{placeholder:"加密秘钥",size:"large",value:e.form.secretKey,"onUpdate:value":t[2]||(t[2]=function(t){return e.form.secretKey=t})}),{suffix:a((function(){return[(0,n.Wm)(f,{title:"请在腾讯云实时音视频控制台中查看您的加密秘钥"},{default:a((function(){return[(0,n.Wm)(d,{style:{color:"rgba(0, 0, 0, 0.45)"}})]})),_:1})]})),_:1},16,["value"])]})),_:1},16),(0,n.Wm)(v,e.validateInfos.username,{default:a((function(){return[(0,n.Wm)(m,(0,n.dG)(e.inputProps,{placeholder:"userId",size:"large",value:e.form.username,"onUpdate:value":t[3]||(t[3]=function(t){return e.form.username=t})}),{suffix:a((function(){return[(0,n.Wm)(f,{title:"建议输入中文或数字"},{default:a((function(){return[(0,n.Wm)(d,{style:{color:"rgba(0, 0, 0, 0.45)"}})]})),_:1})]})),_:1},16,["value"])]})),_:1},16),(0,n.Wm)(v,null,{default:a((function(){return[(0,n.Wm)(h,{checked:e.form.cache,"onUpdate:checked":t[4]||(t[4]=function(t){return e.form.cache=t})},{default:a((function(){return[o]})),_:1},8,["checked"])]})),_:1}),(0,n.Wm)(I,{type:"primary",block:"",size:"large","html-type":"submit"},{default:a((function(){return[s]})),_:1})]})),_:1},8,["wrapper-col","model","onSubmit"])])])})),i=(r(5666),r(7171)),l=r(2119),d=r(894),f=r(3407),m=r(9438),v=r(1560),h=r(3765),I=r(4817),k=(0,n.aZ)({name:"Login",components:{InfoCircleOutlined:h.Z},setup:function(){var e=(0,I.C)(),t=e.initTRTC,r=e.handleLogin,a=(0,l.tv)(),u=(0,d.oR)(),c=(0,n.qj)({sdkAppId:"",secretKey:"",username:"",cache:!0}),o=(0,n.qj)({sdkAppId:[{required:!0,message:"请输入腾讯云SDKAppId"}],secretKey:[{required:!0,message:"请输入腾讯云加密密钥"}],username:[{required:!0,message:"请输入userId"}]}),s=(0,f.cI)(c,o),p=s.validate,h=s.validateInfos;function k(){return(k=(0,i.Z)(regeneratorRuntime.mark((function e(){var n,o,s,i,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:return n=c.cache,o=c.sdkAppId,s=c.secretKey,i=c.username,n&&(0,v.Ot)(m.ml,{sdkAppId:o,secretKey:s}),e.next=7,u.dispatch("setUserInfo",{username:i});case 7:return e.next=9,u.dispatch("setSdkInfo",{sdkAppId:o,secretKey:s});case 9:return l=t(),e.next=12,u.dispatch("setTrtcCalling",l);case 12:return e.next=14,u.dispatch("setLoginStatus",1);case 14:return e.next=16,a.push({path:"/"});case 16:r(l),e.next=21;break;case 19:e.prev=19,e.t0=e.catch(0);case 21:case"end":return e.stop()}}),e,null,[[0,19]])})))).apply(this,arguments)}return(0,n.wF)((function(){var e,t,r;e=u.getters.sdkInfo,t=e.sdkAppId,r=e.secretKey,t&&(c.sdkAppId=t),r&&(c.secretKey=r)})),{wrapperCol:{span:24},inputProps:m.Wy,form:c,validateInfos:h,handleSubmit:function(){return k.apply(this,arguments)}}}});k.render=p,k.__scopeId="data-v-1bc91e60";var g=k}}]);