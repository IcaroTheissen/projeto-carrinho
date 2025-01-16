
export function Cart(){
    return(
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

            <section className="flex items-center justify-between border-b-2 border-gray-300">
                <img
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR_lGD8EkIUTWDt-6lOJaWEQARTTo_T3ohYLJkGsnW1npzAzK-uAcrNVQEFKwguX1-jKahffgi-QvR6FwZi7_Giux7berP1XUTrWeHEcG2_r9S8QXmWAhND1SkXRcVhE2Ue9153UMY&usqp=CAc"
                alt="logo AirPods Pro"
                className="w-28"
                />

                <strong>
                    Preço: R$1.000,00
                </strong>

                <div className="flex items-center justify-center gap-2">
                    <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                        -
                    </button>
                    2
                    <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                        +
                    </button>
                </div>

                <strong className="float-right">
                    SubTotal R$1.000,00
                </strong>                


            </section>

            <p className="font-bold mt-4">TOTAL: R$1.000,00</p>
        </div>
    )
}