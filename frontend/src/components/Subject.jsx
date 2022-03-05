import { useState, useEffect } from "react";
import axios from "axios"
import SubjectList from "./SubjectList";

const Subject = () => {
    const [subjects, setNewSubjects] = useState(null);
    const [formSubject, setFormSubject] = useState({
        name: "",
        groups: null,
    });

    useEffect(() => {
        getSubject();
    }, []);

    const getSubject = () => {
        axios({
            method: "GET",
            url: "api/Subject/",
        }).then((response) => {
            const data = response.data;
            setNewSubjects(data);
        }).catch((error) => {
            if (error.response) {
                console.log(error.response);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    }

    const createSubject = (event) => {
        axios({
            method: "POST",
            url: "api/Subject/",
            data: {
                name: formSubject.name,
                groups: formSubject.groups,
            }
        })
            .then((response) => {
                getSubject()
            })

        setFormSubject(({
            name: "",
            groups: null,
        }))

        event.preventDefault()
    }

    let handleChange = (event) => {
        const { value, name } = event.target;
        setFormSubject(prevSubject => ({
            ...prevSubject, [name]: value
        }))
    }

    return (

        <div className=''>

            {subjects && subjects.map(subject => <SubjectList
                key={subject.id}
                id={subject.id}
                name={subject.name}
                groups={subject.groups}
            />
            )}

            <form className="create-subject">
                <input onChange={handleChange} text={formSubject.name} name="name" placeholder="Name" value={formSubject.name} />
                <textarea onChange={handleChange} name="groups" placeholder="Which group attends this class?" value={formSubject.group} />
                <button onClick={createSubject}>Create new Subject</button>
            </form>

        </div>
    );
}

export default Subject;