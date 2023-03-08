export default function Contact(props) {
    return (
        <div className="contacts">
            <div className="contact--card">
                <img src={props.img} />
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src="" />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src="" />
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
    )
}