"use strict";
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
var should_forward_prop_1 = require("@styled-system/should-forward-prop");
var Grid = styled_components_1["default"].div.withConfig({ shouldForwardProp: should_forward_prop_1["default"] })({
    display: 'grid',
    minWidth: 0,
    minHeight: 0
}, styled_system_1.compose(styled_system_1.layout, styled_system_1.grid));
Grid.displayName = 'Grid';
exports["default"] = Grid;
