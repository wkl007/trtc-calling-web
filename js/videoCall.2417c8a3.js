(self.webpackChunktrtc_calling_web=self.webpackChunktrtc_calling_web||[]).push([[224],{3946:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var r=n(5393),a=(0,r.HX)("data-v-65341631");(0,r.dD)("data-v-65341631");var u={class:"call-form"},i=(0,r.Uk)(" 呼叫中... "),s=(0,r.Uk)(" 取消 "),l=(0,r.Uk)(" 呼叫 ");(0,r.Cn)();var o=a((function(e,t,n,o,c,d){var f=(0,r.up)("a-input"),m=(0,r.up)("a-form-item"),p=(0,r.up)("a-button"),v=(0,r.up)("a-space"),g=(0,r.up)("a-form");return(0,r.wg)(),(0,r.j4)("div",u,[(0,r.Wm)(g,{layout:"horizontal","label-col":e.labelCol,"wrapper-col":e.wrapperCol,model:e.form,onSubmit:e.handleSubmit},{default:a((function(){return[(0,r.Wm)(m,(0,r.dG)({label:"呼叫方"},e.validateInfos.username),{default:a((function(){return[(0,r.Wm)(f,(0,r.dG)(e.inputProps,{placeholder:"呼叫方userId",size:"large",value:e.form.username,"onUpdate:value":t[1]||(t[1]=function(t){return e.form.username=t})}),null,16,["value"])]})),_:1},16),(0,r.Wm)(m,{"wrapper-col":{span:20,offset:4}},{default:a((function(){return["calling"===e.trtcInfo.callStatus&&e.trtcInfo.isInviter?((0,r.wg)(),(0,r.j4)(v,{key:0,size:"large"},{default:a((function(){return[(0,r.Wm)(p,{type:"primary",disabled:"",size:"large"},{default:a((function(){return[i]})),_:1}),(0,r.Wm)(p,{size:"large",onClick:e.handleCancel},{default:a((function(){return[s]})),_:1},8,["onClick"])]})),_:1})):((0,r.wg)(),(0,r.j4)(p,{key:1,type:"primary","html-type":"submit",size:"large"},{default:a((function(){return[l]})),_:1}))]})),_:1})]})),_:1},8,["label-col","wrapper-col","model","onSubmit"])])})),c=(n(5412),n(7011)),d=(n(5666),n(7171)),f=n(9438),m=n(2119),p=n(894),v=n(3407),g=(0,r.aZ)({name:"CallForm",setup:function(e,t){var n=t.emit,a=((0,m.tv)(),(0,p.oR)()),u=(0,r.f3)("images"),i=(0,r.Fl)((function(){return a.getters.userInfo})),s=(0,r.Fl)((function(){return a.getters.trtcInfo})),l=(0,r.qj)({username:""}),o=(0,r.qj)({username:[{required:!0,message:"请输入呼叫方userId"}]}),g=(0,v.cI)(l,o),I=g.validate,h=g.validateInfos;function U(){return(U=(0,d.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I();case 3:if(l.username!==i.value.username){e.next=6;break}return c.Z.error("不能输入当前登录userId"),e.abrupt("return");case 6:n("submit",l),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return{labelCol:{span:4},wrapperCol:{span:20},inputProps:f.Wy,form:l,validateInfos:h,trtcInfo:s,images:u,handleSubmit:function(){return U.apply(this,arguments)},handleCancel:function(){n("cancel")}}}});g.render=o,g.__scopeId="data-v-65341631";var I=g},5346:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(5393),a=(0,r.HX)("data-v-08b3dc04");(0,r.dD)("data-v-08b3dc04");var u={class:"video-call"},i=(0,r.Wm)("p",{class:"title"},"视频通话",-1),s={key:1,class:"video-area"},l=(0,r.Wm)("p",{class:"area-title"},"视频通话区域",-1),o={class:"video-list"},c={class:"status-area"},d={class:"video-username"},f={class:"operation-wrapper"},m=(0,r.Uk)(" 挂断 ");(0,r.Cn)();var p=a((function(e,t,n,p,v,g){var I=(0,r.up)("call-form"),h=(0,r.up)("a-button"),U=(0,r.up)("a-space");return(0,r.wg)(),(0,r.j4)("div",u,[i,"connected"!==e.trtcInfo.callStatus?((0,r.wg)(),(0,r.j4)(I,{key:0,onSubmit:e.handleCallUser,onCancel:e.handleCancelCallUser},null,8,["onSubmit","onCancel"])):(0,r.ry)("",!0),"connected"===e.trtcInfo.callStatus&&e.showVideoCall?((0,r.wg)(),(0,r.j4)("div",s,[l,(0,r.Wm)("div",o,[((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(e.trtcInfo.meetingUserIdList,(function(t,n){return(0,r.wg)(),(0,r.j4)("div",{class:"video-item",key:n,id:"video-".concat(t)},[(0,r.Wm)("div",c,[(0,r.Wm)("div",{class:"video-status",style:{backgroundImage:"url(".concat(e.isUserMute(e.trtcInfo.muteVideoUserIdList,t)?e.images.cameraOff:e.images.cameraOn,")")}},null,4),(0,r.Wm)("div",{class:"audio-status",style:{backgroundImage:"url(".concat(e.isUserMute(e.trtcInfo.muteAudioUserIdList,t)?e.images.micOff:e.images.micOn,")")}},null,4)]),(0,r.Wm)("div",d,(0,r.zw)(t)+(0,r.zw)(t===e.userInfo.username?"(本人)":""),1)],8,["id"])})),128))]),(0,r.Wm)("div",f,[(0,r.Wm)(U,{size:"large"},{default:a((function(){return[(0,r.Wm)(h,{type:"primary",size:"large",onClick:e.toggleVideoStatus},{default:a((function(){return[(0,r.Uk)((0,r.zw)(e.isVideoOn?"关闭摄像头":"打开摄像头"),1)]})),_:1},8,["onClick"]),(0,r.Wm)(h,{type:"primary",size:"large",onClick:e.toggleAudioStatus},{default:a((function(){return[(0,r.Uk)((0,r.zw)(e.isAudioOn?"关闭麦克风":"打开麦克风"),1)]})),_:1},8,["onClick"]),(0,r.Wm)(h,{type:"danger",size:"large",onClick:e.handleHangup},{default:a((function(){return[m]})),_:1},8,["onClick"])]})),_:1})])])):(0,r.ry)("",!0)])})),v=(n(7327),n(9554),n(2772),n(4747),n(5666),n(7171)),g=n(894),I=n(35),h=n.n(I),U=n(3946),w=(0,r.aZ)({name:"VideoCall",components:{CallForm:U.Z},setup:function(){var e=(0,g.oR)(),t=(0,r.f3)("images"),n=(0,r.Fl)((function(){return e.getters.trtcInfo})),a=(0,r.Fl)((function(){return e.getters.userInfo})),u=(0,r.Fl)((function(){return e.getters.trtcCalling})),i=(0,r.iH)(!1),s=(0,r.iH)(!0),l=(0,r.iH)(!0);function o(){return(o=(0,v.Z)(regeneratorRuntime.mark((function t(i){var s,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.value,l=a.value.username,t.next=4,(0,r.IU)(u.value).call({userID:i.username,type:h().CALL_TYPE.VIDEO_CALL,timeout:30});case 4:return s.callStatus="calling",s.isInviter=!0,s.meetingUserIdList.indexOf(l)<0&&s.meetingUserIdList.push(l),t.next=9,e.dispatch("setTrtcInfo",s);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(){return(c=(0,v.Z)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.value,t.next=3,(0,r.IU)(u.value).hangup();case 3:return a.callStatus="idle",a.meetingUserIdList=[],a.muteVideoUserIdList=[],a.muteAudioUserIdList=[],t.next=9,e.dispatch("setTrtcInfo",a);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(){var e=n.value,t=a.value.username;if(e.meetingUserIdList>=3){var s=e.meetingUserIdList[e.meetingUserIdList.length-1];(0,r.Y3)((function(){(0,r.IU)(u.value).startRemoteView({userID:s,videoViewDomID:"video-".concat(s)})}))}else i.value=!0,(0,r.Y3)((function(){(0,r.IU)(u.value).startLocalView({userID:t,videoViewDomID:"video-".concat(t)}),e.meetingUserIdList.filter((function(e){return e!==t})).forEach((function(e){(0,r.IU)(u.value).startRemoteView({userID:e,videoViewDomID:"video-".concat(e)})}))}))}function f(){return(f=(0,v.Z)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.value,t.next=3,(0,r.IU)(u.value).hangup();case 3:return i.value=!1,a.callStatus="idle",t.next=7,e.dispatch("setTrtcInfo",a);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){return(m=(0,v.Z)(regeneratorRuntime.mark((function t(){var i,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=n.value,l=a.value.username,s.value=!s.value,!s.value){t.next=9;break}return t.next=6,(0,r.IU)(u.value).openCamera();case 6:i.muteVideoUserIdList=i.muteVideoUserIdList.filter((function(e){return e!==l})),t.next=12;break;case 9:return t.next=11,(0,r.IU)(u.value).closeCamera();case 11:i.muteVideoUserIdList.push(l);case 12:return t.next=14,e.dispatch("setTrtcInfo",i);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return(p=(0,v.Z)(regeneratorRuntime.mark((function t(){var i,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.value,s=a.value.username,l.value=!l.value,(0,r.IU)(u.value).setMicMute(!l.value),l.value?i.muteAudioUserIdList=i.muteAudioUserIdList.filter((function(e){return e!==s})):i.muteAudioUserIdList.push(s),t.next=7,e.dispatch("setTrtcInfo",i);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,r.YP)((function(){return n.value.callStatus}),(function(e,t){e!==t&&"connected"===e&&d()})),(0,r.bv)((function(){var e=n.value;"connected"!==e.callStatus||e.isInviter||d()})),(0,r.Jd)((function(){var t=n.value;t.muteVideoUserIdList=[],t.muteAudioUserIdList=[],"connected"===t.callStatus&&((0,r.IU)(u.value).hangup(),t.callStatus="idle"),e.dispatch("setTrtcInfo",t)})),{images:t,trtcInfo:n,userInfo:a,showVideoCall:i,isVideoOn:s,isAudioOn:l,handleCallUser:function(e){return o.apply(this,arguments)},handleCancelCallUser:function(){return c.apply(this,arguments)},toggleVideoStatus:function(){return m.apply(this,arguments)},toggleAudioStatus:function(){return p.apply(this,arguments)},handleHangup:function(){return f.apply(this,arguments)},isUserMute:function(e,t){return-1!==e.indexOf(t)}}}});w.render=p,w.__scopeId="data-v-08b3dc04";var C=w}}]);