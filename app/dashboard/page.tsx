import React from 'react'

export default function Dashboardpage() {

  return (
    <div>
      Dashboardpage

      <form action="/api/auth/signout" method="post">
        <button className="button block" type="submit">
          Sign out
        </button>
      </form>

    </div>
  )
}