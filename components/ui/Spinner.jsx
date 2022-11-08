import { Text } from '@chakra-ui/react'
import styles from '../../styles/Spinner.module.css'
export const Spinner = () => {
    return (
        <div className={styles.spinner_container}>
            <div className={styles.spinner}>
                <div className={styles.bounce1}></div>
                <div className={styles.bounce2}></div>
                <div className={styles.bounce3}></div>
            </div>
            <Text>Cargando</Text>
        </div>
    )
}
