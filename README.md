<img src="images/Screen%20Shot%202019-12-01%20at%208.18.53%20PM.png" >

TwixterTube is a clone of the popular streaming site known as YouTube made with Ruby on Rails, PostgreSQL, React, Redux, CSS, Webpack, AWS, and Heroku. Users can watch videos, search for videos, and create accounts to upload and delete videos.

![loggin_pulp](https://user-images.githubusercontent.com/52110753/71785727-e83c2d80-2fb7-11ea-90d6-04d7aafa8d26.gif)

<p> 
  <a href="https://twixtertube.herokuapp.com/#/" target="_blank" >Check out the Live Site Here!</a>
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
  <li>Users can use the search bar at the top of the screen to filter all of the videos by their title or description.</li>
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

<h2>Code Snippets</h2>

<p>Employed Active Record comparison methods in Video's controller to render relevant videos for search functionality from index action. Also serves first 20 videos in Postgress Database if no query is detected, used for index page. </p>

```
def index(query = '')
        query = params['query'] || ''

        if query == ''
            @videos = Video.first(20)
        else
            query = "%" + query.downcase + "%"
            @videos = Video.where('lower(title) like ? or lower(description) like ?', query, query);
        end

        render :index
end
```

<p>Utilized React Hooks for construction of later components such as the Comments, Modals and sidebar components. Below deomnstrates the first few lines of the CommentIndexItem, a single comment and how the props and state do not utilize "this" and can have the syntax of a functional component. The second input for the useEffect function simulates componentDidMount, so that I can properly set specific jsx variables to be used in the html portion of the component.</p>

```
const CommentIndexItem = props => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [numberLikes, setNumberLikes] = useState(props.comment.likes);
  const [numberDislikes, setNumberDislikes] = useState(props.comment.dislikes);
  const [likeId, setLikeId] = useState(props.comment.like_id);

  useEffect(() => {
    // like_id is only present for users who are logged in and if the comment has a like
    // associated with the currentUser
    if (!!likeId) {
      if (props.comment.liked === true) {
        setLike(true);
      } else if (props.comment.liked === false) {
        setDislike(true);
      }
    }

    setNumberLikes(props.comment.likes);
    setNumberDislikes(props.comment.dislikes);
  }, []);
```

<p>Blob table created for AWS S3 video and image uploading.</p>

```
class CreateActiveStorageTables < ActiveRecord::Migration[5.2]
  def change
    create_table :active_storage_blobs do |t|
      t.string   :key,        null: false
      t.string   :filename,   null: false
      t.string   :content_type
      t.text     :metadata
      t.bigint   :byte_size,  null: false
      t.string   :checksum,   null: false
      t.datetime :created_at, null: false

      t.index [ :key ], unique: true
    end

    create_table :active_storage_attachments do |t|
      t.string     :name,     null: false
      t.references :record,   null: false, polymorphic: true, index: false
      t.references :blob,     null: false

      t.datetime :created_at, null: false

      t.index [ :record_type, :record_id, :name, :blob_id ], name: "index_active_storage_attachments_uniqueness", unique: true
      t.foreign_key :active_storage_blobs, column: :blob_id
    end
  end
end
```

<h2>Potential Future Features</h2>
<ul>
  <li>Channels</li>
  <li>Subscriptions</li>
</ul>
