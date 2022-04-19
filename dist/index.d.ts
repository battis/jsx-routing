import { PageHandler, PageOptions, RouterOptions } from "vanilla-router";
import RequireInitialization from "@battis/require-init";
export { PageHandler };
/**
 * Static wrapper for vanilla-router/Router instance
 * TODO automate wrapping Router instance?
 */
export default class Routing extends RequireInitialization {
    private static router;
    static get root(): string;
    static get currentPath(): string;
    static init(options?: RouterOptions): typeof Routing;
    static add(rule: string | RegExp, handler: PageHandler, options?: PageOptions): typeof Routing;
    static addRedirect(rule: string | RegExp, redirect: string): typeof Routing;
    static navigateTo(path: string, state?: any, silent?: boolean): typeof Routing;
    static addUriListener(): typeof Routing;
    static redirectTo(path: string, state?: any, silent?: boolean): typeof Routing;
    static check(): typeof Routing;
    static buildUrl(urlPath: any): string;
}
