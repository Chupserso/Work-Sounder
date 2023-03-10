import AppSoundsItem from "../app-sounds-item/app-sounds-item";

const AppSounds = (props) => {
    const data = props.data;
    const items = data.map(item => {
        return (
            <AppSoundsItem playImage={props.playImage} imageUrl={item.imgUrl} title={item.title} soundUrl={item.soundUrl} key={item.key} />
        );
    });

    return (
        <div className="sounds">
            {items}
        </div>
    );
}

export default AppSounds;