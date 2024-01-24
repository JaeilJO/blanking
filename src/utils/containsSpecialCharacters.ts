export default function containsSpecialCharacters(inputString: string) {
    const regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    return regex.test(inputString);
}
