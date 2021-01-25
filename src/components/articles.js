import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {
  const latestArticle = articles.slice(0,1);
  const mediumArticle = articles.slice(1,3);
  const smallArticle = articles.slice(3,9);
  const historyArticle = articles.slice(9);

  return (
    <ul className="section-list">
      {latestArticle.map((article, i) => {
              return (
                <li className="card-item has-background-white highlight">
                <Card
                  article={article}
                  key={`article__highlight__${article.node.slug}`}
                />
                </li>
              );
            })}
      {mediumArticle.map((article, i) => {
              return (
                <li className="card-item has-background-white medium">
                <Card
                  article={article}
                  key={`article__left__${article.node.slug}`}
                />
                </li>
              );
            })}
      {smallArticle.map((article, i) => {
              return (
                <li className="card-item has-background-white small">
                <Card
                  article={article}
                  key={`article__left__${article.node.slug}`}
                />
                </li>
              );
            })}
    </ul>
      // <div className="columns is-multiline is-mobile">
      //   <div className="column is-full">
      //     {latestArticle.map((article, i) => {
      //         return (
      //           <Card
      //             article={article}
      //             key={`article__left__${article.node.slug}`}
      //           />
      //         );
      //       })}
      //   </div>
      //     <div className="column is-half">
      //       {mediumArticle.map((article, i) => {
      //           return (
      //             <Card
      //               article={article}
      //               key={`article__left__${article.node.slug}`}
      //             />
      //           );
      //         })}
      //     </div>
      //     <div className="column is-one-third">
      //       {smallArticle.map((article, i) => {
      //           return (
      //             <Card
      //               article={article}
      //               key={`article__left__${article.node.slug}`}
      //             />
      //           );
      //         })}
      //     </div>
      // </div>
  );
};

export default Articles;