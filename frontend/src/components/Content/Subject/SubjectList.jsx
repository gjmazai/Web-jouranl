import { NavLink } from "react-router-dom";
import *as axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "./css/SubjectList.css";


const SubjectList = (props) => {
    const path = "/content/" + props.id;

    const getState = () => {
        const path = "/api/subject_detail/" + props.id;
        axios.get(path).then(response => {
            const data = {
                progress: response.data.progress,
                subject: response.data.subject,
                lesson: response.data.lesson,
                student: response.data.student,
            };
            props.setContent(data)
        });
    }

    return (
        <div className="SubjectList">
            <Container>
                <Row>
                    <Col>
                        <NavLink onClick={getState} to={path} activeClassName="selected" className="text-decoration-none" >
                            <h3>{props.name}</h3>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default SubjectList;