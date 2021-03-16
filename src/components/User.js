import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
const User = ({user}) => {
    return (
        <div className="col-12 col-md-6 col-lg-6 my-3 magical-appear">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <h5 className="card-title"><PersonIcon/> {user.item.name}</h5>
                            <p className="card-text"><MailIcon/> {user.item.email}</p>
                            <p className="card-text"><PhoneIcon/> {user.item.phone}</p>
                            <h6 className="card-subtitle mb-2 text-muted">@{user.item.username}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
