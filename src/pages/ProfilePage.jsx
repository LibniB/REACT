import react from "react";
import naruto from "../img/background/naruto.jpg"
import shoesNaruto from "../img/background/shoes-naruto.jpg"
import { Link } from "react-router-dom";
const ProfilePage = () => {
    return (

        <div className="container-profile">

            <div className="content-profile">
                <img src={naruto} className="naruto-img" />
                <h4>Uzumaki Naruto</h4>
                <h5>Email:uzumakinaruto@gmail.com</h5>
                <div class="btn-group">
                    <a href="/Login" class="btn btn-outline-warning " aria-current="page">Log Out</a>

                </div>

            </div>

            <div className="content-side">

                <p className="text-profile"> <h6> Bio: Sneakerhead with a passion for street style and urban vibes. Always on the lookout for the freshest kicks that make a statement. Walking through life one sneaker at a time.</h6>
                    <h6> Shoe Size: US 9 / EU 42 </h6>
                    <h6> Favorite Style: Casual and street-savvy. Whether it's classic high-tops or trendy low-profile kicks, sneakers are my go-to for any occasion.</h6>
                    <h6> Favorite Color: Bold and vibrant, especially shades of blue. But I'm open to exploring the entire spectrum of sneaker colors.</h6>
                    <h6> Last Purchase: Limited edition high-performance running shoes for that extra boost during workouts. Because who says you can't be stylish and sporty?</h6>
                    <h6> Wishlist: Always evolving. Currently craving a pair of retro-inspired sneakers and futuristic high-tech trainers.</h6>
                    <h6> Style Tip: "Sneakers aren't just shoes; they're a statement. Find the pair that speaks to you, and your style will follow."</h6>
                    <h6> Welcome to my sneaker sanctuary! Each pair tells a story, and every purchase is a step towards self-expression. 👟🔥</h6>
                </p>
                <img src={shoesNaruto} className="naruto-shoes" />
            </div>

        </div>
    );
};

export default ProfilePage;