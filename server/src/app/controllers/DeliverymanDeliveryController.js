import { Op } from 'sequelize';
import Delivery from '../models/Delivery';

class DeliverymanDelivery {
  async index(req, res) {
    const deliveries = await Delivery.findAll({
      where: {
        deliveryman_id: req.params.id,
        canceled_at: { [Op.is]: null },
        end_date: { [Op.is]: null },
      },
    });

    return res.json(deliveries);
  }
}

export default new DeliverymanDelivery();
