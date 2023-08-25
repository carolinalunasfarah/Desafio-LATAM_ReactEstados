const SocialButton = ({ fbIcon, ghIcon, liIcon }) => {
    return (
        <>
            <article className="iconsContainer">
                <i className={fbIcon}></i>
                <i className={ghIcon}></i>
                <i className={liIcon}></i>
            </article>
        </>
    );
};

export default SocialButton;
