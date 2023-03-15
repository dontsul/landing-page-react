// import { useField } from 'formik';
import { PatternFormat } from 'react-number-format';
import { useField } from 'formik';
import { ErrorMessage } from 'formik';
import styles from './phoneInput.module.scss';
// import styles from './phoneInput.module.scss';

export const PhoneInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    // console.log(meta);
    // console.log(field);
    return (
        <>
            <PatternFormat
                className={styles.input}
                format="+38##########"
                mask="_"
                allowEmptyFormatting
                {...props}
                {...field}
            />

            {/* {meta.touched && meta.error ? <div className={styles.error}>{meta.error}</div> : null} */}
            <label className={styles.label} htmlFor={field.name}>
                +38 (XXX) XXX-XX-XX
            </label>
        </>
    );
};
