// Keep it here for now, until we decide what to do with it

function interpolate(str, arr) {
    var i = 0;
    return str.replace(/{([^{}]*)}/g, function (a) {
        i++;
        return typeof arr[i-1] === 'string' || typeof arr[i-1] === 'number' ? arr[i-1] : a;
    });
}