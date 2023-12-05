import { useState } from "react";
import NewsCard from "../components/NewsCard";

export default function Favorites() {
  const [view, setView] = useState("grid");
  const favorites = [
    {
      id: 1,
      title: "Card title",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title: "Card title",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      title: "Card title",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: "https://picsum.photos/200/300",
    },
  ];
  return (
    <div>
      <div className="toggle-view">
        <img
          src="https://cdn-icons-png.flaticon.com/128/11830/11830729.png"
          alt="List View"
          className={view === "list" && "active"}
          onClick={() => setView("list")}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/7114/7114796.png"
          alt="Grid View"
          className={view === "grid" ? "active" : ""}
          onClick={() => setView("grid")}
        />
      </div>
      {view === "grid" ? (
        <div className={"grid-view"}>
          {favorites.map((news, index) => {
            return <NewsCard news={news} key={index} />;
          })}
        </div>
      ) : (
        <div className={"list-view"}>
          {favorites.map((favorites, index) => {
            return (
              <div className="card mb-3" style={{ maxWidth: " 540px;" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={favorites.image}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
