import Link from "next/link";

export default function EmployeeCard(props: any) {

    const getProfilePicture = (imagePath: string) => {
        if (!imagePath) {
            return "/images/no-profile.jpg";
        }
        return imagePath;
    }
    console.log(props)
    return (
        <div className="card p-3 mb-2 w-100">
            <img className="card-img-top" src={getProfilePicture(props.profilePicture)} />
            <div className="card-body d-flex flex-column align-items-start">
                <span>{props.firstName} {props.lastName}</span>
                <span>{props.email}</span>
                <span>{props.phoneNumber}</span>
                <div className="d-flex">
                    <span className="me-auto p-2">{props.gender == "M" ? "Male" : "Female"}</span>
                    <div className="d-flex">
                        <button type="button" className="btn btn-danger mx-2"><i className="bi bi-trash"></i></button>
                        <Link href={`edit/${props.id}`} className="btn btn-success"><i className="bi bi-person"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}