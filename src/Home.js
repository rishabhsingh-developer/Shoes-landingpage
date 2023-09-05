import logo2 from "../src/images/amazon.png"
import logo3 from "../src/images/flipkart.png"
import logo4 from "../src/images/shoe_image.png"
export const Home = () =>{
    return <div className="container">
        <div className="box">
        <div className="info">
            <div className="heading2">
               <h1>YOUR FEET DESERVE THE BEST</h1>
            </div>
        
            
            
        </div>
        <div className="productimg">
        <img className="img-shoes" src={logo4} alt="shoes img"/>
        </div>
        <div className="heading1">
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="btn">
            <button className="b">ShopNow</button>
            <button className="b1">ShopNow</button>
            </div>
            <div className="link">
                <p>Also Available on</p>
                <img src={logo3} alt="img"/>
                <img className="i" src={logo2} alt="img"/>
               
            </div>
            </div>
        
        </div>
       
    </div>
}