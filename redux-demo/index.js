const CAKE_ORDERED = 'CAKE_ORDERED'

// action creator orderCake
function orderCake(){
    return {
        type: CAKE_ORDERED,
        quantity: 1,
    }
}