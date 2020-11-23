import React, { useEffect } from 'react';

type ClockProps = {
    loacation: string;
    timeShift: number;
    id: string
}

const Clock: React.FC<ClockProps> = ({ loacation, timeShift, id }) => {
    useEffect(() => {
        clockHandler( loacation, timeShift, id );

    }, []);//eslint-disable-line
    return (
        <div id={id}>
            00:00
        </div>
    );
};

export default Clock;


const clockHandler = (loacation: string, timeShift: number, id: string ) => {
    setInterval(() => { 
                const date = new Date();
                let h: string = `` + (date.getHours() + timeShift) % 24;
                let m: string  = `` + date.getMinutes();
                h = (parseInt(h)  < 10) ? '0' + h : h;
                m = (parseInt(m) < 10) ? '0' + m : m;
                document.getElementById(id)!.innerHTML = loacation + `: `+ h + ':' + m ;
        }, 1000);  
}
    