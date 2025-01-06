import { useEffect, useState } from 'react'
import styles from './LoadingBar.module.css'

export default function LoadingBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className={styles.loadingBarContainer}>
      <div className={styles.loadingBar} style={{ width: `${progress}%` }}></div>
    </div>
  )
}

