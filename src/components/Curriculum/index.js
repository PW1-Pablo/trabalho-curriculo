const CurriculumVitae = ({ data }) => {

    return(
        <label>
            <h1>{data.name}</h1>
            {data.mail}
            {data.phone}
            <br /><br />
            {data.job}
            <br /><br />
            {data.history}
        </label>
    )
}

export default CurriculumVitae;
