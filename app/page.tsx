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
            <nav className={styles.nav}>
              <a href="#" className={styles.navLink}>
                Solutions <span className={styles.dropdownArrow}>▼</span>
              </a>
              <a href="#" className={styles.navLink}>Enterprise</a>
              <a href="#" className={styles.navLink}>AI</a>
              <a href="#" className={styles.navLink}>
                Developer <span className={styles.dropdownArrow}>▼</span>
              </a>
              <a href="#" className={styles.navLink}>
                Resources <span className={styles.dropdownArrow}>▼</span>
              </a>
              <a href="#" className={styles.navLink}>Pricing</a>
            </nav>
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

            {/* Right Side - Scheduling Widget */}
            <div className={styles.schedulingWidget}>
              <div className={styles.widgetContent}>
                <div className={styles.profileSection}>
                  <div className={styles.profilePicture}>
                    <div className={styles.avatar}>CV</div>
                  </div>
                  <div className={styles.profileName}>Cédric van Ravesteijn</div>
                </div>
                <h2 className={styles.meetingTitle}>Partnerships Meeting</h2>
                <p className={styles.meetingDescription}>
                  Are you an agency, influencer, SaaS founder, or business looking to collaborate? Let&apos;s chat!
                </p>
                <div className={styles.meetingOptions}>
                  <div className={styles.durationOptions}>
                    <button className={`${styles.durationBtn} ${styles.active}`}>15m</button>
                    <button className={styles.durationBtn}>30m</button>
                    <button className={styles.durationBtn}>45m</button>
                    <button className={styles.durationBtn}>1h</button>
                  </div>
                  <div className={styles.meetingDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.icon}>📹</span>
                      <span>Video Call</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.icon}>🌐</span>
                      <span>Europe/Amsterdam <span className={styles.dropdownArrow}>▼</span></span>
                    </div>
                  </div>
                </div>
                <div className={styles.calendarSection}>
                  <div className={styles.calendarHeader}>May 2025</div>
                  <div className={styles.calendarGrid}>
                    <div className={styles.calendarWeekdays}>
                      <div>SUN</div>
                      <div>MON</div>
                      <div>TUE</div>
                      <div>WED</div>
                      <div>THU</div>
                      <div>FRI</div>
                      <div>SAT</div>
                    </div>
                    <div className={styles.calendarDays}>
                      <div className={styles.day}></div>
                      <div className={styles.day}></div>
                      <div className={styles.day}>1</div>
                      <div className={styles.day}>2</div>
                      <div className={styles.day}>3</div>
                      <div className={styles.day}>4</div>
                      <div className={styles.day}>5</div>
                      <div className={styles.day}>6</div>
                      <div className={styles.day}>7</div>
                      <div className={styles.day}>8</div>
                      <div className={styles.day}>9</div>
                      <div className={styles.day}>10</div>
                      <div className={styles.day}>11</div>
                      <div className={styles.day}>12</div>
                      <div className={styles.day}>13</div>
                      <div className={styles.day}>14</div>
                      <div className={`${styles.day} ${styles.available}`}>15</div>
                      <div className={`${styles.day} ${styles.available}`}>16</div>
                      <div className={styles.day}>17</div>
                      <div className={styles.day}>18</div>
                      <div className={`${styles.day} ${styles.available}`}>19</div>
                      <div className={`${styles.day} ${styles.available}`}>20</div>
                      <div className={`${styles.day} ${styles.available}`}>21</div>
                      <div className={`${styles.day} ${styles.available}`}>22</div>
                      <div className={`${styles.day} ${styles.available}`}>23</div>
                      <div className={styles.day}>24</div>
                      <div className={styles.day}>25</div>
                      <div className={`${styles.day} ${styles.available}`}>26</div>
                      <div className={`${styles.day} ${styles.available}`}>27</div>
                      <div className={`${styles.day} ${styles.available}`}>28</div>
                      <div className={`${styles.day} ${styles.available}`}>29</div>
                      <div className={`${styles.day} ${styles.available}`}>30</div>
                      <div className={styles.day}>31</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Social Proof Section */}
      <footer className={styles.socialProof}>
        <div className={styles.container}>
          <div className={styles.ratings}>
            <div className={styles.ratingItem}>
              <div className={styles.stars}>
                <span className={`${styles.star} ${styles.filled}`}>★</span>
                <span className={`${styles.star} ${styles.filled}`}>★</span>
                <span className={`${styles.star} ${styles.filled}`}>★</span>
                <span className={`${styles.star} ${styles.filled}`}>★</span>
                <span className={`${styles.star} ${styles.filled}`}>★</span>
              </div>
              <div className={styles.ratingLogo}>Trustpilot</div>
            </div>
            <div className={styles.ratingItem}>
              <div className={styles.stars}>
                <span className={`${styles.star} ${styles.filled} ${styles.orange}`}>★</span>
                <span className={`${styles.star} ${styles.filled} ${styles.orange}`}>★</span>
                <span className={`${styles.star} ${styles.filled} ${styles.orange}`}>★</span>
                <span className={`${styles.star} ${styles.filled} ${styles.orange}`}>★</span>
                <span className={styles.star}>★</span>
              </div>
              <div className={`${styles.ratingLogo} ${styles.red}`}>P</div>
            </div>
            <div className={styles.ratingItem}>
              <div className={styles.stars}>
                <span className={`${styles.star} ${styles.filled} ${styles.red}`}>★</span>
                <span className={`${styles.star} ${styles.filled} ${styles.red}`}>★</span>
                <span className={`${styles.star} ${styles.filled} ${styles.red}`}>★</span>
                <span className={`${styles.star} ${styles.filled} ${styles.red}`}>★</span>
                <span className={styles.star}>★</span>
              </div>
              <div className={`${styles.ratingLogo} ${styles.red}`}>G</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

