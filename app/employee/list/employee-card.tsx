export default function EmployeeCard(props : any){
    return (
        <div className="card p-3 mb-2 w-100">
            <img className="card-img-top" src={props.profilePicture} />
            <div className="card-body d-flex flex-column align-items-start">
                <span>{props.fristName} {props.lastName}</span>
                <span>{props.email}</span>
                <span>{props.phoneNumber}</span>
                <div className="d-flex">
                <span className="me-auto p-2">{props.gender == "M" ? "Male" : "Female"}</span>
                <div className="d-flex">
                <button type="button" className="btn btn-danger mx-2"><i className="bi bi-trash"></i></button>
                <button type="button" className="btn btn-success"><i className="bi bi-person"></i></button>
                </div>
                </div>
            </div>
        </div>
    );
}