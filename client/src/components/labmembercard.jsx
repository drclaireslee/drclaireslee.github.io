
/**
 * Name: Lab Member Card Component
 * Filename: labmembercard.jsx
 * Description: This component is used to list information about each lab member. Each card is created
 * by reading information about each member from the json_files/lab_members.json file.
 */

/**
 * 
 * @param {*} lab_image - Image of the lab member
 * @param {*} lab_name - Name of the lab member
 * @param {*} lab_degree - Degree level of the lab member
 * @param {*} lab_department - Major/Department the lab member belongs to 
 * @param {*} lab_scholarship - Fellowship/Scholarship the lab member is using for this research lab
 * @param {*} lab_research_interests - Lab member's research interests
 * @returns A component containing information about a lab member
 */

import { Col, Row, Image } from "react-bootstrap"


function LabMemberCard({lab_image, lab_name, lab_degree, lab_department, lab_scholarship, lab_research_interests}) {
    return(
        <>
         {/**Information for a lab member */}
            <Row role="row" aria-label="lab member info">
                {/**Lab member image */}
                <Col md={3} role="column" aria-label="lab member image">
                    <Image src={lab_image} fluid width={"250"} height={"250"} rounded alt='lab member profile picture' className="p-2"/>
                </Col>

                {/**Information about each lab member */}
                <Col md={9} role="column" aria-label="lab member info" > 
                    <p className="fs-3"><strong>{lab_name}</strong></p>
                    <p className="fs-4">{lab_degree}, {lab_department}</p>
                    <p className="fs-4">{lab_scholarship}</p>
                    <p className="fs-4"><b>Research Interests:</b> {lab_research_interests}</p>
                                     
                </Col>
            </Row>
            <hr/>
        </>
    )
}

export default LabMemberCard