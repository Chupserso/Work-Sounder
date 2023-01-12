import { useState } from "react";
import "./App.css";
import playImage from "../../resources/img/play.png";
import AppHeader from "../app-header/AppHeader";
import AppSounds from "../app-sounds/AppSounds";
import dayForestImg from "../../resources/img/dayForest.jpg";
import dayForestSound from "../../resources/sounds/dayForest.mp3"
import nightForestImg from "../../resources/img/nightForest.jpg";
import nightForestSound from "../../resources/sounds/nightForest.mp3";
import fireplaceImg from "../../resources/img/fireplace.jpg";
import fireplaceSound from "../../resources/sounds/fireplace.mp3";
import rainImg from "../../resources/img/rain.jpg";
import rainSound from "../../resources/sounds/rain.mp3";
import oceanImg from "../../resources/img/ocean.jpg";
import oceanSound from "../../resources/sounds/ocean.mp3";
import stormImg from "../../resources/img/storm.jpg";
import stormSound from "../../resources/sounds/storm.mp3";

const App = () => {
    const [state, setState] = useState({
        data: [
            {title: "Sounds of the forest during the day", imgUrl: dayForestImg, soundUrl: dayForestSound, key: 1},
            {title: "Sounds of the forest during the night", imgUrl: nightForestImg, soundUrl: nightForestSound, key: 2},
            {title: "Sounds of a burning fireplace", imgUrl: fireplaceImg, soundUrl: fireplaceSound, key: 3},
            {title: "Sounds of the rain", imgUrl: rainImg, soundUrl: rainSound, key: 4},
            {title: "Sounds of the ocean", imgUrl: oceanImg, soundUrl: oceanSound, key: 5},
            {title: "Sounds of the storm", imgUrl: stormImg, soundUrl: stormSound, key: 6},
        ]
    });

    return (
        <div className="wrapper">
            <AppHeader />
            <AppSounds playImage={playImage} data={state.data} />
        </div>
    );
}

export default App;