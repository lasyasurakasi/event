import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <Link href="/" className={styles.logo}>Event</Link>
            <div className={styles.headerActions}>
              <Link href="/sign-in" className={styles.signIn}>Sign in</Link>
              <Link href="/sign-up" className={styles.btnGetStarted}>
                Get started <span className={styles.arrow}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            {/* Left Side - Product Information */}
            <div className={styles.productInfo}>
              <div className={styles.announcementTag}>
                New features available <span className={styles.arrow}>→</span>
              </div>
              <h1 className={styles.headline}>
                The better way to schedule your meetings
              </h1>
              <p className={styles.description}>
                A fully customizable scheduling software for individuals, businesses taking calls and developers building scheduling platforms where users meet users.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/sign-up" className={styles.btnGoogle}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                    <path d="M9 18c2.43 0 4.467-.806 5.965-2.184l-2.908-2.258c-.806.54-1.837.86-3.057.86-2.351 0-4.341-1.588-5.057-3.723H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
                    <path d="M3.943 10.695c-.18-.54-.282-1.117-.282-1.695s.102-1.155.282-1.695V4.973H.957C.348 6.175 0 7.55 0 9s.348 2.825.957 4.027l2.986-2.332z" fill="#FBBC05"/>
                    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.973L3.943 7.305C4.659 5.17 6.649 3.58 9 3.58z" fill="#EA4335"/>
                  </svg>
                  Sign up with Google
                </Link>
                <Link href="/sign-up" className={styles.btnEmail}>
                  Sign up with email <span className={styles.arrow}>→</span>
                </Link>
              </div>
              <p className={styles.noCredit}>No credit card required</p>
            </div>

            {/* Right Side - Weekly Calendar */}
            <div className={styles.calendarWidget}>
              <div className={styles.weeklyCalendar}>
                {/* Time column header */}
                <div className={styles.timeColumn}>
                  <div className={styles.timeHeader}></div>
                  <div className={styles.timeSlot}>8:00 AM</div>
                  <div className={styles.timeSlot}>9:00 AM</div>
                  <div className={styles.timeSlot}>10:00 AM</div>
                  <div className={styles.timeSlot}>11:00 AM</div>
                  <div className={styles.timeSlot}>12:00 PM</div>
                  <div className={styles.timeSlot}>1:00 PM</div>
                  <div className={styles.timeSlot}>2:00 PM</div>
                </div>

                {/* Days columns */}
                <div className={styles.daysGrid}>
                  {/* Monday */}
                  <div className={styles.dayColumn}>
                    <div className={styles.dayHeader}>Monday</div>
                    <div className={styles.timeRow}>
                      <div className={`${styles.event} ${styles.eventLightBlue}`} style={{ top: '4px', height: '52px' }}>
                       
                        <span className={styles.eventTitle}>Monday Wake-Up Hour</span>
                      </div>
                    </div>
                    <div className={styles.timeRow}>
                      <div className={`${styles.event} ${styles.eventLightBlue}`} style={{ top: '4px', height: '52px' }}>
                     
                        <span className={styles.eventTitle}>All-Team Kickoff</span>
                      </div>
                    </div>
                    <div className={styles.timeRow}>
                      <div className={`${styles.event} ${styles.eventLightBlue}`} style={{ top: '4px', height: '52px' }}>
                       
                        <span className={styles.eventTitle}>Financial Update</span>
                      </div>
                    </div>
                    <div className={styles.timeRow}>
                      <div className={`${styles.event} ${styles.eventPurple}`} style={{ top: '4px', height: '52px' }}>
                      
                        <span className={styles.eventTitle}>New Employee Welcome Lunch!</span>
                      </div>
                    </div>
                    <div className={styles.timeRow}></div>
                    <div className={styles.timeRow}>
                      <div className={`${styles.event} ${styles.eventLightBlue}`} style={{ top: '4px', height: '52px' }}>
                       
                        <span className={styles.eventTitle}>Design Review</span>
                      </div>
                    </div>
                    <div className={styles.timeRow}>
                      <div className={`${styles.event} ${styles.eventOrange}`} style={{ top: '4px', height: '52px' }}>
                     
                        <span className={styles.eventTitle}>1:1 with Jon</span>
                      </div>
                    </div>
                  </div>

                  {/* Tuesday */}
                  <div className={styles.dayColumn}>
                    <div className={styles.dayHeader}>Tuesday</div>
                    <div className={styles.timeRow}></div>
                    <div className={styles.timeRow}>
                      <div className={`${styles.event} ${styles.eventLightBlue}`} style={{ top: '4px', height: '116px' }}>
                 
                        <span className={styles.eventTitle}>Design Review: Acme Marketi...</span>
                      </div>
                    </div>
                    <div className={styles.timeRow}></div>
                    <div className={styles.timeRow}></div>
                    <div className={styles.timeRow}>
                      <div className={`${styles.event} ${styles.eventLightBlue}`} style={{ top: '4px', height: '52px' }}>
                    
                        <span className={styles.eventTitle}>Design System Kickoff Lunch</span>
                      </div>
                    </div>
                    <div className={styles.timeRow}></div>
                    <div className={styles.timeRow}>
                      <div className={`${styles.event} ${styles.eventLightBlue}`} style={{ top: '4px', height: '52px' }}>
                      
                        <span className={styles.eventTitle}>Concept Design Review II</span>
                      </div>
                    </div>
                  </div>

                  {/* Wednesday */}
                  <div className={styles.dayColumn}>
                    <div className={styles.dayHeader}>Wednesday</div>
                    <div className={styles.timeRow}></div>
                    <div className={styles.timeRow}>
                      <div className={`${styles.event} ${styles.eventGreen}`} style={{ top: '4px', height: '52px' }}>
                     
                        <span className={styles.eventTitle}>Webinar: Figma ...</span>
                      </div>
                    </div>
                    <div className={styles.timeRow}></div>
                    <div className={styles.timeRow}>
                      <div className={`${styles.event} ${styles.eventPurple}`} style={{ top: '4px', height: '52px' }}>
                    
                        <span className={styles.eventTitle}>Onboarding Presentation</span>
                      </div>
                    </div>
                    <div className={styles.timeRow}></div>
                    <div className={styles.timeRow}>
                      <div className={`${styles.event} ${styles.eventLightBlue}`} style={{ top: '4px', height: '52px' }}>
                       
                        <span className={styles.eventTitle}>MVP Prioritization Workshop</span>
                      </div>
                    </div>
                    <div className={styles.timeRow}></div>
                  </div>

                  {/* Thursday */}
                  <div className={styles.dayColumn}>
                    <div className={styles.dayHeader}>Thursday</div>
                    <div className={styles.timeRow}></div>
                    <div className={styles.timeRow}>
                      <div className={`${styles.event} ${styles.eventGreen}`} style={{ top: '4px', height: '52px' }}>
                    
                        <span className={styles.eventTitle}>Coffee Chat</span>
                      </div>
                    </div>
                    <div className={styles.timeRow}>
                      <div className={`${styles.event} ${styles.eventPurple}`} style={{ top: '4px', height: '52px' }}>
                      
                        <span className={styles.eventTitle}>Health Benefits Walkthrough</span>
                      </div>
                    </div>
                    <div className={styles.timeRow}></div>
                    <div className={styles.timeRow}></div>
                    <div className={styles.timeRow}>
                      <div className={`${styles.event} ${styles.eventLightBlue}`} style={{ top: '4px', height: '52px' }}>
                    
                        <span className={styles.eventTitle}>Design Review</span>
                      </div>
                    </div>
                    <div className={styles.timeRow}></div>
                  </div>

                  {/* Friday */}
                  <div className={styles.dayColumn}>
                    <div className={styles.dayHeader}>Friday</div>
                    <div className={styles.timeRow}></div>
                    <div className={styles.timeRow}>
                      <div className={`${styles.event} ${styles.eventLightBlue}`} style={{ top: '4px', height: '52px' }}>
                     
                        <span className={styles.eventTitle}>Coffee Chat</span>
                      </div>
                    </div>
                    <div className={styles.timeRow}></div>
                    <div className={styles.timeRow}></div>
                    <div className={styles.timeRow}>
                      <div className={`${styles.event} ${styles.eventLightBlue}`} style={{ top: '4px', height: '52px' }}>
                    
                        <span className={styles.eventTitle}>Marketing Meet-and-Greet</span>
                      </div>
                    </div>
                    <div className={styles.timeRow}></div>
                    <div className={styles.timeRow}>
                      <div className={`${styles.event} ${styles.eventOrange}`} style={{ top: '4px', height: '52px' }}>
                       
                        <span className={styles.eventTitle}>1:1 with Heather</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

