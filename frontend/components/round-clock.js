import styles from "./RoundClock.module.css"

const RoundClock = ({ timeSlots, selectedDay }) => {
  // Filter slots for the selected day
  const daySlots = timeSlots.filter((slot) => slot.day === selectedDay)

  // Generate the 24 hour markers
  const hourMarkers = Array.from({ length: 24 }, (_, i) => i)

  // Convert time string (HH:MM) to decimal hours
  const timeToDecimal = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number)
    return hours + minutes / 60
  }

  // Calculate the angle for a specific hour (0-24)
  const hourToAngle = (hour) => {
    return (hour / 24) * 360
  }

  // Update the timeSegments generation to show 30-minute slots more clearly
  const timeSegments = daySlots.map((slot, index) => {
    const startHour = timeToDecimal(slot.startTime)
    const endHour = timeToDecimal(slot.endTime)

    // Ensure we're showing exactly 30-minute slots
    const duration = endHour - startHour
    const isThirtyMinSlot = Math.abs(duration - 0.5) < 0.01

    const startAngle = hourToAngle(startHour)
    const endAngle = hourToAngle(endHour)

    // Calculate the SVG arc parameters
    const radius = 130 // Slightly smaller than the clock face
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1

    // Convert polar to cartesian coordinates
    const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
      const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
      }
    }

    const center = { x: 150, y: 150 }
    const start = polarToCartesian(center.x, center.y, radius, startAngle)
    const end = polarToCartesian(center.x, center.y, radius, endAngle)

    // Create the arc path
    const d = [
      "M",
      center.x,
      center.y,
      "L",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      1,
      end.x,
      end.y,
      "Z",
    ].join(" ")

    return (
      <path
        key={index}
        d={d}
        fill={slot.isAvailable ? "rgba(25, 119, 204, 0.3)" : "rgba(220, 53, 69, 0.3)"}
        stroke={slot.isAvailable ? "#1977cc" : "#dc3545"}
        strokeWidth="1"
      />
    )
  })

  // Update the clock title to reflect 30-minute slots
  return (
    <div className={styles.clockContainer}>
      <h4 className={styles.clockTitle}>Schedule Visualization for {selectedDay}</h4>
      <p className={styles.clockSubtitle}>30-minute appointment slots</p>
      <div className={styles.roundClock}>
        <svg width="300" height="300" viewBox="0 0 300 300">
          {/* Clock face */}
          <circle cx="150" cy="150" r="140" fill="#f8f9fa" stroke="#ddd" strokeWidth="2" />

          {/* Hour markers */}
          {hourMarkers.map((hour) => {
            const angle = (hour / 24) * 360
            const radians = (angle - 90) * (Math.PI / 180)
            const innerRadius = 120
            const outerRadius = 140

            const x1 = 150 + innerRadius * Math.cos(radians)
            const y1 = 150 + innerRadius * Math.sin(radians)
            const x2 = 150 + outerRadius * Math.cos(radians)
            const y2 = 150 + outerRadius * Math.sin(radians)

            return (
              <g key={hour}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#666" strokeWidth={hour % 6 === 0 ? 2 : 1} />
                {hour % 3 === 0 && (
                  <text
                    x={150 + 110 * Math.cos(radians)}
                    y={150 + 110 * Math.sin(radians)}
                    fontSize="12"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#333"
                  >
                    {hour === 0 ? "24" : hour}
                  </text>
                )}
              </g>
            )
          })}

          {/* Time segments */}
          {timeSegments}

          {/* Center dot */}
          <circle cx="150" cy="150" r="5" fill="#333" />
        </svg>
      </div>

      <div className={styles.clockLegend}>
        <div className={styles.legendItem}>
          <span className={styles.legendColor} style={{ backgroundColor: "rgba(25, 119, 204, 0.3)" }}></span>
          <span>Available</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendColor} style={{ backgroundColor: "rgba(220, 53, 69, 0.3)" }}></span>
          <span>Unavailable</span>
        </div>
      </div>
    </div>
  )
}

export default RoundClock

