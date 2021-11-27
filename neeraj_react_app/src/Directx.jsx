import React, { useState, useEffect } from 'react';
import directx_image from './assets/directx-11-logo.png'

const Directx = () => {
    const [articles, setArticles] = useState([]);

    const getArticleData = async () => {
        try {
            const res = await fetch(
                `https://newsapi.org/v2/everything?q=apple&from=2021-11-27&sortBy=popularity&apiKey=18bdc26a070b43c5b1ae20098ce56099`
            )

            const data = await res.json();
            console.log(new Date(), "Article data:", data.articles.map(article => article.title));
            setArticles(data.articles.slice(0, 5).map(article => article.title));
        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getArticleData();
        const interval = setInterval(() => {
            getArticleData();
        }, 5000);
        return () => clearInterval(interval);
    }, [])

    return (
        <div>
            <h1 className="header" style={{ color: "red" }}>The Ultra corporation</h1>
            <div className="container_directx">
                <main id="five_directx"><img src={directx_image} alt="DirectX11 logo"
                    style={{ maxWidth: "150px", height: "auto" }} /><br /><br /><br />

                    <h1 style={{ color: "white" }}>Directx</h1>
                    <p>December 25 2002</p>
                    <p>Microsoft DirectX is a collection of application
                        programming interfaces for handling tasks related to multimedia, especially game programming and video, on
                        Microsoft platforms. Originally, the names of these APIs all began with "Direct", such as Direct3D,
                        DirectDraw, DirectMusic, DirectPlay, DirectSound, and so forth.</p>
                </main>
                <nav style={{ border: "none", color: 'green', backgroundColor: 'black' }}>
                    <h2 style={{ color: "white" }}>News Headlines</h2>
                    <ul style={{ paddingInlineStart: "0" }}>
                        {articles.map(art => <li style={{ listStyle: 'none', margin: '10px auto' }}>{art}</li>)}
                    </ul>
                </nav>
            </div>
            <div className="footer">
                <p>copyright &copy; HelloWorld.com</p>
            </div>
        </div>
    )
}

export default Directx;
