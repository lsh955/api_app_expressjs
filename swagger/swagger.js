const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const specs = swaggereJsdoc({
  swaggerDefinition: {
    info: {
      title: 'Test API',
      version: '1.0.0',
      description: 'Test API express',
    },
    host: 'localhost:8091',
    basePath: '/'
  },
  apis: ['./routes/user/*.js']
});

module.exports = {
  swaggerUi,
  specs
};