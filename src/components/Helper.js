

export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;

    //si el restante es menor al 25% del presupuesto
    if( ( presupuesto / 4)> restante ){
        clase= 'alert alert-danger';

    //si el restante es menor al 50% del presupuesto
    }else if ( (presupuesto/2) > restante){
        clase = 'alert alert-warning';
    }else{
        clase= 'alert alert-success';
    }
    return clase;
}