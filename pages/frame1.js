import Header from "../components/header";
import ConfigurationstandardState from "../components/configurationstandard-state";
import ConfigurationTextStateenab from "../components/configuration-text-stateenab";
import HorizontalfullWidth from "../components/horizontalfull-width";
import styles from "./frame1.module.css";

const Frame1 = () => {
  return (
    <div className={styles.topAppBarParent}>
      <Header headline={false} trailingIcon={false} />
      <ConfigurationstandardState
        iconCode="/iconsaccount-circle-filled-24px.svg"
        configurationstandardStatWidth="72px"
        configurationstandardStatCursor="pointer"
        configurationstandardStatBorder="none"
        configurationstandardStatPadding="0"
        configurationstandardStatBackgroundColor="transparent"
        configurationstandardStatPosition="absolute"
        configurationstandardStatTop="4px"
        configurationstandardStatRight="0px"
      />
      <div className={styles.tablamenualum} />
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
        configurationTextStateenaTop="75px"
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
        button="Préstamos"
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
      <img
        className={styles.ultimareservabarIcon}
        alt=""
        src="/ultimareservabar.svg"
      />
      <div className={styles.proximoavencerbar} />
      <div className={styles.ultimasReservas}>Ultimas reservas</div>
      <div className={styles.proximosAVencer}>Proximos a vencer</div>
      <div className={styles.ultimasreservasalum1} />
      <div
        className={styles.cleanCodeA}
      >{`“Clean Code: A Handbook of Agile Software CaftsmanShip” `}</div>
      <div className={styles.am}>18/09/2023 08:00 am</div>
      <img
        className={styles.imagenperfil5Icon}
        alt=""
        src="/imagenperfil5@2x.png"
      />
      <img
        className={styles.imagenlibro5Icon}
        alt=""
        src="/imagenlibro5@2x.png"
      />
      <div className={styles.proximoavencerlibro1} />
      <div
        className={styles.cleanCodeA1}
      >{`“Clean Code: A Handbook of Agile Software CaftsmanShip” `}</div>
      <div className={styles.am1}>18/09/2023 08:00 am</div>
      <img
        className={styles.imagenperfil7Icon}
        alt=""
        src="/imagenperfil5@2x.png"
      />
      <img
        className={styles.imagenlibro7Icon}
        alt=""
        src="/imagenlibro5@2x.png"
      />
      <div className={styles.ultimasreservasalum2} />
      <div className={styles.am2}>18/09/2023 08:00 am</div>
      <img
        className={styles.imagenperfil6Icon}
        alt=""
        src="/imagenperfil5@2x.png"
      />
      <img
        className={styles.imagenlibro6Icon}
        alt=""
        src="/imagenlibro5@2x.png"
      />
      <div className={styles.proximoavencerlibro2} />
      <div className={styles.am3}>18/09/2023 08:00 am</div>
      <img
        className={styles.imagenperfil8Icon}
        alt=""
        src="/imagenperfil5@2x.png"
      />
      <img
        className={styles.imagenlibro8Icon}
        alt=""
        src="/imagenlibro5@2x.png"
      />
      <h3 className={styles.bienvenidoAndres}>Bienvenido, Andres!</h3>
      <HorizontalfullWidth
        horizontalfullWidthWidth="1170px"
        horizontalfullWidthPosition="absolute"
        horizontalfullWidthTop="121px"
        horizontalfullWidthLeft="224px"
        horizontalfullWidthHeight="0px"
        horizontalfullWidthTransform="unset"
        horizontalfullWidthTransformOrigin="unset"
      />
    </div>
  );
};

export default Frame1;
