const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'Jimbob', lastName: 'Bobjim'},
        {id: 2, firstName: 'Sabribri', lastName: 'daYum'},
        {id: 3, firstName: 'Ian', lastName: 'myDude'},
    ];
    
    res.json(customers);
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
    
const path = require('path');
    
app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './client/build/public/index.html'));
    });


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));