module.exports = {
  apps: [
    {
      name: "rei-do-bugs-api",
      script: "npm",
      args: "start",
      cwd: "./backend",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
      }
    },
    {
      name: "rei-do-bugs-web",
      script: "npm",
      args: "start",
      cwd: "./frontend",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
      }
    }
  ]
};
