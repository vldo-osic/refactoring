import { useCallback, useState } from "react";

const initList = () => {
    return Array.from({ length: 200 }, (_el, index) => ({ 
        id: crypto.randomUUID(),
        value: Math.random(),
        label: `row ${index + 1}`
    }));
}

export default function App() {
    const [list, setList] = useState(initList());

    const handleUpdate = useCallback(() => {
        setList(prev => {
            const first = { ...prev[0], value: Math.random() };

            return [ first, ...prev.slice(1) ];
        })
    }, []);

    return (
        <div>
            <h1>List App</h1>
            <Button onClick={handleUpdate}>Update "row 1"</Button>
            <ul>
                {
                    list.map(({ label, value, id }) => (
                        <Row key={id} label={label} value={value} />
                    ))
                }
            </ul>
        </div>
    );
}

function Button(props) {
    const { children, onClick } = props;

    return <button onClick={onClick} type="button">{children}</button>;
}

function Row(props) {
    const { label, value } = props;

    return (
        <ul style={{ marginTop: '8px', listStyle: "none" }}>
            <span style={{ marginRight: "20px" }}>{label}:</span>
            <span>{value}</span>
        </ul>
    );
}