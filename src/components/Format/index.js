import CurriculumVitae from "../Curriculum";

const CurriculumFormat = ({ data }) => {
    return(
        <div>
            {data.map((data, index) => (
                <CurriculumVitae key={index} data={data} />
            ))}
        </div>
        
    )
}

export default CurriculumFormat;
