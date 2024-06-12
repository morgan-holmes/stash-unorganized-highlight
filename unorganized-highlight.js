const UH__PLUGIN_NAME = "unorganized-highlight";
const UH__FADE_CLASSNAME = "uh-unorganized-fade";
const UH__GRAYSCALE_CLASSNAME = "uh-unorganized-grayscale";
const UH__HIDE_CLASSNAME = "uh-organized-hide-icon";

const UH__DEFAULT_CONFIGURATION = {
    fadeUnorganized: false,
    grayUnorganized: false,
    hideOrganizedIcon: false
};


setTimeout(async () => {
    const userConfiguration = await csLib.getConfiguration(UH__PLUGIN_NAME, {});
    const {fadeUnorganized, grayUnorganized, hideOrganizedIcon} = {
        ...UH__DEFAULT_CONFIGURATION,
        ...userConfiguration
    }

    const addStyle = (node, className) => node.className = `${node.className} ${className}`;

    if (hideOrganizedIcon){
        addStyle(document.getElementById("root"), UH__HIDE_CLASSNAME);
    }

    if (fadeUnorganized){
        addStyle(document.getElementById("root"), UH__FADE_CLASSNAME);
    }

    if (grayUnorganized){
        addStyle(document.getElementById("root"), UH__GRAYSCALE_CLASSNAME);
    }

});