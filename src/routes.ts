import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/authToken/useCases/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/authToken/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/client/useCases/createClient/CreateClientController";
import { ListAllDeliveriesController } from "./modules/client/useCases/listAllDeliveries/ListAllDeliveriesController";
import { CreateDeliveriesController } from "./modules/deliveries/useCases/createDeliveries/CreateDeliveriesController";
import { FindAvailableController } from "./modules/deliveries/useCases/findAvailable/FindAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/UpdateEndDateController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliveryController";
import { ListAllController } from "./modules/deliveryman/useCases/listAll/ListAllController";



const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliveriesController = new CreateDeliveriesController();
const findAvailableController = new FindAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const listAllDeliveriesController = new ListAllDeliveriesController()
const listAllController = new ListAllController()
const updateEndDateController = new UpdateEndDateController()


const routes = Router();

// AUTHENTICATED
routes.post('/client/authenticate', authenticateClientController.handle)
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle)

// CLIENTS
routes.post('/clients', createClientController.handle)
routes.get('/clients/deliveries',ensureAuthenticateClient, listAllDeliveriesController.handle)


// DELIVERYMAN
routes.post('/deliveryman', createDeliverymanController.handle)
routes.get('/deliveryman',ensureAuthenticateDeliveryman, listAllController.handle)


// DELIVERIES
routes.get('/deliveries/available',ensureAuthenticateDeliveryman, findAvailableController.handle)
routes.post('/deliveries',ensureAuthenticateClient, createDeliveriesController.handle)
routes.put('/deliveries/updateDeliveryman/:id',ensureAuthenticateDeliveryman ,updateDeliverymanController.handle)
routes.put('/deliveries/updateEndDate/:id', ensureAuthenticateDeliveryman, updateEndDateController.handle)



export { routes }