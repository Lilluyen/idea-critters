import { searchIdea } from "./editIdea";
import saveToLocalStorage from "./saveToLocalStorage";

const completeIdea = (id) => {
    const ideas = JSON.parse(localStorage.getItem('ideas') || '[]');
    const updatedIdea = searchIdea(id, ideas);
    updatedIdea.isCompleted = true;
    saveToLocalStorage(ideas);
    return ideas;
}

export default completeIdea