export default function Privacy() {
  return (
    <div className="container">
      <h1 className="jumbotron py-3">Privacy Policy</h1>
      <p>
          We at Video Meetings Assistant (VMA) app know that you care about how your personal information is used and shared, and we take your privacy seriously.
          Our primary goal is to provide you with exceptional service (see the Terms of Use for a definition), and we understand that you
          may have questions or concerns regarding your personal information and how it will be used.
      </p>

      <h3 className="mt-4">Information We Collect</h3>
      <h5>Tokens</h5>
      <p>
          When a user logs in using the Google login flow, the extension securely receives an authorization code from Google. This code is then securely exchanged
          with an access token and a refresh token against another Google API.
      </p>

      <p>
          The access token and the refresh token are safely secured in Chrome local storage to faciliate any future login actions to Google calendar without having
          to log into Google again.
      </p>

      <h5>User email</h5>
      <p>
          User email is retrieved from Google APIs to display in the UI and to be stored in Chrome local storage to help identify which user the stored events are
          assiciated with.
      </p>

      <h5>Events data</h5>
      <p>
          VMA retrieves the user's events data from Google Calendar to display in the UI for further user interaction.
      </p>
      <p>
          When the user selects a particular event to be scheduled to be joined automatically, VMA will record a subset of Google events data inside Chrome local storage
          to keep track of what is scheduled and what is not.
      </p>

      <h3>Information deletion policy</h3>
      <p>
          Any information collected and stored by VMA (all listed above) will be discarded upon logging out of the extension. The option to log out is clearly displayed
          at the bottom of the UI for the convinience of the user.
      </p>

      <h3 className="mt-4">What information is shared</h3>
      <p>
          Absolutely no data is shared with external services. As mentioned above, some data retrieved by VMA may be securely stored internally but they are never
          shared with any external entity.
      </p>

      <h3>How to Contact Us</h3>

      <p>
          If you have questions or concerns regarding this privacy policy, or any feedback pertaining to your privacy and the Calendar privacy policy service that you
          would like us to consider, please email us at <img width="150px" src="https://em-generic-uploads.s3.ap-southeast-2.amazonaws.com/video-meetings-assistant-extension/email-screenshot.png"></img>
      </p>

    </div>
  )
}
