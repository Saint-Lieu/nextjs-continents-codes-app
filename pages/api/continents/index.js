import dbConnect from '../../../utils/dbConnect';
import Continent from '../../../models/Continent';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const continents = await Continent.find({});

                res.status(200).json({ success: true, data: continents })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const continent = await Continent.create(req.body);

                res.status(201).json({ success: true, data: continent })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default: 
        res.status(400).json({ success: false });
        break;
    }   
}