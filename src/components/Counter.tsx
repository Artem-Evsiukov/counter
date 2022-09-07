import React, {useState} from 'react';
import './counter.css'


export const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const onClickPlusHandler = () => {
        setCount(count + 1)
    }

    const resetHandler = () => {
        setCount(0)
    }

    const colorRedClass =  count === 5 ? 'red' : 'text'

    return (
        <div className='counter-wrap'>
            <div className='counter-text'>
            <div className={colorRedClass}>{count}</div>
            </div>
            <div className="btn-wrap">
                <button className='counter-btn' disabled={count === 5} onClick={onClickPlusHandler}>inc</button>
                <button className='counter-btn' disabled={!count} onClick={resetHandler}>reset</button>
            </div>
        </div>
    );
};

