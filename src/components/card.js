import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Moment from "react-moment";

const Card = ({ article }) => {
  return (
        <Link className="card-link" to={`/article/${article.node.slug}`}>
        <div className="card-image">
          <div className="image" style={{backgroundImage: `url(${article.node.image.childImageSharp.fixed.src})`}}>
          </div>
          {/* <Img
            fixed={article.node.image.childImageSharp.fixed}
            imgStyle={{ position: "static" }}
          /> */}
        </div>
        <div className="card-gradient">
        <div className="card-description">
          <div>
          <div className="card-category">
            {article.node.category.name}
          </div>
          <div className="card-title">
            {article.node.title}
          </div>
          </div>
          <Moment className="card-time" format="YYYY 年 M 月 D 日">{article.published_at}</Moment>
        </div>
        </div>
        </Link>
  );
};

export default Card;