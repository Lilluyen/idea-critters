import saveToLocalStorage from "./saveToLocalStorage";

const deleteIdeaFromLocalStorage = (idea) => {
    const ideas = JSON.parse(localStorage.getItem('ideas') || '[]');
    const updatedIdeas = ideas.filter(i => i.id !== idea.id);
    console.log(updatedIdeas)
    saveToLocalStorage(updatedIdeas);
    return updatedIdeas;
}

export default deleteIdeaFromLocalStorage