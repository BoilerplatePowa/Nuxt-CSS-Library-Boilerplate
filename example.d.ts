/**
 * Example TypeScript file showing Node.js 22 features
 * Run with: node --experimental-strip-types example.ts
 */
interface User {
    id: number;
    name: string;
    email: string;
}
export declare function fetchUser(id: number): Promise<User | null>;
export declare function processUsers(userIds: number[]): Promise<User[]>;
export declare function getOptimalConcurrency(): number;
export {};
