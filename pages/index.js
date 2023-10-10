import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const Frame = () => {
  const router = useRouter();
  const [password, setPassword] = useState(""); // Agregamos un estado para la contraseña

  const onRegistroUsuarioButtonClick = useCallback(() => {
    router.push("/frame3");
  }, [router]);

  const onIngresarButtonClick = useCallback(() => {
    router.push("/frame2");
  }, [router]);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // Actualizamos el estado de la contraseña
  };

  return (
    <div className={styles.sistemaDeReservaDeLibrosParent}>
      <div className={styles.sistemaDeReserva}>Sistema de reserva de Libros</div>
      <button className={styles.olvidemicontrabutton}>Olvidé mi contraseña</button>
      <div className={styles.usuarioOCorreo}>Usuario o correo</div>
      <div className={styles.contrasea}>Contraseña</div>
      <button className={styles.registrousuariobutton} onClick={onRegistroUsuarioButtonClick}>Registro de usuario</button>
      <input className={styles.ingresarusuarioocontra} type="text" />
      {/* Cambiamos el tipo de entrada a "password" y usamos el estado "password" */}
      <input className={styles.ingresarcontra} type="password" value={password} onChange={handlePasswordChange} />
      <div className={styles.ingresarcontorno} />
      <button className={styles.ingresarbutton} onClick={onIngresarButtonClick}>Ingresar</button>
    </div>
  );
};

export default Frame;
