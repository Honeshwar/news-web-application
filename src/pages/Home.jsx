import { useState } from "react";
import NewsCard from "../components/NewsCard";

export default function Home() {
  const news = [
    {
      title: "title 1",
      description:
        "description 1 36re0v1 4tfht4hfv4thfvtf ftyfh4tfh 4tf4f4y 64f64yf 64f7t",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbOv-GM-P2Leun5S_6scfxcU7t3yjOT68Cg&usqp=CAU",
    },
    {
      title: "title 2",
      description: "description 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbOv-GM-P2Leun5S_6scfxcU7t3yjOT68Cg&usqp=CAU",
    },
    {
      title: "title 1",
      description:
        "description 1 36re0v1 4tfht4hfv4thfvtf ftyfh4tfh 4tf4f4y 64f64yf 64f7t",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbOv-GM-P2Leun5S_6scfxcU7t3yjOT68Cg&usqp=CAU",
    },
    {
      title: "title 2",
      description: "description 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbOv-GM-P2Leun5S_6scfxcU7t3yjOT68Cg&usqp=CAU",
    },
    {
      title: "title 1",
      description:
        "description 1 36re0v1 4tfht4hfv4thfvtf ftyfh4tfh 4tf4f4y 64f64yf 64f7t",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbOv-GM-P2Leun5S_6scfxcU7t3yjOT68Cg&usqp=CAU",
    },
    {
      title: "title 2",
      description: "description 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbOv-GM-P2Leun5S_6scfxcU7t3yjOT68Cg&usqp=CAU",
    },
    {
      title: "title 1",
      description:
        "description 1 36re0v1 4tfht4hfv4thfvtf ftyfh4tfh 4tf4f4y 64f64yf 64f7t",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbOv-GM-P2Leun5S_6scfxcU7t3yjOT68Cg&usqp=CAU",
    },
    {
      title: "title 2",
      description: "description 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbOv-GM-P2Leun5S_6scfxcU7t3yjOT68Cg&usqp=CAU",
    },
    {
      title: "title 1",
      description:
        "description 1 36re0v1 4tfht4hfv4thfvtf ftyfh4tfh 4tf4f4y 64f64yf 64f7t",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbOv-GM-P2Leun5S_6scfxcU7t3yjOT68Cg&usqp=CAU",
    },
    {
      title: "title 2",
      description: "description 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbOv-GM-P2Leun5S_6scfxcU7t3yjOT68Cg&usqp=CAU",
    },
    {
      title: "title 1",
      description:
        "description 1 36re0v1 4tfht4hfv4thfvtf ftyfh4tfh 4tf4f4y 64f64yf 64f7t",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbOv-GM-P2Leun5S_6scfxcU7t3yjOT68Cg&usqp=CAU",
    },
    {
      title: "title 2",
      description: "description 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbOv-GM-P2Leun5S_6scfxcU7t3yjOT68Cg&usqp=CAU",
    },
    {
      title: "title 1",
      description:
        "description 1 36re0v1 4tfht4hfv4thfvtf ftyfh4tfh 4tf4f4y 64f64yf 64f7t",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbOv-GM-P2Leun5S_6scfxcU7t3yjOT68Cg&usqp=CAU",
    },
    {
      title: "title 2",
      description: "description 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbOv-GM-P2Leun5S_6scfxcU7t3yjOT68Cg&usqp=CAU",
    },
  ];

  const [view, setView] = useState("grid");
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
          {news.map((news, index) => {
            return <NewsCard news={news} key={index} />;
          })}
        </div>
      ) : (
        <div className={"list-view"}>
          {news.map((news, index) => {
            return (
              <div className="card mb-3" style={{ maxWidth: " 540px;" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={news.image}
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
