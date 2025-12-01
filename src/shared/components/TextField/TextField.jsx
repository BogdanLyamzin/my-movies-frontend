import { useId } from "react";

import styles from "./TextField.module.css";

const TextField = ({label, register, name, rules, type = "text", error, ...props})=> {
    const id = useId();

    return (
        <div>
            {label && <label htmlFor={id} className={styles.label}>{label}</label>}
            <input {...register(name, rules)} type={type} {...props} id={id} className={styles.field} />
            {error && <p className={styles.error}>{error.message}</p>}
        </div>
    )
}

export default TextField;