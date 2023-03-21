import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getAll = () => {
      fetch("./interns collection.postman_collection.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (myJson) {
          console.log(myJson);
          setPost(myJson);
        });
    };
    getAll();
  }, []);

  return (
    <div className="App">
      {console.log(post)}
      <nav>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            News
            <select className="news">
              <option>All News</option>
              <option>Olympia Tour</option>
            </select>
          </li>
          <li>
            <a>Courses</a>
          </li>
          <li>
            <a>Ebooks</a>
          </li>
          <li>
            <a>ContactUs</a>
          </li>
        </ul>
      </nav>
      <header>
        <a href="#latest">Latest News</a>
        <a href="#about">About Us</a>
      </header>
      <main>
        <section id="latest">
          <h2>Latest News</h2>
          <ul>
            <li>
              {post.map((item, i) => (
                <p key={i}>{item.name}</p>
              ))}
            </li>
          </ul>
        </section>
        <section id="about">
          <h2>About Us</h2>
          <p>
            There are many variations of passag es of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
        </section>
      </main>
      <footer>
        <ul>
          <div>
            <li>
              <a>News</a>
            </li>
            <li>
              <a>Tour</a>
            </li>
            <li>
              <a>courses</a>
            </li>
            <li>
              <a>E-books</a>
            </li>
          </div>
          <div>
            <li>
              <a>terms</a>
            </li>
            <li>
              <a>privacy</a>
            </li>
            <li>
              <a>contact us</a>
            </li>
          </div>
        </ul>
      </footer>
    </div>
  );
}

export default App;
