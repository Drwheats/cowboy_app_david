import {socialsHolder} from "../data";
import {useLocation} from "react-router-dom";
const Social = () => {
    const location = useLocation();
    console.log(location);
    const path = location.pathname.split("/")[2];
    const social = socialsHolder.find(p=>p.id.toString() === path)
    function reload(){
        console.log('Home reloaded!')
        this.setState({
            'state': 0
        });
    }
  return (
      <div className="social">
        <img src={social.img} alt="cowboy" className="postImg" />
          <h1 className="postTitle">{social.title}</h1>
          <p className="postDesc">{social.desc}</p>
          <p className="postLongDesc">{social.longDesc}</p>
      </div>
  )

}

export default Social;