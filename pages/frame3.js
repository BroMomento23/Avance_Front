import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame3.module.css";

const Frame3 = () => {
  const router = useRouter();

  const onRegistrarButtonClick = useCallback(() => {
    router.push("/frame1");
  }, [router]);

  return (
    <div className={styles.contornoregistrarParent}>
      <button className={styles.contornoregistrar} />
      <div className={styles.nombres}>Nombres</div>
      <div className={styles.apellidos}>Apellidos</div>
      <input className={styles.ingresarnombres} type="text" />
      <input className={styles.ingresarapellidos} type="text" />
      <div className={styles.tipoDeDocumento}>Tipo de documento</div>
      <div className={styles.nroDeDocumento}>Nro de documento</div>
      <input className={styles.ingresardocumentos} type="text" />
      <input className={styles.ingresarnrodocumento} type="text" />
      <div className={styles.sistemaDeReserva}>
        Sistema de reserva de Libros
      </div>
      <div className={styles.registroDeUsuario}>Registro de usuario</div>
      <div className={styles.datosPersonales}>Datos Personales</div>
      <div className={styles.correoElectronico}>Correo Electronico</div>
      <div className={styles.password}>Password</div>
      {/* Cambiamos el tipo de entrada a "password" para el campo de contraseña */}
      <input className={styles.ingresarcorreoelectronico} type="text" />
      {/* Cambiamos el tipo de entrada a "password" para el campo de contraseña */}
      <input className={styles.ingresarpassword} type="password" />
      <div className={styles.ingresePasswordNuevamente}>
        Ingrese password nuevamente
      </div>
      {/* Cambiamos el tipo de entrada a "password" para el campo de contraseña */}
      <input className={styles.ingresarcontradenuevo} type="password" />
      <div className={styles.datosDeLa}>Datos de la cuenta</div>
      <button
        className={styles.registrarbutton}
        onClick={onRegistrarButtonClick}
      >
        Registrar
      </button>
    </div>
  );
};

export default Frame3;

