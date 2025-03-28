type ButtonType = {
    name: string
    callBack?: () => void
}

export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        if (props.callBack) { // Проверяем, есть ли функция callBack
            props.callBack();
        }
    };
    

    return (
        <button onClick={onClickHandler}>{props.name }</button>
    )
}