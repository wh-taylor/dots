(()=>{var e={705:(e,o,t)=>{var r=t(639).Symbol;e.exports=r},239:(e,o,t)=>{var r=t(705),n=t(607),i=t(333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?n(e):i(e)}},561:(e,o,t)=>{var r=t(990),n=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(n,""):e}},957:e=>{var o="object"==typeof global&&global&&global.Object===Object&&global;e.exports=o},607:(e,o,t)=>{var r=t(705),n=Object.prototype,i=n.hasOwnProperty,a=n.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var o=i.call(e,s),t=e[s];try{e[s]=void 0;var r=!0}catch(e){}var n=a.call(e);return r&&(o?e[s]=t:delete e[s]),n}},333:e=>{var o=Object.prototype.toString;e.exports=function(e){return o.call(e)}},639:(e,o,t)=>{var r=t(957),n="object"==typeof self&&self&&self.Object===Object&&self,i=r||n||Function("return this")();e.exports=i},990:e=>{var o=/\s/;e.exports=function(e){for(var t=e.length;t--&&o.test(e.charAt(t)););return t}},279:(e,o,t)=>{var r=t(218),n=t(771),i=t(841),a=Math.max,s=Math.min;e.exports=function(e,o,t){var c,l,g,u,d,f,h=0,p=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(o){var t=c,r=l;return c=l=void 0,h=o,u=e.apply(r,t)}function w(e){return h=e,d=setTimeout($,o),p?b(e):u}function I(e){var t=e-f;return void 0===f||t>=o||t<0||m&&e-h>=g}function $(){var e=n();if(I(e))return T(e);d=setTimeout($,function(e){var t=o-(e-f);return m?s(t,g-(e-h)):t}(e))}function T(e){return d=void 0,v&&c?b(e):(c=l=void 0,u)}function C(){var e=n(),t=I(e);if(c=arguments,l=this,f=e,t){if(void 0===d)return w(f);if(m)return clearTimeout(d),d=setTimeout($,o),b(f)}return void 0===d&&(d=setTimeout($,o)),u}return o=i(o)||0,r(t)&&(p=!!t.leading,g=(m="maxWait"in t)?a(i(t.maxWait)||0,o):g,v="trailing"in t?!!t.trailing:v),C.cancel=function(){void 0!==d&&clearTimeout(d),h=0,c=f=l=d=void 0},C.flush=function(){return void 0===d?u:T(n())},C}},218:e=>{e.exports=function(e){var o=typeof e;return null!=e&&("object"==o||"function"==o)}},5:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},448:(e,o,t)=>{var r=t(239),n=t(5);e.exports=function(e){return"symbol"==typeof e||n(e)&&"[object Symbol]"==r(e)}},771:(e,o,t)=>{var r=t(639);e.exports=function(){return r.Date.now()}},493:(e,o,t)=>{var r=t(279),n=t(218);e.exports=function(e,o,t){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return n(t)&&(i="leading"in t?!!t.leading:i,a="trailing"in t?!!t.trailing:a),r(e,o,{leading:i,maxWait:o,trailing:a})}},841:(e,o,t)=>{var r=t(561),n=t(218),i=t(448),a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(n(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=n(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var t=s.test(e);return t||c.test(e)?l(e.slice(2),t?2:8):a.test(e)?NaN:+e}},140:function(e,o,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(o,"__esModule",{value:!0}),o.CustomDelay=void 0;const n=r(t(279)),i=r(t(493)),a=t(613),s=t(112),c=t(496);o.CustomDelay=class{constructor(e){this.cachedDiagnostics={},this.onDiagnosticChange=e=>{if(e.uris.length)for(const o of e.uris)this.updateCachedDiagnosticForUri(o);else this.cachedDiagnostics={}},this.updateCachedDiagnosticForUri=e=>{const o=e.toString(),t=c.languages.getDiagnostics(e),r=this.cachedDiagnostics[o],n={[o]:{}};for(const e of t)n[o]&&(n[o][this.convertDiagnosticToId(e)]=e);if(r){const t=n[o],i=Object.keys(r),a=Object.keys(t);for(const o of i)if(!a.includes(o))return void this.updateDecorationsThrottled(e);for(const o of a)if(!i.includes(o))return void this.updateDecorationsDebounced(e)}else this.cachedDiagnostics[o]=n[o],this.updateDecorationsThrottled(e)},this.updateDecorations=e=>{const o=e.toString(),t=c.languages.getDiagnostics(e),r=(0,a.groupDiagnosticsByLine)(t);this.cachedDiagnostics[o]={};for(const e of t)this.cachedDiagnostics[o][this.convertDiagnosticToId(e)]=e;for(const o of c.window.visibleTextEditors)o.document.uri.fsPath===e.fsPath&&(0,a.updateDecorationsForUri)(e,o,r);s.Global.statusBarIcons.updateText()},this.delay=Math.max(e,500)||500,this.updateDecorationsThrottled=(0,i.default)(this.updateDecorations,300,{leading:!0,trailing:!0}),this.updateDecorationsDebounced=(0,n.default)(this.updateDecorationsThrottled,this.delay,{leading:!1,trailing:!0})}convertDiagnosticToId(e){return`${e.range.start.line}_${e.message}`}}},49:(e,o,t)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.registerAllCommands=void 0;const r=t(112),n=t(310),i=t(496);o.registerAllCommands=function(e){const o=i.commands.registerCommand("errorLens.toggle",(()=>{(0,n.updateGlobalSetting)("errorLens.enabled",!r.$config.enabled)})),t=i.commands.registerCommand("errorLens.toggleError",(()=>{(0,n.toggleEnabledLevels)("error",r.$config.enabledDiagnosticLevels)})),a=i.commands.registerCommand("errorLens.toggleWarning",(()=>{(0,n.toggleEnabledLevels)("warning",r.$config.enabledDiagnosticLevels)})),s=i.commands.registerCommand("errorLens.toggleInfo",(()=>{(0,n.toggleEnabledLevels)("info",r.$config.enabledDiagnosticLevels)})),c=i.commands.registerCommand("errorLens.toggleHint",(()=>{(0,n.toggleEnabledLevels)("hint",r.$config.enabledDiagnosticLevels)})),l=i.commands.registerTextEditorCommand("errorLens.copyProblemMessage",(e=>{const o={};for(const t of i.languages.getDiagnostics(e.document.uri)){const e=t.range.start.line;o[e]?o[e].push(t):o[e]=[t]}const t=o[e.selection.active.line];if(!t)return void i.window.showInformationMessage("There's no problem at the active line.");const r=t.sort(((e,o)=>e.severity-o.severity))[0],n=r.source?`[${r.source}] `:"";i.env.clipboard.writeText(n+r.message)})),g=i.commands.registerTextEditorCommand("errorLens.statusBarCommand",(async e=>{if("goToLine"===r.$config.statusBarCommand||"goToProblem"===r.$config.statusBarCommand){const o=new i.Range(r.Global.statusBarMessage.activeMessagePosition,r.Global.statusBarMessage.activeMessagePosition);e.selection=new i.Selection(o.start,o.end),e.revealRange(o,i.TextEditorRevealType.Default),await i.commands.executeCommand("workbench.action.focusActiveEditorGroup"),"goToProblem"===r.$config.statusBarCommand&&i.commands.executeCommand("editor.action.marker.next")}else if("copyMessage"===r.$config.statusBarCommand){const e=r.Global.statusBarMessage.activeMessageSource?`[${r.Global.statusBarMessage.activeMessageSource}] `:"";i.env.clipboard.writeText(e+r.Global.statusBarMessage.activeMessageText)}})),u=i.commands.registerCommand("errorLens.revealLine",(async(e,[o,t])=>{const r=new i.Range(o,t,o,t),n=await i.workspace.openTextDocument(e),a=await i.window.showTextDocument(n);a.revealRange(r),a.selection=new i.Selection(r.start.line,r.start.character,r.start.line,r.start.character)}));e.subscriptions.push(o,t,a,s,c,l,g,u)}},613:(e,o,t)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.diagnosticToInlineMessage=o.isSeverityEnabled=o.shouldExcludeDiagnostic=o.groupDiagnosticsByLine=o.updateDecorationsForUri=o.updateDecorationsForAllVisibleEditors=o.doUpdateDecorations=o.setDecorationStyle=void 0;const r=t(112),n=t(394),i=t(593),a=t(496);function s(e,o,t){const a=[],s=[],c=[],l=[];let g;if("closestProblem"===r.$config.followCursor){void 0===t&&(t=e.selection);const n=t.start.line,i=Object.entries(o).sort(((e,o)=>Math.abs(n-Number(e[0]))-Math.abs(n-Number(o[0]))));i.length=r.$config.followCursorMore+1,g=i.map((e=>e[1][0].range.start.line))}for(const n in o){const f=o[n].sort(((e,o)=>e.severity-o.severity)),h=f[0],p=h.severity;if(u(p)){const o=d(r.$config.messageTemplate,h,f.length),n={after:{contentText:r.$config.messageEnabled?(0,i.truncateString)(r.$config.removeLinebreaks?(0,i.replaceLinebreaks)(o):o,r.$config.messageMaxChars):""}};let u;if("allLines"===r.$config.followCursor)u=h.range;else{void 0===t&&(t=e.selection);const o=h.range;if("activeLine"===r.$config.followCursor){const e=t.start.line-r.$config.followCursorMore,n=t.end.line+r.$config.followCursorMore;(o.start.line>=e&&o.start.line<=n||o.end.line>=e&&o.end.line<=n)&&(u=o)}else if("allLinesExceptActive"===r.$config.followCursor){const e=t.start.line,r=t.end.line;u=o.start.line>=e&&o.start.line<=r||o.end.line>=e&&o.end.line<=r?void 0:o}else"closestProblem"===r.$config.followCursor&&(g.includes(o.start.line)||g.includes(o.end.line))&&(u=o);if(!u)continue}const m={range:u,renderOptions:n};switch(p){case 0:a.push(m);break;case 1:s.push(m);break;case 2:c.push(m);break;case 3:l.push(m)}}}e.setDecorations(r.Global.decorationTypeError,a),e.setDecorations(r.Global.decorationTypeWarning,s),e.setDecorations(r.Global.decorationTypeInfo,c),e.setDecorations(r.Global.decorationTypeHint,l),r.Global.renderGutterIconsAsSeparateDecoration&&(0,n.doUpdateGutterDecorations)(e,o),r.Global.statusBarMessage.updateText(e,o)}function c(e,o,t,n){if(void 0===o&&(o=a.window.activeTextEditor),o&&o.document.uri.fsPath&&(r.$config.enableOnDiffView||void 0!==o.viewColumn)){if(r.Global.excludePatterns)for(const e of r.Global.excludePatterns)if(0!==a.languages.match(e,o.document))return;s(o,t||l(a.languages.getDiagnostics(e)),n)}}function l(e){const o=Object.create(null);for(const t of e){if(g(t))continue;const e=t.range.start.line;o[e]?o[e].push(t):o[e]=[t]}return o}function g(e){if(e.source)for(const o of r.Global.excludeSources)if(o===e.source)return!0;for(const o of r.Global.excludeRegexp)if(o.test(e.message))return!0;return!1}function u(e){return!!(0===e&&r.Global.configErrorEnabled||1===e&&r.Global.configWarningEnabled||2===e&&r.Global.configInfoEnabled||3===e&&r.Global.configHintEnabled)}function d(e,o,t){if("$message"===e)return o.message;{let n=e.replace("$message",o.message).replace("$severity",r.$config.severityText[o.severity]||"");if(e.includes("$count")&&(n=t>1?n.replace("$count",String(t)):n.replace(/(\s*?)?(\S*?)?(\$count)(\S*?)?(\s*?)?/,((e,o,t,r,n,i)=>(o||"")+(i||"")))),e.includes("$source")&&(n=o.source?n.replace("$source",String(o.source)):n.replace(/(\s*?)?(\S*?)?(\$source)(\S*?)?(\s*?)?/,((e,o,t,r,n,i)=>(o||"")+(i||"")))),e.includes("$code")){const e="object"==typeof o.code?String(o.code.value):String(o.code);n=o.code?n.replace("$code",e):n.replace(/(\s*?)?(\S*?)?(\$code)(\S*?)?(\s*?)?/,((e,o,t,r,n,i)=>(o||"")+(i||"")))}return n}}o.setDecorationStyle=function(e){let o;r.Global.decorationTypeError?.dispose(),r.Global.decorationTypeWarning?.dispose(),r.Global.decorationTypeInfo?.dispose(),r.Global.decorationTypeHint?.dispose(),r.Global.decorationTypeGutterError?.dispose(),r.Global.decorationTypeGutterWarning?.dispose(),r.Global.decorationTypeGutterInfo?.dispose(),r.$config.gutterIconsEnabled&&(o=(0,n.getGutterStyles)(e),r.Global.renderGutterIconsAsSeparateDecoration&&(r.Global.decorationTypeGutterError=a.window.createTextEditorDecorationType({gutterIconPath:o.errorIconPath,gutterIconSize:r.$config.gutterIconSize,light:{gutterIconPath:o.errorIconPathLight,gutterIconSize:r.$config.gutterIconSize}}),r.Global.decorationTypeGutterWarning=a.window.createTextEditorDecorationType({gutterIconPath:o.warningIconPath,gutterIconSize:r.$config.gutterIconSize,light:{gutterIconPath:o.warningIconPathLight,gutterIconSize:r.$config.gutterIconSize}}),r.Global.decorationTypeGutterInfo=a.window.createTextEditorDecorationType({gutterIconPath:o.infoIconPath,gutterIconSize:r.$config.gutterIconSize,light:{gutterIconPath:o.infoIconPathLight,gutterIconSize:r.$config.gutterIconSize}}),o=void 0));let t=new a.ThemeColor("errorLens.errorBackground"),i=new a.ThemeColor("errorLens.errorBackgroundLight");const s=new a.ThemeColor("errorLens.errorForeground"),c=new a.ThemeColor("errorLens.errorForegroundLight");let l=new a.ThemeColor("errorLens.errorMessageBackground"),g=new a.ThemeColor("errorLens.warningBackground"),u=new a.ThemeColor("errorLens.warningBackgroundLight");const d=new a.ThemeColor("errorLens.warningForeground"),f=new a.ThemeColor("errorLens.warningForegroundLight");let h=new a.ThemeColor("errorLens.warningMessageBackground"),p=new a.ThemeColor("errorLens.infoBackground"),m=new a.ThemeColor("errorLens.infoBackgroundLight");const v=new a.ThemeColor("errorLens.infoForeground"),b=new a.ThemeColor("errorLens.infoForegroundLight");let w=new a.ThemeColor("errorLens.infoMessageBackground"),I=new a.ThemeColor("errorLens.hintBackground"),$=new a.ThemeColor("errorLens.hintBackgroundLight");const T=new a.ThemeColor("errorLens.hintForeground"),C=new a.ThemeColor("errorLens.hintForegroundLight");let S=new a.ThemeColor("errorLens.hintMessageBackground");const D=new a.ThemeColor("errorLens.statusBarErrorForeground"),y=new a.ThemeColor("errorLens.statusBarWarningForeground"),B=new a.ThemeColor("errorLens.statusBarInfoForeground"),x=new a.ThemeColor("errorLens.statusBarHintForeground");"line"===r.$config.messageBackgroundMode?(l=void 0,h=void 0,w=void 0,S=void 0):"message"===r.$config.messageBackgroundMode?(t=void 0,i=void 0,g=void 0,u=void 0,p=void 0,m=void 0,I=void 0,$=void 0):"none"===r.$config.messageBackgroundMode&&(t=void 0,i=void 0,g=void 0,u=void 0,p=void 0,m=void 0,I=void 0,$=void 0,l=void 0,h=void 0,w=void 0,S=void 0);const L=/^\d+$/,G=r.$config.fontFamily?`font-family:${r.$config.fontFamily}`:"",E=r.$config.fontSize?`font-size:${L.test(r.$config.fontSize)?`${r.$config.fontSize}px`:r.$config.fontSize}`:"",P=L.test(r.$config.margin)?`${r.$config.margin}px`:r.$config.margin,k=r.$config.padding?`padding:${L.test(r.$config.padding)?`${r.$config.padding}px`:r.$config.padding}`:"",M=`border-radius: ${r.$config.borderRadius||"0"}`,F=r.$config.scrollbarHackEnabled?"position:absolute;pointer-events:none;top:50%;transform:translateY(-50%);":"",A={fontStyle:r.$config.fontStyleItalic?"italic":"normal",fontWeight:r.$config.fontWeight,margin:`0 0 0 ${P}`,textDecoration:`none;${G};${E};${k};${M};${F}`},O={backgroundColor:t,gutterIconSize:r.$config.gutterIconSize,gutterIconPath:o?.errorIconPath,after:{...A,color:s,backgroundColor:l},light:{backgroundColor:i,gutterIconSize:r.$config.gutterIconSize,gutterIconPath:o?.errorIconPathLight,after:{color:c}},isWholeLine:!0},j={backgroundColor:g,gutterIconSize:r.$config.gutterIconSize,gutterIconPath:o?.warningIconPath,after:{...A,color:d,backgroundColor:h},light:{backgroundColor:u,gutterIconSize:r.$config.gutterIconSize,gutterIconPath:o?.warningIconPathLight,after:{color:f}},isWholeLine:!0},z={backgroundColor:p,gutterIconSize:r.$config.gutterIconSize,gutterIconPath:o?.infoIconPath,after:{...A,color:v,backgroundColor:w},light:{backgroundColor:m,gutterIconSize:r.$config.gutterIconSize,gutterIconPath:o?.infoIconPathLight,after:{color:b}},isWholeLine:!0},_={backgroundColor:I,after:{...A,color:T,backgroundColor:S},light:{backgroundColor:$,after:{color:C}},isWholeLine:!0};r.$config.messageEnabled||(O.backgroundColor=void 0,O.after=void 0,O.light.backgroundColor=void 0,O.light.after=void 0,j.backgroundColor=void 0,j.after=void 0,j.light.backgroundColor=void 0,j.light.after=void 0,z.backgroundColor=void 0,z.after=void 0,z.light.backgroundColor=void 0,z.light.after=void 0,_.backgroundColor=void 0,_.after=void 0,_.light.backgroundColor=void 0,_.light.after=void 0),r.Global.decorationTypeError=a.window.createTextEditorDecorationType(O),r.Global.decorationTypeWarning=a.window.createTextEditorDecorationType(j),r.Global.decorationTypeInfo=a.window.createTextEditorDecorationType(z),r.Global.decorationTypeHint=a.window.createTextEditorDecorationType(_),r.Global.statusBarMessage.statusBarColors=[D,y,B,x]},o.doUpdateDecorations=s,o.updateDecorationsForAllVisibleEditors=function(){for(const e of a.window.visibleTextEditors)c(e.document.uri,e)},o.updateDecorationsForUri=c,o.groupDiagnosticsByLine=l,o.shouldExcludeDiagnostic=g,o.isSeverityEnabled=u,o.diagnosticToInlineMessage=d},977:(e,o,t)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.updateOnSaveListener=o.updateCursorChangeListener=o.updateChangeDiagnosticListener=o.updateChangeVisibleTextEditorsListener=o.updateChangedActiveTextEditorListener=void 0;const r=t(140),n=t(613),i=t(112),a=t(496);o.updateChangedActiveTextEditorListener=function(){i.Global.onDidChangeActiveTextEditor?.dispose(),i.Global.onDidChangeActiveTextEditor=a.window.onDidChangeActiveTextEditor((e=>{i.$config.onSave&&(i.Global.lastSavedTimestamp=Date.now()),e?(0,n.updateDecorationsForUri)(e.document.uri,e):i.Global.statusBarMessage.clear()}))},o.updateChangeVisibleTextEditorsListener=function(){i.Global.onDidChangeVisibleTextEditors?.dispose(),i.Global.onDidChangeVisibleTextEditors=a.window.onDidChangeVisibleTextEditors(n.updateDecorationsForAllVisibleEditors)},o.updateChangeDiagnosticListener=function(){function e(e){for(const o of e.uris)for(const e of a.window.visibleTextEditors)o.fsPath===e.document.uri.fsPath&&(0,n.updateDecorationsForUri)(o,e);i.Global.statusBarIcons.updateText()}i.Global.onDidChangeDiagnosticsDisposable?.dispose(),i.$config.onSave?i.Global.onDidChangeDiagnosticsDisposable=a.languages.onDidChangeDiagnostics((o=>{Date.now()-i.Global.lastSavedTimestamp<i.$config.onSaveTimeout&&e(o)})):"number"==typeof i.$config.delay&&i.$config.delay>0?(i.Global.customDelay=new r.CustomDelay(i.$config.delay),i.Global.onDidChangeDiagnosticsDisposable=a.languages.onDidChangeDiagnostics(i.Global.customDelay.onDiagnosticChange)):i.Global.onDidChangeDiagnosticsDisposable=a.languages.onDidChangeDiagnostics(e)},o.updateCursorChangeListener=function(){if(i.Global.onDidCursorChangeDisposable?.dispose(),"activeLine"===i.$config.followCursor||"closestProblem"===i.$config.followCursor||"allLinesExceptActive"===i.$config.followCursor||i.$config.statusBarMessageEnabled){let e=999999;i.Global.onDidCursorChangeDisposable=a.window.onDidChangeTextEditorSelection((o=>{const t=o.selections[0];1===o.selections.length&&t.isEmpty&&e!==t.active.line&&((0,n.updateDecorationsForUri)(o.textEditor.document.uri,o.textEditor,void 0,t),e=o.selections[0].active.line)}))}},o.updateOnSaveListener=function(){i.Global.onDidSaveTextDocumentDisposable?.dispose(),i.$config.onSave&&(i.Global.onDidSaveTextDocumentDisposable=a.workspace.onWillSaveTextDocument((e=>{e.reason===a.TextDocumentSaveReason.Manual&&(setTimeout((()=>{(0,n.updateDecorationsForUri)(e.document.uri)}),200),i.Global.lastSavedTimestamp=Date.now())})))}},112:(e,o,t)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.deactivate=o.disposeEverything=o.updateEverything=o.activate=o.Global=o.$config=void 0;const r=t(49),n=t(613),i=t(977),a=t(358),s=t(274),c=t(496);class l{}function g(e){!function(){l.excludeRegexp=[],l.excludeSources=o.$config.excludeBySource;for(const e of o.$config.exclude)"string"==typeof e&&l.excludeRegexp.push(new RegExp(e,"i"));Array.isArray(o.$config.excludePatterns)&&0!==o.$config.excludePatterns.length?l.excludePatterns=o.$config.excludePatterns.map((e=>({pattern:e}))):l.excludePatterns=void 0}(),l.renderGutterIconsAsSeparateDecoration=o.$config.gutterIconsEnabled&&o.$config.gutterIconsFollowCursorOverride&&"allLines"!==o.$config.followCursor,l.statusBarMessage?.dispose(),l.statusBarIcons?.dispose(),l.statusBarMessage=new s.StatusBarMessage(o.$config.statusBarMessageEnabled,o.$config.statusBarColorsEnabled,o.$config.statusBarMessageType,o.$config.statusBarMessagePriority,o.$config.statusBarMessageAlignment),l.statusBarIcons=new a.StatusBarIcons(o.$config.statusBarIconsEnabled,o.$config.statusBarIconsAtZero,o.$config.statusBarIconsUseBackground,o.$config.statusBarIconsPriority,o.$config.statusBarIconsAlignment),(0,n.setDecorationStyle)(e),l.configErrorEnabled=o.$config.enabledDiagnosticLevels.includes("error"),l.configWarningEnabled=o.$config.enabledDiagnosticLevels.includes("warning"),l.configInfoEnabled=o.$config.enabledDiagnosticLevels.includes("info"),l.configHintEnabled=o.$config.enabledDiagnosticLevels.includes("hint"),(0,n.updateDecorationsForAllVisibleEditors)(),l.statusBarIcons.updateText(),(0,i.updateChangeDiagnosticListener)(),(0,i.updateChangeVisibleTextEditorsListener)(),(0,i.updateOnSaveListener)(),(0,i.updateCursorChangeListener)(),(0,i.updateChangedActiveTextEditorListener)()}function u(){l.decorationTypeError?.dispose(),l.decorationTypeWarning?.dispose(),l.decorationTypeInfo?.dispose(),l.decorationTypeHint?.dispose(),l.decorationTypeGutterError?.dispose(),l.decorationTypeGutterWarning?.dispose(),l.decorationTypeGutterInfo?.dispose(),l.onDidChangeVisibleTextEditors?.dispose(),l.onDidChangeDiagnosticsDisposable?.dispose(),l.onDidChangeActiveTextEditor?.dispose(),l.onDidSaveTextDocumentDisposable?.dispose(),l.onDidCursorChangeDisposable?.dispose(),l.statusBarMessage?.dispose(),l.statusBarIcons?.dispose()}o.Global=l,l.configErrorEnabled=!0,l.configWarningEnabled=!0,l.configInfoEnabled=!0,l.configHintEnabled=!0,l.excludeRegexp=[],l.excludeSources=[],l.excludePatterns=void 0,l.lastSavedTimestamp=Date.now()+2e3,o.activate=function(e){function t(){o.$config=c.workspace.getConfiguration().get("errorLens"),u(),o.$config.enabled&&g(e)}t(),(0,r.registerAllCommands)(e),e.subscriptions.push(c.workspace.onDidChangeConfiguration((e=>{e.affectsConfiguration("errorLens")&&t()})))},o.updateEverything=g,o.disposeEverything=u,o.deactivate=function(){}},394:(e,o,t)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.doUpdateGutterDecorations=o.getGutterStyles=void 0;const r=t(613),n=t(112),i=t(593);function a(e){return`<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30"><circle cx="15" cy="15" r="9" fill="%23${e.slice(1)}"/></svg>`}o.getGutterStyles=function(e){const o=Object.create(null);return o.iconSet=n.$config.gutterIconSet,"circle"===n.$config.gutterIconSet?(o.errorIconPath=(0,i.svgToUri)(a(n.$config.errorGutterIconColor)),o.errorIconPathLight=(0,i.svgToUri)(a(n.$config.light.errorGutterIconColor||n.$config.errorGutterIconColor)),o.warningIconPath=(0,i.svgToUri)(a(n.$config.warningGutterIconColor)),o.warningIconPathLight=(0,i.svgToUri)(a(n.$config.light.warningGutterIconColor||n.$config.warningGutterIconColor)),o.infoIconPath=(0,i.svgToUri)(a(n.$config.infoGutterIconColor)),o.infoIconPathLight=(0,i.svgToUri)(a(n.$config.light.infoGutterIconColor||n.$config.infoGutterIconColor))):(o.errorIconPath=e.asAbsolutePath(`./img/${o.iconSet}/error-dark.svg`),o.errorIconPathLight=e.asAbsolutePath(`./img/${o.iconSet}/error-light.svg`),o.warningIconPath=e.asAbsolutePath(`./img/${o.iconSet}/warning-dark.svg`),o.warningIconPathLight=e.asAbsolutePath(`./img/${o.iconSet}/warning-light.svg`),o.infoIconPath=e.asAbsolutePath(`./img/${o.iconSet}/info-dark.svg`),o.infoIconPathLight=e.asAbsolutePath(`./img/${o.iconSet}/info-light.svg`)),n.$config.errorGutterIconPath&&(o.errorIconPath=n.$config.errorGutterIconPath),(n.$config.light.errorGutterIconPath||n.$config.errorGutterIconPath)&&(o.errorIconPathLight=n.$config.light.errorGutterIconPath||n.$config.errorGutterIconPath),n.$config.warningGutterIconPath&&(o.warningIconPath=n.$config.warningGutterIconPath),(n.$config.light.warningGutterIconPath||n.$config.warningGutterIconPath)&&(o.warningIconPathLight=n.$config.light.warningGutterIconColor||n.$config.warningGutterIconPath),n.$config.infoGutterIconPath&&(o.infoIconPath=n.$config.infoGutterIconPath),(n.$config.light.infoGutterIconPath||n.$config.infoGutterIconPath)&&(o.infoIconPathLight=n.$config.light.infoGutterIconColor||n.$config.infoGutterIconPath),o},o.doUpdateGutterDecorations=function(e,o){const t=[],i=[],a=[];for(const e in o){const n=o[e].sort(((e,o)=>e.severity-o.severity))[0],s=n.severity;if((0,r.isSeverityEnabled)(s)){const e={range:n.range};switch(s){case 0:t.push(e);break;case 1:i.push(e);break;case 2:a.push(e)}}}e.setDecorations(n.Global.decorationTypeGutterError,t),e.setDecorations(n.Global.decorationTypeGutterWarning,i),e.setDecorations(n.Global.decorationTypeGutterInfo,a)}},310:(e,o,t)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.toggleEnabledLevels=o.updateGlobalSetting=void 0;const r=t(496);function n(e,o){r.workspace.getConfiguration().update(e,o,r.ConfigurationTarget.Global)}o.updateGlobalSetting=n,o.toggleEnabledLevels=function(e,o){const t=o.indexOf(e);-1!==t?o.splice(t,1):o.push(e),n("errorLens.enabledDiagnosticLevels",o)}},358:function(e,o,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(o,"__esModule",{value:!0}),o.StatusBarIcons=void 0;const n=r(t(17)),i=t(496);o.StatusBarIcons=class{constructor(e,o,t,r,n){this.isEnabled=e,this.atZero=o,this.useBackground=t,this.errorBackgroundThemeColor=new i.ThemeColor("statusBarItem.errorBackground"),this.warningBackgroundThemeColor=new i.ThemeColor("statusBarItem.warningBackground"),this.errorForegroundThemeColor=new i.ThemeColor("errorLens.statusBarIconErrorForeground"),this.warningForegroundThemeColor=new i.ThemeColor("errorLens.statusBarIconWarningForeground"),this.statusBarColors=[],this.activeMessagePosition=new i.Position(0,0),this.activeMessageText="",this.activeMessageSource="";const a="right"===n?i.StatusBarAlignment.Right:i.StatusBarAlignment.Left;this.errorStatusBarItem=i.window.createStatusBarItem("errorLensError",a,r),this.errorStatusBarItem.name="Error Lens: Error icon",this.errorStatusBarItem.command="workbench.actions.view.problems",this.warningStatusBarItem=i.window.createStatusBarItem("errorLensWarning",a,r-1),this.warningStatusBarItem.name="Error Lens: Warning icon",this.warningStatusBarItem.command="workbench.actions.view.problems",this.setBackground("error"),this.setForeground("error"),this.setBackground("warning"),this.setForeground("warning"),this.isEnabled?(this.errorStatusBarItem.show(),this.warningStatusBarItem.show()):this.dispose()}updateText(){if(!this.isEnabled)return;const e=i.languages.getDiagnostics(),o=[],t=[];let r=0,n=0;for(const i of e){const e=i[0],a=i[1],s=[],c=[];for(const e of a)0===e.severity?s.push(e):1===e.severity&&c.push(e);r+=s.length,n+=c.length,s.length&&o.push([e,s]),c.length&&t.push([e,c])}0===r?"hide"===this.atZero?this.errorStatusBarItem.text="":(this.clearBackground("error"),this.clearForeground("error"),this.errorStatusBarItem.text=`$(error) ${r}`,this.errorStatusBarItem.tooltip=this.makeTooltip(o,"error")):(this.setBackground("error"),this.setForeground("error"),this.errorStatusBarItem.text=`$(error) ${r}`,this.errorStatusBarItem.tooltip=this.makeTooltip(o,"error")),0===n?"hide"===this.atZero?this.warningStatusBarItem.text="":(this.clearBackground("warning"),this.clearForeground("warning"),this.warningStatusBarItem.text=`$(warning) ${n}`,this.warningStatusBarItem.tooltip=this.makeTooltip(t,"warning")):(this.setBackground("warning"),this.setForeground("warning"),this.warningStatusBarItem.text=`$(warning) ${n}`,this.warningStatusBarItem.tooltip=this.makeTooltip(t,"warning"))}makeTooltip(e,o){const t=new i.MarkdownString(void 0,!0);t.isTrusted=!0;for(const r of e){const e=r[0],a=r[1];a.length&&t.appendMarkdown(`**${n.default.basename(e.path)}**\n\n`);for(const r of a){const n=i.Uri.parse(`command:errorLens.revealLine?${encodeURIComponent(JSON.stringify([e.fsPath,[r.range.start.line,r.range.start.character]]))}`);t.appendMarkdown(`<span style="color:${"error"===o?"#e45454":"#ff942f"};">$(${o})</span> [${r.message} \`${r.source}\`](${n})\n\n`)}}return t}setForeground(e){"error"===e?this.errorStatusBarItem.color=this.errorForegroundThemeColor:"warning"===e&&(this.warningStatusBarItem.color=this.warningForegroundThemeColor)}clearForeground(e){"error"===e?this.errorStatusBarItem.color=void 0:"warning"===e&&(this.warningStatusBarItem.color=void 0)}setBackground(e){this.useBackground&&("error"===e?this.errorStatusBarItem.backgroundColor=this.errorBackgroundThemeColor:"warning"===e&&(this.warningStatusBarItem.backgroundColor=this.warningBackgroundThemeColor))}clearBackground(e){"error"===e?this.errorStatusBarItem.backgroundColor=void 0:"warning"===e&&(this.warningStatusBarItem.backgroundColor=void 0)}dispose(){this.errorStatusBarItem.dispose(),this.warningStatusBarItem.dispose()}}},274:(e,o,t)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.StatusBarMessage=void 0;const r=t(613),n=t(112),i=t(593),a=t(496);o.StatusBarMessage=class{constructor(e,o,t,r,n){this.isEnabled=e,this.colorsEnabled=o,this.messageType=t,this.statusBarColors=[],this.activeMessagePosition=new a.Position(0,0),this.activeMessageText="",this.activeMessageSource="";const i="right"===n?a.StatusBarAlignment.Right:a.StatusBarAlignment.Left;this.colorsEnabled=o,this.messageType=t,this.statusBarItem=a.window.createStatusBarItem("errorLensMessage",i,r),this.statusBarItem.name="Error Lens: Message",this.statusBarItem.command="errorLens.statusBarCommand",this.isEnabled?this.statusBarItem.show():this.dispose()}updateText(e,o){if(!this.isEnabled)return;const t=Object.keys(o);if(0===t.length)return void this.clear();const a=e.selection.active.line;let s,c=0;if("activeLine"===this.messageType){if(!o[a])return void this.clear();for(const e of o[a])(0,r.isSeverityEnabled)(e.severity)&&(s=e,c=o[a].length)}else if("closestProblem"===this.messageType){const e=t.map(Number).sort(((e,o)=>Math.abs(a-e)-Math.abs(a-o)));e:for(const t of e){const e=o[t];for(const o of e)if((0,r.isSeverityEnabled)(o.severity)){s=o,c=e.length;break e}}}else if("closestSeverity"===this.messageType){const e=t.map((e=>o[e])).flat().sort(((e,o)=>1e4*e.severity-1e4*o.severity+(Math.abs(a-e.range.start.line)-Math.abs(a-o.range.start.line))));for(const t of e)if((0,r.isSeverityEnabled)(t.severity)){s=t,c=o[t.range.start.line].length;break}}if(!s)return void this.clear();this.activeMessagePosition=s.range.start;let l=(0,r.diagnosticToInlineMessage)(n.$config.statusBarMessageTemplate||n.$config.messageTemplate,s,c);n.$config.removeLinebreaks&&(l=(0,i.replaceLinebreaks)(l)),this.activeMessageText=l,this.activeMessageSource=s.source,this.colorsEnabled&&(this.statusBarItem.color=this.statusBarColors[s.severity]),this.statusBarItem.text=l,this.statusBarItem.tooltip=l}clear(){this.isEnabled&&(this.statusBarItem.text="",this.statusBarItem.tooltip="")}dispose(){this.statusBarItem.dispose()}}},593:(e,o,t)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.svgToUri=o.replaceLinebreaks=o.truncateString=void 0;const r=t(496);o.truncateString=function(e,o){const t=[...e];return t.length>o?`${t.slice(0,o).join("")}…`:e},o.replaceLinebreaks=function(e){return e.replace(/[\n\r\t]+/g," ")},o.svgToUri=function(e){return r.Uri.parse(`data:image/svg+xml;utf8,${e}`)}},496:e=>{"use strict";e.exports=require("vscode")},17:e=>{"use strict";e.exports=require("path")}},o={},t=function t(r){var n=o[r];if(void 0!==n)return n.exports;var i=o[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}(112);module.exports=t})();