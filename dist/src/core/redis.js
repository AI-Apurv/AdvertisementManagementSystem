"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
async function main() {
    const client = (0, redis_1.createClient)();
    client.on('error', err => console.log('Redis Client Error', err));
    await client.connect();
    await client.set('key', 'value');
    const value = await client.get('key');
    await client.disconnect();
}
main();
//# sourceMappingURL=redis.js.map