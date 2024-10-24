import TooltipComp from '@components/Shared/TooltipComp'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Clock = () => {
    const [Time, setTime] = useState(new Date())
    const { t } = useTranslation();

    //TODO : Fix the memory leak (reset the tooltip is doing bs)
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [Time])
    
    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time
    }

    const date = Time.toLocaleDateString(t('locale'), {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
    <>
        <TooltipComp text={date}>
            <div style={{fontSize: "9px", fontFamily: "PX", cursor: "default"}}>
                {formatTime(Time.getHours())}
                &thinsp;:&thinsp;
                {formatTime(Time.getMinutes())}
            </div>
        </TooltipComp>
    </>
  )

  
}

export default Clock