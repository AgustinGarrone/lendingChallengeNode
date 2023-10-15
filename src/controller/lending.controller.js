import { Client } from "../models/client.js";
import { Lending } from "../models/lending.js";



export const createLending = async (req, res) => {
    try {
        const { clientId, lendingAmount } = req.body;
        
        const client = await Client.findById(clientId);
        if (!client) {
            return res.status(404).json({ error: 'Cliente no encontrado.' });
        }
        const lending = new Lending({
            clientId,
            lendingAmount,
        });
        const savedLending = await lending.save();
        return res.status(200).json(savedLending);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al crear el préstamo', message: error.message });
    }
};

export const getActiveLendings = async (req, res) => {
    try {
        const currentDate = new Date();

        // Consulta para obtener prestamos activos.
        const activeLendings = await Lending.find({
            isPaid: false, 
            deadline: { $gte: currentDate } 
        }).populate('clientId'); 

        return res.json(activeLendings);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener préstamos activos.', message: error.message  });
    }
};

export const markLendingAsPaid = async (req, res) => {
    const lendingId = req.params.id; 

    try {
        const lending = await Lending.findById(lendingId);
        const client = await Client.findById(lending.clientId)
        if (!lending) {
            return res.status(404).json({ error: 'Préstamo no encontrado.' });
        }

        lending.isPaid = true;
        await lending.save();

        const interestTotal = lending.interestRate * lending.lendingAmount;
        const message = `Cobro registrado a cliente: ${client.name} por el préstamo con ID ${lendingId}. El interés de ${interestTotal} ha sido añadido.`;

        return res.status(200).json({ message });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al marcar el préstamo como pagado.', message: error.message  });
    }
};