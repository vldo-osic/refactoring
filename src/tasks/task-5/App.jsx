import React, { useState } from "react";

const initList = () => {
    return Array.from({ length: 200 }, (_el, index) => ({ 
        value: Math.random(),
        label: `row ${index + 1}`
    });
}

export default function App() {
    const [list] = useState(initList());

    const handleUpdate = () => {
        list[0].value = Math.random();
    };

    return (
        <div>
            <h1>List App</h1>
            <Button onClick={handleUpdate}>Update "row 1"</Button>
            {
                list.map(({ label, value }) => (
                    <Row label={label} value={value} />
                ))
            }
        </div>
    );
}

function Button(props) {
    const { children, onClick } = props;

    return <button onClick={onClick}>{children}</button>;
}

function Row(props) {
    const {
        label, value
    } = props;

    return (
        <div style={{ marginTop: '8px' }}>
            <span style={{ marginRight: "20px" }}>{label}:</span>
            <span>{value}</span>
        </div>
    );
}