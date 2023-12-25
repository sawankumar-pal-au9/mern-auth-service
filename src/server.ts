import { Config } from "./Config";
import app from "./app";

const startServer = () => {
    const port = Config.PORT;
    try {
        // eslint-disable-next-line no-console
        app.listen(port, () => console.log(`Server running on port ${port}`));
    } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        process.exit(1);
    }
};

startServer();
