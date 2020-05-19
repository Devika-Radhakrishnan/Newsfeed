import React, { useState, useEffect } from 'react';
import PostContent from './PostContent';
import axios from 'axios';

function PageContent() {
  let [dataFromJSON, setDataFromJSON] = useState();
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=9429ae74542a401197284e80a483e9f9'
      )
      .then((res) => {
        setDataFromJSON(res);
        setIsLoading(false);
      });
  }, []);

  if (dataFromJSON)
    if (isLoading) {
      // console.log(dataFromJSON.data.articles.slice[30], 'checkthis');

      return <h1 style={{ paddingTop: '100px' }}>Post Is Loading</h1>;
    } else {
      return (
        <React.Fragment>
          {dataFromJSON.data.articles.map((item) => {
            return (
              <PostContent
                cardAuthor={item.author}
                cardTitle={item.title}
                descr={item.description}
                publishDate={item.publishedAt}
                imageUrl={item.urlToImage}
                urlLink={item.Url}
              />
            );
          })}
        </React.Fragment>
      );
    }
  else {
    return <p>gfg</p>;
  }
}

export default PageContent;
