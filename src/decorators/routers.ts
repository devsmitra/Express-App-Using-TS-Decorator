import { Router } from "express";

const _router = Router();
function router(options: { path: string, method: string }) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        _router.get(options.path, target[propertyKey]); // target[propertyKey] = getUsers
    };
}

export default router;
export const appRouter = _router;