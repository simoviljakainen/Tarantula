/*
 * Ext JS Library 1.1
 * Copyright(c) 2006-2007, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://www.extjs.com/license
 */


Ext.QuickTips=function(){var el,_2,_3,_4,tm,_6,_7,_8={},_9,_a=null,_b,_c;var ce,bd,xy,dd;var _11=false,_12=true,_13=false;var _14=1,_15=1,_16=1,_17=[];var _18=function(e){if(_12){return;}var t=e.getTarget();if(!t||t.nodeType!==1||t==document||t==document.body){return;}if(ce&&t==ce.el){clearTimeout(_15);return;}if(t&&_8[t.id]){_8[t.id].el=t;_14=_1b.defer(tm.showDelay,tm,[_8[t.id]]);return;}var ttp,et=Ext.fly(t);var ns=_6.namespace;if(tm.interceptTitles&&t.title){ttp=t.title;t.qtip=ttp;t.removeAttribute("title");e.preventDefault();}else{ttp=t.qtip||et.getAttributeNS(ns,_6.attribute);}if(ttp){_14=_1b.defer(tm.showDelay,tm,[{el:t,text:ttp,width:et.getAttributeNS(ns,_6.width),autoHide:et.getAttributeNS(ns,_6.hide)!="user",title:et.getAttributeNS(ns,_6.title),cls:et.getAttributeNS(ns,_6.cls)}]);}};var _1f=function(e){clearTimeout(_14);var t=e.getTarget();if(t&&ce&&ce.el==t&&(tm.autoHide&&ce.autoHide!==false)){_15=setTimeout(_22,tm.hideDelay);}};var _23=function(e){if(_12){return;}xy=e.getXY();xy[1]+=18;if(tm.trackMouse&&ce){el.setXY(xy);}};var _25=function(e){clearTimeout(_14);clearTimeout(_15);if(!e.within(el)){if(tm.hideOnClick){_22();tm.disable();}}};var _27=function(e){tm.enable();};var _29=function(){return _b.getPadding("l")+_c.getPadding("r");};var _1b=function(o){if(_12){return;}clearTimeout(_16);ce=o;if(_a){el.removeClass(_a);_a=null;}if(ce.cls){el.addClass(ce.cls);_a=ce.cls;}if(ce.title){_4.update(ce.title);_4.show();}else{_4.update("");_4.hide();}el.dom.style.width=tm.maxWidth+"px";_3.update(o.text);var p=_29(),w=ce.width;if(!w){var td=_3.dom;var aw=Math.max(td.offsetWidth,td.clientWidth,td.scrollWidth);if(aw>tm.maxWidth){w=tm.maxWidth;}else{if(aw<tm.minWidth){w=tm.minWidth;}else{w=aw;}}}el.setWidth(parseInt(w,10)+p);if(ce.autoHide===false){_7.setDisplayed(true);if(dd){dd.unlock();}}else{_7.setDisplayed(false);if(dd){dd.lock();}}if(xy){el.avoidY=xy[1]-18;el.setXY(xy);}if(tm.animate){el.setOpacity(0.1);el.setStyle("visibility","visible");el.fadeIn({callback:_2f});}else{_2f();}};var _2f=function(){if(ce){el.show();_9.enable();if(tm.autoDismiss&&ce.autoHide!==false){_16=setTimeout(_22,tm.autoDismissDelay);}}};var _22=function(_30){clearTimeout(_16);clearTimeout(_15);ce=null;if(el.isVisible()){_9.disable();if(_30!==true&&tm.animate){el.fadeOut({callback:_31});}else{_31();}}};var _31=function(){el.hide();if(_a){el.removeClass(_a);_a=null;}};return{minWidth:40,maxWidth:300,interceptTitles:false,trackMouse:false,hideOnClick:true,showDelay:500,hideDelay:200,autoHide:true,autoDismiss:true,autoDismissDelay:5000,animate:false,init:function(){tm=Ext.QuickTips;_6=tm.tagConfig;if(!_13){if(!Ext.isReady){Ext.onReady(Ext.QuickTips.init,Ext.QuickTips);return;}el=new Ext.Layer({cls:"x-tip",shadow:"drop",shim:true,constrain:true,shadowOffset:4});el.fxDefaults={stopFx:true};el.update("<div class=\"x-tip-top-left\"><div class=\"x-tip-top-right\"><div class=\"x-tip-top\"></div></div></div><div class=\"x-tip-bd-left\"><div class=\"x-tip-bd-right\"><div class=\"x-tip-bd\"><div class=\"x-tip-close\"></div><h3></h3><div class=\"x-tip-bd-inner\"></div><div class=\"x-clear\"></div></div></div></div><div class=\"x-tip-ft-left\"><div class=\"x-tip-ft-right\"><div class=\"x-tip-ft\"></div></div></div>");_4=el.child("h3");_4.enableDisplayMode("block");_2=el.child("div.x-tip-bd");_3=el.child("div.x-tip-bd-inner");_b=el.child("div.x-tip-bd-left");_c=el.child("div.x-tip-bd-right");_7=el.child("div.x-tip-close");_7.enableDisplayMode("block");_7.on("click",_22);var d=Ext.get(document);d.on("mousedown",_25);d.on("mouseup",_27);d.on("mouseover",_18);d.on("mouseout",_1f);d.on("mousemove",_23);_9=d.addKeyListener(27,_22);_9.disable();if(Ext.dd.DD){dd=el.initDD("default",null,{onDrag:function(){el.sync();}});dd.setHandleElId(_4.id);dd.lock();}_13=true;}this.enable();},register:function(_33){var cs=_33 instanceof Array?_33:arguments;for(var i=0,len=cs.length;i<len;i++){var c=cs[i];var _38=c.target;if(_38){if(_38 instanceof Array){for(var j=0,_3a=_38.length;j<_3a;j++){_8[_38[j]]=c;}}else{_8[typeof _38=="string"?_38:Ext.id(_38)]=c;}}}},unregister:function(el){delete _8[Ext.id(el)];},enable:function(){if(_13&&_12){_17.pop();if(_17.length<1){_12=false;}}},disable:function(){_12=true;clearTimeout(_14);clearTimeout(_15);clearTimeout(_16);if(ce){_22(true);}_17.push(1);},isEnabled:function(){return!_12;},tagConfig:{namespace:"ext",attribute:"qtip",width:"width",target:"target",title:"qtitle",hide:"hide",cls:"qclass"}};}();Ext.QuickTips.tips=Ext.QuickTips.register;
