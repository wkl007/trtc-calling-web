(self.webpackChunktrtc_calling_web=self.webpackChunktrtc_calling_web||[]).push([[535],{4384:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(5393),o=(0,n.withScopeId)("data-v-1bc91e60");(0,n.pushScopeId)("data-v-1bc91e60");var a={class:"login"},c={class:"form-wrapper"},u=(0,n.createTextVNode)(" 保存SDKAppID与加密秘钥 "),s=(0,n.createTextVNode)(" 登录 ");(0,n.popScopeId)();var d=o((function(e,t,r,d,p,l){var i=(0,n.resolveComponent)("info-circle-outlined"),f=(0,n.resolveComponent)("a-tooltip"),m=(0,n.resolveComponent)("a-input"),v=(0,n.resolveComponent)("a-form-item"),h=(0,n.resolveComponent)("a-checkbox"),I=(0,n.resolveComponent)("a-button"),k=(0,n.resolveComponent)("a-form");return(0,n.openBlock)(),(0,n.createBlock)("div",a,[(0,n.createVNode)("div",c,[(0,n.createVNode)(k,{layout:"horizontal","wrapper-col":e.wrapperCol,model:e.form,onSubmit:e.handleSubmit},{default:o((function(){return[(0,n.createVNode)(v,e.validateInfos.sdkAppId,{default:o((function(){return[(0,n.createVNode)(m,(0,n.mergeProps)(e.inputProps,{placeholder:"SDKAppID",size:"large",value:e.form.sdkAppId,"onUpdate:value":t[1]||(t[1]=function(t){return e.form.sdkAppId=t})}),{suffix:o((function(){return[(0,n.createVNode)(f,{title:"请在腾讯云实时音视频控制台中查看您的SDKAppID"},{default:o((function(){return[(0,n.createVNode)(i,{style:{color:"rgba(0, 0, 0, 0.45)"}})]})),_:1})]})),_:1},16,["value"])]})),_:1},16),(0,n.createVNode)(v,e.validateInfos.secretKey,{default:o((function(){return[(0,n.createVNode)(m,(0,n.mergeProps)(e.inputProps,{placeholder:"加密秘钥",size:"large",value:e.form.secretKey,"onUpdate:value":t[2]||(t[2]=function(t){return e.form.secretKey=t})}),{suffix:o((function(){return[(0,n.createVNode)(f,{title:"请在腾讯云实时音视频控制台中查看您的加密秘钥"},{default:o((function(){return[(0,n.createVNode)(i,{style:{color:"rgba(0, 0, 0, 0.45)"}})]})),_:1})]})),_:1},16,["value"])]})),_:1},16),(0,n.createVNode)(v,e.validateInfos.username,{default:o((function(){return[(0,n.createVNode)(m,(0,n.mergeProps)(e.inputProps,{placeholder:"userId",size:"large",value:e.form.username,"onUpdate:value":t[3]||(t[3]=function(t){return e.form.username=t})}),{suffix:o((function(){return[(0,n.createVNode)(f,{title:"建议输入中文或数字"},{default:o((function(){return[(0,n.createVNode)(i,{style:{color:"rgba(0, 0, 0, 0.45)"}})]})),_:1})]})),_:1},16,["value"])]})),_:1},16),(0,n.createVNode)(v,null,{default:o((function(){return[(0,n.createVNode)(h,{checked:e.form.cache,"onUpdate:checked":t[4]||(t[4]=function(t){return e.form.cache=t})},{default:o((function(){return[u]})),_:1},8,["checked"])]})),_:1}),(0,n.createVNode)(I,{type:"primary",block:"",size:"large","html-type":"submit"},{default:o((function(){return[s]})),_:1})]})),_:1},8,["wrapper-col","model","onSubmit"])])])})),p=(r(5666),r(7171)),l=r(2119),i=r(6564),f=r(3407),m=r(9438),v=r(1560),h=r(3765),I=r(4817),k=(0,n.defineComponent)({name:"Login",components:{InfoCircleOutlined:h.Z},setup:function(){var e=(0,I.C)(),t=e.initTRTC,r=e.handleLogin,o=(0,l.tv)(),a=(0,i.oR)(),c=(0,n.reactive)({sdkAppId:"",secretKey:"",username:"",cache:!0}),u=(0,n.reactive)({sdkAppId:[{required:!0,message:"请输入腾讯云SDKAppId"}],secretKey:[{required:!0,message:"请输入腾讯云加密密钥"}],username:[{required:!0,message:"请输入userId"}]}),s=(0,f.cI)(c,u),d=s.validate,h=s.validateInfos;function k(){return(k=(0,p.Z)(regeneratorRuntime.mark((function e(){var n,u,s,p,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:return n=c.cache,u=c.sdkAppId,s=c.secretKey,p=c.username,n&&(0,v.Ot)(m.ml,{sdkAppId:u,secretKey:s}),e.next=7,a.dispatch("setUserInfo",{username:p});case 7:return e.next=9,a.dispatch("setSdkInfo",{sdkAppId:u,secretKey:s});case 9:return l=t(),e.next=12,a.dispatch("setTrtcCalling",l);case 12:return e.next=14,a.dispatch("setLoginStatus",1);case 14:return e.next=16,o.push({path:"/"});case 16:r(l),e.next=21;break;case 19:e.prev=19,e.t0=e.catch(0);case 21:case"end":return e.stop()}}),e,null,[[0,19]])})))).apply(this,arguments)}return(0,n.onBeforeMount)((function(){var e,t,r;e=a.getters.sdkInfo,t=e.sdkAppId,r=e.secretKey,t&&(c.sdkAppId=t),r&&(c.secretKey=r)})),{wrapperCol:{span:24},inputProps:m.Wy,form:c,validateInfos:h,handleSubmit:function(){return k.apply(this,arguments)}}}});k.render=d,k.__scopeId="data-v-1bc91e60";var g=k}}]);