!function(){var a={},b=Object.prototype.toString;a.register=function(c,d){var e,f,g=a;if("[object String]"!=b.apply(c)||"[object Function]"!=b.apply(d))throw new Error("Path not string or Factory not a function");for(e=c.split(".");f=e.shift();)e.length?(void 0===g[f]&&(g[f]={}),g=g[f]):void 0===g[f]&&(g[f]=d.apply())},window.Base=a}(),Base.register("plugin.baseLoaded",function(){return!1}),Base.register("plugin.setBase",function(){return $.cacheScript=function(a,b){return b=$.extend(b||{},{dataType:"script",cache:!0,url:a}),jQuery.ajax(b)},function(a,b,c){$.cacheScript(b).done(function(){$.isFunction(c)&&c(),Base.plugin.baseLoaded=!0,Base.plugin.init()})}}),Base.register("plugin.cache",function(){var a={};return function(){return{add:function(b,c,d){this.isExist(b)?a[b].callback.push(d):a[b]={source:c,callback:[d],loaded:!1}},isExist:function(b){return!!a[b]},isLoaded:function(b){return a[b].loaded},setLoaded:function(b){a[b].loaded=!0;for(var c,d=0,e=a[b].callback.length;d<e;d++)c=a[b].callback[d],$.isFunction(c)&&c()},getCache:function(){return a},pushCallback:function(b,c){a[b].callback.push(c)}}}}),Base.register("plugin.load",function(){return function(a,b,c){var d=Base.plugin.cache();if($.isArray(b)||(c=b,b=[]),Base.plugin.baseLoaded)if(d.isExist(a)&&d.isLoaded(a))$.isFunction(c)&&c();else if(d.add(a,b,c),b.length){var e=[];$.each(b,function(a,b){e.push($.cacheScript(b))}),$.when.apply($,e).done(function(){d.setLoaded(a)})}else d.setLoaded(a);else d.add(a,b,c)}}),Base.register("plugin.init",function(){return function(){var a=Base.plugin.cache().getCache();for(var b in a)a.hasOwnProperty(b)&&(a[b].loaded||Base.plugin.load(b,a[b].source,a[b].callback))}}),$(function(){Base.plugin.setBase("default-widget",jsPath+"/default-widget.min.js")});