const { Router } = require('express');

const Card = require('./models/Card');

const routes = Router();

//create
routes.post('/create_card', async (req, res) => {
    try {
        const { title, type, description, link, image } = req.body;
        
        const card = await Card.create({ title, type, description, link, image });

        return res.send({ card });
    } catch {
        return res.status(400).send({ error: 'Error creating new card' });
    }
});

//read
routes.get('/', async (req, res) => {
    try {
        const cards = await Card.find();

        return res.send({ cards });
    } catch {
        return res.status(400).send({ error: 'Error loading cards' });
    }
});

//update
routes.put('/:cardId', async (req, res) => {
    try {
        const { title, type, description, link, image } = req.body;

        const card = await Card.findByIdAndUpdate(req.params.cardId, {
            title, type, description, link, image
        }, { new: true });

        return res.send({ card });
    } catch {
        return res.status(400).send({ error: 'Error Updating card' });
    }
});

//delete
routes.delete('/:cardId', async (req, res) => {
    try {
        await Card.findByIdAndDelete(req.params.cardId);

        return res.send();
    } catch {
        return res.status(400).send({ error: 'Error removing card' });
    }
});

module.exports = routes;