import Link from "next/link";

const HuAboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/technology/summitintro.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Együtt a közösségekért!</h3>
              {/* <div className="line">
                <span />
              </div> */}
            </div>
            <div className="desc">
             <p>
Hisszük, hogy egyetlen veszélyeztetett családnak vagy egyénnek sem szabadna egyedül éreznie magát. Megyénkben a társadalmi kihívások összefonódnak: a szegénység, az oktatáshoz való hozzáférés hiánya és a korlátozott egészségügyi ellátás mindenkit érint a közösségben. Ezért avatkozunk be ott, ahol a legnagyobb a szükség, és építünk egy támogató hálózatot, amely a közösség minden szegletébe elér.
</p>
<p>
Küldetésünk világos: azonosítjuk és támogatjuk a veszélyeztetett egyéneket, növeljük az oktatáshoz és egészségügyi ellátáshoz való hozzáférést, és aktivizáljuk a közösségeket önkéntességen és felelősségvállaláson keresztül. Minden tettünk közvetlen és valós hatással bír, és együtt képesek vagyunk életeket változtatni.
</p>
<p>
A szolidaritás nem luxus, hanem alapvető szükséglet. A hatóságokkal, civil szervezetekkel és a magánszektorral kötött partnerségeken keresztül biztosítjuk, hogy minden kezdeményezés hatékony és fenntartható legyen, és a juttatások pontosan oda érjenek, ahol szükség van rájuk.
</p>

            </div>
          </div>
        </div>
        {/* !About Item #1 */}
        {/* About Item #2 */}
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/technology/galaplace.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Támogatás és tevékenységek</h3>
            </div>
            <div className="desc">
              <p>
Programokon és tevékenységeken keresztül avatkozunk be, amelyek a veszélyeztetett közösségek sürgető szükségleteire fókuszálnak. Kiemelt területeink az oktatás, az egészségügy és a szociális támogatás, valamint az alapvető életkörülmények: lakhatás, higiénia és alapvető közművek. Minden kezdeményezés célja kézzelfogható eredmények elérése, és annak elősegítése, hogy az emberek visszanyerjék önbizalmukat és reményüket.
</p>
<p>
Tevékenységeinket a helyi szükségletekhez igazítjuk. A közösségi vezetőkkel, tanárokkal és szociális munkásokkal való együttműködés révén korán azonosítjuk a problémákat, és gyorsan beavatkozunk, mielőtt a helyzetek súlyosbodnának.
</p>
<p>
Egy rugalmas és ismételhető helyi támogató hálózat kiépítésén dolgozunk, amely a közösség számára referencia ponttá válhat, és más hasonló kezdeményezések számára is inspirációt nyújt.
</p>
                 
             
      
            </div>
          </div>
        </div>
        {/* !About Item #2 */}
              {/* About Item #3 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/technology/reach.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">A változás része</h3>
            </div>
            <div className="desc">
             <p>
Az önkéntesség a RUA egyesület szíve. Mindenki, aki részt vesz, a rászorulók támogatásának pillérévé válik. Hozzájárulhat oktatási foglalkozásokon, szociális tevékenységeken, közvetlen családtámogatáson keresztül, vagy események szervezésével, amelyek összehozzák a közösséget.
</p>
<p>
Az önkéntes részvétel nemcsak segít, hanem inspirál is. Közös erőfeszítéssel erős helyi hálózatot építünk, amely képes a problémák korai azonosítására és gyors reagálásra. Minden segítségnyújtás hidat képez az emberek között, és átalakítja azok életét, akiknek a legnagyobb szükségük van rá.
</p>
<p>
Meghívjuk, hogy csatlakozzon kezdeményezéseinkhez. Minden eltöltött órája, minden mosolya és minden rendelkezésre bocsátott erőforrás hozzájárul egy biztonságosabb, összetartóbb és empatikusabb közösség építéséhez. Együtt változást hozhatunk!
</p>
            </div>
          </div>
        </div>
        {/* !About Item #3 */}
      </div>
    </section>
  );
};
export default HuAboutComponent;
