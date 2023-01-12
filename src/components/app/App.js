import { useState } from "react";
import "./App.css";
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
            {title: "Sounds of the forest during the day", imgUrl: dayForestImg, soundUrl: dayForestSound},
            {title: "Sounds of the forest during the night", imgUrl: nightForestImg, soundUrl: nightForestSound},
            {title: "Sounds of a burning fireplace", imgUrl: fireplaceImg, soundUrl: fireplaceSound},
            {title: "Sounds of the rain", imgUrl: rainImg, soundUrl: rainSound},
            {title: "Sounds of the ocean", imgUrl: oceanImg, soundUrl: oceanSound},
            {title: "Sounds of the storm", imgUrl: stormImg, soundUrl: stormSound},
        ]
    });

    return (
        <div className="wrapper">
            <AppHeader />
            <AppSounds data={state.data} />
        </div>
    );
}

export default App;