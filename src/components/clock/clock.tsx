import React, { useEffect } from 'react';
import styles from './style.module.css';

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
        // className={styles.workingTimeIsOver}
        <div className={styles.clock}>
            <div className={styles.location}>
                {loacation}: 
            </div>    
            <div id={id} className={styles.currentTime}>
                00:00
            </div>
        </div>
    );
};

export default Clock;


const clockHandler = (loacation: string, timeShift: number, id: string ) => {


    setInterval(() => { 
                const date = new Date();
                let h: string = `` + (date.getHours() + timeShift + 24) % 24;
                let m: string  = `` + date.getMinutes();
                h = (parseInt(h)  < 10) ? '0' + h : h;
                m = (parseInt(m) < 10) ? '0' + m : m;
                const timeZone: HTMLElement | null = document.getElementById(id)
                if (!timeZone) return;
                timeZone!.innerHTML = loacation + `: `+ h + ':' + m ;
                if ( parseInt(h) >= 18 || parseInt(h) < 9) {
                    timeZone?.classList.add(styles.workingTimeIsOver);
                } else {
                    timeZone?.classList.remove(styles.workingTimeIsOver)
                }
                timeZone!.innerHTML = h + ':' + m ;
        }, 1000);  
}