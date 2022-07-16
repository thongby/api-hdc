const express = require("express");
const router = express.Router();

const {
  listRDUHospital,
  listRDUpcu,
  listHpvcdata,
  listPrivatehospital,
  listGppdata,
} = require("../controllers/hdc");

//@endpoint     localhost:8000/api/rduhospital
//@method       GET
//@access       Public
router.get("/rduhospital", listRDUHospital);

//@endpoint     localhost:8000/api/rdupcu
//@method       GET
//@access       Public
router.get("/rdupcu", listRDUpcu);

//@endpoint     localhost:8000/api/privatehospital
//@method       GET
//@access       Public
router.get("/privatehospital", listPrivatehospital);

//@endpoint     localhost:8000/api/hpvcdata
//@method       GET
//@access       Public
router.get("/hpvcdata", listHpvcdata);

//@endpoint     localhost:8000/api/gppdata
//@method       GET
//@access       Public
router.get("/gppdata", listGppdata);

module.exports = router;
