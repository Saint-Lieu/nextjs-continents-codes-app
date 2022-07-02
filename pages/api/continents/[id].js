import dbConnect from '../../../utils/dbConnect';
import Continent from '../../../models/Continent';

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const continent = await Continent.findById(id);

                if(!continent) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: continent });
            } catch (error) {
                return res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const continent = await Continent.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if(!continent) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: continent });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deleteContinent = await Continent.deleteOne({ _id: id });

                if(!deleteContinent) {
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, continent});
            } catch (error) {
                res.status(400).json({ success: false })
            }
        default:
            res.status(400).json({ success: false })
            break;
    }
}