const mapMovementFromApiToViewModel =
    (movement) => {
        return {
            transaction: new Date(movement.transaction).toLocaleDateString(),
            realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
            description: movement.description,
            amount: `${movement.amount} €`,
            balance: `${movement.balance} €`,
        };
};



export const mapMovementListFromApiToViewModel = (movementList) => {
    return movementList.map(movement =>
        mapMovementFromApiToViewModel(movement));
};

export const mapAccountFromApiToViewModel = (account) => {
    return {
        alias: account.name,
        balance: `${account.balance} €`,
        iban: account.iban
    }
}