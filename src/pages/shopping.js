import Product from "../components/product";

export function getStaticProps(context) {
    return {
        props: {
            name: "Francesco"
        }
    }
}

export default function ShoppingList(props) {
    const list = [

        {
            name: "Monopoly",
            description: `
Il Monopoly è un classico gioco da tavolo creato da Elizabeth Magie all'inizio del XX secolo. Una versione modificata da Charles Darrow fu pubblicata dalla Parker Brothers nel 1935.

In Italia fu pubblicato, a partire dal 1936, col nome “Monòpoli”[3][4] dalla Editrice Giochi. Nell'estate del 2009, la distribuzione italiana divenne di proprietà della Hasbro, che introdusse il nome originale.

Il gioco prende il suo nome dal concetto economico di monopolio, ovvero il dominio del mercato da parte di un singolo venditore. Concesso in licenza in più di cento Paesi e tradotto in oltre trentasette lingue, secondo un report della Hasbro il Monopoly, dalla sua prima edizione, è stato giocato da circa 750 milioni di persone.[5] Il Guinness dei primati ha ripreso nel 1999 la precedente statistica della Hasbro, per cui sarebbe stato giocato da 500 milioni di persone.[6] Benché non sia esplicitamente dichiarato, è da considerare che le cifre si riferiscano al primato per il più grande numero di persone che giochino ad un gioco da tavolo protetto da copyright, escludendo quindi giochi tradizionali come scacchi, go, i mancala ed altri.     
`,
            price: 20.93,
            image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81RIFABQRRL.__AC_SX300_SY300_QL70_ML2_.jpg"
        },
        {
            name: "Dungeons & Dragons",
            description: `
            Dungeons & Dragons (abbreviato come D&D[2] o DnD) è un gioco di ruolo fantasy creato da Gary Gygax e Dave Arneson, pubblicato per la prima volta nel gennaio 1974 dalla Tactical Studies Rules (TSR), azienda fondata da Gygax poi trasformata nella TSR Hobbies la quale fu acquisita nel 1997 dalla Wizards of the Coast, assieme a tutti i diritti su D&D; due anni più tardi, la stessa Wizards fu acquistata dalla Hasbro. In parte grazie anche a un'intensa attività di marketing, i prodotti marchiati Dungeons & Dragons hanno costituito oltre il 50% del mercato dei giochi di ruolo venduti nel 2002.[3]

            D&D, che ha fornito lo spunto alla nascita di tutto il filone editoriale legato ai giochi di ruolo, è tra questi il più diffuso e conosciuto, con una stima di circa 20 milioni di giocatori, traduzioni in molte lingue e oltre 1 miliardo di dollari di vendite di manuali e accessori fino al 2004.[4] Come per altri giochi di ruolo prodotti nei primi anni di diffusione di questo genere editoriale ha un nome che contiene un'allitterazione nella doppia "D" di Dungeons & Dragons.`,
            price: 119.92,
            image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91c-h1thhLL._AC_SL1500_.jpg"
        },
    ];
    return (
        <div className="shopping-list">
            <h1>Lista della spesa per {props.name}</h1>
            <div className="row">
                {list.map((product, index) => (<Product key={"product_" + index} {...product} />))}
            </div>
        </div>
    );
}