const express = require('express');

const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents',IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete)


module.exports = routes;

/*
* Tipos de parametres:
*
* Query params: Parãmetros nomeados enviados na rota aois "?" (filtros, paginação)
* Route params: Parametros utilizados para identificar recursos
* Request Body: Corpo da requisiçao utilizado pra criar e alterar recursos
*
*
*/


/**
 * Banco SQL:
 * 
 * Driver: SELECT * FROM users
 * Query builder: table('users').selct('*').where()
 * 
 * 
 */

