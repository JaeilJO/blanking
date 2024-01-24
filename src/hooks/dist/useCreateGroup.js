"use strict";
exports.__esModule = true;
var createGroup_1 = require("@/lib/createGroup");
var alertStore_1 = require("@/zustand/alertStore");
var react_query_1 = require("@tanstack/react-query");
function useCreateGroup(_a) {
    var subkey = _a.subkey, groupname = _a.groupname, router = _a.router;
    var queryClient = react_query_1.useQueryClient();
    var _b = alertStore_1.useAlertStore(function (state) { return state; }), error = _b.error, success = _b.success;
    var mutate = react_query_1.useMutation({
        mutationFn: function () { return createGroup_1.createGroup({ subkey: subkey, groupname: groupname }); },
        onSuccess: function () {
            success('그룹 생성이 완료되었습니다.');
            queryClient.invalidateQueries({ queryKey: ['navigation'] });
            router.back();
        },
        onError: function (e) {
            var _a, _b, _c;
            if (((_a = e.request) === null || _a === void 0 ? void 0 : _a.status) === 409) {
                error('이미 존재하는 그룹입니다.');
            }
            if (((_b = e.request) === null || _b === void 0 ? void 0 : _b.status) === 400) {
                error('그룹 생성에 실패했습니다. Modal창을 껐다가 다시 시도해주시겠습니까?');
            }
            if (((_c = e.request) === null || _c === void 0 ? void 0 : _c.status) === 422) {
                error('특수문자를 제외한 영어 대 소문자 혹은 한글만을 사용해주세요');
            }
        }
    }).mutate;
    return { mutate: mutate };
}
exports["default"] = useCreateGroup;
