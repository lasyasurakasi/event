import Link from 'next/link'
import styles from './page.module.css'

export default function SignUp() {
  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <Link href="/" className={styles.logo}>Cal.com</Link>
            <nav className={styles.nav}>
              <a href="#" className={styles.navLink}>
                Solutions <span className={styles.dropdownArrow}>▼</span>
              </a>
              <a href="#" className={styles.navLink}>Enterprise</a>
              <a href="#" className={styles.navLink}>Cal.ai</a>
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
          <div className={styles.authContainer}>
            <div className={styles.authCard}>
              <h1 className={styles.authTitle}>Create your account</h1>
              <p className={styles.authSubtitle}>
                Get started with Cal.com today
              </p>

              <div className={styles.authForm}>
                <button className={styles.btnGoogle}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                    <path d="M9 18c2.43 0 4.467-.806 5.965-2.184l-2.908-2.258c-.806.54-1.837.86-3.057.86-2.351 0-4.341-1.588-5.057-3.723H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
                    <path d="M3.943 10.695c-.18-.54-.282-1.117-.282-1.695s.102-1.155.282-1.695V4.973H.957C.348 6.175 0 7.55 0 9s.348 2.825.957 4.027l2.986-2.332z" fill="#FBBC05"/>
                    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.973L3.943 7.305C4.659 5.17 6.649 3.58 9 3.58z" fill="#EA4335"/>
                  </svg>
                  Sign up with Google
                </button>

                <div className={styles.divider}>
                  <span>or</span>
                </div>

                <form className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Full name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={styles.input}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={styles.input}
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.label}>
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className={styles.input}
                      placeholder="••••••••"
                      required
                      minLength={8}
                    />
                    <p className={styles.helpText}>
                      Must be at least 8 characters
                    </p>
                  </div>

                  <div className={styles.checkboxGroup}>
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      className={styles.checkbox}
                      required
                    />
                    <label htmlFor="terms" className={styles.checkboxLabel}>
                      I agree to the{' '}
                      <a href="#" className={styles.link}>
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className={styles.link}>
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <button type="submit" className={styles.btnSubmit}>
                    Create account
                  </button>
                </form>

                <p className={styles.noCredit}>
                  No credit card required
                </p>

                <div className={styles.authFooter}>
                  <span>Already have an account?</span>
                  <Link href="/sign-in" className={styles.authLink}>
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

