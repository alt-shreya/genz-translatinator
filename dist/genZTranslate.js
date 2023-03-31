"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genZTranslate = void 0;
function genZTranslate(text) {
    const dictionary = {
        "lol": "laugh out loud",
        "omg": "oh my god",
        "btw": "by the way",
        "tbh": "to be honest",
        "idk": "I don't know",
        "imo": "in my opinion",
        "smh": "shaking my head",
        "smh my head": "shaking my head my head",
        "aight bet": "sure thing",
        "fr fr": "for real, for real",
        "in my villain era": "i'm going to be a little selfish for a while",
        "af": "as f***",
        "bruh": "bro",
        "bet": "sure thing",
        "lit": "awesome",
        "ded": "Used to describe something humorous to such an extent as to kill you metaphorically",
        "facts": "the truth",
        "fax no printer": "facts, because it sounds like facts. Geddit",
        "drip": "trendy style of fashion",
        "fit check": "showing off an outfit",
        "@me": "Pronounced _at me_. Used on social media when someone feels attacked by a post."
    };
    const words = text.toLowerCase().split(" ");
    let translation = "";
    for (const word of words) {
        if (dictionary[word]) {
            translation += dictionary[word] + " ";
        }
        else {
            translation += word + " ";
        }
    }
    return translation.trim();
}
exports.genZTranslate = genZTranslate;
