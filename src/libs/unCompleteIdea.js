import { searchIdea } from "./editIdea";
import saveToLocalStorage from "./saveToLocalStorage";

const unCompleteIdea = (id) => {
    const ideas = JSON.parse(localStorage.getItem('ideas') || '[]');
    const updatedIdea = searchIdea(id, ideas);
    updatedIdea.isCompleted = false;
    saveToLocalStorage(ideas);
    return ideas;
}

export default unCompleteIdea