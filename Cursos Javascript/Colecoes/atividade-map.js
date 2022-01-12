function getAdmins(funcionarios) {
    const admins = [];
    for ([key, value] of funcionarios) {
        if (value === 'Administrador') {
            admins.push(key);
        } 
    }
    return admins;
}

const funcionarios = new Map();
funcionarios.set('Fernando', 'Atendente');
funcionarios.set('Carla', 'Administrador');
funcionarios.set('Maria', 'Presidente');
funcionarios.set('Paulo', 'Estagiário');
funcionarios.set('Guilherme', 'Administrador');
funcionarios.set('Denise', 'Administrador');

console.log(getAdmins(funcionarios));