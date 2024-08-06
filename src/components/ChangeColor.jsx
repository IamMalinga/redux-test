import { useState } from "react";
import { useDispatch } from "react-redux";
import { fontColor } from "../features/theme.js"

const ChangeColor = () => {
    const [color, setColor] = useState("");
    const dispatch = useDispatch();
    return(
        <div>
            <input onChange={(event) => setColor(event.target.value)}/>
            <button onClick={() => dispatch(fontColor(color))}>Change Color</button>
        </div>
    )
}

export default ChangeColor;