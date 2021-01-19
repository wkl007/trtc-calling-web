(self.webpackChunktrtc_calling_web=self.webpackChunktrtc_calling_web||[]).push([[535],{1875:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return V}});var n=r(5393),o=(0,n.withScopeId)("data-v-1bc91e60");(0,n.pushScopeId)("data-v-1bc91e60");var a={class:"login"},c={class:"form-wrapper"},u=(0,n.createTextVNode)(" 保存SDKAppID与加密秘钥 "),s=(0,n.createTextVNode)(" 登录 ");(0,n.popScopeId)();var i=o((function(e,t,r,i,l,p){var d=(0,n.resolveComponent)("info-circle-outlined"),f=(0,n.resolveComponent)("a-tooltip"),m=(0,n.resolveComponent)("a-input"),v=(0,n.resolveComponent)("a-form-item"),h=(0,n.resolveComponent)("a-checkbox"),g=(0,n.resolveComponent)("a-button"),b=(0,n.resolveComponent)("a-form");return(0,n.openBlock)(),(0,n.createBlock)("div",a,[(0,n.createVNode)("div",c,[(0,n.createVNode)(b,{layout:"horizontal","wrapper-col":e.wrapperCol,model:e.form,onSubmit:e.handleSubmit},{default:o((function(){return[(0,n.createVNode)(v,e.validateInfos.sdkAppId,{default:o((function(){return[(0,n.createVNode)(m,(0,n.mergeProps)(e.inputProps,{placeholder:"SDKAppID",size:"large",value:e.form.sdkAppId,"onUpdate:value":t[1]||(t[1]=function(t){return e.form.sdkAppId=t})}),{suffix:o((function(){return[(0,n.createVNode)(f,{title:"请在腾讯云实时音视频控制台中查看您的SDKAppID"},{default:o((function(){return[(0,n.createVNode)(d,{style:{color:"rgba(0, 0, 0, 0.45)"}})]})),_:1})]})),_:1},16,["value"])]})),_:1},16),(0,n.createVNode)(v,e.validateInfos.secretKey,{default:o((function(){return[(0,n.createVNode)(m,(0,n.mergeProps)(e.inputProps,{placeholder:"加密秘钥",size:"large",value:e.form.secretKey,"onUpdate:value":t[2]||(t[2]=function(t){return e.form.secretKey=t})}),{suffix:o((function(){return[(0,n.createVNode)(f,{title:"请在腾讯云实时音视频控制台中查看您的加密秘钥"},{default:o((function(){return[(0,n.createVNode)(d,{style:{color:"rgba(0, 0, 0, 0.45)"}})]})),_:1})]})),_:1},16,["value"])]})),_:1},16),(0,n.createVNode)(v,e.validateInfos.username,{default:o((function(){return[(0,n.createVNode)(m,(0,n.mergeProps)(e.inputProps,{placeholder:"userId",size:"large",value:e.form.username,"onUpdate:value":t[3]||(t[3]=function(t){return e.form.username=t})}),{suffix:o((function(){return[(0,n.createVNode)(f,{title:"建议输入中文或数字"},{default:o((function(){return[(0,n.createVNode)(d,{style:{color:"rgba(0, 0, 0, 0.45)"}})]})),_:1})]})),_:1},16,["value"])]})),_:1},16),(0,n.createVNode)(v,null,{default:o((function(){return[(0,n.createVNode)(h,{checked:e.form.cache,"onUpdate:checked":t[4]||(t[4]=function(t){return e.form.cache=t})},{default:o((function(){return[u]})),_:1},8,["checked"])]})),_:1}),(0,n.createVNode)(g,{type:"primary",block:"",size:"large","html-type":"submit"},{default:o((function(){return[s]})),_:1})]})),_:1},8,["wrapper-col","model","onSubmit"])])])})),l=(r(5666),r(7171)),p=r(2119),d=r(6564),f=r(3407),m=r(9438),v=r(1560),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"},g=r(4220);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var I=function(e,t){var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){b(e,t,r[t])}))}return e}({},e,t.attrs);return n.createVNode(g.Z,n.mergeProps(r,{icon:h}),null)};I.displayName="InfoCircleOutlined",I.inheritAttrs=!1;var y=I,k=r(4817),N=(0,n.defineComponent)({name:"Login",components:{InfoCircleOutlined:y},setup:function(){var e=(0,k.C)(),t=e.initTRTC,r=e.handleLogin,o=(0,p.tv)(),a=(0,d.oR)(),c=(0,n.reactive)({sdkAppId:"",secretKey:"",username:"",cache:!0}),u=(0,n.reactive)({sdkAppId:[{required:!0,message:"请输入腾讯云SDKAppId"}],secretKey:[{required:!0,message:"请输入腾讯云加密密钥"}],username:[{required:!0,message:"请输入userId"}]}),s=(0,f.cI)(c,u),i=s.validate,h=s.validateInfos;function g(){return(g=(0,l.Z)(regeneratorRuntime.mark((function e(){var n,u,s,l,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i();case 3:return n=c.cache,u=c.sdkAppId,s=c.secretKey,l=c.username,n&&(0,v.Ot)(m.ml,{sdkAppId:u,secretKey:s}),e.next=7,a.dispatch("setUserInfo",{username:l});case 7:return e.next=9,a.dispatch("setSdkInfo",{sdkAppId:u,secretKey:s});case 9:return p=t(),e.next=12,a.dispatch("setTrtcCalling",p);case 12:return e.next=14,a.dispatch("setLoginStatus",1);case 14:return e.next=16,o.push({path:"/"});case 16:r(p),e.next=21;break;case 19:e.prev=19,e.t0=e.catch(0);case 21:case"end":return e.stop()}}),e,null,[[0,19]])})))).apply(this,arguments)}return(0,n.onBeforeMount)((function(){var e,t,r;e=a.getters.sdkInfo,t=e.sdkAppId,r=e.secretKey,t&&(c.sdkAppId=t),r&&(c.secretKey=r)})),{wrapperCol:{span:24},inputProps:m.Wy,form:c,validateInfos:h,handleSubmit:function(){return g.apply(this,arguments)}}}});N.render=i,N.__scopeId="data-v-1bc91e60";var V=N}}]);