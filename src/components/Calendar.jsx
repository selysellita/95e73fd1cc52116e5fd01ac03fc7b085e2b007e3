import React, { useEffect, useState } from 'react';

const Calendar = () =>{
    const [weeksDayDate, setWeeksDayDate]=useState([])
    const [weeksFullDate, setWeeksFullDate]=useState([])

       
    const getDates = () => {
        const dayName=['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
        const fulldayName=['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
        const monthName=['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        const weeksFullDate=[]
        const weeksDate=[]
        const weeksDayDate=[]
        const weeksFullday=[]
        const weeksMonth=[]
        const weeksYear=[]
        const totalDates=13
        const startDate= new Date()
        for (let i = 0; i <= totalDates; i++) {
            weeksDate.push(startDate.getDate())
            weeksDayDate.push({hari:dayName[startDate.getDay()], tanggal:startDate.getDate()})
            weeksFullday.push(fulldayName[startDate.getDay()])
            weeksMonth.push(monthName[startDate.getMonth()])
            weeksYear.push(startDate.getFullYear())
            weeksFullDate.push (`${weeksFullday[i]}, ${weeksDate[i]} ${weeksMonth[i]} ${weeksYear[i]}`)

            startDate.setDate(startDate.getDate()+1);     
        }
        // console.log(weeksDayDate)               
        // console.log(weeksFullDate,'tes')
        return (weeksFullDate,weeksDayDate)
    }
    
    useState(()=>{
        getDates()

        setWeeksDayDate(weeksDayDate)
        setWeeksFullDate(weeksFullDate)
    },[weeksDayDate,weeksFullDate])
    

    

    const renderCalendar= () => {
        weeksDayDate?.map(val =>{
            return(
            <>
                <div style={{textAlign:'center', background:'#000', color:'#fff', borderRadius:'50px', width:'56px', height:'56px'}}>
                    <p style={{fontSize:'16px', margin:0}}>{val.hari}</p>
                    <p style={{fontSize:'24px', margin:0}}>{val.tanggal}</p>
                </div>
            </>
            )
        })
    }




    return(
        <>
            {renderCalendar()}
            <div></div>
        </>
    )
}

export default Calendar
