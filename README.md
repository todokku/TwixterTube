<img src="images/Screen%20Shot%202019-12-01%20at%208.18.53%20PM.png" >

ViewTube is a clone of the popular streaming site known as YouTube made with Ruby on Rails, PostgreSQL, React, Redux, CSS, Webpack, AWS, and Heroku. Users can watch videos, search for videos, and create accounts to upload and delete videos.

<a href="https://imgflip.com/gif/3l9mfg"><img src="https://i.imgflip.com/3l9mfg.gif" title="made at imgflip.com"/></a>

<p> 
  <a href="https://twixtertube.herokuapp.com/#/">Live App</a>
</p>

<h2>Features</h2>

<ul>
  <li>BCrypt encrypted user authentication from frontend to backend</li>
  <li>Logged in users can upload videos with a custom image (thumbnail) to serve as a preview.
    <ul>
      <li>Once uploaded, users can edit the title, description, and thumbnail of their videos.</li>
    </ul>
  </li>
  <li>Videos accumulate views each time it is watched in order to gauge popularity of a video.</li>
  <li>Videos will begin playing once they are loaded on the page and the next video will be switched to automatically when the current video ends.</li>
  <li>Logged in users can like or dislike a video only once.
    <ul>
      <li>Each video displays its accumulated likes and dislikes in order to measure its popularity.</li>
    </ul>
  </li>
  <li>Logged in users can also comment on a video.</li>
  <li>Users can use the search bar at the top of the screen to filter all of the videos by their title.</li>
  <li>Users have access to a nav bar that can assist them in navigating to key locations of the site.</li>
<!--   <li></li> -->
</ul>

<h2>Video Upload</h2>

<p>Once logged in, users can click on the video icon located within the header. They will be met by the following page:</p>

<p>
  <a>
    <img src="images/upload_form.png" >
  </a>
</p>

<p>Users can select a video file to add by clicking on the field containing the video icon. Similarly, users can select an image file to use as a thumbnail for their video. Finally, they will need to input a title and description to enable the video to be uploaded. At this time, they just need to click on the 'Publish' button, after which, they will be sent to the home page and be able to see their video be added to the master list of videos.
</p>
