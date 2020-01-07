<img src="images/Screen%20Shot%202019-12-01%20at%208.18.53%20PM.png" >

TwixterTube is a clone of the popular streaming site known as YouTube made with Ruby on Rails, PostgreSQL, React, Redux, CSS, Webpack, AWS, and Heroku. Users can watch videos, search for videos, and create accounts to upload and delete videos.

![twitertube_opening_720p](https://user-images.githubusercontent.com/52110753/71931059-cd9dbc00-3151-11ea-80c5-b51bdedd4720.gif)


<p>
  <a href="https://twixtertube.herokuapp.com/#/" target="_blank" >Check out the Live Site Here!</a>
</p>

<h2>Features</h2>

<h2>Video Upload</h2>

<p>Once logged in, users can click on the video icon located within the header, sidebar modal or modal appeared after clicking bars on top left corner. Users can select a video file to add by clicking on the field containing the video icon. Similarly, users can select an image file to use as a thumbnail for their video. Finally, they will need to input a title and description to enable the video to be uploaded. At this time, they just need to click on the 'Publish' button, after which, they will be sent to the home page and be able to see their video be added to the master list of videos. They will be met by the following page:</p>

![pulp_short_720p](https://user-images.githubusercontent.com/52110753/71927626-bc04e600-314a-11ea-9a5c-0a7bf9c127a4.gif)

<p>Below shows a snippet of code from the upload form react component showing the functions that handle the video file and thumbnail file, as well as how the form is packaged into a promise object and that the url will dynamically change upon receiving a successful payload of video data from the Rails backend.</p>

```
...

  handleVideoFile(e) {
    this.setState({ videoFile: e.currentTarget.files[0] });
  }

  handleThumbnailFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = e => {
      this.setState({ thumbnailFile: file, thumbnailUrl: fileReader.result });
    };
    fileReader.onload = e => {
      $("#thumbnail").attr("src", e.target.result);
    };

    this.state.uploadIconElement[0].style.fontSize = 0;
    this.state.thumbnailContainerElement[0].style.background = "black";
    this.state.thumbnailElement.style.display = "inherit";

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("video[title]", this.state.title);
    formData.append("video[description]", this.state.description);
    formData.append("video[vid]", this.state.videoFile);
    formData.append("video[thumbnail]", this.state.thumbnailFile);
    this.props.action(formData).then(response => {
      this.props.history.push(`/videos/${response.payload.video.id}`);
    });
  }
  
...
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

<h2>Upload</h2>

<p>Users, whether logged in or logged out, can search videos based on their title and/or description.</p>

![twixtertube_search_720p](https://user-images.githubusercontent.com/52110753/71928927-5ebe6400-314d-11ea-9435-85d52c0ed346.gif)

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

<h2>Likes and Comments</h2>

<p>Users, when logged in, can like/dislike videos as well as post comments and like/dislike comments of videos as well.</p>

![like_comment_twixtertube_720p](https://user-images.githubusercontent.com/52110753/71929938-8e6e6b80-314f-11ea-9405-b4a64fd74e8b.gif)

<p>Utilized React Hooks for construction of later components such as the Comments, Modals and sidebar components. Below deomnstrates the first few lines of the CommentIndexItem, a single comment, and how the props and state do not utilize "this" and can have the syntax of a functional component. The second input for the useEffect function simulates componentDidMount, so that I can properly set specific jsx variables to be used in the html portion of the component.</p>

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

<p>Code snippet of like function in CommentIndexItem component. Quite a bit of boolean logic to determine which button is selected, whether to change dislike to like, remove like if user already liked the video and clicked the like button, or to create a new like if like or dislike do not exist for the current user on the video / comment. Asychronous ajax calls interact with backend and upon successful change of data in Postgres Database, changes are reflected upon the Frontend React Components currently visiting.</p>

```
...

  function handleCommentLike() {
    if (!props.currentUser) {
      props.history.push("/login");
    } else {
      if (!!likeId) {
        if (props.comment.liked === false) {
          changeLike({
            id: likeId,
            liked: true,
            likeable_id: props.comment.id,
            likeable_type: "Comment"
          })
            .then(() => {
              setLike(true);
              setDislike(false);
              setNumberLikes(numberLikes + 1);
              setNumberDislikes(numberDislikes - 1);
            });
        } else {
          removeLike(likeId)
            .then(() => {
              setLike(false);
              setDislike(false);
              setNumberLikes(numberLikes - 1);
              setLikeId(null);
            });
        }
      } else {
        addLike({
          liked: true,
          likeable_id: props.comment.id,
          likeable_type: "Comment"
        })
          .then(likeData => {
            setLike(true);
            setDislike(false);
            setNumberLikes(numberLikes + 1);
            setLikeId(likeData.id);
          });
      }
    }
  }

...
```

<h2>Potential Future Features</h2>
<ul>
  <li>Channels</li>
  <li>Subscriptions</li>
</ul>
