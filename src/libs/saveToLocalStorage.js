
const saveToLocalStorage = (ideas) => {
    localStorage.setItem('ideas', JSON.stringify(ideas))
}

export default saveToLocalStorage