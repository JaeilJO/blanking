export default function checkName(name: string) {
    var hasNonSpaceCharacter = name.trim().length > 0;

    return hasNonSpaceCharacter;
}
