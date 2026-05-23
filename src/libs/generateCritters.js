function img(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const generateCritters = (title, des) => {
    const modules = import.meta.glob('/src/assets/imgs/critters/*.png', {
        eager: true,
    });

    const imgArray = Object.values(modules).map(mob => mob.default);
    const ideas = JSON.parse(localStorage.getItem('ideas')) ?? [];

    const position = {
        x: Math.random() * (window.innerWidth - 200),
        y: Math.random() * (window.innerHeight - 200)
    }

    const newIdea = {
        id: Date.now(),
        src: img(imgArray),
        title: title,
        des: des,
        position: position,
        isCompleted: false
    };

    ideas.push(newIdea);
    return newIdea;
}


export default generateCritters