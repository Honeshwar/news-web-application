import { Link } from "react-router-dom";

export default function NewsCard({ news }) {
  return (
    <Link
      to={`/details/${news.id}`}
      className="news-card"
      style={{ marginBottom: "20px" }}
    >
      <div className="card bg-dark text-white">
        <img
          src={news.image}
          className="card-img"
          alt={news.title}
          style={{
            filter: "brightness(50%)",
            height: "400px",
            objectFit: "cover",
          }}
        />
        <div className="card-img-overlay">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description}.</p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </Link>
  );
}
