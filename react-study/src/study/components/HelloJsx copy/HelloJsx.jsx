/**
 *      [[ JSX의 특징]]
 * 1. 태그가 열리면 꼭 닫혀야한다.
 */

function HelloJsx() {
    //1. 태그가 열리면 꼭 닫혀야
    const jsx1 = <div>
            <h1>JSX의 특징</h1>
            <input type="text" />
        </div>
        
    //2. 두개 이상의 JSX는 하나의 JSX로 감싸야한다.
    const jsx2 = <div>
        <div></div>
        <div></div>
    </div>

    //3. 변수, 상수, 리스트, 값 등을 표현하려면 {}로 감싸서 표현한다.
    const name = '김준일';
    const age = 31;

    const jsx3 = <div>
        <h3>이름: {name}</h3>
        <h3>나이: {age + 1}</h3>
    </div>

    // 4. 2번에서 2개이상의 jsx는 하나로 감싸야한다고 배움.
    //    이때, 그룹을 위한 만들어진 태그가 있음. <></>
    const jsx4 = <>
    <div></div>
    <div></div>
    </>

    const jsx5 = <>
    <div></div>
    <div></div>
    </>

    const jsx6 = <div>
        {jsx4}
        {jsx5}
        {jsx6}
    </div>

    // 리스트 표현하기
    const nametList = [
        <div>김준일</div>,
        <div>김준이</div>,
        <div>김준삼</div>,
        <div>김준사</div>,

    ]

    const nameList2 = [
        "김준일",
        "김준이",
        "김준삼",
        "김준사",
    ]

    return <div>
        {jsx1}
        {jsx2}
        {jsx3}
        {nametList}
        {nameList2}
    </div>
    }

export default HelloJsx;