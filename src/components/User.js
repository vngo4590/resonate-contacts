const User = ({user}) => {
    console.log(user.item);
    return (
        <div className="col-12 col-md-6 col-lg-3 my-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">@{user.username}</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a> */}
                    <button type="button" className="btn btn-primary">View More</button>
                </div>
            </div>
        </div>
    )
}

export default User
