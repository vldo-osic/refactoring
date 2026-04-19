export default function CounterApp()
   let count = 0;

		const changeCount = () => {
	    count += 1;
	    }
	    
return (
    <div className="App">
	    <p>'Чтo произойдет при клике по кнопке</p>
	    <hi>Count = {count}</hi>
	    <button onClick={changeCount}>кнопка</button>
    </div>
});