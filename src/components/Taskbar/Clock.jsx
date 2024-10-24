import TooltipComp from '@components/Shared/TooltipComp'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Clock = () => {
    const [Time, setTime] = useState(new Date())
    const { t } = useTranslation();

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    
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
            <span style={{fontSize: "9px", fontFamily: "PX", cursor: "default"}}>
                {formatTime(Time.getHours())}
                &thinsp;:&thinsp;
                {formatTime(Time.getMinutes())}
            </span>
        </TooltipComp>
    </>
  )

  
}

export default Clock