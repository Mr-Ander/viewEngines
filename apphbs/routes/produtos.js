const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('produtos');
});
router.get('/camisetas', (req, res) => {
    const camisetas = [
        { id: 1, nome: 'Camiseta Preta', descrição: 'camiseta preta classica', quantidade: 10, valhorUnitario: 50.00 },
        { id: 2, nome: 'Camiseta Branca', descrição: 'camiseta branca classica', quantidade: 15, valhorUnitario: 45.00 },
        { id: 3, nome: 'Camiseta Vermelha', descrição: 'camiseta vermelha classica', quantidade: 5, valhorUnitario: 55.00 },
        { id: 4, nome: 'Camiseta Azul', descrição: 'camiseta azul classica', quantidade: 8, valhorUnitario: 60.00 },
    ];
    res.render('camisetas', { camisetas });
});

module.exports = router;
