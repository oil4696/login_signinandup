// 매개변수에 들어올 때부터 구조분해

function Props2({ a, b }) {
    // 하나의 속성밖게 못들고 오기때문에 {}로 구조분해를 해주지 않으면 
    return <div>
        <p>a - {a}</p>
        <p>b - {b}</p>
    </div>
}

export default Props2;