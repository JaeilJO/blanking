'use client';
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var index_module_scss_1 = require("./index.module.scss");
var navigation_1 = require("next/navigation");
var PageDeleteButton_1 = require("./PageDeleteButton");
var PageChangeNameButton_1 = require("./PageChangeNameButton");
var react_query_1 = require("@tanstack/react-query");
var getPages_1 = require("@/lib/getPages");
var react_1 = require("next-auth/react");
function PageTable(_a) {
    var _b;
    var current_group_name = _a.current_group_name, username = _a.username;
    var param = navigation_1.useParams();
    var session = react_1.useSession();
    var subkey = (_b = session.data) === null || _b === void 0 ? void 0 : _b.user.subkey;
    var params = navigation_1.useParams();
    var parameterUsername = decodeURIComponent(params.username);
    var isCurrentUser = parameterUsername === username;
    var data = react_query_1.useQuery({
        queryKey: ['pages', { groupname: current_group_name }],
        queryFn: function () { return getPages_1.getPages({ groupname: current_group_name, subkey: subkey }); }
    }).data;
    if (!isCurrentUser) {
        navigation_1.redirect('/not-found');
    }
    if (data.length === 0) {
        return React.createElement("div", null, "\uD398\uC774\uC9C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
    }
    return (React.createElement("ul", { className: index_module_scss_1["default"].page_contatiner }, data === null || data === void 0 ? void 0 :
        data.map(function (page) { return (React.createElement("li", { className: index_module_scss_1["default"].page_item, key: page.pagename },
            React.createElement(link_1["default"], { href: param.group + "/" + page.pagename, className: index_module_scss_1["default"].page_item_image }),
            React.createElement("div", { className: index_module_scss_1["default"].page_info },
                React.createElement(link_1["default"], { href: param.group + "/" + page.pagename, className: index_module_scss_1["default"].page_title }, page.pagename),
                React.createElement("ul", { className: index_module_scss_1["default"].page_info_icons },
                    React.createElement(PageChangeNameButton_1["default"], { pagename: page.pagename, groupname: current_group_name }),
                    React.createElement(PageDeleteButton_1["default"], { pagename: page.pagename, groupname: current_group_name }))))); }),
        React.createElement("li", null)));
}
exports["default"] = PageTable;
