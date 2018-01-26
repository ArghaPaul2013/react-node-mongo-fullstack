const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';
export const mongodbName = 'admin';
export default {
  mongodbName,
  mongodbUri: `mongodb://localhost:27017/${mongodbName}`,
  port: env.PORT || 8080,
  host: env.HOST || '0.0.0.0',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};
