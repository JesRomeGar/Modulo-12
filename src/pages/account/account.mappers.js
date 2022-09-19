/*Como en el servidor el alias de cada cuenta viene como name,
necesito un mapper para transformar este valor en el lado del cliente */
export const mapAccountFromApiToViewModel = account => {
    return {
        id: account.id,
        type: account.type,
        alias: account.name,
    };
};


/*Tambien necesitamos un mapper que mapee de view model a api para cuando quiero enviar informacion al servidor
(por ejemplo al seleccionar si quiero una cuenta nueva o editar una ya existente) */

export const mapAccountFromViewModelToApi = account => {
    return {
        id: account.id,
        type: account.type,
        name: account.alias,
    };
};

