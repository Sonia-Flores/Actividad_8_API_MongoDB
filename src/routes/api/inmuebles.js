const router = require('express').Router();

const InmuebleController = require('../../controllers/inmueble.controler');


router.get('/', InmuebleController.getInmuebles);
router.post('/',InmuebleController.createInmueble);
router.put('/:inmuebleId', InmuebleController.updateInmueble );
router.delete('/:inmuebleId', InmuebleController.deleteInmueble);


module.exports = router;