import Router, { PageHandler, PageOptions, RouterOptions } from 'vanilla-router';
import RequireInitialization from '@battis/require-init';
import path from "path";

export {PageHandler}

/**
 * Static wrapper for vanilla-router/Router instance
 * TODO automate wrapping Router instance?
 */
export default class Routing extends RequireInitialization {
    private static router: Router;

    public static get root(): string {
        Routing.requireInitialization();
        return Routing.router.root;
    }

    public static get currentPath(): string {
        return location.pathname.replace(
            RegExp(`^${Routing.router.root}(.*)`),
            '$1'
        );
    }

    public static init(options?: RouterOptions): typeof Routing {
        Routing.router = new Router(options);
        Routing.markInitialized();
        return Routing;
    }

    public static add(
        rule: string | RegExp,
        handler: PageHandler,
        options?: PageOptions
    ): typeof Routing {
        Routing.requireInitialization();
        Routing.router.add(rule, handler, options);
        return Routing;
    }

    public static addRedirect(rule: string | RegExp, redirect: string) {
        Routing.requireInitialization();
        Routing.router.add(rule, () => Routing.navigateTo(redirect));
        return Routing;
    }

    public static navigateTo(
        path: string,
        state?: any,
        silent?: boolean
    ): typeof Routing {
        Routing.requireInitialization();
        Routing.router.navigateTo(path, state, silent);
        return Routing;
    }

    public static addUriListener(): typeof Routing {
        Routing.router.addUriListener();
        return Routing;
    }

    public static redirectTo(
        path: string,
        state?: any,
        silent?: boolean
    ): typeof Routing {
        Routing.router.redirectTo(path, state, silent);
        return Routing;
    }

    public static check(): typeof Routing {
        Routing.router.check();
        return Routing;
    }

    public static buildUrl(urlPath) {
        return `${window.location.protocol}//` + path.join(window.location.host,Routing.router.root,urlPath);
    }
}
