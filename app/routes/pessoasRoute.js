const { authJwt } = require('../middleware')
const PessoaController = require('../controllers/PessoaController')
const MatriculaController = require('../controllers/MatriculaController')


module.exports = function(app) {
 
  app.get('/pessoas', authJwt.verifyToken,PessoaController.pegaTodasAsPessoas)  
  app.get('/pessoas/:id',PessoaController.pegaPessoa)  
  app.post('/pessoas', PessoaController.criaPessoa)  
  app.get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)  
  app.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)  
  app.get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.pegaUmaMatricula)  
  app.get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculasPorTurma)  
  app.get('/pessoas/matricula/lotada', MatriculaController.pegaTurmasLotadas)  
  app.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)  
  app.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)  
  app.post('/pessoas/:estudanteId/matricula', MatriculaController.criaMatricula)  
  app.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculaController.restauraMatricula)  
  app.put('/pessoas/:id', PessoaController.atualizaPessoa)  
  app.put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizaMatricula)  
  app.delete('/pessoas/:id', PessoaController.apagaPessoa)  
  app.delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.apagaMatricula)  
}