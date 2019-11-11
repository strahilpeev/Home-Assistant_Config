!function(e){var t={};function i(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(s,o,function(t){return e[t]}.bind(null,o));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);let s=function(){if(window.fully&&"function"==typeof fully.getDeviceId)return fully.getDeviceId();if(!localStorage["lovelace-player-device-id"]){const e=()=>Math.floor(1e5*(1+Math.random())).toString(16).substring(1);localStorage["lovelace-player-device-id"]=`${e()}${e()}-${e()}${e()}`}return localStorage["lovelace-player-device-id"]}();function o(e){return document.querySelector("home-assistant").provideHass(e)}function n(){if(customElements.get("hui-view"))return!0;const e=document.createElement("partial-panel-resolver");e.hass=document.querySelector("home-assistant").hass,e.route={path:"/lovelace/"};try{document.querySelector("home-assistant").appendChild(e).catch(e=>{})}catch(t){document.querySelector("home-assistant").removeChild(e)}return!!customElements.get("hui-view")}function a(e,t,i=null){if((e=new Event(e,{bubbles:!0,cancelable:!1,composed:!0})).detail=t||{},i)i.dispatchEvent(e);else{var s=document.querySelector("home-assistant");(s=(s=(s=(s=(s=(s=(s=(s=(s=(s=(s=s&&s.shadowRoot)&&s.querySelector("home-assistant-main"))&&s.shadowRoot)&&s.querySelector("app-drawer-layout partial-panel-resolver"))&&s.shadowRoot||s)&&s.querySelector("ha-panel-lovelace"))&&s.shadowRoot)&&s.querySelector("hui-root"))&&s.shadowRoot)&&s.querySelector("ha-app-layout #view"))&&s.firstElementChild)&&s.dispatchEvent(e)}}const r="custom:";function l(e,t){const i=document.createElement("hui-error-card");return i.setConfig({type:"error",error:e,config:t}),i}function c(e,t){if(!t||"object"!=typeof t||!t.type)return l(`No ${e} type configured`,t);let i=t.type;if(i=i.startsWith(r)?i.substr(r.length):`hui-${i}-${e}`,customElements.get(i))return function(e,t){const i=document.createElement(e);try{i.setConfig(t)}catch(e){return l(e,t)}return i}(i,t);const s=l(`Custom element doesn't exist: ${i}.`,t);s.style.display="None";const o=setTimeout(()=>{s.style.display=""},2e3);return customElements.whenDefined(i).then(()=>{clearTimeout(o),a("ll-rebuild",{},s)}),s}function d(e,t=!1){a("hass-more-info",{entityId:e},document.querySelector("home-assistant"));const i=document.querySelector("home-assistant")._moreInfoEl;return i.large=t,i}const u=customElements.get("home-assistant-main")?Object.getPrototypeOf(customElements.get("home-assistant-main")):Object.getPrototypeOf(customElements.get("hui-view")),h=u.prototype.html,p=u.prototype.css;class m extends u{static get properties(){return{hass:{},config:{},noHass:{type:Boolean}}}setConfig(e){this._config=e,this.el?this.el.setConfig(e):this.el=this.create(e),this._hass&&(this.el.hass=this._hass),this.noHass&&o(this)}set config(e){this.setConfig(e)}set hass(e){this._hass=e,this.el&&(this.el.hass=e)}createRenderRoot(){return this}render(){return h`${this.el}`}}if(!customElements.get("card-maker")){class e extends m{create(e){return function(e){return c("card",e)}(e)}getCardSize(){return this.firstElementChild&&this.firstElementChild.getCardSize?this.firstElementChild.getCardSize():1}}customElements.define("card-maker",e)}if(!customElements.get("element-maker")){class e extends m{create(e){return function(e){return c("element",e)}(e)}}customElements.define("element-maker",e)}if(!customElements.get("entity-row-maker")){class e extends m{create(e){return function(e){const t=new Set(["call-service","divider","section","weblink"]);if(!e)return l("Invalid configuration given.",e);if("string"==typeof e&&(e={entity:e}),"object"!=typeof e||!e.entity&&!e.type)return l("Invalid configuration given.",e);const i=e.type||"default";if(t.has(i)||i.startsWith(r))return c("row",e);const s=e.entity.split(".",1)[0];return Object.assign(e,{type:{alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"}[s]||"text"}),c("entity-row",e)}(e)}}customElements.define("entity-row-maker",e)}function y(e,t,i=!1,s=null,o=!1){a("hass-more-info",{entityId:null});const n=document.querySelector("home-assistant")._moreInfoEl;n.close(),n.open();const r=document.createElement("div");r.innerHTML=`\n  <style>\n    app-toolbar {\n      color: var(--more-info-header-color);\n      background-color: var(--more-info-header-background);\n    }\n    .scrollable {\n      overflow: auto;\n      max-width: 100% !important;\n    }\n  </style>\n  ${o?"":`\n      <app-toolbar>\n        <paper-icon-button\n          icon="hass:close"\n          dialog-dismiss=""\n        ></paper-icon-button>\n        <div class="main-title" main-title="">\n          ${e}\n        </div>\n      </app-toolbar>\n      `}\n    <div class="scrollable">\n      <card-maker nohass>\n      </card-maker>\n    </div>\n  `;const l=r.querySelector(".scrollable");l.querySelector("card-maker").config=t,n.sizingTarget=l,n.large=i,n._page="none",n.shadowRoot.appendChild(r);let c={};if(s)for(var d in n.resetFit(),s)c[d]=n.style[d],n.style.setProperty(d,s[d]);return n._dialogOpenChanged=function(e){if(!e&&(this.stateObj&&this.fire("hass-more-info",{entityId:null}),this.shadowRoot==r.parentNode&&(this._page=null,this.shadowRoot.removeChild(r),s)))for(var t in n.resetFit(),c)c[t]?n.style.setProperty(t,c[t]):n.style.removeProperty(t)},n}customElements.define("browser-player",class extends u{static get properties(){return{hass:{}}}setConfig(e){this._config=e}handleMute(e){window.browser_mod.mute({})}handleVolumeChange(e){const t=parseFloat(e.target.value);window.browser_mod.set_volume({volume_level:t})}handleMoreInfo(e){d(window.browser_mod.entity_id)}handlePlayPause(e){window.browser_mod.player.paused?window.browser_mod.play({}):window.browser_mod.pause({})}render(){const e=window.browser_mod.player;return h`
    <ha-card>
      <div class="card-content">
      <paper-icon-button
        .icon=${e.muted?"mdi:volume-off":"mdi:volume-high"}
        @click=${this.handleMute}
      ></paper-icon-button>
      <ha-paper-slider
        min=0
        max=1
        step=0.01
        ?disabled=${e.muted}
        value=${e.volume}
        @change=${this.handleVolumeChange}
      ></ha-paper-slider>

      ${"stopped"===window.browser_mod.player_state?h`<div class="placeholder"></div>`:h`
          <paper-icon-button
            .icon=${e.paused?"mdi:play":"mdi:pause"}
            @click=${this.handlePlayPause}
            highlight
          ></paper-icon-button>
          `}
      <paper-icon-button
        .icon=${"mdi:settings"}
        @click=${this.handleMoreInfo}
      ></paper-icon-button>
      </div>

      <div class="device-id">
      ${s}
      </div>

    </ha-card>
    `}static get styles(){return p`
    paper-icon-button[highlight] {
      color: var(--accent-color);
    }
    .card-content {
      display: flex;
      justify-content: center;
    }
    .placeholder {
      width: 24px;
      padding: 8px;
    }
    .device-id {
      opacity: 0.7;
      font-size: xx-small;
      margin-top: -10px;
      user-select: all;
      -webkit-user-select: all;
      -moz-user-select: all;
      -ms-user-select: all;
    }
    `}});window.browser_mod=new class{set hass(e){if(!e)return;if(this._hass=e,this.hassPatched)return;const t=e.callService;e.callService=(e,i,o)=>{if(o&&o.deviceID)if(Array.isArray(o.deviceID)){const e=o.deviceID.indexOf("this");-1!==e&&(o.deviceID[e]=s)}else"this"===o.deviceID&&(o.deviceID=s);return t(e,i,o)},this.hassPatched=!0,document.querySelector("home-assistant").hassChanged(e,e)}playOnce(e){this._video&&this._video.play(),window.browser_mod.playedOnce||(window.browser_mod.player.play(),window.browser_mod.playedOnce=!0)}constructor(){window.setTimeout(n,500),window.hassConnection.then(e=>this.connect(e.conn)),this.player=new Audio,this.playedOnce=!1,this.autoclose_popup_active=!1;const e=this.update.bind(this);this.player.addEventListener("ended",e),this.player.addEventListener("play",e),this.player.addEventListener("pause",e),this.player.addEventListener("volumechange",e),document.addEventListener("visibilitychange",e),window.addEventListener("location-changed",e),window.addEventListener("click",this.playOnce),window.addEventListener("mousemove",this.no_blackout.bind(this)),window.addEventListener("mousedown",this.no_blackout.bind(this)),window.addEventListener("keydown",this.no_blackout.bind(this)),window.addEventListener("touchstart",this.no_blackout.bind(this)),o(this),window.fully&&(this._fullyMotion=!1,this._motionTimeout=void 0,fully.bind("screenOn","browser_mod.update();"),fully.bind("screenOff","browser_mod.update();"),fully.bind("pluggedAC","browser_mod.update();"),fully.bind("pluggedUSB","browser_mod.update();"),fully.bind("onBatteryLevelChanged","browser_mod.update();"),fully.bind("unplugged","browser_mod.update();"),fully.bind("networkReconnect","browser_mod.update();"),fully.bind("onMotion","browser_mod.fullyMotion();")),this._screenSaver=void 0,this._screenSaverTimer=void 0,this._screenSaverTime=0,this._blackout=document.createElement("div"),this._blackout.style.cssText="\n    position: fixed;\n    left: 0;\n    top: 0;\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    height: 100%;\n    background: black;\n    visibility: hidden;\n    ",document.body.appendChild(this._blackout)}connect(e){this.conn=e,e.subscribeMessage(e=>this.callback(e),{type:"browser_mod/connect",deviceID:s})}callback(e){switch(e.command){case"update":this.update(e);break;case"debug":this.debug(e);break;case"play":this.play(e);break;case"pause":this.pause(e);break;case"stop":this.stop(e);break;case"set_volume":this.set_volume(e);break;case"mute":this.mute(e);break;case"toast":this.toast(e);break;case"popup":this.popup(e);break;case"close-popup":this.close_popup(e);break;case"navigate":this.navigate(e);break;case"more-info":this.more_info(e);break;case"set-theme":this.set_theme(e);break;case"lovelace-reload":this.lovelace_reload(e);break;case"blackout":this.blackout(e);break;case"no-blackout":this.no_blackout(e)}}get player_state(){return this.player.src?this.player.ended?"stopped":this.player.paused?"paused":"playing":"stopped"}debug(e){y("deviceID",{type:"markdown",content:`# ${s}`}),alert(s)}_set_screensaver(e,t){if(clearTimeout(this._screenSaverTimer),e){if(-1==(t=parseInt(t)))return clearTimeout(this._screenSaverTimer),void(this._screenSaverTime=0);this._screenSaverTime=1e3*t,this._screenSaver=e,this._screenSaverTimer=setTimeout(this._screenSaver,this._screenSaverTime)}else this._screenSaverTime&&(this._screenSaverTimer=setTimeout(this._screenSaver,this._screenSaverTime))}play(e){const t=e.media_content_id;t&&(this.player.src=t),this.player.play()}pause(e){this.player.pause()}stop(e){this.player.pause(),this.player.src=null}set_volume(e){void 0!==e.volume_level&&(this.player.volume=e.volume_level)}mute(e){void 0===e.mute&&(e.mute=!this.player.muted),this.player.muted=Boolean(e.mute)}toast(e){e.message&&a("hass-notification",{message:e.message,duration:void 0!==e.duration?parseInt(e.duration):void 0},document.querySelector("home-assistant"))}popup(e){if(!e.title&&!e.auto_close)return;if(!e.card)return;const t=()=>{y(e.title,e.card,e.large,e.style,e.auto_close),e.auto_close&&(this.autoclose_popup_active=!0)};e.auto_close&&e.time?this._set_screensaver(t,e.time):t()}close_popup(e){this._set_screensaver(),this.autoclose_popup_active=!1,function(){const e=document.querySelector("home-assistant")&&document.querySelector("home-assistant")._moreInfoEl;e&&e.close()}()}navigate(e){e.navigation_path&&(history.pushState(null,"",e.navigation_path),a("location-changed",{},document.querySelector("home-assistant")))}more_info(e){e.entity_id&&d(e.entity_id,e.large)}set_theme(e){e.theme||(e.theme="default"),a("settheme",e.theme,document.querySelector("home-assistant"))}lovelace_reload(e){const t=i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=document.querySelector("home-assistant"))&&i.shadowRoot)&&i.querySelector("home-assistant-main"))&&i.shadowRoot)&&i.querySelector("app-drawer-layout partial-panel-resolver"))&&i.shadowRoot||i)&&i.querySelector("ha-panel-lovelace"))&&i.shadowRoot)&&i.querySelector("hui-root"))&&i.shadowRoot)&&i.querySelector("ha-app-layout #view"))&&i.firstElementChild;var i;t&&a("config-refresh",{},t)}blackout(e){const t=()=>{window.fully?fully.turnScreenOff():this._blackout.style.visibility="visible",this.update()};e.time?this._set_screensaver(t,e.time):t()}no_blackout(e){if(this._set_screensaver(),this.autoclose_popup_active)return this.close_popup();window.fully?(fully.getScreenOn()||fully.turnScreenOn(),e.brightness&&fully.setScreenBrightness(e.brightness),this.update()):"hidden"!==this._blackout.style.visibility&&(this._blackout.style.visibility="hidden",this.update())}is_blackout(){return window.fully?!fully.getScreenOn():Boolean("visible"===this._blackout.style.visibility)}fullyMotion(){this._fullyMotion=!0,clearTimeout(this._motionTimeout),this._motionTimeout=setTimeout(()=>{this._fullyMotion=!1,this.update()},5e3),this.update()}start_camera(){this._video||(this._video=document.createElement("video"),this._video.autoplay=!0,this._video.playsInline=!0,this._video.style.cssText="\n    visibility: hidden;\n    width: 0;\n    height: 0;\n    ",this._canvas=document.createElement("canvas"),this._canvas.style.cssText="\n    visibility: hidden;\n    width: 0;\n    height: 0;\n    ",document.body.appendChild(this._canvas),document.body.appendChild(this._video),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(e=>{this._video.srcObject=e,this._video.play(),this.send_cam()}))}send_cam(e){this._canvas.getContext("2d").drawImage(this._video,0,0,this._canvas.width,this._canvas.height),this.conn.sendMessage({type:"browser_mod/update",deviceID:s,data:{camera:this._canvas.toDataURL("image/png")}}),setTimeout(this.send_cam.bind(this),5e3)}update(e=null){this.conn&&(e&&(e.entity_id&&(this.entity_id=e.entity_id),e.camera&&this.start_camera()),this.conn.sendMessage({type:"browser_mod/update",deviceID:s,data:{browser:{path:window.location.pathname,visibility:document.visibilityState,userAgent:navigator.userAgent,currentUser:this._hass&&this._hass.user&&this._hass.user.name,fullyKiosk:!!window.fully||void 0,width:window.innerWidth,height:window.innerHeight},player:{volume:this.player.volume,muted:this.player.muted,src:this.player.src,state:this.player_state},screen:{blackout:this.is_blackout(),brightness:window.fully?fully.getScreenBrightness():void 0},fully:window.fully?{battery:window.fully?fully.getBatteryLevel():void 0,charging:window.fully?fully.isPlugged():void 0,motion:window.fully?this._fullyMotion:void 0}:void 0}}))}}}]);