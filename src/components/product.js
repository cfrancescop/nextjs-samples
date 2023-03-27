export default function Product({name,description,price,image}){
    return <div className="card">
        <div className="card-image">
            <img src={image} alt={name} />
        </div>
        <div className="card-title">
            {name}
        </div>
        <div className="card-body">
            <p>
                {description}
            </p>
        </div>
        <div className="card-footer">
           € {price}
        </div>

    </div>
}