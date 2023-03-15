import { ErrorMessage } from 'formik';
import styles from './input.module.scss';
export const Input = ({ field, ...props }) => {
    // console.log(props);
    // console.log(field);
    return (
        <>
            <input className={styles.input} {...field} {...props} />
            <ErrorMessage className={styles.error} name={field.name} component="div" />
        </>
    );
};
