const mysql = require('mysql');
const funkcije = require('./funkcije');

var obrisiKorisnika = {
    brisanje: function(req, res, next) {
        const { id } = req.body;

        if (!id) {
            return res.status(400).send({ error: 'User ID is required' });
        }

        let query = 'DELETE FROM korisnici WHERE id = ?';
        let table = [id];
        query = mysql.format(query, table);

        funkcije.mysql_query(query, function(result, error) {
            if (error) {
                console.error("Failed to delete user:", error);
                return res.status(500).send({ error: 'Failed to delete user' });
            }

            if (result.data.affectedRows === 0) {
                return res.status(404).send({ error: 'User not found' });
            }
            res.send({
                success: true,
                message: "User deleted successfully"
            });
        });
    }
};

module.exports = obrisiKorisnika;
