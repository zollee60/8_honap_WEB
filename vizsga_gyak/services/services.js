const getConnection = require("./dbConnection");

const service = {
    
    getFoglalkozasok: async () => {
        const dbConn = await getConnection();
        const [rows, fields] = await dbConn.execute("SELECT * FROM foglalkozasok");
        return {rows: rows, fields: fields}
    },

    getMegyeDataAll: async () => {
        const dbConn = await getConnection();
        const [rows, fields] = await dbConn.execute("SELECT megyek.megyekod, megyenev, lakosszam, regiokod FROM megyek INNER JOIN lakosok ON megyek.megyekod = lakosok.megyekod")
        return {rows: rows, fields: fields}
    },

    getRegioAll: async () => {
        const dbConn = await getConnection();
        const [rows, fields] = await dbConn.execute("SELECT * FROM regiok")
        return {rows: rows, fields: fields}
    },

    getRegioFiltered:  async (rkod) => {
        const dbConn = await getConnection();
        const [rows, fields] = await dbConn.execute("SELECT megyek.megyekod, megyenev, lakosszam, regiokod FROM megyek INNER JOIN lakosok ON megyek.megyekod = lakosok.megyekod WHERE regiokod = ?", [rkod])
        return {rows: rows, fields: fields}
    },

    addRegion: async (rdata) => {
        const dbConn = await getConnection();
        const [rows, fields] = await dbConn.execute("INSERT INTO regiok (regiokod, regionev) VALUES (?,?)",[rdata.kod,rdata.nev]);
        console.log(rows);
        if(rows.affectedRows === 1) return true;
        else return false;
    }
}

module.exports = service;