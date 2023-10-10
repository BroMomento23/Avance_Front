import Header from "../components/header";
import ConfigurationTextStateenab from "../components/configuration-text-stateenab";
import HorizontalfullWidth from "../components/horizontalfull-width";
import styles from "./frame2.module.css";

const Frame2 = () => {
  return (
    <div className={styles.topAppBarParent}>
      <Header
        headline
        trailingIcon
        containerCursor="pointer"
        containerBorder="none"
        containerPadding="0"
        containerBackgroundColor="transparent"
      />
      <div className={styles.contornomenuadmin} />
      <ConfigurationTextStateenab
        button="Perfil"
        configurationTextStateenaBorderRadius="100px"
        configurationTextStateenaOverflow="hidden"
        configurationTextStateenaDisplay="flex"
        configurationTextStateenaFlexDirection="column"
        configurationTextStateenaAlignItems="center"
        configurationTextStateenaJustifyContent="center"
        configurationTextStateenaPosition="absolute"
        configurationTextStateenaTop="117px"
        configurationTextStateenaLeft="16px"
        labelTextColor="#5a007a"
        configurationTextStateenaCursor="pointer"
        configurationTextStateenaBorder="none"
        configurationTextStateenaPadding="0"
        configurationTextStateenaBackgroundColor="transparent"
        stateLayerBoxSizing="border-box"
        labelTextDisplay="inline-block"
      />
      <ConfigurationTextStateenab
        button="Inicio"
        configurationTextStateenaBorderRadius="100px"
        configurationTextStateenaOverflow="hidden"
        configurationTextStateenaDisplay="flex"
        configurationTextStateenaFlexDirection="column"
        configurationTextStateenaAlignItems="center"
        configurationTextStateenaJustifyContent="center"
        configurationTextStateenaPosition="absolute"
        configurationTextStateenaTop="76px"
        configurationTextStateenaLeft="16px"
        labelTextColor="#5a007a"
        configurationTextStateenaCursor="pointer"
        configurationTextStateenaBorder="none"
        configurationTextStateenaPadding="0"
        configurationTextStateenaBackgroundColor="transparent"
        stateLayerBoxSizing="border-box"
        labelTextDisplay="inline-block"
      />
      <ConfigurationTextStateenab
        button="Bibliotecas"
        configurationTextStateenaBorderRadius="100px"
        configurationTextStateenaOverflow="hidden"
        configurationTextStateenaDisplay="flex"
        configurationTextStateenaFlexDirection="column"
        configurationTextStateenaAlignItems="center"
        configurationTextStateenaJustifyContent="center"
        configurationTextStateenaPosition="absolute"
        configurationTextStateenaTop="157px"
        configurationTextStateenaLeft="17px"
        labelTextColor="#5a007a"
        configurationTextStateenaCursor="pointer"
        configurationTextStateenaBorder="none"
        configurationTextStateenaPadding="0"
        configurationTextStateenaBackgroundColor="transparent"
        stateLayerBoxSizing="border-box"
        labelTextDisplay="inline-block"
      />
      <h3 className={styles.bienvenidoJuan}>Bienvenido, Juan!</h3>
      <div className={styles.ultimasreservasbar} />
      <img
        className={styles.losmaspedidosbarIcon}
        alt=""
        src="/ultimareservabar.svg"
      />
      <div className={styles.ultimasReservas}>Ultimas reservas</div>
      <button className={styles.vertodobutton}>Ver todo</button>
      <div className={styles.losMasPedidos}>Los mas Pedidos</div>
      <div className={styles.ultimareservalibro1} />
      <div
        className={styles.cleanCodeA}
      >{`“Clean Code: A Handbook of Agile Software CaftsmanShip” `}</div>
      <div className={styles.am}>18/09/2023 08:00 am</div>
      <img
        className={styles.imagenperfil1Icon}
        alt=""
        src="/imagenperfil5@2x.png"
      />
      <img
        className={styles.imagenlibro1Icon}
        alt=""
        src="/imagenlibro5@2x.png"
      />
      <div className={styles.losmaspedidos2} />
      <div className={styles.am1}>18/09/2023 08:00 am</div>
      <img
        className={styles.imagenperfil4Icon}
        alt=""
        src="/imagenperfil5@2x.png"
      />
      <img
        className={styles.imagenlibro4Icon}
        alt=""
        src="/imagenlibro5@2x.png"
      />
      <div className={styles.utlimareservalibro2} />
      <div className={styles.am2}>18/09/2023 08:00 am</div>
      <img
        className={styles.imagenperfil2Icon}
        alt=""
        src="/imagenperfil5@2x.png"
      />
      <img
        className={styles.imagenlibro2Icon}
        alt=""
        src="/imagenlibro5@2x.png"
      />
      <div className={styles.losmaspedidos1} />
      <div
        className={styles.cleanCodeA1}
      >{`“Clean Code: A Handbook of Agile Software CaftsmanShip” `}</div>
      <div className={styles.am3}>18/09/2023 08:00 am</div>
      <img
        className={styles.imagenperfil3Icon}
        alt=""
        src="/imagenperfil5@2x.png"
      />
      <img
        className={styles.imagenlibro3Icon}
        alt=""
        src="/imagenlibro5@2x.png"
      />
      <HorizontalfullWidth
        horizontalfullWidthWidth="1170px"
        horizontalfullWidthPosition="absolute"
        horizontalfullWidthTop="117px"
        horizontalfullWidthLeft="232px"
        horizontalfullWidthHeight="0px"
        horizontalfullWidthTransform="unset"
        horizontalfullWidthTransformOrigin="unset"
      />
      <HorizontalfullWidth
        horizontalfullWidthWidth="1191px"
        horizontalfullWidthPosition="absolute"
        horizontalfullWidthTop="137px"
        horizontalfullWidthLeft="1700px"
        horizontalfullWidthHeight="0px"
        horizontalfullWidthTransform=" rotate(-0.1deg)"
        horizontalfullWidthTransformOrigin="0 0"
      />
    </div>
  );
};

export default Frame2;
