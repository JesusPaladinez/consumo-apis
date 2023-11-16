import "./card.css"

const Card = ({image, title,description, category}) => {
    return (
        <div className="contenedor">
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            <p>categoria: {category}</p>
          </div>
    );
}

export default Card;
