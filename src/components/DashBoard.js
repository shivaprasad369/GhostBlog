import classes from "./DashBoard.module.css";
export default function DashBoard(props) {
  const postss = props.data.filter((data) => {
    return data.authors[0].meta_discription !== null;
  });

  console.log(postss);

  const pages = props.data.length / 15;
  const noOfAuthors = props.data.filter((data) => {
    return data.authors[0].name !== "";
  });
  const noOfTags = props.data.filter((data) => {
    return data.tags[0] !== null;
  });
  var latestPosts = [];

  const latestPost = () => {
    for (let index = 0; index < 5; index++) {
      latestPosts.push(props.data[index]);
    }
    console.log(latestPosts);
  };

  console.log(latestPosts);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Dashboard</h1>
      <div className={classes.cards}>
        <div className={classes.card}>
          <h1>{props.data.length}</h1>
          <p>Number of posts</p>
        </div>
        <div className={classes.card}>
          <h1>{pages}</h1>
          <p>Number of pages</p>
        </div>
        <div className={classes.card}>
          <h1>{noOfAuthors.length}</h1>
          <p>Number of Authors</p>
        </div>
        <div className={classes.card}>
          <h1>{noOfTags.length}</h1>
          <p>Number of Tags</p>
        </div>
      </div>
      <div className={classes.posts}>
        <h1>Latest posts</h1>

        <ul>
          {props.data.map((data) => {
            return (
              <li key={data.id}>
                <p>{data.title}</p>
                <p>{data.published_at}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
