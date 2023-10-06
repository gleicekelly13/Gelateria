import React from "react";
import Topo from "../../componentes/Topo";

export default function Home () {
    return (
        <div>
            <Topo/>

            <main>
                <section className="secao-banner">
                    <div>
                        <h1>SORVETE ARTESANAL</h1>
                    </div>
                </section>

                <section className="secao-sabores">
                    <img src="./assets/banner-sabores.jpg" alt="image-sabores"/>
                    <div>
                        <h2>Nossos produtos</h2>
                        <span>Novos e deliciosos!</span>
                        <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                    </div>
                </section>

                <section>

                </section>

                <section>

                </section>
            </main>
        </div>
    );
}