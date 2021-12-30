"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vanilla_router_1 = __importDefault(require("vanilla-router"));
const require_init_1 = __importDefault(require("@battis/require-init"));
const path_1 = __importDefault(require("path"));
/**
 * Static wrapper for vanilla-router/Router instance
 * TODO automate wrapping Router instance?
 */
class Routing extends require_init_1.default {
    static get root() {
        Routing.requireInitialization();
        return Routing.router.root;
    }
    static get currentPath() {
        return location.pathname.replace(RegExp(`^${Routing.router.root}(.*)`), '$1');
    }
    static init(options) {
        Routing.router = new vanilla_router_1.default(options);
        Routing.markInitialized();
        return Routing;
    }
    static add(rule, handler, options) {
        Routing.requireInitialization();
        Routing.router.add(rule, handler, options);
        return Routing;
    }
    static addRedirect(rule, redirect) {
        Routing.requireInitialization();
        Routing.router.add(rule, () => Routing.navigateTo(redirect));
        return Routing;
    }
    static navigateTo(path, state, silent) {
        Routing.requireInitialization();
        Routing.router.navigateTo(path, state, silent);
        return Routing;
    }
    static addUriListener() {
        Routing.router.addUriListener();
        return Routing;
    }
    static redirectTo(path, state, silent) {
        Routing.router.redirectTo(path, state, silent);
        return Routing;
    }
    static check() {
        Routing.router.check();
        return Routing;
    }
    static buildUrl(urlPath) {
        return `${window.location.protocol}//` + path_1.default.join(window.location.host, Routing.router.root, urlPath);
    }
}
exports.default = Routing;
