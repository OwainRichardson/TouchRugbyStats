import styles from './index.module.css';

const MatchButton = (params: any) => {
    return (
        <div className={styles['match-button']} onClick={params.clickFunction}>
            <div className={styles['match-button__content']}>
                {params.buttonText}
            </div>
        </div>
    );
}

export default MatchButton;