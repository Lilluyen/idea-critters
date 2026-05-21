import saveToLocalStorage from "./saveToLocalStorage";

const deleteIdeaFromLocalStorage = (idea) => {
    const ideas = JSON.parse(localStorage.getItem('ideas') || []);
    ideas.filter(i => i.id !== idea.id);
    saveToLocalStorage(ideas);
}

export default deleteIdeaFromLocalStorage