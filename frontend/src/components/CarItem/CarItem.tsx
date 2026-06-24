import type { Car } from "../../models/car"
import "./CarItem.css"
import { useFavorites } from "../../hooks/useFavorites"
import { IMG_BASE_URL } from "../../data/constants"

type Props = {
    car: Car
}

export function CarItem({ car }: Props) {
    const equipments = car.equipment ? car.equipment.split(",") : []
    const { toggleFavorite, isFavorite } = useFavorites()

    return (
        <article className="carItem card-hover">
            <div className="carItem__image-container">
                <img
                    src={`${IMG_BASE_URL}/${car.image}`}
                    alt={`${car.manufacturer} ${car.model}`}
                    loading="lazy"
                />
            </div>

            <div className="carItem__details">
                <h3 className="carItem__title">{car.manufacturer} {car.model}</h3>

                <div className="carItem__meta">
                    <span className="muted">{car.constructionYear}</span>
                    <span className="muted">{car.fuelType}</span>
                    <span className="muted">{car.mileage} km</span>
                </div>

                <p className="carItem__text">Engine: {car.engineSize} cm3 • Power: {car.power} CP</p>

                <div className="carItem__tags">
                    {equipments.slice(0, 6).map((eq, i) => (
                        <span key={i} className="carItem__tag">{eq.trim()}</span>
                    ))}
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12}}>
                    <div className="carItem__price">{car.price} EUR</div>
                    <button
                        className={`carItem__btn carItem__btn--primary`}
                        onClick={() => toggleFavorite(car)}
                        aria-pressed={isFavorite(car)}
                    >
                        {isFavorite(car) ? '★ Favorite' : '☆ Favorite'}
                    </button>
                </div>
            </div>
        </article>
    )
}