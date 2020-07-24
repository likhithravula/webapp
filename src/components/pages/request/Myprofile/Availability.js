import React, { Component, useState } from 'react'
import menu_icon from './../../../../assets/img/menu_icon.svg'
import '../../../../assets/css/App.css'
const Availability = () => {
    const [isMon, setIsMon] = useState(false);
    const [isTue, setIsTue] = useState(false);
    const [isWed, setIsWed] = useState(false);
    const [isThu, setIsThu] = useState(false); 
    const [isFri, setIsFri] = useState(false);
    const [isWeekdays, setIsWeekdays] = useState(false);
    // render() {
    return (
        <div>
            <div className='profile-bg-availability'>
                <img src={menu_icon} className='menu-nav'></img>
                <h1 className='my-availability'>My availability</h1>
                <h4 className='h4-availability'>you can select any section</h4>
            </div>
            <div>
                <button className='weekdays' style={{background: isWeekdays?'#5FD680':null }} onClick={() => {
                    setIsWeekdays(true);
                    setIsMon(true);
                    setIsTue(true);
                    setIsWed(true);
                    setIsThu(true);
                    setIsFri(true);
                }}>Weekdays</button>
                <button className='weekends' id='id-ends'>Weekends</button> 
            </div>
            <div>
                <button className='mon' id='daily1' style={{ background: isMon ? '#5FD680' : null }} onClick={()=>{setIsMon(!isMon)}}>Mon</button>
                <button className='tue' id='daily1' style={{ background: isTue ? '#5FD680' : null }} onClick={()=>{setIsTue(!isTue)}}>Tue</button>
                <button className='wed' id='daily1' style={{ background: isWed ? '#5FD680' : null }} onClick={()=>{setIsWed(!isWed)}}>Wed</button>
                <button className='thu' id='daily1' style={{ background: isThu ? '#5FD680' : null }} onClick={()=>{setIsThu(!isThu)}}>Thu</button>
                <button className='fri' id='daily1' style={{ background: isFri ? '#5FD680' : null }} onClick={()=>{setIsFri(!isFri)}}>Fri</button>
                <button className='sat' id='daily1'>Sat</button>
                <button className='sun' id='daily1'>Sun</button>
            </div>
            <div>
                <button className='all-day'>All day</button>
            </div>
            <div>
                <button>9:00-10:00</button>
                <button>10:00-11:00</button>
                <button>11:00-12:00</button>
                <button>12:00-13:00</button>
                <button>13:00-14:00</button>
                <button>14:00-15:00</button>
                <button>15:00-16:00</button>
                <button>16:00-17:00</button>
                <button>17:00-18:00</button>
                <button>18:00-19:00</button>
                <button>19:00-20:00</button>
                <button>20:00-21:00</button>
            </div>
        </div>

    )
    // }
}

export default Availability
