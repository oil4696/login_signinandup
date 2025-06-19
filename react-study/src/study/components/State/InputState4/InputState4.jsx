/**
 * input 3개를 만든다. (productName, price, stack)
 * 
 * 확인 버튼을 누르면 table에 추가한다
 * 
 * const [ products, setProducts ] = useState([""]); -> use..이 붙은 상태는 훅함수라고 부른다
 * 
 * 컴퍼넌트의 상태가 바뀔때 마다 컴퍼넌트의 재호출(렌더링)이 일어남
 */

import { useState } from "react";

function InputState4() {
    const [ products, setProducts ] = useState([]);       //배열
    const inputValueEmpty = {
        productName: "",
        price: "",
        stock: "",

    }
    const [ inputValue, setInputValue ] = useState(inputValueEmpty)         //객체


    const heandleOnClick = e => {

        // const newArray = ((prev) => {
        //     const newArray = prev;
        //     newArray.push(inputValue);
        //     return newArray;
        // })

        setProducts((prev) => [...products, inputValue])

        setInputValue(inputValueEmpty);

    }

    const heandleOnChange = e => {

        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value

        })

        const { name, value } = e.target;

        // setInputValue((prev) => {
        //     return {
        //         ...prev,
        //         [name]: value,
        //     }
        // });
    }

    

    return <div>
        <div>
            <label htmlFor="" >상품명</label>
            <input type="text" name="productName" value={inputValue.productName} onChange={heandleOnChange} />
        </div>
        <div>
            <label htmlFor="">가격</label>
            <input type="text" name="price" value={inputValue.price} onChange={heandleOnChange} />
        </div>
        <div>
            <label htmlFor="">수량</label>
            <input type="text" name="stock"  value={inputValue.stock} onChange={heandleOnChange} />
        </div>
        <div>
            <button onClick={heandleOnClick}>확인</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>상품명</th>
                    <th>가격</th>
                    <th>수량</th>
                </tr>
            </thead>
            <tbody>
                {
                        //  tr이 반복이 돌기때문에 tr에  key값을 넣어준것이다
                    products.map((product, index) => (<tr key={index}>
                        <td>{product.productName}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                    </tr>))
                }
            </tbody>
        </table>
    </div>
}

export default InputState4;