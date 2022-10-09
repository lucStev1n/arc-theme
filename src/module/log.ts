export default class {
    public static debug(message?: any, ...optionalParams: any[]): void {
        console.log(
            `{ ${time().format("YYYY-MM-DD HH:mm:ss.SSS")} } --- %cDebug%c : %o`,
            "",
            "",
            message,
            ...optionalParams
        );
    }

    public static error(message?: any, ...optionalParams: any[]): void {
        console.log(
            `{ ${time().format("YYYY-MM-DD HH:mm:ss.SSS")} } --- %cError%c : %o`,
            "",
            "",
            message,
            ...optionalParams
        );
    }

    public static info(message?: any, ...optionalParams: any[]): void {
        console.log(
            `{ ${time().format("YYYY-MM-DD HH:mm:ss.SSS")} } --- %cInfo %c : %o`,
            "",
            "",
            message,
            ...optionalParams
        );
    }
}
