(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Swag'};
    };
    ext.run_code= function() {
        fetch("http://localhost:5000/");
    };
    var descriptor = {
        blocks: [
            [' ', 'Run Custom JavaScript Code', 'run_code'],
        ]
    };
    ScratchExtensions.register('JavaScript Code Runner', descriptor, ext);
})({});
