'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'

export default function Onboarding() {
  const [availability, setAvailability] = useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
  })

  const toggleDay = (day: keyof typeof availability) => {
    setAvailability(prev => ({ ...prev, [day]: !prev[day] }))
  }

  const days = [
    { key: 'monday' as const, label: 'Monday' },
    { key: 'tuesday' as const, label: 'Tuesday' },
    { key: 'wednesday' as const, label: 'Wednesday' },
    { key: 'thursday' as const, label: 'Thursday' },
    { key: 'friday' as const, label: 'Friday' },
    { key: 'saturday' as const, label: 'Saturday' },
    { key: 'sunday' as const, label: 'Sunday' },
  ]

  return (
    <div className={styles.onboardingPage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Set your availability.</h1>
          <p className={styles.subtitle}>
            Define ranges of time when you are available. Customize it later in the availability page.
          </p>

          <div className={styles.progressSection}>
            <span className={styles.stepText}>Step 4 of 5</span>
            <div className={styles.progressBar}>
              <div className={`${styles.progressStep} ${styles.filled}`}></div>
              <div className={`${styles.progressStep} ${styles.filled}`}></div>
              <div className={`${styles.progressStep} ${styles.filled}`}></div>
              <div className={`${styles.progressStep} ${styles.filled}`}></div>
              <div className={styles.progressStep}></div>
            </div>
          </div>

          <div className={styles.formCard}>
            {days.map((day) => (
              <div key={day.key} className={styles.dayRow}>
                <div className={styles.dayLabel}>{day.label}</div>
                <div className={styles.dayControls}>
                  {availability[day.key] && (
                    <div className={styles.timeInputs}>
                      <input
                        type="text"
                        className={styles.timeInput}
                        defaultValue="9:00am"
                      />
                      <span className={styles.timeSeparator}>-</span>
                      <input
                        type="text"
                        className={styles.timeInput}
                        defaultValue="5:00pm"
                      />
                    </div>
                  )}
                  {availability[day.key] && (
                    <div className={styles.dayActions}>
                      <button type="button" className={styles.iconButton}>
                        <span className={styles.icon}>+</span>
                      </button>
                      <button type="button" className={styles.iconButton}>
                        <span className={styles.icon}>📋</span>
                      </button>
                    </div>
                  )}
                  <label className={styles.toggle}>
                    <input
                      type="checkbox"
                      checked={availability[day.key]}
                      onChange={() => toggleDay(day.key)}
                      className={styles.toggleInput}
                    />
                    <span className={styles.toggleSlider}></span>
                  </label>
                </div>
              </div>
            ))}
          </div>

          <button type="button" className={styles.completeButton}>
            Complete your profile <span className={styles.arrow}>→</span>
          </button>

          <div className={styles.signOutLink}>
            <Link href="/sign-in">Sign out</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

