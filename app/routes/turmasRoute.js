const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')
 
module.exports = function(app) {
  app.get('/turmas', TurmaController.pegaTodasAsTurmas)  
  app.get('/turmas/:id', TurmaController.pegaTurma)  
  app.post('/turmas', TurmaController.criaTurma)  
  app.post('/turmas/:id/restaura', TurmaController.restauraTurma)  
  app.put('/turmas/:id', TurmaController.atualizaTurma)  
  app.delete('/turmas/:id', TurmaController.apagaTurma)  
}