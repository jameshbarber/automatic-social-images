import { useState } from "react";
import {useRouter} from 'next/router'
const suppData = {
    amount: {
        placeholder: "Amount",
        type: "text",
    },
    type: {
        placeholder: "Type",
        type: "dropdown",
    },
    conditions: {
        placeholder: "Conditions",
    }
}

const Examples = () => {
    const router = useRouter()
    const [state, setState] = useState({
        amount: 15,
        type: "absolute",
        conditions: "Gültig bis zum 28.08.2022"
    })

    const onFormEdit = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const inputStyle = {
        padding: "12px 20px",
        margin: "8px 0",
        display: "block",
        border: "1px solid #ccc",
        borderRadius: "8px"
    }

    const capture = () => {
        router.push('/test-voucher?voucher=' + state.amount + '&type=' + state.type + '&conditions=' + state.conditions)
    }

    // const url = "http://localhost:3000/voucher-" + randomNumber + "?voucher=" + randomNumber + "&conditions=" + encodeURI("Gültig bis zum 28.08.2022");
    return <div style={{width: "600px", margin: "0 auto"}}>
        <h1>Voucher Generator</h1>
        <img style={{width: "100%"}} src={'/test-voucher?voucher=' + state.amount + '&type=' + state.type + '&conditions=' + state.conditions}/>
        <form onSubmit={capture}>
            {Object.keys(state).map(key => {
                return <input style={inputStyle} key={key} onChange={onFormEdit} value={state[key]} name={key} id={key} {...suppData[key]}></input>
            })}
            <input type="submit" value="Download Image"></input>
        </form>
        {/* <a href={url}>{url}</a> */}
    </div>

}

export default Examples