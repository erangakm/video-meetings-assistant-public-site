export default function Home() {
  return (
    <div className="container">
      <>
        <h1 className="jumbotron text-center py-3">Video Meetings Assistant</h1>
        <div className="row mb-3">
          <div className="col">
            <img
              className="border rounded center-block img-fluid"
              src="https://em-generic-uploads.s3.ap-southeast-2.amazonaws.com/video-meetings-assistant-extension/Screen%20Shot%202021-10-12%20at%2010.01.19%20pm.png"
            ></img>
          </div>
        </div>

        <p className="text-center">Being late to virtual meetings will be a thing in the past!</p>

        <p className="text-center">Welcome to Video Meetings Assistant. VMA will let you select any event with a Google Meet ot Zoom meeting to be scheduled so it will redirect you to the meeting at it's start time.</p>

        <p className="text-center">Login with Google Calendar, select event and go back to whatever you were focussing on before. VMA will let you know when it's will take you to the meeting. All you have to do is hit the join button.</p>

        <p className="text-center">
          Supercharge your productivity with Video Meetings Assistant.
        </p>
      </>
    </div>
  )
}
