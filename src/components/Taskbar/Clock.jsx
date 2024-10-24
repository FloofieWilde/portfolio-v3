import TooltipComp from '@components/Shared/TooltipComp'
import { format } from 'prettier'
import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [Time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    
    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time
    }

    return (
    <>
        <TooltipComp text={t("test")}>
            <span style={{fontSize: "9px", fontFamily: "PX"}}>
                {formatTime(Time.getHours())}
                &thinsp;:&thinsp;
                {formatTime(Time.getMinutes())}
            </span>
        </TooltipComp>
    </>
  )

  
}

export default Clock