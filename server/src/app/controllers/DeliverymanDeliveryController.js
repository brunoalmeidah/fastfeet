import { Op } from 'sequelize';
import Delivery from '../models/Delivery';

class DeliverymanDelivery {
  async index(req, res) {
    const deliveries = await Delivery.findAll({
      where: {
        deliveryman_id: req.params.id,
        canceled_at: { [Op.is]: null },
        end_date:
          req.query.delivered === 'true'
            ? { [Op.not]: null }
            : { [Op.is]: null },
      },
    });

    return res.json(deliveries);
  }

  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    const file = await File.create({ name, path });
    return res.json(file);
  }

  async update(req, res) {
    const date = new Date();
    const delivery = await Delivery.findByPk(req.param.id);

    const deliveryUpdatted = await delivery.update({ start_date: date });
    return res.json(deliveryUpdatted);
  }
}

export default new DeliverymanDelivery();
