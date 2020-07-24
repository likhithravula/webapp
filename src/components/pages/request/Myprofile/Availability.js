import React, { Component, useState } from 'react'
import menu_icon from './../../../../assets/img/menu_icon.svg'
import '../../../../assets/css/App.css'
const Availability = () => {
    const [isMon, setIsMon] = useState(false);
    const [isTue, setIsTue] = useState(false);
    const [isWed, setIsWed] = useState(false);
    const [isThu, setIsThu] = useState(false); 
    const [isFri, setIsFri] = useState(false);
    const [isSat, setisSat] = useState(false);
    const [isSun, setisSun] = useState(false);
    const [istime9, setistime9] = useState(false);
    const [istime10, setistime10] = useState(false);
    const [istime11, setistime11] = useState(false);
    const [istime12, setistime12] = useState(false);
    const [istime13, setistime13] = useState(false);
    const [istime14, setistime14] = useState(false);
    const [istime15, setistime15] = useState(false);
    const [istime16, setistime16] = useState(false);
    const [istime17, setistime17] = useState(false);
    const [istime18, setistime18] = useState(false);
    const [istime19, setistime19] = useState(false);
    const [istime20, setistime20] = useState(false);
    const [isWeekdays, setIsWeekdays] = useState(false);
    const [isWeekends, setisWeekends] = useState(false);
    const [isAllday, setisAllday] = useState(false)
    // render() {
    return (
        <div>
            <div className='profile-bg-availability'>
                <img src={menu_icon} className='menu-nav'></img>
                <h1 className='my-availability'>My availability</h1>
                <h4 className='h4-availability'>you can select any section</h4>
            </div>
            <div>
                <button className='weekdays'  id={isWeekdays? 'days-selected' : 'id-days'} onClick={() => {
                    setIsWeekdays(!isWeekdays);
                    setisWeekends(false);
                    setisSat(false);
                    setisSun(false)
                    setIsMon(!isMon);
                    setIsTue(!isTue);
                    setIsWed(!isWed);
                    setIsThu(!isThu);
                    setIsFri(!isFri);
                }}>Weekdays</button>
                <button className='weekends' id={isWeekends? 'ends-selected': 'id-ends'}  onClick={() => {
                    setisWeekends(!isWeekends);
                    setIsWeekdays(false)
                    setisSat(!isSat);
                    setisSun(!isSun);
                    setIsMon(false);
                    setIsTue(false);
                    setIsWed(false);
                    setIsThu(false);
                    setIsFri(false);
                    }}>Weekends</button> 
            </div>
            <div>
                <button className='mon' id='daily' style={{ background: isMon ? '#5FD680' : null }} onClick={()=>{setIsMon(!isMon)}}>Mon</button>
                <button className='tue' id='daily' style={{ background: isTue ? '#5FD680' : null }} onClick={()=>{setIsTue(!isTue)}}>Tue</button>
                <button className='wed' id='daily' style={{ background: isWed ? '#5FD680' : null }} onClick={()=>{setIsWed(!isWed)}}>Wed</button>
                <button className='thu' id='daily' style={{ background: isThu ? '#5FD680' : null }} onClick={()=>{setIsThu(!isThu)}}>Thu</button>
                <button className='fri' id='daily' style={{ background: isFri ? '#5FD680' : null }} onClick={()=>{setIsFri(!isFri)}}>Fri</button>
                <button className='sat' id='daily' style={{ background: isSat ? '#5FD680' : null }} onClick={()=>{setisSat(!isSat)}}>Sat</button>
                <button className='sun' id='daily' style={{ background: isSun ? '#5FD680' : null }} onClick={()=>{setisSun(!isSun)}}>Sun</button>
            </div>
            <div>
                <button  className='All' id={isAllday? 'all-day-selected' : 'all-day' } onClick={() => setisAllday(!isAllday)}>All day</button>
            </div>
            <div>
                <button id={istime9? 'time-selected' : 'time'} className='time_nine'>9:00-10:00</button>
                <button id={istime? 'time-selected' : 'time'} className='time_ten'>10:00-11:00</button>
                <button id={istime? 'time-selected' : 'time'} className='time_eleven'>11:00-12:00</button>
                <button id={istime? 'time-selected' : 'time'} className='time_twelve'>12:00-13:00</button>
                <button id={istime? 'time-selected' : 'time'} className='time_thirteen'>13:00-14:00</button>
                <button id={istime? 'time-selected' : 'time'} className='time_fourteen'>14:00-15:00</button>
                <button id={istime? 'time-selected' : 'time'} className='time_fifteen'>15:00-16:00</button>
                <button id={istime? 'time-selected' : 'time'} className='time_sixteen'>16:00-17:00</button>
                <button id={istime? 'time-selected' : 'time'} className='time_seventeen'>17:00-18:00</button>
                <button id={istime? 'time-selected' : 'time'} className='time_eighteen'>18:00-19:00</button>
                <button id={istime? 'time-selected' : 'time'} className='time_nineteen'>19:00-20:00</button>
                <button id={istime? 'time-selected' : 'time'} className='time_twenty'>20:00-21:00</button>
            </div>
        </div>

    )
    // }
}

export default Availability
