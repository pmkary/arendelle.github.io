function markerInitHighlightingOnLoad(){for(var a=document.getElementsByClassName("arendelle"),b=0;b<a.length;b++)a[b].innerHTML=markerHighlight(a[b].innerHTML)}function markerHighlight(a){var b="D60073",c="A0A0A0",d="8C007F",e="4E00FC",f="BD00AD",g="6200A8",h='<span style="color: #',i=';">',j="</span>",k="";a=a.replace("&lt;","<").replace("&gt;",">");for(var l=0;l<a.length;l++){var m=a[l];switch(m){case"[":case"]":case")":case"{":case"}":case";":k+=h+b+i+m+j;break;case"<":k+=h+b+i+"&lt;"+j;break;case">":k+=h+b+i+"&gt;"+j;break;case"(":case",":k+=h+b+i+m+j;var n="",o=!0;for(l++;l<a.length&&o;)/[\.a-z0-9 ]/i.test(a[l])?n+=a[l]:(o=!1,l--),l++;/^ *[a-z][\.a-z0-9 ]*$/i.test(n)?":"==a[l]?(k+=h+d+i+n+":"+j,l++):k+="("==m&&","==a[l]||"("==m&&")"==a[l]?h+e+i+n+j:markerHighlight(n):k+=markerHighlight(n),l--;break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case".":var p="",q=!0;for(p+=m,l++;l<a.length&&q;){if(!/[0-9\.]/.test(a[l])){q=!1,l--;break}p+=a[l],l++}k+=h+g+i+p+j;break;case"@":case"#":case"!":case"$":var r="",s=!0;for(r+=m,l++;l<a.length&&s;){if(!/[a-z0-9\?\. ]/i.test(a[l])){s=!1,l--;break}r+=a[l],l++}k+=h+e+i+r+j;break;case"/":var t="";if(l<a.length-1)if(l++,"/"===a[l]){for(t="//",l++;l<a.length&&"\n"!==a[l];)t+=a[l],l++;k+=h+c+i+t+j,l--}else if("*"===a[l]){l++,t="/*";for(var u=!0;l<a.length&&u;)"*"===a[l]&&l<a.length-1?(l++,"/"===a[l]?(t+="*/",u=!1):(t+="*"+a[l],l++)):(t+=a[l],l++);k+=h+c+i+t+j}else k+="/"+a[l];else k+="/";break;case"*":var v="";if(l<a.length-1)if(l++,"-"===a[l]){l++,v="*-";for(var w=!0;l<a.length&&w;)"-"===a[l]&&l<a.length-1?(l++,"*"===a[l]?(v+="-*",w=!1):(v+="-"+a[l],l++)):(v+=a[l],l++);k+=h+c+i+v+j}else k+="*"+a[l];else k+="*";break;case"-":var x="";if(l<a.length-1)if(l++,"-"===a[l]){for(x="--",l++;l<a.length&&"\n"!==a[l];)x+=a[l],l++;k+=h+c+i+x+j,l--}else k+="-";else k+="-";break;case"'":case'"':var y="",z=m,A=!0;for(l++;l<a.length&&A;){switch(a[l]){case z:k+=h+f+i+z+y+z+j,A=!1,l--;break;case"|":for(var B=!0,C="";l<a.length&&B;)l++,"|"===a[l]?(B=!1,l++,y+=j+"|"+markerHighlight(C)+"|"+h+f+i):C+=a[l];l--;break;case"\\":l++,y+=h+e+i+"\\"+a[l]+j;break;default:y+=a[l]}l++}break;case"\n":k+="<br>";break;case" ":k+="&nbsp;";break;case"	":k+="&nbsp;&nbsp;&nbsp;";break;default:k+=m}}return k}var marker_version="1.16";