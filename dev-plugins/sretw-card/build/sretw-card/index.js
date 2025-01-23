/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sretw-card/constant.js":
/*!************************************!*\
  !*** ./src/sretw-card/constant.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fallbackCardBorderRadius: () => (/* binding */ fallbackCardBorderRadius),
/* harmony export */   fallbackCardEnalrgeDuration: () => (/* binding */ fallbackCardEnalrgeDuration),
/* harmony export */   fallbackCardEnalrgeScale: () => (/* binding */ fallbackCardEnalrgeScale),
/* harmony export */   fallbackCardShadowBlur: () => (/* binding */ fallbackCardShadowBlur),
/* harmony export */   fallbackCardShadowColor: () => (/* binding */ fallbackCardShadowColor),
/* harmony export */   fallbackCardShadowHorizontal: () => (/* binding */ fallbackCardShadowHorizontal),
/* harmony export */   fallbackCardShadowSpread: () => (/* binding */ fallbackCardShadowSpread),
/* harmony export */   fallbackCardShadowVertical: () => (/* binding */ fallbackCardShadowVertical),
/* harmony export */   fallbackFontSize: () => (/* binding */ fallbackFontSize),
/* harmony export */   fallbackFontWeight: () => (/* binding */ fallbackFontWeight),
/* harmony export */   fontSizes: () => (/* binding */ fontSizes),
/* harmony export */   fontWeights: () => (/* binding */ fontWeights)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Admin panel font size options
 */
const fontSizes = [{
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("S"),
  slug: "small",
  size: 13
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("M"),
  slug: "medium",
  size: 20
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("L"),
  slug: "big",
  size: 36
}];

/**
 * Fallback font size
 */
const fallbackFontSize = 12;

/**
 * Admin panel font weight options
 */
const fontWeights = [{
  label: "normal",
  value: "normal"
}, {
  label: "bold",
  value: "bold"
}, {
  label: "lighter",
  value: "lighter"
}, {
  label: "bolder",
  value: "bolder"
}, {
  label: "100",
  value: "100"
}, {
  label: "200",
  value: "200"
}, {
  label: "300",
  value: "300"
}, {
  label: "400",
  value: "400"
}, {
  label: "500",
  value: "500"
}, {
  label: "600",
  value: "600"
}, {
  label: "700",
  value: "700"
}, {
  label: "800",
  value: "800"
}, {
  label: "900",
  value: "900"
}, {
  label: "inherit",
  value: "inherit"
}, {
  label: "initial",
  value: "initial"
}, {
  label: "revert",
  value: "revert"
}, {
  label: "revert-layer",
  value: "revert-layer"
}, {
  label: "unset",
  value: "unset"
}];

/**
 * Fallback font weight
 */
const fallbackFontWeight = "normal";

/**
 * Fallback card enlarge scale when mouse hover
 */
const fallbackCardEnalrgeScale = 1.2;

/**
 * Fallback card enlarge duration for transition
 * when mouse hover
 */
const fallbackCardEnalrgeDuration = 0.65;

/**
 * Fallback card border radius
 */
const fallbackCardBorderRadius = 8;

/**
 * Fallback card box shadow horizontal
 */
const fallbackCardShadowHorizontal = 0;

/**
 * Fallback card box shadow vertical
 */
const fallbackCardShadowVertical = 3;

/**
 * Fallback card box shadow blur
 */
const fallbackCardShadowBlur = 10;

/**
 * Fallback card box shadow spread
 */
const fallbackCardShadowSpread = 0;

/**
 * Fallback card box shadow color
 */
const fallbackCardShadowColor = "#000";

/***/ }),

/***/ "./src/sretw-card/edit.js":
/*!********************************!*\
  !*** ./src/sretw-card/edit.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/sretw-card/editor.scss");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/sretw-card/utils.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constant */ "./src/sretw-card/constant.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */





function Edit(props) {
  const {
    attributes: {
      title,
      titleFontSize,
      titleFontWeight,
      titleAlignment,
      subtitle,
      subtitleFontSize,
      subtitleFontWeight,
      subtitleAlignment,
      cardEnlarge,
      cardEnlargeScale,
      cardEnlargeDuration,
      cardBorderRadius,
      cardShadowHorizontal,
      cardShadowVertical,
      cardShadowBlur,
      cardShadowSpread,
      cardShadowColor
    },
    setAttributes
  } = props;

  /**
   * Block combine with dynamic value
   * Look into style.scss
   */
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: cardEnlarge ? "wp-block-create-block-sretw-card-hover" : "wp-block-create-block-sretw-card",
    style: {
      "--card-shadow-prop": (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getCardShadowCSSProp)(cardShadowHorizontal, cardShadowVertical, cardShadowBlur, cardShadowSpread, cardShadowColor),
      "--card-border-radius": cardBorderRadius ? cardBorderRadius : `${_constant__WEBPACK_IMPORTED_MODULE_5__.fallbackCardBorderRadius}px`,
      // Setting card enalrge scale variable in scss
      "--card-enlarge-scale": cardEnlargeScale ? cardEnlargeScale : `${_constant__WEBPACK_IMPORTED_MODULE_5__.fallbackCardEnalrgeScale}`,
      // Setting card enalrge duration variable in scss
      "--card-enlarge-duration": cardEnlargeDuration ? cardEnlargeDuration : `${_constant__WEBPACK_IMPORTED_MODULE_5__.fallbackCardEnalrgeDuration}s`
    }
  });
  const innerBlockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps)();
  // console.log(props);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Card", "sretw-card"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Box shadow"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            wrap: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true,
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Horizontal", "srewt-card"),
                type: "number",
                value: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.stringToInt)(cardShadowHorizontal, _constant__WEBPACK_IMPORTED_MODULE_5__.fallbackCardShadowHorizontal),
                onChange: value => setAttributes({
                  cardShadowHorizontal: `${value}px`
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true,
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vertical", "srewt-card"),
                type: "number",
                value: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.stringToInt)(cardShadowVertical, _constant__WEBPACK_IMPORTED_MODULE_5__.fallbackCardShadowVertical),
                onChange: value => setAttributes({
                  cardShadowVertical: `${value}px`
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true,
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Blur", "srewt-card"),
                type: "number",
                value: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.stringToInt)(cardShadowBlur, _constant__WEBPACK_IMPORTED_MODULE_5__.fallbackCardShadowBlur),
                onChange: value => setAttributes({
                  cardShadowBlur: `${(0,_utils__WEBPACK_IMPORTED_MODULE_4__.clamp0Inf)(value)}px`
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true,
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spread", "srewt-card"),
                type: "number",
                value: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.stringToInt)(cardShadowSpread, _constant__WEBPACK_IMPORTED_MODULE_5__.fallbackCardShadowSpread),
                onChange: value => setAttributes({
                  cardShadowSpread: `${value}px`
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
                defaultValue: cardShadowColor ? cardShadowColor : _constant__WEBPACK_IMPORTED_MODULE_5__.fallbackCardShadowColor,
                onChange: value => setAttributes({
                  cardShadowColor: value
                })
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border", "sretw-card"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border radius", "srewt-card"),
            type: "number",
            value: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.stringToInt)(cardBorderRadius, _constant__WEBPACK_IMPORTED_MODULE_5__.fallbackCardBorderRadius),
            onChange: value => setAttributes({
              cardBorderRadius: `${(0,_utils__WEBPACK_IMPORTED_MODULE_4__.clamp0Inf)(value)}px`
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover", "sretw-card"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            __nextHasNoMarginBottom: true,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover enlarge", "sretw-card"),
            checked: cardEnlarge || false,
            onChange: value => setAttributes({
              cardEnlarge: value,
              //pre-set value for scale
              cardEnlargeScale: cardEnlargeScale ? `${cardEnlargeScale}` : `${_constant__WEBPACK_IMPORTED_MODULE_5__.fallbackCardEnalrgeScale}`,
              // pre-set value for speed
              cardEnlargeDuration: cardEnlargeDuration ? cardEnlargeDuration : `${_constant__WEBPACK_IMPORTED_MODULE_5__.fallbackCardEnalrgeDuration}s`
            })
          }), cardEnlarge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover enlarge scale", "srewt-card"),
              type: "number",
              value: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.stringToFloat)(cardEnlargeScale, _constant__WEBPACK_IMPORTED_MODULE_5__.fallbackCardEnalrgeScale),
              onChange: value => setAttributes({
                cardEnlargeScale: `${(0,_utils__WEBPACK_IMPORTED_MODULE_4__.clamp1Inf)(parseFloat(value))}`
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover enlarge duration", "srewt-card"),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Unit in seconds", "sretw-card"),
              type: "number",
              value: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.stringToFloat)(cardEnlargeDuration, _constant__WEBPACK_IMPORTED_MODULE_5__.fallbackCardEnalrgeDuration),
              onChange: value => setAttributes({
                cardEnlargeDuration: `${(0,_utils__WEBPACK_IMPORTED_MODULE_4__.clamp0Inf)(parseFloat(value))}s`
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title", "sretw-card"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text", "sretw-card"),
          value: title || "",
          onChange: value => setAttributes({
            title: value
          })
        }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FontSizePicker, {
            __next40pxDefaultSize: true,
            fontSizes: _constant__WEBPACK_IMPORTED_MODULE_5__.fontSizes,
            value: titleFontSize,
            fallbackFontSize: _constant__WEBPACK_IMPORTED_MODULE_5__.fallbackFontSize,
            onChange: newFontSize => {
              setAttributes({
                titleFontSize: newFontSize
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font weight", "sretw-card"),
            value: titleFontWeight || _constant__WEBPACK_IMPORTED_MODULE_5__.fallbackFontWeight,
            options: _constant__WEBPACK_IMPORTED_MODULE_5__.fontWeights,
            onChange: value => setAttributes({
              titleFontWeight: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            direction: "column",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text alignment ")
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.AlignmentToolbar, {
                value: titleAlignment || "center",
                onChange: value => setAttributes({
                  titleAlignment: value
                })
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Subtitle", "sretw-card"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text", "sretw-card"),
          value: subtitle || "",
          onChange: value => setAttributes({
            subtitle: value
          })
        }), subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FontSizePicker, {
            __next40pxDefaultSize: true,
            fontSizes: _constant__WEBPACK_IMPORTED_MODULE_5__.fontSizes,
            value: subtitleFontSize,
            fallbackFontSize: _constant__WEBPACK_IMPORTED_MODULE_5__.fallbackFontSize,
            onChange: newFontSize => {
              setAttributes({
                subtitleFontSize: newFontSize
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font weight", "sretw-card"),
            value: subtitleFontWeight || _constant__WEBPACK_IMPORTED_MODULE_5__.fallbackFontWeight,
            options: _constant__WEBPACK_IMPORTED_MODULE_5__.fontWeights,
            onChange: value => setAttributes({
              subtitleFontWeight: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            direction: "column",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text alignment ")
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.AlignmentToolbar, {
                value: subtitleAlignment || "center",
                onChange: value => setAttributes({
                  subtitleAlignment: value
                })
              })
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      ...blockProps,
      children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "title",
        style: {
          fontSize: titleFontSize,
          fontWeight: titleFontWeight || "normal",
          textAlign: titleAlignment || "center"
        },
        children: title
      }), subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "subtitle",
        style: {
          fontSize: subtitleFontSize,
          fontWeight: subtitleFontWeight || "normal",
          textAlign: subtitleAlignment || "center"
        },
        children: subtitle
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "image-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
          ...innerBlockProps,
          template: [["core/image", {}]],
          templateLock: "all",
          defaultBlock: {
            name: "core/image",
            attributes: {}
          },
          allowedBlocks: ["core/image"]
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./src/sretw-card/index.js":
/*!*********************************!*\
  !*** ./src/sretw-card/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/sretw-card/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/sretw-card/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/sretw-card/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/sretw-card/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




const icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
    d: "M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm0 6h16v6H4v-6Z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
    d: "M5 14a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm5 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z"
  })]
});

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  icon: icon,
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/sretw-card/save.js":
/*!********************************!*\
  !*** ./src/sretw-card/save.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./src/sretw-card/constant.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/sretw-card/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */




/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

function save(props) {
  const {
    attributes: {
      title,
      titleFontSize,
      titleFontWeight,
      titleAlignment,
      subtitle,
      subtitleFontSize,
      subtitleFontWeight,
      subtitleAlignment,
      cardEnlarge,
      cardEnlargeScale,
      cardEnlargeDuration,
      cardBorderRadius,
      cardShadowHorizontal,
      cardShadowVertical,
      cardShadowBlur,
      cardShadowSpread,
      cardShadowColor
    }
  } = props;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: cardEnlarge ? "wp-block-create-block-sretw-card-hover" : "wp-block-create-block-sretw-card",
    style: {
      "--card-shadow-prop": (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getCardShadowCSSProp)(cardShadowHorizontal, cardShadowVertical, cardShadowBlur, cardShadowSpread, cardShadowColor),
      "--card-border-radius": cardBorderRadius ? cardBorderRadius : `${_constant__WEBPACK_IMPORTED_MODULE_1__.fallbackCardBorderRadius}px`,
      // Setting card enalrge scale variable in scss
      "--card-enlarge-scale": cardEnlargeScale ? cardEnlargeScale : `${_constant__WEBPACK_IMPORTED_MODULE_1__.fallbackCardEnalrgeScale}`,
      // Setting card enalrge duration variable in scss
      "--card-enlarge-duration": cardEnlargeDuration ? cardEnlargeDuration : `${_constant__WEBPACK_IMPORTED_MODULE_1__.fallbackCardEnalrgeDuration}s`
    }
  });
  // console.log(props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    ...blockProps,
    children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "text-center title",
      style: {
        fontSize: titleFontSize,
        fontWeight: titleFontWeight || "normal",
        textAlign: titleAlignment || "center"
      },
      children: title
    }), subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "text-center subtitle",
      style: {
        fontSize: subtitleFontSize,
        fontWeight: subtitleFontWeight || "normal",
        textAlign: subtitleAlignment || "center"
      },
      children: subtitle
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "image-container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
    })]
  });
}

/***/ }),

/***/ "./src/sretw-card/utils.js":
/*!*********************************!*\
  !*** ./src/sretw-card/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp0Inf: () => (/* binding */ clamp0Inf),
/* harmony export */   clamp1Inf: () => (/* binding */ clamp1Inf),
/* harmony export */   getCardShadowCSSProp: () => (/* binding */ getCardShadowCSSProp),
/* harmony export */   stringToFloat: () => (/* binding */ stringToFloat),
/* harmony export */   stringToInt: () => (/* binding */ stringToInt)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./src/sretw-card/constant.js");


/**
 * Convert string to integer
 * @param {*} value in string e.g "12px"
 * @param {*} fallback value to fallback to when conversion fail
 * @returns integer or fallback value
 */
const stringToInt = (value, fallback = 0) => {
  if (value === undefined) return fallback;
  let parsedValue = parseInt(value);
  if (!isNaN(parsedValue)) {
    return parsedValue;
  }
  return fallback;
};

/**
 * Convert string to float
 * @param {*} value in string e.g "10.4ms"
 * @param {*} fallback value to fallback to when conversion fail
 * @returns float or fallback value
 */
const stringToFloat = (value, fallback = 0.0) => {
  if (value === undefined) return fallback;
  let parsedValue = parseFloat(value);
  if (!isNaN(parsedValue)) {
    return parsedValue;
  }
  return fallback;
};

/**
 * Get css for box-shadow in string
 * @param {*} h horizontal in px
 * @param {*} v vertical in px
 * @param {*} sBlur blur in px
 * @param {*} spread spread in px
 * @param {*} color hex value
 * @returns string in css for box-shadow
 */
const getCardShadowCSSProp = (h, v, sBlur, spread, color) => {
  let sHorizontal = h ? h : `${_constant__WEBPACK_IMPORTED_MODULE_0__.fallbackCardShadowHorizontal}px`;
  let sVertial = v ? v : `${_constant__WEBPACK_IMPORTED_MODULE_0__.fallbackCardShadowVertical}px`;
  let sBlurring = sBlur ? sBlur : `${_constant__WEBPACK_IMPORTED_MODULE_0__.fallbackCardShadowBlur}px`;
  let sSpread = spread ? spread : `${_constant__WEBPACK_IMPORTED_MODULE_0__.fallbackCardShadowSpread}px`;
  let sColor = color ? color : _constant__WEBPACK_IMPORTED_MODULE_0__.fallbackCardShadowColor;
  return `${sHorizontal} ${sVertial} ${sBlurring} ${sSpread} ${sColor}`;
};

/**
 * Clamp value between 1 ~ infinity
 * @param {*} value number
 * @param {*} fallback the number to fallback to
 * @returns clamped value
 */
const clamp1Inf = (value, fallback = 1.0) => {
  if (isNaN(value) || value === undefined || value === null) return fallback;
  return Math.max(1.0, value);
};

/**
 * Clamp value between 0.0 ~ infinity
 * @param {*} value number
 * @param {*} fallback the number to fallback to
 * @returns clamped value
 */
const clamp0Inf = (value, fallback = 0.0) => {
  if (isNaN(value) || value === undefined || value === null) return fallback;
  return Math.max(0.0, value);
};

/***/ }),

/***/ "./src/sretw-card/editor.scss":
/*!************************************!*\
  !*** ./src/sretw-card/editor.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sretw-card/style.scss":
/*!***********************************!*\
  !*** ./src/sretw-card/style.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/sretw-card/block.json":
/*!***********************************!*\
  !*** ./src/sretw-card/block.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/sretw-card","version":"1.2.0","title":"Sretw Card","category":"widgets","icon":"smiley","description":"Style card block with title, subtitle and image","example":{},"attributes":{"title":{"type":"string"},"titleFontSize":{"type":"integer"},"titleFontWeight":{"type":"string"},"titleAlignment":{"type":"string"},"subtitle":{"type":"string"},"subtitleFontSize":{"type":"integer"},"subtitleFontWeight":{"type":"string"},"subtitleAlignment":{"type":"string"},"cardShadowHorizontal":{"type":"string"},"cardShadowVertical":{"type":"string"},"cardShadowBlur":{"type":"string"},"cardShadowSpread":{"type":"string"},"cardShadowColor":{"type":"string"},"cardBorderRadius":{"type":"string"},"cardEnlarge":{"type":"boolean"},"cardEnlargeScale":{"type":"string"},"cardEnlargeDuration":{"type":"string"}},"supports":{"color":{"background":false,"text":true},"html":false,"typography":{"fontSize":true}},"textdomain":"sretw-card","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"sretw-card/index": 0,
/******/ 			"sretw-card/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunksretw_card"] = globalThis["webpackChunksretw_card"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["sretw-card/style-index"], () => (__webpack_require__("./src/sretw-card/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map