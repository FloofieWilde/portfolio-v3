import TooltipComp from '@components/Shared/TooltipComp'
import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [Time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
    <>
        <TooltipComp text="TEst">
            <span style={{fontSize: "9px", fontFamily: "PX"}}>
                {Time.getHours().toString().length === 1 ? "0" + Time.getHours() : Time.getHours()}
                &thinsp;:&thinsp;
                {Time.getMinutes()}</span>
        </TooltipComp>
    </>
  )
}

export default Clock