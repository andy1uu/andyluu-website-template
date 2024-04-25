declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT: string;
      FRONTEND_URL: string;
      DATABASE_CONNECTION_STRING: string;
      DATABASE_NAME: string;
      EDUCATION_COLLECTION_NAME: string;
    }
  }
}
