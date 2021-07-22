import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from '../NewsAPI/Card'

function News(props) {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const apiURL = 'http://www.rtve.es/api/noticias.json'
        axios.get(apiURL)
            .then(response => {
                setNews(response.data.page.items);
                console.log(response.data.page.items);
            })
            .catch(error => console.log(error))
    }, []);

    const renderNews = () => {
        if (news.length === 0) {
            return <h2>Cargando noticias...</h2>
        } else if (news.length > 0) {
            return (
                <>
                    <h2> Se encontraron {news.length} noticias </h2>
                    <div>
                        {
                            news.map(noticia => {
                                return <Card title={noticia.title} desc={noticia.longTitle} img={noticia.image} />
                            })
                        }
                    </div>
                </>
            );
        }
    }

    return (
        <>
            {
                renderNews()
            }
        </>
    )
}

export default News
