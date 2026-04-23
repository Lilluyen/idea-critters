
const generateCritters = () => {
    const modules = import.meta.glob('public/assets/imgs/critters/*.avif', {
        eager: true,
    });
    console.log(modules)

}

export default generateCritters