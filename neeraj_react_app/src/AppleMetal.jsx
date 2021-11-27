import React, { useState, useEffect } from 'react';
import metal_image from './assets/Apple_Metal.png'
const AppleMetal = () => {
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
        <div className="container_metal">
            <main id="four_metal"><img src={metal_image} alt="metal logo"
                style={{ maxWidth: "150px", height: "auto" }} /><br /><br /><br />
                
                    <h1 style={{ color: "white" }}>metal</h1>

                <p>December 25 2002</p>
                <p>Metal is a low-level, low-overhead
                    hardware-accelerated 3D graphic and compute shader API created by Apple. It debuted in iOS 8. Metal combines
                    functions similar to OpenGL and OpenCL in one API. It is intended to improve performance by offering
                    low-level access to the GPU hardware for apps on iOS, iPadOS, macOS, and tvOS. It can be compared to
                    low-level APIs on other platforms such as Vulkan and DirectX 12.</p>
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

export default AppleMetal
