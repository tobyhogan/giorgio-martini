(self.webpackChunkgiorgio_martini_website=self.webpackChunkgiorgio_martini_website||[]).push([[718],{5334:function(e){"use strict";var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function a(e,t,r){return e.concat(t).map((function(e){return n(e,r)}))}function o(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function i(e,t){try{return t in e}catch(r){return!1}}function s(e,t,r){var a={};return r.isMergeableObject(e)&&o(e).forEach((function(t){a[t]=n(e[t],r)})),o(t).forEach((function(o){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(i(e,o)&&r.isMergeableObject(t[o])?a[o]=function(e,t){if(!t.customMerge)return l;var r=t.customMerge(e);return"function"==typeof r?r:l}(o,r)(e[o],t[o],r):a[o]=n(t[o],r))})),a}function l(e,r,o){(o=o||{}).arrayMerge=o.arrayMerge||a,o.isMergeableObject=o.isMergeableObject||t,o.cloneUnlessOtherwiseSpecified=n;var i=Array.isArray(r);return i===Array.isArray(e)?i?o.arrayMerge(e,r,o):s(e,r,o):n(r,o)}l.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return l(e,r,t)}),{})};var u=l;e.exports=u},7784:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,a){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof n&&(a=n,n={}),n=n||{},a=a||function(){},i.type=n.type||"text/javascript",i.charset=n.charset||"utf8",i.async=!("async"in n)||!!n.async,i.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,n.attrs),n.text&&(i.text=""+n.text),("onload"in i?t:r)(i,a),i.onload||t(i,a),o.appendChild(i)}},9186:function(e,t,r){"use strict";r.r(t);var n=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function a(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(a=e[r],o=t[r],!(a===o||n(a)&&n(o)))return!1;var a,o;return!0}t.default=function(e,t){var r;void 0===t&&(t=a);var n,o=[],i=!1;return function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];return i&&r===this&&t(a,o)||(n=e.apply(this,a),i=!0,r=this,o=a),n}}},2524:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var s,l,u,c;if(Array.isArray(e)){if((s=e.length)!=i.length)return!1;for(l=s;0!=l--;)if(!o(e[l],i[l]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!i.has(l.value[0]))return!1;for(c=e.entries();!(l=c.next()).done;)if(!o(l.value[1],i.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((s=e.length)!=i.length)return!1;for(l=s;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof i.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof i.toString)return e.toString()===i.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!o(e[u[l]],i[u[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},2791:function(e,t,r){var n,a=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of s(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},p=(e,t,r)=>(r=null!=e?a(l(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),d=(e,t,r)=>(((e,t,r)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),y={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(y,{default:()=>g}),e.exports=(n=y,c(o({},"__esModule",{value:!0}),n));var f=p(r(7953)),h=p(r(2524)),m=r(914),b=r(3361);class g extends f.Component{constructor(){var e;super(...arguments),e=this,d(this,"mounted",!1),d(this,"isReady",!1),d(this,"isPlaying",!1),d(this,"isLoading",!0),d(this,"loadOnReady",null),d(this,"startOnPlay",!0),d(this,"seekOnPlay",null),d(this,"onDurationCalled",!1),d(this,"handlePlayerMount",(e=>{this.player||(this.player=e,this.player.load(this.props.url)),this.progress()})),d(this,"getInternalPlayer",(e=>this.player?this.player[e]:null)),d(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),r=this.getDuration();if(r){const n={playedSeconds:e,played:e/r};null!==t&&(n.loadedSeconds=t,n.loaded=t/r),n.playedSeconds===this.prevPlayed&&n.loadedSeconds===this.prevLoaded||this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),d(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:t,volume:r,muted:n}=this.props;e(),n||null===r||this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()})),d(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:t,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==r&&this.player.setPlaybackRate(r),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),d(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),d(this,"handleEnded",(()=>{const{activePlayer:e,loop:t,onEnded:r}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,r())})),d(this,"handleError",(function(){e.isLoading=!1,e.props.onError(...arguments)})),d(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),d(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:t,playing:r,volume:n,muted:a,playbackRate:o,pip:i,loop:s,activePlayer:l,disableDeferredLoading:u}=this.props;if(!(0,h.default)(e.url,t)){if(this.isLoading&&!l.forceLoad&&!u&&!(0,b.isMediaStream)(t))return console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),void(this.loadOnReady=t);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!r||this.isPlaying||this.player.play(),e.playing&&!r&&this.isPlaying&&this.player.pause(),!e.pip&&i&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!i&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==n&&null!==n&&this.player.setVolume(n),e.muted!==a&&(a?this.player.mute():(this.player.unmute(),null!==n&&setTimeout((()=>this.player.setVolume(n))))),e.playbackRate!==o&&this.player.setPlaybackRate&&this.player.setPlaybackRate(o),e.loop!==s&&this.player.setLoop&&this.player.setLoop(s)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,r){if(!this.isReady)return void(0!==e&&(this.seekOnPlay=e,setTimeout((()=>{this.seekOnPlay=null}),5e3)));if(t?"fraction"===t:e>0&&e<1){const t=this.player.getDuration();return t?void this.player.seekTo(t*e,r):void console.warn("ReactPlayer: could not seek using fraction – duration not yet available")}this.player.seekTo(e,r)}render(){const e=this.props.activePlayer;return e?f.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}d(g,"displayName","Player"),d(g,"propTypes",m.propTypes),d(g,"defaultProps",m.defaultProps)},4778:function(e,t,r){var n,a=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of s(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},p=(e,t,r)=>(r=null!=e?a(l(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),d=(e,t,r)=>(((e,t,r)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),y={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(y,{createReactPlayer:()=>S}),e.exports=(n=y,c(o({},"__esModule",{value:!0}),n));var f=p(r(7953)),h=p(r(5334)),m=p(r(9186)),b=p(r(2524)),g=r(914),P=r(3361),v=p(r(2791));const w=(0,P.lazy)((()=>r.e(353).then(r.t.bind(r,8084,23)))),O="undefined"!=typeof window&&window.document&&"undefined"!=typeof document,k=void 0!==r.g&&r.g.window&&r.g.window.document,_=Object.keys(g.propTypes),E=O||k?f.Suspense:()=>null,T=[],S=(e,t)=>{var r;return r=class extends f.Component{constructor(){var r;super(...arguments),r=this,d(this,"state",{showPreview:!!this.props.light}),d(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),d(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),d(this,"showPreview",(()=>{this.setState({showPreview:!0})})),d(this,"getDuration",(()=>this.player?this.player.getDuration():null)),d(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),d(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),d(this,"getInternalPlayer",(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"player";return r.player?r.player.getInternalPlayer(e):null})),d(this,"seekTo",((e,t,r)=>{if(!this.player)return null;this.player.seekTo(e,t,r)})),d(this,"handleReady",(()=>{this.props.onReady(this)})),d(this,"getActivePlayer",(0,m.default)((r=>{for(const t of[...T,...e])if(t.canPlay(r))return t;return t||null}))),d(this,"getConfig",(0,m.default)(((e,t)=>{const{config:r}=this.props;return h.default.all([g.defaultProps.config,g.defaultProps.config[t]||{},r,r[t]||{}])}))),d(this,"getAttributes",(0,m.default)((e=>(0,P.omit)(this.props,_)))),d(this,"renderActivePlayer",(e=>{if(!e)return null;const t=this.getActivePlayer(e);if(!t)return null;const r=this.getConfig(e,t.key);return f.default.createElement(v.default,{...this.props,key:t.key,ref:this.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})}))}shouldComponentUpdate(e,t){return!(0,b.default)(this.props,e)||!(0,b.default)(this.state,t)}componentDidUpdate(e){const{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;const{light:t,playIcon:r,previewTabIndex:n,oEmbedUrl:a,previewAriaLabel:o}=this.props;return f.default.createElement(w,{url:e,light:t,playIcon:r,previewTabIndex:n,previewAriaLabel:o,oEmbedUrl:a,onClick:this.handleClickPreview})}render(){const{url:e,style:t,width:r,height:n,fallback:a,wrapper:o}=this.props,{showPreview:i}=this.state,s=this.getAttributes(e),l="string"==typeof o?this.references.wrapper:void 0;return f.default.createElement(o,{ref:l,style:{...t,width:r,height:n},...s},f.default.createElement(E,{fallback:a},i?this.renderPreview(e):this.renderActivePlayer(e)))}},d(r,"displayName","ReactPlayer"),d(r,"propTypes",g.propTypes),d(r,"defaultProps",g.defaultProps),d(r,"addCustomPlayer",(e=>{T.push(e)})),d(r,"removeCustomPlayers",(()=>{T.length=0})),d(r,"canPlay",(t=>{for(const r of[...T,...e])if(r.canPlay(t))return!0;return!1})),d(r,"canEnablePIP",(t=>{for(const r of[...T,...e])if(r.canEnablePIP&&r.canEnablePIP(t))return!0;return!1})),r}},9576:function(e,t,r){var n,a=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of s(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},p={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(p,{default:()=>h}),e.exports=(n=p,c(o({},"__esModule",{value:!0}),n));var d=((e,t,r)=>(r=null!=e?a(l(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(3249)),y=r(4778);const f=d.default[d.default.length-1];var h=(0,y.createReactPlayer)(d.default,f)},6193:function(e,t,r){var n,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,l={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(l,{AUDIO_EXTENSIONS:()=>_,DASH_EXTENSIONS:()=>S,FLV_EXTENSIONS:()=>j,HLS_EXTENSIONS:()=>T,MATCH_URL_DAILYMOTION:()=>v,MATCH_URL_FACEBOOK:()=>f,MATCH_URL_FACEBOOK_WATCH:()=>h,MATCH_URL_KALTURA:()=>k,MATCH_URL_MIXCLOUD:()=>w,MATCH_URL_MUX:()=>y,MATCH_URL_SOUNDCLOUD:()=>p,MATCH_URL_STREAMABLE:()=>m,MATCH_URL_TWITCH_CHANNEL:()=>P,MATCH_URL_TWITCH_VIDEO:()=>g,MATCH_URL_VIDYARD:()=>O,MATCH_URL_VIMEO:()=>d,MATCH_URL_WISTIA:()=>b,MATCH_URL_YOUTUBE:()=>c,VIDEO_EXTENSIONS:()=>E,canPlay:()=>C}),e.exports=(n=l,((e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))s.call(e,l)||l===r||a(e,l,{get:()=>t[l],enumerable:!(n=o(t,l))||n.enumerable});return e})(a({},"__esModule",{value:!0}),n));var u=r(3361);const c=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,p=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,d=/vimeo\.com\/(?!progressive_redirect).+/,y=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,f=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,h=/^https?:\/\/fb\.watch\/.+$/,m=/streamable\.com\/([a-z0-9]+)$/,b=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,g=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,P=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,v=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,w=/mixcloud\.com\/([^/]+\/[^/]+)/,O=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,k=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,_=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,E=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,T=/\.(m3u8)($|\?)/i,S=/\.(mpd)($|\?)/i,j=/\.(flv)($|\?)/i,A=e=>{if(e instanceof Array){for(const t of e){if("string"==typeof t&&A(t))return!0;if(A(t.src))return!0}return!1}return!(!(0,u.isMediaStream)(e)&&!(0,u.isBlobUrl)(e))||(_.test(e)||E.test(e)||T.test(e)||S.test(e)||j.test(e))},C={youtube:e=>e instanceof Array?e.every((e=>c.test(e))):c.test(e),soundcloud:e=>p.test(e)&&!_.test(e),vimeo:e=>d.test(e)&&!E.test(e)&&!T.test(e),mux:e=>y.test(e),facebook:e=>f.test(e)||h.test(e),streamable:e=>m.test(e),wistia:e=>b.test(e),twitch:e=>g.test(e)||P.test(e),dailymotion:e=>v.test(e),mixcloud:e=>w.test(e),vidyard:e=>O.test(e),kaltura:e=>k.test(e),file:A}},3249:function(e,t,r){Object.create;var n,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=(Object.getPrototypeOf,Object.prototype.hasOwnProperty),l=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))s.call(e,l)||l===r||a(e,l,{get:()=>t[l],enumerable:!(n=o(t,l))||n.enumerable});return e},u={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>d}),e.exports=(n=u,l(a({},"__esModule",{value:!0}),n));var c=r(3361),p=r(6193),d=[{key:"youtube",name:"YouTube",canPlay:p.canPlay.youtube,lazyPlayer:(0,c.lazy)((()=>r.e(446).then(r.t.bind(r,9572,23))))},{key:"soundcloud",name:"SoundCloud",canPlay:p.canPlay.soundcloud,lazyPlayer:(0,c.lazy)((()=>r.e(979).then(r.t.bind(r,2861,23))))},{key:"vimeo",name:"Vimeo",canPlay:p.canPlay.vimeo,lazyPlayer:(0,c.lazy)((()=>r.e(173).then(r.t.bind(r,2461,23))))},{key:"mux",name:"Mux",canPlay:p.canPlay.mux,lazyPlayer:(0,c.lazy)((()=>r.e(723).then(r.t.bind(r,5172,23))))},{key:"facebook",name:"Facebook",canPlay:p.canPlay.facebook,lazyPlayer:(0,c.lazy)((()=>r.e(887).then(r.t.bind(r,8481,23))))},{key:"streamable",name:"Streamable",canPlay:p.canPlay.streamable,lazyPlayer:(0,c.lazy)((()=>r.e(627).then(r.t.bind(r,6753,23))))},{key:"wistia",name:"Wistia",canPlay:p.canPlay.wistia,lazyPlayer:(0,c.lazy)((()=>r.e(340).then(r.t.bind(r,7724,23))))},{key:"twitch",name:"Twitch",canPlay:p.canPlay.twitch,lazyPlayer:(0,c.lazy)((()=>r.e(42).then(r.t.bind(r,5954,23))))},{key:"dailymotion",name:"DailyMotion",canPlay:p.canPlay.dailymotion,lazyPlayer:(0,c.lazy)((()=>r.e(328).then(r.t.bind(r,5998,23))))},{key:"mixcloud",name:"Mixcloud",canPlay:p.canPlay.mixcloud,lazyPlayer:(0,c.lazy)((()=>r.e(570).then(r.t.bind(r,798,23))))},{key:"vidyard",name:"Vidyard",canPlay:p.canPlay.vidyard,lazyPlayer:(0,c.lazy)((()=>r.e(392).then(r.t.bind(r,1342,23))))},{key:"kaltura",name:"Kaltura",canPlay:p.canPlay.kaltura,lazyPlayer:(0,c.lazy)((()=>r.e(463).then(r.t.bind(r,831,23))))},{key:"file",name:"FilePlayer",canPlay:p.canPlay.file,canEnablePIP:e=>p.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,c.supportsWebKitPresentationMode)())&&!p.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,c.lazy)((()=>r.e(458).then(r.t.bind(r,1418,23))))}]},914:function(e,t,r){var n,a=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of s(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},p={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(p,{defaultProps:()=>_,propTypes:()=>O}),e.exports=(n=p,c(o({},"__esModule",{value:!0}),n));var d=((e,t,r)=>(r=null!=e?a(l(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(2736));const{string:y,bool:f,number:h,array:m,oneOfType:b,shape:g,object:P,func:v,node:w}=d.default,O={url:b([y,m,P]),playing:f,loop:f,controls:f,volume:h,muted:f,playbackRate:h,width:b([y,h]),height:b([y,h]),style:P,progressInterval:h,playsinline:f,pip:f,stopOnUnmount:f,light:b([f,y,P]),playIcon:w,previewTabIndex:h,previewAriaLabel:y,fallback:w,oEmbedUrl:y,wrapper:b([y,v,g({render:v.isRequired})]),config:g({soundcloud:g({options:P}),youtube:g({playerVars:P,embedOptions:P,onUnstarted:v}),facebook:g({appId:y,version:y,playerId:y,attributes:P}),dailymotion:g({params:P}),vimeo:g({playerOptions:P,title:y}),mux:g({attributes:P,version:y}),file:g({attributes:P,tracks:m,forceVideo:f,forceAudio:f,forceHLS:f,forceSafariHLS:f,forceDisableHls:f,forceDASH:f,forceFLV:f,hlsOptions:P,hlsVersion:y,dashVersion:y,flvVersion:y}),wistia:g({options:P,playerId:y,customControls:m}),mixcloud:g({options:P}),twitch:g({options:P,playerId:y}),vidyard:g({options:P})}),onReady:v,onStart:v,onPlay:v,onPause:v,onBuffer:v,onBufferEnd:v,onEnded:v,onError:v,onDuration:v,onSeek:v,onPlaybackRateChange:v,onPlaybackQualityChange:v,onProgress:v,onClickPreview:v,onEnablePIP:v,onDisablePIP:v},k=()=>{},_={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:k},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:k,onStart:k,onPlay:k,onPause:k,onBuffer:k,onBufferEnd:k,onEnded:k,onError:k,onDuration:k,onSeek:k,onPlaybackRateChange:k,onPlaybackQualityChange:k,onProgress:k,onClickPreview:k,onEnablePIP:k,onDisablePIP:k}},3361:function(e,t,r){var n,a=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of s(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},p=(e,t,r)=>(r=null!=e?a(l(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),d={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(d,{callPlayer:()=>I,getConfig:()=>A,getSDK:()=>j,isBlobUrl:()=>M,isMediaStream:()=>R,lazy:()=>m,omit:()=>C,parseEndTime:()=>k,parseStartTime:()=>O,queryString:()=>E,randomString:()=>_,supportsWebKitPresentationMode:()=>x}),e.exports=(n=d,c(o({},"__esModule",{value:!0}),n));var y=p(r(7953)),f=p(r(7784)),h=p(r(5334));const m=e=>y.default.lazy((async()=>{const t=await e();return"function"==typeof t.default?t:t.default})),b=/[?&#](?:start|t)=([0-9hms]+)/,g=/[?&#]end=([0-9hms]+)/,P=/(\d+)(h|m|s)/g,v=/^\d+$/;function w(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const e=r[1];if(e.match(P))return function(e){let t=0,r=P.exec(e);for(;null!==r;){const[,n,a]=r;"h"===a&&(t+=60*parseInt(n,10)*60),"m"===a&&(t+=60*parseInt(n,10)),"s"===a&&(t+=parseInt(n,10)),r=P.exec(e)}return t}(e);if(v.test(e))return parseInt(e)}}function O(e){return w(e,b)}function k(e){return w(e,g)}function _(){return Math.random().toString(36).substr(2,5)}function E(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function T(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const S={},j=function(e){0;return e}((function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>!0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:f.default;const o=T(t);return o&&n(o)?Promise.resolve(o):new Promise(((n,o)=>{if(S[e])return void S[e].push({resolve:n,reject:o});S[e]=[{resolve:n,reject:o}];const i=t=>{S[e].forEach((e=>e.resolve(t)))};if(r){const e=window[r];window[r]=function(){e&&e(),i(T(t))}}a(e,(n=>{n?(S[e].forEach((e=>e.reject(n))),S[e]=null):r||i(T(t))}))}))}));function A(e,t){return(0,h.default)(t.config,e.config)}function C(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];const a=[].concat(...r),o={},i=Object.keys(e);for(const s of i)-1===a.indexOf(s)&&(o[s]=e[s]);return o}function I(e){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return this.player[e](...r)}function R(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function M(e){return/^blob:/.test(e)}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.createElement("video");const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}},19:function(e,t,r){"use strict";r.r(t);var n=r(7953),a=r(9576),o=r.n(a),i=r(5736);r(1999),r(4149);t.default=()=>n.createElement("div",{className:""},n.createElement(i.A,null,n.createElement("div",{className:""},n.createElement("p",{className:"fadeInAnimation b f-subheadline pb4"},"A mix of electronic Jazz, glitch and experimental sounds."),n.createElement("div",{className:"cf"},n.createElement("div",{className:"fl w-100 w-50-ns pa0"},n.createElement("p",{className:"ma0 pr4"},"From somewhat traditional electronic music to purely synthezised noises and unquantized beats, Giorgio Martini creates music that feels fresh, different and alive.")),n.createElement("div",{className:"fl w-100 w-50-ns pa0"},n.createElement(o(),{url:"https://soundcloud.com/giorgiomartini",width:"100%"}))))),n.createElement("div",{className:""}))},4149:function(e,t,r){"use strict";r.d(t,{A:function(){return d}});var n=r(519),a=r(7953),o=r(4246);let i,s,l,u;function c(e){function t(t){let{color:r,weight:n,length:a}=t;console.log({color:r,weight:n,length:a});let o=[],i=e.createVector(0,0),s=10*Math.random(),l=10*Math.random(),u=e.width/3,c=a,p=0;return{display:function(){p+=.01;let t=e.noise(p);e.map(t,0,1,-250,200),o.length>c&&o.splice(0,1),i.set(u*e.sin(s),u*e.sin(l)),o.push([i.x,i.y]),e.stroke(r),e.strokeWeight(n),e.strokeCap(e.PROJECT),e.beginShape(),o.forEach(((t,r)=>{e.curveVertex(t[0],t[1])})),e.endShape(),s+=.01,l+=.011}}}e.setup=()=>{let r={color:255,weight:e.width/25,length:e.height/8},n={color:255,weight:e.width/5,length:e.height/20};e.createCanvas(800,500),e.background("#18020C"),l=t(r),u=t(n),i=p(!1,e),s=p(!0,e)},e.draw=()=>{e.background("#18020C"),e.translate(e.width/2,e.height/2),l.display(),u.display(),i.display(),s.display()}}function p(e,t){void 0===e&&(e=!1);let r=[],n=255,a=t.createVector(0,0),o=t.createVector(0,0),i=e?90:0,s=e?90:0,l=e?90:0,u=e?90:0,c=e?250:300,p=e?250:300;return{display:function(){a.set(c*t.sin(i),c*t.sin(s)),o.set(p*t.sin(l),p*t.sin(u)),r.push([a.x,a.y,o.x,o.y]),r.length>60&&r.splice(0,1),n=e?"#E5FFDE":"#634B66",r.forEach(((e,r)=>{t.stroke(n),t.strokeWeight(2),t.line(e[0],e[1],e[2],e[3])})),i+=e?.03:.04,s+=e?.002:.012,l+=e?.015:.025,u+=e?.02:.03}}}let d=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.A)(t,e),t.prototype.render=function(){return a.createElement(o.A,{sketch:c})},t}(a.Component)},6186:function(e,t,r){"use strict";var n=r(2985);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,o,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return r.PropTypes=r,r}},2736:function(e,t,r){e.exports=r(6186)()},2985:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=component---src-pages-music-js-01da326a45fbeb46d8c7.js.map