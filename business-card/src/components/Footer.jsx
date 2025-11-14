import twitterIcon from "../assets/twitter-icon.png"
import facebookIcon from "../assets/facebook-icon.png"
import instagramIcon from "../assets/instagram-icon.png"
import githubIcon from "../assets/github-icon.png"
export default function(){
    return(
        <footer>
            <a href="#"><img src={twitterIcon} alt="twitter icon"/></a>
            <a href="#"><img src={facebookIcon} alt="facebook icon"/></a>
            <a href="#"><img src={instagramIcon} alt="instagram icon"/></a>
            <a href="#"><img src={githubIcon} alt="github icon"/></a>
        </footer>
    )
}