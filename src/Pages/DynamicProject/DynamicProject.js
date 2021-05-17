import './DynamicProject.css';
import { useParams } from "react-router-dom";
import userData from "../../MyDetails";

function DynamicProject() {
    const { number } = useParams();
    return (
        <div style={{marginTop: "60px", backgroundColor: userData.theme.themeColor, paddingBottom: "10%", marginBottom: "-75px", height: "100px"}}>
            {userData.projects[number].shortDescription}
        </div>
    );
}

export default DynamicProject;
