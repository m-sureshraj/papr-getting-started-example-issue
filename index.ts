import { connect, disconnect } from './papr';
import User from './User';

(async () => {
    try {
        await connect();

        const docWithNoProperties = {};
        const user = await User.insertOne(docWithNoProperties);

        console.log({ user });
    } catch (error) {
        console.log(error);
    } finally {
        await disconnect();
    }
})();
