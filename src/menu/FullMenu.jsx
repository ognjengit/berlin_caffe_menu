import { useState, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

import { SubHeading, MenuItem, } from '../components'




import {  data, images  } from '../constants';


import './FullMenu.css';



const FullMenu = () => {

 

    const [drink, setDrink] = useState("selectDrink");
    const [defaultDrinkVisible, setDefaultDrinkVisible] = useState(false);
    const [bezAlkoholnaPicaVisible, setBezAlkoholnaPicaVisible] = useState(false);
    const [wineVisible, setWineVisible] = useState(false);
    const [dorucakDnevnaKuvanaJelaVisible, setDorucakDnevnaKuvanaJelaVisible] = useState(false);
    const [ribaPotaziVisible, setRibaPotaziVisible] = useState(false);
    const [rostiljSalateVisible, setRostiljSalateVisible] = useState(false);
    const [alkoholnaPicaVisible, setAlkoholnaPicaVisible] = useState(false);
    const [dezertVisible, setDezertVisible] = useState(false);



    useEffect(() => {
        drink === "selectDrink" ? setDefaultDrinkVisible(true) : setDefaultDrinkVisible(false);
        drink === "Bezalkoholna pića" ? setBezAlkoholnaPicaVisible(true) : setBezAlkoholnaPicaVisible(false);
        drink === "Kuća vina" ? setWineVisible(true) : setWineVisible(false);
        drink === "Doručak i dnevna kuvana jela" ? setDorucakDnevnaKuvanaJelaVisible(true) : setDorucakDnevnaKuvanaJelaVisible(false);
        drink === "Riblji specijaliteti čorbe i potaži" ? setRibaPotaziVisible(true) : setRibaPotaziVisible(false);
        drink === "Jela sa roštilja i salate" ? setRostiljSalateVisible(true) : setRostiljSalateVisible(false);
        drink === "Alkoholna pića" ? setAlkoholnaPicaVisible(true) : setAlkoholnaPicaVisible(false);
        drink === "Dezerti" ? setDezertVisible(true) : setDezertVisible(false);
    }, [drink]);

    const handleOnChange = (e) => {
        setDrink(e.target.value)
    }

    const makeFirstLetterCaptial = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const renderResult = () => {
        let result;
        drink === "selectDrink"
            ? (result = "izaberite kategoriju iz menija")
            : (result = makeFirstLetterCaptial(drink));
        return result;
    };




    return (

        <>


            <div className="app__specialMenu flex__center section__padding" id="menu">
                    

                <div className="app__specialMenu-title">
                    <SubHeading title="Iz padajuće liste izaberite kategoriju pića" />

                    <div className="custom-select">
                        <select className="form-select" value={drink} onChange={handleOnChange} >
                            <option value="selectDrink">Izaberite iz menija</option>

                            <option value="Doručak i dnevna kuvana jela">Doručak i dnevna kuvana jela</option>
                            <option value="Jela sa roštilja i salate">Jela sa roštilja i salate</option>
                            <option value="Riblji specijaliteti čorbe i potaži">Riblji specijaliteti čorbe i potaži</option>
                            <option value="Bezalkoholna pića">Bezalkoholna pića</option>
                            <option value="Alkoholna pića">Alkoholna pića</option>
                            <option value="Kuća vina">Kuća vina</option>
                            <option value="Dezerti">Dezerti</option>
                        </select>
                    </div>

                    <h1 className="headtext__cormorant customh1"> {renderResult()}</h1>
                </div>

                <div className="app__specialMenu-menu">

                    <div className="app__specialMenu-menu_wine flex__center">



                        <div className="app__specialMenu_menu_items">

                            {dezertVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">DEZERT</p>}
                            {dezertVisible && data.dezerti.map((dezerti, index) => (
                                <MenuItem key={dezerti.title + index} title={dezerti.title} price={dezerti.price} tags={dezerti.tags} />
                            ))}

                            {defaultDrinkVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">KUĆA VINA/HOUSE OF WINE</p>}
                            {defaultDrinkVisible && data.wines_of_house.map((wine, index) => (
                                <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
                            ))}

                            {defaultDrinkVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">KUĆA VINA/HOUSE OF WINE</p>}
                            {defaultDrinkVisible && data.wines_of_house.map((wine, index) => (
                                <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
                            ))}


                            {rostiljSalateVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">JELA SA ROŠTILJA</p>}
                            {rostiljSalateVisible && data.jela_sa_rostilja.map((rostij, index) => (
                                <MenuItem key={rostij.title + index} title={rostij.title} price={rostij.price} tags={rostij.tags} />
                            ))}


                            {dorucakDnevnaKuvanaJelaVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">DORUČAK</p>}
                            {dorucakDnevnaKuvanaJelaVisible && data.dorucak.map((dorucak, index) => (
                                <MenuItem key={dorucak.title + index} title={dorucak.title} price={dorucak.price} tags={dorucak.tags} />
                            ))}


                            {bezAlkoholnaPicaVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p"> ENERGTSKA PIĆA </p>}
                            {bezAlkoholnaPicaVisible && data.energetska_pica.map((energija, index) => (
                                <MenuItem key={energija.title + index} title={energija.title} price={energija.price} tags={energija.tags} />
                            ))}



                            {bezAlkoholnaPicaVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p"> VODE </p>}
                            {bezAlkoholnaPicaVisible && data.vode.map((vode, index) => (
                                <MenuItem key={vode.title + index} title={vode.title} price={vode.price} tags={vode.tags} />
                            ))}

                            {ribaPotaziVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">ČORBE/POTAŽI</p>}
                            {ribaPotaziVisible && data.corbe_potazi.map((corbe_potazi, index) => (
                                <MenuItem key={corbe_potazi.title + index} title={corbe_potazi.title} price={corbe_potazi.price} tags={corbe_potazi.tags} />
                            ))}


                            {bezAlkoholnaPicaVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading">TOPLI NAPICI</p>}
                            {bezAlkoholnaPicaVisible && data.topli_napici.map((topli_napici, index) => (
                                <MenuItem key={topli_napici.title + index} title={topli_napici.title} price={topli_napici.price} tags={topli_napici.tags} />
                            ))}

                            {wineVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading">KUĆA VINA</p>}
                            {wineVisible && data.wines_of_house.map((wine, index) => (
                                <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
                            ))}


                            {wineVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading">ČAŠA VINA/GLASS OF WINE</p>}
                            {wineVisible && data.glass_wines.map((wine, index) => (
                                <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
                            ))}

                            {alkoholnaPicaVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading">RAKIJE ZLATNA DOLINA</p>}
                            {alkoholnaPicaVisible && data.rakije_zlatna_dolina.map((rakije, index) => (
                                <MenuItem key={rakije.title + index} title={rakije.title} price={rakije.price} tags={rakije.tags} />
                            ))}

                            {alkoholnaPicaVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading">PIVO / BEER</p>}
                            {alkoholnaPicaVisible && data.piva.map((pivo, index) => (
                                <MenuItem key={pivo.title + index} title={pivo.title} price={pivo.price} tags={pivo.tags} />
                            ))}

                            {alkoholnaPicaVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading">VODKA/TEKILA/GIN/RUM</p>}
                            {alkoholnaPicaVisible && data.vodka_tekila_rum_gin.map((vodka_tekila_rum_gin, index) => (
                                <MenuItem key={vodka_tekila_rum_gin.title + index} title={vodka_tekila_rum_gin.title} price={vodka_tekila_rum_gin.price} tags={vodka_tekila_rum_gin.tags} />
                            ))}

                            {alkoholnaPicaVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading">COCTAILS/KOKTELI</p>}
                            {alkoholnaPicaVisible && data.coctails.map((coctails, index) => (
                                <MenuItem key={coctails.title + index} title={coctails.title} price={coctails.price} tags={coctails.tags} />
                            ))}



                        </div>












                    </div>




                    <div className="app__specialMenu-menu_img">
                        {/* {defaultDrinkVisible && <img src={images.wine} alt="wine img" />} */}


                    </div>




                    <div className="app__specialMenu-menu_cocktails flex__center">


                        <div className="app__specialMenu_menu_items">



                            {bezAlkoholnaPicaVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">GAZIRANI SOKOVI</p>}
                            {bezAlkoholnaPicaVisible && data.gazirana_pica.map((sokovi_gazirani, index) => (
                                <MenuItem key={sokovi_gazirani.title + index} title={sokovi_gazirani.title} price={sokovi_gazirani.price} tags={sokovi_gazirani.tags} />
                            ))}

                            {dorucakDnevnaKuvanaJelaVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">DNEVNA KUVANA JELA</p>}
                            {dorucakDnevnaKuvanaJelaVisible && data.dnevna_kuvana_jela.map((kuvano, index) => (
                                <MenuItem key={kuvano.title + index} title={kuvano.title} price={kuvano.price} tags={kuvano.tags} />
                            ))}

                            {defaultDrinkVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">ČAŠA VINA/GLASS OF WINE</p>}
                            {defaultDrinkVisible && data.glass_wines.map((wine, index) => (
                                <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
                            ))}



                            {rostiljSalateVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">SALATE/SALADS</p>}
                            {rostiljSalateVisible && data.salate.map((salate, index) => (
                                <MenuItem key={salate.title + index} title={salate.title} price={salate.price} tags={salate.tags} />
                            ))}

                            {ribaPotaziVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">RIBA/FISH</p>}
                            {ribaPotaziVisible && data.jela_od_ribe.map((jela_od_ribe, index) => (
                                <MenuItem key={jela_od_ribe.title + index} title={jela_od_ribe.title} price={jela_od_ribe.price} tags={jela_od_ribe.tags} />
                            ))}


                            {wineVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading">CRVENO VINO/RED WINES</p>}
                            {wineVisible && data.red_wines.map((wine, index) => (
                                <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
                            ))}

                            {wineVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading ">BELO VINO/WHITE WINES</p>}
                            {wineVisible && data.white_wines.map((wine, index) => (
                                <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
                            ))}



                            {bezAlkoholnaPicaVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading">PRIRODNI SOKOVI</p>}
                            {bezAlkoholnaPicaVisible && data.prirodni_sokovi.map((prirodni_sokovi, index) => (
                                <MenuItem key={prirodni_sokovi.title + index} title={prirodni_sokovi.title} price={prirodni_sokovi.price} tags={prirodni_sokovi.tags} />
                            ))}

                            {alkoholnaPicaVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading">RAKIJE OD SOKOLOVA</p>}
                            {alkoholnaPicaVisible && data.rakije_sokolova.map((rakije, index) => (
                                <MenuItem key={rakije.title + index} title={rakije.title} price={rakije.price} tags={rakije.tags} />
                            ))}

                            {alkoholnaPicaVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading">LIKERI</p>}
                            {alkoholnaPicaVisible && data.likeri.map((likeri, index) => (
                                <MenuItem key={likeri.title + index} title={likeri.title} price={likeri.price} tags={likeri.tags} />
                            ))}

                            {alkoholnaPicaVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading">WHISKEY/VISKI</p>}
                            {alkoholnaPicaVisible && data.viski.map((viski, index) => (
                                <MenuItem key={viski.title + index} title={viski.title} price={viski.price} tags={viski.tags} />
                            ))}



                        </div>








                        {/* <p className="app__specialMenu-menu_heading">Rakije Sokolova</p>
                    <div className="app__specialMenu_menu_items">
                        {data.rakije_sokolova.map((cocktail, index) => (
                            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
                        ))}
                    </div>

                    <p className="app__specialMenu-menu_heading">Rakije Zlatna Dolina</p>
                    <div className="app__specialMenu_menu_items">
                        {data.rakije_zlatna_dolina.map((cocktail, index) => (
                            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
                        ))}
                    </div> */}

                    </div>





                </div>

                <div >




                </div>

            </div>

            
        </>


    );
};
export default FullMenu;