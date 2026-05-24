import saveToLocalStorage from "./saveToLocalStorage";

const editIdea = (id, title, desc) => {
    const ideas = JSON.parse(localStorage.getItem('ideas') || '[]');
    const updatedIdea = searchIdea(id, ideas);
    if (!updatedIdea) return null;
    updatedIdea.title = title;
    updatedIdea.des = desc;
    saveToLocalStorage(ideas);
    return ideas;
}

export function searchIdea(id, ideas) {
    let left = 0;
    let right = ideas.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (ideas[mid].id === id) {
            return ideas[mid];
        }
        else if (ideas[mid].id < id) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return null;
}

export default editIdea