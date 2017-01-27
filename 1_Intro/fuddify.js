function fuddify(speech) {
    if (typeof speech != 'string') return "Nice twy, wabbit!";

    speech = speech.replace(/r/g, 'w');
    speech = speech.replace(/R/g, 'W');

    return speech;
}
