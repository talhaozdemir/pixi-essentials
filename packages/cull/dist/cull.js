/*!
 * @pixi-essentials/cull - v1.0.2
 * Compiled Sun, 05 Jul 2020 21:41:15 UTC
 *
 * @pixi-essentials/cull is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
this.PIXI=this.PIXI||{};var _pixi_essentials_cull=function(t,e){"use strict";var i=new PIXI.Rectangle,r=function(){function t(t){void 0===t&&(t={}),this._recursive="boolean"!=typeof t.recursive||t.recursive,this._toggle=t.toggle||"visible",this._targetList=new Set}return t.prototype.add=function(t){return this._targetList.add(t),this},t.prototype.addAll=function(t){for(var e=0,i=t.length;e<i;e++)this._targetList.add(t[e]);return this},t.prototype.remove=function(t){return this._targetList.delete(t),this},t.prototype.removeAll=function(t){for(var e=0,i=t.length;e<i;e++)this._targetList.delete(t[e]);return this},t.prototype.clear=function(){return this._targetList.clear(),this},t.prototype.cull=function(t,e){var r=this;return void 0===e&&(e=!1),this._targetList.forEach((function(o){e||o.getBounds(!1,i),r._recursive?r.cullRecursive(t,o):(e&&o.getBounds(!0,i),o[r._toggle]=i.right>t.left&&i.left<t.right&&i.bottom>t.top&&i.top<t.bottom)})),this},t.prototype.uncull=function(){var t=this;return this._targetList.forEach((function(e){t._recursive?t.uncullRecursive(e):e[t._toggle]=!1})),this},t.prototype.cullRecursive=function(t,e){var r=e.getBounds(!0,i);if(e[this._toggle]=r.right>t.left&&r.left<t.right&&r.bottom>t.top&&r.top<t.bottom,!(r.left>=t.left&&r.top>=t.top&&r.right<=t.right&&r.bottom>=t.bottom)&&e.children&&e.children.length)for(var o=e.children,n=0,l=o.length;n<l;n++)this.cullRecursive(t,o[n])},t.prototype.uncullRecursive=function(t){if(t[this._toggle]=!0,t.children&&t.children.length)for(var e=t.children,i=0,r=e.length;i<r;i++)this.uncullRecursive(e[i])},t}();return t.Cull=r,t}({});Object.assign(this.PIXI,_pixi_essentials_cull);
//# sourceMappingURL=cull.js.map
