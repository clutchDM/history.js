(function(a,b){"use strict";var c=a.History=a.History||{};if(typeof c.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");c.Adapter={handlers:{},_uid:1,uid:function(a){return a._uid||(a._uid=c.Adapter._uid++)},bind:function(a,b,d){var e=c.Adapter.uid(a);c.Adapter.handlers[e]=c.Adapter.handlers[e]||{},c.Adapter.handlers[e][b]=c.Adapter.handlers[e][b]||[],c.Adapter.handlers[e][b].push(d),a["on"+b]=function(a,b){return function(d){c.Adapter.trigger(a,b,d)}}(a,b)},trigger:function(a,b,d){d=d||{};var e=c.Adapter.uid(a),f,g;c.Adapter.handlers[e]=c.Adapter.handlers[e]||{},c.Adapter.handlers[e][b]=c.Adapter.handlers[e][b]||[];for(f=0,g=c.Adapter.handlers[e][b].length;f<g;++f)c.Adapter.handlers[e][b][f].apply(this,[d])},extractEventData:function(a,c){var d=c&&c[a]||b;return d},onDomLoad:function(a){require(["dojo/ready"],function(b){b(a)})}},typeof c.init!="undefined"&&c.init()})(window)