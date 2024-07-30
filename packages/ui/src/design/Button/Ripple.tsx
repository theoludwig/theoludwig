"use client"

import { useLayoutEffect, useState } from "react"

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: () => void,
): void => {
  useLayoutEffect(() => {
    let bounce: ReturnType<typeof setTimeout> | undefined
    if (rippleCount > 0) {
      clearTimeout(bounce)

      bounce = setTimeout(() => {
        cleanUpFunction()
        clearTimeout(bounce)
      }, duration * 4)
    }

    return () => {
      return clearTimeout(bounce)
    }
  }, [rippleCount, duration, cleanUpFunction])
}

export interface RippleProps {
  /**
   * The color of the ripple effect.
   */
  color?: string

  /**
   * The duration of the ripple animation in milliseconds.
   */
  duration?: number
}

interface RippleItem {
  x: number
  y: number
  size: number
}

export const Ripple: React.FC<RippleProps> = (props) => {
  const { duration = 1_200, color = "rgb(229, 231, 235)" } = props
  const [rippleArray, setRippleArray] = useState<RippleItem[]>([])

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([])
  })

  const addRipple: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect()
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height
    const x = event.pageX - rippleContainer.x - size / 2
    const y = event.pageY - rippleContainer.y - size / 2
    const newRipple: RippleItem = {
      x,
      y,
      size,
    }
    setRippleArray([...rippleArray, newRipple])
  }

  return (
    <div className="absolute inset-0" onMouseDown={addRipple}>
      {rippleArray.map((ripple, index) => {
        return (
          <span
            key={"span" + index}
            className="absolute rounded-full opacity-75"
            style={{
              transform: "scale(0)",
              backgroundColor: color,
              animationName: "ripple",
              animationDuration: `${duration}ms`,
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        )
      })}
    </div>
  )
}
