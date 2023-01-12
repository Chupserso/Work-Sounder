import { Component } from "react";
import playImage from "../../resources/img/play.png";

const Image = () => {
    return <img src={playImage} />;
}

class AppSoundsItem extends Component {
    constructor (props) {
        super(props);
        this.imageUrl = this.props.imageUrl;
        this.title = this.props.title;
        this.soundUrl = this.props.soundUrl;
        this.state = {
            play: false
        }
        this.audio = new Audio(this.soundUrl);
        this.audio.loop = true;
    }

    soundClick = () => {
        this.setState({
            play: !this.state.play
        })
    }

    render () {
        const image = this.state.play ? <Image /> : null;

        if (this.state.play) {
            this.audio.play();
            this.audio.autoplay = true;
        } else {
            this.audio.pause();
        }
    
        return (
            <div className="sound" onClick={this.soundClick}>
                <div className="logo" style={{background: `url(${this.imageUrl}) center center/cover`}}>
                    {image}
                </div>
                <div className="title">{this.title}</div>
            </div>
        );    
    }
}

export default AppSoundsItem;