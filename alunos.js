const express = require('express');
const router = express.Router();
const mysql = require('./mysql').pool;

// Retorna todos os alunos
router.get('/', (req, res, next) => {
	mysql.getConnection((error, conn) => {
		if (error){return res.status(500).send({error:error})}
			conn.query(
				'SELECT * FROM tbl_alunos;',
				(error, resultado, fields) => {
					if (error){return res.status(500).send({error:error})}
					res.render("index", { result: resultado });
				}
			)
	});
});

// Cadastra um aluno
router.post('/', (req, res, next) => {
	mysql.getConnection((error, conn) => {
		if (error){return res.status(500).send({error:error})}
		conn.query(
			'INSERT INTO tbl_alunos (nome, horario_escolar) VALUES (?,?)',
			[req.body.nome, req.body.horario_escolar],
			(error, resultado, field) => {
				conn.release();
				if (error){return res.status(500).send({error:error})}
				// Fica na mesma página
				res.status(204).send();

			}
		)
	});
	
});

module.exports = router; 