import React from "react";

const ActionButton = (props) => {
    return (
        <div>
            <button className={`btn btn-xs btn-square btn-outline ${props.variant} group`}>
                {props.children}
            </button>
        </div>
    )
}

export default ActionButton;