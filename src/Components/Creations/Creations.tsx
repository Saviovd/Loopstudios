import "./Creations.scss"
import creations from "./creations.json"


export default function Creations() {
    return (<>
        <section className="creations">
            {/* <img src={photo1} alt="ddd" /> */}
            <div className="creations__container">
                <div className="creations__container-header">
                    <h2 className="creations__container-title">Our creations</h2>
                    <a className="creations__container-more" href="/#">See all</a>
                </div>
                <div className="creations__container-content">
                    {creations.map((creation) => (
                        <div className="image__box">
                            <img className="image__box-image" key={creation.name} alt={creation.name} src={`${creation.image}`}/>
                            <h3 className="image__box-text">{creation.name}</h3>
                        </div>
                    ))}
                    {creations.map((creation) => (
                        <div className="image__box-mobile">
                            <img className="image__box-image" key={creation.name} alt={creation.name} src={`${creation.image_mobile}`}/>
                            <h3 className="image__box-text">{creation.name}</h3>
                        </div>
                    ))}
                    <a className="creations__container-more2" href="/#">See all</a>
                </div>
            </div>
        </section>
    </>)
}
