import React from "react";
import classes from "./Posts.module.css";
export default function Posts(props) {
  const postsWithoutMetaTitle = props.data.filter((data) => {
    return data.authors[0].meta_description === null;
  });
  const postsWithLongMetaTitle = props.data.filter((data) => {
    return data.authors[0].meta_description !== null;
  });
  const postsWithLongUrl = props.data.filter((data) => {
    return data.url.length >= 100;
  });
  const postsWithImage = props.data.filter((data) => {
    return data.url.feature_image !== null;
  });

  const postsWithShort = props.data.filter((data) => {
    return data.html.trim().length > 251;
  });
  const postsWithShorts = props.data.filter((data) => {
    return data.html.trim().length <1500;
  });
  console.log(postsWithShort);
  //console.log(props.data[0].html.length)

  return (
    <>
    <h1 style={{textAlign:'center'}}>Posts</h1>
      <div className={classes.cards}>
        <div className={classes.card} >
          <h3>Posts without meta description</h3>
          {postsWithoutMetaTitle.length > 0
            ? postsWithoutMetaTitle.map((data) => {
                return (
                  <ul>
                    <li key={data.id}>
                      <p>{data.title}</p>
                      <p style={{ cursor: "pointer" }}>
                        Author Name : - {data.authors[0].name}
                      </p>
                    </li>
                  </ul>
                );
              })
            : "There is no data found!.."}
        </div>
        <div style={{ display: "inline-block" }}>
          <div className={classes.card}>
            <h3>Too long Meta Description</h3>
            {postsWithLongMetaTitle.length > 0 ? (
              postsWithLongMetaTitle.map((data) => {
                return (
                  <ul>
                    <li key={data.id}>
                      <p>{data.title ? data.title : "There is No Data"}</p>
                      <p style={{ cursor: "pointer" }}>
                        Author Name : -{" "}
                        {data.authors[0].name
                          ? data.authors[0].name
                          : "No Data Present"}
                      </p>
                    </li>
                  </ul>
                );
              })
            ) : (
              <h3>There is no data found!...</h3>
            )}
          </div>
          <div className={classes.cards}>
            <div className={classes.card}>
              <h3>Too long URL, more than 100 chars</h3>
              {postsWithLongUrl.length > 0 ? (
                postsWithLongMetaTitle.map((data) => {
                  return (
                    <ul>
                      <li key={data.id}>
                        <p>{data.title ? data.title : "There is No Data"}</p>
                        <p style={{ cursor: "pointer" }}>
                          Author Name : -{" "}
                          {data.authors[0].name
                            ? data.authors[0].name
                            : "No Data Present"}
                        </p>
                      </li>
                    </ul>
                  );
                })
              ) : (
                <h3>There is no data found!...</h3>
              )}
            </div>
          </div>
          <div className={classes.cards}>
            <div
              className={classes.card}
              style={{ width: "fit-content", font: "10px" }}
            >
              <h3>List of Posts with Featured Image</h3>
              {postsWithImage.length > 0 ? (
                postsWithImage.map((data) => {
                  return (
                    <ul style={{ fontSize: "10px" }}>
                      <li key={data.id}>
                        <p>{data.title ? data.title : "There is No Data"}</p>
                        <p style={{ cursor: "pointer" }}>
                          feature_image : -{" "}
                          {data.feature_image
                            ? data.feature_image
                            : "No Data Present"}
                        </p>
                      </li>
                    </ul>
                  );
                })
              ) : (
                <h3>There is no data found!...</h3>
              )}
            </div>
          </div>
          <div className={classes.cards}>
            <div
              className={classes.card}
              style={{ width: "fit-content", font: "10px" }}
            >
              <h3>Too Long Posts, More than 1500 words</h3>
              {postsWithShort.length > 0 ? (
                postsWithShort.map((data) => {
                  return (
                    <ul style={{ fontSize: "10px" }}>
                      <li key={data.id}>
                        <p>{data.title ? data.title : "There is No Data"}</p>
                        <p style={{ cursor: "pointer" }}>
                         post length :- {data.html.length}
                        </p>
                      </li>
                    </ul>
                  );
                })
              ) : (
                <h3>There is no data found!...</h3>
              )}
            </div>
          </div>
          <div className={classes.cards}>
            <div
              className={classes.card}
              style={{ width: "fit-content", font: "10px" }}
            >
              <h3>Too Long Posts, More than 1500 words</h3>
              {postsWithShorts.length>0? (
                props.data.map((data) => {
                  return (
                    <ul style={{ fontSize: "10px" }}>
                      <li key={data.id}> 
                        <p>{data.title ? data.title : "There is No Data"}</p>
                        <p style={{ cursor: "pointer" }}>
                         post length :- {data.html.length}
                        </p>
                      </li>
                    </ul>
                  );
                })
              ) : (
                <h3>There is no data found!...</h3>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
