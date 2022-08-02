"use strict";

module.exports = {
    apps: [
        {
            name  : "NODE EXPRESS CRUD API",
            script: "./bin/www",

            instances: 2, // instances:0 CPU core 수만큼 생성
            exec_mode: "cluster",

            log_date_format: "MM/DD HH:mm:ss",

            watch: true,

            env: {
                NODE_ENV: "development",
            },

            wait_ready    : true,
            listen_timeout: 10000,
            kill_timeout  : 5000,
        },
    ],
};
