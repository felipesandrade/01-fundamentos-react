import styles from './Avatar.module.css';

// Desetruturando uma propriedade em um objeto
// Em resumo, tiramos valores de dentro da propriedade sendo possível atribuir valores
// default caso a propriedade esteja sem valor atrinuido. 
export function Avatar({ hasBorder = true, src }) {

    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} 
        />
    );
}