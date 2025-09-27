import { Router } from "express";
// import {
//   bookingInit,
//   getShopSlots,
//   createBooking,
// } from "../controllers/public.controller";
import { validateRequest } from "../middlewares/validateRequest";

const router = Router();

// // Booking Init (shop + services + employees + slots)
// router.get("/:ownerID/:shopID/booking-init",);

// // Slots only (when switching employee/service/date)
// router.get("/:ownerID/:shopID/slots", );

// // Create booking
// router.post("/:ownerID/:shopID/new-booking", );

export default router;
