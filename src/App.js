import { useEffect, useState } from "react"
import CurriculumForm from "./components/Form"
import { curriculumService } from "./services"
import CurriculumFormat from "./components/Format"


const App = () => {

  const [data, setData] = useState([])


  const [editing, setEditing] = useState(false)

  useEffect(() => {
    const data = curriculumService.getData()
    setData(data)
  }, [])

  const updateForm = (form) => {
    const newData = [...data, form]

    setData(newData)
    curriculumService.saveData(newData)
    setEditing(false)
  }

  const editingTrue = () => {
    setEditing(true)
  }

  console.log(data.name)

  if(!editing && data == null) {
    return(
      <input type="button" value="Criar Curriculo" onClick={editingTrue} />
    )
  } else if (editing) {
      return(
        <div>
          <CurriculumForm onSave={updateForm} />
        </div>
      )
  } 
  
  if (data != null) {
    return(
      <div>
        <CurriculumFormat data={data} />
      </div>
    )
  }
  
}

export default App;
