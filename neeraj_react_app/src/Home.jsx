import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import vulkan_iamge from './assets/Vulkan_Logo.png'
import opengl_image from './assets/opengl_logo.png'
import webgl_image from './assets/WebGL_Logo.svg.png'
import metal_image from './assets/Apple_Metal.png'
import directx_image from './assets/directx-11-logo.png'

const Home = () => {
    const [articles, setArticles] = useState([]);

    const getArticleData = async () => {
        try {
            const res = await fetch(
                `https://newsapi.org/v2/everything?q=apple&from=2021-11-27&sortBy=popularity&apiKey=18bdc26a070b43c5b1ae20098ce56099`
            )

            const data = await res.json();
            console.log(new Date(), "Article data:", data.articles.map(article => article.title));
            setArticles(data.articles.map(article => article.title));
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

            <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gridGap: '2rem', width: '100%', border: 'none', margin:'20px auto'}}>
                <main className="container">
                    <div id="one"> <img src={vulkan_iamge} alt="VulkanLogo"
                        style={{ maxWidth: "150px", height: "auto" }} /><br /><br /><br />
                        <Link to="/vulkan">
                            <h1 style={{ color: "white" }}>Vulkan</h1>
                        </Link>
                        <p>December 25 2002</p>
                        <p>Vulkan is a low-overhead, cross-platform API,
                            open standard for 3D graphics and computing. Vulkan targets high-performance real-time 3D graphics
                            applications, such as video games and interactive media</p>
                    </div>
                    <div id="two"><img src={opengl_image} alt="openglLogo"
                        style={{ maxWidth: "150px", height: "auto" }} /><br /><br /><br />
                        <Link to="/opengl">
                            <h1 style={{ color: "white" }}>opengl</h1>
                        </Link>
                        <p>December 25 2002</p>
                        <p>OpenGL is a cross-language, cross-platform
                            application programming interface for rendering 2D and 3D vector graphics. The API is typically used to
                            interact with a graphics processing unit, to achieve hardware-accelerated rendering</p>
                    </div>
                    <div id="three"><img src={webgl_image} alt="WebglLogo"
                        style={{ maxWidth: "150px", height: "auto" }} /><br /><br /><br />
                        <Link to="/webgl">
                            <h1 style={{ color: "white" }}>webgl</h1>
                        </Link>
                        <p>December 25 2002</p>
                        <p>WebGL is a JavaScript API for rendering
                            interactive 2D and 3D graphics within any compatible web browser without the use of plug-ins. WebGL is fully
                            integrated with other web standards, allowing GPU-accelerated usage of physics and image processing and
                            effects as part of the web page canvas.</p></div>

                    <div id="four"><img src={metal_image} alt="metal logo"
                        style={{ maxWidth: "150px", height: "auto" }} /><br /><br /><br />
                        <Link to="/apple-metal">
                            <h1 style={{ color: "white" }}>metal</h1>
                        </Link>
                        <p>December 25 2002</p>
                        <p>Metal is a low-level, low-overhead
                            hardware-accelerated 3D graphic and compute shader API created by Apple. It debuted in iOS 8. Metal combines
                            functions similar to OpenGL and OpenCL in one API.</p></div>

                    <div id="five"><img src={directx_image} alt="DirectX11 logo"
                        style={{ maxWidth: "150px", height: "auto" }} /><br /><br /><br />
                        <Link to="/directx">
                            <h1 style={{ color: "white" }}>Directx</h1>
                        </Link>
                        <p>December 25 2002</p>
                        <p>Microsoft DirectX is a collection of application
                            programming interfaces for handling tasks related to multimedia, especially game programming and video, on
                            Microsoft platforms.</p>
                    </div>
                </main>
                <nav style={{border:"none", marginTop:"40px", color: 'green', backgroundColor: 'black'}}>
                    <h2 style={{color:"white"}}>News Headlines</h2>
                    <ul style={{ paddingInlineStart: "0"}}>
                        {articles.map(art => <li style={{listStyle:'none', margin:'10px auto'}}>{art}</li>)}
                    </ul>
                </nav>
            </div>
            <div className="footer">
                <p>copyright &copy; HelloWorld.com</p>
            </div>
        </div>
    )
}

export default Home;
