import Delivery from '../models/Delivery';

class StartDeliveryController {
  async store(req, res) {
    const date = new Date();
    const delivery = await Delivery.findByPk(req.param.id);

    const deliveryUpdatted = await delivery.update({ start_date: date });
    return res.json(deliveryUpdatted);
  }
}
export default new StartDeliveryController();
