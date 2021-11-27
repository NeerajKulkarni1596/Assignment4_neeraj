import React, {useState, useEffect} from 'react';
import opengl_image from './assets/opengl_logo.png'

const Opengl = () => {
    const [articles, setArticles] = useState([]);

    const getArticleData = async () => {
        try {
            const res = await fetch(
                `https://newsapi.org/v2/everything?q=apple&from=2021-11-27&sortBy=popularity&apiKey=18bdc26a070b43c5b1ae20098ce56099`
            )

            const data = await res.json();
            console.log(new Date(), "Article data:", data.articles.map(article => article.title));
            setArticles(data.articles.slice(0,5).map(article => article.title));
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
        <div className="container_opengl">
            <main id="two_opengl"><img src={opengl_image} alt="openglLogo"
                style={{ maxWidth: "150px", height: "auto" }} /><br /><br /><br />
                <h1 style={{ color: "white" }}>opengl</h1>
                <p>December 25 2002</p>
                <p>OpenGL is a cross-language, cross-platform
                    application programming interface for rendering 2D and 3D vector graphics. The API is typically used to
                    interact with a graphics processing unit, to achieve hardware-accelerated rendering.<br/>
                    Silicon Graphics, Inc. (SGI) began developing OpenGL in 1991 and released it on June 30, 1992; applications use it extensively in the fields of computer-aided design (CAD), virtual reality, scientific visualization, information visualization, flight simulation, and video games. Since 2006, OpenGL has been managed by the non-profit technology consortium Khronos Group.</p>
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

export default Opengl;
