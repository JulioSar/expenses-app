import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props =>{
    const itemsValue = props.items.map(item => item.value);
    const totalMax = Math.max(...itemsValue);
    console.log(props.items)
    return(
        <div className="chart">
            {props.items.map((item) =>
                (<ChartBar 
                    key = {item.label}
                    value={item.value} 
                    maxValue={totalMax} 
                    label={item.label}
                />
            ))}
        </div>
    )

}

export default Chart;