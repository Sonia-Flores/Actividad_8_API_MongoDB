const router = require('express').Router();

const InmuebleController = require('../../controllers/inmueble.controler');


router.get('/', InmuebleController.getInmuebles);
router.post('/',InmuebleController.createInmueble);
router.put('/:inmuebletId', InmuebleController.updateInmueble );
router.delete('/:inmuebletId', InmuebleController.deleteInmueble);


module.exports = router;