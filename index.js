"use strict";

module.exports = {
  plugins: [
    "stylelint-declaration-use-variable",
    "stylelint-order"
  ],
  rules: {

    // WordPress Coding Standards
    // https://make.wordpress.org/core/handbook/best-practices/coding-standards/css/

    // Structure
    "selector-list-comma-newline-after": "always-multi-line",

    // Selectors
    "selector-type-case": "lower",
    "selector-attribute-quotes": "always",
    "string-quotes": "double",

    // Properties
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "always",
    "color-named": "never",
    "color-hex-case": "lower",
    "property-case": "lower",
    "color-hex-length": "short",

    // Property Ordering - Alphabetically sorted
    "order/properties-alphabetical-order": true,

    // Vendor Prefixes
    "property-no-vendor-prefix": true,

    // Values
    "sh-waqar/declaration-use-variable": "/color/", // Use a variable for any property that contains "color"

  }
};
