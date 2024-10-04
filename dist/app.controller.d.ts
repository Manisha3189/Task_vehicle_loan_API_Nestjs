export declare class AppController {
    healthCheck(): Promise<{
        statusCode: number;
        status: string;
    }>;
}
