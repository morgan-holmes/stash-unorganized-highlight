const TIMEOUT_DELAY = 1000;
const UNORGANIZED_CLASSNAME = 'unorganized';

const addUnorganizedStyle = (node) => node.className += ' ' + UNORGANIZED_CLASSNAME;
const exists = (node) => node !== null && node !== undefined;

const flagUnorganizedScenes = () => {
    setTimeout(() => {

        const sceneCards = Array.prototype.slice.call(document.getElementsByClassName("scene-card"));

        sceneCards.forEach((card) => {
            const organizedDiv = card.querySelector('div[role="group"]')
                ?.querySelector('div.organized');
            if(!exists(organizedDiv)){
                addUnorganizedStyle(card);
            }
        });

    }, TIMEOUT_DELAY);
}


window.navigation.addEventListener("navigate", (event) => {
    flagUnorganizedScenes();
});

flagUnorganizedScenes();
