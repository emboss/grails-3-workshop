function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (time) {pug_html = pug_html + "\u003Cdiv class=\"current-time\"\u003E\u003Cp\u003EThe current time is:\u003C\u002Fp\u003E\u003Cspan class=\"time\"\u003E" + (pug_escape(null == (pug_interp = time) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";}.call(this,"time" in locals_for_with?locals_for_with.time:typeof time!=="undefined"?time:undefined));;return pug_html;};export default template;