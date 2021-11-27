import React, { useState, useEffect } from 'react';
import vulkan_iamge from './assets/Vulkan_Logo.png'

const Vulkan = () => {
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
            <div className="container_vulkan">
                <main id="one_vulkan"> <img src={vulkan_iamge} alt="VulkanLogo"
                    style={{ maxWidth: "150px", height: "auto" }} /><br /><br /><br />

                    <h1 style={{ color: "white" }}>Vulkan</h1>

                    <p>December 25 2002</p>
                    <p>Vulkan is a low-overhead, cross-platform API,
                        open standard for 3D graphics and computing. Vulkan targets high-performance real-time 3D graphics
                        applications, such as video games and interactive media</p>
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

export default Vulkan
