import TooltipComp from '@components/Shared/TooltipComp'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { set } from 'rsuite/esm/internals/utils/date'

// Fix the perma re-rendering of the clock
const Clock = () => {
    const [Time, setTime] = useState(new Date())
    const { t } = useTranslation();


    useEffect(() => {
        let now = new Date()
            const interval = window.setInterval(() => {
                now = new Date()
            if (now.getMinutes() !== Time.getMinutes()) {
                setTime(now);
                return () => window.clearInterval(interval);
            }
        }, 1000)
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
        <TooltipComp text={date} placement={'topEnd'}>
            <div style={{display:"block", fontSize: "9px", fontFamily: "PX", cursor: "default"}}>
                {formatTime(Time.getHours())}
                &thinsp;:&thinsp;
                {formatTime(Time.getMinutes())}
            </div>
        </TooltipComp>
    </>
  )

  
}

export default Clock