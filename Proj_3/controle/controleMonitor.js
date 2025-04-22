const Monitor = require('../modelo/monitor');
const menuMonitor = require('../interface/interfaceMonitor')

class ControleMonitor {
    constructor(monitor) {
        this.monitor = monitor;
    }

    cadastrarPlantao(data, hora, local) {
        const novoPlantao = {
            data: data,
            hora: hora,
            local: local,
            atividades: []
        };
        this.monitor.plantoes.push(novoPlantao);
        return novoPlantao;
    }

    excluirPlantao(index) {
        if (index >= 0 && index < this.monitor.plantoes.length) {
            return this.monitor.plantoes.splice(index, 1)[0];
        }
        return null;
    }

    registrarAtividade(plantaoIndex, descricao) {
        if (plantaoIndex >= 0 && plantaoIndex < this.monitor.plantoes.length) {
            const atividade = {
                descricao: descricao,
                dataRegistro: new Date().toLocaleDateString()
            };
            this.monitor.plantoes[plantaoIndex].atividades.push(atividade);
            return atividade;
        }
        return null;
    }

    verHistorico() {
        return this.monitor.plantoes;
    }
}

module.exports = ControleMonitor;