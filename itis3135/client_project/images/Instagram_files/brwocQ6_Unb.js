;/*FB_PKG_DELIM*/

__d("IGDSResharePanoOutlineIcon.react",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(3),d;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d=j.jsx("path",{d:"M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z"}),b[0]=d):d=b[0];b[1]!==a?(d=j.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:d})),b[1]=a,b[2]=d):d=b[2];return d}b=j.memo(a);g["default"]=b}),98);
__d("IGDSWebPauseFilledIcon.react",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(3),d;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d=j.jsx("path",{d:"M15 1c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3zm18 0c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3z"}),b[0]=d):d=b[0];b[1]!==a?(d=j.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 48 48",children:d})),b[1]=a,b[2]=d):d=b[2];return d}b=j.memo(a);g["default"]=b}),98);
__d("PolarisHideNativeAppBanner",["PolarisBatchDOM","emptyFunction","polarisGetAppPlatform"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a===void 0&&(a=c("emptyFunction")),d("polarisGetAppPlatform").isIOS()&&d("PolarisBatchDOM").mutate(function(){window.setTimeout(function(){window&&document.body&&(window.scrollTo(0,document.body.scrollHeight),a())},0)})}g.hideNativeAppBanner_HACK=a}),98);
__d("PolarisFullscreenShell.react",["PolarisAppStoreLauncher.react","PolarisBaseShell.react","PolarisHideNativeAppBanner","PolarisToastWrapper.react","PolarisUA","qex","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j="launch_app_store",k={shell:{height:"x5yr21d",overflowX:"x6ikm8r",overflowY:"x10wlt62",width:"xh8yej3",$$css:!0}};a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var e=b.prototype;e.componentDidMount=function(){d("PolarisHideNativeAppBanner").hideNativeAppBanner_HACK()};e.componentDidUpdate=function(a){a.deviceOrientation!=null&&a.deviceOrientation!==this.props.deviceOrientation&&d("PolarisHideNativeAppBanner").hideNativeAppBanner_HACK()};e.render=function(){var a=this.props,b=a.children;a=a.xstyle;var e=d("PolarisUA").isMobile()&&new URLSearchParams(location.search).get(j)!=null&&c("qex")._("87")===!0;return i.jsxs(c("PolarisBaseShell.react"),{xstyle:[k.shell,a],children:[b,i.jsx(c("PolarisToastWrapper.react"),{}),e&&i.jsx(c("PolarisAppStoreLauncher.react"),{})]})};return b}(i.Component);g["default"]=a}),98);
__d("PolarisFullscreenShellWithLogo.react",["fbt","ix","IGCoreImage.react","IGDSIconButton.react","IGDSXPanoFilledIcon.react","PolarisFastLink.react","PolarisFullscreenShell.react","PolarisGenericStrings","XPolarisFeedControllerRouteBuilder","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=(j||(j=d("react"))).c,l=j,m={shell:{backgroundColor:"x5qyhuo",height:"x5yr21d",justifyContent:"xl56j7k",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",width:"xh8yej3",$$css:!0}};function a(a){var b=k(10),e=a.children;a=a.onClose;var f;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(f=c("XPolarisFeedControllerRouteBuilder").buildURL({}),b[0]=f):f=b[0];f=f;var g;b[1]===Symbol["for"]("react.memo_cache_sentinel")?(g="xjbqb8w x1ypdohk xw7yly9 xktsk01 x1yztbdb x1d52u69 x10l6tqk x13vifvy x17qophe",b[1]=g):g=b[1];b[2]===Symbol["for"]("react.memo_cache_sentinel")?(g=l.jsx("div",{className:g,children:l.jsx(c("PolarisFastLink.react"),{href:f,children:l.jsx(c("IGCoreImage.react"),{alt:h._("__JHASH__EubW9vzR0uu__JHASH__"),src:{light:i("163077")}})})}),f="xjbqb8w x1ypdohk xw7yly9 xktsk01 x1yztbdb x1d52u69 x10l6tqk x13vifvy xds687c",b[2]=g,b[3]=f):(g=b[2],f=b[3]);var j;b[4]===Symbol["for"]("react.memo_cache_sentinel")?(j=l.jsx(c("IGDSXPanoFilledIcon.react"),{alt:d("PolarisGenericStrings").CLOSE_TEXT,color:"web-always-white"}),b[4]=j):j=b[4];b[5]!==a?(f=l.jsx("div",{className:f,children:l.jsx(c("IGDSIconButton.react"),{onClick:a,children:j})}),b[5]=a,b[6]=f):f=b[6];b[7]!==e||b[8]!==f?(j=l.jsxs(c("PolarisFullscreenShell.react"),{xstyle:m.shell,children:[e,g,f]}),b[7]=e,b[8]=f,b[9]=j):j=b[9];return j}g["default"]=a}),226);
__d("PolarisStoriesHighlightsRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisStoriesHighlightsRoot.react").__setRef("PolarisStoriesHighlightsRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisStoriesMediaRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisStoriesMediaRoot.react").__setRef("PolarisStoriesMediaRoot.entrypoint")};g["default"]=a}),98);
__d("useThread",["I64","ReQL","ReQLSuspense","react","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=(j||d("react")).c;function a(a){var b=k(6),e=(h||(h=c("useReStore")))(),g;b[0]!==e.tables.threads||b[1]!==a?(g=function(){return d("ReQL").fromTableAscending(e.tables.threads).getKeyRange((i||(i=d("I64"))).of_string(a))},b[0]=e.tables.threads,b[1]=a,b[2]=g):g=b[2];var j;b[3]!==e||b[4]!==a?(j=[e,a],b[3]=e,b[4]=a,b[5]=j):j=b[5];b=d("ReQLSuspense").useFirst(g,j,f.id+":21");return b}g["default"]=a}),98);