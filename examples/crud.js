var rally = require('..'),
    refUtils = rally.util.ref,
    restApi = rally();

function createDefect() {
    return restApi.create({
        type: 'defect',
        data: {
            Name: 'My Defect',
            Environment: 'Test'
        }
        //todo: request options, rally options (fetch, etc)
    });
}

function readDefect(result) {
    return restApi.get({
        ref: refUtils.getRelative(result.Object)
    });
}

function updateDefect(result) {
    return restApi.update({
        ref: refUtils.getRelative(result), //todo: inconsistent result from read (should be stored on Object property?
        data: {
            Name: 'My Updated Defect'
        }
    });
}

function deleteDefect(result) {
    return restApi.delete({
        ref: refUtils.getRelative(result.Object)
    });
}

function onSuccess(result) {
    console.log('Success!');
}

function onError(result) {
    console.log('Failure!', errors);

}

createDefect()
    .then(readDefect)
    .then(updateDefect)
    .then(deleteDefect)
    .then(onSuccess)
    .fail(onError);
