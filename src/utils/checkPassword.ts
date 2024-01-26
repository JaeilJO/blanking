export default function checkPassword(password: string) {
    const upperCasePattern = /[A-Z]/;
    const lowerCasePattern = /[a-z]/;
    const digitPattern = /\d/;

    // 대문자, 소문자, 숫자 여부 확인
    const hasUpperCase = upperCasePattern.test(password);
    const hasLowerCase = lowerCasePattern.test(password);
    const hasDigit = digitPattern.test(password);

    // 비밀번호 조건 충족 여부 확인
    if (hasUpperCase && hasLowerCase && hasDigit) {
        return true; // 충족
    } else {
        return false; // 미충족
    }
}
