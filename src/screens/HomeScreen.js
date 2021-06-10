import React from 'react'
import requests from '../Request'
import '../styles/HomeScreen.css'
import Banner from './Banner'
import Nav from './Nav'
import Row from './Rows'

function HomeScreen() {
    return (
        <div className="homescreen">
           <Nav />
            <Banner />
            <Row title="NetFlix Originals"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow

            />
            <Row title="Trending Now"
            fetchUrl={requests.fetchTrending}
            

            />
            <Row title="Top Rated"
            fetchUrl={requests.fetchTopRated}
            

            />
           <Row title="Comedy Movies"
            fetchUrl={requests.fetchComedyMovies}
            

            />
            <Row title="Romance Movies"
             fetchUrl={requests.fetchRomanceMovies}

            />
             <Row title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}

            />


        </div>
    )
}

export default HomeScreen
