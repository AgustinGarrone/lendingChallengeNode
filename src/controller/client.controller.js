import { Client } from "../models/client.js";




export const saveClient = async (req, res) => {
    try {
        const {name, lastname } = req.body;
        const client = await new Client({name , lastname  }).save();
        return res.status(200).json(client)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const getClient = async (req, res) => {
    try {
        const clientId = req.params.clientId;
        const client = await Client.findById(clientId).lean();

        if (!client) {
            return res.status(404).json({ error: 'Cliente no encontrado.' });
        }

        return res.status(200).json(client);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};
