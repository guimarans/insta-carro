import { Link } from "react-router-dom";
import "./Thumbnails.scss";
import classNames from "classnames";

interface thumbProps {
  format: "horizontal" | "vertical" | "circle";
  id: string;
  image?: string;
  name?: any;
  description?: String;
  date?: String;
  nPage?: String;
}

export default function Thumbnail({
  format,
  id,
  image,
  name,
  description,
  date,
  nPage,
}: thumbProps) {
  return (
    <Link to="/about" key={id} className={classNames("thumbnail", `${format}`)}>
      <div className="thumbnail__container">
        <picture className="thumbnail__picture">
          <img src={image} alt={name} title={name} />
        </picture>
        <div className="thumbnail__body">
          <h3 className="thumbnail__title">{name}</h3>
          {format === "horizontal" && (
            <p className="thumbnail__info">
              {date} <span className="thumbnail__page_icon"> {nPage} </span>
            </p>
          )}
          <p className="thumbnail__text">{description}</p>
        </div>
      </div>
    </Link>
  );
}
