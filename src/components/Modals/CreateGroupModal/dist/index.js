'use client';
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// Utils
var react_1 = require("react");
var react_2 = require("next-auth/react");
var alertStore_1 = require("@/zustand/alertStore");
var navigation_1 = require("next/navigation");
var react_query_1 = require("@tanstack/react-query");
var createGroup_1 = require("@/lib/createGroup");
// Style
var index_module_scss_1 = require("./index.module.scss");
// Components
var ModalBackground_1 = require("../ModalBackground");
function CreateGroupModal() {
    var _this = this;
    var _a;
    var router = navigation_1.useRouter();
    var session = react_2.useSession();
    var queryClient = react_query_1.useQueryClient();
    //Group Name
    var _b = react_1.useState(''), groupname = _b[0], setGroupname = _b[1];
    var groupNameHandler = react_1.useCallback(function (e) {
        e.preventDefault();
        setGroupname(e.target.value);
    }, [groupname]);
    // User Subkey
    var subkey = (_a = session === null || session === void 0 ? void 0 : session.data) === null || _a === void 0 ? void 0 : _a.user.subkey;
    var _c = alertStore_1.useAlertStore(function (state) { return state; }), error = _c.error, success = _c.success;
    var mutate = react_query_1.useMutation({
        mutationFn: function () { return createGroup_1.createGroup({ subkey: subkey, groupname: groupname }); },
        onMutate: function () {
            console.log('groupname', groupname);
        },
        onSuccess: function () {
            success('그룹 생성이 완료되었습니다.');
            queryClient.invalidateQueries({ queryKey: ['navigation'] });
            router.back();
        },
        onError: function (e) {
            var _a, _b;
            console.log(e);
            if (((_a = e.request) === null || _a === void 0 ? void 0 : _a.status) === 409) {
                error('이미 존재하는 그룹입니다.');
            }
            if (((_b = e.request) === null || _b === void 0 ? void 0 : _b.status) === 400) {
                error('그룹 생성에 실패했습니다. Modal창을 껐다가 다시 시도해주시겠습니까?');
            }
        }
    }).mutate;
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            e.preventDefault();
            mutate();
            return [2 /*return*/];
        });
    }); };
    var closeHandler = function () {
        router.back();
    };
    return (React.createElement(ModalBackground_1["default"], null,
        React.createElement("div", { className: index_module_scss_1["default"].modal_wrapper },
            React.createElement("div", { className: index_module_scss_1["default"].title }, "Group \uC0DD\uC131\uD558\uAE30"),
            React.createElement("form", { className: index_module_scss_1["default"].form, onSubmit: handleSubmit },
                React.createElement("input", { onChange: groupNameHandler, required: true, className: index_module_scss_1["default"].input, placeholder: "\uC6D0\uD558\uB294 Group\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694" }),
                React.createElement("div", { className: index_module_scss_1["default"].guide_text },
                    "\uD2B9\uC218\uBB38\uC790\uB97C \uC81C\uC678\uD55C ",
                    React.createElement("b", null, "\uC601\uC5B4 \uB300 \uC18C\uBB38\uC790 \uD639\uC740 \uD55C\uAE00"),
                    "\uB9CC\uC744 \uC0AC\uC6A9\uD574\uC8FC\uC138\uC694"),
                React.createElement("input", { className: index_module_scss_1["default"].submit_button, type: "submit", value: 'Group 생성하기' })),
            React.createElement("button", { onClick: closeHandler, className: index_module_scss_1["default"].close_button }, "\uB2EB\uAE30"))));
}
exports["default"] = CreateGroupModal;
