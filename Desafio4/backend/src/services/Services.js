const dataSource = require('../models');



class Services{
    constructor(modelName){
        this.model = modelName;
    }

    async listAll(){
        return dataSource[this.model].findALL();
    }
}



module.exports = Services;