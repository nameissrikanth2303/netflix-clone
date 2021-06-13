import React from "react";
import Row from "./Row";
import "./App.css";
import "./Nav.css";
import request from "./request";
import Banner from "./Banner";
import Nav from "./Nav";



function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row fetchUrl={request.fetchNetflixOriginals} title="Netflix" islarge />
      <Row fetchUrl={request.fetchTrending} title="Trending Now" />
      <Row fetchUrl={request.fetchActionMovies} title="Action Movies" />
      <Row fetchUrl={request.fetchComedyMovies} title="Comedy Movies" />
      <Row fetchUrl={request.fetchHorrorMovies} title="Horror Movies" />
      <Row fetchUrl={request.fetchRomanceMovies} title="Romance Movies" />
      <Row fetchUrl={request.fetchTopRated} title="Top Rated" />
      <Row fetchUrl={request.fetchDocumentaries} title="Documentaries" />
  
    </div>
  );
}

export default App;
