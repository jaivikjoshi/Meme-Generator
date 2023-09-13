import React, {useState} from "react"
import Draggable from "react-draggable"
const Text = () => {
    const [editMode, setEditMode] = useState(false)
    const [currValue, setCurrValue] = useState("Double Click to toggle between edit mode")
    return (
        <Draggable>
            {editMode ? <input value={currValue} onChange={e => setCurrValue(e.target.value)} onDoubleClick={e => setEditMode(false)}/> : <h1 onDoubleClick={e => setEditMode(true)}>{currValue}</h1>}
        </Draggable>
    )
}
export default Text