import {Button} from "@material-ui/core"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
const User = ({user}) => {
    // console.log(user.item);
    return (
        <div className="col-12 col-md-6 col-lg-6 my-3 magical-appear">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <h5 className="card-title"><PersonIcon/> {user.name}</h5>
                            <p className="card-text"><MailIcon/> {user.email}</p>
                            <h6 className="card-subtitle mb-2 text-muted">@{user.username}</h6>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <Button startIcon={<AccountCircleIcon/>} 
                            variant="contained" color="primary">View User</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
