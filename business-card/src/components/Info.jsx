import emailIcon from "../assets/email-icon.png"
import linkedinIcon from "../assets/linkedin-icon.png"
export default function Info(){
    return (
        <header className="header">
            <div className="personal-photo" aria-label="personal-photo"></div>
            <div className="container">
                <h1 className="name">Desmond Chong Qi Xiang</h1>
                <h2 className="profession">Full Stack Developer</h2>
                <p className="website">desmondchong.webste</p>
                <div className="link">
                    <a href="mailto:qixiangggg@gmail.com" className="email"><img src={emailIcon} className="email-icon"/>Email</a>
                    <a href="https://www.linkedin.com/in/desmond-chong-qi-xiang-7098a0235/" className="linkedin" ><img src={linkedinIcon} className="linkedin-icon"/>LinkedIn</a>
                </div>
            </div>
        </header>
    )
}