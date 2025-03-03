module.exports = {
  apps: [
    {
      name: "profsouz",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/home/rizo/next/profsouz",
      interpreter: "bun",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        DATABASE_URL:
          "postgres://profsouz:NuegAvYPV4EfQHqp@localhost:3306/sprofsouz",
        S3_BUCKET: "profsouz",
        S3_ACCESS_KEY_ID: "YCAJEyh-o4mLyiDs4JwVFsphF",
        S3_SECRET_ACCESS_KEY: "YCPKZiDTXj6VJ6NSkoQ8fKRN4gAlDj5FVbhUx7k1",
        S3_REGION: "ru-central1",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
