define("node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-html-languageservice/services/htmlCompletion",function(e,t){"use strict";function n(e){return/^["']*$/.test(e)}function r(e){return/^\s*$/.test(e)}function a(e,t,n,r){for(var a=u.createScanner(e,t,n),o=a.scan();o===c.TokenType.Whitespace;)o=a.scan();return o===r}function o(e,t,n){for(;t>n&&!r(e[t-1]);)t--;return t}function i(e,t,n){for(;n>t&&!r(e[t]);)t++;return t}Object.defineProperty(t,"__esModule",{value:!0});var s=e("node_modules/tslib/tslib"),l=e("node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-languageserver-types/main"),u=e("node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-html-languageservice/parser/htmlScanner"),c=e("node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-html-languageservice/htmlLanguageTypes"),d=e("node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-html-languageservice/parser/htmlEntities"),T=s.__importStar(e("node_modules/monaco-editor/esm/vs/language/html/fillers/vscode-nls")),f=e("node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-html-languageservice/utils/strings"),m=e("node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-html-languageservice/languageFacts/builtinDataProviders"),g=e("node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-html-languageservice/languageFacts/fact"),p=T.loadMessageBundle(),v=function(){function e(){this.completionParticipants=[]}return e.prototype.setCompletionParticipants=function(e){this.completionParticipants=e||[]},e.prototype.doComplete=function(e,t,s,T){function v(t,n){return void 0===n&&(n=$),t>$&&(t=$),{start:e.positionAt(t),end:e.positionAt(n)}}function k(e,t){var n=v(e,t);return K.forEach(function(e){e.provideTags().forEach(function(e){_.items.push({label:e.name,kind:l.CompletionItemKind.Property,documentation:e.description,textEdit:l.TextEdit.replace(n,e.name),insertTextFormat:l.InsertTextFormat.PlainText})})}),_}function E(e){for(var t=e;t>0;){var n=V.charAt(t-1);if("\n\r".indexOf(n)>=0)return V.substring(t,e);if(!r(n))return null;t--}return V.substring(0,e)}function h(e,t,n){void 0===n&&(n=$);var r=v(e,n),o=a(V,n,c.ScannerState.WithinEndTag,c.TokenType.EndTagClose)?"":">",i=D;for(t&&(i=i.parent);i;){var s=i.tag;if(s&&(!i.closed||i.endTagStart&&i.endTagStart>$)){var u={label:"/"+s,kind:l.CompletionItemKind.Property,filterText:"/"+s+o,textEdit:l.TextEdit.replace(r,"/"+s+o),insertTextFormat:l.InsertTextFormat.PlainText},d=E(i.start),T=E(e-1);if(null!==d&&null!==T&&d!==T){var f=d+"</"+s+o;u.textEdit=l.TextEdit.replace(v(e-1-T.length),f),u.filterText=T+"</"+s+o}return _.items.push(u),_}i=i.parent}return t?_:(K.forEach(function(e){e.provideTags().forEach(function(e){_.items.push({label:"/"+e.name,kind:l.CompletionItemKind.Property,documentation:e.description,filterText:"/"+e+o,textEdit:l.TextEdit.replace(r,"/"+e+o),insertTextFormat:l.InsertTextFormat.PlainText})})}),_)}function x(t,n){if(T&&T.hideAutoCompleteProposals)return _;if(!g.isVoidElement(n)){var r=e.positionAt(t);_.items.push({label:"</"+n+">",kind:l.CompletionItemKind.Property,filterText:"</"+n+">",textEdit:l.TextEdit.insert(r,"$0</"+n+">"),insertTextFormat:l.InsertTextFormat.Snippet})}return _}function S(e,t){return k(e,t),h(e,!0,t),_}function b(e,t){void 0===t&&(t=$);for(var n=$;t>n&&"<"!==V[n];)n++;var r=v(e,n),o=a(V,t,c.ScannerState.AfterAttributeName,c.TokenType.DelimiterAssign)?"":'="$1"',i=W.toLowerCase(),s=Object.create(null);return K.forEach(function(e){e.provideAttributes(i).forEach(function(e){if(!s[e.name]){s[e.name]=!0;var t,n=e.name;"v"!==e.valueSet&&o.length&&(n+=o,e.valueSet&&(t={title:"Suggest",command:"editor.action.triggerSuggest"})),_.items.push({label:e.name,kind:"handler"===e.valueSet?l.CompletionItemKind.Function:l.CompletionItemKind.Value,documentation:e.description,textEdit:l.TextEdit.replace(r,n),insertTextFormat:l.InsertTextFormat.Snippet,command:t})}})}),y(r,s),_}function y(e,t){function n(e){e.attributeNames.forEach(function(e){!f.startsWith(e,r)||a[e]||t[e]||(a[e]=e+'="$1"')}),e.children.forEach(function(e){return n(e)})}var r="data-",a={};a[r]=r+'$1="$2"',s&&s.roots.forEach(function(e){return n(e)}),Object.keys(a).forEach(function(t){return _.items.push({label:t,kind:l.CompletionItemKind.Value,textEdit:l.TextEdit.replace(e,a[t]),insertTextFormat:l.InsertTextFormat.Snippet})})}function C(r,a){void 0===a&&(a=$);var s,u,c;if($>r&&a>=$&&n(V[r])){var d=r+1,T=a;a>r&&V[a-1]===V[r]&&T--;var f=o(V,$,d),m=i(V,$,T);s=v(f,m),c=$>=d&&T>=$?V.substring(d,$):"",u=!1}else s=v(r,a),c=V.substring(r,$),u=!0;var g=W.toLowerCase(),p=L.toLowerCase();if(F.length>0)for(var k=v(r,a),E=0,h=F;E<h.length;E++){var x=h[E];x.onHtmlAttributeValue&&x.onHtmlAttributeValue({document:e,position:t,tag:g,attribute:p,value:c,range:k})}return K.forEach(function(e){e.provideValues(g,p).forEach(function(e){var t=u?'"'+e.name+'"':e.name;_.items.push({label:e.name,filterText:t,kind:l.CompletionItemKind.Unit,textEdit:l.TextEdit.replace(s,t),insertTextFormat:l.InsertTextFormat.PlainText})})}),I(),_}function A(e){return $===N.getTokenEnd()&&(w=N.scan(),w===e&&N.getTokenOffset()===$)?N.getTokenEnd():$}function O(){for(var n=0,r=F;n<r.length;n++){var a=r[n];a.onHtmlContent&&a.onHtmlContent({document:e,position:t})}return I()}function I(){for(var e=$-1,n=t.character;e>=0&&f.isLetterOrDigit(V,e);)e--,n--;if(e>=0&&"&"===V[e]){var r=l.Range.create(l.Position.create(t.line,n-1),t);for(var a in d.entities)if(f.endsWith(a,";")){var o="&"+a;_.items.push({label:o,kind:l.CompletionItemKind.Keyword,documentation:p("entity.propose","Character entity representing '"+d.entities[a]+"'"),textEdit:l.TextEdit.replace(r,o),insertTextFormat:l.InsertTextFormat.PlainText})}}return _}function P(e,t){var n=v(e,t);_.items.push({label:"!DOCTYPE",kind:l.CompletionItemKind.Property,documentation:"A preamble for an HTML document.",textEdit:l.TextEdit.replace(n,"!DOCTYPE html>"),insertTextFormat:l.InsertTextFormat.PlainText})}var _={isIncomplete:!1,items:[]},F=this.completionParticipants,K=m.getAllDataProviders().filter(function(t){return t.isApplicable(e.languageId)&&(!T||T[t.getId()]!==!1)}),V=e.getText(),$=e.offsetAt(t),D=s.findNodeBefore($);if(!D)return _;for(var L,N=u.createScanner(V,D.start),W="",w=N.scan();w!==c.TokenType.EOS&&N.getTokenOffset()<=$;){switch(w){case c.TokenType.StartTagOpen:if(N.getTokenEnd()===$){var H=A(c.TokenType.StartTag);return 0===t.line&&P($,H),S($,H)}break;case c.TokenType.StartTag:if(N.getTokenOffset()<=$&&$<=N.getTokenEnd())return k(N.getTokenOffset(),N.getTokenEnd());W=N.getTokenText();break;case c.TokenType.AttributeName:if(N.getTokenOffset()<=$&&$<=N.getTokenEnd())return b(N.getTokenOffset(),N.getTokenEnd());L=N.getTokenText();break;case c.TokenType.DelimiterAssign:if(N.getTokenEnd()===$){var H=A(c.TokenType.AttributeValue);return C($,H)}break;case c.TokenType.AttributeValue:if(N.getTokenOffset()<=$&&$<=N.getTokenEnd())return C(N.getTokenOffset(),N.getTokenEnd());break;case c.TokenType.Whitespace:if($<=N.getTokenEnd())switch(N.getScannerState()){case c.ScannerState.AfterOpeningStartTag:var B=N.getTokenOffset(),M=A(c.TokenType.StartTag);return S(B,M);case c.ScannerState.WithinTag:case c.ScannerState.AfterAttributeName:return b(N.getTokenEnd());case c.ScannerState.BeforeAttributeValue:return C(N.getTokenEnd());case c.ScannerState.AfterOpeningEndTag:return h(N.getTokenOffset()-1,!1);case c.ScannerState.WithinContent:return O()}break;case c.TokenType.EndTagOpen:if($<=N.getTokenEnd()){var j=N.getTokenOffset()+1,Y=A(c.TokenType.EndTag);return h(j,!1,Y)}break;case c.TokenType.EndTag:if($<=N.getTokenEnd())for(var R=N.getTokenOffset()-1;R>=0;){var U=V.charAt(R);if("/"===U)return h(R,!1,N.getTokenEnd());if(!r(U))break;R--}break;case c.TokenType.StartTagClose:if($<=N.getTokenEnd()&&W)return x(N.getTokenEnd(),W);break;case c.TokenType.Content:if($<=N.getTokenEnd())return O();break;default:if($<=N.getTokenEnd())return _}w=N.scan()}return _},e.prototype.doTagComplete=function(e,t,n){var r=e.offsetAt(t);if(0>=r)return null;var a=e.getText().charAt(r-1);if(">"===a){var o=n.findNodeBefore(r);if(o&&o.tag&&!g.isVoidElement(o.tag)&&o.start<r&&(!o.endTagStart||o.endTagStart>r))for(var i=u.createScanner(e.getText(),o.start),s=i.scan();s!==c.TokenType.EOS&&i.getTokenEnd()<=r;){if(s===c.TokenType.StartTagClose&&i.getTokenEnd()===r)return"$0</"+o.tag+">";s=i.scan()}}else if("/"===a){for(var o=n.findNodeBefore(r);o&&o.closed;)o=o.parent;if(o&&o.tag)for(var i=u.createScanner(e.getText(),o.start),s=i.scan();s!==c.TokenType.EOS&&i.getTokenEnd()<=r;){if(s===c.TokenType.EndTagOpen&&i.getTokenEnd()===r)return o.tag+">";s=i.scan()}}return null},e}();t.HTMLCompletion=v});