function markerInitHighlightingOnLoad(){for(var e=document.getElementsByClassName("arendelle"),a=0;a<e.length;++a)e[a].innerHTML=highlight(e[a].innerHTML)}function highlight(e){e=e.replace(/\</g,"&lt;").replace(/\>/g,"&gt;");for(var a="",r=0;r<e.length;r++){var t=e[r];switch(t){case"[":case"]":case")":case"<":case">":case"{":case"}":case";":case",":a+=start+loop_color+middle+t+end;break;case"(":a+=start+loop_color+middle+t+end;var s="",l=!0;for(r++;r<e.length&&l;)")"==e[r]||","==e[r]||"["==e[r]?(a+=/^[\.a-z0-9 ]+$/i.test(s)?start+data_color+middle+s+end:highlight(s),a+=start+loop_color+middle+e[r]+end,l=!1):s+=e[r],r++;r--;break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case".":var o="",c=!0;for(o+=t,r++;r<e.length&&c;){if(!/[0-9\.]/g.test(e[r])){c=!1,r--;break}o+=e[r],r++}a+=start+number_color+middle+o+end;break;case"@":case"#":case"!":case"$":var n="",d=!0;for(n+=t,r++;r<e.length&&d;){if(!/[a-zA-Z0-9\?\. 3]/g.test(e[r])){d=!1,r--;break}n+=e[r],r++}a+=start+data_color+middle+n+end;break;case"/":var i="";if(r<e.length-1)if(r++,"/"==e[r]){for(i="//",r++;r<e.length&&"\n"!=e[r];)i+=e[r],r++;a+=start+comment_color+middle+i+end,r--}else if("*"==e[r]){r++,i="/*";for(var g=!0;r<e.length&&g;)"*"==e[r]&&r<e.length-1?(r++,"/"==e[r]?(i+="*/",g=!1):(i+="*"+e[r],r++)):(i+=e[r],r++);a+=start+comment_color+middle+i+end}else a+="/"+e[r];else a+="/";break;case"'":case'"':var h="",m=t,b=!0;for(r++;r<e.length&&b;){switch(e[r]){case m:a+=start+string_color+middle+m+h+m+end,b=!1,r--;break;case"\\":switch(r++,e[r]){case"(":for(var f=!0,_="",k=0;r<e.length&&f;)r++,"("==e[r]?k++:")"==e[r]?(0==k&&(f=!1,r++,h+=end+"\\("+highlight(_)+")"+start+string_color+middle),k--):_+=e[r];break;default:h+=start+data_color+middle+"\\"+e[r]+end,r++}r--;break;default:h+=e[r]}r++}break;case"\n":a+="<br>";break;case" ":a+="&nbsp;";break;case"	":a+="&nbsp;&nbsp;&nbsp;";break;default:a+=t}}return a}var version="1.00",start='<span style="color: #',bold_start='<span style="font-weight: bold; color: #',middle=';">',end="</span>",loop_color="D60073",data_color="4E00FC",comment_color="A0A0A0",string_color="BD00AD",number_color="6200A8",function_color="8C007F";