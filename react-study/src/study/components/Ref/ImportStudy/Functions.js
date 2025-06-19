// defalut는 하나만 존재할 수 있다
// defalut가 포함된 함수는 함수명을 바꿀 수 있다.
// defalut함수는 immport 될때 {}에 감싸지지 않는다

export default function fx1 () {
    return "fx1입니다";
}

export function fx2 () {
    return "fx2입니다";
}

export function fx3 () {
    return "fx3입니다";
}

export let data = 10;