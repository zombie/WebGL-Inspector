(function () {
    var resources = glinamespace("gli.capture.data.resources");
    
    var Shader = function Shader(resourceCache, rawArgs, target, stack) {
        glisubclass(resources.Resource, this, [resourceCache, rawArgs, target, stack, "Shader"]);
        this.creationOrder = 4;
        
        // VERTEX_SHADER / FRAGMENT_SHADER
        this.shaderType = rawArgs[0];
    };
    
    Shader.setupCaptures = function setupCaptures(impl) {
        var methods = impl.methods;
        var buildRecorder = resources.Resource.buildRecorder;
        
        var resetCalls = [
            "shaderSource",
            "compileShader"
        ];
        
        buildRecorder(impl, "shaderSource", null, resetCalls);
        buildRecorder(impl, "compileShader", null, null);
    };
    
    resources.Shader = Shader;
    
})();