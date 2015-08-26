'use strict';

module.exports.rewritePackageName = function (context) {
    return {
        source : context.oldPackageName,
        target : context.newPackageName
    }
}

module.exports.rewriteProvider = function (context, name, authorities) {
    return {
        source : context.oldPackageName,
        target : context.newPackageName
    }
}

module.exports.rewriteAction = function (context, name) {
    return {
        source : context.oldPackageName,
        target : context.newPackageName
    }
}

module.exports.rewriteService = function (context, name, process) {
    return {
        source : context.oldPackageName,
        target : context.newPackageName
    }
}

module.exports.rewriteLayoutXmlns = function (context, xmlns) {
    return {
        source : context.oldPackageName,
        target : context.newPackageName
    }
}

module.exports.rewriteJavaImports = function (context, imports) {
    return {
        source : context.oldPackageName,
        target : context.newPackageName
    }
}