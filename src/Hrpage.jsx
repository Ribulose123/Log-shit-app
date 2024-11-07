 import React from 'react'


const Hrpage = () => {

  return (
    <div className="p-8 bg-gray-50 text-gray-800 dark:bg-black dark:text-white">
      
    {/* Welcome and Onboarding Section */}
    <section className="my-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to Swif Portal!</h1>
      <p className="mb-6">
        “Your portal for logging shifts, tracking work hours, and requesting overtime. Easily sign in when your shift begins and sign out when your workday ends. Monitor your progress, view past logs, and stay updated with real-time notifications on approvals.”
      </p>
      <img src="img/team.avif" alt="Employees logging in on devices" className="rounded-lg shadow-md w-full max-w-lg mx-auto" />
    </section>
    
    {/* Shift Logging Section */}
    <section className="my-10">
      <h2 className="text-2xl font-semibold mb-3">Shift Logging</h2>
      <p className="mb-4">
        “Start your day with a single click! When you arrive at the workplace or log in remotely, sign in to begin tracking your work hours. Our app uses location services and connected networks for a smooth and accurate logging process.”
      </p>
      <img src="img/closeup-clock_1339-6374.avif" alt="Mobile device logging" className="rounded-lg shadow-md w-full max-w-lg mx-auto" />
    </section>
    
    {/* Overtime Requests Section */}
    <section className="my-10">
      <h2 className="text-2xl font-semibold mb-3">Overtime Requests</h2>
      <p className="mb-4">
        “Need extra hours? Submit an overtime request straight from your portal. Track request status, get notifications on approvals, and view all overtime hours worked. Stay in control of your schedule with easy access.”
      </p>
      <img src="img/overtime.avif" alt="Overtime request form" className="rounded-lg shadow-md w-full max-w-lg mx-auto" />
    </section>

    {/* Real-Time Notifications Section */}
    <section className="my-10">
      <h2 className="text-2xl font-semibold mb-3">Real-Time Notifications</h2>
      <p className="mb-4">
        “Stay updated with real-time alerts! Whether it’s a shift log reminder, an overtime request update, or an important company announcement, receive notifications directly in your portal so you never miss a beat.”
      </p>
      <img src="/img/notifiation.avif" alt="Notification icons" className="rounded-lg shadow-md w-full max-w-lg mx-auto" />
    </section>

    {/* Shift Summary and Analytics Section */}
    <section className="my-10">
      <h2 className="text-2xl font-semibold mb-3">Shift Summary and Analytics</h2>
      <p className="mb-4">
        “Get insights into your work history! The summary page offers analytics on shift hours, total time logged, overtime worked, and performance statistics. Monitor productivity and access past records with ease.”
      </p>
      <img src="/img/chart.avif" alt="Dashboard analytics" className="rounded-lg shadow-md w-full max-w-lg mx-auto" />
    </section>

    {/* Team Communication Section */}
    <section className="my-10">
      <h2 className="text-2xl font-semibold mb-3">Team Communication</h2>
      <p className="mb-4">
        “Connect with your team and supervisors through your logging portal. View announcements, request feedback, and stay in sync with your department’s latest updates.”
      </p>
      <img src="/img/em3.avif" alt="Team communication icons" className="rounded-lg shadow-md w-full max-w-lg mx-auto" />
    </section>
  </div>
  )
}

export default Hrpage
