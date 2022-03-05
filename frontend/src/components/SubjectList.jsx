

const SubjectList = (props) => {
    return (
        <div className="SubjectList">
            <h1>Name: {props.name}</h1>
            <p>Group: {props.groups}</p>
        </div>
    );
}

export default SubjectList;