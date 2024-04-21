const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('sua_conexao_com_o_MongoDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

const Service = mongoose.model('Service', {
  image: String,
  description: String,
  value: String,
  unit: String
});

app.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    const cardsHTML = services.map(service => `
      <div class="card">
        <img src="../img/${service.image}" alt="${service.description}" class="card-img">
        <div class="card-info">
          <p class="card-code">${service.id}</p>
          <h2 class="card-name">${service.description}</h2>
          <p class="card-value">R$ ${service.value} ${service.unit}</p>
        </div>
      </div>
    `).join('');

    const html = `<div class="container">${cardsHTML}</div>`;
    res.send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar serviços');
  }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));


app.post('/add-service', async (req, res) => {
    try {
      const { image, description, value, unit } = req.body;
      const service = new Service({ image, description, value, unit });
      await service.save();
      res.redirect('/');
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao adicionar serviço');
    }
  });
  