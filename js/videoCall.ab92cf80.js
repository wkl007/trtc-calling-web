(window.webpackJsonp=window.webpackJsonp||[]).push([["videoCall"],{"3d87":function(e,t,n){},9817:function(e,t,n){},a80b:function(e,t,n){"use strict";n("3d87")},acc4:function(e,t,n){"use strict";n("9817")},e53d:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=Object(r.withScopeId)("data-v-507ebe16");Object(r.pushScopeId)("data-v-507ebe16");var c={class:"video-call"},o=Object(r.createVNode)("p",{class:"title"},"视频通话",-1),u={key:1,class:"video-area"},i=Object(r.createVNode)("p",{class:"area-title"},"视频通话区域",-1),s={class:"video-list"},l={class:"status-area"},d={class:"video-username"},p={class:"operation-wrapper"},f=Object(r.createTextVNode)(" 挂断 ");Object(r.popScopeId)();var b=a((function(e,t,n,b,m,O){var v=Object(r.resolveComponent)("call-form"),j=Object(r.resolveComponent)("a-button"),g=Object(r.resolveComponent)("a-space");return Object(r.openBlock)(),Object(r.createBlock)("div",c,[o,"connected"!==e.trtcInfo.callStatus?(Object(r.openBlock)(),Object(r.createBlock)(v,{key:0,onSubmit:e.handleCallUser,onCancel:e.handleCancelCallUser},null,8,["onSubmit","onCancel"])):Object(r.createCommentVNode)("",!0),"connected"===e.trtcInfo.callStatus&&e.showVideoCall?(Object(r.openBlock)(),Object(r.createBlock)("div",u,[i,Object(r.createVNode)("div",s,[(Object(r.openBlock)(!0),Object(r.createBlock)(r.Fragment,null,Object(r.renderList)(e.trtcInfo.meetingUserIdList,(function(t,n){return Object(r.openBlock)(),Object(r.createBlock)("div",{class:"video-item",key:n,id:"video-".concat(t)},[Object(r.createVNode)("div",l,[Object(r.createVNode)("div",{class:"video-status",style:{backgroundImage:"url(".concat(e.isUserMute(e.trtcInfo.muteVideoUserIdList,t)?e.images.cameraOff:e.images.cameraOn,")")}},null,4),Object(r.createVNode)("div",{class:"audio-status",style:{backgroundImage:"url(".concat(e.isUserMute(e.trtcInfo.muteAudioUserIdList,t)?e.images.micOff:e.images.micOn,")")}},null,4)]),Object(r.createVNode)("div",d,Object(r.toDisplayString)(t)+Object(r.toDisplayString)(t===e.userInfo.username?"(本人)":""),1)],8,["id"])})),128))]),Object(r.createVNode)("div",p,[Object(r.createVNode)(g,{size:"large"},{default:a((function(){return[Object(r.createVNode)(j,{type:"primary",size:"large",onClick:e.toggleVideoStatus},{default:a((function(){return[Object(r.createTextVNode)(Object(r.toDisplayString)(e.isVideoOn?"关闭摄像头":"打开摄像头"),1)]})),_:1},8,["onClick"]),Object(r.createVNode)(j,{size:"large",onClick:e.toggleAudioStatus},{default:a((function(){return[Object(r.createTextVNode)(Object(r.toDisplayString)(e.isAudioOn?"关闭麦克风":"打开麦克风"),1)]})),_:1},8,["onClick"]),Object(r.createVNode)(j,{type:"danger",size:"large",onClick:e.handleHangup},{default:a((function(){return[f]})),_:1},8,["onClick"])]})),_:1})])])):Object(r.createCommentVNode)("",!0)])})),m=(n("4de4"),n("4160"),n("c975"),n("159b"),n("96cf"),n("1da1")),O=n("5502"),v=n("fc9e"),j=n.n(v),g=Object(r.withScopeId)("data-v-86407aae");Object(r.pushScopeId)("data-v-86407aae");var I={class:"call-form"},h=Object(r.createTextVNode)(" 呼叫中 "),V=Object(r.createTextVNode)(" 取消 "),w=Object(r.createTextVNode)(" 呼叫 ");Object(r.popScopeId)();var C=g((function(e,t,n,a,c,o){var u=Object(r.resolveComponent)("a-input"),i=Object(r.resolveComponent)("a-form-item"),s=Object(r.resolveComponent)("a-button"),l=Object(r.resolveComponent)("a-space"),d=Object(r.resolveComponent)("a-form");return Object(r.openBlock)(),Object(r.createBlock)("div",I,[Object(r.createVNode)(d,{layout:"horizontal","label-col":e.labelCol,"wrapper-col":e.wrapperCol,model:e.form,onSubmit:e.handleSubmit},{default:g((function(){return[Object(r.createVNode)(i,Object(r.mergeProps)({label:"呼叫方"},e.validateInfos.username),{default:g((function(){return[Object(r.createVNode)(u,Object(r.mergeProps)(e.inputProps,{placeholder:"呼叫方userId",size:"large",value:e.form.username,"onUpdate:value":t[1]||(t[1]=function(t){return e.form.username=t})}),null,16,["value"])]})),_:1},16),Object(r.createVNode)(i,{"wrapper-col":{span:20,offset:4}},{default:g((function(){return["calling"===e.trtcInfo.callStatus&&e.trtcInfo.isInviter?(Object(r.openBlock)(),Object(r.createBlock)(l,{key:0,size:"large"},{default:g((function(){return[Object(r.createVNode)(s,{type:"primary",disabled:"",size:"large"},{default:g((function(){return[h]})),_:1}),Object(r.createVNode)(s,{size:"large",onClick:e.handleCancel},{default:g((function(){return[V]})),_:1},8,["onClick"])]})),_:1})):(Object(r.openBlock)(),Object(r.createBlock)(s,{key:1,type:"primary","html-type":"submit",size:"large"},{default:g((function(){return[w]})),_:1}))]})),_:1})]})),_:1},8,["label-col","wrapper-col","model","onSubmit"])])})),k=n("9613"),y=n("6c02"),x=n("002b"),S=Object(r.defineComponent)({name:"CallForm",setup:function(e,t){var n=t.emit,a=(Object(y.c)(),Object(O.c)()),c=Object(r.inject)("images"),o=(Object(r.computed)((function(){return a.getters.userInfo})),Object(r.computed)((function(){return a.getters.trtcInfo}))),u=Object(r.reactive)({username:""}),i=Object(r.reactive)({username:[{required:!0,message:"请输入呼叫方userId"}]}),s=Object(x.a)(u,i),l=s.validate,d=s.validateInfos;function p(){return(p=Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l();case 3:n("submit",u),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return{labelCol:{span:4},wrapperCol:{span:20},inputProps:k.a,form:u,validateInfos:d,trtcInfo:o,images:c,handleSubmit:function(){return p.apply(this,arguments)},handleCancel:function(){n("cancel")}}}});n("acc4"),S.render=C,S.__scopeId="data-v-86407aae";var U=S,L=Object(r.defineComponent)({name:"VideoCall",components:{CallForm:U},setup:function(){var e=Object(O.c)(),t=Object(r.inject)("images"),n=Object(r.computed)((function(){return e.getters.trtcInfo})),a=Object(r.computed)((function(){return e.getters.userInfo})),c=Object(r.computed)((function(){return e.getters.trtcCalling})),o=Object(r.ref)(!1),u=Object(r.ref)(!0),i=Object(r.ref)(!0);function s(){return(s=Object(m.a)(regeneratorRuntime.mark((function t(o){var u,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=n.value,i=a.value.username,t.next=4,Object(r.toRaw)(c.value).call({userID:o.username,type:j.a.CALL_TYPE.VIDEO_CALL,timeout:60});case 4:return u.callStatus="calling",u.isInviter=!0,u.meetingUserIdList.indexOf(i)<0&&u.meetingUserIdList.push(i),t.next=9,e.dispatch("setTrtcInfo",u);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=Object(m.a)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.value,t.next=3,Object(r.toRaw)(c.value).hangup();case 3:return a.callStatus="idle",a.meetingUserIdList=[],a.muteVideoUserIdList=[],a.muteAudioUserIdList=[],t.next=9,e.dispatch("setTrtcInfo",a);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(){var e=n.value,t=a.value.username;if(e.meetingUserIdList>=3){var u=e.meetingUserIdList[e.meetingUserIdList.length-1];Object(r.nextTick)((function(){Object(r.toRaw)(c.value).startRemoteView({userID:u,videoViewDomID:"video-".concat(u)})}))}else o.value=!0,Object(r.nextTick)((function(){Object(r.toRaw)(c.value).startLocalView({userID:t,videoViewDomID:"video-".concat(t)}),e.meetingUserIdList.filter((function(e){return e!==t})).forEach((function(e){Object(r.toRaw)(c.value).startRemoteView({userID:e,videoViewDomID:"video-".concat(e)})}))}))}function p(){return(p=Object(m.a)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.value,t.next=3,Object(r.toRaw)(c.value).hangup();case 3:return o.value=!1,a.callStatus="idle",t.next=7,e.dispatch("setTrtcInfo",a);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return(f=Object(m.a)(regeneratorRuntime.mark((function t(){var o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=n.value,i=a.value.username,u.value=!u.value,!u.value){t.next=9;break}return t.next=6,Object(r.toRaw)(c.value).openCamera();case 6:o.muteVideoUserIdList=o.muteVideoUserIdList.filter((function(e){return e!==i})),t.next=12;break;case 9:return t.next=11,Object(r.toRaw)(c.value).closeCamera();case 11:o.muteVideoUserIdList.push(i);case 12:return t.next=14,e.dispatch("setTrtcInfo",o);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(){return(b=Object(m.a)(regeneratorRuntime.mark((function t(){var o,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.value,u=a.value.username,i.value=!i.value,Object(r.toRaw)(c.value).setMicMute(!i.value),i.value?o.muteAudioUserIdList=o.muteAudioUserIdList.filter((function(e){return e!==u})):o.muteAudioUserIdList.push(u),t.next=7,e.dispatch("setTrtcInfo",o);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.watch)((function(){return n.value.callStatus}),(function(e,t){e!==t&&"connected"===e&&d()})),Object(r.onMounted)((function(){var e=n.value;"connected"!==e.callStatus||e.isInviter||d()})),Object(r.onBeforeUnmount)((function(){var t=n.value;t.muteVideoUserIdList=[],t.muteAudioUserIdList=[],"connected"===t.callStatus&&(Object(r.toRaw)(c.value).hangup(),t.callStatus="idle"),e.dispatch("setTrtcInfo",t)})),{images:t,trtcInfo:n,userInfo:a,showVideoCall:o,isVideoOn:u,isAudioOn:i,handleCallUser:function(e){return s.apply(this,arguments)},handleCancelCallUser:function(){return l.apply(this,arguments)},toggleVideoStatus:function(){return f.apply(this,arguments)},toggleAudioStatus:function(){return b.apply(this,arguments)},handleHangup:function(){return p.apply(this,arguments)},isUserMute:function(e,t){return-1!==e.indexOf(t)}}}});n("a80b"),L.render=b,L.__scopeId="data-v-507ebe16",t.default=L}}]);