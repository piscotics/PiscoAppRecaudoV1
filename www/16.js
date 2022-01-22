(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "CPLj":
/*!***********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js ***!
  \***********************************************************************/
/*! exports provided: ion_item_option, ion_item_options, ion_item_sliding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_item_option", function() { return ItemOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_item_options", function() { return ItemOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_item_sliding", function() { return ItemSliding; });
/* harmony import */ var D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/regenerator */ "o0o1");
/* harmony import */ var D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "eijD");
/* harmony import */ var D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ "mK0O");
/* harmony import */ var D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/classCallCheck */ "hisu");
/* harmony import */ var D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/createClass */ "yBJb");
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-e806d1f6.js */ "OVRr");
/* harmony import */ var _ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ionic-global-9d5c8ee3.js */ "rAwY");
/* harmony import */ var _helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers-90f46169.js */ "Ij9o");
/* harmony import */ var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme-ff3fc52f.js */ "akMd");









var itemOptionIosCss = ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:16px}:host(.ion-activated){background:var(--ion-color-primary-shade, #3171e0)}:host(.ion-color.ion-activated){background:var(--ion-color-shade)}";
var itemOptionMdCss = ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:14px;font-weight:500;text-transform:uppercase}";

var ItemOption = /*#__PURE__*/function () {
  function ItemOption(hostRef) {
    Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ItemOption);

    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    /**
     * If `true`, the user cannot interact with the item option.
     */

    this.disabled = false;
    /**
     * If `true`, the option will expand to take up the available width and cover any other options.
     */

    this.expandable = false;
    /**
     * The type of the button.
     */

    this.type = 'button';

    this.onClick = function (ev) {
      var el = ev.target.closest('ion-item-option');

      if (el) {
        ev.preventDefault();
      }
    };
  }

  Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ItemOption, [{
    key: "render",
    value: function render() {
      var _createColorClasses;

      var disabled = this.disabled,
          expandable = this.expandable,
          href = this.href;
      var TagType = href === undefined ? 'button' : 'a';
      var mode = Object(_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this);
      var attrs = TagType === 'button' ? {
        type: this.type
      } : {
        download: this.download,
        href: this.href,
        target: this.target
      };
      return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        onClick: this.onClick,
        class: Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_8__["c"])(this.color, (_createColorClasses = {}, Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_createColorClasses, mode, true), Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_createColorClasses, 'item-option-disabled', disabled), Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_createColorClasses, 'item-option-expandable', expandable), Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_createColorClasses, 'ion-activatable', true), _createColorClasses))
      }, Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["h"])(TagType, Object.assign({}, attrs, {
        class: "button-native",
        part: "native",
        disabled: disabled
      }), Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["h"])("span", {
        class: "button-inner"
      }, Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["h"])("slot", {
        name: "top"
      }), Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "horizontal-wrapper"
      }, Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["h"])("slot", {
        name: "start"
      }), Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["h"])("slot", {
        name: "icon-only"
      }), Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["h"])("slot", null), Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["h"])("slot", {
        name: "end"
      })), Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["h"])("slot", {
        name: "bottom"
      })), mode === 'md' && Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-ripple-effect", null)));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["i"])(this);
    }
  }]);

  return ItemOption;
}();

ItemOption.style = {
  ios: itemOptionIosCss,
  md: itemOptionMdCss
};
var itemOptionsIosCss = "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)))}.item-options-ios.item-options-end{border-bottom-width:0.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:0.55px}";
var itemOptionsMdCss = "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))))}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}";

var ItemOptions = /*#__PURE__*/function () {
  function ItemOptions(hostRef) {
    Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ItemOptions);

    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    this.ionSwipe = Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this, "ionSwipe", 7);
    /**
     * The side the option button should be on. Possible values: `"start"` and `"end"`. If you have multiple `ion-item-options`, a side must be provided for each.
     *
     */

    this.side = 'end';
  }
  /** @internal */


  Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ItemOptions, [{
    key: "fireSwipeEvent",
    value: function () {
      var _fireSwipeEvent = Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.ionSwipe.emit({
                  side: this.side
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fireSwipeEvent() {
        return _fireSwipeEvent.apply(this, arguments);
      }

      return fireSwipeEvent;
    }()
  }, {
    key: "render",
    value: function render() {
      var _class;

      var mode = Object(_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this);
      var isEnd = Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_7__["l"])(this.side);
      return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        class: (_class = {}, Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_class, mode, true), Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_class, "item-options-".concat(mode), true), Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_class, 'item-options-start', !isEnd), Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_class, 'item-options-end', isEnd), _class)
      });
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["i"])(this);
    }
  }]);

  return ItemOptions;
}();

ItemOptions.style = {
  ios: itemOptionsIosCss,
  md: itemOptionsMdCss
};
var itemSlidingCss = "ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-left;transition-property:padding-left}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-right;transition-property:padding-right}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}";
var SWIPE_MARGIN = 30;
var ELASTIC_FACTOR = 0.55;
var openSlidingItem;

var ItemSliding = /*#__PURE__*/function () {
  function ItemSliding(hostRef) {
    Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ItemSliding);

    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    this.ionDrag = Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this, "ionDrag", 7);
    this.item = null;
    this.openAmount = 0;
    this.initialOpenAmount = 0;
    this.optsWidthRightSide = 0;
    this.optsWidthLeftSide = 0;
    this.sides = 0
    /* None */
    ;
    this.optsDirty = true;
    this.state = 2
    /* Disabled */
    ;
    /**
     * If `true`, the user cannot interact with the sliding item.
     */

    this.disabled = false;
  }

  Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ItemSliding, [{
    key: "disabledChanged",
    value: function disabledChanged() {
      if (this.gesture) {
        this.gesture.enable(!this.disabled);
      }
    }
  }, {
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this = this;

        return D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.item = this.el.querySelector('ion-item');
                _context2.next = 3;
                return this.updateOptions();

              case 3:
                _context2.next = 5;
                return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-f49d994d.js */ "8ciA"));

              case 5:
                this.gesture = _context2.sent.createGesture({
                  el: this.el,
                  gestureName: 'item-swipe',
                  gesturePriority: 100,
                  threshold: 5,
                  canStart: function canStart(ev) {
                    return _this.canStart(ev);
                  },
                  onStart: function onStart() {
                    return _this.onStart();
                  },
                  onMove: function onMove(ev) {
                    return _this.onMove(ev);
                  },
                  onEnd: function onEnd(ev) {
                    return _this.onEnd(ev);
                  }
                });
                this.disabledChanged();

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this.gesture) {
        this.gesture.destroy();
        this.gesture = undefined;
      }

      this.item = null;
      this.leftOptions = this.rightOptions = undefined;

      if (openSlidingItem === this.el) {
        openSlidingItem = undefined;
      }
    }
    /**
     * Get the amount the item is open in pixels.
     */

  }, {
    key: "getOpenAmount",
    value: function getOpenAmount() {
      return Promise.resolve(this.openAmount);
    }
    /**
     * Get the ratio of the open amount of the item compared to the width of the options.
     * If the number returned is positive, then the options on the right side are open.
     * If the number returned is negative, then the options on the left side are open.
     * If the absolute value of the number is greater than 1, the item is open more than
     * the width of the options.
     */

  }, {
    key: "getSlidingRatio",
    value: function getSlidingRatio() {
      return Promise.resolve(this.getSlidingRatioSync());
    }
    /**
     * Open the sliding item.
     *
     * @param side The side of the options to open. If a side is not provided, it will open the first set of options it finds within the item.
     */

  }, {
    key: "open",
    value: function () {
      var _open = Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(side) {
        var _this2 = this;

        var optionsToOpen, isStartOpen, isEndOpen;
        return D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(this.item === null)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                optionsToOpen = this.getOptions(side);

                if (optionsToOpen) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return");

              case 5:
                /**
                 * If side is not set, we need to infer the side
                 * so we know which direction to move the options
                 */
                if (side === undefined) {
                  side = optionsToOpen === this.leftOptions ? 'start' : 'end';
                } // In RTL we want to switch the sides


                side = Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_7__["l"])(side) ? 'end' : 'start';
                isStartOpen = this.openAmount < 0;
                isEndOpen = this.openAmount > 0;
                /**
                 * If a side is open and a user tries to
                 * re-open the same side, we should not do anything
                 */

                if (!(isStartOpen && optionsToOpen === this.leftOptions)) {
                  _context3.next = 11;
                  break;
                }

                return _context3.abrupt("return");

              case 11:
                if (!(isEndOpen && optionsToOpen === this.rightOptions)) {
                  _context3.next = 13;
                  break;
                }

                return _context3.abrupt("return");

              case 13:
                this.closeOpened();
                this.state = 4
                /* Enabled */
                ;
                requestAnimationFrame(function () {
                  _this2.calculateOptsWidth();

                  var width = side === 'end' ? _this2.optsWidthRightSide : -_this2.optsWidthLeftSide;
                  openSlidingItem = _this2.el;

                  _this2.setOpenAmount(width, false);

                  _this2.state = side === 'end' ? 8
                  /* End */
                  : 16
                  /* Start */
                  ;
                });

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function open(_x) {
        return _open.apply(this, arguments);
      }

      return open;
    }()
    /**
     * Close the sliding item. Items can also be closed from the [List](../list).
     */

  }, {
    key: "close",
    value: function () {
      var _close = Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.setOpenAmount(0, true);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function close() {
        return _close.apply(this, arguments);
      }

      return close;
    }()
    /**
     * Close all of the sliding items in the list. Items can also be closed from the [List](../list).
     */

  }, {
    key: "closeOpened",
    value: function () {
      var _closeOpened = Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(openSlidingItem !== undefined)) {
                  _context5.next = 4;
                  break;
                }

                openSlidingItem.close();
                openSlidingItem = undefined;
                return _context5.abrupt("return", true);

              case 4:
                return _context5.abrupt("return", false);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function closeOpened() {
        return _closeOpened.apply(this, arguments);
      }

      return closeOpened;
    }()
    /**
     * Given an optional side, return the ion-item-options element.
     *
     * @param side This side of the options to get. If a side is not provided it will
     * return the first one available.
     */

  }, {
    key: "getOptions",
    value: function getOptions(side) {
      if (side === undefined) {
        return this.leftOptions || this.rightOptions;
      } else if (side === 'start') {
        return this.leftOptions;
      } else {
        return this.rightOptions;
      }
    }
  }, {
    key: "updateOptions",
    value: function () {
      var _updateOptions = Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var options, sides, i, option, side;
        return D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                options = this.el.querySelectorAll('ion-item-options');
                sides = 0; // Reset left and right options in case they were removed

                this.leftOptions = this.rightOptions = undefined;
                i = 0;

              case 4:
                if (!(i < options.length)) {
                  _context6.next = 13;
                  break;
                }

                _context6.next = 7;
                return options.item(i).componentOnReady();

              case 7:
                option = _context6.sent;
                side = Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_7__["l"])(option.side) ? 'end' : 'start';

                if (side === 'start') {
                  this.leftOptions = option;
                  sides |= 1
                  /* Start */
                  ;
                } else {
                  this.rightOptions = option;
                  sides |= 2
                  /* End */
                  ;
                }

              case 10:
                i++;
                _context6.next = 4;
                break;

              case 13:
                this.optsDirty = true;
                this.sides = sides;

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateOptions() {
        return _updateOptions.apply(this, arguments);
      }

      return updateOptions;
    }()
  }, {
    key: "canStart",
    value: function canStart(gesture) {
      /**
       * If very close to start of the screen
       * do not open left side so swipe to go
       * back will still work.
       */
      var rtl = document.dir === 'rtl';
      var atEdge = rtl ? window.innerWidth - gesture.startX < 15 : gesture.startX < 15;

      if (atEdge) {
        return false;
      }

      var selected = openSlidingItem;

      if (selected && selected !== this.el) {
        this.closeOpened();
        return false;
      }

      return !!(this.rightOptions || this.leftOptions);
    }
  }, {
    key: "onStart",
    value: function onStart() {
      openSlidingItem = this.el;

      if (this.tmr !== undefined) {
        clearTimeout(this.tmr);
        this.tmr = undefined;
      }

      if (this.openAmount === 0) {
        this.optsDirty = true;
        this.state = 4
        /* Enabled */
        ;
      }

      this.initialOpenAmount = this.openAmount;

      if (this.item) {
        this.item.style.transition = 'none';
      }
    }
  }, {
    key: "onMove",
    value: function onMove(gesture) {
      if (this.optsDirty) {
        this.calculateOptsWidth();
      }

      var openAmount = this.initialOpenAmount - gesture.deltaX;

      switch (this.sides) {
        case 2
        /* End */
        :
          openAmount = Math.max(0, openAmount);
          break;

        case 1
        /* Start */
        :
          openAmount = Math.min(0, openAmount);
          break;

        case 3
        /* Both */
        :
          break;

        case 0
        /* None */
        :
          return;

        default:
          console.warn('invalid ItemSideFlags value', this.sides);
          break;
      }

      var optsWidth;

      if (openAmount > this.optsWidthRightSide) {
        optsWidth = this.optsWidthRightSide;
        openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
      } else if (openAmount < -this.optsWidthLeftSide) {
        optsWidth = -this.optsWidthLeftSide;
        openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
      }

      this.setOpenAmount(openAmount, false);
    }
  }, {
    key: "onEnd",
    value: function onEnd(gesture) {
      var velocity = gesture.velocityX;
      var restingPoint = this.openAmount > 0 ? this.optsWidthRightSide : -this.optsWidthLeftSide; // Check if the drag didn't clear the buttons mid-point
      // and we aren't moving fast enough to swipe open

      var isResetDirection = this.openAmount > 0 === !(velocity < 0);
      var isMovingFast = Math.abs(velocity) > 0.3;
      var isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);

      if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
        restingPoint = 0;
      }

      var state = this.state;
      this.setOpenAmount(restingPoint, true);

      if ((state & 32
      /* SwipeEnd */
      ) !== 0 && this.rightOptions) {
        this.rightOptions.fireSwipeEvent();
      } else if ((state & 64
      /* SwipeStart */
      ) !== 0 && this.leftOptions) {
        this.leftOptions.fireSwipeEvent();
      }
    }
  }, {
    key: "calculateOptsWidth",
    value: function calculateOptsWidth() {
      this.optsWidthRightSide = 0;

      if (this.rightOptions) {
        this.rightOptions.style.display = 'flex';
        this.optsWidthRightSide = this.rightOptions.offsetWidth;
        this.rightOptions.style.display = '';
      }

      this.optsWidthLeftSide = 0;

      if (this.leftOptions) {
        this.leftOptions.style.display = 'flex';
        this.optsWidthLeftSide = this.leftOptions.offsetWidth;
        this.leftOptions.style.display = '';
      }

      this.optsDirty = false;
    }
  }, {
    key: "setOpenAmount",
    value: function setOpenAmount(openAmount, isFinal) {
      var _this3 = this;

      if (this.tmr !== undefined) {
        clearTimeout(this.tmr);
        this.tmr = undefined;
      }

      if (!this.item) {
        return;
      }

      var style = this.item.style;
      this.openAmount = openAmount;

      if (isFinal) {
        style.transition = '';
      }

      if (openAmount > 0) {
        this.state = openAmount >= this.optsWidthRightSide + SWIPE_MARGIN ? 8
        /* End */
        | 32
        /* SwipeEnd */
        : 8
        /* End */
        ;
      } else if (openAmount < 0) {
        this.state = openAmount <= -this.optsWidthLeftSide - SWIPE_MARGIN ? 16
        /* Start */
        | 64
        /* SwipeStart */
        : 16
        /* Start */
        ;
      } else {
        this.tmr = setTimeout(function () {
          _this3.state = 2
          /* Disabled */
          ;
          _this3.tmr = undefined;
        }, 600);
        openSlidingItem = undefined;
        style.transform = '';
        return;
      }

      style.transform = "translate3d(".concat(-openAmount, "px,0,0)");
      this.ionDrag.emit({
        amount: openAmount,
        ratio: this.getSlidingRatioSync()
      });
    }
  }, {
    key: "getSlidingRatioSync",
    value: function getSlidingRatioSync() {
      if (this.openAmount > 0) {
        return this.openAmount / this.optsWidthRightSide;
      } else if (this.openAmount < 0) {
        return this.openAmount / this.optsWidthLeftSide;
      } else {
        return 0;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _class2;

      var mode = Object(_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this);
      return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        class: (_class2 = {}, Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_class2, mode, true), Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_class2, 'item-sliding-active-slide', this.state !== 2
        /* Disabled */
        ), Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_class2, 'item-sliding-active-options-end', (this.state & 8
        /* End */
        ) !== 0), Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_class2, 'item-sliding-active-options-start', (this.state & 16
        /* Start */
        ) !== 0), Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_class2, 'item-sliding-active-swipe-end', (this.state & 32
        /* SwipeEnd */
        ) !== 0), Object(D_Recaudooffline_V_1_0_1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_class2, 'item-sliding-active-swipe-start', (this.state & 64
        /* SwipeStart */
        ) !== 0), _class2)
      });
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_5__["i"])(this);
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "disabled": ["disabledChanged"]
      };
    }
  }]);

  return ItemSliding;
}();

var swipeShouldReset = function swipeShouldReset(isResetDirection, isMovingFast, isOnResetZone) {
  // The logic required to know when the sliding item should close (openAmount=0)
  // depends on three booleans (isResetDirection, isMovingFast, isOnResetZone)
  // and it ended up being too complicated to be written manually without errors
  // so the truth table is attached below: (0=false, 1=true)
  // isResetDirection | isMovingFast | isOnResetZone || shouldClose
  //         0        |       0      |       0       ||    0
  //         0        |       0      |       1       ||    1
  //         0        |       1      |       0       ||    0
  //         0        |       1      |       1       ||    0
  //         1        |       0      |       0       ||    0
  //         1        |       0      |       1       ||    1
  //         1        |       1      |       0       ||    1
  //         1        |       1      |       1       ||    1
  // The resulting expression was generated by resolving the K-map (Karnaugh map):
  return !isMovingFast && isOnResetZone || isResetDirection && isMovingFast;
};

ItemSliding.style = itemSlidingCss;


/***/ })

}]);
//# sourceMappingURL=16.js.map