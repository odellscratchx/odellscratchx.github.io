(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Swag'};
    };
    ext.fetch_url= function(url) {
        fetch(url);
    };
    var descriptor = {
        blocks: [
            [' ', 'Fetch URL', 'fetch_url', ''],
        ]
    };
    ScratchExtensions.register('JavaScript Code Runner', descriptor, ext);
})({});
