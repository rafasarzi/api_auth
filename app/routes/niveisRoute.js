const { app } = require('express')
const NivelController = require('../controllers/NivelController')
 
module.exports = function(app) {

  app.get('/niveis', NivelController.pegaTodosOsNiveis)  
  app.get('/niveis/:id', NivelController.pegaNivel)  
  app.post('/niveis', NivelController.criaNivel)  
  app.post('/niveis/:id/restaura', NivelController.restauraNivel)  
  app.put('/niveis/:id', NivelController.atualizaNivel)  
  app.delete('/niveis/:id', NivelController.apagaNivel)  
}