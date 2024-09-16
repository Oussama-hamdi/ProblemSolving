var filterString = function(value) {
    return +value.match(/\d/g)?.join('');
}