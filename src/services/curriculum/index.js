const STORAGE_KEY = "trabalho-curriculo"

export const getData = () => {
    const formData = localStorage.getItem(STORAGE_KEY)

    if (formData != null) {
        return JSON.parse(formData)
    }

    return[]
}

export const saveData = (newData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData))
}
