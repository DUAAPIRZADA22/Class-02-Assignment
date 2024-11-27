import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className="header">
      <h1>Tuition Free Education Program on Latest Technologies</h1>
      <div className="navbar-links">
      <Link href="/">Home</Link>
      <Link href="/apply">Apply</Link>
      <Link href="/jobs">Jobs</Link>
      <Link href="/result">Result</Link>
      <Link href="/courses">Courses</Link>
        </div>
    </div>
  )
}

export default Header