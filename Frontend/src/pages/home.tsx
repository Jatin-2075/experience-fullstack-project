import React, { useEffect, useState } from "react";
import './css/home.css';
import image from "./images/attachment.png";

const Home = () => {
    const [res, setRes] = useState<any[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/experience")
            .then((res) => res.json())
            .then((data) => setRes(data))
            .catch((err) => console.log(err));
    }, []);

    const filteredData = res.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="home-container">
            <div className="search-bar">
                <img src={image} alt="logo" />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search experiences"
                />
                <button>Search</button>
            </div>

            <div className="card-grid">
                {filteredData.map((item, i) => (
                    <div key={i} className="card">
                        <img src={item.image_url} alt={item.title} />
                        <div className="card-content">
                            <div className="card-header">
                                <h3>{item.title}</h3>
                                <span>{item.location}</span>
                            </div>
                            <p>{item.description}</p>
                            <div className="card-footer">
                                <span>₹{item.price_start}</span>
                                <button>View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
